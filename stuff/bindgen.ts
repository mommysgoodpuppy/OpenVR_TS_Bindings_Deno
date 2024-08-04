// deno-lint-ignore-file no-case-declarations
// codegen.ts

let globalStructs: any[] = [];
const definedTypes = new Map<string, string>;
const definedEnums = new Set<string>();
const definedStructs = new Map<string, string>;
const customStructs = new Set<string>();
let anonymousInterfaceCount = 0;
const customTypes: Record<string, string> = {};
const definedFFIMethods = new Set<string>();
const specialUnionTypes = new Set([
    "VREvent_Data_t",
    "VROverlayIntersectionMaskPrimitive_Data_t"
]);



  

//#region helpers


function registerCustomType(name: string, baseType: string) {
    customTypes[name] = baseType;
}
function isPrimitiveType(type: string): boolean {
    const primitiveTypes = [
        'float', 'f32', 'double', 'f64',
        'int', 'i32', 'int32_t', 'uint32_t', 'u32',
        'int64_t', 'i64', 'uint64_t', 'u64',
        'short', 'i16', 'uint16_t', 'u16',
        'char', 'i8', 'uint8_t', 'u8',
        'bool', '_bool', 'int8_t',
        'long', 'unsigned long',
        'long long', 'unsigned long long',
        'size_t', 'intptr_t', 'uintptr_t',
        'number', 'bigint'
    ];
    const trimmedType = type.trim().toLowerCase().replace(/\bconst\b/g, '').trim();
    console.log(`isPrimitiveType input: "${type}", trimmed: "${trimmedType}"`);
    const result = primitiveTypes.includes(trimmedType) || trimmedType.endsWith('*');
    console.log(`isPrimitiveType("${type}") => ${result}`);
    return result;
}
function isDefinedType(type: string): boolean {
    return definedTypes.has(type) || definedTypes.has(`vr::${type}`);
}
function isEnumType(type: string): boolean {
    // Remove any 'enum ' prefix and 'vr::' namespace
    const cleanType = type.replace(/^enum\s+/, '').replace(/^vr::/, '');
    return definedEnums.has(cleanType) || definedEnums.has(`vr::${cleanType}`);
}
function isStructType(fieldType: string): boolean {
    return fieldType.startsWith('struct ') || globalStructs.some(s => s.struct === fieldType || s.struct === `vr::${fieldType}`) || definedStructs.has(fieldType);
}
function getStructFFIType(structName: string): string {
    const struct = globalStructs.find(s => s.struct === structName || s.struct === `vr::${structName}`);
    if (!struct) return "{}";

    const fieldsFFI = struct.fields.map(field => {
        if (field.fieldtype.startsWith("struct")) {
            // If fieldtype already starts with "{ struct:", it's a nested struct representation
            return getStructFFIType(field.fieldtype.replace("struct ", ""))
        } else {
            // Convert the field type to its FFI representation and wrap it in quotes
            return `"${convertToFFIType(field.fieldtype)}"`;
        }
    }).join(", ");

    return `{ struct: [${fieldsFFI}] }`;
}
function getStructFields(structName: string): string {
    // Remove "vr::" prefix if present in the input structName
    const cleanStructName = structName.replace("vr::", "");

    // Find the struct, considering both with and without "vr::" prefix
    const struct = globalStructs.find((s: any) =>
        s.struct === structName ||
        s.struct === `vr::${cleanStructName}` ||
        s.struct.replace("vr::", "") === cleanStructName
    );

    if (!struct) {
        //console.warn(`Struct definition not found for ${structName}`);
        return "";
    }

    return struct.fields.map((field: any) => {
        const fieldType = convertToFFIType(field.fieldtype);
        //console.log(`${cleanStructName} Field ${field.fieldname}: ${field.fieldtype} -> ${fieldType}`);
        return `"${fieldType}"`; // Add quotes around fieldType
    }).join(", ");
}
function getStructName(fullName: string): string {
    return fullName.replace("vr::", "").replace("struct ", "");
}
function getFieldType(fullType: string): string {
    return fullType.replace("vr::", "").replace(/^struct\s+/, "");
}
function getTypeByteLength(fieldType: string, structMap: Map<string, any>): number {
    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = arrayMatch[1];
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            let size = getTypeByteLength(baseType, structMap);
            for (const dim of dimensions) {
                size *= parseInt(dim.slice(1, -1));
            }
            return size;
        }
    }
    if (definedTypes.has(fieldType)) {
        return getTypeByteLength(definedTypes.get(fieldType)!, structMap);
    }

    switch (fieldType) {
        case "float": return 4;
        case "double": return 8;
        case "number": return 4;
        case "char": return 1;
        case "int": return 4;
        case "bigint": return 8;
        case "int32_t": return 4;
        case "uint16_t": return 2;
        case "uint32_t": return 4;
        case "uint64_t": return 8;
        case "_Bool": return 1;
        case "enum vr::ETrackingResult": return 4;
        default:
            // Assume it's a custom struct
            if (fieldType.startsWith("enum ")) return 4;
            if (fieldType.endsWith("*")) return 8;
            if (fieldType == 'VREvent_Data_t') return 0;
            if (fieldType == 'VROverlayIntersectionMaskPrimitive_Data_t') return 0;

            const a = structMap.has(fieldType) ? calculateByteLength(structMap.get(fieldType).fields, structMap) : 0;
            if (a == 0) debugger;
            return a
    }
}
function getInitialValue(fieldType: string, structMap: Map<string, any>): string {
    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = arrayMatch[1];
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            return generateNestedArrayInitializer(baseType, dimensions, structMap);
        }
    }

    switch (fieldType) {
        case "float":
        case "double":
        case "int":
        case "char":
        case "number":
            return "0";
        case "bigint":
            return "0n";
        case "uint16_t":
            return "0";
        case "int16_t":
            return "0";
        case "int32_t":
            return "0";
        case "uint32_t":
            return "0";
        case "uint64_t":
            return "0n";
        case "_Bool":
            return "false";
        case "enum vr::ETrackingResult":
            return "0";
        default:
            if (definedTypes.has(fieldType)) {
                return `${getInitialValue(definedTypes.get(fieldType)!, new Map())}`;
            }
            if (fieldType.endsWith("*")) return "0n";
            if (fieldType.startsWith("enum")) return `Object.values(${fieldType.replace("enum ", "").replace("vr::", "")})[0] as ${fieldType.replace("enum ", "").replace("vr::", "")}`;
            if (fieldType == 'VREvent_Data_t') return "new VREvent_Data_t()";
            if (fieldType == 'VROverlayIntersectionMaskPrimitive_Data_t') return "new VROverlayIntersectionMaskPrimitive_Data_t()";
            const a = structMap.has(fieldType) ? `new ${fieldType}()` : "null";
            if (a == "null") debugger;
            return structMap.has(fieldType) ? `new ${fieldType}()` : "null";
    }
}
function getTypeSizeAndAlignment(fieldType: string): [number, number] {
    if (isPrimitiveType(fieldType)) {
        const size = getPrimitiveSize(fieldType);
        return [size, size]; // For primitives, size and alignment are typically the same
    } else if (isEnumType(fieldType)) {
        return [4, 4]; // Enums are typically 4 bytes
    } else if (isDefinedType(fieldType)) {
        const baseType = getBaseType(fieldType);
        return getTypeSizeAndAlignment(baseType);
    } else if (isStructType(fieldType)) {
        // Handle nested structs
        const structName = fieldType.startsWith('struct ') ? fieldType.split(' ')[1] : fieldType;
        const size = calculateStructSize(structName);
        return [size, 8]; // Assuming 8-byte alignment for structs
    } else {
        if (fieldType == "VREvent_Data_t") {
            // Handle special case
            return [0, 1]; // Placeholder values, adjust as needed
        }
        else if (fieldType == "VROverlayIntersectionMaskPrimitive_Data_t") {
            // Handle special case
            return [0, 1]; // Placeholder values, adjust as needed
        }
        else {
            throw new Error(`Unable to determine size for field type: ${fieldType}`);
        }
    }
}
function getSetterMethod(type: string): string {
    const setterMethods: { [key: string]: string } = {
        'float': 'Float32',
        'double': 'Float64',
        'int': 'Int32',
        'short': 'Int16',
        'char': 'Int8',
        'uint32_t': 'Uint32',
        'uint64_t': 'BigUint64',
        'int64_t': 'BigInt64',
    };

    return setterMethods[type] || 'Uint8';
}
function getPrimitiveSize(type: string): number {
    const sizes: { [key: string]: number } = {
        'float': 4, 'f32': 4, 'double': 8, 'f64': 8,
        'int': 4, 'i32': 4, 'int32_t': 4, 'uint32_t': 4, 'u32': 4,
        'int64_t': 8, 'i64': 8, 'uint64_t': 8, 'u64': 8,
        'short': 2, 'i16': 2, 'uint16_t': 2, 'u16': 2,
        'char': 1, 'i8': 1, 'uint8_t': 1, 'u8': 1, 'int8_t': 1,
        'bool': 1, '_bool': 1,
        'long': 8, 'unsigned long': 8,
        'long long': 8, 'unsigned long long': 8,
        'size_t': 8, 'intptr_t': 8, 'uintptr_t': 8,
        'number': 4, 'bigint': 8
    };


    const trimmedType = type.trim().toLowerCase().replace(/\bconst\b/g, '').trim();

    if (trimmedType.endsWith('*')) {
        return 8; // All pointers are 8 bytes (64-bit)
    }

    const size = sizes[trimmedType];
    if (size === undefined) {
        //throw new Error(`Unknown primitive type: ${type}`);
    }
    return size;
}
function getBaseType(type: string): string {
    let currentType = type;
    while (isDefinedType(currentType)) {
        currentType = definedTypes.get(currentType) ?? definedTypes.get(`vr::${currentType}`)?? currentType;
    }
    return currentType;
}
function structToObject2(structType: string, pointerName: string): string {
    const cleanStructName = structType.replace("vr::", "");
    const struct = globalStructs.find((s: any) =>
        s.struct === structType ||
        s.struct === `vr::${cleanStructName}` ||
        s.struct.replace("vr::", "") === cleanStructName
    );

    if (!struct) {
        return `${pointerName} as ${structType}`;  // Cast to the struct type
    }

    let output = "{\n";
    struct.fields.forEach((field: any, index: number) => {
        const fieldName = field.fieldname;
        const fieldType = field.fieldtype;

        if (fieldType.includes("[")) {
            // Handle array types
            const [baseType, ...dimensions] = fieldType.split("[").map((s: string) => s.replace("]", ""));
            let arrayAccess = `(    ${pointerName} as any)[${index}]`;
            dimensions.forEach((dim: any, i: any) => {
                if (dim) {
                    arrayAccess = `Array(${dim}).fill(0).map((_, i${i}) => ${arrayAccess}[i${i}])`;
                }
            });
            output += `      ${fieldName}: ${arrayAccess},\n`;
        } else {
            // Handle non-array types
            output += `      ${fieldName}: (${pointerName} as any)[${index}],\n`;
        }
    });
    output += `    } as ${structType}`;

    return output;
}
function normalizeTypeName(type: string): string {
    const originalType = type;
    // Remove any 'const' or 'volatile' qualifiers
    type = type.replace(/\b(const|volatile)\b/g, '').trim();

    // Handle some C++ to C type conversions
    const typeMap: { [key: string]: string } = {
        'bool': '_Bool',
        // Add more mappings if needed
    };

    const result = typeMap[type] || type;
    console.log(`normalizeTypeName("${originalType}") => "${result}"`);
    return result;
}
function calculateByteLength(fields: any[], structMap: Map<string, any>): number {
    let totalLength = 0;
    for (const field of fields) {
        let fieldType = getFieldType(field.fieldtype);
        totalLength += getTypeByteLength(fieldType, structMap);
    }
    return totalLength;
}


