import { typeMapping } from "./utils.ts";
import { Struct, calculateTotalSize, SizedStruct, SizedArrayType, u8, i8, u16, i16, u32, i32, f32, u64, i64, f64 } from "https://raw.githubusercontent.com/mommysgoodpuppy/byte_type_C/main/mod.ts";


const openvrApiJson = await Deno.readTextFile("openvr_api.json");
const api = JSON.parse(openvrApiJson) as any;

async function main() {

  if (typeof api !== "object" || api === null) {
    console.log(typeof api);
    throw new Error("API was not object");
  }
  let output = "";
  output += await generateEntrypoints();
  output += await generateTypes(api.typedefs, api.consts);
  output += await generateEnums(api.enums);
  output += await generateStructs(api.structs);
  output += await generateByteTypeStructs(api.structs, api.typedefs);
  output += await generateMethods(api.methods, api.typedefs, api.enums);

  await Deno.writeTextFile("openvr_bindings.ts", output);
  await Deno.writeTextFile("test/openvr_bindings.ts", output);
}

const TYPEDEF_MAP: Record<string, string> = {
  "int": "number",
  "uint8_t": "number",
  "unsigned short": "number",
  "uint16_t": "number",
  "uint32_t": "number",
  "uint64_t": "bigint",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "bigint",
  "void *": "Deno.PointerValue<unknown>",
  "const void *": "Deno.PointerValue<unknown>",
  "void **": "Deno.PointerValue<Deno.PointerValue<unknown>>",
  "const void **": "Deno.PointerValue<Deno.PointerValue<unknown>>",
  "_Bool": "number",
  "bool": "boolean",
  "char": "number",
  "float": "number",
  "double": "number",
  "const uint8_t *": "Uint8Array",
  "const char *": "string",
  "char *": "string",
  // ... (other mappings)
};

const REDUNDANT_TYPEDEFS: Record<string, boolean> = {
  "TrackedDeviceClass": true,
  "ColorSpace": true,
  "TrackingUniverseOrigin": true,
  "TrackedDeviceProperty": true,
  "TrackedPropertyError": true,
  "SubmitFlags": true,
  "State": true,
  "CollisionBoundsStyle": true,
  "OverlayError": true,
  "FirmwareError": true,
  "CompositorError": true,
  "Event_Data": true,
  "OverlayIntersectionMaskPrimitive_Data": true,
};

async function generateTypes(defs: any[], consts: any[]): Promise<string> {
  let output = "// Typedefs and Constants\n\n";

  //#region Generate Typedefs

  output += "//#region Typedefs\n";
  for (const def of defs) {
    const typedef = def.typedef;
    const dtype = def.type;

    const typeTrim = trimStructName(typedef); // Assuming trimStructName is defined elsewhere
    const otype = TYPEDEF_MAP[dtype] || fieldTypeConvert(dtype); // Assuming TYPEDEF_MAP and fieldTypeConvert are defined elsewhere
    if (REDUNDANT_TYPEDEFS[typeTrim]) continue; // Assuming REDUNDANT_TYPEDEFS is defined elsewhere
    output += `export type ${typeTrim} = ${otype};//${dtype}\n`;
  }
  output += "//#endregion\n";
  //#endregion

  output += "\n"; // Add a separator between typedefs and consts

  //#region Generate Constants

  output += "//#region Constants\n";
  for (const con of consts) {
    const constname = con.constname;
    let consttype = con.consttype;
    const constval = con.constval;

    consttype = consttype.replace("const ", "").trim();
    // deno-lint-ignore prefer-const
    let originalConstType = trimStructName(consttype); // Store the original type for later use
    let typedef = false;
    // Typedef Lookup
    const typedefInfo = defs.find(def => trimStructName(def.typedef) === trimStructName(consttype));
    if (typedefInfo) {
      typedef = true;
      consttype = typedefInfo.type;
    }

    // Use type mapping to determine the correct type
    const typeInfo = typeMapping[consttype] || typeMapping[consttype.replace("*", "")];

    if (!typeInfo) {
      console.warn(`Unknown type: ${consttype} for constant ${constname}`);
      output += `export const ${constname} = ${constval}; // Unknown type: ${consttype}\n`;
      continue;
    }

    const denoType = typeInfo.deno;

    // Generate the output based on the Deno type
    switch (denoType) {
      case "string":
        if (typedef == true) output += `export const ${constname}: ${originalConstType} = "${constval}";//${consttype}\n`;
        else if (constname.endsWith("Version")) {
          output += `export const ${constname}: string = "FnTable:${constval}";//${consttype}\n`;
        } else {
          output += `export const ${constname}: string = "${constval}";//${consttype}\n`;
        }
        break;
      case "bigint":
        if (typedef == true) output += `export const ${constname}: ${originalConstType} = ${constval}n;//${consttype}\n`;
        else output += `export const ${constname}: ${denoType} = ${constval}n;//${consttype}\n`;
        break;
      case "boolean":
        if (typedef == true) output += `export const ${constname}: ${originalConstType} = ${constval};//${consttype}\n`;
        else output += `export const ${constname}: ${denoType} = ${constval.toLowerCase() === "true"};//${consttype}\n`;
        break;
      default:
        if (typedef == true) output += `export const ${constname}: ${originalConstType} = ${constval};//${consttype}\n`;
        else output += `export const ${constname}: ${denoType} = ${constval};//${consttype}\n`;
    }
  }
  output += "//#endregion\n";
  //#endregion

  return output;

  //await Deno.writeTextFile("openvr/types.ts", output); // Write to a single file
}

