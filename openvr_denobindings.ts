// Auto-generated OpenVR bindings for GetPoseActionDataRelativeToNow

// Auto-generated OpenVR bindings for Deno

const lib = Deno.dlopen("openvr_api.dll", {
  VR_InitInternal: { parameters: ["pointer", "i32"], result: "pointer" },
  VR_ShutdownInternal: { parameters: [], result: "void" },
  VR_IsHmdPresent: { parameters: [], result: "i32" },
  VR_GetGenericInterface: { parameters: ["pointer", "pointer"], result: "pointer" },
  VR_IsRuntimeInstalled: { parameters: [], result: "i32" },
  VR_GetVRInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },
  VR_GetVRInitErrorAsEnglishDescription: { parameters: ["i32"], result: "pointer" },
});

export function VR_InitInternal(peError: Deno.PointerValue, eType: number): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_InitInternal(peError, eType) as Deno.FromNativeType<undefined>;
}

export function VR_ShutdownInternal(): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_ShutdownInternal() as Deno.FromNativeType<undefined>;
}

export function VR_IsHmdPresent(): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_IsHmdPresent() as Deno.FromNativeType<undefined>;
}

export function VR_GetGenericInterface(pchInterfaceVersion: Deno.PointerValue, peError: Deno.PointerValue): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_GetGenericInterface(pchInterfaceVersion, peError) as Deno.FromNativeType<undefined>;
}

export function VR_IsRuntimeInstalled(): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_IsRuntimeInstalled() as Deno.FromNativeType<undefined>;
}

export function VR_GetVRInitErrorAsSymbol(error: number): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_GetVRInitErrorAsSymbol(error) as Deno.FromNativeType<undefined>;
}

export function VR_GetVRInitErrorAsEnglishDescription(error: number): Deno.FromNativeType<undefined> {
  return lib.symbols.VR_GetVRInitErrorAsEnglishDescription(error) as Deno.FromNativeType<undefined>;
}



export type VRActionHandle_t = number | bigint;
export type VRInputValueHandle_t = number | bigint;

export enum ETrackingUniverseOrigin {
  TrackingUniverseSeated = 0,
  TrackingUniverseStanding = 1,
  TrackingUniverseRawAndUncalibrated = 2,
}

export enum EVRInputError {
  VRInputError_None = 0,
  VRInputError_NameNotFound = 1,
  VRInputError_WrongType = 2,
  VRInputError_InvalidHandle = 3,
  VRInputError_InvalidParam = 4,
  VRInputError_NoSteam = 5,
  VRInputError_MaxCapacityReached = 6,
  VRInputError_IPCError = 7,
  VRInputError_NoActiveActionSet = 8,
  VRInputError_InvalidDevice = 9,
  VRInputError_InvalidSkeleton = 10,
  VRInputError_InvalidBoneCount = 11,
  VRInputError_InvalidCompressedData = 12,
  VRInputError_NoData = 13,
  VRInputError_BufferTooSmall = 14,
  VRInputError_MismatchedActionManifest = 15,
  VRInputError_MissingSkeletonData = 16,
  VRInputError_InvalidBoneIndex = 17,
  VRInputError_InvalidPriority = 18,
  VRInputError_PermissionDenied = 19,
  VRInputError_InvalidRenderModel = 20,
}

export type InputPoseActionData_t = {
  bActive: _Bool;
  activeOrigin: VRInputValueHandle_t;
  pose: TrackedDevicePose_t;
};

export type TrackedDevicePose_t = {
  mDeviceToAbsoluteTracking: HmdMatrix34_t;
  vVelocity: HmdVector3_t;
  vAngularVelocity: HmdVector3_t;
  eTrackingResult: number;
  bPoseIsValid: _Bool;
  bDeviceIsConnected: _Bool;
};

export type HmdMatrix34_t = {
  m: float [3][4];
};

export type HmdVector3_t = {
  v: float [3];
};


export function VR_GetGenericInterface(interfaceVersion: string, error: Deno.PointerValue | null): Deno.PointerValue {
  const result = lib.symbols.VR_GetGenericInterface(interfaceVersion, error);
  return result;
}

function getOpenVRFunction(interfaceName: string, functionName: string): Function {
  const genericInterface = VR_GetGenericInterface(interfaceName, null);
  if (!genericInterface) {
    throw new Error(`Failed to get interface ${interfaceName}`);
  }
  const fn = new Deno.UnsafeCallback(
    { parameters: ["pointer", "pointer"], result: "void" },
    (ctx, fn) => {
      // Implementation depends on how OpenVR exposes functions
      // This is a placeholder and needs to be adjusted based on OpenVR's actual implementation
    }
  );
  return fn;
}

export function GetPoseActionDataRelativeToNow(action: vr::VRActionHandle_t, eOrigin: vr::ETrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: Deno.PointerValue, unActionDataSize: number, ulRestrictToDevice: vr::VRInputValueHandle_t): vr::EVRInputError {
  const interfaceName = "IVRInput";
  const functionName = "GetPoseActionDataRelativeToNow";
  const fn = getOpenVRFunction(interfaceName, functionName);
  const result = fn(action, eOrigin, fPredictedSecondsFromNow, pActionData, unActionDataSize, ulRestrictToDevice);
  return result as vr::EVRInputError;
}