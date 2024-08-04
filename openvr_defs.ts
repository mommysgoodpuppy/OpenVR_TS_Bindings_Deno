export const typeMapping: Record<string, { ffi: Deno.NativeType | Deno.NativeVoidType | Deno.NativeStructType; deno: string; c: string }> = {
    "i8": { ffi: "i8", deno: "number", c: "char" },
    "u8": { ffi: "u8", deno: "number", c: "unsigned char" },
    "i16": { ffi: "i16", deno: "number", c: "short int" },
    "u16": { ffi: "u16", deno: "number", c: "unsigned short int" },
    "i32": { ffi: "i32", deno: "number", c: "int" },
    "u32": { ffi: "u32", deno: "number", c: "unsigned int" },
    "i64": { ffi: "i64", deno: "bigint", c: "long long int" },
    "u64": { ffi: "u64", deno: "bigint", c: "unsigned long long int" },
    "usize": { ffi: "usize", deno: "number | bigint", c: "size_t" },
    "isize": { ffi: "isize", deno: "number | bigint", c: "ssize_t" },
    "f32": { ffi: "f32", deno: "number", c: "float" },
    "f64": { ffi: "f64", deno: "number", c: "double" },
    "void": { ffi: "void", deno: "undefined", c: "void" },
    "pointer": { ffi: "pointer", deno: "Deno.PointerValue", c: "void*" },
    "buffer": { ffi: "buffer", deno: "Uint8Array", c: "uint8_t*" },
    "function": { ffi: "function", deno: "Function", c: "void (*)()" },
    // Adding the new types
    "bool": { ffi: "bool", deno: "boolean", c: "bool" },
    "uint32_t": { ffi: "u32", deno: "number", c: "uint32_t" },
    "uint64_t": { ffi: "u64", deno: "bigint", c: "uint64_t" },
    "int32_t": { ffi: "i32", deno: "number", c: "int32_t" },
    "const char *": { ffi: "pointer", deno: "string", c: "const char *" },
    "char *": { ffi: "pointer", deno: "string", c: "char *" },
    "char *const": { ffi: "pointer", deno: "string", c: "char *const" },
    "float": { ffi: "f32", deno: "number", c: "float" },
    "double": { ffi: "f64", deno: "number", c: "double" }
};

export function fillBuffer(view: DataView, data: any, offset = 0): number {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'boolean') {
            view.setUint8(offset, value ? 1 : 0);
            offset += 1;
        } else if (typeof value === 'number') {
            view.setFloat32(offset, value, true);
            offset += 4;
        } else if (typeof value === 'bigint') {
            view.setBigUint64(offset, value, true);
            offset += 8;
        } else if (Array.isArray(value)) {
            for (const item of value.flat(Infinity)) {
                view.setFloat32(offset, item, true);
                offset += 4;
            }
        } else if (typeof value === 'object') {
            offset = fillBuffer(view, value, offset);
        }
    }
    return offset;
}

export function fillBufferOrdered(view: DataView, data: any, template: any, offset = 0): number {
    for (const [key, value] of Object.entries(template)) {
        if (typeof value === 'boolean') {
            view.setUint8(offset, data[key] ? 1 : 0);
            offset += 1;
        } else if (typeof value === 'number') {
            view.setFloat32(offset, data[key], true);
            offset += 4;
        } else if (typeof value === 'bigint') {
            view.setBigUint64(offset, data[key], true);
            offset += 8;
        } else if (Array.isArray(value)) {
            const flatData = data[key].flat(Infinity);
            for (let i = 0; i < flatData.length; i++) {
                view.setFloat32(offset, flatData[i], true);
                offset += 4;
            }
        } else if (typeof value === 'object') {
            offset = fillBufferOrdered(view, data[key], value, offset);
        }
    }
    return offset;
}

export function readBuffer(view: DataView, template: any, offset = 0): [any, number] {
    const result: any = {};
    for (const [key, value] of Object.entries(template)) {
        if (typeof value === 'boolean') {
            result[key] = view.getUint8(offset) !== 0;
            offset += 1;
        } else if (typeof value === 'number') {
            result[key] = view.getFloat32(offset, true);
            offset += 4;
        } else if (typeof value === 'bigint') {
            result[key] = view.getBigUint64(offset, true);
            offset += 8;
        } else if (Array.isArray(value)) {
            result[key] = [];
            const flatLength = value.flat(Infinity).length;
            for (let i = 0; i < flatLength; i++) {
                result[key].push(view.getFloat32(offset, true));
                offset += 4;
            }
            // Reshape the array if necessary
            if (value.length !== flatLength) {
                result[key] = reshapeArray(result[key], getArrayShape(value));
            }
        } else if (typeof value === 'object') {
            [result[key], offset] = readBuffer(view, value, offset);
        }
    }
    return [result, offset];
}