const ENUM_NONSTANDARD_PREFIXES: string[] = [
  "k_",
  "Prop_",
  "TrackedProp_",
  "Submit_",
  "VREvent_",
  "EDeviceActivityLevel_",
  "EButton_",
  "ShowUI_",
  "eHiddenAreaMesh_",
  "eControllerAxis_",
  "ControllerEventOutput_",
  "VRApplication_",
  "VRSkeletalTracking_",
  "EVRTrackedCameraFrameLayout_",
  "OffScale_",
  "Error_",
  "Property_",
  "EVRSceneApplicationState_",
  "VROverlayTransform_",
  "EGamepadTextInputMode",
  "EGamepadTextInputLineMode",
  "OverlayIntersectionPrimitiveType_",
  "KeyboardFlag_",
  "HeadsetViewMode_",
  "EVRNotificationType_",
  "EVRNotificationStyle_",
  "VRInputFilterCancel_",
  "VRInputString_",
  "IOBuffer_",
  "BlockQueueRead_",
]

function trimEnumName(name: string): string {
  let enumTrim = name;
  if (enumTrim.startsWith("vr::")) {
    enumTrim = enumTrim.slice(4);
  }
  if (enumTrim.startsWith("E")) {
    enumTrim = enumTrim.slice(1);
  }
  if (enumTrim.startsWith("VR")) {
    enumTrim = enumTrim.slice(2);
  }
  if (enumTrim.endsWith("_t")) {
    enumTrim = enumTrim.slice(0, -2);
  }
  return enumTrim;
}


async function generateEnums(enums: any[]) {
  let output = "// Enums\n\n";
  output += "//#region Enums\n";
  for (const e of enums) {
    const enumName = e.enumname;
    const enumTrim = trimEnumName(enumName);
    output += `export enum ${enumTrim} {\n`;
    for (const val of e.values) {
      const memName = val.name;
      const memVal = val.value;
      //const nameTrim = trimEnumMemberName(memName, enumTrim);
      output += `  ${memName} = ${memVal},\n`;
    }
    output += "}\n\n";
  }
  output += "//#endregion\n";
  return output;
  await Deno.writeTextFile("openvr/enums.ts", output);
}

// Trim struct names
function trimStructName(name: string): string {
  let structTrim = name;
  structTrim = structTrim.startsWith("vr::") ? structTrim.slice(4) : structTrim;
  structTrim = structTrim.startsWith("VR") ? structTrim.slice(2) : structTrim;
  structTrim = structTrim.endsWith("_t") ? structTrim.slice(0, -2) : structTrim;
  return structTrim;
}

// Trim handle names
function trimHandleName(name: string): string {
  let handleTrim = name;
  handleTrim = handleTrim.startsWith("vr::") ? handleTrim.slice(4) : handleTrim;
  handleTrim = handleTrim.startsWith("VR") ? handleTrim.slice(2) : handleTrim;
  handleTrim = handleTrim.endsWith("_t") ? handleTrim.slice(0, -2) : handleTrim;
  return handleTrim;
}

