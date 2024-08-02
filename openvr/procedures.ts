// Methods

export interface ISystem {
  GetRecommendedRenderTargetSize: (pnWidth: ^number, pnHeight: ^number) => void;
  GetProjectionMatrix: (eEye: Eye, fNearZ: number, fFarZ: number) => HmdMatrix44;
  GetProjectionRaw: (eEye: Eye, pfLeft: ^number, pfRight: ^number, pfTop: ^number, pfBottom: ^number) => void;
  ComputeDistortion: (eEye: Eye, fU: number, fV: number, pDistortionCoordinates: ^DistortionCoordinates) => bool;
  GetEyeToHeadTransform: (eEye: Eye) => HmdMatrix34;
  GetTimeSinceLastVsync: (pfSecondsSinceLastVsync: ^number, pulFrameCounter: ^bigint) => bool;
  GetD3D9AdapterIndex: () => number;
  GetDXGIOutputInfo: (pnAdapterIndex: ^number) => void;
  GetOutputDevice: (pnDevice: ^bigint, textureType: TextureType, pInstance: ^VkInstance_T) => void;
  IsDisplayOnDesktop: () => bool;
  SetDisplayVisibility: (bIsVisibleOnDesktop: bool) => bool;
  GetDeviceToAbsoluteTrackingPose: (eOrigin: TrackingUniverseOrigin, fPredictedSecondsToPhotonsFromNow: number, pTrackedDevicePoseArray: ^TrackedDevicePose, unTrackedDevicePoseArrayCount: number) => void;
  GetSeatedZeroPoseToStandingAbsoluteTrackingPose: () => HmdMatrix34;
  GetRawZeroPoseToStandingAbsoluteTrackingPose: () => HmdMatrix34;
  GetSortedTrackedDeviceIndicesOfClass: (eTrackedDeviceClass: TrackedDeviceClass, punTrackedDeviceIndexArray: ^TrackedDeviceIndex, unTrackedDeviceIndexArrayCount: number, unRelativeToTrackedDeviceIndex: TrackedDeviceIndex) => number;
  GetTrackedDeviceActivityLevel: (unDeviceId: TrackedDeviceIndex) => DeviceActivityLevel;
  ApplyTransform: (pOutputPose: ^TrackedDevicePose, pTrackedDevicePose: ^TrackedDevicePose, pTransform: ^HmdMatrix34) => void;
  GetTrackedDeviceIndexForControllerRole: (unDeviceType: TrackedControllerRole) => TrackedDeviceIndex;
  GetControllerRoleForTrackedDeviceIndex: (unDeviceIndex: TrackedDeviceIndex) => TrackedControllerRole;
  GetTrackedDeviceClass: (unDeviceIndex: TrackedDeviceIndex) => TrackedDeviceClass;
  IsTrackedDeviceConnected: (unDeviceIndex: TrackedDeviceIndex) => bool;
  GetBoolTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: ^TrackedPropertyError) => bool;
  GetFloatTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: ^TrackedPropertyError) => number;
  GetInt32TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: ^TrackedPropertyError) => number;
  GetUint64TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: ^TrackedPropertyError) => bigint;
  GetMatrix34TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: ^TrackedPropertyError) => HmdMatrix34;
  GetArrayTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, propType: PropertyTypeTag, pBuffer: Deno.PointerValue, unBufferSize: number, pError: ^TrackedPropertyError) => number;
  GetStringTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pchValue: string, unBufferSize: number, pError: ^TrackedPropertyError) => number;
  GetPropErrorNameFromEnum: (error: TrackedPropertyError) => string;
  PollNextEvent: (pEvent: ^Event, uncbVREvent: number) => bool;
  PollNextEventWithPose: (eOrigin: TrackingUniverseOrigin, pEvent: ^Event, uncbVREvent: number, pTrackedDevicePose: ^TrackedDevicePose) => bool;
  GetEventTypeNameFromEnum: (eType: EventType) => string;
  GetHiddenAreaMesh: (eEye: Eye, type: HiddenAreaMeshType) => HiddenAreaMesh;
  GetControllerState: (unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: ^ControllerState, unControllerStateSize: number) => bool;
  GetControllerStateWithPose: (eOrigin: TrackingUniverseOrigin, unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: ^ControllerState, unControllerStateSize: number, pTrackedDevicePose: ^TrackedDevicePose) => bool;
  TriggerHapticPulse: (unControllerDeviceIndex: TrackedDeviceIndex, unAxisId: number, usDurationMicroSec: number) => void;
  GetButtonIdNameFromEnum: (eButtonId: ButtonId) => string;
  GetControllerAxisTypeNameFromEnum: (eAxisType: ControllerAxisType) => string;
  IsInputAvailable: () => bool;
  IsSteamVRDrawingControllers: () => bool;
  ShouldApplicationPause: () => bool;
  ShouldApplicationReduceRenderingWork: () => bool;
  PerformFirmwareUpdate: (unDeviceIndex: TrackedDeviceIndex) => FirmwareError;
  AcknowledgeQuit_Exiting: () => void;
  GetAppContainerFilePaths: (pchBuffer: string, unBufferSize: number) => number;
  GetRuntimeVersion: () => string;
}

export interface IChaperone {
  GetCalibrationState: () => ChaperoneCalibrationState;
  GetPlayAreaSize: (pSizeX: ^number, pSizeZ: ^number) => bool;
  GetPlayAreaRect: (rect: ^HmdQuad) => bool;
  ReloadInfo: () => void;
  SetSceneColor: (color: HmdColor) => void;
  GetBoundsColor: (pOutputColorArray: ^HmdColor, nNumOutputColors: int, flCollisionBoundsFadeDistance: number, pOutputCameraColor: ^HmdColor) => void;
  AreBoundsVisible: () => bool;
  ForceBoundsVisible: (bForce: bool) => void;
  ResetZeroPose: (eTrackingUniverseOrigin: TrackingUniverseOrigin) => void;
}