export function readBufferStructured(view: DataView, template: any, offset = 0): [any, number] {
    const result: any = {};
    let lastFieldType: string | null = null;

    for (const [key, value] of Object.entries(template)) {
        // Align to 8 bytes after a boolean field
        if (lastFieldType === 'boolean') {
            offset = Math.ceil(offset / 8) * 8;
        }

        console.log(`Processing key: ${key}, type: ${typeof value}, current offset: ${offset}`);

        if (typeof value === 'boolean') {
            result[key] = view.getUint8(offset) !== 0;
            offset += 1;
            lastFieldType = 'boolean';
        } else if (typeof value === 'number') {
            if (Number.isInteger(value)) {
                result[key] = view.getInt32(offset, true);
            } else {
                result[key] = view.getFloat32(offset, true);
            }
            offset += 4;
            lastFieldType = 'number';
        } else if (typeof value === 'bigint') {
            result[key] = view.getBigUint64(offset, true);
            offset += 8;
            lastFieldType = 'bigint';
        } else if (Array.isArray(value)) {
            [result[key], offset] = readArrayStructured(view, value, offset);
            lastFieldType = 'array';
        } else if (typeof value === 'object') {
            result[key] = {};
            for (const [subKey, subValue] of Object.entries(value)) {
                if (subKey === 'm' || subKey === 'v') {
                    [result[key][subKey], offset] = subKey === 'm' ? readMatrix(view, subValue, offset) : readVector(view, subValue, offset);
                } else {
                    [result[key][subKey], offset] = readBufferStructured(view, { [subKey]: subValue }, offset);
                    result[key][subKey] = result[key][subKey][subKey];
                }
            }
            lastFieldType = 'object';
        } else {
            throw new Error(`Unknown type: ${typeof value} for key ${key}`);
        }

        console.log(`Finished ${key}, new offset: ${offset}`);
    }
    return [result, offset];
}

function readMatrix(view: DataView, template: number[][], offset: number): [number[][], number] {
    const result = [];
    for (const row of template) {
        const rowData = [];
        for (let i = 0; i < row.length; i++) {
            rowData.push(view.getFloat32(offset, true));
            offset += 4;
        }
        result.push(rowData);
    }
    return [result, offset];
}

function readVector(view: DataView, template: number[], offset: number): [number[], number] {
    const result = [];
    for (let i = 0; i < template.length; i++) {
        result.push(view.getFloat32(offset, true));
        offset += 4;
    }
    return [result, offset];
}

function readArrayStructured(view: DataView, template: any[], offset: number): [any, number] {
    const result = [];
    for (const item of template) {
        if (typeof item === 'number') {
            result.push(view.getFloat32(offset, true));
            offset += 4;
        } else if (Array.isArray(item)) {
            const [subArray, newOffset] = readArrayStructured(view, item, offset);
            result.push(subArray);
            offset = newOffset;
        } else if (typeof item === 'object') {
            const [subObject, newOffset] = readBufferStructured(view, item, offset);
            result.push(subObject);
            offset = newOffset;
        }
    }
    return [result, offset];
}



function readFlatArray(view: DataView, template: any, offset: number): any {
    if ('m' in template) {
        // Matrix
        const result = [];
        for (let i = 0; i < template.m.length; i++) {
            const row = [];
            for (let j = 0; j < template.m[i].length; j++) {
                row.push(view.getFloat32(offset, true));
                offset += 4;
            }
            result.push(row);
        }
        return { m: result };
    } else if ('v' in template) {
        // Vector
        const result = [];
        for (let i = 0; i < template.v.length; i++) {
            result.push(view.getFloat32(offset, true));
            offset += 4;
        }
        return { v: result };
    }
}

function getFlatArrayByteSize(template: any): number {
    if ('m' in template) {
        return template.m.flat().length * 4;
    } else if ('v' in template) {
        return template.v.length * 4;
    }
    return 0;
}

function getArrayByteSize(arr: any[]): number {
    return arr.flat(Infinity).length * 4;
}

function getObjectByteSize(obj: any): number {
    return Object.values(obj).reduce((sum, value) => {
        if (typeof value === 'boolean') return sum + 1;
        if (typeof value === 'number') return sum + 4;
        if (typeof value === 'bigint') return sum + 8;
        if (Array.isArray(value)) return sum + getArrayByteSize(value);
        if (typeof value === 'object') return sum + getObjectByteSize(value);
        return sum;
    }, 0);
}

function getArrayShape(arr: any[]): number[] {
    if (!Array.isArray(arr)) return [];
    return [arr.length, ...getArrayShape(arr[0])];
}