// Trim field names
function trimFieldName(name: string): string {
  let fieldTrim = name;
  fieldTrim = fieldTrim.startsWith("m_") ? fieldTrim.slice(2) : fieldTrim;
  // Add additional prefix checks if needed
  // fieldTrim = fieldTrim.startsWith("fl") ? fieldTrim.slice(2) : fieldTrim;
  // fieldTrim = fieldTrim.startsWith("n") ? fieldTrim.slice(1) : fieldTrim;
  // fieldTrim = fieldTrim.startsWith("un") ? fieldTrim.slice(2) : fieldTrim;
  return fieldTrim;
}

// Convert field type
//#region Convert Field Type
function fieldTypeConvert(name: string): string {

  // Check for a simple match in TYPEDEF_MAP
  const typename = TYPEDEF_MAP[name];
  if (typename) {
    return typename;
  }

  const tokens = name.split(" ");
  let st = 0;
  let en = tokens.length - 1;
  let isConst = false;
  let isUnion = false;
  let isEnum = false;
  let isClass = false;
  let isStruct = false;
  let isPtr = false;
  let isPtrPtr = false;
  let isArray = false;
  let arrayString = "";

  if (tokens[st] === "const") {
    isConst = true;
    st += 1;
  }

  if (tokens[st] === "union") {
    isUnion = true;
    st += 1;
  }

  if (tokens[st] === "enum") {
    isEnum = true;
    st += 1;
  }

  if (tokens[st] === "struct") {
    isStruct = true;
    st += 1;
  }

  if (tokens[st] === "class") {
    isClass = true;
    st += 1;
  }

  if (tokens[en] === "*") {
    isPtr = true;
    en -= 1;
  }

  if (tokens[en] === "**") {
    isPtrPtr = true;
    en -= 1;
  }

  if (tokens[en].endsWith("]")) {
    isArray = true;
    arrayString = tokens[en];
    en -= 1;
  }

  if (st !== en) {
    console.log(name);
  }

  const coreName = tokens[st];
  let coreType = TYPEDEF_MAP[coreName];
  if (!coreType) {
    coreType = trimEnumName(coreName);
    coreType = trimStructName(coreType);
  }

  // Adapt the result for TypeScript and Deno
  let result = coreType;

  if (isPtr) {
    result = `Deno.PointerValue<${result}>`;
  } else if (isPtrPtr) {
    result = `Deno.PointerValue<Deno.PointerValue<${result}>>`;
  }
  if (isArray) {
    // Parse array dimensions
    const dimensions = arrayString.match(/\[(\d+)\]/g);
    if (dimensions) {
      dimensions.reverse().forEach(dim => {
        const size = parseInt(dim.slice(1, -1));
        result = `[${Array(size).fill(result).join(", ")}]`;
      });
    }
  }

  // Add 'readonly' for const values if needed
  if (isConst) {
    result = `${result}`;
  }

  return result;
}
//#endregion
const STRUCT_PRELUDE = `
import vk "vendor:vulkan"
import D3D11 "vendor:directx/d3d11"
import D3D12 "vendor:directx/d3d12"
`

type FFIArray<T, N extends number> = T[];
//#region Generate Structs
async function generateStructs(structs: any[]) {
  let output = "// Structs\n\n";
  output += "//#region Structs\n";

  for (const str of structs) {
    const structName = str.struct;
    const structFields = str.fields;
    output += `/*${structName}, ${JSON.stringify(structFields, null, 2)}*/\n`;

    const structTrim = trimStructName(structName);
    let interfaceName = structTrim;
    let className = structTrim;

    if (structTrim === "(anonymous)") {
      if (structFields.length === 2) {
        interfaceName = "OverlayIntersectionMaskPrimitive_Data";
        className = "OverlayIntersectionMaskPrimitiveData";
      } else {
        interfaceName = "Event_Data";
        className = "EventData";
      }
    }

    // Generate interface
    output += `export interface ${interfaceName} {\n`;
    for (const field of structFields) {
      const fieldname = trimFieldName(field.fieldname);
      const tsType = fieldTypeConvert(field.fieldtype);
      output += `  ${fieldname}: ${tsType};\n`;
    }
    output += "}\n";


    output += "\n\n";
  }

  output += "//#endregion\n";
  return output;
}