export interface IChaperoneSetup {
  CommitWorkingCopy: (configFile: ChaperoneConfigFile) => bool;
  RevertWorkingCopy: () => void;
  GetWorkingPlayAreaSize: (pSizeX: ^number, pSizeZ: ^number) => bool;
  GetWorkingPlayAreaRect: (rect: ^HmdQuad) => bool;
  GetWorkingCollisionBoundsInfo: (pQuadsBuffer: ^HmdQuad, punQuadsCount: ^number) => bool;
  GetLiveCollisionBoundsInfo: (pQuadsBuffer: ^HmdQuad, punQuadsCount: ^number) => bool;
  GetWorkingSeatedZeroPoseToRawTrackingPose: (pmatSeatedZeroPoseToRawTrackingPose: ^HmdMatrix34) => bool;
  GetWorkingStandingZeroPoseToRawTrackingPose: (pmatStandingZeroPoseToRawTrackingPose: ^HmdMatrix34) => bool;
  SetWorkingPlayAreaSize: (sizeX: number, sizeZ: number) => void;
  SetWorkingCollisionBoundsInfo: (pQuadsBuffer: ^HmdQuad, unQuadsCount: number) => void;
  SetWorkingPerimeter: (pPointBuffer: ^HmdVector2, unPointCount: number) => void;
  SetWorkingSeatedZeroPoseToRawTrackingPose: (pMatSeatedZeroPoseToRawTrackingPose: ^HmdMatrix34) => void;
  SetWorkingStandingZeroPoseToRawTrackingPose: (pMatStandingZeroPoseToRawTrackingPose: ^HmdMatrix34) => void;
  ReloadFromDisk: (configFile: ChaperoneConfigFile) => void;
  GetLiveSeatedZeroPoseToRawTrackingPose: (pmatSeatedZeroPoseToRawTrackingPose: ^HmdMatrix34) => bool;
  ExportLiveToBuffer: (pBuffer: string, pnBufferLength: ^number) => bool;
  ImportFromBufferToWorking: (pBuffer: string, nImportFlags: number) => bool;
  ShowWorkingSetPreview: () => void;
  HideWorkingSetPreview: () => void;
  RoomSetupStarting: () => void;
}

export interface ICompositor {
  SetTrackingSpace: (eOrigin: TrackingUniverseOrigin) => void;
  GetTrackingSpace: () => TrackingUniverseOrigin;
  WaitGetPoses: (pRenderPoseArray: ^TrackedDevicePose, unRenderPoseArrayCount: number, pGamePoseArray: ^TrackedDevicePose, unGamePoseArrayCount: number) => CompositorError;
  GetLastPoses: (pRenderPoseArray: ^TrackedDevicePose, unRenderPoseArrayCount: number, pGamePoseArray: ^TrackedDevicePose, unGamePoseArrayCount: number) => CompositorError;
  GetLastPoseForTrackedDeviceIndex: (unDeviceIndex: TrackedDeviceIndex, pOutputPose: ^TrackedDevicePose, pOutputGamePose: ^TrackedDevicePose) => CompositorError;
  Submit: (eEye: Eye, pTexture: ^Texture, pBounds: ^TextureBounds, nSubmitFlags: SubmitFlags) => CompositorError;
  SubmitWithArrayIndex: (eEye: Eye, pTexture: ^Texture, unTextureArrayIndex: number, pBounds: ^TextureBounds, nSubmitFlags: SubmitFlags) => CompositorError;
  ClearLastSubmittedFrame: () => void;
  PostPresentHandoff: () => void;
  GetFrameTiming: (pTiming: ^Compositor_FrameTiming, unFramesAgo: number) => bool;
  GetFrameTimings: (pTiming: ^Compositor_FrameTiming, nFrames: number) => number;
  GetFrameTimeRemaining: () => number;
  GetCumulativeStats: (pStats: ^Compositor_CumulativeStats, nStatsSizeInBytes: number) => void;
  FadeToColor: (fSeconds: number, fRed: number, fGreen: number, fBlue: number, fAlpha: number, bBackground: bool) => void;
  GetCurrentFadeColor: (bBackground: bool) => HmdColor;
  FadeGrid: (fSeconds: number, bFadeGridIn: bool) => void;
  GetCurrentGridAlpha: () => number;
  SetSkyboxOverride: (pTextures: ^Texture, unTextureCount: number) => CompositorError;
  ClearSkyboxOverride: () => void;
  CompositorBringToFront: () => void;
  CompositorGoToBack: () => void;
  CompositorQuit: () => void;
  IsFullscreen: () => bool;
  GetCurrentSceneFocusProcess: () => number;
  GetLastFrameRenderer: () => number;
  CanRenderScene: () => bool;
  ShowMirrorWindow: () => void;
  HideMirrorWindow: () => void;
  IsMirrorWindowVisible: () => bool;
  CompositorDumpImages: () => void;
  ShouldAppRenderWithLowResources: () => bool;
  ForceInterleavedReprojectionOn: (bOverride: bool) => void;
  ForceReconnectProcess: () => void;
  SuspendRendering: (bSuspend: bool) => void;
  GetMirrorTextureD3D11: (eEye: Eye, pD3D11DeviceOrResource: Deno.PointerValue, ppD3D11ShaderResourceView: Deno.PointerValue) => CompositorError;
  ReleaseMirrorTextureD3D11: (pD3D11ShaderResourceView: Deno.PointerValue) => void;
  GetMirrorTextureGL: (eEye: Eye, pglTextureId: ^glUInt, pglSharedTextureHandle: ^glSharedTextureHandle) => CompositorError;
  ReleaseSharedGLTexture: (glTextureId: glUInt, glSharedTextureHandle: glSharedTextureHandle) => bool;
  LockGLSharedTextureForAccess: (glSharedTextureHandle: glSharedTextureHandle) => void;
  UnlockGLSharedTextureForAccess: (glSharedTextureHandle: glSharedTextureHandle) => void;
  GetVulkanInstanceExtensionsRequired: (pchValue: string, unBufferSize: number) => number;
  GetVulkanDeviceExtensionsRequired: (pPhysicalDevice: ^VkPhysicalDevice_T, pchValue: string, unBufferSize: number) => number;
  SetExplicitTimingMode: (eTimingMode: CompositorTimingMode) => void;
  SubmitExplicitTimingData: () => CompositorError;
  IsMotionSmoothingEnabled: () => bool;
  IsMotionSmoothingSupported: () => bool;
  IsCurrentSceneFocusAppLoading: () => bool;
  SetStageOverride_Async: (pchRenderModelPath: string, pTransform: ^HmdMatrix34, pRenderSettings: ^Compositor_StageRenderSettings, nSizeOfRenderSettings: number) => CompositorError;
  ClearStageOverride: () => void;
  GetCompositorBenchmarkResults: (pBenchmarkResults: ^Compositor_BenchmarkResults, nSizeOfBenchmarkResults: number) => bool;
  GetLastPosePredictionIDs: (pRenderPosePredictionID: ^number, pGamePosePredictionID: ^number) => CompositorError;
  GetPosesForFrame: (unPosePredictionID: number, pPoseArray: ^TrackedDevicePose, unPoseArrayCount: number) => CompositorError;
}