//#endregion

//#region conversion

const typeMapping: Record<string, string> = {
    // Basic types
    "uint32_t": "number",
    "int32_t": "number",
    "uint64_t": "bigint",
    "int64_t": "bigint",
    "double": "number",
    "void *": "Deno.PointerValue",
    "const char*": "string",
    "const char *": "string",

    // Custom typedefs
    "vr::PropertyTypeTag_t": "number",
    "vr::vrshared_uint64_t": "bigint",
    "vr::vrshared_double": "number",
    "vr::SpatialAnchorHandle_t": "number",
    "vr::glSharedTextureHandle_t": "Deno.PointerValue",
    "vr::glInt_t": "number",
    "vr::glUInt_t": "number",
    "vr::SharedTextureHandle_t": "bigint",
    "vr::DriverId_t": "number",
    "vr::TrackedDeviceIndex_t": "number",
    "vr::WebConsoleHandle_t": "bigint",
    "vr::PropertyContainerHandle_t": "bigint",
    "vr::DriverHandle_t": "bigint",
    "vr::VRActionHandle_t": "bigint",
    "vr::VRActionSetHandle_t": "bigint",
    "vr::VRInputValueHandle_t": "bigint",
    "vr::VREvent_Data_t": "VREvent_Data_t", // Assuming you have this interface defined
    "vr::VRComponentProperties": "number",
    "vr::VRControllerState_t": "VRControllerState001_t", // Assuming you have this interface defined
    "vr::VROverlayHandle_t": "bigint",
    "vr::BoneIndex_t": "number",
    "vr::TrackedCameraHandle_t": "bigint",
    "vr::ScreenshotHandle_t": "number",
    "vr::VROverlayIntersectionMaskPrimitive_Data_t": "VROverlayIntersectionMaskPrimitive_Data_t", // Assuming you have this interface defined
    "vr::TextureID_t": "number",
    "vr::VRNotificationId": "number",
    "vr::IOBufferHandle_t": "bigint",
    "vr::VrProfilerEventHandle_t": "bigint",
    "vr::PathHandle_t": "bigint",

    // Enum types
    "vr::HmdError": "EVRInitError",
    "vr::Hmd_Eye": "EVREye",
    "vr::ColorSpace": "EColorSpace",
    "vr::HmdTrackingResult": "ETrackingResult",
    "vr::TrackedDeviceClass": "ETrackedDeviceClass",
    "vr::TrackingUniverseOrigin": "ETrackingUniverseOrigin",
    "vr::TrackedDeviceProperty": "ETrackedDeviceProperty",
    "vr::TrackedPropertyError": "ETrackedPropertyError",
    "vr::VRSubmitFlags_t": "EVRSubmitFlags",
    "vr::VRState_t": "EVRState",
    "vr::CollisionBoundsStyle_t": "ECollisionBoundsStyle",
    "vr::VROverlayError": "EVROverlayError",
    "vr::VRFirmwareError": "EVRFirmwareError",
    "vr::VRCompositorError": "EVRCompositorError",
    "vr::VRScreenshotsError": "EVRScreenshotError",
};
const EnumtypeMapping: Record<string, string> = {
    "vr::EVRInitError": "i32",
    "vr::EVREye": "i32",
    "vr::EColorSpace": "i32",
    "vr::ETrackingResult": "i32",
    "vr::ETrackedDeviceClass": "i32",
    "vr::ETrackingUniverseOrigin": "i32",
    "vr::ETrackedDeviceProperty": "i32",
    "vr::ETrackedPropertyError": "i32",
    "vr::EVRSubmitFlags": "i32",
    "vr::EVRState": "i32",
    "vr::ECollisionBoundsStyle": "i32",
    "vr::EVROverlayError": "i32",
    "vr::EVRFirmwareError": "i32",
    "vr::EVRCompositorError": "i32",
    "vr::EVRScreenshotError": "i32",
    "vr::EVREventType": "i32",
}
const ffiTypeMapping: Record<string, string> = {
    "vr::vrshared_uint64_t": "u64",
    "vr::vrshared_double": "f64",
    "vr::SpatialAnchorHandle_t": "u32",
    "vr::glSharedTextureHandle_t": "pointer", // void*
    "vr::glInt_t": "i32",
    "vr::glUInt_t": "u32",
    "vr::SharedTextureHandle_t": "u64",
    "vr::DriverId_t": "u32",
    "vr::TrackedDeviceIndex_t": "u32",
    "vr::WebConsoleHandle_t": "u64",
    "vr::PropertyContainerHandle_t": "u64",
    "vr::PropertyTypeTag_t": "u32",
    "vr::DriverHandle_t": "u64",
    "vr::VRActionHandle_t": "u64",
    "vr::VRActionSetHandle_t": "u64",
    "vr::VRInputValueHandle_t": "u64",
    "vr::VREvent_Data_t": "pointer", // union -> pointer
    "vr::VRComponentProperties": "u32",
    "vr::VRControllerState_t": "pointer", // struct -> pointer
    "vr::VROverlayHandle_t": "u64",
    "vr::BoneIndex_t": "i32",
    "vr::TrackedCameraHandle_t": "u64",
    "vr::ScreenshotHandle_t": "u32",
    "vr::VROverlayIntersectionMaskPrimitive_Data_t": "pointer", // union
    "vr::TextureID_t": "i32",
    "vr::VRNotificationId": "u32",
    "vr::IOBufferHandle_t": "u64",
    "vr::VrProfilerEventHandle_t": "u64",
    "vr::ETrackedControllerRole": "i32", // enum
    "vr::HmdError": "i32", // enum -> i32
    "vr::Hmd_Eye": "i32", // enum -> i32
    "vr::ColorSpace": "i32", // enum -> i32
    "vr::HmdTrackingResult": "i32", // enum
    "vr::TrackedDeviceClass": "i32", // enum
    "vr::TrackingUniverseOrigin": "i32", // enum
    "vr::TrackedDeviceProperty": "i32", // enum
    "vr::TrackedPropertyError": "i32", // enum
    "vr::VRSubmitFlags_t": "i32", // enum
    "vr::VRState_t": "i32", // enum
    "vr::CollisionBoundsStyle_t": "i32", // enum
    "vr::VROverlayError": "i32", // enum
    "vr::VRFirmwareError": "i32", // enum
    "vr::VRCompositorError": "i32", // enum
    "vr::VRScreenshotsError": "i32", // enum
    "vr::PathHandle_t": "u64",
};
function resolveType(type: string, isOutParam: boolean = false): string {

    if (type.includes("const")) {
        type = type.replace("const", "").trim();
    }
    type = type.replace(/\bconst\b/g, "").replace(/^struct\s+/, "").replace(/^vr::/, "").trim();

    if (type === "void *" || type === "void*" || type === "void **") {
        return "Uint8Array";
    }
    if (type === "void") {
        if (isOutParam) return "void";
        else return "Uint8Array";
    }

    // Handle pointers
    const isPointer = type.endsWith("*");
    if (isPointer) {
        type = type.slice(0, -1).trim();
    }
    const isPointer2 = type.endsWith("*");
    if (isPointer2) {
        type = type.slice(0, -1).trim();
    }

    // Use mapped type or original if not found
    let resolvedType = typeMapping[type] || type;

    if (resolvedType === "float" || resolvedType === "double" || resolvedType === "int" || resolvedType === "unsigned short") {
        resolvedType = "number";
    } else if (resolvedType === "bool") {
        resolvedType = "boolean";
    } else if (resolvedType === "char") {
        resolvedType = "string";
    }

    // Handle output parameters
    if (isPointer && isOutParam) {

        if (resolvedType === "number") {
            return "number";
        } else if (resolvedType === "bigint") {
            return "bigint";
        } else if (customStructs.has(resolvedType)) {
            return resolvedType;
        }
    }

    return resolvedType;
}
function convertDefinedType(fieldType: string, structMap: Map<string, any>): string {
    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = convertDefinedType(arrayMatch[1], structMap);
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            return `${baseType}${'[]'.repeat(dimensions.length)}`;
        }
    }
    if (definedTypes.has(fieldType)) {
        return definedTypes.get(fieldType)!;
    }

    switch (fieldType) {
        case "float":
        case "double":
        case "int":
        case "char":
        case "int32_t":
            return "number";
        case "uint16_t":
            return "number";
        case "uint32_t":
            return "number";
        case "uint64_t":
            return "bigint";
        case "_Bool":
            return "boolean";
        case "enum vr::ETrackingResult":
            return "ETrackingResult";
        default:
            if (fieldType.startsWith("enum")) {
                return fieldType.replace("enum ", "").replace("vr::", "");
            }
            if (fieldType.endsWith("*")) {
                return "bigint";
            }
            if (fieldType == 'VREvent_Data_t') return "VREvent_Data_t";
            if (fieldType == 'VROverlayIntersectionMaskPrimitive_Data_t') return "VROverlayIntersectionMaskPrimitive_Data_t";
            const a = structMap.has(fieldType) ? fieldType : "any";
            if (a == "any") debugger;
            return structMap.has(fieldType) ? fieldType : "any";
    }
}
function convertBasicFFiTypeToTS(fieldType: string, structMap: Map<string, any>): string {
    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = convertDefinedType(arrayMatch[1], structMap);
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            return `${baseType}${'[]'.repeat(dimensions.length)}`;
        }
    }
    if (definedTypes.has(fieldType)) {
        return fieldType;
    }

    switch (fieldType) {
        case "float":
        case "double":
        case "int":
        case "char":
        case "int32_t":
            return "number";
        case "uint16_t":
            return "number";
        case "uint32_t":
            return "number";
        case "uint64_t":
            return "bigint";
        case "_Bool":
            return "boolean";
        case "enum vr::ETrackingResult":
            return "ETrackingResult";
        default:
            if (fieldType.startsWith("enum")) {
                return fieldType.replace("enum ", "").replace("vr::", "");
            }
            if (fieldType.endsWith("*")) {
                return "bigint";
            }
            if (fieldType == 'VREvent_Data_t') return "VREvent_Data_t";
            if (fieldType == 'VROverlayIntersectionMaskPrimitive_Data_t') return "VROverlayIntersectionMaskPrimitive_Data_t";
            const a = structMap.has(fieldType) ? fieldType : "any";
            //if (a == "any") debugger;
            return structMap.has(fieldType) ? fieldType : "any";
    }
}
function convertDefinedTypeTypedefs(type: string): string {
    const typeMap: Record<string, string> = {
        "uint16_t": "number",
        "int16_t": "number",
        "uint32_t": "number",
        "int32_t": "number",
        "uint64_t": "bigint",
        "int64_t": "bigint",
        "float": "number",
        "double": "number",
        "bool": "boolean",
        "char": "number",
        "char *": "string",
        "void": "void",
        "void *": "Deno.PointerValue",
        "_Bool": "boolean",
    };

    // Remove 'vr::' prefix if present
    type = type.replace("vr::", "");

    // Remove 'union' keyword if present
    type = type.replace(/^union\s+/, "");

    // Check if it's a pointer type
    if (type.endsWith("*")) {
        return "Deno.PointerValue";
    }

    // Check if it's an enum type
    if (type.startsWith("enum ")) {
        return type.replace("enum ", "");
    }
    if (type.startsWith("struct")) {
        return type.replace("struct", "");
    }

    // Special handling for union types
    if (specialUnionTypes.has(type)) {
        return `Partial<I${type}>`;
    }

    return typeMap[type] || type;
}
function convertToFFIType(type: string): string {
    if (type.endsWith("*")) {
        return "pointer";
    }
    if (type.startsWith("struct")) {

        const structName = type.replace("struct ", "").trim();

        try {
            const structNameWithoutVR = structName.replace("vr::", "");
            return `{ struct: [${getStructFields(structName)}] }`;
        } catch (error) {
            console.warn(`Unknown struct: ${structName}`);
            return "XXX";
        }
    }

    const typeMap: Record<string, string> = {
        "uint32_t": "u32",
        "int32_t": "i32",
        "uint64_t": "u64",
        "int64_t": "i64",
        "float": "f32",
        "double": "f64",
        "unsigned short": "u16",
        "bool": "u8",
        "int": "i32",
        "void *": "pointer",
        "const char *": "pointer",
        "char *": "pointer",
        "void": "void",
    };

    const arrayMatch = type.match(/(\w+)\s*(\[.*\])/);
    if (arrayMatch) {
        const baseType = arrayMatch[1];
        const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
        const totalElements = dimensions.reduce((acc, dim) => acc * parseInt(dim.slice(1, -1)), 1);
        const elementType = typeMap[baseType];
        return `${new Array(totalElements).fill(elementType).join('","')}`;
    }



    if (type.startsWith("vr::E")) {
        if (type.endsWith("*")) {
            return "pointer";
        }

        return "i32";
    }

    // 2. Check for Enum Match without "vr::"
    const typeWithoutVR = type.replace("vr::", "");
    if (typeWithoutVR in EnumtypeMapping) {
        return EnumtypeMapping[typeWithoutVR];
    }


    if (!(type in ffiTypeMapping) && !(type in typeMap) && !definedEnums.has(type) && !definedTypes.has(type)) {

        console.log("Unknown type: " + type);
        throw new Error("Unknown type: " + type);

    }
    let r
    if (definedEnums.has(type)) {
        r = "i32";
    }
    else if (definedTypes.has(type)) {

        r = definedTypes.get(type) || typeMap[type] || "XX";
        r = ffiTypeMapping[r] || typeMap[r] || "XX";
        r = definedTypes.get(type) || typeMap[type] || "XX";
        r = definedTypes.get(type) || ffiTypeMapping[r] || typeMap[r] || "XX";
        r = definedTypes.get(type) || ffiTypeMapping[r] || typeMap[r] || "XX";


    }
    else { r = ffiTypeMapping[type] || typeMap[type] || "XX"; }

    if (r == "PropertyContainerHandle_t") return "u64"
    if (r == "bigint") return "u64"

    // 3. Handle Standard Types and Pointers:
    return r
}
function convertConstType(type: string): string {
    // Remove 'const' and trim whitespace
    type = type.replace(/\bconst\b/g, "").trim();

    // Check if it's a custom type
    if (customTypes[type]) {
        return customTypes[type];
    }

    const typeMap: Record<string, string> = {
        "uint32_t": "number",
        "int32_t": "number",
        "uint64_t": "bigint",
        "int64_t": "bigint",
        "float": "number",
        "double": "number",
        "bool": "boolean",
        "char *": "string",
        "char*": "string",
        "PropertyContainerHandle_t": "number",
        "PropertyTypeTag_t": "number",
    };

    // Check if it's a string type (contains "char")
    if (type.includes("char")) {
        return "string";
    }

    // Check if the type is a pointer (ends with *)
    if (type.endsWith("*")) {
        return "Deno.PointerValue";
    }

    const a = typeMap[type] || "any"
    if (a === "any") debugger

    return typeMap[type] || "any"; // Default to any for unknown types
}
function calculateStructSize(structName: string): number {
    let struct = globalStructs.find(s => s.struct === structName || s.struct === `vr::${structName}`);
    if (definedStructs.has((structName as any).struct)) {
        struct = structName;
    }

    if (!struct) {
        throw new Error(`Unknown struct type: ${structName}`);
    }

    let size = 0;
    let maxAlignment = 1;

    struct.fields.forEach((field: any) => {
        let fieldType = normalizeTypeName(field.fieldtype);
        let fieldSize: number;
        let fieldAlignment: number;

        if (fieldType.includes('[')) {
            [fieldSize, fieldAlignment] = calculateArraySizeAndAlignment(fieldType);
        } else if (isStructType(fieldType)) {
            const nestedStructName = fieldType.startsWith('struct ') ? fieldType.split(' ')[1] : fieldType;
            fieldSize = calculateStructSize(nestedStructName);
            fieldAlignment = 8; // Assume 8-byte alignment for structs
        } else {
            if (fieldType == "VREvent_Data_t") { }
            else if (fieldType == "VROverlayIntersectionMaskPrimitive_Data_t") { }
            else[fieldSize, fieldAlignment] = getTypeSizeAndAlignment(fieldType);
        }

        // Align the current size
        size = Math.ceil(size / fieldAlignment) * fieldAlignment;
        size += fieldSize;
        maxAlignment = Math.max(maxAlignment, fieldAlignment);
    });

    // Final alignment of the entire struct
    size = Math.ceil(size / maxAlignment) * maxAlignment;

    return size;
}
function calculateArraySizeAndAlignment(fieldType: string): [number, number] {
    const matches = fieldType.match(/(\w+)\s*(\[(\d+)\])+/);
    if (!matches) {
        throw new Error(`Invalid array type: ${fieldType}`);
    }

    const baseType = matches[1];
    const dimensions = fieldType.match(/\[(\d+)\]/g)?.map(dim => parseInt(dim.slice(1, -1)));
    const [elementSize, elementAlignment] = getTypeSizeAndAlignment(baseType);

    const totalSize = dimensions?.reduce((acc, dim) => acc * dim, elementSize);
    if (totalSize === undefined) throw new Error(`Unable to calculate array size for type: ${fieldType}`);
    return [totalSize, elementAlignment];
}

