import { typeMapping, openVRFunctions, mapOpenVRTypeToDeno, OpenVRType, generateOpenVRBindings } from "../utils.ts";


/*
Global entry points
S_API intptr_t VR_InitInternal( EVRInitError *peError, EVRApplicationType eType );
S_API void VR_ShutdownInternal();
S_API bool VR_IsHmdPresent();
S_API intptr_t VR_GetGenericInterface( const char *pchInterfaceVersion, EVRInitError *peError );
S_API bool VR_IsRuntimeInstalled();
S_API const char * VR_GetVRInitErrorAsSymbol( EVRInitError error );
S_API const char * VR_GetVRInitErrorAsEnglishDescription( EVRInitError error );
*/

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetPoseActionDataRelativeToNow",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "fPredictedSecondsFromNow",
      "paramtype": "float"
    },
    {
      "paramname": "pActionData",
      "paramtype": "struct vr::InputPoseActionData_t *"
    },
    {
      "paramname": "unActionDataSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "ulRestrictToDevice",
      "paramtype": "vr::VRInputValueHandle_t"
    }
  ]
}*/

const openvrApiJson = await Deno.readTextFile("openvr_api.json");
const data = JSON.parse(openvrApiJson);

function generateClassBinding(className: string, method: any, data: any): string {
  let output = `export class ${className.replace("vr::", "")} {
  constructor(private ptr: Deno.PointerValue) {}`;

  output += `  ${generateMethodBinding(method, data)}\n`;
  output += "}\n";
  return output;
}

function generateMethodBinding(method: any, data: any): string {
  let output = "";

  const paramsList = method.params.map((param: any) =>
    `${param.paramname}: ${mapOpenVRTypeToDeno(param.paramtype)}`
  ).join(", ");

  const returnType = mapOpenVRTypeToDeno(method.returntype || "void");

  const paramTypes = method.params.map((param: any) =>
    getFfiType(param.paramtype, data)
  ).join(", ");

  const paramsListwithoutVR = paramsList.replace(/vr::+/g, "");

  output += `

    ${method.methodname}Typed(${paramsListwithoutVR}): ${returnType.replace(/vr::+/g, "")} { 
      if (this.ptr === null) throw new Error("Invalid pointer");
      const vr = new Deno.UnsafePointerView(this.ptr);
      const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
      if (vtablePtr === null) throw new Error("Invalid pointer");
      const vtable = new Deno.UnsafePointerView(vtablePtr);
      const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
      if (funcPtr === null) throw new Error("Invalid function pointer");
      
      const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", ${paramTypes}], result: ${getFfiType(method.returntype, data)}});
      const result = func.call(this.ptr, ${getfuncallparams(method)});
      return result;
    }`;
  return output;

}

function getfuncallparams(method: any): string {
  let output = "";

  output += `${method.params.map((p: any) => p.paramname).join(", ")}`
  return output;
}

function getFfiType(type: string, data: any): string {

  const typedefs: any[] = data.typedefs
  const enums: any[] = data.enums


  // Remove 'vr::' prefix and any 'struct ' or 'enum ' prefixes
  const cleanType = type.replace('vr::', '').replace('struct ', '').replace('enum ', '');

  // Check if it's a pointer type
  if (cleanType.includes('*')) {
    return '"pointer"';
  }

  // Check if it's in our typeMapping
  for (const [key, value] of Object.entries(typeMapping)) {
    if (value.c === cleanType) {
      return `"${value.ffi}"`;
    }
  }

  // Check if it's a typedef
  const typedef = typedefs.find(t => t.typedef === `vr::${cleanType}`);
  if (typedef) {
    return getFfiType(typedef.type, typedefs);
  }

  //check if it's an enum
  const enum_ = enums?.find(e => e.enumname === `vr::${cleanType}`);
  if (enum_) {
    return `${enum_.enumname.replace('vr::', '')}FFIEnum`;
  }

  // If we can't determine the type, throw an error
  throw new Error(`Unknown type: ${type}`);
}

function generateEnumFFIType(_enum: any): string {
  const a = _enum.replace("vr::", "");
  return `const ${a}FFIEnum = "u8" as Deno.NativeU8Enum<${a}>;`;
}

function generateDependencies(data: any, methodName: string): string {
  const method = data.methods.find((m: any) => m.methodname === methodName);
  if (!method) return "";

  let output = `// Auto-generated OpenVR bindings for ${methodName}\n\n`;

  const dependencies = new Set<string>();
  method.params.forEach((param: any) => {
    dependencies.add(param.paramtype.replace('vr::', ''));
  });
  dependencies.add(method.returntype.replace('vr::', ''));

  // Generate required typedefs
  data.typedefs.filter((t: any) => dependencies.has(t.typedef.replace('vr::', ''))).forEach((typedef: any) => {
    output += `export type ${typedef.typedef.replace('vr::', '')} = ${mapOpenVRTypeToDeno(typedef.type)};\n\n`;
  });

  // Generate required enums
  data.enums.filter((e: any) => dependencies.has(e.enumname.replace('vr::', ''))).forEach((enum_: any) => {
    const values = enum_.values.map((v: any) => `  ${v.name} = ${v.value},`).join("\n");
    output += `export const enum ${enum_.enumname.replace('vr::', '')} {\n${values}\n}\n`;
    output += `${generateEnumFFIType(enum_.enumname)}\n\n`;
  });

  // Generate class and method
  output += generateClassBinding(method.classname, method, data);

  return output;
}

const bindingsContent = generateDependencies(data, "GetPoseActionDataRelativeToNow");

// Write the bindings to a file
Deno.writeTextFile("openvr_GetPoseActionDataRelativeToNow_binding.ts", bindingsContent)
  .then(() => console.log("OpenVR GetPoseActionDataRelativeToNow binding generated successfully."))
  .catch((error) => console.error("Error writing binding file:", error));