function reshapeArray(flat: any[], shape: number[]): any[] {
    if (shape.length === 1) return flat;
    const result = [];
    const subLength = flat.length / shape[0];
    for (let i = 0; i < shape[0]; i++) {
        result.push(reshapeArray(flat.slice(i * subLength, (i + 1) * subLength), shape.slice(1)));
    }
    return result;
}



function mapOpenVRTypeToDenoFFI(type: string): Deno.NativeType | Deno.NativeVoidType | Deno.NativeStructType {
    const mapped = typeMapping[type]?.ffi;
    if (mapped) return mapped;
    // Default to pointer if not found
    return "pointer";
}


/* export function mapOpenVRTypeToDenoFFI(type: string): Deno.NativeType {
    const typeMap: Record<string, Deno.NativeType> = {
      "uint64_t": "u64",
      "uint32_t": "u32",
      "float": "f32",
      "_Bool": "u8",
      "void": "pointer",
      // Add more mappings as needed
    };
    return typeMap[type] || "pointer";
  } */


export function mapOpenVRTypeToDeno(type: string): string {
    // Remove 'vr::' prefix if present
    const cleanType = type.replace('vr::', '');

    // Check if it's a pointer type
    if (cleanType.endsWith('*')) {
        return 'Deno.PointerValue';
    }

    // Check if it's an enum type
    if (cleanType.startsWith('enum ')) {
        return 'number';
    }

    // Check if it's a struct type
    if (cleanType.startsWith('struct ')) {
        return cleanType.replace('struct ', '');
    }

    // Map C types to Deno types
    for (const [key, value] of Object.entries(typeMapping)) {
        if (value.c === cleanType) {
            return value.deno;
        }
    }

    // If no match found, return the original type
    return type;
}

export type OpenVRType = {
    classname?: string;
    methodname?: string;
    returntype?: string;
    params?: Array<{ paramname: string; paramtype: string }>;
    enumname?: string;
    values?: Array<{ name: string; value: string }>;
    typedef?: string;
    type?: string;
    struct?: string;
    fields?: Array<{ fieldname: string; fieldtype: string }>;
};



export function generateOpenVRBindings(functions: typeof openVRFunctions) {
    let output = `// Auto-generated OpenVR bindings for Deno
  
  const lib = Deno.dlopen("openvr_api.dll", {
  `;

    // Generate symbol definitions
    for (const [funcName, funcDef] of Object.entries(functions)) {
        const paramTypes = funcDef.parameters.map(param => `"${typeMapping[param.type].ffi}"`).join(', ');
        const resultType = `"${typeMapping[funcDef.result].ffi}"`;
        output += `  ${funcName}: { parameters: [${paramTypes}], result: ${resultType} },\n`;
    }

    output += `});\n\n`;

    // Generate TypeScript function declarations
    for (const [funcName, funcDef] of Object.entries(functions)) {
        const params = funcDef.parameters.map(param =>
            `${param.name}: ${typeMapping[param.type].deno}`
        ).join(', ');
        let returnType = typeMapping[funcDef.result].deno;

        output += `export function ${funcName}(${params}): ${returnType} {\n`;
        output += `  return lib.symbols.${funcName}(${funcDef.parameters.map(p => p.name).join(', ')}) as ${returnType};\n`;
        output += `}\n\n`;
    }

    return output;
}

enum EVRInitError {
    None = 0,
    // ... other error codes
}
enum EVRApplicationType {
    Other = 0,
    // ... other application types
}
type InterfaceVersionStringPointer = Deno.PointerObject<string>;
type EVRInitErrorPointer = Deno.PointerObject<EVRInitError>;

const symbols = {
    VR_InitInternal: {
        parameters: ["pointer", "i32"] as [EVRInitErrorPointer, EVRApplicationType],
        result: "pointer" as Deno.PointerValue<unknown>,
    },
    VR_ShutdownInternal: {
        parameters: [] as [],
        result: "void",
    },
    VR_IsHmdPresent: {
        parameters: [] as [],
        result: "bool",
    },
    VR_GetGenericInterface: {
        parameters: ["pointer", "pointer"] as [InterfaceVersionStringPointer, EVRInitErrorPointer],
        result: "pointer" as PointerValue<unknown>, // intptr_t return type
    },
    VR_IsRuntimeInstalled: {
        parameters: [] as [],
        result: "bool",
    },
    VR_GetVRInitErrorAsSymbol: {
        parameters: ["i32"] as [EVRInitError],
        result: "pointer" as PointerValue<string>, // char* return type
    },
    VR_GetVRInitErrorAsEnglishDescription: {
        parameters: ["i32"] as [EVRInitError],
        result: "pointer" as PointerValue<string>, // char* return type
    },
};


const dylib = Deno.dlopen("openvr_api.dll", symbols);