export interface IHeadsetView {
  SetHeadsetViewSize: (nWidth: number, nHeight: number) => void;
  GetHeadsetViewSize: (pnWidth: ^number, pnHeight: ^number) => void;
  SetHeadsetViewMode: (eHeadsetViewMode: HeadsetViewMode) => void;
  GetHeadsetViewMode: () => HeadsetViewMode;
  SetHeadsetViewCropped: (bCropped: bool) => void;
  GetHeadsetViewCropped: () => bool;
  GetHeadsetViewAspectRatio: () => number;
  SetHeadsetViewBlendRange: (flStartPct: number, flEndPct: number) => void;
  GetHeadsetViewBlendRange: (pStartPct: ^number, pEndPct: ^number) => void;
}

export interface IOverlay {
  FindOverlay: (pchOverlayKey: string, pOverlayHandle: ^OverlayHandle) => OverlayError;
  CreateOverlay: (pchOverlayKey: string, pchOverlayName: string, pOverlayHandle: ^OverlayHandle) => OverlayError;
  DestroyOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  GetOverlayKey: (ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: ^OverlayError) => number;
  GetOverlayName: (ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: ^OverlayError) => number;
  SetOverlayName: (ulOverlayHandle: OverlayHandle, pchName: string) => OverlayError;
  GetOverlayImageData: (ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue, unBufferSize: number, punWidth: ^number, punHeight: ^number) => OverlayError;
  GetOverlayErrorNameFromEnum: (error: OverlayError) => string;
  SetOverlayRenderingPid: (ulOverlayHandle: OverlayHandle, unPID: number) => OverlayError;
  GetOverlayRenderingPid: (ulOverlayHandle: OverlayHandle) => number;
  SetOverlayFlag: (ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, bEnabled: bool) => OverlayError;
  GetOverlayFlag: (ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, pbEnabled: ^bool) => OverlayError;
  GetOverlayFlags: (ulOverlayHandle: OverlayHandle, pFlags: ^number) => OverlayError;
  SetOverlayColor: (ulOverlayHandle: OverlayHandle, fRed: number, fGreen: number, fBlue: number) => OverlayError;
  GetOverlayColor: (ulOverlayHandle: OverlayHandle, pfRed: ^number, pfGreen: ^number, pfBlue: ^number) => OverlayError;
  SetOverlayAlpha: (ulOverlayHandle: OverlayHandle, fAlpha: number) => OverlayError;
  GetOverlayAlpha: (ulOverlayHandle: OverlayHandle, pfAlpha: ^number) => OverlayError;
  SetOverlayTexelAspect: (ulOverlayHandle: OverlayHandle, fTexelAspect: number) => OverlayError;
  GetOverlayTexelAspect: (ulOverlayHandle: OverlayHandle, pfTexelAspect: ^number) => OverlayError;
  SetOverlaySortOrder: (ulOverlayHandle: OverlayHandle, unSortOrder: number) => OverlayError;
  GetOverlaySortOrder: (ulOverlayHandle: OverlayHandle, punSortOrder: ^number) => OverlayError;
  SetOverlayWidthInMeters: (ulOverlayHandle: OverlayHandle, fWidthInMeters: number) => OverlayError;
  GetOverlayWidthInMeters: (ulOverlayHandle: OverlayHandle, pfWidthInMeters: ^number) => OverlayError;
  SetOverlayCurvature: (ulOverlayHandle: OverlayHandle, fCurvature: number) => OverlayError;
  GetOverlayCurvature: (ulOverlayHandle: OverlayHandle, pfCurvature: ^number) => OverlayError;
  SetOverlayPreCurvePitch: (ulOverlayHandle: OverlayHandle, fRadians: number) => OverlayError;
  GetOverlayPreCurvePitch: (ulOverlayHandle: OverlayHandle, pfRadians: ^number) => OverlayError;
  SetOverlayTextureColorSpace: (ulOverlayHandle: OverlayHandle, eTextureColorSpace: ColorSpace) => OverlayError;
  GetOverlayTextureColorSpace: (ulOverlayHandle: OverlayHandle, peTextureColorSpace: ^ColorSpace) => OverlayError;
  SetOverlayTextureBounds: (ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: ^TextureBounds) => OverlayError;
  GetOverlayTextureBounds: (ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: ^TextureBounds) => OverlayError;
  GetOverlayTransformType: (ulOverlayHandle: OverlayHandle, peTransformType: ^OverlayTransformType) => OverlayError;
  SetOverlayTransformAbsolute: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: ^HmdMatrix34) => OverlayError;
  GetOverlayTransformAbsolute: (ulOverlayHandle: OverlayHandle, peTrackingOrigin: ^TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: ^HmdMatrix34) => OverlayError;
  SetOverlayTransformTrackedDeviceRelative: (ulOverlayHandle: OverlayHandle, unTrackedDevice: TrackedDeviceIndex, pmatTrackedDeviceToOverlayTransform: ^HmdMatrix34) => OverlayError;
  GetOverlayTransformTrackedDeviceRelative: (ulOverlayHandle: OverlayHandle, punTrackedDevice: ^TrackedDeviceIndex, pmatTrackedDeviceToOverlayTransform: ^HmdMatrix34) => OverlayError;
  SetOverlayTransformTrackedDeviceComponent: (ulOverlayHandle: OverlayHandle, unDeviceIndex: TrackedDeviceIndex, pchComponentName: string) => OverlayError;
  GetOverlayTransformTrackedDeviceComponent: (ulOverlayHandle: OverlayHandle, punDeviceIndex: ^TrackedDeviceIndex, pchComponentName: string, unComponentNameSize: number) => OverlayError;
  SetOverlayTransformCursor: (ulCursorOverlayHandle: OverlayHandle, pvHotspot: ^HmdVector2) => OverlayError;
  GetOverlayTransformCursor: (ulOverlayHandle: OverlayHandle, pvHotspot: ^HmdVector2) => OverlayError;
  SetOverlayTransformProjection: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: ^HmdMatrix34, pProjection: ^OverlayProjection, eEye: Eye) => OverlayError;
  ShowOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  HideOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  IsOverlayVisible: (ulOverlayHandle: OverlayHandle) => bool;
  GetTransformForOverlayCoordinates: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, coordinatesInOverlay: HmdVector2, pmatTransform: ^HmdMatrix34) => OverlayError;
  WaitFrameSync: (nTimeoutMs: number) => OverlayError;
  PollNextOverlayEvent: (ulOverlayHandle: OverlayHandle, pEvent: ^Event, uncbVREvent: number) => bool;
  GetOverlayInputMethod: (ulOverlayHandle: OverlayHandle, peInputMethod: ^OverlayInputMethod) => OverlayError;
  SetOverlayInputMethod: (ulOverlayHandle: OverlayHandle, eInputMethod: OverlayInputMethod) => OverlayError;
  GetOverlayMouseScale: (ulOverlayHandle: OverlayHandle, pvecMouseScale: ^HmdVector2) => OverlayError;
  SetOverlayMouseScale: (ulOverlayHandle: OverlayHandle, pvecMouseScale: ^HmdVector2) => OverlayError;
  ComputeOverlayIntersection: (ulOverlayHandle: OverlayHandle, pParams: ^OverlayIntersectionParams, pResults: ^OverlayIntersectionResults) => bool;
  IsHoverTargetOverlay: (ulOverlayHandle: OverlayHandle) => bool;
  SetOverlayIntersectionMask: (ulOverlayHandle: OverlayHandle, pMaskPrimitives: ^OverlayIntersectionMaskPrimitive, unNumMaskPrimitives: number, unPrimitiveSize: number) => OverlayError;
  TriggerLaserMouseHapticVibration: (ulOverlayHandle: OverlayHandle, fDurationSeconds: number, fFrequency: number, fAmplitude: number) => OverlayError;
  SetOverlayCursor: (ulOverlayHandle: OverlayHandle, ulCursorHandle: OverlayHandle) => OverlayError;
  SetOverlayCursorPositionOverride: (ulOverlayHandle: OverlayHandle, pvCursor: ^HmdVector2) => OverlayError;
  ClearOverlayCursorPositionOverride: (ulOverlayHandle: OverlayHandle) => OverlayError;
  SetOverlayTexture: (ulOverlayHandle: OverlayHandle, pTexture: ^Texture) => OverlayError;
  ClearOverlayTexture: (ulOverlayHandle: OverlayHandle) => OverlayError;
  SetOverlayRaw: (ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue, unWidth: number, unHeight: number, unBytesPerPixel: number) => OverlayError;
  SetOverlayFromFile: (ulOverlayHandle: OverlayHandle, pchFilePath: string) => OverlayError;
  GetOverlayTexture: (ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue, pNativeTextureRef: Deno.PointerValue, pWidth: ^number, pHeight: ^number, pNativeFormat: ^number, pAPIType: ^TextureType, pColorSpace: ^ColorSpace, pTextureBounds: ^TextureBounds) => OverlayError;
  ReleaseNativeOverlayHandle: (ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue) => OverlayError;
  GetOverlayTextureSize: (ulOverlayHandle: OverlayHandle, pWidth: ^number, pHeight: ^number) => OverlayError;
  CreateDashboardOverlay: (pchOverlayKey: string, pchOverlayFriendlyName: string, pMainHandle: ^OverlayHandle, pThumbnailHandle: ^OverlayHandle) => OverlayError;
  IsDashboardVisible: () => bool;
  IsActiveDashboardOverlay: (ulOverlayHandle: OverlayHandle) => bool;
  SetDashboardOverlaySceneProcess: (ulOverlayHandle: OverlayHandle, unProcessId: number) => OverlayError;
  GetDashboardOverlaySceneProcess: (ulOverlayHandle: OverlayHandle, punProcessId: ^number) => OverlayError;
  ShowDashboard: (pchOverlayToShow: string) => void;
  GetPrimaryDashboardDevice: () => TrackedDeviceIndex;
  ShowKeyboard: (eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint) => OverlayError;
  ShowKeyboardForOverlay: (ulOverlayHandle: OverlayHandle, eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint) => OverlayError;
  GetKeyboardText: (pchText: string, cchText: number) => number;
  HideKeyboard: () => void;
  SetKeyboardTransformAbsolute: (eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToKeyboardTransform: ^HmdMatrix34) => void;
  SetKeyboardPositionForOverlay: (ulOverlayHandle: OverlayHandle, avoidRect: HmdRect2) => void;
  ShowMessageOverlay: (pchText: string, pchCaption: string, pchButton0Text: string, pchButton1Text: string, pchButton2Text: string, pchButton3Text: string) => MessageOverlayResponse;
  CloseMessageOverlay: () => void;
}

