// Structs

export interface HmdMatrix34 {
  m: [3][4]number;
}

export interface HmdMatrix33 {
  m: [3][3]number;
}

export interface HmdMatrix44 {
  m: [4][4]number;
}

export interface HmdVector3 {
  v: [3]number;
}

export interface HmdVector4 {
  v: [4]number;
}

export interface HmdVector3d {
  v: [3]number;
}

export interface HmdVector2 {
  v: [2]number;
}

export interface HmdQuaternion {
  w: number;
  x: number;
  y: number;
  z: number;
}

export interface HmdQuaternionf {
  w: number;
  x: number;
  y: number;
  z: number;
}

export interface HmdColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HmdQuad {
  vCorners: [4]HmdVector3;
}

export interface HmdRect2 {
  vTopLeft: HmdVector2;
  vBottomRight: HmdVector2;
}

export interface BoneTransform {
  position: HmdVector4;
  orientation: HmdQuaternionf;
}

export interface DistortionCoordinates {
  rfRed: [2]number;
  rfGreen: [2]number;
  rfBlue: [2]number;
}

export interface Texture {
  handle: Deno.PointerValue;
  eType: TextureType;
  eColorSpace: ColorSpace;
}

export interface TextureBounds {
  uMin: number;
  vMin: number;
  uMax: number;
  vMax: number;
}

export interface TextureWithPose {
  mDeviceToAbsoluteTracking: HmdMatrix34;
}

export interface TextureDepthInfo {
  handle: Deno.PointerValue;
  mProjection: HmdMatrix44;
  vRange: HmdVector2;
}

export interface TextureWithDepth {
  depth: TextureDepthInfo;
}

export interface TextureWithPoseAndDepth {
  depth: TextureDepthInfo;
}

export interface TrackedDevicePose {
  mDeviceToAbsoluteTracking: HmdMatrix34;
  vVelocity: HmdVector3;
  vAngularVelocity: HmdVector3;
  eTrackingResult: TrackingResult;
  bPoseIsValid: boolean;
  bDeviceIsConnected: boolean;
}

export interface VulkanTextureData {
  nImage: bigint;
  pDevice: ^VkDevice_T;
  pPhysicalDevice: ^VkPhysicalDevice_T;
  pInstance: ^VkInstance_T;
  pQueue: ^VkQueue_T;
  nQueueFamilyIndex: number;
  nWidth: number;
  nHeight: number;
  nFormat: number;
  nSampleCount: number;
}

export interface VulkanTextureArrayData {
  unArrayIndex: number;
  unArraySize: number;
}

export interface D3D12TextureData {
  pResource: ^ID3D12Resource;
  pCommandQueue: ^ID3D12CommandQueue;
  nNodeMask: number;
}

export interface Event_Controller {
  button: number;
}

export interface Event_Mouse {
  x: number;
  y: number;
  button: number;
  cursorIndex: number;
}

export interface Event_Scroll {
  xdelta: number;
  ydelta: number;
  unused: number;
  viewportscale: number;
  cursorIndex: number;
}

export interface Event_TouchPadMove {
  bFingerDown: boolean;
  flSecondsFingerDown: number;
  fValueXFirst: number;
  fValueYFirst: number;
  fValueXRaw: number;
  fValueYRaw: number;
}

export interface Event_Notification {
  ulUserValue: bigint;
  notificationId: number;
}

export interface Event_Process {
  pid: number;
  oldPid: number;
  bForced: boolean;
  bConnectionLost: boolean;
}

export interface Event_Overlay {
  overlayHandle: bigint;
  devicePath: bigint;
  memoryBlockId: bigint;
  cursorIndex: number;
}

export interface Event_Status {
  statusState: number;
}

export interface Event_Keyboard {
  cNewInput: [8]number;
  uUserValue: bigint;
  overlayHandle: bigint;
}

export interface Event_Ipd {
  ipdMeters: number;
}

export interface Event_Chaperone {
  nPreviousUniverse: bigint;
  nCurrentUniverse: bigint;
}

export interface Event_Reserved {
  reserved0: bigint;
  reserved1: bigint;
  reserved2: bigint;
  reserved3: bigint;
  reserved4: bigint;
  reserved5: bigint;
}

export interface Event_PerformanceTest {
  nFidelityLevel: number;
}

export interface Event_SeatedZeroPoseReset {
  bResetBySystemMenu: boolean;
}

export interface Event_Screenshot {
  handle: number;
  type: number;
}

