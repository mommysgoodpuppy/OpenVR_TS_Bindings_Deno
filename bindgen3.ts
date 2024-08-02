import { typeMapping } from "./openvr_defs.ts";

const openvrApiJson = await Deno.readTextFile("openvr_api.json");

async function main() {
  const api = JSON.parse(openvrApiJson) as any;
  if (typeof api !== "object" || api === null) {
    console.log(typeof api);
    throw new Error("API was not object");
  }

  await generateTypes(api.typedefs, api.consts);
  await generateEnums(api.enums);
  await generateStructs(api.structs);
  await generateMethods(api.methods);
  await generateEntrypoints();
}

const TYPEDEF_MAP: Record<string, string> = {
  "uint8_t": "number",
  "unsigned short": "number",
  "uint16_t": "number",
  "uint32_t": "number",
  "uint64_t": "bigint",
  "int8_t": "number",
  "int16_t": "number",
  "int32_t": "number",
  "int64_t": "bigint",
  "void *": "Deno.PointerValue",
  "const void *": "Deno.PointerValue",
  "void **": "Deno.PointerValue",
  "const void **": "Deno.PointerValue",
  "_Bool": "boolean",
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

async function generateTypes(defs: any[], consts: any[]) {
  let output = "// Typedefs and Constants\n\n";

  // Generate Typedefs
  for (const def of defs) {
    const typedef = def.typedef;
    const dtype = def.type;

    const typeTrim = trimStructName(typedef); // Assuming trimStructName is defined elsewhere
    const otype = TYPEDEF_MAP[dtype] || fieldTypeConvert(dtype); // Assuming TYPEDEF_MAP and fieldTypeConvert are defined elsewhere
    if (REDUNDANT_TYPEDEFS[otype]) continue; // Assuming REDUNDANT_TYPEDEFS is defined elsewhere
    output += `export type ${typeTrim} = ${otype};\n`;
  }

  output += "\n"; // Add a separator between typedefs and consts

  // Generate Constants
  for (const con of consts) {
    const constname = con.constname;
    let consttype = con.consttype;
    const constval = con.constval;

    consttype = consttype.replace("const ", "").trim();
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

  await Deno.writeTextFile("openvr/types.ts", output); // Write to a single file
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
  let vrName = "";
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

  const result = `${isPtrPtr ? "^^" : ""}${isPtr ? "^" : ""}${arrayString}${coreType}`;
  return result;
}

const STRUCT_PRELUDE = `
import vk "vendor:vulkan"
import D3D11 "vendor:directx/d3d11"
import D3D12 "vendor:directx/d3d12"
`

async function generateStructs(structs: any[]) {
  let output = "// Structs\n\n";

  for (const str of structs) {
    const structName = str.struct;
    const structFields = str.fields;

    const structTrim = trimStructName(structName);
    if (structTrim === "(anonymous)" && structFields.length === 2) {
      output += `export interface OverlayIntersectionMaskPrimitive_Data {\n`;
    } else if (structTrim === "(anonymous)") {
      output += `export interface Event_Data {\n`;
    } else {
      output += `export interface ${structTrim} {\n`;
    }

    for (const field of structFields) {
      const fieldname = field.fieldname;
      const fieldtype = field.fieldtype;
      const odinType = fieldTypeConvert(fieldtype);

      const fieldnameTrim = trimFieldName(fieldname);
      output += `  ${fieldnameTrim}: ${odinType};\n`;
    }

    output += "}\n\n";
  }

  await Deno.writeTextFile("openvr/structs.ts", output);
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


async function generateMethods(methods: any[]) {
  let output = "// Methods\n\n";

  for (const iface of INTERFACE_NAMES) {
    const ifaceTrim = iface.replace("vr::IVR", "");
    output += `export interface I${ifaceTrim} {\n`;
    for (const meth of methods) {
      if (meth.classname !== iface) continue;
      const methName = meth.methodname;
      const methParams = meth.params;
      const methRet = meth.returntype;
      const retType = fieldTypeConvert(methRet);

      output += `  ${methName}: (`;
      if (methParams) {
        for (let i = 0; i < methParams.length; i++) {
          const par = methParams[i];
          const parname = par.paramname;
          const partype = par.paramtype;
          const odinType = fieldTypeConvert(partype);
          output += `${parname}: ${odinType}`;
          if (i < methParams.length - 1) output += ", ";
        }
      }

      if (retType === "void") {
        output += ") => void;\n";
      } else {
        output += `) => ${retType};\n`;
      }
    }
    output += "}\n\n";
  }

  await Deno.writeTextFile("openvr/procedures.ts", output);
}



async function generateEntrypoints() {
  const entrypoints = `
import { dlopen, FetchOptions } from "https://deno.land/x/plug/mod.ts";

const opts: FetchOptions = {
  name: "openvr_api",
  url: "https://example.com/path/to/openvr_api.dll",
};

const { symbols } = await dlopen(opts, {
  Init: { parameters: ["pointer", "i32"], result: "pointer" },
  Shutdown: { parameters: [], result: "void" },
  IsHmdPresent: { parameters: [], result: "bool" },
  GetGenericInterface: { parameters: ["pointer", "pointer"], result: "pointer" },
  IsRuntimeInstalled: { parameters: [], result: "bool" },
  GetInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },
  GetInitErrorAsDescription: { parameters: ["i32"], result: "pointer" },
});

export const {
  Init,
  Shutdown,
  IsHmdPresent,
  GetGenericInterface,
  IsRuntimeInstalled,
  GetInitErrorAsSymbol,
  GetInitErrorAsDescription,
} = symbols;
`;

  await Deno.writeTextFile("openvr/entrypoints.ts", entrypoints);
}

// Run the main function
main().catch(console.error);