export interface IOverlayView {
  AcquireOverlayView: (ulOverlayHandle: OverlayHandle, pNativeDevice: ^NativeDevice, pOverlayView: ^OverlayView, unOverlayViewSize: number) => OverlayError;
  ReleaseOverlayView: (pOverlayView: ^OverlayView) => OverlayError;
  PostOverlayEvent: (ulOverlayHandle: OverlayHandle, pvrEvent: ^Event) => void;
  IsViewingPermitted: (ulOverlayHandle: OverlayHandle) => bool;
}

export interface IResources {
  LoadSharedResource: (pchResourceName: string, pchBuffer: string, unBufferLen: number) => number;
  GetResourceFullPath: (pchResourceName: string, pchResourceTypeDirectory: string, pchPathBuffer: string, unBufferLen: number) => number;
}

export interface IRenderModels {
  LoadRenderModel_Async: (pchRenderModelName: string, ppRenderModel: ^^RenderModel) => RenderModelError;
  FreeRenderModel: (pRenderModel: ^RenderModel) => void;
  LoadTexture_Async: (textureId: TextureID, ppTexture: ^^RenderModel_TextureMap) => RenderModelError;
  FreeTexture: (pTexture: ^RenderModel_TextureMap) => void;
  LoadTextureD3D11_Async: (textureId: TextureID, pD3D11Device: Deno.PointerValue, ppD3D11Texture2D: Deno.PointerValue) => RenderModelError;
  LoadIntoTextureD3D11_Async: (textureId: TextureID, pDstTexture: Deno.PointerValue) => RenderModelError;
  FreeTextureD3D11: (pD3D11Texture2D: Deno.PointerValue) => void;
  GetRenderModelName: (unRenderModelIndex: number, pchRenderModelName: string, unRenderModelNameLen: number) => number;
  GetRenderModelCount: () => number;
  GetComponentCount: (pchRenderModelName: string) => number;
  GetComponentName: (pchRenderModelName: string, unComponentIndex: number, pchComponentName: string, unComponentNameLen: number) => number;
  GetComponentButtonMask: (pchRenderModelName: string, pchComponentName: string) => bigint;
  GetComponentRenderModelName: (pchRenderModelName: string, pchComponentName: string, pchComponentRenderModelName: string, unComponentRenderModelNameLen: number) => number;
  GetComponentStateForDevicePath: (pchRenderModelName: string, pchComponentName: string, devicePath: InputValueHandle, pState: ^RenderModel_ControllerMode_State, pComponentState: ^RenderModel_ComponentState) => bool;
  GetComponentState: (pchRenderModelName: string, pchComponentName: string, pControllerState: ^ControllerState, pState: ^RenderModel_ControllerMode_State, pComponentState: ^RenderModel_ComponentState) => bool;
  RenderModelHasComponent: (pchRenderModelName: string, pchComponentName: string) => bool;
  GetRenderModelThumbnailURL: (pchRenderModelName: string, pchThumbnailURL: string, unThumbnailURLLen: number, peError: ^RenderModelError) => number;
  GetRenderModelOriginalPath: (pchRenderModelName: string, pchOriginalPath: string, unOriginalPathLen: number, peError: ^RenderModelError) => number;
  GetRenderModelErrorNameFromEnum: (error: RenderModelError) => string;
}