export interface Event_ScreenshotProgress {
  progress: number;
}

export interface Event_ApplicationLaunch {
  pid: number;
  unArgsHandle: number;
}

export interface Event_EditingCameraSurface {
  overlayHandle: bigint;
  nVisualMode: number;
}

export interface Event_MessageOverlay {
  unVRMessageOverlayResponse: number;
}

export interface Event_Property {
  container: PropertyContainerHandle;
  prop: TrackedDeviceProperty;
}

export interface Event_HapticVibration {
  containerHandle: bigint;
  componentHandle: bigint;
  fDurationSeconds: number;
  fFrequency: number;
  fAmplitude: number;
}

export interface Event_WebConsole {
  webConsoleHandle: WebConsoleHandle;
}

export interface Event_InputBindingLoad {
  ulAppContainer: PropertyContainerHandle;
  pathMessage: bigint;
  pathUrl: bigint;
  pathControllerType: bigint;
}

export interface Event_InputActionManifestLoad {
  pathAppKey: bigint;
  pathMessage: bigint;
  pathMessageParam: bigint;
  pathManifestPath: bigint;
}

export interface Event_SpatialAnchor {
  unHandle: SpatialAnchorHandle;
}

export interface Event_ProgressUpdate {
  ulApplicationPropertyContainer: bigint;
  pathDevice: bigint;
  pathInputSource: bigint;
  pathProgressAction: bigint;
  pathIcon: bigint;
  fProgress: number;
}

export interface Event_ShowUI {
  eType: ShowUIType;
}

export interface Event_ShowDevTools {
  nBrowserIdentifier: number;
}

export interface Event_HDCPError {
  eCode: HDCPError;
}

export interface Event_AudioVolumeControl {
  fVolumeLevel: number;
}

export interface Event_AudioMuteControl {
  bMute: boolean;
}

export interface Event_Data {
  reserved: Event_Reserved;
  controller: Event_Controller;
  mouse: Event_Mouse;
  scroll: Event_Scroll;
  process: Event_Process;
  notification: Event_Notification;
  overlay: Event_Overlay;
  status: Event_Status;
  keyboard: Event_Keyboard;
  ipd: Event_Ipd;
  chaperone: Event_Chaperone;
  performanceTest: Event_PerformanceTest;
  touchPadMove: Event_TouchPadMove;
  seatedZeroPoseReset: Event_SeatedZeroPoseReset;
  screenshot: Event_Screenshot;
  screenshotProgress: Event_ScreenshotProgress;
  applicationLaunch: Event_ApplicationLaunch;
  cameraSurface: Event_EditingCameraSurface;
  messageOverlay: Event_MessageOverlay;
  property: Event_Property;
  hapticVibration: Event_HapticVibration;
  webConsole: Event_WebConsole;
  inputBinding: Event_InputBindingLoad;
  actionManifest: Event_InputActionManifestLoad;
  spatialAnchor: Event_SpatialAnchor;
  progressUpdate: Event_ProgressUpdate;
  showUi: Event_ShowUI;
  showDevTools: Event_ShowDevTools;
  hdcpError: Event_HDCPError;
  audioVolumeControl: Event_AudioVolumeControl;
  audioMuteControl: Event_AudioMuteControl;
}

export interface Event {
  eventType: number;
  trackedDeviceIndex: TrackedDeviceIndex;
  eventAgeSeconds: number;
  data: Event_Data;
}

export interface RenderModel_ComponentState {
  mTrackingToComponentRenderModel: HmdMatrix34;
  mTrackingToComponentLocal: HmdMatrix34;
  uProperties: ComponentProperties;
}

export interface HiddenAreaMesh {
  pVertexData: ^HmdVector2;
  unTriangleCount: number;
}

export interface ControllerAxis {
  x: number;
  y: number;
}

export interface ControllerState001 {
  unPacketNum: number;
  ulButtonPressed: bigint;
  ulButtonTouched: bigint;
  rAxis: [5]ControllerAxis;
}

export interface CameraVideoStreamFrameHeader {
  eFrameType: TrackedCameraFrameType;
  nWidth: number;
  nHeight: number;
  nBytesPerPixel: number;
  nFrameSequence: number;
  trackedDevicePose: TrackedDevicePose;
  ulFrameExposureTime: bigint;
}