//#endregion

//#region output

function outputTypedefs(data: any): string {

    let output = "";
    for (const typedef of data.typedefs) {
        const name = typedef.typedef.replace("vr::", "");
        if (!definedTypes.has(name)) {
            let type = typedef.type.replace("vr::", "");

            // Remove 'struct' and 'union' keywords if present
            type = type.replace(/^(struct|union)\s+/, "");

            // Convert the type
            const convertedType = convertDefinedTypeTypedefs(type);

            // Skip if it's a special union type (we'll handle these separately)
            if (!specialUnionTypes.has(name)) {
                output += `export type ${name} = ${convertedType};\n`;
                definedTypes.set(name, convertedType);

                // Register custom type
                registerCustomType(name, convertedType);
            }
        }
    }
    return output + "\n";
}
function outputEnums(data: any): string {
    let output = "";
    for (const enumDef of data.enums) {
        definedEnums.add(enumDef.enumname);
        const enumName = enumDef.enumname.replace("vr::", "");
        output += `export enum ${enumName} {\n`;
        for (const value of enumDef.values) {
            output += `  ${value.name} = ${value.value},\n`;
        }
        output += "}\n\n";
    }
    return output;
}
function outputConstants(data: any): string {
    let output = "";
    for (const constDef of data.consts) {
        const constType = convertConstType(constDef.consttype);
        let constValue = constDef.constval;

        if (constType === "string") {
            // Wrap string values in quotes
            constValue = `"${constValue}"`;
        } else if (constType === "number") {
            // Ensure the value is treated as a number
            constValue = `${constValue}`;
            if (constDef.consttype.includes("uint")) {
                // For unsigned integers, use the >>> 0 operator
                constValue += " >>> 0";
            }
        } else if (constType === "bigint") {
            // Ensure the value is treated as a BigInt
            constValue = `${constValue}n`;
        } else if (constType === "Deno.PointerValue") {
            // For pointer types, we might want to handle this differently
            // For now, let's wrap it in quotes as it's likely a string constant
            constValue = `"${constValue}"`;
        }

        output += `export const ${constDef.constname}: ${constType} = ${constValue};\n`;
    }
    return output + "\n";
}

