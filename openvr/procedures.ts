// Methods

export interface ISystem {
  GetRecommendedRenderTargetSize: (pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>) => void;
  GetProjectionMatrix: (eEye: Eye, fNearZ: number, fFarZ: number) => HmdMatrix44;
  GetProjectionRaw: (eEye: Eye, pfLeft: Deno.PointerValue<number>, pfRight: Deno.PointerValue<number>, pfTop: Deno.PointerValue<number>, pfBottom: Deno.PointerValue<number>) => void;
  ComputeDistortion: (eEye: Eye, fU: number, fV: number, pDistortionCoordinates: Deno.PointerValue<DistortionCoordinates>) => bool;
  GetEyeToHeadTransform: (eEye: Eye) => HmdMatrix34;
  GetTimeSinceLastVsync: (pfSecondsSinceLastVsync: Deno.PointerValue<number>, pulFrameCounter: Deno.PointerValue<bigint>) => bool;
  GetD3D9AdapterIndex: () => number;
  GetDXGIOutputInfo: (pnAdapterIndex: Deno.PointerValue<number>) => void;
  GetOutputDevice: (pnDevice: Deno.PointerValue<bigint>, textureType: TextureType, pInstance: Deno.PointerValue<VkInstance_T>) => void;
  IsDisplayOnDesktop: () => bool;
  SetDisplayVisibility: (bIsVisibleOnDesktop: bool) => bool;
  GetDeviceToAbsoluteTrackingPose: (eOrigin: TrackingUniverseOrigin, fPredictedSecondsToPhotonsFromNow: number, pTrackedDevicePoseArray: Deno.PointerValue<TrackedDevicePose>, unTrackedDevicePoseArrayCount: number) => void;
  GetSeatedZeroPoseToStandingAbsoluteTrackingPose: () => HmdMatrix34;
  GetRawZeroPoseToStandingAbsoluteTrackingPose: () => HmdMatrix34;
  GetSortedTrackedDeviceIndicesOfClass: (eTrackedDeviceClass: TrackedDeviceClass, punTrackedDeviceIndexArray: Deno.PointerValue<TrackedDeviceIndex>, unTrackedDeviceIndexArrayCount: number, unRelativeToTrackedDeviceIndex: TrackedDeviceIndex) => number;
  GetTrackedDeviceActivityLevel: (unDeviceId: TrackedDeviceIndex) => DeviceActivityLevel;
  ApplyTransform: (pOutputPose: Deno.PointerValue<TrackedDevicePose>, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>//READONLY, pTransform: Deno.PointerValue<HmdMatrix34>//READONLY) => void;
  GetTrackedDeviceIndexForControllerRole: (unDeviceType: TrackedControllerRole) => TrackedDeviceIndex;
  GetControllerRoleForTrackedDeviceIndex: (unDeviceIndex: TrackedDeviceIndex) => TrackedControllerRole;
  GetTrackedDeviceClass: (unDeviceIndex: TrackedDeviceIndex) => TrackedDeviceClass;
  IsTrackedDeviceConnected: (unDeviceIndex: TrackedDeviceIndex) => bool;
  GetBoolTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>) => bool;
  GetFloatTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>) => number;
  GetInt32TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>) => number;
  GetUint64TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>) => bigint;
  GetMatrix34TrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>) => HmdMatrix34;
  GetArrayTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, propType: PropertyTypeTag, pBuffer: Deno.PointerValue<unknown>, unBufferSize: number, pError: Deno.PointerValue<TrackedPropertyError>) => number;
  GetStringTrackedDeviceProperty: (unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<TrackedPropertyError>) => number;
  GetPropErrorNameFromEnum: (error: TrackedPropertyError) => string;
  PollNextEvent: (pEvent: Deno.PointerValue<Event>, uncbVREvent: number) => bool;
  PollNextEventWithPose: (eOrigin: TrackingUniverseOrigin, pEvent: Deno.PointerValue<Event>, uncbVREvent: number, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>) => bool;
  GetEventTypeNameFromEnum: (eType: EventType) => string;
  GetHiddenAreaMesh: (eEye: Eye, type: HiddenAreaMeshType) => HiddenAreaMesh;
  GetControllerState: (unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: Deno.PointerValue<ControllerState>, unControllerStateSize: number) => bool;
  GetControllerStateWithPose: (eOrigin: TrackingUniverseOrigin, unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: Deno.PointerValue<ControllerState>, unControllerStateSize: number, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>) => bool;
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
  GetPlayAreaSize: (pSizeX: Deno.PointerValue<number>, pSizeZ: Deno.PointerValue<number>) => bool;
  GetPlayAreaRect: (rect: Deno.PointerValue<HmdQuad>) => bool;
  ReloadInfo: () => void;
  SetSceneColor: (color: HmdColor) => void;
  GetBoundsColor: (pOutputColorArray: Deno.PointerValue<HmdColor>, nNumOutputColors: int, flCollisionBoundsFadeDistance: number, pOutputCameraColor: Deno.PointerValue<HmdColor>) => void;
  AreBoundsVisible: () => bool;
  ForceBoundsVisible: (bForce: bool) => void;
  ResetZeroPose: (eTrackingUniverseOrigin: TrackingUniverseOrigin) => void;
}