export interface Compositor_FrameTiming {
  nSize: number;
  nFrameIndex: number;
  nNumFramePresents: number;
  nNumMisPresented: number;
  nNumDroppedFrames: number;
  nReprojectionFlags: number;
  flSystemTimeInSeconds: number;
  flPreSubmitGpuMs: number;
  flPostSubmitGpuMs: number;
  flTotalRenderGpuMs: number;
  flCompositorRenderGpuMs: number;
  flCompositorRenderCpuMs: number;
  flCompositorIdleCpuMs: number;
  flClientFrameIntervalMs: number;
  flPresentCallCpuMs: number;
  flWaitForPresentCpuMs: number;
  flSubmitFrameMs: number;
  flWaitGetPosesCalledMs: number;
  flNewPosesReadyMs: number;
  flNewFrameReadyMs: number;
  flCompositorUpdateStartMs: number;
  flCompositorUpdateEndMs: number;
  flCompositorRenderStartMs: number;
  HmdPose: TrackedDevicePose;
  nNumVSyncsReadyForUse: number;
  nNumVSyncsToFirstView: number;
  flTransferLatencyMs: number;
}

export interface Compositor_BenchmarkResults {
  flMegaPixelsPerSecond: number;
  flHmdRecommendedMegaPixelsPerSecond: number;
}

export interface DriverDirectMode_FrameTiming {
  nSize: number;
  nNumFramePresents: number;
  nNumMisPresented: number;
  nNumDroppedFrames: number;
  nReprojectionFlags: number;
}

export interface ImuSample {
  fSampleTime: number;
  vAccel: HmdVector3d;
  vGyro: HmdVector3d;
  unOffScaleFlags: number;
}

export interface AppOverrideKeys {
  pchKey: string;
  pchValue: string;
}

export interface Compositor_CumulativeStats {
  nPid: number;
  nNumFramePresents: number;
  nNumDroppedFrames: number;
  nNumReprojectedFrames: number;
  nNumFramePresentsOnStartup: number;
  nNumDroppedFramesOnStartup: number;
  nNumReprojectedFramesOnStartup: number;
  nNumLoading: number;
  nNumFramePresentsLoading: number;
  nNumDroppedFramesLoading: number;
  nNumReprojectedFramesLoading: number;
  nNumTimedOut: number;
  nNumFramePresentsTimedOut: number;
  nNumDroppedFramesTimedOut: number;
  nNumReprojectedFramesTimedOut: number;
  nNumFrameSubmits: number;
  flSumCompositorCPUTimeMS: vrshared_double;
  flSumCompositorGPUTimeMS: vrshared_double;
  flSumTargetFrameTimes: vrshared_double;
  flSumApplicationCPUTimeMS: vrshared_double;
  flSumApplicationGPUTimeMS: vrshared_double;
  nNumFramesWithDepth: number;
}

export interface Compositor_StageRenderSettings {
  PrimaryColor: HmdColor;
  SecondaryColor: HmdColor;
  flVignetteInnerRadius: number;
  flVignetteOuterRadius: number;
  flFresnelStrength: number;
  bBackfaceCulling: boolean;
  bGreyscale: boolean;
  bWireframe: boolean;
}

export interface OverlayIntersectionParams {
  vSource: HmdVector3;
  vDirection: HmdVector3;
  eOrigin: TrackingUniverseOrigin;
}

export interface OverlayIntersectionResults {
  vPoint: HmdVector3;
  vNormal: HmdVector3;
  vUVs: HmdVector2;
  fDistance: number;
}

export interface IntersectionMaskRectangle {
  flTopLeftX: number;
  flTopLeftY: number;
  flWidth: number;
  flHeight: number;
}

export interface IntersectionMaskCircle {
  flCenterX: number;
  flCenterY: number;
  flRadius: number;
}

export interface OverlayIntersectionMaskPrimitive_Data {
  Rectangle: IntersectionMaskRectangle;
  Circle: IntersectionMaskCircle;
}

export interface OverlayIntersectionMaskPrimitive {
  nPrimitiveType: OverlayIntersectionMaskPrimitiveType;
  Primitive: OverlayIntersectionMaskPrimitive_Data;
}

export interface OverlayProjection {
  fLeft: number;
  fRight: number;
  fTop: number;
  fBottom: number;
}

export interface OverlayView {
  overlayHandle: OverlayHandle;
  texture: Texture;
  textureBounds: TextureBounds;
}

export interface VulkanDevice {
  pInstance: ^VkInstance_T;
  pDevice: ^VkDevice_T;
  pPhysicalDevice: ^VkPhysicalDevice_T;
  pQueue: ^VkQueue_T;
  uQueueFamilyIndex: number;
}