//#region STRUCTS
//another big one
function outputStructs(data: any): string {
    // First, create a map of all struct names to their definitions
    const structMap = new Map<string, any>();
    for (const structDef of data.structs) {
        definedStructs.set(structDef.struct, structDef.fields);
        const structName = getStructName(structDef.struct);
        structMap.set(structName, structDef);
    }

    // Now, generate the class definitions
    let output = "";
    for (const structDef of data.structs) {
        let structName = getStructName(structDef.struct);
        if (structName === "(anonymous)") {
            structName = `AnonymousStruct_${++anonymousInterfaceCount}`;
        }
        output += outputStructs_generateClassDefinition(structName, structDef, structMap);
    }

    return output;
}
function outputStructs_generateClassDefinition(structName: string, structDef: any, structMap: Map<string, any>): string {
    let output = ""

    output += `/*${JSON.stringify(structDef, null, 2)}*/\n`;
    output += `export class ${structName} {\n`;

    // Static byteLength
    output += `  static readonly byteLength = ${calculateByteLength(structDef.fields, structMap)};\n\n`;

    // Fields
    for (const field of structDef.fields) {
        const fieldType = getFieldType(field.fieldtype);
        const typeString = convertBasicFFiTypeToTS(fieldType, structMap);
        output += `  ${field.fieldname}: ${typeString};\n`;
    }

    // Constructor
    output += `\n  constructor() {\n`;
    for (const field of structDef.fields) {
        const fieldType = getFieldType(field.fieldtype);
        const initialValue = getInitialValue(fieldType, structMap);
        output += `    this.${field.fieldname} = ${initialValue};\n`;
    }
    output += `  }\n\n`;

    // fromBuffer method
    output += `  static fromBuffer(buffer: ArrayBuffer, offset: number): ${structName} {\n`;
    output += `    const view = new DataView(buffer, offset);\n`;
    output += `    const result = new ${structName}();\n`;
    output += `    let currentOffset = 0;\n\n`;

    for (const field of structDef.fields) {
        const fieldType = getFieldType(field.fieldtype);
        output += generateFromBufferCode(field.fieldname, fieldType, "result", "currentOffset", structMap);
    }

    output += `    return result;\n`;
    output += `  }\n\n`;

    // toBuffer method
    output += `  toBuffer(buffer: ArrayBuffer, offset: number): void {\n`;
    output += `    const view = new DataView(buffer, offset);\n`;
    output += `    let currentOffset = 0;\n\n`;

    for (const field of structDef.fields) {
        const fieldType = getFieldType(field.fieldtype);
        output += generateToBufferCode(field.fieldname, fieldType, "this", "currentOffset", structMap);
    }

    output += `  }\n`;

    output += "}\n\n";

    return output;
}
function generateNestedArrayInitializer(baseType: string, dimensions: string[], structMap: Map<string, any>): string {
    if (dimensions.length === 0) {
        return getInitialValue(baseType, structMap);
    }

    const size = parseInt(dimensions[0].slice(1, -1));
    const inner = generateNestedArrayInitializer(baseType, dimensions.slice(1), structMap);
    return `Array(${size}).fill(null).map(() => ${inner})`;
}
function generateToBufferCode(fieldName: string, fieldType: string, objectName: string, offsetVar: string, structMap: Map<string, any>): string {
    let code = "";

    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = arrayMatch[1];
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            code += generateNestedArrayToBufferCode(fieldName, baseType, dimensions, objectName, offsetVar, structMap);
        }
    } else {
        if (fieldType.startsWith("enum ")) {
            code += `    view.setInt32(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
            code += `    ${offsetVar} += 4;\n`;
        }
        else if (fieldType.endsWith("*")) {
            code += `    view.setBigUint64(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
            code += `    ${offsetVar} += 8;\n`;
        }
        else {
            switch (fieldType) {
                case "float":
                    code += `    view.setFloat32(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "bigint":
                    code += `    view.setBigUint64(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "number":
                    code += `    view.setFloat64(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "double":
                    code += `    view.setFloat64(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "uint16_t":
                    code += `    view.setUint16(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 2;\n`;
                    break;
                case "int32_t":
                    code += `    view.setInt32(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "uint32_t":
                    code += `    view.setUint32(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "uint64_t":
                    code += `    view.setBigUint64(${offsetVar}, ${objectName}.${fieldName}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "_Bool":
                    code += `    view.setUint8(${offsetVar}, ${objectName}.${fieldName} ? 1 : 0);\n`;
                    code += `    ${offsetVar} += 1;\n`;
                    break;
                default:
                    if (structMap.has(fieldType)) {
                        code += `    ${objectName}.${fieldName}.toBuffer(buffer, offset + ${offsetVar});\n`;
                        code += `    ${offsetVar} += ${fieldType}.byteLength;\n`;
                    }
                    else if (definedTypes.has(fieldType)) {
                        const type = definedTypes.get(fieldType);
                        if (type == undefined) throw new Error(`Type ${fieldType} is undefined`);
                        code += `${generateToBufferCode(fieldName, type, objectName, offsetVar, structMap)}`;
                    }
                    else if (customTypes[fieldType]) {
                        code += `    ${objectName}.${fieldName}.toBuffer(buffer, offset + ${offsetVar});\n`;
                        code += `    ${offsetVar} += ${customTypes[fieldType]!}.byteLength;\n`;
                    }
                    else {
                        code += `    // Unknown type ${fieldType} for field ${fieldName}\n`;
                        console.log(`Unknown type: ${fieldType}`);
                    }
                    break;
            }
        }
    }

    return code;
}

function generateNestedArrayToBufferCode(fieldName: string, baseType: string, dimensions: string[], objectName: string, offsetVar: string, structMap: Map<string, any>): string {
    let code = "";
    let indent = "    ";
    let currentField = fieldName;

    for (let i = 0; i < dimensions.length; i++) {
        const size = parseInt(dimensions[i].slice(1, -1));
        code += `${indent}for (let i${i} = 0; i${i} < ${size}; i${i}++) {\n`;
        indent += "  ";
        if (i < dimensions.length - 1) {
            currentField += `[i${i}]`;
        }
    }

    code += generateToBufferCode(`${currentField}[i${dimensions.length - 1}]`, baseType, objectName, offsetVar, structMap);

    for (let i = 0; i < dimensions.length; i++) {
        indent = indent.slice(2);
        code += `${indent}}\n`;
    }

    return code;
}
function generateFromBufferCode(fieldName: string, fieldType: string, objectName: string, offsetVar: string, structMap: Map<string, any>): string {
    let code = "";

    if (fieldType.includes("[")) {
        const arrayMatch = fieldType.match(/(\w+)\s*(\[.*\])/);
        if (arrayMatch) {
            const baseType = arrayMatch[1];
            const dimensions = arrayMatch[2].match(/\[(\d+)\]/g) || [];
            code += generateNestedArrayFromBufferCode(fieldName, baseType, dimensions, objectName, offsetVar, structMap);
        }
    } else {
        if (fieldType.startsWith("enum ")) {
            code += `    ${objectName}.${fieldName} = view.getInt32(${offsetVar}, true);\n`;
            code += `    ${offsetVar} += 4;\n`;
        }
        else if (fieldType.endsWith("*")) {
            code += `    ${objectName}.${fieldName} = view.getBigUint64(${offsetVar}, true);\n`;
            code += `    ${offsetVar} += 8;\n`;
        }
        else {
            switch (fieldType) {
                case "float":
                    code += `    ${objectName}.${fieldName} = view.getFloat32(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "bigint":
                    code += `    ${objectName}.${fieldName} = view.getBigUint64(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "number":
                    code += `    ${objectName}.${fieldName} = view.getFloat64(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "double":
                    code += `    ${objectName}.${fieldName} = view.getFloat64(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "uint16_t":
                    code += `    ${objectName}.${fieldName} = view.getUint16(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 2;\n`;
                    break;
                case "int32_t":
                    code += `    ${objectName}.${fieldName} = view.getInt32(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "uint32_t":
                    code += `    ${objectName}.${fieldName} = view.getInt32(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 4;\n`;
                    break;
                case "uint64_t":
                    code += `    ${objectName}.${fieldName} = view.getBigUint64(${offsetVar}, true);\n`;
                    code += `    ${offsetVar} += 8;\n`;
                    break;
                case "_Bool":
                    code += `    ${objectName}.${fieldName} = view.getUint8(${offsetVar}) !== 0;\n`;
                    code += `    ${offsetVar} += 1;\n`;
                    break;
                default:
                    if (structMap.has(fieldType)) {
                        code += `    ${objectName}.${fieldName} = ${fieldType}.fromBuffer(buffer, offset + ${offsetVar});\n`;
                        code += `    ${offsetVar} += ${fieldType}.byteLength;\n`;
                    }
                    else if (definedTypes.has(fieldType)) {
                        const type = definedTypes.get(fieldType);
                        if (type == undefined) throw new Error(`Type ${fieldType} is undefined`);
                        code += `${generateFromBufferCode(fieldName, type, objectName, offsetVar, structMap)}`;
                    }
                    else if (customTypes[fieldType]) {
                        code += `    ${objectName}.${fieldName} = ${customTypes[fieldType]!}.fromBuffer(buffer, offset + ${offsetVar});\n`;
                        code += `    ${offsetVar} += ${customTypes[fieldType]!}.byteLength;\n`;
                    }
                    else {
                        code += `    // Unknown type ${fieldType} for field ${fieldName}\n`;
                        console.log(`Unknown type: ${fieldType}`);
                    }
                    break;
            }
        }
    }

    return code;
}
function generateNestedArrayFromBufferCode(fieldName: string, baseType: string, dimensions: string[], objectName: string, offsetVar: string, structMap: Map<string, any>): string {
    let code = "";
    let indent = "    ";
    let currentField = fieldName;

    for (let i = 0; i < dimensions.length; i++) {
        const size = parseInt(dimensions[i].slice(1, -1));
        code += `${indent}${objectName}.${currentField} = [];\n`;
        code += `${indent}for (let i${i} = 0; i${i} < ${size}; i${i}++) {\n`;
        indent += "  ";
        if (i < dimensions.length - 1) {
            code += `${indent}${objectName}.${currentField}[i${i}] = [];\n`;
            currentField += `[i${i}]`;
        }
    }

    code += generateFromBufferCode(`${currentField}[i${dimensions.length - 1}]`, baseType, objectName, offsetVar, structMap);

    for (let i = 0; i < dimensions.length; i++) {
        indent = indent.slice(2);
        code += `${indent}}\n`;
    }

    return code;
}
// for anonymous structs
function outputSpecialStructs(): string {
    let output = "";

    // VREvent_Data_t
    output += `export interface IVREvent_Data_t {
    reserved?: VREvent_Reserved_t;
    controller?: VREvent_Controller_t;
    mouse?: VREvent_Mouse_t;
    scroll?: VREvent_Scroll_t;
    process?: VREvent_Process_t;
    notification?: VREvent_Notification_t;
    overlay?: VREvent_Overlay_t;
    status?: VREvent_Status_t;
    keyboard?: VREvent_Keyboard_t;
    ipd?: VREvent_Ipd_t;
    chaperone?: VREvent_Chaperone_t;
    performanceTest?: VREvent_PerformanceTest_t;
    touchPadMove?: VREvent_TouchPadMove_t;
    seatedZeroPoseReset?: VREvent_SeatedZeroPoseReset_t;
    screenshot?: VREvent_Screenshot_t;
    screenshotProgress?: VREvent_ScreenshotProgress_t;
    applicationLaunch?: VREvent_ApplicationLaunch_t;
    cameraSurface?: VREvent_EditingCameraSurface_t;
    messageOverlay?: VREvent_MessageOverlay_t;
    property?: VREvent_Property_t;
    hapticVibration?: VREvent_HapticVibration_t;
    webConsole?: VREvent_WebConsole_t;
    inputBinding?: VREvent_InputBindingLoad_t;
    actionManifest?: VREvent_InputActionManifestLoad_t;
    spatialAnchor?: VREvent_SpatialAnchor_t;
    progressUpdate?: VREvent_ProgressUpdate_t;
    showUi?: VREvent_ShowUI_t;
    showDevTools?: VREvent_ShowDevTools_t;
    hdcpError?: VREvent_HDCPError_t;
    audioVolumeControl?: VREvent_AudioVolumeControl_t;
    audioMuteControl?: VREvent_AudioMuteControl_t;
  }\n\n`;

    output += `export type VREvent_Data_t = Partial<IVREvent_Data_t>;\n\n`;

    // VREvent_t
    output += `export interface VREvent_t {
    eventType: number;
    trackedDeviceIndex: TrackedDeviceIndex_t;
    eventAgeSeconds: number;
    data: VREvent_Data_t;
  }\n\n`;

    // VROverlayIntersectionMaskPrimitive_Data_t (from previous example)
    output += `export interface IVROverlayIntersectionMaskPrimitive_Data_t {
    m_Rectangle?: IntersectionMaskRectangle_t;
    m_Circle?: IntersectionMaskCircle_t;
  }\n\n`;

    output += `export type VROverlayIntersectionMaskPrimitive_Data_t = Partial<IVROverlayIntersectionMaskPrimitive_Data_t>;\n\n`;

    // VROverlayIntersectionMaskPrimitive_t (from previous example)
    output += `export interface VROverlayIntersectionMaskPrimitive_t {
    m_nPrimitiveType: EVROverlayIntersectionMaskPrimitiveType;
    m_Primitive: VROverlayIntersectionMaskPrimitive_Data_t;
  }\n\n`;

    return output;
}

//#endregion

function outputMethods(data: any): string {
    let output = "";
    let currentClass = "";
    for (const method of data.methods) {
        if (method.classname !== currentClass) {
            if (currentClass !== "") {
                output += "}\n\n";
            }
            currentClass = method.classname;
            output += `//method class ${currentClass.replace("vr::", "")}
export interface ${currentClass.replace("vr::", "")} {\n`;
        }

        const params = method.params
            ? method.params.map((param: any) => {
                const paramType = resolveType(param.paramtype, param.paramtype.includes("*"));
                return `${param.paramname}: ${paramType}`;
            }).join(", ")
            : "";


        let returnsMultipleValues = false
        returnsMultipleValues = method.params?.some((param: any) => param.paramtype.includes("*") && !param.paramtype.includes("char") && !param.paramtype.includes("const"));

        const returnType = returnsMultipleValues
            ? `[${resolveType(method.returntype, true)}, ${method.params.filter((param: any) => param.paramtype.includes("*") && !param.paramtype.includes("char")).map((param: any) => resolveType(param.paramtype, false)).join(", ")}]`
            : resolveType(method.returntype, true);

        
        

    
        output += `  ${method.methodname}(${params}): ${returnType};\n`;
    }

    if (currentClass !== "") {
        output += "}\n\n";
    }

    return output;
}
function outputFFIConfigurations(data: any): string {
    let output = "const openVRLib = Deno.dlopen(\"openvr_api\", {\n";
    output += `  VR_InitInternal: { parameters: ["pointer", "i32"], result: "pointer" },\n`;
    output += `  VR_ShutdownInternal: { parameters: [], result: "void" },\n`;
    output += `  VR_GetVRInitErrorAsEnglishDescription: { parameters: ["i32"], result: "pointer" },\n`;
    output += `  VR_GetVRInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },\n`;
    output += `  VR_GetGenericInterface: { parameters: ["pointer", "pointer"], result: "pointer" },\n`;
    output += `  VR_IsHmdPresent: { parameters: [], result: "bool" },\n`;
    output += `  VR_IsRuntimeInstalled: { parameters: [], result: "bool" },\n`;
    output += `  VR_GetStringForHmdError: { parameters: ["i32"], result: "pointer" },\n`;
    output += `  VR_GetInitToken: { parameters: [], result: "u64" },\n`;
    output += "});\n\n";

    output += "export const OpenVR = {\n";
    for (const method of data.methods) {
        const originalMethodName = method.methodname;
        const uniqueMethodName = `${method.methodname}_${method.classname.replace("vr::", "")}`;

        if (definedFFIMethods.has(uniqueMethodName)) {
            const params = method.params
                ? method.params.map((param: any) => {
                    const paramType = resolveType(param.paramtype, param.paramtype.includes("*"));
                    return `${param.paramname}: ${paramType}`;
                })
                : [];
            params.unshift("ptr: Deno.PointerValue");

            const ffiParams = method.params
                ? method.params.map((param: any) => {
                    const paramType = resolveType(param.paramtype, param.paramtype.includes("*"));
                    const isPointer = param.paramtype.includes("*");

                    if (isPointer) {

                        console.log(param.paramtype)
                        if (param.paramtype.startsWith("struct") || param.paramtype.startsWith("const struct")) {
                            return `structToPointer(${param.paramname})`;
                        }
                        if (param.paramtype.startsWith("vr::")) {
                            return `structToPointer(${param.paramname})`;
                        }
                        if (param.paramtype.startsWith("bool")) {
                            return `boolToPointer(${param.paramname})`;
                        }


                        if (param.paramtype === "void *" || param.paramtype === "void*") {
                            return `${param.paramname} === null ? nullToPointer() : ${param.paramname}`;
                        }
                        else if (paramType === "string") {
                            return `stringToPointer(${param.paramname})`;
                        }
                        if (param.paramtype.startsWith("void")) {
                            return `nullToPointer()`;
                        }
                        else if (paramType === "number" || "bigint") {
                            return `numberToPointer(${param.paramname})`;
                        }
                        else if (customStructs.has(paramType)) {
                            return `structToPointer(${param.paramname})`;
                        }
                        else { }


                    }
                    else {
                        if (paramType === "Uint32Array" || paramType === "BigUint64Array") {
                            return `arrayBufferToPointer(${param.paramname}.buffer)`;
                        } else if (customStructs.has(paramType)) {
                            return `${param.paramname}`;

                        } else {
                            return paramType === "boolean" ? `${param.paramname} ? 1 : 0` : param.paramname;
                        }
                    }


                })
                : [];

            output += `  ${uniqueMethodName}: (${params.join(", ")}) => {\n`;
            output += `    const result = openVRLib.symbols.${originalMethodName}(${["ptr", ...ffiParams].join(", ")});\n`;
            const returnType = resolveType(method.returntype);

            if (returnType === "string") {
                output += `    return pointerToString(result);\n`;
            } else if (returnType === "boolean") {
                output += `    return result !== 0;\n`;
            } else {
                output += `    return result;\n`;
            }
            output += `  },\n`;
        }
    }
    output += `  VR_Init: (ptr: Deno.PointerValue, applicationType: number): Deno.PointerValue => {
        return openVRLib.symbols.VR_InitInternal(ptr, applicationType);
      },\n
  VR_GetGenericInterface: (pchInterfaceVersion: Deno.PointerValue, EVRInitError: Deno.PointerValue): Deno.PointerValue => {
    return openVRLib.symbols.VR_GetGenericInterface(pchInterfaceVersion, EVRInitError);
  },
      `;
    output += `  VR_Shutdown: () => {
        openVRLib.symbols.VR_ShutdownInternal();
      },\n`;
    output += "};\n";

    return output;
}
//dunno if this is needed
function generateStructPopulationCode(structName: string, paramName: string): string {
    let struct = globalStructs.find(s => s.struct === structName || s.struct === `vr::${structName}`);
    if (definedStructs.has((structName as any).struct)) {

        struct = structName
    }

    if (!struct) return '';

    let output = '';
    let offset = 0;

    struct.fields.forEach((field: any) => {
        const fieldType = field.fieldtype;
        const fieldName = field.fieldname;

        if (fieldType.includes('[')) {
            const matches = fieldType.match(/(\w+)\s*(\[(\d+)\])+/);
            if (matches) {
                const baseType = matches[1];
                const dimensions = fieldType.match(/\[(\d+)\]/g)?.map((dim: string) => parseInt(dim.slice(1, -1)));
                const elementSize = getPrimitiveSize(baseType);

                let nestingLevel = dimensions.length;
                let loopCode = '';
                let indexCalc = '';

                for (let i = 0; i < nestingLevel; i++) {
                    loopCode += `    ${'    '.repeat(i)}for (let i${i} = 0; i${i} < ${dimensions[i]}; i${i}++) {\n`;
                    indexCalc += `[i${i}]`;
                }

                // Corrected offset calculation
                const totalOffset = dimensions.map((_: any, i: number) => `i${i} * ${dimensions.slice(i + 1).reduce((a: number, b: number) => a * b, 1)}`).join(' + ');
                loopCode += `    ${'    '.repeat(nestingLevel)}${paramName}View.set${getSetterMethod(baseType)}((${totalOffset}) * ${elementSize}, ${paramName}.${fieldName}${indexCalc}, true);\n`;

                for (let i = 0; i < nestingLevel; i++) {
                    loopCode += `    ${'    '.repeat(nestingLevel - i - 1)}}\n`;
                }

                output += loopCode;
                offset += dimensions.reduce((a: number, b: number) => a * b, 1) * elementSize;
            }
        } else {
            // Handle primitive types
            const setterMethod = getSetterMethod(fieldType);
            //output += `    ${paramName}View.set${setterMethod}(${offset}, ${paramName}.${fieldName}, true);\n`;
            offset += getPrimitiveSize(fieldType);
        }
    });

    return output;
}
function generateParameterHandling(method: any): string {
    let output = '';
    const outParams: string[] = [];

    method.params?.forEach((param: any) => {
        let type = resolveType(param.paramtype);
        const isOutParam = param.paramtype.includes("*") && !param.paramtype.includes("char");
        if (isOutParam) {
            outParams.push(param.paramname);
        }

        const structInfo = globalStructs.find(s => s.struct === `vr::${type}` || s.struct === type);
        if (structInfo) {
            let size = calculateStructSize(structInfo);
            let countParam = '';

            // Check if this is an array parameter
            if (param.array_count) {
                countParam = method.params.find((p: any) => p.paramname === param.array_count);
                if (countParam) {
                    output += `    const ${param.paramname}Count = ${(countParam as any).paramname};\n`;
                    size += ` * ${param.paramname}Count`;
                }
            }
            output += `    const ${param.paramname}Buffer = new ArrayBuffer(${size});\n`;
            output += `    const ${param.paramname}View = new DataView(${param.paramname}Buffer);\n`;
            if (!isOutParam) {
                output += `    ${param.paramname}.toBuffer(${param.paramname}Buffer, 0);\n`;
            }
            // Populate the struct, even for input parameters
            output += generateStructPopulationCode(structInfo, param.paramname);

            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`;
        } else if (type === 'VROverlayHandle_t') {
            // Handle VROverlayHandle_t specially
            /*             output += `    const ${param.paramname}Buffer = new BigUint64Array([${param.paramname}]);\n`;
                        output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`; */
        } else if (type === 'ETrackingUniverseOrigin') {
            // Handle enum types
            /*             output += `    const ${param.paramname}NumericValue = Number(${param.paramname});\n`;
                        output += `    if (isNaN(${param.paramname}NumericValue)) {\n`;
                        output += `      throw new Error('Invalid enum value for ${param.paramname}');\n`;
                        output += `    }\n`;
                        output += `    const ${param.paramname}Array = new Int32Array([${param.paramname}NumericValue]);\n`;
                        output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Array);\n`; */
        } else {
            // Handle primitive types
            //output += `    const ${param.paramname}Value = ${param.paramname};\n`;
        }
    });

    return output;
}
//the big one
function outputWrapperClasses(data: any): string {
    let output = "";
    let currentClass = "";
    let methodIndex = 0;

    for (const method of data.methods) {
        output += `/*${JSON.stringify(method, null, 2)}*/\n`;
        if (method.classname !== currentClass) {
            if (currentClass !== "") { output += "}\n\n"; }
            currentClass = method.classname;
            const className = currentClass.replace("vr::", "");
            output += `export class ${className} {\n`;
            output += `  constructor(private ptr: Deno.PointerValue) {}\n\n`;
            methodIndex = 0;
        }



        const params = method.params
            ? method.params.map((param: any) => {
                const paramType = resolveType(param.paramtype, param.paramtype.includes("*"));
/*                 if (param.array_count)
                    return `${param.paramname}: ${paramType}[]`; */
                return `${param.paramname}: ${paramType}`;

            }).join(", ")
            : "";
        let returnsMultipleValues = false
        const realReturnType = resolveType(method.returntype, true);
        //if (method.methodname == "SetOverlayTransformAbsolute") throw new Error(method)
        /*         if (realReturnType !== "EVROverlayError") {
                    
                } */
        returnsMultipleValues = method.params?.some((param: any) => param.paramtype.includes("*") && !param.paramtype.includes("char") && !param.paramtype.includes("const"));
        //else throw new Error(method)

        const returnType = returnsMultipleValues
            ? `[${resolveType(method.returntype, true)}, ${method.params.filter((param: any) => param.paramtype.includes("*") && !param.paramtype.includes("char")).map((param: any) => resolveType(param.paramtype, false)).join(", ")}]`
            : resolveType(method.returntype, true);


        output += `  ${method.methodname}(${params}): ${returnType} {\n`;
        output += `    if (this.ptr === null) throw new Error("Invalid pointer");\n`;

        

        output += `    const vr = new Deno.UnsafePointerView(this.ptr);\n`;
        output += `    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));\n`;

        output += `    const vtable = new Deno.UnsafePointerView(vtablePtr);\n`;
        output += `    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(${methodIndex * 8}));\n`;


        const ffiParams = method.params
            ? method.params.map((param: any) => {
                const ffiType = convertToFFIType(param.paramtype);
                if (param.paramtype.includes("*")) {
                    return `"pointer"`;
                } else if (param.paramtype.startsWith("struct ")) {
                    return getStructFFIType(param.paramtype.replace("struct ", ""));
                } else if (isStructType(param.paramtype)) {
                    const structFields = getStructFields(param.paramtype);
                    return `{ struct: [${structFields}] }`;
                }
                return `"${ffiType}"`;
            }).join(", ")
            : "";
        const ffiParamsWithThis = `"pointer"${ffiParams ? ", " + ffiParams : ""}`;

        const ffiReturnType = convertToFFIType(method.returntype);
        let ffiReturnTypeStr = `"${ffiReturnType}"`;

        if (isStructType(realReturnType)) {
            const structFields = getStructFields(realReturnType);
            ffiReturnTypeStr = `{ struct: [${structFields}] }`;
        }

        output += `    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: [${ffiParamsWithThis}], result: ${ffiReturnTypeStr} });\n`;

        output += generateParameterHandling(method);
        // Handle pointer parameters
        const outParams: string[] = [];
        method.params?.forEach((param: any) => {
            let type = resolveType(param.paramtype);
            const isOutParam = param.paramtype.includes("*") && !param.paramtype.includes("char");
            if (isOutParam) {
                outParams.push(param.paramname);
            }

            const structInfo = globalStructs.find(s => s.struct === `vr::${type}`);
            if (structInfo) {
                const size = calculateStructSize(structInfo)
                //if (size == 0) throw new Error(`Struct ${type} has no fields`);
                //output += generateParameterHandling(method);
                /*  output += `    const ${param.paramname}Buffer = new ArrayBuffer(${size});\n`; */
                /*                                 output += `    const ${param.paramname}View = new DataView(${param.paramname}Buffer);\n`;
                                                output += generateStructPopulationCode(structInfo, param.paramname);
                                                output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`; */
            } else {
                if (definedTypes.has(type)) {
                    type = `vr::${type}`;
                    const convertedType = typeMapping[type];
                    type = convertedType;
                }

                //pointer
                const pointerStructInfo = globalStructs.find(s => s.struct === `vr::${type}`);
                if (globalStructs.find(s => s.struct === `vr::${type}`)) {
                    if (pointerStructInfo == undefined) throw new Error(`Struct ${type} is not defined`);
                    const size = calculateStructSize(pointerStructInfo)
                    //if (size == 0) throw new Error(`Struct ${type} has no fields`);
                    output += `    const ${param.paramname}Buffer = new ArrayBuffer(${size});\n`;
                    output += `    const ${param.paramname}View = new DataView(${param.paramname}Buffer);\n`;

                    output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`;
                } else {
                    
                    switch (type) {
                        case "number":
                            output += `    const ${param.paramname}Array = new Float64Array([${param.paramname}]);\n`;
                            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Array);\n`;
                            break;
                        case "bigint":
                            console.log(type, param.paramname, param.paramtype, param.array_count);
                            if (globalStructs.find(s => s.struct === `${param.paramtype.replace(' *', '')}`)) {
                                debugger;
                            }
                            output += `    const ${param.paramname}Buffer = new BigUint64Array([${param.paramname}]);\n`;
                            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`;
                            break;
                        case "string":
                            output += `    const ${param.paramname}Buffer = new TextEncoder().encode(${param.paramname} + '\\0');\n`;
                            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Buffer);\n`;
                            break;
                        case "boolean":
                            output += `    const ${param.paramname}Array = new Uint8Array([${param.paramname} ? 1 : 0]);\n`;
                            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Array);\n`;
                            break;
                        case "Uint8Array":
                            output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname});\n`;
                            break;
                        case "Deno.PointerValue":
                            output += `    const ${param.paramname}Ptr = ${param.paramname};\n`;
                            break;
                        default:
                            if (definedEnums.has(`vr::${type}`)) {
                                /*  output += `    const ${param.paramname}NumericValue = Number(${param.paramname});\n`;
                                 output += `    if (isNaN(${param.paramname}NumericValue)) {\n`;
                                 output += `      throw new Error('Invalid enum value for ${param.paramname}');\n`;
                                 output += `    }\n`;
                                 output += `    const ${param.paramname}Array = new Int32Array([${param.paramname}NumericValue]);\n`;
                                 output += `    const ${param.paramname}Ptr = Deno.UnsafePointer.of(${param.paramname}Array);\n`; */
                            } else {
                                console.log(`Unknown type: ${type}`);
                            }
                            break;
                    }
                }
            }
        });

        const callArgs = method.params
            ? method.params.map((param: any) => {
                if (param.paramtype.startsWith("struct ") && !param.paramtype.includes("*")) {
                    return `${param.paramname}Buffer`;
                } else if (param.paramtype.endsWith("*")) {
                    return `${param.paramname}Ptr`;
                } else if (param.paramtype === "bool") {
                    return `${param.paramname} ? 1 : 0`;
                } else if (isStructType(param.paramtype) && !param.paramtype.includes("*")) {
                    return `${param.paramname}Buffer`;
                } else {
                    return param.paramname;
                }
            }).join(", ")
            : "";

        output += `    const result = func.call(this.ptr${callArgs ? ", " + callArgs : ""});\n`;
        if (returnsMultipleValues) {
            output += `    // Read output parameters\n`;
            outParams.forEach((param, index) => {
                const paramType = method.params.find((p: any) => p.paramname === param).paramtype;
                const structInfo = globalStructs.find(s => s.struct === `vr::${paramType.replace('*', '')}`);
                if (structInfo) {
                    output += `    ${param} = ${paramType.replace('*', '')}.fromBuffer(${param}Buffer, 0);\n`;
                }
            });
        }

        if (returnsMultipleValues) {
            console.log(returnType);
            const matches = returnType.match(/\[(.*?)\]/);
            if (matches && matches[1]) {
                const types = matches[1].split(',').map(t => t.trim());
                const outParamTypes = types.slice(1);


                output += `    return [result, ${outParams.map((param, index) => {
                    const paramType = outParamTypes[index];
                    //if ( paramType == "VROverlayHandle_t") debugger
                    const a = `vr::${paramType}`
                    if (globalStructs.some(item => item.struct === `vr::${paramType}`)) {

                        return `${paramType}.fromBuffer(${param}Buffer, 0)`;
                    } else {
                        if (paramType == "number") return `${param}`;
                        else return `${param}Buffer[0]`;
                    }
                }).join(", ")}];\n`;
            } else {
                output += `    return [result, ${outParams.join(", ")}];\n`;
                //output += `    return [result, ${outParams.map(param => `${param}Buffer`).join(", ")}];\n`;
            }

        } else if (isStructType(realReturnType)) {
            output += `    if (result === null) throw new Error("Function returned null pointer");\n`;
            output += `    return ${structToObject2(realReturnType, "result")};\n`;
        } else if (realReturnType === "string") {
            output += `    return result === null ? "" : Deno.UnsafePointerView.getCString(result);\n`;
        } else if (realReturnType === "boolean") {
            output += `    return result !== 0;\n`;
        } else {
            output += `    return result;\n`;
        }

        output += `  }\n\n`;
        methodIndex++;
    }

    if (currentClass !== "") { output += "}\n\n"; }

    return output;
}



//#endregion


async function generateBindings() {
    try {
        const openvrApiJson = await Deno.readTextFile("openvr_api.json");
        const data = JSON.parse(openvrApiJson);
        globalStructs = data.structs;

        let output = "// Auto-generated OpenVR bindings for Deno\n\n";
        output += "//#region FFI\n"
        output += outputFFIConfigurations(data);
        output += "//#endregion\n"
        output += "//#region typedefs\n"
        output += outputTypedefs(data);
        output += "//#endregion\n"
        output += "//#region enums\n"
        output += outputEnums(data);
        output += "//#endregion\n"
        output += "//#region consts\n"
        output += outputConstants(data);
        output += "//#endregion\n"
        output += "//#region Structs\n"
        output += outputStructs(data);
        output += outputSpecialStructs();
        output += "//#endregion\n"
        output += "//#region Methods\n"
        output += outputMethods(data);
        output += "//#endregion\n"
        output += "//#region WRAPPERS\n"
        output += outputWrapperClasses(data);
        output += "//#endregion\n"

        output += `

function stringToPointer(str: string): Deno.PointerValue {
  const encoder = new TextEncoder();
  const view = encoder.encode(str + '\\0');
  return Deno.UnsafePointer.of(view);
}

export function getGenericInterface(interfaceName: string): Deno.PointerValue {
  const error = new Int32Array(1); 
  const namePtr = stringToPointer(interfaceName);
  return OpenVR.VR_GetGenericInterface(namePtr, Deno.UnsafePointer.of(error));
}
        `;

        await Deno.writeTextFile("openvr_bindings.ts", output);
        console.log("OpenVR bindings generated successfully!");
    } catch (error) {
        console.error("An error occurred while generating bindings:");
        console.error(error);
    }
}


generateBindings();