async function generateByteTypeStructs(structs: any[], defs: any[]) {
  let output = "// Byte Type Structs\n\n";

  output += "import { calculateTotalSize, SizedStruct, SizedArrayType, u8, i8, u16, i16, u32, i32, f32, u64, i64, f64} from \"https://raw.githubusercontent.com/mommysgoodpuppy/byte_type_C/main/mod.ts\";\n\n";

  for (const str of structs) {
    const structName = str.struct;
    const structFields = str.fields;
    const structTrim = trimStructName(structName);
    if (structTrim == "VulkanTextureData") continue;
    if (structTrim == "D3D12TextureData") continue;
    if (structTrim == "OverlayIntersectionMaskPrimitive") continue;
    if (structTrim == "VulkanDevice") continue;


    let className = structTrim;

    if (structTrim === "(anonymous)") {
      if (structFields.length === 2) {
        className = "OverlayIntersectionMaskPrimitiveData";
      } else {
        className = "EventData";
      }
    }
    output += `/*${structName}, ${JSON.stringify(structFields, null, 2)}*/\n`;
    output += `export const ${className}Struct = new SizedStruct({\n`;

    for (const field of structFields) {

      const fieldname = trimFieldName(field.fieldname);
      const byteType = getByteType(field.fieldtype);

      if (byteType) {
        if (byteType instanceof SizedArrayType) {
          //debugger
          const ats = getArrayTypeString(byteType);
          output += `  ${fieldname}: new SizedArrayType(${ats}),\n`;
        } else {
          //debugger
          if (byteType == null) debugger
          output += `  ${fieldname}: ${byteType},\n`;
        }
      } else {
        // Handle custom types or nested structs
        if (field.fieldtype.startsWith("struct")) {
          const nestedStructName = field.fieldtype.split(" ")[1];
          output += `  ${fieldname}: ${trimStructName(nestedStructName)}Struct,\n`;
        } else if (field.fieldtype.startsWith("enum")) {
          // Assume enums are represented as u32
          output += `  ${fieldname}: u32,\n`;
        } else if (field.fieldtype.endsWith("*")) {
          output += `  ${fieldname}: u64,\n`;
        } else {
          const trimmedtype = trimStructName(field.fieldtype);
          const dtype = defs.find(defs => trimStructName(defs.typedef) === trimmedtype);
          if (dtype) {
            const byteType = getByteType(dtype.type);
            output += `  ${fieldname}: ${byteType},\n`;
          }
          else {
            console.warn(`Unsupported field type: ${field.fieldtype} in struct ${className}`);
            output += `  // TODO: Handle ${fieldname}: ${field.fieldtype}\n`;
          }
        }
      }
    }

    output += "});\n\n";
  }

  return output;
}
function getArrayTypeString(arrayType: SizedArrayType<any>): string {
  if (arrayType.type instanceof SizedArrayType) {
    const ats = getArrayTypeString(arrayType.type);
    return `new SizedArrayType(${ats}), ${arrayType.length}`;
  } else {
    //debugger
    return `${arrayType.type}, ${arrayType.length}`;
  }
}
function getByteType(fieldtype: string): SizedArrayType<unknown> | string {
  if (fieldtype.includes("[")) {
    //debugger
    const [baseType, ...dimensions] = fieldtype.split("[");
    let type = getByteType(baseType.trim());

    // Create nested ArrayTypes for multidimensional arrays
    for (let i = dimensions.length - 1; i >= 0; i--) {
      const length = parseInt(dimensions[i], 10);
      if (type == null) return //throw new Error(`Invalid array type: ${fieldtype}`);
      type = new SizedArrayType(type, length);
    }

    return type;
  }

  switch (fieldtype) {
    case "void *":
    case "void*":
      return "u64";
    case "_Bool": return "u8";
    case "char": return "i8";
    case "uint8_t": return "u8";
    case "int8_t": return "i8";
    case "uint16_t": return "u16";
    case "int16_t": return "i16";
    case "uint32_t": return "u32";
    case "int32_t": return "i32";
    case "float": return "f32";
    case "uint64_t": return "u64";
    case "int64_t": return "i64";
    case "double": return "f64";
    default: return null; // For custom types or structs
  }
}