export interface IChaperoneSetup {
  CommitWorkingCopy: (configFile: ChaperoneConfigFile) => bool;
  RevertWorkingCopy: () => void;
  GetWorkingPlayAreaSize: (pSizeX: Deno.PointerValue<number>, pSizeZ: Deno.PointerValue<number>) => bool;
  GetWorkingPlayAreaRect: (rect: Deno.PointerValue<HmdQuad>) => bool;
  GetWorkingCollisionBoundsInfo: (pQuadsBuffer: Deno.PointerValue<HmdQuad>, punQuadsCount: Deno.PointerValue<number>) => bool;
  GetLiveCollisionBoundsInfo: (pQuadsBuffer: Deno.PointerValue<HmdQuad>, punQuadsCount: Deno.PointerValue<number>) => bool;
  GetWorkingSeatedZeroPoseToRawTrackingPose: (pmatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>) => bool;
  GetWorkingStandingZeroPoseToRawTrackingPose: (pmatStandingZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>) => bool;
  SetWorkingPlayAreaSize: (sizeX: number, sizeZ: number) => void;
  SetWorkingCollisionBoundsInfo: (pQuadsBuffer: Deno.PointerValue<HmdQuad>, unQuadsCount: number) => void;
  SetWorkingPerimeter: (pPointBuffer: Deno.PointerValue<HmdVector2>, unPointCount: number) => void;
  SetWorkingSeatedZeroPoseToRawTrackingPose: (pMatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>//READONLY) => void;
  SetWorkingStandingZeroPoseToRawTrackingPose: (pMatStandingZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>//READONLY) => void;
  ReloadFromDisk: (configFile: ChaperoneConfigFile) => void;
  GetLiveSeatedZeroPoseToRawTrackingPose: (pmatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>) => bool;
  ExportLiveToBuffer: (pBuffer: string, pnBufferLength: Deno.PointerValue<number>) => bool;
  ImportFromBufferToWorking: (pBuffer: string, nImportFlags: number) => bool;
  ShowWorkingSetPreview: () => void;
  HideWorkingSetPreview: () => void;
  RoomSetupStarting: () => void;
}

export interface ICompositor {
  SetTrackingSpace: (eOrigin: TrackingUniverseOrigin) => void;
  GetTrackingSpace: () => TrackingUniverseOrigin;
  WaitGetPoses: (pRenderPoseArray: Deno.PointerValue<TrackedDevicePose>, unRenderPoseArrayCount: number, pGamePoseArray: Deno.PointerValue<TrackedDevicePose>, unGamePoseArrayCount: number) => CompositorError;
  GetLastPoses: (pRenderPoseArray: Deno.PointerValue<TrackedDevicePose>, unRenderPoseArrayCount: number, pGamePoseArray: Deno.PointerValue<TrackedDevicePose>, unGamePoseArrayCount: number) => CompositorError;
  GetLastPoseForTrackedDeviceIndex: (unDeviceIndex: TrackedDeviceIndex, pOutputPose: Deno.PointerValue<TrackedDevicePose>, pOutputGamePose: Deno.PointerValue<TrackedDevicePose>) => CompositorError;
  Submit: (eEye: Eye, pTexture: Deno.PointerValue<Texture>//READONLY, pBounds: Deno.PointerValue<TextureBounds>//READONLY, nSubmitFlags: SubmitFlags) => CompositorError;
  SubmitWithArrayIndex: (eEye: Eye, pTexture: Deno.PointerValue<Texture>//READONLY, unTextureArrayIndex: number, pBounds: Deno.PointerValue<TextureBounds>//READONLY, nSubmitFlags: SubmitFlags) => CompositorError;
  ClearLastSubmittedFrame: () => void;
  PostPresentHandoff: () => void;
  GetFrameTiming: (pTiming: Deno.PointerValue<Compositor_FrameTiming>, unFramesAgo: number) => bool;
  GetFrameTimings: (pTiming: Deno.PointerValue<Compositor_FrameTiming>, nFrames: number) => number;
  GetFrameTimeRemaining: () => number;
  GetCumulativeStats: (pStats: Deno.PointerValue<Compositor_CumulativeStats>, nStatsSizeInBytes: number) => void;
  FadeToColor: (fSeconds: number, fRed: number, fGreen: number, fBlue: number, fAlpha: number, bBackground: bool) => void;
  GetCurrentFadeColor: (bBackground: bool) => HmdColor;
  FadeGrid: (fSeconds: number, bFadeGridIn: bool) => void;
  GetCurrentGridAlpha: () => number;
  SetSkyboxOverride: (pTextures: Deno.PointerValue<Texture>//READONLY, unTextureCount: number) => CompositorError;
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
  GetMirrorTextureD3D11: (eEye: Eye, pD3D11DeviceOrResource: Deno.PointerValue<unknown>, ppD3D11ShaderResourceView: Deno.PointerValue<Deno.PointerValue<unknown>>) => CompositorError;
  ReleaseMirrorTextureD3D11: (pD3D11ShaderResourceView: Deno.PointerValue<unknown>) => void;
  GetMirrorTextureGL: (eEye: Eye, pglTextureId: Deno.PointerValue<glUInt>, pglSharedTextureHandle: Deno.PointerValue<glSharedTextureHandle>) => CompositorError;
  ReleaseSharedGLTexture: (glTextureId: glUInt, glSharedTextureHandle: glSharedTextureHandle) => bool;
  LockGLSharedTextureForAccess: (glSharedTextureHandle: glSharedTextureHandle) => void;
  UnlockGLSharedTextureForAccess: (glSharedTextureHandle: glSharedTextureHandle) => void;
  GetVulkanInstanceExtensionsRequired: (pchValue: string, unBufferSize: number) => number;
  GetVulkanDeviceExtensionsRequired: (pPhysicalDevice: Deno.PointerValue<VkPhysicalDevice_T>, pchValue: string, unBufferSize: number) => number;
  SetExplicitTimingMode: (eTimingMode: CompositorTimingMode) => void;
  SubmitExplicitTimingData: () => CompositorError;
  IsMotionSmoothingEnabled: () => bool;
  IsMotionSmoothingSupported: () => bool;
  IsCurrentSceneFocusAppLoading: () => bool;
  SetStageOverride_Async: (pchRenderModelPath: string, pTransform: Deno.PointerValue<HmdMatrix34>//READONLY, pRenderSettings: Deno.PointerValue<Compositor_StageRenderSettings>//READONLY, nSizeOfRenderSettings: number) => CompositorError;
  ClearStageOverride: () => void;
  GetCompositorBenchmarkResults: (pBenchmarkResults: Deno.PointerValue<Compositor_BenchmarkResults>, nSizeOfBenchmarkResults: number) => bool;
  GetLastPosePredictionIDs: (pRenderPosePredictionID: Deno.PointerValue<number>, pGamePosePredictionID: Deno.PointerValue<number>) => CompositorError;
  GetPosesForFrame: (unPosePredictionID: number, pPoseArray: Deno.PointerValue<TrackedDevicePose>, unPoseArrayCount: number) => CompositorError;
}

export interface IHeadsetView {
  SetHeadsetViewSize: (nWidth: number, nHeight: number) => void;
  GetHeadsetViewSize: (pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>) => void;
  SetHeadsetViewMode: (eHeadsetViewMode: HeadsetViewMode) => void;
  GetHeadsetViewMode: () => HeadsetViewMode;
  SetHeadsetViewCropped: (bCropped: bool) => void;
  GetHeadsetViewCropped: () => bool;
  GetHeadsetViewAspectRatio: () => number;
  SetHeadsetViewBlendRange: (flStartPct: number, flEndPct: number) => void;
  GetHeadsetViewBlendRange: (pStartPct: Deno.PointerValue<number>, pEndPct: Deno.PointerValue<number>) => void;
}

export interface IOverlay {
  FindOverlay: (pchOverlayKey: string, pOverlayHandle: Deno.PointerValue<OverlayHandle>) => OverlayError;
  CreateOverlay: (pchOverlayKey: string, pchOverlayName: string, pOverlayHandle: Deno.PointerValue<OverlayHandle>) => OverlayError;
  DestroyOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  GetOverlayKey: (ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<OverlayError>) => number;
  GetOverlayName: (ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<OverlayError>) => number;
  SetOverlayName: (ulOverlayHandle: OverlayHandle, pchName: string) => OverlayError;
  GetOverlayImageData: (ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue<unknown>, unBufferSize: number, punWidth: Deno.PointerValue<number>, punHeight: Deno.PointerValue<number>) => OverlayError;
  GetOverlayErrorNameFromEnum: (error: OverlayError) => string;
  SetOverlayRenderingPid: (ulOverlayHandle: OverlayHandle, unPID: number) => OverlayError;
  GetOverlayRenderingPid: (ulOverlayHandle: OverlayHandle) => number;
  SetOverlayFlag: (ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, bEnabled: bool) => OverlayError;
  GetOverlayFlag: (ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, pbEnabled: Deno.PointerValue<bool>) => OverlayError;
  GetOverlayFlags: (ulOverlayHandle: OverlayHandle, pFlags: Deno.PointerValue<number>) => OverlayError;
  SetOverlayColor: (ulOverlayHandle: OverlayHandle, fRed: number, fGreen: number, fBlue: number) => OverlayError;
  GetOverlayColor: (ulOverlayHandle: OverlayHandle, pfRed: Deno.PointerValue<number>, pfGreen: Deno.PointerValue<number>, pfBlue: Deno.PointerValue<number>) => OverlayError;
  SetOverlayAlpha: (ulOverlayHandle: OverlayHandle, fAlpha: number) => OverlayError;
  GetOverlayAlpha: (ulOverlayHandle: OverlayHandle, pfAlpha: Deno.PointerValue<number>) => OverlayError;
  SetOverlayTexelAspect: (ulOverlayHandle: OverlayHandle, fTexelAspect: number) => OverlayError;
  GetOverlayTexelAspect: (ulOverlayHandle: OverlayHandle, pfTexelAspect: Deno.PointerValue<number>) => OverlayError;
  SetOverlaySortOrder: (ulOverlayHandle: OverlayHandle, unSortOrder: number) => OverlayError;
  GetOverlaySortOrder: (ulOverlayHandle: OverlayHandle, punSortOrder: Deno.PointerValue<number>) => OverlayError;
  SetOverlayWidthInMeters: (ulOverlayHandle: OverlayHandle, fWidthInMeters: number) => OverlayError;
  GetOverlayWidthInMeters: (ulOverlayHandle: OverlayHandle, pfWidthInMeters: Deno.PointerValue<number>) => OverlayError;
  SetOverlayCurvature: (ulOverlayHandle: OverlayHandle, fCurvature: number) => OverlayError;
  GetOverlayCurvature: (ulOverlayHandle: OverlayHandle, pfCurvature: Deno.PointerValue<number>) => OverlayError;
  SetOverlayPreCurvePitch: (ulOverlayHandle: OverlayHandle, fRadians: number) => OverlayError;
  GetOverlayPreCurvePitch: (ulOverlayHandle: OverlayHandle, pfRadians: Deno.PointerValue<number>) => OverlayError;
  SetOverlayTextureColorSpace: (ulOverlayHandle: OverlayHandle, eTextureColorSpace: ColorSpace) => OverlayError;
  GetOverlayTextureColorSpace: (ulOverlayHandle: OverlayHandle, peTextureColorSpace: Deno.PointerValue<ColorSpace>) => OverlayError;
  SetOverlayTextureBounds: (ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: Deno.PointerValue<TextureBounds>//READONLY) => OverlayError;
  GetOverlayTextureBounds: (ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: Deno.PointerValue<TextureBounds>) => OverlayError;
  GetOverlayTransformType: (ulOverlayHandle: OverlayHandle, peTransformType: Deno.PointerValue<OverlayTransformType>) => OverlayError;
  SetOverlayTransformAbsolute: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY) => OverlayError;
  GetOverlayTransformAbsolute: (ulOverlayHandle: OverlayHandle, peTrackingOrigin: Deno.PointerValue<TrackingUniverseOrigin>, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>) => OverlayError;
  SetOverlayTransformTrackedDeviceRelative: (ulOverlayHandle: OverlayHandle, unTrackedDevice: TrackedDeviceIndex, pmatTrackedDeviceToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY) => OverlayError;
  GetOverlayTransformTrackedDeviceRelative: (ulOverlayHandle: OverlayHandle, punTrackedDevice: Deno.PointerValue<TrackedDeviceIndex>, pmatTrackedDeviceToOverlayTransform: Deno.PointerValue<HmdMatrix34>) => OverlayError;
  SetOverlayTransformTrackedDeviceComponent: (ulOverlayHandle: OverlayHandle, unDeviceIndex: TrackedDeviceIndex, pchComponentName: string) => OverlayError;
  GetOverlayTransformTrackedDeviceComponent: (ulOverlayHandle: OverlayHandle, punDeviceIndex: Deno.PointerValue<TrackedDeviceIndex>, pchComponentName: string, unComponentNameSize: number) => OverlayError;
  SetOverlayTransformCursor: (ulCursorOverlayHandle: OverlayHandle, pvHotspot: Deno.PointerValue<HmdVector2>//READONLY) => OverlayError;
  GetOverlayTransformCursor: (ulOverlayHandle: OverlayHandle, pvHotspot: Deno.PointerValue<HmdVector2>) => OverlayError;
  SetOverlayTransformProjection: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY, pProjection: Deno.PointerValue<OverlayProjection>//READONLY, eEye: Eye) => OverlayError;
  ShowOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  HideOverlay: (ulOverlayHandle: OverlayHandle) => OverlayError;
  IsOverlayVisible: (ulOverlayHandle: OverlayHandle) => bool;
  GetTransformForOverlayCoordinates: (ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, coordinatesInOverlay: HmdVector2, pmatTransform: Deno.PointerValue<HmdMatrix34>) => OverlayError;
  WaitFrameSync: (nTimeoutMs: number) => OverlayError;
  PollNextOverlayEvent: (ulOverlayHandle: OverlayHandle, pEvent: Deno.PointerValue<Event>, uncbVREvent: number) => bool;
  GetOverlayInputMethod: (ulOverlayHandle: OverlayHandle, peInputMethod: Deno.PointerValue<OverlayInputMethod>) => OverlayError;
  SetOverlayInputMethod: (ulOverlayHandle: OverlayHandle, eInputMethod: OverlayInputMethod) => OverlayError;
  GetOverlayMouseScale: (ulOverlayHandle: OverlayHandle, pvecMouseScale: Deno.PointerValue<HmdVector2>) => OverlayError;
  SetOverlayMouseScale: (ulOverlayHandle: OverlayHandle, pvecMouseScale: Deno.PointerValue<HmdVector2>//READONLY) => OverlayError;
  ComputeOverlayIntersection: (ulOverlayHandle: OverlayHandle, pParams: Deno.PointerValue<OverlayIntersectionParams>//READONLY, pResults: Deno.PointerValue<OverlayIntersectionResults>) => bool;
  IsHoverTargetOverlay: (ulOverlayHandle: OverlayHandle) => bool;
  SetOverlayIntersectionMask: (ulOverlayHandle: OverlayHandle, pMaskPrimitives: Deno.PointerValue<OverlayIntersectionMaskPrimitive>, unNumMaskPrimitives: number, unPrimitiveSize: number) => OverlayError;
  TriggerLaserMouseHapticVibration: (ulOverlayHandle: OverlayHandle, fDurationSeconds: number, fFrequency: number, fAmplitude: number) => OverlayError;
  SetOverlayCursor: (ulOverlayHandle: OverlayHandle, ulCursorHandle: OverlayHandle) => OverlayError;
  SetOverlayCursorPositionOverride: (ulOverlayHandle: OverlayHandle, pvCursor: Deno.PointerValue<HmdVector2>//READONLY) => OverlayError;
  ClearOverlayCursorPositionOverride: (ulOverlayHandle: OverlayHandle) => OverlayError;
  SetOverlayTexture: (ulOverlayHandle: OverlayHandle, pTexture: Deno.PointerValue<Texture>//READONLY) => OverlayError;
  ClearOverlayTexture: (ulOverlayHandle: OverlayHandle) => OverlayError;
  SetOverlayRaw: (ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue<unknown>, unWidth: number, unHeight: number, unBytesPerPixel: number) => OverlayError;
  SetOverlayFromFile: (ulOverlayHandle: OverlayHandle, pchFilePath: string) => OverlayError;
  GetOverlayTexture: (ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue<Deno.PointerValue<unknown>>, pNativeTextureRef: Deno.PointerValue<unknown>, pWidth: Deno.PointerValue<number>, pHeight: Deno.PointerValue<number>, pNativeFormat: Deno.PointerValue<number>, pAPIType: Deno.PointerValue<TextureType>, pColorSpace: Deno.PointerValue<ColorSpace>, pTextureBounds: Deno.PointerValue<TextureBounds>) => OverlayError;
  ReleaseNativeOverlayHandle: (ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue<unknown>) => OverlayError;
  GetOverlayTextureSize: (ulOverlayHandle: OverlayHandle, pWidth: Deno.PointerValue<number>, pHeight: Deno.PointerValue<number>) => OverlayError;
  CreateDashboardOverlay: (pchOverlayKey: string, pchOverlayFriendlyName: string, pMainHandle: Deno.PointerValue<OverlayHandle>, pThumbnailHandle: Deno.PointerValue<OverlayHandle>) => OverlayError;
  IsDashboardVisible: () => bool;
  IsActiveDashboardOverlay: (ulOverlayHandle: OverlayHandle) => bool;
  SetDashboardOverlaySceneProcess: (ulOverlayHandle: OverlayHandle, unProcessId: number) => OverlayError;
  GetDashboardOverlaySceneProcess: (ulOverlayHandle: OverlayHandle, punProcessId: Deno.PointerValue<number>) => OverlayError;
  ShowDashboard: (pchOverlayToShow: string) => void;
  GetPrimaryDashboardDevice: () => TrackedDeviceIndex;
  ShowKeyboard: (eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint) => OverlayError;
  ShowKeyboardForOverlay: (ulOverlayHandle: OverlayHandle, eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint) => OverlayError;
  GetKeyboardText: (pchText: string, cchText: number) => number;
  HideKeyboard: () => void;
  SetKeyboardTransformAbsolute: (eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToKeyboardTransform: Deno.PointerValue<HmdMatrix34>//READONLY) => void;
  SetKeyboardPositionForOverlay: (ulOverlayHandle: OverlayHandle, avoidRect: HmdRect2) => void;
  ShowMessageOverlay: (pchText: string, pchCaption: string, pchButton0Text: string, pchButton1Text: string, pchButton2Text: string, pchButton3Text: string) => MessageOverlayResponse;
  CloseMessageOverlay: () => void;
}

export interface IOverlayView {
  AcquireOverlayView: (ulOverlayHandle: OverlayHandle, pNativeDevice: Deno.PointerValue<NativeDevice>, pOverlayView: Deno.PointerValue<OverlayView>, unOverlayViewSize: number) => OverlayError;
  ReleaseOverlayView: (pOverlayView: Deno.PointerValue<OverlayView>) => OverlayError;
  PostOverlayEvent: (ulOverlayHandle: OverlayHandle, pvrEvent: Deno.PointerValue<Event>//READONLY) => void;
  IsViewingPermitted: (ulOverlayHandle: OverlayHandle) => bool;
}

export interface IResources {
  LoadSharedResource: (pchResourceName: string, pchBuffer: string, unBufferLen: number) => number;
  GetResourceFullPath: (pchResourceName: string, pchResourceTypeDirectory: string, pchPathBuffer: string, unBufferLen: number) => number;
}

export interface IRenderModels {
  LoadRenderModel_Async: (pchRenderModelName: string, ppRenderModel: Deno.PointerValue<Deno.PointerValue<RenderModel>>) => RenderModelError;
  FreeRenderModel: (pRenderModel: Deno.PointerValue<RenderModel>) => void;
  LoadTexture_Async: (textureId: TextureID, ppTexture: Deno.PointerValue<Deno.PointerValue<RenderModel_TextureMap>>) => RenderModelError;
  FreeTexture: (pTexture: Deno.PointerValue<RenderModel_TextureMap>) => void;
  LoadTextureD3D11_Async: (textureId: TextureID, pD3D11Device: Deno.PointerValue<unknown>, ppD3D11Texture2D: Deno.PointerValue<Deno.PointerValue<unknown>>) => RenderModelError;
  LoadIntoTextureD3D11_Async: (textureId: TextureID, pDstTexture: Deno.PointerValue<unknown>) => RenderModelError;
  FreeTextureD3D11: (pD3D11Texture2D: Deno.PointerValue<unknown>) => void;
  GetRenderModelName: (unRenderModelIndex: number, pchRenderModelName: string, unRenderModelNameLen: number) => number;
  GetRenderModelCount: () => number;
  GetComponentCount: (pchRenderModelName: string) => number;
  GetComponentName: (pchRenderModelName: string, unComponentIndex: number, pchComponentName: string, unComponentNameLen: number) => number;
  GetComponentButtonMask: (pchRenderModelName: string, pchComponentName: string) => bigint;
  GetComponentRenderModelName: (pchRenderModelName: string, pchComponentName: string, pchComponentRenderModelName: string, unComponentRenderModelNameLen: number) => number;
  GetComponentStateForDevicePath: (pchRenderModelName: string, pchComponentName: string, devicePath: InputValueHandle, pState: Deno.PointerValue<RenderModel_ControllerMode_State>//READONLY, pComponentState: Deno.PointerValue<RenderModel_ComponentState>) => bool;
  GetComponentState: (pchRenderModelName: string, pchComponentName: string, pControllerState: Deno.PointerValue<ControllerState>//READONLY, pState: Deno.PointerValue<RenderModel_ControllerMode_State>//READONLY, pComponentState: Deno.PointerValue<RenderModel_ComponentState>) => bool;
  RenderModelHasComponent: (pchRenderModelName: string, pchComponentName: string) => bool;
  GetRenderModelThumbnailURL: (pchRenderModelName: string, pchThumbnailURL: string, unThumbnailURLLen: number, peError: Deno.PointerValue<RenderModelError>) => number;
  GetRenderModelOriginalPath: (pchRenderModelName: string, pchOriginalPath: string, unOriginalPathLen: number, peError: Deno.PointerValue<RenderModelError>) => number;
  GetRenderModelErrorNameFromEnum: (error: RenderModelError) => string;
}

export interface IExtendedDisplay {
  GetWindowBounds: (pnX: Deno.PointerValue<number>, pnY: Deno.PointerValue<number>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>) => void;
  GetEyeOutputViewport: (eEye: Eye, pnX: Deno.PointerValue<number>, pnY: Deno.PointerValue<number>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>) => void;
  GetDXGIOutputInfo: (pnAdapterIndex: Deno.PointerValue<number>, pnAdapterOutputIndex: Deno.PointerValue<number>) => void;
}

export interface ISettings {
  GetSettingsErrorNameFromEnum: (eError: SettingsError) => string;
  SetBool: (pchSection: string, pchSettingsKey: string, bValue: bool, peError: Deno.PointerValue<SettingsError>) => void;
  SetInt32: (pchSection: string, pchSettingsKey: string, nValue: number, peError: Deno.PointerValue<SettingsError>) => void;
  SetFloat: (pchSection: string, pchSettingsKey: string, flValue: number, peError: Deno.PointerValue<SettingsError>) => void;
  SetString: (pchSection: string, pchSettingsKey: string, pchValue: string, peError: Deno.PointerValue<SettingsError>) => void;
  GetBool: (pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>) => bool;
  GetInt32: (pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>) => number;
  GetFloat: (pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>) => number;
  GetString: (pchSection: string, pchSettingsKey: string, pchValue: string, unValueLen: number, peError: Deno.PointerValue<SettingsError>) => void;
  RemoveSection: (pchSection: string, peError: Deno.PointerValue<SettingsError>) => void;
  RemoveKeyInSection: (pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>) => void;
}

export interface IApplications {
  AddApplicationManifest: (pchApplicationManifestFullPath: string, bTemporary: bool) => ApplicationError;
  RemoveApplicationManifest: (pchApplicationManifestFullPath: string) => ApplicationError;
  IsApplicationInstalled: (pchAppKey: string) => bool;
  GetApplicationCount: () => number;
  GetApplicationKeyByIndex: (unApplicationIndex: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number) => ApplicationError;
  GetApplicationKeyByProcessId: (unProcessId: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number) => ApplicationError;
  LaunchApplication: (pchAppKey: string) => ApplicationError;
  LaunchTemplateApplication: (pchTemplateAppKey: string, pchNewAppKey: string, pKeys: Deno.PointerValue<AppOverrideKeys>//READONLY, unKeys: number) => ApplicationError;
  LaunchApplicationFromMimeType: (pchMimeType: string, pchArgs: string) => ApplicationError;
  LaunchDashboardOverlay: (pchAppKey: string) => ApplicationError;
  CancelApplicationLaunch: (pchAppKey: string) => bool;
  IdentifyApplication: (unProcessId: number, pchAppKey: string) => ApplicationError;
  GetApplicationProcessId: (pchAppKey: string) => number;
  GetApplicationsErrorNameFromEnum: (error: ApplicationError) => string;
  GetApplicationPropertyString: (pchAppKey: string, eProperty: ApplicationProperty, pchPropertyValueBuffer: string, unPropertyValueBufferLen: number, peError: Deno.PointerValue<ApplicationError>) => number;
  GetApplicationPropertyBool: (pchAppKey: string, eProperty: ApplicationProperty, peError: Deno.PointerValue<ApplicationError>) => bool;
  GetApplicationPropertyUint64: (pchAppKey: string, eProperty: ApplicationProperty, peError: Deno.PointerValue<ApplicationError>) => bigint;
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
  HasCamera: (nDeviceIndex: TrackedDeviceIndex, pHasCamera: Deno.PointerValue<bool>) => TrackedCameraError;
  GetCameraFrameSize: (nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>, pnFrameBufferSize: Deno.PointerValue<number>) => TrackedCameraError;
  GetCameraIntrinsics: (nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, pFocalLength: Deno.PointerValue<HmdVector2>, pCenter: Deno.PointerValue<HmdVector2>) => TrackedCameraError;
  GetCameraProjection: (nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, flZNear: number, flZFar: number, pProjection: Deno.PointerValue<HmdMatrix44>) => TrackedCameraError;
  AcquireVideoStreamingService: (nDeviceIndex: TrackedDeviceIndex, pHandle: Deno.PointerValue<TrackedCameraHandle>) => TrackedCameraError;
  ReleaseVideoStreamingService: (hTrackedCamera: TrackedCameraHandle) => TrackedCameraError;
  GetVideoStreamFrameBuffer: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pFrameBuffer: Deno.PointerValue<unknown>, nFrameBufferSize: number, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number) => TrackedCameraError;
  GetVideoStreamTextureSize: (nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pTextureBounds: Deno.PointerValue<TextureBounds>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>) => TrackedCameraError;
  GetVideoStreamTextureD3D11: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pD3D11DeviceOrResource: Deno.PointerValue<unknown>, ppD3D11ShaderResourceView: Deno.PointerValue<Deno.PointerValue<unknown>>, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number) => TrackedCameraError;
  GetVideoStreamTextureGL: (hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pglTextureId: Deno.PointerValue<glUInt>, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number) => TrackedCameraError;
  ReleaseVideoStreamTextureGL: (hTrackedCamera: TrackedCameraHandle, glTextureId: glUInt) => TrackedCameraError;
  SetCameraTrackingSpace: (eUniverse: TrackingUniverseOrigin) => void;
  GetCameraTrackingSpace: () => TrackingUniverseOrigin;
}

export interface IScreenshots {
  RequestScreenshot: (pOutScreenshotHandle: Deno.PointerValue<ScreenshotHandle>, type: ScreenshotType, pchPreviewFilename: string, pchVRFilename: string) => ScreenshotError;
  HookScreenshot: (pSupportedTypes: Deno.PointerValue<ScreenshotType>//READONLY, numTypes: int) => ScreenshotError;
  GetScreenshotPropertyType: (screenshotHandle: ScreenshotHandle, pError: Deno.PointerValue<ScreenshotError>) => ScreenshotType;
  GetScreenshotPropertyFilename: (screenshotHandle: ScreenshotHandle, filenameType: ScreenshotPropertyFilenames, pchFilename: string, cchFilename: number, pError: Deno.PointerValue<ScreenshotError>) => number;
  UpdateScreenshotProgress: (screenshotHandle: ScreenshotHandle, flProgress: number) => ScreenshotError;
  TakeStereoScreenshot: (pOutScreenshotHandle: Deno.PointerValue<ScreenshotHandle>, pchPreviewFilename: string, pchVRFilename: string) => ScreenshotError;
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
  GetActionSetHandle: (pchActionSetName: string, pHandle: Deno.PointerValue<ActionSetHandle>) => InputError;
  GetActionHandle: (pchActionName: string, pHandle: Deno.PointerValue<ActionHandle>) => InputError;
  GetInputSourceHandle: (pchInputSourcePath: string, pHandle: Deno.PointerValue<InputValueHandle>) => InputError;
  UpdateActionState: (pSets: Deno.PointerValue<ActiveActionSet>, unSizeOfVRSelectedActionSet_t: number, unSetCount: number) => InputError;
  GetDigitalActionData: (action: ActionHandle, pActionData: Deno.PointerValue<InputDigitalActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetAnalogActionData: (action: ActionHandle, pActionData: Deno.PointerValue<InputAnalogActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetPoseActionDataRelativeToNow: (action: ActionHandle, eOrigin: TrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: Deno.PointerValue<InputPoseActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetPoseActionDataForNextFrame: (action: ActionHandle, eOrigin: TrackingUniverseOrigin, pActionData: Deno.PointerValue<InputPoseActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetSkeletalActionData: (action: ActionHandle, pActionData: Deno.PointerValue<InputSkeletalActionData>, unActionDataSize: number) => InputError;
  GetDominantHand: (peDominantHand: Deno.PointerValue<TrackedControllerRole>) => InputError;
  SetDominantHand: (eDominantHand: TrackedControllerRole) => InputError;
  GetBoneCount: (action: ActionHandle, pBoneCount: Deno.PointerValue<number>) => InputError;
  GetBoneHierarchy: (action: ActionHandle, pParentIndices: Deno.PointerValue<BoneIndex>, unIndexArayCount: number) => InputError;
  GetBoneName: (action: ActionHandle, nBoneIndex: BoneIndex, pchBoneName: string, unNameBufferSize: number) => InputError;
  GetSkeletalReferenceTransforms: (action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eReferencePose: SkeletalReferencePose, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number) => InputError;
  GetSkeletalTrackingLevel: (action: ActionHandle, pSkeletalTrackingLevel: Deno.PointerValue<SkeletalTrackingLevel>) => InputError;
  GetSkeletalBoneData: (action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eMotionRange: SkeletalMotionRange, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number) => InputError;
  GetSkeletalSummaryData: (action: ActionHandle, eSummaryType: SummaryType, pSkeletalSummaryData: Deno.PointerValue<SkeletalSummaryData>) => InputError;
  GetSkeletalBoneDataCompressed: (action: ActionHandle, eMotionRange: SkeletalMotionRange, pvCompressedData: Deno.PointerValue<unknown>, unCompressedSize: number, punRequiredCompressedSize: Deno.PointerValue<number>) => InputError;
  DecompressSkeletalBoneData: (pvCompressedBuffer: Deno.PointerValue<unknown>//READONLY, unCompressedBufferSize: number, eTransformSpace: SkeletalTransformSpace, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number) => InputError;
  TriggerHapticVibrationAction: (action: ActionHandle, fStartSecondsFromNow: number, fDurationSeconds: number, fFrequency: number, fAmplitude: number, ulRestrictToDevice: InputValueHandle) => InputError;
  GetActionOrigins: (actionSetHandle: ActionSetHandle, digitalActionHandle: ActionHandle, originsOut: Deno.PointerValue<InputValueHandle>, originOutCount: number) => InputError;
  GetOriginLocalizedName: (origin: InputValueHandle, pchNameArray: string, unNameArraySize: number, unStringSectionsToInclude: number) => InputError;
  GetOriginTrackedDeviceInfo: (origin: InputValueHandle, pOriginInfo: Deno.PointerValue<InputOriginInfo>, unOriginInfoSize: number) => InputError;
  GetActionBindingInfo: (action: ActionHandle, pOriginInfo: Deno.PointerValue<InputBindingInfo>, unBindingInfoSize: number, unBindingInfoCount: number, punReturnedBindingInfoCount: Deno.PointerValue<number>) => InputError;
  ShowActionOrigins: (actionSetHandle: ActionSetHandle, ulActionHandle: ActionHandle) => InputError;
  ShowBindingsForActionSet: (pSets: Deno.PointerValue<ActiveActionSet>, unSizeOfVRSelectedActionSet_t: number, unSetCount: number, originToHighlight: InputValueHandle) => InputError;
  GetComponentStateForBinding: (pchRenderModelName: string, pchComponentName: string, pOriginInfo: Deno.PointerValue<InputBindingInfo>//READONLY, unBindingInfoSize: number, unBindingInfoCount: number, pComponentState: Deno.PointerValue<RenderModel_ComponentState>) => InputError;
  IsUsingLegacyInput: () => bool;
  OpenBindingUI: (pchAppKey: string, ulActionSetHandle: ActionSetHandle, ulDeviceHandle: InputValueHandle, bShowOnDesktop: bool) => InputError;
  GetBindingVariant: (ulDevicePath: InputValueHandle, pchVariantArray: string, unVariantArraySize: number) => InputError;
}

export interface IIOBuffer {
  Open: (pchPath: string, mode: IOBufferMode, unElementSize: number, unElements: number, pulBuffer: Deno.PointerValue<IOBufferHandle>) => IOBufferError;
  Close: (ulBuffer: IOBufferHandle) => IOBufferError;
  Read: (ulBuffer: IOBufferHandle, pDst: Deno.PointerValue<unknown>, unBytes: number, punRead: Deno.PointerValue<number>) => IOBufferError;
  Write: (ulBuffer: IOBufferHandle, pSrc: Deno.PointerValue<unknown>, unBytes: number) => IOBufferError;
  PropertyContainer: (ulBuffer: IOBufferHandle) => PropertyContainerHandle;
  HasReaders: (ulBuffer: IOBufferHandle) => bool;
}

export interface ISpatialAnchors {
  CreateSpatialAnchorFromDescriptor: (pchDescriptor: string, pHandleOut: Deno.PointerValue<SpatialAnchorHandle>) => SpatialAnchorError;
  CreateSpatialAnchorFromPose: (unDeviceIndex: TrackedDeviceIndex, eOrigin: TrackingUniverseOrigin, pPose: Deno.PointerValue<SpatialAnchorPose>, pHandleOut: Deno.PointerValue<SpatialAnchorHandle>) => SpatialAnchorError;
  GetSpatialAnchorPose: (unHandle: SpatialAnchorHandle, eOrigin: TrackingUniverseOrigin, pPoseOut: Deno.PointerValue<SpatialAnchorPose>) => SpatialAnchorError;
  GetSpatialAnchorDescriptor: (unHandle: SpatialAnchorHandle, pchDescriptorOut: string, punDescriptorBufferLenInOut: Deno.PointerValue<number>) => SpatialAnchorError;
}

export interface IDebug {
  EmitVrProfilerEvent: (pchMessage: string) => DebugError;
  BeginVrProfilerEvent: (pHandleOut: Deno.PointerValue<VrProfilerEventHandle>) => DebugError;
  FinishVrProfilerEvent: (hHandle: VrProfilerEventHandle, pchMessage: string) => DebugError;
  DriverDebugRequest: (unDeviceIndex: TrackedDeviceIndex, pchRequest: string, pchResponseBuffer: string, unResponseBufferSize: number) => number;
}

export interface INotifications {
  CreateNotification: (ulOverlayHandle: OverlayHandle, ulUserValue: bigint, type: NotificationType, pchText: string, style: NotificationStyle, pImage: Deno.PointerValue<NotificationBitmap>//READONLY, pNotificationId: Deno.PointerValue<NotificationId>) => NotificationError;
  RemoveNotification: (notificationId: NotificationId) => NotificationError;
}

export interface IProperties {
  ReadPropertyBatch: (ulContainerHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PropertyRead>, unBatchEntryCount: number) => TrackedPropertyError;
  WritePropertyBatch: (ulContainerHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PropertyWrite>, unBatchEntryCount: number) => TrackedPropertyError;
  GetPropErrorNameFromEnum: (error: TrackedPropertyError) => string;
  TrackedDeviceToPropertyContainer: (nDevice: TrackedDeviceIndex) => PropertyContainerHandle;
}

export interface IPaths {
  ReadPathBatch: (ulRootHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PathRead>, unBatchEntryCount: number) => TrackedPropertyError;
  WritePathBatch: (ulRootHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PathWrite>, unBatchEntryCount: number) => TrackedPropertyError;
  StringToHandle: (pHandle: Deno.PointerValue<PathHandle>, pchPath: string) => TrackedPropertyError;
  HandleToString: (pHandle: PathHandle, pchBuffer: string, unBufferSize: number, punBufferSizeUsed: Deno.PointerValue<number>) => TrackedPropertyError;
}

export interface IBlockQueue {
  Create: (pulQueueHandle: Deno.PointerValue<PropertyContainerHandle>, pchPath: string, unBlockDataSize: number, unBlockHeaderSize: number, unBlockCount: number, unFlags: number) => BlockQueueError;
  Connect: (pulQueueHandle: Deno.PointerValue<PropertyContainerHandle>, pchPath: string) => BlockQueueError;
  Destroy: (ulQueueHandle: PropertyContainerHandle) => BlockQueueError;
  AcquireWriteOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>) => BlockQueueError;
  ReleaseWriteOnlyBlock: (ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle) => BlockQueueError;
  WaitAndAcquireReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>//READONLY, eReadType: BlockQueueReadType, unTimeoutMs: number) => BlockQueueError;
  AcquireReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>//READONLY, eReadType: BlockQueueReadType) => BlockQueueError;
  ReleaseReadOnlyBlock: (ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle) => BlockQueueError;
  QueueHasReader: (ulQueueHandle: PropertyContainerHandle, pbHasReaders: Deno.PointerValue<bool>) => BlockQueueError;
}