export interface IExtendedDisplay {
  GetWindowBounds: (pnX: ^number, pnY: ^number, pnWidth: ^number, pnHeight: ^number) => void;
  GetEyeOutputViewport: (eEye: Eye, pnX: ^number, pnY: ^number, pnWidth: ^number, pnHeight: ^number) => void;
  GetDXGIOutputInfo: (pnAdapterIndex: ^number, pnAdapterOutputIndex: ^number) => void;
}

export interface ISettings {
  GetSettingsErrorNameFromEnum: (eError: SettingsError) => string;
  SetBool: (pchSection: string, pchSettingsKey: string, bValue: bool, peError: ^SettingsError) => void;
  SetInt32: (pchSection: string, pchSettingsKey: string, nValue: number, peError: ^SettingsError) => void;
  SetFloat: (pchSection: string, pchSettingsKey: string, flValue: number, peError: ^SettingsError) => void;
  SetString: (pchSection: string, pchSettingsKey: string, pchValue: string, peError: ^SettingsError) => void;
  GetBool: (pchSection: string, pchSettingsKey: string, peError: ^SettingsError) => bool;
  GetInt32: (pchSection: string, pchSettingsKey: string, peError: ^SettingsError) => number;
  GetFloat: (pchSection: string, pchSettingsKey: string, peError: ^SettingsError) => number;
  GetString: (pchSection: string, pchSettingsKey: string, pchValue: string, unValueLen: number, peError: ^SettingsError) => void;
  RemoveSection: (pchSection: string, peError: ^SettingsError) => void;
  RemoveKeyInSection: (pchSection: string, pchSettingsKey: string, peError: ^SettingsError) => void;
}