//#endregion
function getFieldDefinition(field: any, api: any): string {
  const fieldtype = field.fieldtype;
  const ffiType = getFfiType(fieldtype, api.typedefs, api.enums);

  switch (ffiType) {
    case 'bool':
      return "{ type: 'boolean', ffiType: FFIType.BOOL }";
    case 'f32':
    case 'f64':
      return `{ type: 'number', ffiType: FFIType.${ffiType.toUpperCase()} }`;
    case 'i64':
    case 'u64':
      return `{ type: 'bigint', ffiType: FFIType.${ffiType.toUpperCase()} }`;
    case 'pointer':
      if (fieldtype.includes("char[")) {
        const match = fieldtype.match(/\[(\d+)\]/);
        const length = match ? parseInt(match[1]) : 1;
        return `{ type: 'float32array', length: ${length}, ffiType: FFIType.POINTER }`;
      }
      if (fieldtype.includes("struct") || fieldtype.includes("[")) {
        return handleStructOrArray(fieldtype, api);
      }
      return `{ type: 'pointer', ffiType: FFIType.POINTER }`;
    default:
      return `{ type: 'number', ffiType: FFIType.${ffiType.toUpperCase()} }`;
  }
}
function handleStructOrArray(fieldtype: string, api: any): string {
  const structMatch = fieldtype.match(/struct\s+(\w+::)?(\w+)/);
  const arrayMatch = fieldtype.match(/\[(\d+)\]/g);

  if (structMatch) {
    const structName = trimStructName(structMatch[2]);
    const nestedStruct = api.structs.find(s => trimStructName(s.struct) === structName);

    if (nestedStruct) {
      const nestedFields = nestedStruct.fields.map(f =>
        `${f.fieldname}: ${getFieldDefinition(f, api)}`
      ).join(', ');

      if (arrayMatch) {
        const dimensions = arrayMatch.map(m => parseInt(m.slice(1, -1)));
        return `{ 
          type: 'struct', 
          struct: { ${nestedFields} },
          dimensions: [${dimensions.join(', ')}],
          ffiType: FFIType.POINTER 
        }`;
      } else {
        return `{ 
          type: 'struct', 
          struct: { ${nestedFields} },
          ffiType: FFIType.POINTER 
        }`;
      }
    }
  } else if (arrayMatch) {
    const dimensions = arrayMatch.map(m => parseInt(m.slice(1, -1)));
    const baseType = fieldtype.split('[')[0].trim();
    return `{ 
      type: 'array', 
      baseType: '${baseType}',
      dimensions: [${dimensions.join(', ')}],
      ffiType: FFIType.POINTER 
    }`;
  }

  return `{ type: 'pointer', ffiType: FFIType.POINTER }`;
}

const INTERFACE_NAMES: string[] = [
  "vr::IVRSystem",
  "vr::IVRChaperone",
  "vr::IVRChaperoneSetup",
  "vr::IVRCompositor",
  "vr::IVRHeadsetView",
  "vr::IVROverlay",
  "vr::IVROverlayView",
  "vr::IVRResources",
  "vr::IVRRenderModels",
  "vr::IVRExtendedDisplay",
  "vr::IVRSettings",
  "vr::IVRApplications",
  "vr::IVRTrackedCamera",
  "vr::IVRScreenshots",
  "vr::IVRDriverManager",
  "vr::IVRInput",
  "vr::IVRIOBuffer",
  "vr::IVRSpatialAnchors",
  "vr::IVRDebug",
  "vr::IVRNotifications",
  "vr::IVRProperties",
  "vr::IVRPaths",
  "vr::IVRBlockQueue",
]