export interface NativeDevice {
  handle: Deno.PointerValue;
  eType: DeviceType;
}

export interface RenderModel_Vertex {
  vPosition: HmdVector3;
  vNormal: HmdVector3;
  rfTextureCoord: [2]number;
}

export interface RenderModel_TextureMap {
  unWidth: number;
  unHeight: number;
  rubTextureMapData: Uint8Array;
  format: RenderModelTextureFormat;
  unMipLevels: number;
}

export interface RenderModel {
  rVertexData: ^RenderModel_Vertex;
  unVertexCount: number;
  rIndexData: ^number;
  unTriangleCount: number;
  diffuseTextureId: TextureID;
}

export interface RenderModel_ControllerMode_State {
  bScrollWheelVisible: boolean;
}

export interface NotificationBitmap {
  pImageData: Deno.PointerValue;
  nWidth: number;
  nHeight: number;
  nBytesPerPixel: number;
}

export interface CVRSettingHelper {
  pSettings: ^IVRSettings;
}

export interface InputAnalogActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
  x: number;
  y: number;
  z: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
  fUpdateTime: number;
}

export interface InputDigitalActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
  bState: boolean;
  bChanged: boolean;
  fUpdateTime: number;
}

export interface InputPoseActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
  pose: TrackedDevicePose;
}

export interface InputSkeletalActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
}

export interface InputOriginInfo {
  devicePath: InputValueHandle;
  trackedDeviceIndex: TrackedDeviceIndex;
  rchRenderModelComponentName: [128]number;
}

export interface InputBindingInfo {
  rchDevicePathName: [128]number;
  rchInputPathName: [128]number;
  rchModeName: [128]number;
  rchSlotName: [128]number;
  rchInputSourceType: [32]number;
}

export interface ActiveActionSet {
  ulActionSet: ActionSetHandle;
  ulRestrictedToDevice: InputValueHandle;
  ulSecondaryActionSet: ActionSetHandle;
  unPadding: number;
  nPriority: number;
}

export interface SkeletalSummaryData {
  flFingerCurl: [5]number;
  flFingerSplay: [4]number;
}

export interface SpatialAnchorPose {
  mAnchorToAbsoluteTracking: HmdMatrix34;
}

export interface COpenVRContext {
  pVRSystem: ^IVRSystem;
  pVRChaperone: ^IVRChaperone;
  pVRChaperoneSetup: ^IVRChaperoneSetup;
  pVRCompositor: ^IVRCompositor;
  pVRHeadsetView: ^IVRHeadsetView;
  pVROverlay: ^IVROverlay;
  pVROverlayView: ^IVROverlayView;
  pVRResources: ^IVRResources;
  pVRRenderModels: ^IVRRenderModels;
  pVRExtendedDisplay: ^IVRExtendedDisplay;
  pVRSettings: ^IVRSettings;
  pVRApplications: ^IVRApplications;
  pVRTrackedCamera: ^IVRTrackedCamera;
  pVRScreenshots: ^IVRScreenshots;
  pVRDriverManager: ^IVRDriverManager;
  pVRInput: ^IVRInput;
  pVRIOBuffer: ^IVRIOBuffer;
  pVRSpatialAnchors: ^IVRSpatialAnchors;
  pVRDebug: ^IVRDebug;
  pVRNotifications: ^IVRNotifications;
}

export interface PropertyWrite {
  prop: TrackedDeviceProperty;
  writeType: PropertyWriteType;
  eSetError: TrackedPropertyError;
  pvBuffer: Deno.PointerValue;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  eError: TrackedPropertyError;
}

export interface PropertyRead {
  prop: TrackedDeviceProperty;
  pvBuffer: Deno.PointerValue;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  unRequiredBufferSize: number;
  eError: TrackedPropertyError;
}

export interface CVRPropertyHelpers {
  pProperties: ^IVRProperties;
}

export interface PathWrite {
  ulPath: PathHandle;
  writeType: PropertyWriteType;
  eSetError: TrackedPropertyError;
  pvBuffer: Deno.PointerValue;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  eError: TrackedPropertyError;
  pszPath: string;
}

export interface PathRead {
  ulPath: PathHandle;
  pvBuffer: Deno.PointerValue;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  unRequiredBufferSize: number;
  eError: TrackedPropertyError;
  pszPath: string;
}