export interface IApplications {
  AddApplicationManifest: (pchApplicationManifestFullPath: string, bTemporary: bool) => ApplicationError;
  RemoveApplicationManifest: (pchApplicationManifestFullPath: string) => ApplicationError;
  IsApplicationInstalled: (pchAppKey: string) => bool;
  GetApplicationCount: () => number;
  GetApplicationKeyByIndex: (unApplicationIndex: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number) => ApplicationError;
  GetApplicationKeyByProcessId: (unProcessId: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number) => ApplicationError;
  LaunchApplication: (pchAppKey: string) => ApplicationError;
  LaunchTemplateApplication: (pchTemplateAppKey: string, pchNewAppKey: string, pKeys: ^AppOverrideKeys, unKeys: number) => ApplicationError;
  LaunchApplicationFromMimeType: (pchMimeType: string, pchArgs: string) => ApplicationError;
  LaunchDashboardOverlay: (pchAppKey: string) => ApplicationError;
  CancelApplicationLaunch: (pchAppKey: string) => bool;
  IdentifyApplication: (unProcessId: number, pchAppKey: string) => ApplicationError;
  GetApplicationProcessId: (pchAppKey: string) => number;
  GetApplicationsErrorNameFromEnum: (error: ApplicationError) => string;
  GetApplicationPropertyString: (pchAppKey: string, eProperty: ApplicationProperty, pchPropertyValueBuffer: string, unPropertyValueBufferLen: number, peError: ^ApplicationError) => number;
  GetApplicationPropertyBool: (pchAppKey: string, eProperty: ApplicationProperty, peError: ^ApplicationError) => bool;
  GetApplicationPropertyUint64: (pchAppKey: string, eProperty: ApplicationProperty, peError: ^ApplicationError) => bigint;
  SetApplicationAutoLaunch: (pchAppKey: string, bAutoLaunch: bool) => ApplicationError;
  GetApplicationAutoLaunch: (pchAppKey: string) => bool;
  SetDefaultApplicationForMimeType: (pchAppKey: string, pchMimeType: string) => ApplicationError;
  GetDefaultApplicationForMimeType: (pchMimeType: string, pchAppKeyBuffer: string, unAppKeyBufferLen: number) => bool;
  GetApplicationSupportedMimeTypes: (pchAppKey: string, pchMimeTypesBuffer: string, unMimeTypesBuffer: number) => bool;
  GetApplicationsThatSupportMimeType: (pchMimeType: string, pchAppKeysThatSupportBuffer: string, unAppKeysThatSupportBuffer: number) => number;
  GetApplicationLaunchArguments: (unHandle: number, pchArgs: string, unArgs: number) => number;
  GetStartingApplication: (pchAppKeyBuffer: string, unAppKeyBufferLen: number) => ApplicationError;
  GetSceneApplicationState: () => SceneApplicationState;
  PerformApplicationPrelaunchCheck: (pchAppKey: string) => ApplicationError;
  GetSceneApplicationStateNameFromEnum: (state: SceneApplicationState) => string;
  LaunchInternalProcess: (pchBinaryPath: string, pchArguments: string, pchWorkingDirectory: string) => ApplicationError;
  GetCurrentSceneProcessId: () => number;
}

export interface ITrackedCamera {
  GetCameraErrorNameFromEnum: (eCameraError: TrackedCameraError) => string;
  HasCamera: (nDeviceIndex: TrackedDeviceIndex, pHasCamera: ^bool) => TrackedCameraError;
  GetCameraFrameSize: (nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pnWidth: ^number, pnHeight: ^number, pnFrameBufferSize: ^number) => TrackedCameraError;
  GetCameraIntrinsics: (nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, pFocalLength: ^HmdVector2, pCenter: ^HmdVector2) => TrackedCameraError;
  GetCameraProjection: (nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, flZNear: number, flZFar: number, pProjection: ^HmdMatrix44) => TrackedCameraError;
  AcquireVideoStreamingService: (nDeviceIndex: TrackedDeviceIndex, pHandle: ^TrackedCameraHandle) => TrackedCameraError;
  ReleaseVideoStreamingService: (hTrackedCamera: TrackedCameraHandle) => TrackedCameraError;
  GetVideoStreamFrameBuffer: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pFrameBuffer: Deno.PointerValue, nFrameBufferSize: number, pFrameHeader: ^CameraVideoStreamFrameHeader, nFrameHeaderSize: number) => TrackedCameraError;
  GetVideoStreamTextureSize: (nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pTextureBounds: ^TextureBounds, pnWidth: ^number, pnHeight: ^number) => TrackedCameraError;
  GetVideoStreamTextureD3D11: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pD3D11DeviceOrResource: Deno.PointerValue, ppD3D11ShaderResourceView: Deno.PointerValue, pFrameHeader: ^CameraVideoStreamFrameHeader, nFrameHeaderSize: number) => TrackedCameraError;
  GetVideoStreamTextureGL: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pglTextureId: ^glUInt, pFrameHeader: ^CameraVideoStreamFrameHeader, nFrameHeaderSize: number) => TrackedCameraError;
  ReleaseVideoStreamTextureGL: (hTrackedCamera: TrackedCameraHandle, glTextureId: glUInt) => TrackedCameraError;
  SetCameraTrackingSpace: (eUniverse: TrackingUniverseOrigin) => void;
  GetCameraTrackingSpace: () => TrackingUniverseOrigin;
}