function getFfiType(type: string, defs?: any[], enums?: any[]): any {
  // Check if it's a basic type in typeMapping
  defs = api.typedefs;
  enums = api.enums;

  if (typeMapping[type]) {
    return typeMapping[type].ffi;
  }

  // Check if it's a typedef
  const typedef = defs.find(def => def.typedef === type);
  if (typedef) {
    return getFfiType(typedef.type, defs, enums);
  }

  // Check if it's an enum
  const isEnum = enums.some(e => e.enumname === type);
  if (isEnum) {
    return "i32";
  }

  // If all else fails, assume it's a pointer
  console.warn(`Unknown type: ${type}`);
  return "pointer";
}
//#region Generate Methods
async function generateMethods(methods: any[], defs: any[], enums: any[]) {
  let output = "// Classes\n\n";
  output += "//#region Classes\n";

  for (const iface of INTERFACE_NAMES) {
    const ifaceTrim = iface.replace("vr::", "");
    output += `export class ${ifaceTrim} {\n`;
    output += `  constructor(private ptr: Deno.PointerValue<${ifaceTrim}|unknown>) {}\n\n`;

    let methodIndex = 0;

    for (const meth of methods) {
      if (meth.classname !== iface) continue;
      const methName = meth.methodname;
      const methParams = meth.params;
      const methRet = meth.returntype;
      const retType = fieldTypeConvert(methRet);
      output += `  /*\n`;
      output += `  ${methName}\n`;
      output += `  Parameters: ${JSON.stringify(methParams)}\n`;
      output += `  Return: ${methRet}\n`;
      output += `  */\n`;

      output += `  ${methName}(`;
      if (methParams) {
        for (let i = 0; i < methParams.length; i++) {
          const par = methParams[i];
          const parname = par.paramname;
          const partype = par.paramtype;
          const tsType = fieldTypeConvert(partype);
          output += `${parname}: ${tsType}`;
          if (i < methParams.length - 1) output += ", ";
        }
      }

      if (retType === "void") {
        output += "): void {\n";
      } else {
        output += `): ${retType} {\n`;
      }

      // Add method implementation
      output += `    if (this.ptr === null) throw new Error("${ifaceTrim} pointer is null");\n`;

      output += `    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<${ifaceTrim}>);\n`;


      output += `    const funcPtr = Deno.UnsafePointer.create(view.getBigUint64(${methodIndex * 8}))!;\n`;



      output += `    const func = new Deno.UnsafeFnPointer(funcPtr, {\n`;
      output += `      parameters: [\n`;

      if (methParams) {
        for (const param of methParams) {
          const ffiType = getFfiType(param.paramtype, defs, enums);
          output += `        "${ffiType}", //(${param.paramtype})  ${param.paramname}\n`;
        }
      }
      output += `      ],\n`;
      output += `      result: "${getFfiType(methRet, defs, enums)}"\n`;
      output += `    });\n\n`;

      // Call the function
      if (methRet == "void") output += `    const _result = func.call(\n`;
      else output += `    const result = func.call(\n`;

      if (methParams) {
        for (const param of methParams) {
          const paramType = fieldTypeConvert(param.paramtype);
          if (paramType === "string") {
            output += `      Deno.UnsafePointer.of(new TextEncoder().encode(${param.paramname} + "\\0")),\n`;
          } else if (typeMapping[param.paramtype]?.deno === "number") {
            output += `      ${param.paramname},\n`;
          } else {
            output += `      ${param.paramname},\n`;
          }
        }
      }
      output += `    );\n\n`;

      // Handle the result
      if (retType !== "void") {
        const ffiType = getFfiType(methRet, defs, enums);
        if (retType == "string") {
          output += `    return result.toString();\n`;
        }
        else if (ffiType === "pointer") {
          output += `    return result// as unknown as ${retType};\n`;
        } else {
          output += `    return result// as ${retType};\n`;
        }
      }

      output += "  }\n\n";
      methodIndex++;
    }
    output += "}\n\n";
  }
  output += "//#endregion\n";
  return output;
}

//#endregion

async function generateEntrypoints() {
  const entrypoints = `
//#region Entrypoints

declare const brand: unique symbol;
export type InitErrorPTRType = Deno.PointerObject<InitError>
const TypedInitErrorPTR = "pointer" as Deno.NativeTypedPointer<InitErrorPTRType>;

const { symbols } = await Deno.dlopen("openvr_api.dll", {
  VR_InitInternal: { parameters: ["pointer", "i32"], result: "pointer" },
  VR_ShutdownInternal: { parameters: [], result: "void" },
  VR_IsHmdPresent: { parameters: [], result: "bool" },
  VR_GetGenericInterface: { parameters: ["pointer", TypedInitErrorPTR], result: "pointer" },
  VR_IsRuntimeInstalled: { parameters: [], result: "bool" },
  VR_GetVRInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },
  VR_GetVRInitErrorAsEnglishDescription: { parameters: ["i32"], result: "pointer" },
});

export const {
  VR_InitInternal,
  VR_ShutdownInternal,
  VR_IsHmdPresent,
  VR_GetGenericInterface,
  VR_IsRuntimeInstalled,
  VR_GetVRInitErrorAsSymbol,
  VR_GetVRInitErrorAsEnglishDescription,
} = symbols;
//#endregion
`;
  return entrypoints;
  await Deno.writeTextFile("openvr/entrypoints.ts", entrypoints);
}

// Run the main function
main().catch(console.error);