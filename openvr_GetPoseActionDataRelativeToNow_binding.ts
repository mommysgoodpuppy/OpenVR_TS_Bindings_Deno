// Auto-generated OpenVR bindings for GetPoseActionDataRelativeToNow

export type VRActionHandle_t = bigint;





export type VRInputValueHandle_t = bigint;

export const enum ETrackingUniverseOrigin {
  TrackingUniverseSeated = 0,
  TrackingUniverseStanding = 1,
  TrackingUniverseRawAndUncalibrated = 2,
}
const ETrackingUniverseOriginFFIEnum = "u8" as Deno.NativeU8Enum<ETrackingUniverseOrigin>;

export const enum EVRInputError {
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
const EVRInputErrorFFIEnum = "u8" as Deno.NativeU8Enum<EVRInputError>;

type GetPoseActionDataRelativeToNowTyped = Deno.UnsafeCallbackDefinition<
  ["pointer", "u64", typeof ETrackingUniverseOriginFFIEnum, "f32", "pointer", "u32", "u64"],
  typeof EVRInputErrorFFIEnum
>;
const myFunction = "function" as Deno.NativeTypedFunction<
GetPoseActionDataRelativeToNowTyped
>;

dylib.get

export class IVRInput {
  constructor(private ptr: Deno.PointerValue) {}  

    GetPoseActionDataRelativeToNowTyped(action: VRActionHandle_t, eOrigin: ETrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: Deno.PointerValue, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError { 
      if (this.ptr === null) throw new Error("Invalid pointer");
      const vr = new Deno.UnsafePointerView(this.ptr);
      const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
      if (vtablePtr === null) throw new Error("Invalid pointer");
      const vtable = new Deno.UnsafePointerView(vtablePtr);
      const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
      if (funcPtr === null) throw new Error("Invalid function pointer");
      
      const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", ETrackingUniverseOriginFFIEnum, "f32", "pointer", "u32", "u64"], result: EVRInputErrorFFIEnum});
      const result = func.call(this.ptr, action, eOrigin, fPredictedSecondsFromNow, pActionData, unActionDataSize, ulRestrictToDevice);
      return result;
    }
}