export interface IScreenshots {
  RequestScreenshot: (pOutScreenshotHandle: ^ScreenshotHandle, type: ScreenshotType, pchPreviewFilename: string, pchVRFilename: string) => ScreenshotError;
  HookScreenshot: (pSupportedTypes: ^ScreenshotType, numTypes: int) => ScreenshotError;
  GetScreenshotPropertyType: (screenshotHandle: ScreenshotHandle, pError: ^ScreenshotError) => ScreenshotType;
  GetScreenshotPropertyFilename: (screenshotHandle: ScreenshotHandle, filenameType: ScreenshotPropertyFilenames, pchFilename: string, cchFilename: number, pError: ^ScreenshotError) => number;
  UpdateScreenshotProgress: (screenshotHandle: ScreenshotHandle, flProgress: number) => ScreenshotError;
  TakeStereoScreenshot: (pOutScreenshotHandle: ^ScreenshotHandle, pchPreviewFilename: string, pchVRFilename: string) => ScreenshotError;
  SubmitScreenshot: (screenshotHandle: ScreenshotHandle, type: ScreenshotType, pchSourcePreviewFilename: string, pchSourceVRFilename: string) => ScreenshotError;
}

export interface IDriverManager {
  GetDriverCount: () => number;
  GetDriverName: (nDriver: DriverId, pchValue: string, unBufferSize: number) => number;
  GetDriverHandle: (pchDriverName: string) => DriverHandle;
  IsEnabled: (nDriver: DriverId) => bool;
}

