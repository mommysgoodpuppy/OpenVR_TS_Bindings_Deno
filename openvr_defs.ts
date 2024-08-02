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
    "char *": { ffi: "pointer", deno: "string", c: "char *" },
    "char *const": { ffi: "pointer", deno: "string", c: "char *const" },
};



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