export interface IInput {
  SetActionManifestPath: (pchActionManifestPath: string) => InputError;
  GetActionSetHandle: (pchActionSetName: string, pHandle: ^ActionSetHandle) => InputError;
  GetActionHandle: (pchActionName: string, pHandle: ^ActionHandle) => InputError;
  GetInputSourceHandle: (pchInputSourcePath: string, pHandle: ^InputValueHandle) => InputError;
  UpdateActionState: (pSets: ^ActiveActionSet, unSizeOfVRSelectedActionSet_t: number, unSetCount: number) => InputError;
  GetDigitalActionData: (action: ActionHandle, pActionData: ^InputDigitalActionData, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetAnalogActionData: (action: ActionHandle, pActionData: ^InputAnalogActionData, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetPoseActionDataRelativeToNow: (action: ActionHandle, eOrigin: TrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: ^InputPoseActionData, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetPoseActionDataForNextFrame: (action: ActionHandle, eOrigin: TrackingUniverseOrigin, pActionData: ^InputPoseActionData, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetSkeletalActionData: (action: ActionHandle, pActionData: ^InputSkeletalActionData, unActionDataSize: number) => InputError;
  GetDominantHand: (peDominantHand: ^TrackedControllerRole) => InputError;
  SetDominantHand: (eDominantHand: TrackedControllerRole) => InputError;
  GetBoneCount: (action: ActionHandle, pBoneCount: ^number) => InputError;
  GetBoneHierarchy: (action: ActionHandle, pParentIndices: ^BoneIndex, unIndexArayCount: number) => InputError;
  GetBoneName: (action: ActionHandle, nBoneIndex: BoneIndex, pchBoneName: string, unNameBufferSize: number) => InputError;
  GetSkeletalReferenceTransforms: (action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eReferencePose: SkeletalReferencePose, pTransformArray: ^BoneTransform, unTransformArrayCount: number) => InputError;
  GetSkeletalTrackingLevel: (action: ActionHandle, pSkeletalTrackingLevel: ^SkeletalTrackingLevel) => InputError;
  GetSkeletalBoneData: (action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eMotionRange: SkeletalMotionRange, pTransformArray: ^BoneTransform, unTransformArrayCount: number) => InputError;
  GetSkeletalSummaryData: (action: ActionHandle, eSummaryType: SummaryType, pSkeletalSummaryData: ^SkeletalSummaryData) => InputError;
  GetSkeletalBoneDataCompressed: (action: ActionHandle, eMotionRange: SkeletalMotionRange, pvCompressedData: Deno.PointerValue, unCompressedSize: number, punRequiredCompressedSize: ^number) => InputError;
  DecompressSkeletalBoneData: (pvCompressedBuffer: Deno.PointerValue, unCompressedBufferSize: number, eTransformSpace: SkeletalTransformSpace, pTransformArray: ^BoneTransform, unTransformArrayCount: number) => InputError;
  TriggerHapticVibrationAction: (action: ActionHandle, fStartSecondsFromNow: number, fDurationSeconds: number, fFrequency: number, fAmplitude: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetActionOrigins: (actionSetHandle: ActionSetHandle, digitalActionHandle: ActionHandle, originsOut: ^InputValueHandle, originOutCount: number) => InputError;
  GetOriginLocalizedName: (origin: InputValueHandle, pchNameArray: string, unNameArraySize: number, unStringSectionsToInclude: number) => InputError;
  GetOriginTrackedDeviceInfo: (origin: InputValueHandle, pOriginInfo: ^InputOriginInfo, unOriginInfoSize: number) => InputError;
  GetActionBindingInfo: (action: ActionHandle, pOriginInfo: ^InputBindingInfo, unBindingInfoSize: number, unBindingInfoCount: number, punReturnedBindingInfoCount: ^number) => InputError;
  ShowActionOrigins: (actionSetHandle: ActionSetHandle, ulActionHandle: ActionHandle) => InputError;
  ShowBindingsForActionSet: (pSets: ^ActiveActionSet, unSizeOfVRSelectedActionSet_t: number, unSetCount: number, originToHighlight: InputValueHandle) => InputError;
  GetComponentStateForBinding: (pchRenderModelName: string, pchComponentName: string, pOriginInfo: ^InputBindingInfo, unBindingInfoSize: number, unBindingInfoCount: number, pComponentState: ^RenderModel_ComponentState) => InputError;
  IsUsingLegacyInput: () => bool;
  OpenBindingUI: (pchAppKey: string, ulActionSetHandle: ActionSetHandle, ulDeviceHandle: InputValueHandle, bShowOnDesktop: bool) => InputError;
  GetBindingVariant: (ulDevicePath: InputValueHandle, pchVariantArray: string, unVariantArraySize: number) => InputError;
}

export interface IIOBuffer {
  Open: (pchPath: string, mode: IOBufferMode, unElementSize: number, unElements: number, pulBuffer: ^IOBufferHandle) => IOBufferError;
  Close: (ulBuffer: IOBufferHandle) => IOBufferError;
  Read: (ulBuffer: IOBufferHandle, pDst: Deno.PointerValue, unBytes: number, punRead: ^number) => IOBufferError;
  Write: (ulBuffer: IOBufferHandle, pSrc: Deno.PointerValue, unBytes: number) => IOBufferError;
  PropertyContainer: (ulBuffer: IOBufferHandle) => PropertyContainerHandle;
  HasReaders: (ulBuffer: IOBufferHandle) => bool;
}

export interface ISpatialAnchors {
  CreateSpatialAnchorFromDescriptor: (pchDescriptor: string, pHandleOut: ^SpatialAnchorHandle) => SpatialAnchorError;
  CreateSpatialAnchorFromPose: (unDeviceIndex: TrackedDeviceIndex, eOrigin: TrackingUniverseOrigin, pPose: ^SpatialAnchorPose, pHandleOut: ^SpatialAnchorHandle) => SpatialAnchorError;
  GetSpatialAnchorPose: (unHandle: SpatialAnchorHandle, eOrigin: TrackingUniverseOrigin, pPoseOut: ^SpatialAnchorPose) => SpatialAnchorError;
  GetSpatialAnchorDescriptor: (unHandle: SpatialAnchorHandle, pchDescriptorOut: string, punDescriptorBufferLenInOut: ^number) => SpatialAnchorError;
}

export interface IDebug {
  EmitVrProfilerEvent: (pchMessage: string) => DebugError;
  BeginVrProfilerEvent: (pHandleOut: ^VrProfilerEventHandle) => DebugError;
  FinishVrProfilerEvent: (hHandle: VrProfilerEventHandle, pchMessage: string) => DebugError;
  DriverDebugRequest: (unDeviceIndex: TrackedDeviceIndex, pchRequest: string, pchResponseBuffer: string, unResponseBufferSize: number) => number;
}

export interface INotifications {
  CreateNotification: (ulOverlayHandle: OverlayHandle, ulUserValue: bigint, type: NotificationType, pchText: string, style: NotificationStyle, pImage: ^NotificationBitmap, pNotificationId: ^NotificationId) => NotificationError;
  RemoveNotification: (notificationId: NotificationId) => NotificationError;
}

export interface IProperties {
  ReadPropertyBatch: (ulContainerHandle: PropertyContainerHandle, pBatch: ^PropertyRead, unBatchEntryCount: number) => TrackedPropertyError;
  WritePropertyBatch: (ulContainerHandle: PropertyContainerHandle, pBatch: ^PropertyWrite, unBatchEntryCount: number) => TrackedPropertyError;
  GetPropErrorNameFromEnum: (error: TrackedPropertyError) => string;
  TrackedDeviceToPropertyContainer: (nDevice: TrackedDeviceIndex) => PropertyContainerHandle;
}

export interface IPaths {
  ReadPathBatch: (ulRootHandle: PropertyContainerHandle, pBatch: ^PathRead, unBatchEntryCount: number) => TrackedPropertyError;
  WritePathBatch: (ulRootHandle: PropertyContainerHandle, pBatch: ^PathWrite, unBatchEntryCount: number) => TrackedPropertyError;
  StringToHandle: (pHandle: ^PathHandle, pchPath: string) => TrackedPropertyError;
  HandleToString: (pHandle: PathHandle, pchBuffer: string, unBufferSize: number, punBufferSizeUsed: ^number) => TrackedPropertyError;
}

export interface IBlockQueue {
  Create: (pulQueueHandle: ^PropertyContainerHandle, pchPath: string, unBlockDataSize: number, unBlockHeaderSize: number, unBlockCount: number, unFlags: number) => BlockQueueError;
  Connect: (pulQueueHandle: ^PropertyContainerHandle, pchPath: string) => BlockQueueError;
  Destroy: (ulQueueHandle: PropertyContainerHandle) => BlockQueueError;
  AcquireWriteOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: ^PropertyContainerHandle, ppvBuffer: Deno.PointerValue) => BlockQueueError;
  ReleaseWriteOnlyBlock: (ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle) => BlockQueueError;
  WaitAndAcquireReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: ^PropertyContainerHandle, ppvBuffer: Deno.PointerValue, eReadType: BlockQueueReadType, unTimeoutMs: number) => BlockQueueError;
  AcquireReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: ^PropertyContainerHandle, ppvBuffer: Deno.PointerValue, eReadType: BlockQueueReadType) => BlockQueueError;
  ReleaseReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle) => BlockQueueError;
  QueueHasReader: (ulQueueHandle: PropertyContainerHandle, pbHasReaders: ^bool) => BlockQueueError;
}

