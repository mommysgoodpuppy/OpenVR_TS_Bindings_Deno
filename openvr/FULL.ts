
//#region Entrypoints
const { symbols } = await Deno.dlopen("openvr_api.dll", {
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
//#endregion
// Typedefs and Constants

//#region Typedefs
export type PropertyTypeTag = number;//uint32_t
export type vrshared_uint64 = bigint;//uint64_t
export type vrshared_double = number;//double
export type SpatialAnchorHandle = number;//uint32_t
export type glSharedTextureHandle = Deno.PointerValue<unknown>;//void *
export type glInt = number;//int32_t
export type glUInt = number;//uint32_t
export type SharedTextureHandle = bigint;//uint64_t
export type DriverId = number;//uint32_t
export type TrackedDeviceIndex = number;//uint32_t
export type WebConsoleHandle = bigint;//uint64_t
export type PropertyContainerHandle = bigint;//uint64_t
export type DriverHandle = PropertyContainerHandle;//PropertyContainerHandle_t
export type ActionHandle = bigint;//uint64_t
export type ActionSetHandle = bigint;//uint64_t
export type InputValueHandle = bigint;//uint64_t
export type ComponentProperties = number;//uint32_t
export type ControllerState = ControllerState001;//struct vr::VRControllerState001_t
export type OverlayHandle = bigint;//uint64_t
export type BoneIndex = number;//int32_t
export type TrackedCameraHandle = bigint;//uint64_t
export type ScreenshotHandle = number;//uint32_t
export type TextureID = number;//int32_t
export type NotificationId = number;//uint32_t
export type IOBufferHandle = bigint;//uint64_t
export type VrProfilerEventHandle = bigint;//uint64_t
export type HmdError = InitError;//enum vr::EVRInitError
export type Hmd_Eye = Eye;//enum vr::EVREye
export type HmdTrackingResult = TrackingResult;//enum vr::ETrackingResult
export type ScreenshotsError = ScreenshotError;//enum vr::EVRScreenshotError
export type PathHandle = bigint;//uint64_t
//#endregion

//#region Constants
export const k_nDriverNone: number = 4294967295;//uint32_t
export const k_unMaxDriverDebugResponseSize: number = 32768;//uint32_t
export const k_unTrackedDeviceIndex_Hmd: number = 0;//uint32_t
export const k_unMaxTrackedDeviceCount: number = 64;//uint32_t
export const k_unTrackedDeviceIndexOther: number = 4294967294;//uint32_t
export const k_unTrackedDeviceIndexInvalid: number = 4294967295;//uint32_t
export const k_ulInvalidPropertyContainer: PropertyContainerHandle = 0n;//uint64_t
export const k_unInvalidPropertyTag: PropertyTypeTag = 0;//uint32_t
export const k_ulInvalidDriverHandle: PropertyContainerHandle = 0n;//uint64_t
export const k_unFloatPropertyTag: PropertyTypeTag = 1;//uint32_t
export const k_unInt32PropertyTag: PropertyTypeTag = 2;//uint32_t
export const k_unUint64PropertyTag: PropertyTypeTag = 3;//uint32_t
export const k_unBoolPropertyTag: PropertyTypeTag = 4;//uint32_t
export const k_unStringPropertyTag: PropertyTypeTag = 5;//uint32_t
export const k_unErrorPropertyTag: PropertyTypeTag = 6;//uint32_t
export const k_unDoublePropertyTag: PropertyTypeTag = 7;//uint32_t
export const k_unHmdMatrix34PropertyTag: PropertyTypeTag = 20;//uint32_t
export const k_unHmdMatrix44PropertyTag: PropertyTypeTag = 21;//uint32_t
export const k_unHmdVector3PropertyTag: PropertyTypeTag = 22;//uint32_t
export const k_unHmdVector4PropertyTag: PropertyTypeTag = 23;//uint32_t
export const k_unHmdVector2PropertyTag: PropertyTypeTag = 24;//uint32_t
export const k_unHmdQuadPropertyTag: PropertyTypeTag = 25;//uint32_t
export const k_unHiddenAreaPropertyTag: PropertyTypeTag = 30;//uint32_t
export const k_unPathHandleInfoTag: PropertyTypeTag = 31;//uint32_t
export const k_unActionPropertyTag: PropertyTypeTag = 32;//uint32_t
export const k_unInputValuePropertyTag: PropertyTypeTag = 33;//uint32_t
export const k_unWildcardPropertyTag: PropertyTypeTag = 34;//uint32_t
export const k_unHapticVibrationPropertyTag: PropertyTypeTag = 35;//uint32_t
export const k_unSkeletonPropertyTag: PropertyTypeTag = 36;//uint32_t
export const k_unSpatialAnchorPosePropertyTag: PropertyTypeTag = 40;//uint32_t
export const k_unJsonPropertyTag: PropertyTypeTag = 41;//uint32_t
export const k_unActiveActionSetPropertyTag: PropertyTypeTag = 42;//uint32_t
export const k_unOpenVRInternalReserved_Start: PropertyTypeTag = 1000;//uint32_t
export const k_unOpenVRInternalReserved_End: PropertyTypeTag = 10000;//uint32_t
export const k_unMaxPropertyStringSize: number = 32768;//uint32_t
export const k_ulInvalidActionHandle: ActionHandle = 0n;//uint64_t
export const k_ulInvalidActionSetHandle: ActionSetHandle = 0n;//uint64_t
export const k_ulInvalidInputValueHandle: InputValueHandle = 0n;//uint64_t
export const k_unControllerStateAxisCount: number = 5;//uint32_t
export const k_ulOverlayHandleInvalid: OverlayHandle = 0n;//uint64_t
export const k_unMaxDistortionFunctionParameters: number = 8;//uint32_t
export const k_unScreenshotHandleInvalid: number = 0;//uint32_t
export const IVRSystem_Version: string = "FnTable:IVRSystem_022";//char *const
export const IVRExtendedDisplay_Version: string = "FnTable:IVRExtendedDisplay_001";//char *const
export const IVRTrackedCamera_Version: string = "FnTable:IVRTrackedCamera_006";//char *const
export const k_unMaxApplicationKeyLength: number = 128;//uint32_t
export const k_pch_MimeType_HomeApp: string = "vr/home";//char *const
export const k_pch_MimeType_GameTheater: string = "vr/game_theater";//char *const
export const IVRApplications_Version: string = "FnTable:IVRApplications_007";//char *const
export const IVRChaperone_Version: string = "FnTable:IVRChaperone_004";//char *const
export const IVRChaperoneSetup_Version: string = "FnTable:IVRChaperoneSetup_006";//char *const
export const IVRCompositor_Version: string = "FnTable:IVRCompositor_028";//char *const
export const k_unVROverlayMaxKeyLength: number = 128;//uint32_t
export const k_unVROverlayMaxNameLength: number = 128;//uint32_t
export const k_unMaxOverlayCount: number = 128;//uint32_t
export const k_unMaxOverlayIntersectionMaskPrimitivesCount: number = 32;//uint32_t
export const IVROverlay_Version: string = "FnTable:IVROverlay_027";//char *const
export const IVROverlayView_Version: string = "FnTable:IVROverlayView_003";//char *const
export const k_unHeadsetViewMaxWidth: number = 3840;//uint32_t
export const k_unHeadsetViewMaxHeight: number = 2160;//uint32_t
export const k_pchHeadsetViewOverlayKey: string = "system.HeadsetView";//char *const
export const IVRHeadsetView_Version: string = "FnTable:IVRHeadsetView_001";//char *const
export const k_pch_Controller_Component_GDC2015: string = "gdc2015";//char *const
export const k_pch_Controller_Component_Base: string = "base";//char *const
export const k_pch_Controller_Component_Tip: string = "tip";//char *const
export const k_pch_Controller_Component_OpenXR_Aim: string = "openxr_aim";//char *const
export const k_pch_Controller_Component_HandGrip: string = "handgrip";//char *const
export const k_pch_Controller_Component_OpenXR_Grip: string = "openxr_grip";//char *const
export const k_pch_Controller_Component_OpenXR_HandModel: string = "openxr_handmodel";//char *const
export const k_pch_Controller_Component_Status: string = "status";//char *const
export const IVRRenderModels_Version: string = "FnTable:IVRRenderModels_006";//char *const
export const k_unNotificationTextMaxSize: number = 256;//uint32_t
export const IVRNotifications_Version: string = "FnTable:IVRNotifications_002";//char *const
export const k_unMaxSettingsKeyLength: number = 128;//uint32_t
export const IVRSettings_Version: string = "FnTable:IVRSettings_003";//char *const
export const k_pch_SteamVR_Section: string = "steamvr";//char *const
export const k_pch_SteamVR_RequireHmd_String: string = "requireHmd";//char *const
export const k_pch_SteamVR_ForcedDriverKey_String: string = "forcedDriver";//char *const
export const k_pch_SteamVR_ForcedHmdKey_String: string = "forcedHmd";//char *const
export const k_pch_SteamVR_DisplayDebug_Bool: string = "displayDebug";//char *const
export const k_pch_SteamVR_DebugProcessPipe_String: string = "debugProcessPipe";//char *const
export const k_pch_SteamVR_DisplayDebugX_Int32: string = "displayDebugX";//char *const
export const k_pch_SteamVR_DisplayDebugY_Int32: string = "displayDebugY";//char *const
export const k_pch_SteamVR_SendSystemButtonToAllApps_Bool: string = "sendSystemButtonToAllApps";//char *const
export const k_pch_SteamVR_LogLevel_Int32: string = "loglevel";//char *const
export const k_pch_SteamVR_IPD_Float: string = "ipd";//char *const
export const k_pch_SteamVR_Background_String: string = "background";//char *const
export const k_pch_SteamVR_BackgroundUseDomeProjection_Bool: string = "backgroundUseDomeProjection";//char *const
export const k_pch_SteamVR_BackgroundCameraHeight_Float: string = "backgroundCameraHeight";//char *const
export const k_pch_SteamVR_BackgroundDomeRadius_Float: string = "backgroundDomeRadius";//char *const
export const k_pch_SteamVR_GridColor_String: string = "gridColor";//char *const
export const k_pch_SteamVR_PlayAreaColor_String: string = "playAreaColor";//char *const
export const k_pch_SteamVR_TrackingLossColor_String: string = "trackingLossColor";//char *const
export const k_pch_SteamVR_ShowStage_Bool: string = "showStage";//char *const
export const k_pch_SteamVR_DrawTrackingReferences_Bool: string = "drawTrackingReferences";//char *const
export const k_pch_SteamVR_ActivateMultipleDrivers_Bool: string = "activateMultipleDrivers";//char *const
export const k_pch_SteamVR_UsingSpeakers_Bool: string = "usingSpeakers";//char *const
export const k_pch_SteamVR_SpeakersForwardYawOffsetDegrees_Float: string = "speakersForwardYawOffsetDegrees";//char *const
export const k_pch_SteamVR_BaseStationPowerManagement_Int32: string = "basestationPowerManagement";//char *const
export const k_pch_SteamVR_ShowBaseStationPowerManagementTip_Int32: string = "ShowBaseStationPowerManagementTip";//char *const
export const k_pch_SteamVR_NeverKillProcesses_Bool: string = "neverKillProcesses";//char *const
export const k_pch_SteamVR_SupersampleScale_Float: string = "supersampleScale";//char *const
export const k_pch_SteamVR_MaxRecommendedResolution_Int32: string = "maxRecommendedResolution";//char *const
export const k_pch_SteamVR_MotionSmoothing_Bool: string = "motionSmoothing";//char *const
export const k_pch_SteamVR_MotionSmoothingOverride_Int32: string = "motionSmoothingOverride";//char *const
export const k_pch_SteamVR_FramesToThrottle_Int32: string = "framesToThrottle";//char *const
export const k_pch_SteamVR_AdditionalFramesToPredict_Int32: string = "additionalFramesToPredict";//char *const
export const k_pch_SteamVR_WorldScale_Float: string = "worldScale";//char *const
export const k_pch_SteamVR_FovScale_Int32: string = "fovScale";//char *const
export const k_pch_SteamVR_FovScaleLetterboxed_Bool: string = "fovScaleLetterboxed";//char *const
export const k_pch_SteamVR_DisableAsyncReprojection_Bool: string = "disableAsync";//char *const
export const k_pch_SteamVR_ForceFadeOnBadTracking_Bool: string = "forceFadeOnBadTracking";//char *const
export const k_pch_SteamVR_DefaultMirrorView_Int32: string = "mirrorView";//char *const
export const k_pch_SteamVR_ShowLegacyMirrorView_Bool: string = "showLegacyMirrorView";//char *const
export const k_pch_SteamVR_MirrorViewVisibility_Bool: string = "showMirrorView";//char *const
export const k_pch_SteamVR_MirrorViewDisplayMode_Int32: string = "mirrorViewDisplayMode";//char *const
export const k_pch_SteamVR_MirrorViewEye_Int32: string = "mirrorViewEye";//char *const
export const k_pch_SteamVR_MirrorViewGeometry_String: string = "mirrorViewGeometry";//char *const
export const k_pch_SteamVR_MirrorViewGeometryMaximized_String: string = "mirrorViewGeometryMaximized";//char *const
export const k_pch_SteamVR_PerfGraphVisibility_Bool: string = "showPerfGraph";//char *const
export const k_pch_SteamVR_StartMonitorFromAppLaunch: string = "startMonitorFromAppLaunch";//char *const
export const k_pch_SteamVR_StartCompositorFromAppLaunch_Bool: string = "startCompositorFromAppLaunch";//char *const
export const k_pch_SteamVR_StartDashboardFromAppLaunch_Bool: string = "startDashboardFromAppLaunch";//char *const
export const k_pch_SteamVR_StartOverlayAppsFromDashboard_Bool: string = "startOverlayAppsFromDashboard";//char *const
export const k_pch_SteamVR_EnableHomeApp: string = "enableHomeApp";//char *const
export const k_pch_SteamVR_CycleBackgroundImageTimeSec_Int32: string = "CycleBackgroundImageTimeSec";//char *const
export const k_pch_SteamVR_RetailDemo_Bool: string = "retailDemo";//char *const
export const k_pch_SteamVR_IpdOffset_Float: string = "ipdOffset";//char *const
export const k_pch_SteamVR_AllowSupersampleFiltering_Bool: string = "allowSupersampleFiltering";//char *const
export const k_pch_SteamVR_SupersampleManualOverride_Bool: string = "supersampleManualOverride";//char *const
export const k_pch_SteamVR_EnableLinuxVulkanAsync_Bool: string = "enableLinuxVulkanAsync";//char *const
export const k_pch_SteamVR_AllowDisplayLockedMode_Bool: string = "allowDisplayLockedMode";//char *const
export const k_pch_SteamVR_HaveStartedTutorialForNativeChaperoneDriver_Bool: string = "haveStartedTutorialForNativeChaperoneDriver";//char *const
export const k_pch_SteamVR_ForceWindows32bitVRMonitor: string = "forceWindows32BitVRMonitor";//char *const
export const k_pch_SteamVR_DebugInputBinding: string = "debugInputBinding";//char *const
export const k_pch_SteamVR_DoNotFadeToGrid: string = "doNotFadeToGrid";//char *const
export const k_pch_SteamVR_EnableSharedResourceJournaling: string = "enableSharedResourceJournaling";//char *const
export const k_pch_SteamVR_EnableSafeMode: string = "enableSafeMode";//char *const
export const k_pch_SteamVR_PreferredRefreshRate: string = "preferredRefreshRate";//char *const
export const k_pch_SteamVR_LastVersionNotice: string = "lastVersionNotice";//char *const
export const k_pch_SteamVR_LastVersionNoticeDate: string = "lastVersionNoticeDate";//char *const
export const k_pch_SteamVR_HmdDisplayColorGainR_Float: string = "hmdDisplayColorGainR";//char *const
export const k_pch_SteamVR_HmdDisplayColorGainG_Float: string = "hmdDisplayColorGainG";//char *const
export const k_pch_SteamVR_HmdDisplayColorGainB_Float: string = "hmdDisplayColorGainB";//char *const
export const k_pch_SteamVR_CustomIconStyle_String: string = "customIconStyle";//char *const
export const k_pch_SteamVR_CustomOffIconStyle_String: string = "customOffIconStyle";//char *const
export const k_pch_SteamVR_CustomIconForceUpdate_String: string = "customIconForceUpdate";//char *const
export const k_pch_SteamVR_AllowGlobalActionSetPriority: string = "globalActionSetPriority";//char *const
export const k_pch_SteamVR_OverlayRenderQuality: string = "overlayRenderQuality_2";//char *const
export const k_pch_SteamVR_BlockOculusSDKOnOpenVRLaunchOption_Bool: string = "blockOculusSDKOnOpenVRLaunchOption";//char *const
export const k_pch_SteamVR_BlockOculusSDKOnAllLaunches_Bool: string = "blockOculusSDKOnAllLaunches";//char *const
export const k_pch_SteamVR_HDCPLegacyCompatibility_Bool: string = "hdcp14legacyCompatibility";//char *const
export const k_pch_SteamVR_DisplayPortTrainingMode_Int: string = "displayPortTrainingMode";//char *const
export const k_pch_SteamVR_UsePrism_Bool: string = "usePrism";//char *const
export const k_pch_SteamVR_AllowFallbackMirrorWindowLinux_Bool: string = "allowFallbackMirrorWindowLinux";//char *const
export const k_pch_OpenXR_Section: string = "openxr";//char *const
export const k_pch_OpenXR_MetaUnityPluginCompatibility_Int32: string = "metaUnityPluginCompatibility";//char *const
export const k_pch_DirectMode_Section: string = "direct_mode";//char *const
export const k_pch_DirectMode_Enable_Bool: string = "enable";//char *const
export const k_pch_DirectMode_Count_Int32: string = "count";//char *const
export const k_pch_DirectMode_EdidVid_Int32: string = "edidVid";//char *const
export const k_pch_DirectMode_EdidPid_Int32: string = "edidPid";//char *const
export const k_pch_Lighthouse_Section: string = "driver_lighthouse";//char *const
export const k_pch_Lighthouse_DisableIMU_Bool: string = "disableimu";//char *const
export const k_pch_Lighthouse_DisableIMUExceptHMD_Bool: string = "disableimuexcepthmd";//char *const
export const k_pch_Lighthouse_UseDisambiguation_String: string = "usedisambiguation";//char *const
export const k_pch_Lighthouse_DisambiguationDebug_Int32: string = "disambiguationdebug";//char *const
export const k_pch_Lighthouse_PrimaryBasestation_Int32: string = "primarybasestation";//char *const
export const k_pch_Lighthouse_DBHistory_Bool: string = "dbhistory";//char *const
export const k_pch_Lighthouse_EnableBluetooth_Bool: string = "enableBluetooth";//char *const
export const k_pch_Lighthouse_PowerManagedBaseStations_String: string = "PowerManagedBaseStations";//char *const
export const k_pch_Lighthouse_PowerManagedBaseStations2_String: string = "PowerManagedBaseStations2";//char *const
export const k_pch_Lighthouse_InactivityTimeoutForBaseStations_Int32: string = "InactivityTimeoutForBaseStations";//char *const
export const k_pch_Lighthouse_EnableImuFallback_Bool: string = "enableImuFallback";//char *const
export const k_pch_Null_Section: string = "driver_null";//char *const
export const k_pch_Null_SerialNumber_String: string = "serialNumber";//char *const
export const k_pch_Null_ModelNumber_String: string = "modelNumber";//char *const
export const k_pch_Null_WindowX_Int32: string = "windowX";//char *const
export const k_pch_Null_WindowY_Int32: string = "windowY";//char *const
export const k_pch_Null_WindowWidth_Int32: string = "windowWidth";//char *const
export const k_pch_Null_WindowHeight_Int32: string = "windowHeight";//char *const
export const k_pch_Null_RenderWidth_Int32: string = "renderWidth";//char *const
export const k_pch_Null_RenderHeight_Int32: string = "renderHeight";//char *const
export const k_pch_Null_SecondsFromVsyncToPhotons_Float: string = "secondsFromVsyncToPhotons";//char *const
export const k_pch_Null_DisplayFrequency_Float: string = "displayFrequency";//char *const
export const k_pch_WindowsMR_Section: string = "driver_holographic";//char *const
export const k_pch_UserInterface_Section: string = "userinterface";//char *const
export const k_pch_UserInterface_StatusAlwaysOnTop_Bool: string = "StatusAlwaysOnTop";//char *const
export const k_pch_UserInterface_MinimizeToTray_Bool: string = "MinimizeToTray";//char *const
export const k_pch_UserInterface_HidePopupsWhenStatusMinimized_Bool: string = "HidePopupsWhenStatusMinimized";//char *const
export const k_pch_UserInterface_Screenshots_Bool: string = "screenshots";//char *const
export const k_pch_UserInterface_ScreenshotType_Int: string = "screenshotType";//char *const
export const k_pch_Notifications_Section: string = "notifications";//char *const
export const k_pch_Notifications_DoNotDisturb_Bool: string = "DoNotDisturb";//char *const
export const k_pch_Keyboard_Section: string = "keyboard";//char *const
export const k_pch_Keyboard_TutorialCompletions: string = "TutorialCompletions";//char *const
export const k_pch_Keyboard_ScaleX: string = "ScaleX";//char *const
export const k_pch_Keyboard_ScaleY: string = "ScaleY";//char *const
export const k_pch_Keyboard_OffsetLeftX: string = "OffsetLeftX";//char *const
export const k_pch_Keyboard_OffsetRightX: string = "OffsetRightX";//char *const
export const k_pch_Keyboard_OffsetY: string = "OffsetY";//char *const
export const k_pch_Keyboard_Smoothing: string = "Smoothing";//char *const
export const k_pch_Perf_Section: string = "perfcheck";//char *const
export const k_pch_Perf_PerfGraphInHMD_Bool: string = "perfGraphInHMD";//char *const
export const k_pch_Perf_AllowTimingStore_Bool: string = "allowTimingStore";//char *const
export const k_pch_Perf_SaveTimingsOnExit_Bool: string = "saveTimingsOnExit";//char *const
export const k_pch_Perf_TestData_Float: string = "perfTestData";//char *const
export const k_pch_Perf_GPUProfiling_Bool: string = "GPUProfiling";//char *const
export const k_pch_Perf_GpuBusMonitoring_Bool: string = "gpuBusMonitoring";//char *const
export const k_pch_CollisionBounds_Section: string = "collisionBounds";//char *const
export const k_pch_CollisionBounds_Style_Int32: string = "CollisionBoundsStyle";//char *const
export const k_pch_CollisionBounds_GroundPerimeterOn_Bool: string = "CollisionBoundsGroundPerimeterOn";//char *const
export const k_pch_CollisionBounds_CenterMarkerOn_Bool: string = "CollisionBoundsCenterMarkerOn";//char *const
export const k_pch_CollisionBounds_PlaySpaceOn_Bool: string = "CollisionBoundsPlaySpaceOn";//char *const
export const k_pch_CollisionBounds_FadeDistance_Float: string = "CollisionBoundsFadeDistance";//char *const
export const k_pch_CollisionBounds_WallHeight_Float: string = "CollisionBoundsWallHeight";//char *const
export const k_pch_CollisionBounds_ColorGammaR_Int32: string = "CollisionBoundsColorGammaR";//char *const
export const k_pch_CollisionBounds_ColorGammaG_Int32: string = "CollisionBoundsColorGammaG";//char *const
export const k_pch_CollisionBounds_ColorGammaB_Int32: string = "CollisionBoundsColorGammaB";//char *const
export const k_pch_CollisionBounds_ColorGammaA_Int32: string = "CollisionBoundsColorGammaA";//char *const
export const k_pch_CollisionBounds_EnableDriverImport: string = "enableDriverBoundsImport";//char *const
export const k_pch_Camera_Section: string = "camera";//char *const
export const k_pch_Camera_EnableCamera_Bool: string = "enableCamera";//char *const
export const k_pch_Camera_ShowOnController_Bool: string = "showOnController";//char *const
export const k_pch_Camera_EnableCameraForCollisionBounds_Bool: string = "enableCameraForCollisionBounds";//char *const
export const k_pch_Camera_RoomView_Int32: string = "roomView";//char *const
export const k_pch_Camera_BoundsColorGammaR_Int32: string = "cameraBoundsColorGammaR";//char *const
export const k_pch_Camera_BoundsColorGammaG_Int32: string = "cameraBoundsColorGammaG";//char *const
export const k_pch_Camera_BoundsColorGammaB_Int32: string = "cameraBoundsColorGammaB";//char *const
export const k_pch_Camera_BoundsColorGammaA_Int32: string = "cameraBoundsColorGammaA";//char *const
export const k_pch_Camera_BoundsStrength_Int32: string = "cameraBoundsStrength";//char *const
export const k_pch_Camera_RoomViewStyle_Int32: string = "roomViewStyle";//char *const
export const k_pch_audio_Section: string = "audio";//char *const
export const k_pch_audio_SetOsDefaultPlaybackDevice_Bool: string = "setOsDefaultPlaybackDevice";//char *const
export const k_pch_audio_EnablePlaybackDeviceOverride_Bool: string = "enablePlaybackDeviceOverride";//char *const
export const k_pch_audio_PlaybackDeviceOverride_String: string = "playbackDeviceOverride";//char *const
export const k_pch_audio_PlaybackDeviceOverrideName_String: string = "playbackDeviceOverrideName";//char *const
export const k_pch_audio_SetOsDefaultRecordingDevice_Bool: string = "setOsDefaultRecordingDevice";//char *const
export const k_pch_audio_EnableRecordingDeviceOverride_Bool: string = "enableRecordingDeviceOverride";//char *const
export const k_pch_audio_RecordingDeviceOverride_String: string = "recordingDeviceOverride";//char *const
export const k_pch_audio_RecordingDeviceOverrideName_String: string = "recordingDeviceOverrideName";//char *const
export const k_pch_audio_EnablePlaybackMirror_Bool: string = "enablePlaybackMirror";//char *const
export const k_pch_audio_PlaybackMirrorDevice_String: string = "playbackMirrorDevice";//char *const
export const k_pch_audio_PlaybackMirrorDeviceName_String: string = "playbackMirrorDeviceName";//char *const
export const k_pch_audio_OldPlaybackMirrorDevice_String: string = "onPlaybackMirrorDevice";//char *const
export const k_pch_audio_ActiveMirrorDevice_String: string = "activePlaybackMirrorDevice";//char *const
export const k_pch_audio_EnablePlaybackMirrorIndependentVolume_Bool: string = "enablePlaybackMirrorIndependentVolume";//char *const
export const k_pch_audio_LastHmdPlaybackDeviceId_String: string = "lastHmdPlaybackDeviceId";//char *const
export const k_pch_audio_VIVEHDMIGain: string = "viveHDMIGain";//char *const
export const k_pch_audio_DualSpeakerAndJackOutput_Bool: string = "dualSpeakerAndJackOutput";//char *const
export const k_pch_audio_MuteMicMonitor_Bool: string = "muteMicMonitor";//char *const
export const k_pch_Power_Section: string = "power";//char *const
export const k_pch_Power_PowerOffOnExit_Bool: string = "powerOffOnExit";//char *const
export const k_pch_Power_TurnOffScreensTimeout_Float: string = "turnOffScreensTimeout";//char *const
export const k_pch_Power_TurnOffControllersTimeout_Float: string = "turnOffControllersTimeout";//char *const
export const k_pch_Power_ReturnToWatchdogTimeout_Float: string = "returnToWatchdogTimeout";//char *const
export const k_pch_Power_AutoLaunchSteamVROnButtonPress: string = "autoLaunchSteamVROnButtonPress";//char *const
export const k_pch_Power_PauseCompositorOnStandby_Bool: string = "pauseCompositorOnStandby";//char *const
export const k_pch_Dashboard_Section: string = "dashboard";//char *const
export const k_pch_Dashboard_EnableDashboard_Bool: string = "enableDashboard";//char *const
export const k_pch_Dashboard_ArcadeMode_Bool: string = "arcadeMode";//char *const
export const k_pch_Dashboard_Position: string = "position";//char *const
export const k_pch_Dashboard_DesktopScale: string = "desktopScale";//char *const
export const k_pch_Dashboard_DashboardScale: string = "dashboardScale";//char *const
export const k_pch_Dashboard_UseStandaloneSystemLayer: string = "standaloneSystemLayer";//char *const
export const k_pch_Dashboard_StickyDashboard: string = "stickyDashboard";//char *const
export const k_pch_Dashboard_AllowSteamOverlays_Bool: string = "allowSteamOverlays";//char *const
export const k_pch_Dashboard_AllowVRGamepadUI_Bool: string = "allowVRGamepadUI";//char *const
export const k_pch_Dashboard_AllowVRGamepadUIViaGamescope_Bool: string = "allowVRGamepadUIViaGamescope";//char *const
export const k_pch_Dashboard_SteamMatchesHMDFramerate: string = "steamMatchesHMDFramerate";//char *const
export const k_pch_modelskin_Section: string = "modelskins";//char *const
export const k_pch_Driver_Enable_Bool: string = "enable";//char *const
export const k_pch_Driver_BlockedBySafemode_Bool: string = "blocked_by_safe_mode";//char *const
export const k_pch_Driver_LoadPriority_Int32: string = "loadPriority";//char *const
export const k_pch_WebInterface_Section: string = "WebInterface";//char *const
export const k_pch_VRWebHelper_Section: string = "VRWebHelper";//char *const
export const k_pch_VRWebHelper_DebuggerEnabled_Bool: string = "DebuggerEnabled";//char *const
export const k_pch_VRWebHelper_DebuggerPort_Int32: string = "DebuggerPort";//char *const
export const k_pch_TrackingOverride_Section: string = "TrackingOverrides";//char *const
export const k_pch_App_BindingAutosaveURLSuffix_String: string = "AutosaveURL";//char *const
export const k_pch_App_BindingLegacyAPISuffix_String: string = "_legacy";//char *const
export const k_pch_App_BindingSteamVRInputAPISuffix_String: string = "_steamvrinput";//char *const
export const k_pch_App_BindingOpenXRAPISuffix_String: string = "_openxr";//char *const
export const k_pch_App_BindingCurrentURLSuffix_String: string = "CurrentURL";//char *const
export const k_pch_App_BindingPreviousURLSuffix_String: string = "PreviousURL";//char *const
export const k_pch_App_NeedToUpdateAutosaveSuffix_Bool: string = "NeedToUpdateAutosave";//char *const
export const k_pch_App_DominantHand_Int32: string = "DominantHand";//char *const
export const k_pch_App_BlockOculusSDK_Bool: string = "blockOculusSDK";//char *const
export const k_pch_Trackers_Section: string = "trackers";//char *const
export const k_pch_DesktopUI_Section: string = "DesktopUI";//char *const
export const k_pch_LastKnown_Section: string = "LastKnown";//char *const
export const k_pch_LastKnown_HMDManufacturer_String: string = "HMDManufacturer";//char *const
export const k_pch_LastKnown_HMDModel_String: string = "HMDModel";//char *const
export const k_pch_LastKnown_ActualHMDDriver_String: string = "ActualHMDDriver";//char *const
export const k_pch_DismissedWarnings_Section: string = "DismissedWarnings";//char *const
export const k_pch_Input_Section: string = "input";//char *const
export const k_pch_Input_LeftThumbstickRotation_Float: string = "leftThumbstickRotation";//char *const
export const k_pch_Input_RightThumbstickRotation_Float: string = "rightThumbstickRotation";//char *const
export const k_pch_Input_ThumbstickDeadzone_Float: string = "thumbstickDeadzone";//char *const
export const k_pch_GpuSpeed_Section: string = "GpuSpeed";//char *const
export const IVRScreenshots_Version: string = "FnTable:IVRScreenshots_001";//char *const
export const IVRResources_Version: string = "FnTable:IVRResources_001";//char *const
export const IVRDriverManager_Version: string = "FnTable:IVRDriverManager_001";//char *const
export const k_unMaxActionNameLength: number = 64;//uint32_t
export const k_unMaxActionSetNameLength: number = 64;//uint32_t
export const k_unMaxActionOriginCount: number = 16;//uint32_t
export const k_unMaxBoneNameLength: number = 32;//uint32_t
export const k_nActionSetOverlayGlobalPriorityMin: number = 16777216;//int32_t
export const k_nActionSetOverlayGlobalPriorityMax: number = 33554431;//int32_t
export const k_nActionSetPriorityReservedMin: number = 33554432;//int32_t
export const IVRInput_Version: string = "FnTable:IVRInput_010";//char *const
export const k_ulInvalidIOBufferHandle: bigint = 0n;//uint64_t
export const IVRIOBuffer_Version: string = "FnTable:IVRIOBuffer_002";//char *const
export const k_ulInvalidSpatialAnchorHandle: SpatialAnchorHandle = 0;//uint32_t
export const IVRSpatialAnchors_Version: string = "FnTable:IVRSpatialAnchors_001";//char *const
export const IVRDebug_Version: string = "FnTable:IVRDebug_001";//char *const
export const k_ulDisplayRedirectContainer: PropertyContainerHandle = 25769803779n;//uint64_t
export const IVRProperties_Version: string = "FnTable:IVRProperties_001";//char *const
export const k_pchPathUserHandRight: string = "/user/hand/right";//char *
export const k_pchPathUserHandLeft: string = "/user/hand/left";//char *
export const k_pchPathUserHandPrimary: string = "/user/hand/primary";//char *
export const k_pchPathUserHandSecondary: string = "/user/hand/secondary";//char *
export const k_pchPathUserHead: string = "/user/head";//char *
export const k_pchPathUserGamepad: string = "/user/gamepad";//char *
export const k_pchPathUserTreadmill: string = "/user/treadmill";//char *
export const k_pchPathUserStylus: string = "/user/stylus";//char *
export const k_pchPathDevices: string = "/devices";//char *
export const k_pchPathDevicePath: string = "/device_path";//char *
export const k_pchPathBestAliasPath: string = "/best_alias_path";//char *
export const k_pchPathBoundTrackerAliasPath: string = "/bound_tracker_path";//char *
export const k_pchPathBoundTrackerRole: string = "/bound_tracker_role";//char *
export const k_pchPathPoseRaw: string = "/pose/raw";//char *
export const k_pchPathPoseTip: string = "/pose/tip";//char *
export const k_pchPathPoseGrip: string = "/pose/grip";//char *
export const k_pchPathSystemButtonClick: string = "/input/system/click";//char *
export const k_pchPathProximity: string = "/proximity";//char *
export const k_pchPathControllerTypePrefix: string = "/controller_type/";//char *
export const k_pchPathInputProfileSuffix: string = "/input_profile";//char *
export const k_pchPathBindingNameSuffix: string = "/binding_name";//char *
export const k_pchPathBindingUrlSuffix: string = "/binding_url";//char *
export const k_pchPathBindingErrorSuffix: string = "/binding_error";//char *
export const k_pchPathActiveActionSets: string = "/active_action_sets";//char *
export const k_pchPathComponentUpdates: string = "/total_component_updates";//char *
export const k_pchPathUserFootLeft: string = "/user/foot/left";//char *
export const k_pchPathUserFootRight: string = "/user/foot/right";//char *
export const k_pchPathUserShoulderLeft: string = "/user/shoulder/left";//char *
export const k_pchPathUserShoulderRight: string = "/user/shoulder/right";//char *
export const k_pchPathUserElbowLeft: string = "/user/elbow/left";//char *
export const k_pchPathUserElbowRight: string = "/user/elbow/right";//char *
export const k_pchPathUserKneeLeft: string = "/user/knee/left";//char *
export const k_pchPathUserKneeRight: string = "/user/knee/right";//char *
export const k_pchPathUserWristLeft: string = "/user/wrist/left";//char *
export const k_pchPathUserWristRight: string = "/user/wrist/right";//char *
export const k_pchPathUserAnkleLeft: string = "/user/ankle/left";//char *
export const k_pchPathUserAnkleRight: string = "/user/ankle/right";//char *
export const k_pchPathUserWaist: string = "/user/waist";//char *
export const k_pchPathUserChest: string = "/user/chest";//char *
export const k_pchPathUserCamera: string = "/user/camera";//char *
export const k_pchPathUserKeyboard: string = "/user/keyboard";//char *
export const k_pchPathClientAppKey: string = "/client_info/app_key";//char *
export const k_ulInvalidPathHandle: PathHandle = 0n;//uint64_t
export const IVRPaths_Version: string = "FnTable:IVRPaths_001";//char *const
export const IVRBlockQueue_Version: string = "FnTable:IVRBlockQueue_005";//char *
//#endregion
// Enums

//#region Enums
export enum Eye {
  Eye_Left = 0,
  Eye_Right = 1,
}

export enum TextureType {
  TextureType_Invalid = -1,
  TextureType_DirectX = 0,
  TextureType_OpenGL = 1,
  TextureType_Vulkan = 2,
  TextureType_IOSurface = 3,
  TextureType_DirectX12 = 4,
  TextureType_DXGISharedHandle = 5,
  TextureType_Metal = 6,
  TextureType_Reserved = 7,
}

export enum ColorSpace {
  ColorSpace_Auto = 0,
  ColorSpace_Gamma = 1,
  ColorSpace_Linear = 2,
}

export enum TrackingResult {
  TrackingResult_Uninitialized = 1,
  TrackingResult_Calibrating_InProgress = 100,
  TrackingResult_Calibrating_OutOfRange = 101,
  TrackingResult_Running_OK = 200,
  TrackingResult_Running_OutOfRange = 201,
  TrackingResult_Fallback_RotationOnly = 300,
}

export enum TrackedDeviceClass {
  TrackedDeviceClass_Invalid = 0,
  TrackedDeviceClass_HMD = 1,
  TrackedDeviceClass_Controller = 2,
  TrackedDeviceClass_GenericTracker = 3,
  TrackedDeviceClass_TrackingReference = 4,
  TrackedDeviceClass_DisplayRedirect = 5,
  TrackedDeviceClass_Max = 6,
}

export enum TrackedControllerRole {
  TrackedControllerRole_Invalid = 0,
  TrackedControllerRole_LeftHand = 1,
  TrackedControllerRole_RightHand = 2,
  TrackedControllerRole_OptOut = 3,
  TrackedControllerRole_Treadmill = 4,
  TrackedControllerRole_Stylus = 5,
  TrackedControllerRole_Max = 5,
}

export enum TrackingUniverseOrigin {
  TrackingUniverseSeated = 0,
  TrackingUniverseStanding = 1,
  TrackingUniverseRawAndUncalibrated = 2,
}

export enum AdditionalRadioFeatures {
  AdditionalRadioFeatures_None = 0,
  AdditionalRadioFeatures_HTCLinkBox = 1,
  AdditionalRadioFeatures_InternalDongle = 2,
  AdditionalRadioFeatures_ExternalDongle = 4,
}

export enum TrackedDeviceProperty {
  Prop_Invalid = 0,
  Prop_TrackingSystemName_String = 1000,
  Prop_ModelNumber_String = 1001,
  Prop_SerialNumber_String = 1002,
  Prop_RenderModelName_String = 1003,
  Prop_WillDriftInYaw_Bool = 1004,
  Prop_ManufacturerName_String = 1005,
  Prop_TrackingFirmwareVersion_String = 1006,
  Prop_HardwareRevision_String = 1007,
  Prop_AllWirelessDongleDescriptions_String = 1008,
  Prop_ConnectedWirelessDongle_String = 1009,
  Prop_DeviceIsWireless_Bool = 1010,
  Prop_DeviceIsCharging_Bool = 1011,
  Prop_DeviceBatteryPercentage_Float = 1012,
  Prop_StatusDisplayTransform_Matrix34 = 1013,
  Prop_Firmware_UpdateAvailable_Bool = 1014,
  Prop_Firmware_ManualUpdate_Bool = 1015,
  Prop_Firmware_ManualUpdateURL_String = 1016,
  Prop_HardwareRevision_Uint64 = 1017,
  Prop_FirmwareVersion_Uint64 = 1018,
  Prop_FPGAVersion_Uint64 = 1019,
  Prop_VRCVersion_Uint64 = 1020,
  Prop_RadioVersion_Uint64 = 1021,
  Prop_DongleVersion_Uint64 = 1022,
  Prop_BlockServerShutdown_Bool = 1023,
  Prop_CanUnifyCoordinateSystemWithHmd_Bool = 1024,
  Prop_ContainsProximitySensor_Bool = 1025,
  Prop_DeviceProvidesBatteryStatus_Bool = 1026,
  Prop_DeviceCanPowerOff_Bool = 1027,
  Prop_Firmware_ProgrammingTarget_String = 1028,
  Prop_DeviceClass_Int32 = 1029,
  Prop_HasCamera_Bool = 1030,
  Prop_DriverVersion_String = 1031,
  Prop_Firmware_ForceUpdateRequired_Bool = 1032,
  Prop_ViveSystemButtonFixRequired_Bool = 1033,
  Prop_ParentDriver_Uint64 = 1034,
  Prop_ResourceRoot_String = 1035,
  Prop_RegisteredDeviceType_String = 1036,
  Prop_InputProfilePath_String = 1037,
  Prop_NeverTracked_Bool = 1038,
  Prop_NumCameras_Int32 = 1039,
  Prop_CameraFrameLayout_Int32 = 1040,
  Prop_CameraStreamFormat_Int32 = 1041,
  Prop_AdditionalDeviceSettingsPath_String = 1042,
  Prop_Identifiable_Bool = 1043,
  Prop_BootloaderVersion_Uint64 = 1044,
  Prop_AdditionalSystemReportData_String = 1045,
  Prop_CompositeFirmwareVersion_String = 1046,
  Prop_Firmware_RemindUpdate_Bool = 1047,
  Prop_PeripheralApplicationVersion_Uint64 = 1048,
  Prop_ManufacturerSerialNumber_String = 1049,
  Prop_ComputedSerialNumber_String = 1050,
  Prop_EstimatedDeviceFirstUseTime_Int32 = 1051,
  Prop_DevicePowerUsage_Float = 1052,
  Prop_IgnoreMotionForStandby_Bool = 1053,
  Prop_ActualTrackingSystemName_String = 1054,
  Prop_ReportsTimeSinceVSync_Bool = 2000,
  Prop_SecondsFromVsyncToPhotons_Float = 2001,
  Prop_DisplayFrequency_Float = 2002,
  Prop_UserIpdMeters_Float = 2003,
  Prop_CurrentUniverseId_Uint64 = 2004,
  Prop_PreviousUniverseId_Uint64 = 2005,
  Prop_DisplayFirmwareVersion_Uint64 = 2006,
  Prop_IsOnDesktop_Bool = 2007,
  Prop_DisplayMCType_Int32 = 2008,
  Prop_DisplayMCOffset_Float = 2009,
  Prop_DisplayMCScale_Float = 2010,
  Prop_EdidVendorID_Int32 = 2011,
  Prop_DisplayMCImageLeft_String = 2012,
  Prop_DisplayMCImageRight_String = 2013,
  Prop_DisplayGCBlackClamp_Float = 2014,
  Prop_EdidProductID_Int32 = 2015,
  Prop_CameraToHeadTransform_Matrix34 = 2016,
  Prop_DisplayGCType_Int32 = 2017,
  Prop_DisplayGCOffset_Float = 2018,
  Prop_DisplayGCScale_Float = 2019,
  Prop_DisplayGCPrescale_Float = 2020,
  Prop_DisplayGCImage_String = 2021,
  Prop_LensCenterLeftU_Float = 2022,
  Prop_LensCenterLeftV_Float = 2023,
  Prop_LensCenterRightU_Float = 2024,
  Prop_LensCenterRightV_Float = 2025,
  Prop_UserHeadToEyeDepthMeters_Float = 2026,
  Prop_CameraFirmwareVersion_Uint64 = 2027,
  Prop_CameraFirmwareDescription_String = 2028,
  Prop_DisplayFPGAVersion_Uint64 = 2029,
  Prop_DisplayBootloaderVersion_Uint64 = 2030,
  Prop_DisplayHardwareVersion_Uint64 = 2031,
  Prop_AudioFirmwareVersion_Uint64 = 2032,
  Prop_CameraCompatibilityMode_Int32 = 2033,
  Prop_ScreenshotHorizontalFieldOfViewDegrees_Float = 2034,
  Prop_ScreenshotVerticalFieldOfViewDegrees_Float = 2035,
  Prop_DisplaySuppressed_Bool = 2036,
  Prop_DisplayAllowNightMode_Bool = 2037,
  Prop_DisplayMCImageWidth_Int32 = 2038,
  Prop_DisplayMCImageHeight_Int32 = 2039,
  Prop_DisplayMCImageNumChannels_Int32 = 2040,
  Prop_DisplayMCImageData_Binary = 2041,
  Prop_SecondsFromPhotonsToVblank_Float = 2042,
  Prop_DriverDirectModeSendsVsyncEvents_Bool = 2043,
  Prop_DisplayDebugMode_Bool = 2044,
  Prop_GraphicsAdapterLuid_Uint64 = 2045,
  Prop_DriverProvidedChaperonePath_String = 2048,
  Prop_ExpectedTrackingReferenceCount_Int32 = 2049,
  Prop_ExpectedControllerCount_Int32 = 2050,
  Prop_NamedIconPathControllerLeftDeviceOff_String = 2051,
  Prop_NamedIconPathControllerRightDeviceOff_String = 2052,
  Prop_NamedIconPathTrackingReferenceDeviceOff_String = 2053,
  Prop_DoNotApplyPrediction_Bool = 2054,
  Prop_CameraToHeadTransforms_Matrix34_Array = 2055,
  Prop_DistortionMeshResolution_Int32 = 2056,
  Prop_DriverIsDrawingControllers_Bool = 2057,
  Prop_DriverRequestsApplicationPause_Bool = 2058,
  Prop_DriverRequestsReducedRendering_Bool = 2059,
  Prop_MinimumIpdStepMeters_Float = 2060,
  Prop_AudioBridgeFirmwareVersion_Uint64 = 2061,
  Prop_ImageBridgeFirmwareVersion_Uint64 = 2062,
  Prop_ImuToHeadTransform_Matrix34 = 2063,
  Prop_ImuFactoryGyroBias_Vector3 = 2064,
  Prop_ImuFactoryGyroScale_Vector3 = 2065,
  Prop_ImuFactoryAccelerometerBias_Vector3 = 2066,
  Prop_ImuFactoryAccelerometerScale_Vector3 = 2067,
  Prop_ConfigurationIncludesLighthouse20Features_Bool = 2069,
  Prop_AdditionalRadioFeatures_Uint64 = 2070,
  Prop_CameraWhiteBalance_Vector4_Array = 2071,
  Prop_CameraDistortionFunction_Int32_Array = 2072,
  Prop_CameraDistortionCoefficients_Float_Array = 2073,
  Prop_ExpectedControllerType_String = 2074,
  Prop_HmdTrackingStyle_Int32 = 2075,
  Prop_DriverProvidedChaperoneVisibility_Bool = 2076,
  Prop_HmdColumnCorrectionSettingPrefix_String = 2077,
  Prop_CameraSupportsCompatibilityModes_Bool = 2078,
  Prop_SupportsRoomViewDepthProjection_Bool = 2079,
  Prop_DisplayAvailableFrameRates_Float_Array = 2080,
  Prop_DisplaySupportsMultipleFramerates_Bool = 2081,
  Prop_DisplayColorMultLeft_Vector3 = 2082,
  Prop_DisplayColorMultRight_Vector3 = 2083,
  Prop_DisplaySupportsRuntimeFramerateChange_Bool = 2084,
  Prop_DisplaySupportsAnalogGain_Bool = 2085,
  Prop_DisplayMinAnalogGain_Float = 2086,
  Prop_DisplayMaxAnalogGain_Float = 2087,
  Prop_CameraExposureTime_Float = 2088,
  Prop_CameraGlobalGain_Float = 2089,
  Prop_DashboardScale_Float = 2091,
  Prop_PeerButtonInfo_String = 2092,
  Prop_Hmd_SupportsHDR10_Bool = 2093,
  Prop_Hmd_EnableParallelRenderCameras_Bool = 2094,
  Prop_DriverProvidedChaperoneJson_String = 2095,
  Prop_ForceSystemLayerUseAppPoses_Bool = 2096,
  Prop_IpdUIRangeMinMeters_Float = 2100,
  Prop_IpdUIRangeMaxMeters_Float = 2101,
  Prop_Hmd_SupportsHDCP14LegacyCompat_Bool = 2102,
  Prop_Hmd_SupportsMicMonitoring_Bool = 2103,
  Prop_Hmd_SupportsDisplayPortTrainingMode_Bool = 2104,
  Prop_Hmd_SupportsRoomViewDirect_Bool = 2105,
  Prop_Hmd_SupportsAppThrottling_Bool = 2106,
  Prop_Hmd_SupportsGpuBusMonitoring_Bool = 2107,
  Prop_DriverDisplaysIPDChanges_Bool = 2108,
  Prop_Driver_Reserved_01 = 2109,
  Prop_DSCVersion_Int32 = 2110,
  Prop_DSCSliceCount_Int32 = 2111,
  Prop_DSCBPPx16_Int32 = 2112,
  Prop_Hmd_MaxDistortedTextureWidth_Int32 = 2113,
  Prop_Hmd_MaxDistortedTextureHeight_Int32 = 2114,
  Prop_Hmd_AllowSupersampleFiltering_Bool = 2115,
  Prop_DriverRequestedMuraCorrectionMode_Int32 = 2200,
  Prop_DriverRequestedMuraFeather_InnerLeft_Int32 = 2201,
  Prop_DriverRequestedMuraFeather_InnerRight_Int32 = 2202,
  Prop_DriverRequestedMuraFeather_InnerTop_Int32 = 2203,
  Prop_DriverRequestedMuraFeather_InnerBottom_Int32 = 2204,
  Prop_DriverRequestedMuraFeather_OuterLeft_Int32 = 2205,
  Prop_DriverRequestedMuraFeather_OuterRight_Int32 = 2206,
  Prop_DriverRequestedMuraFeather_OuterTop_Int32 = 2207,
  Prop_DriverRequestedMuraFeather_OuterBottom_Int32 = 2208,
  Prop_Audio_DefaultPlaybackDeviceId_String = 2300,
  Prop_Audio_DefaultRecordingDeviceId_String = 2301,
  Prop_Audio_DefaultPlaybackDeviceVolume_Float = 2302,
  Prop_Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303,
  Prop_Audio_DriverManagesPlaybackVolumeControl_Bool = 2304,
  Prop_Audio_DriverPlaybackVolume_Float = 2305,
  Prop_Audio_DriverPlaybackMute_Bool = 2306,
  Prop_Audio_DriverManagesRecordingVolumeControl_Bool = 2307,
  Prop_Audio_DriverRecordingVolume_Float = 2308,
  Prop_Audio_DriverRecordingMute_Bool = 2309,
  Prop_AttachedDeviceId_String = 3000,
  Prop_SupportedButtons_Uint64 = 3001,
  Prop_Axis0Type_Int32 = 3002,
  Prop_Axis1Type_Int32 = 3003,
  Prop_Axis2Type_Int32 = 3004,
  Prop_Axis3Type_Int32 = 3005,
  Prop_Axis4Type_Int32 = 3006,
  Prop_ControllerRoleHint_Int32 = 3007,
  Prop_FieldOfViewLeftDegrees_Float = 4000,
  Prop_FieldOfViewRightDegrees_Float = 4001,
  Prop_FieldOfViewTopDegrees_Float = 4002,
  Prop_FieldOfViewBottomDegrees_Float = 4003,
  Prop_TrackingRangeMinimumMeters_Float = 4004,
  Prop_TrackingRangeMaximumMeters_Float = 4005,
  Prop_ModeLabel_String = 4006,
  Prop_CanWirelessIdentify_Bool = 4007,
  Prop_Nonce_Int32 = 4008,
  Prop_IconPathName_String = 5000,
  Prop_NamedIconPathDeviceOff_String = 5001,
  Prop_NamedIconPathDeviceSearching_String = 5002,
  Prop_NamedIconPathDeviceSearchingAlert_String = 5003,
  Prop_NamedIconPathDeviceReady_String = 5004,
  Prop_NamedIconPathDeviceReadyAlert_String = 5005,
  Prop_NamedIconPathDeviceNotReady_String = 5006,
  Prop_NamedIconPathDeviceStandby_String = 5007,
  Prop_NamedIconPathDeviceAlertLow_String = 5008,
  Prop_NamedIconPathDeviceStandbyAlert_String = 5009,
  Prop_DisplayHiddenArea_Binary_Start = 5100,
  Prop_DisplayHiddenArea_Binary_End = 5150,
  Prop_ParentContainer = 5151,
  Prop_OverrideContainer_Uint64 = 5152,
  Prop_UserConfigPath_String = 6000,
  Prop_InstallPath_String = 6001,
  Prop_HasDisplayComponent_Bool = 6002,
  Prop_HasControllerComponent_Bool = 6003,
  Prop_HasCameraComponent_Bool = 6004,
  Prop_HasDriverDirectModeComponent_Bool = 6005,
  Prop_HasVirtualDisplayComponent_Bool = 6006,
  Prop_HasSpatialAnchorsSupport_Bool = 6007,
  Prop_SupportsXrTextureSets_Bool = 6008,
  Prop_ControllerType_String = 7000,
  Prop_ControllerHandSelectionPriority_Int32 = 7002,
  Prop_VendorSpecific_Reserved_Start = 10000,
  Prop_VendorSpecific_Reserved_End = 10999,
  Prop_TrackedDeviceProperty_Max = 1000000,
}

export enum TrackedPropertyError {
  TrackedProp_Success = 0,
  TrackedProp_WrongDataType = 1,
  TrackedProp_WrongDeviceClass = 2,
  TrackedProp_BufferTooSmall = 3,
  TrackedProp_UnknownProperty = 4,
  TrackedProp_InvalidDevice = 5,
  TrackedProp_CouldNotContactServer = 6,
  TrackedProp_ValueNotProvidedByDevice = 7,
  TrackedProp_StringExceedsMaximumLength = 8,
  TrackedProp_NotYetAvailable = 9,
  TrackedProp_PermissionDenied = 10,
  TrackedProp_InvalidOperation = 11,
  TrackedProp_CannotWriteToWildcards = 12,
  TrackedProp_IPCReadFailure = 13,
  TrackedProp_OutOfMemory = 14,
  TrackedProp_InvalidContainer = 15,
}

export enum HmdTrackingStyle {
  HmdTrackingStyle_Unknown = 0,
  HmdTrackingStyle_Lighthouse = 1,
  HmdTrackingStyle_OutsideInCameras = 2,
  HmdTrackingStyle_InsideOutCameras = 3,
}

export enum SubmitFlags {
  Submit_Default = 0,
  Submit_LensDistortionAlreadyApplied = 1,
  Submit_GlRenderBuffer = 2,
  Submit_Reserved = 4,
  Submit_TextureWithPose = 8,
  Submit_TextureWithDepth = 16,
  Submit_FrameDiscontinuty = 32,
  Submit_VulkanTextureWithArrayData = 64,
  Submit_GlArrayTexture = 128,
  Submit_IsEgl = 256,
  Submit_Reserved2 = 32768,
  Submit_Reserved3 = 65536,
}

export enum State {
  VRState_Undefined = -1,
  VRState_Off = 0,
  VRState_Searching = 1,
  VRState_Searching_Alert = 2,
  VRState_Ready = 3,
  VRState_Ready_Alert = 4,
  VRState_NotReady = 5,
  VRState_Standby = 6,
  VRState_Ready_Alert_Low = 7,
}

export enum EventType {
  VREvent_None = 0,
  VREvent_TrackedDeviceActivated = 100,
  VREvent_TrackedDeviceDeactivated = 101,
  VREvent_TrackedDeviceUpdated = 102,
  VREvent_TrackedDeviceUserInteractionStarted = 103,
  VREvent_TrackedDeviceUserInteractionEnded = 104,
  VREvent_IpdChanged = 105,
  VREvent_EnterStandbyMode = 106,
  VREvent_LeaveStandbyMode = 107,
  VREvent_TrackedDeviceRoleChanged = 108,
  VREvent_WatchdogWakeUpRequested = 109,
  VREvent_LensDistortionChanged = 110,
  VREvent_PropertyChanged = 111,
  VREvent_WirelessDisconnect = 112,
  VREvent_WirelessReconnect = 113,
  VREvent_Reserved_01 = 114,
  VREvent_Reserved_02 = 115,
  VREvent_ButtonPress = 200,
  VREvent_ButtonUnpress = 201,
  VREvent_ButtonTouch = 202,
  VREvent_ButtonUntouch = 203,
  VREvent_Modal_Cancel = 257,
  VREvent_MouseMove = 300,
  VREvent_MouseButtonDown = 301,
  VREvent_MouseButtonUp = 302,
  VREvent_FocusEnter = 303,
  VREvent_FocusLeave = 304,
  VREvent_ScrollDiscrete = 305,
  VREvent_TouchPadMove = 306,
  VREvent_OverlayFocusChanged = 307,
  VREvent_ReloadOverlays = 308,
  VREvent_ScrollSmooth = 309,
  VREvent_LockMousePosition = 310,
  VREvent_UnlockMousePosition = 311,
  VREvent_InputFocusCaptured = 400,
  VREvent_InputFocusReleased = 401,
  VREvent_SceneApplicationChanged = 404,
  VREvent_InputFocusChanged = 406,
  VREvent_SceneApplicationUsingWrongGraphicsAdapter = 408,
  VREvent_ActionBindingReloaded = 409,
  VREvent_HideRenderModels = 410,
  VREvent_ShowRenderModels = 411,
  VREvent_SceneApplicationStateChanged = 412,
  VREvent_SceneAppPipeDisconnected = 413,
  VREvent_ConsoleOpened = 420,
  VREvent_ConsoleClosed = 421,
  VREvent_OverlayShown = 500,
  VREvent_OverlayHidden = 501,
  VREvent_DashboardActivated = 502,
  VREvent_DashboardDeactivated = 503,
  VREvent_DashboardRequested = 505,
  VREvent_ResetDashboard = 506,
  VREvent_ImageLoaded = 508,
  VREvent_ShowKeyboard = 509,
  VREvent_HideKeyboard = 510,
  VREvent_OverlayGamepadFocusGained = 511,
  VREvent_OverlayGamepadFocusLost = 512,
  VREvent_OverlaySharedTextureChanged = 513,
  VREvent_ScreenshotTriggered = 516,
  VREvent_ImageFailed = 517,
  VREvent_DashboardOverlayCreated = 518,
  VREvent_SwitchGamepadFocus = 519,
  VREvent_RequestScreenshot = 520,
  VREvent_ScreenshotTaken = 521,
  VREvent_ScreenshotFailed = 522,
  VREvent_SubmitScreenshotToDashboard = 523,
  VREvent_ScreenshotProgressToDashboard = 524,
  VREvent_PrimaryDashboardDeviceChanged = 525,
  VREvent_RoomViewShown = 526,
  VREvent_RoomViewHidden = 527,
  VREvent_ShowUI = 528,
  VREvent_ShowDevTools = 529,
  VREvent_DesktopViewUpdating = 530,
  VREvent_DesktopViewReady = 531,
  VREvent_StartDashboard = 532,
  VREvent_ElevatePrism = 533,
  VREvent_OverlayClosed = 534,
  VREvent_DashboardThumbChanged = 535,
  VREvent_DesktopMightBeVisible = 536,
  VREvent_DesktopMightBeHidden = 537,
  VREvent_MutualSteamCapabilitiesChanged = 538,
  VREvent_OverlayCreated = 539,
  VREvent_OverlayDestroyed = 540,
  VREvent_Notification_Shown = 600,
  VREvent_Notification_Hidden = 601,
  VREvent_Notification_BeginInteraction = 602,
  VREvent_Notification_Destroyed = 603,
  VREvent_Quit = 700,
  VREvent_ProcessQuit = 701,
  VREvent_QuitAcknowledged = 703,
  VREvent_DriverRequestedQuit = 704,
  VREvent_RestartRequested = 705,
  VREvent_InvalidateSwapTextureSets = 706,
  VREvent_ChaperoneDataHasChanged = 800,
  VREvent_ChaperoneUniverseHasChanged = 801,
  VREvent_ChaperoneTempDataHasChanged = 802,
  VREvent_ChaperoneSettingsHaveChanged = 803,
  VREvent_SeatedZeroPoseReset = 804,
  VREvent_ChaperoneFlushCache = 805,
  VREvent_ChaperoneRoomSetupStarting = 806,
  VREvent_ChaperoneRoomSetupFinished = 807,
  VREvent_StandingZeroPoseReset = 808,
  VREvent_AudioSettingsHaveChanged = 820,
  VREvent_BackgroundSettingHasChanged = 850,
  VREvent_CameraSettingsHaveChanged = 851,
  VREvent_ReprojectionSettingHasChanged = 852,
  VREvent_ModelSkinSettingsHaveChanged = 853,
  VREvent_EnvironmentSettingsHaveChanged = 854,
  VREvent_PowerSettingsHaveChanged = 855,
  VREvent_EnableHomeAppSettingsHaveChanged = 856,
  VREvent_SteamVRSectionSettingChanged = 857,
  VREvent_LighthouseSectionSettingChanged = 858,
  VREvent_NullSectionSettingChanged = 859,
  VREvent_UserInterfaceSectionSettingChanged = 860,
  VREvent_NotificationsSectionSettingChanged = 861,
  VREvent_KeyboardSectionSettingChanged = 862,
  VREvent_PerfSectionSettingChanged = 863,
  VREvent_DashboardSectionSettingChanged = 864,
  VREvent_WebInterfaceSectionSettingChanged = 865,
  VREvent_TrackersSectionSettingChanged = 866,
  VREvent_LastKnownSectionSettingChanged = 867,
  VREvent_DismissedWarningsSectionSettingChanged = 868,
  VREvent_GpuSpeedSectionSettingChanged = 869,
  VREvent_WindowsMRSectionSettingChanged = 870,
  VREvent_OtherSectionSettingChanged = 871,
  VREvent_AnyDriverSettingsChanged = 872,
  VREvent_StatusUpdate = 900,
  VREvent_WebInterface_InstallDriverCompleted = 950,
  VREvent_MCImageUpdated = 1000,
  VREvent_FirmwareUpdateStarted = 1100,
  VREvent_FirmwareUpdateFinished = 1101,
  VREvent_KeyboardClosed = 1200,
  VREvent_KeyboardCharInput = 1201,
  VREvent_KeyboardDone = 1202,
  VREvent_KeyboardOpened_Global = 1203,
  VREvent_KeyboardClosed_Global = 1204,
  VREvent_ApplicationListUpdated = 1303,
  VREvent_ApplicationMimeTypeLoad = 1304,
  VREvent_ProcessConnected = 1306,
  VREvent_ProcessDisconnected = 1307,
  VREvent_Compositor_ChaperoneBoundsShown = 1410,
  VREvent_Compositor_ChaperoneBoundsHidden = 1411,
  VREvent_Compositor_DisplayDisconnected = 1412,
  VREvent_Compositor_DisplayReconnected = 1413,
  VREvent_Compositor_HDCPError = 1414,
  VREvent_Compositor_ApplicationNotResponding = 1415,
  VREvent_Compositor_ApplicationResumed = 1416,
  VREvent_Compositor_OutOfVideoMemory = 1417,
  VREvent_Compositor_DisplayModeNotSupported = 1418,
  VREvent_Compositor_StageOverrideReady = 1419,
  VREvent_Compositor_RequestDisconnectReconnect = 1420,
  VREvent_TrackedCamera_StartVideoStream = 1500,
  VREvent_TrackedCamera_StopVideoStream = 1501,
  VREvent_TrackedCamera_PauseVideoStream = 1502,
  VREvent_TrackedCamera_ResumeVideoStream = 1503,
  VREvent_TrackedCamera_EditingSurface = 1550,
  VREvent_PerformanceTest_EnableCapture = 1600,
  VREvent_PerformanceTest_DisableCapture = 1601,
  VREvent_PerformanceTest_FidelityLevel = 1602,
  VREvent_MessageOverlay_Closed = 1650,
  VREvent_MessageOverlayCloseRequested = 1651,
  VREvent_Input_HapticVibration = 1700,
  VREvent_Input_BindingLoadFailed = 1701,
  VREvent_Input_BindingLoadSuccessful = 1702,
  VREvent_Input_ActionManifestReloaded = 1703,
  VREvent_Input_ActionManifestLoadFailed = 1704,
  VREvent_Input_ProgressUpdate = 1705,
  VREvent_Input_TrackerActivated = 1706,
  VREvent_Input_BindingsUpdated = 1707,
  VREvent_Input_BindingSubscriptionChanged = 1708,
  VREvent_SpatialAnchors_PoseUpdated = 1800,
  VREvent_SpatialAnchors_DescriptorUpdated = 1801,
  VREvent_SpatialAnchors_RequestPoseUpdate = 1802,
  VREvent_SpatialAnchors_RequestDescriptorUpdate = 1803,
  VREvent_SystemReport_Started = 1900,
  VREvent_Monitor_ShowHeadsetView = 2000,
  VREvent_Monitor_HideHeadsetView = 2001,
  VREvent_Audio_SetSpeakersVolume = 2100,
  VREvent_Audio_SetSpeakersMute = 2101,
  VREvent_Audio_SetMicrophoneVolume = 2102,
  VREvent_Audio_SetMicrophoneMute = 2103,
  VREvent_VendorSpecific_Reserved_Start = 10000,
  VREvent_VendorSpecific_Reserved_End = 19999,
}

export enum DeviceActivityLevel {
  k_EDeviceActivityLevel_Unknown = -1,
  k_EDeviceActivityLevel_Idle = 0,
  k_EDeviceActivityLevel_UserInteraction = 1,
  k_EDeviceActivityLevel_UserInteraction_Timeout = 2,
  k_EDeviceActivityLevel_Standby = 3,
  k_EDeviceActivityLevel_Idle_Timeout = 4,
}

export enum ButtonId {
  k_EButton_System = 0,
  k_EButton_ApplicationMenu = 1,
  k_EButton_Grip = 2,
  k_EButton_DPad_Left = 3,
  k_EButton_DPad_Up = 4,
  k_EButton_DPad_Right = 5,
  k_EButton_DPad_Down = 6,
  k_EButton_A = 7,
  k_EButton_ProximitySensor = 31,
  k_EButton_Axis0 = 32,
  k_EButton_Axis1 = 33,
  k_EButton_Axis2 = 34,
  k_EButton_Axis3 = 35,
  k_EButton_Axis4 = 36,
  k_EButton_SteamVR_Touchpad = 32,
  k_EButton_SteamVR_Trigger = 33,
  k_EButton_Dashboard_Back = 2,
  k_EButton_IndexController_A = 2,
  k_EButton_IndexController_B = 1,
  k_EButton_IndexController_JoyStick = 35,
  k_EButton_Reserved0 = 50,
  k_EButton_Reserved1 = 51,
  k_EButton_Max = 64,
}

export enum MouseButton {
  VRMouseButton_Left = 1,
  VRMouseButton_Right = 2,
  VRMouseButton_Middle = 4,
}

export enum ShowUIType {
  ShowUI_ControllerBinding = 0,
  ShowUI_ManageTrackers = 1,
  ShowUI_Pairing = 3,
  ShowUI_Settings = 4,
  ShowUI_DebugCommands = 5,
  ShowUI_FullControllerBinding = 6,
  ShowUI_ManageDrivers = 7,
}

export enum HDCPError {
  HDCPError_None = 0,
  HDCPError_LinkLost = 1,
  HDCPError_Tampered = 2,
  HDCPError_DeviceRevoked = 3,
  HDCPError_Unknown = 4,
}

export enum ComponentProperty {
  VRComponentProperty_IsStatic = 1,
  VRComponentProperty_IsVisible = 2,
  VRComponentProperty_IsTouched = 4,
  VRComponentProperty_IsPressed = 8,
  VRComponentProperty_IsScrolled = 16,
  VRComponentProperty_IsHighlighted = 32,
}

export enum InputError {
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

export enum SpatialAnchorError {
  VRSpatialAnchorError_Success = 0,
  VRSpatialAnchorError_Internal = 1,
  VRSpatialAnchorError_UnknownHandle = 2,
  VRSpatialAnchorError_ArrayTooSmall = 3,
  VRSpatialAnchorError_InvalidDescriptorChar = 4,
  VRSpatialAnchorError_NotYetAvailable = 5,
  VRSpatialAnchorError_NotAvailableInThisUniverse = 6,
  VRSpatialAnchorError_PermanentlyUnavailable = 7,
  VRSpatialAnchorError_WrongDriver = 8,
  VRSpatialAnchorError_DescriptorTooLong = 9,
  VRSpatialAnchorError_Unknown = 10,
  VRSpatialAnchorError_NoRoomCalibration = 11,
  VRSpatialAnchorError_InvalidArgument = 12,
  VRSpatialAnchorError_UnknownDriver = 13,
}

export enum HiddenAreaMeshType {
  k_eHiddenAreaMesh_Standard = 0,
  k_eHiddenAreaMesh_Inverse = 1,
  k_eHiddenAreaMesh_LineLoop = 2,
  k_eHiddenAreaMesh_Max = 3,
}

export enum ControllerAxisType {
  k_eControllerAxis_None = 0,
  k_eControllerAxis_TrackPad = 1,
  k_eControllerAxis_Joystick = 2,
  k_eControllerAxis_Trigger = 3,
}

export enum ControllerEventOutputType {
  ControllerEventOutput_OSEvents = 0,
  ControllerEventOutput_VREvents = 1,
}

export enum CollisionBoundsStyle {
  COLLISION_BOUNDS_STYLE_BEGINNER = 0,
  COLLISION_BOUNDS_STYLE_INTERMEDIATE = 1,
  COLLISION_BOUNDS_STYLE_SQUARES = 2,
  COLLISION_BOUNDS_STYLE_ADVANCED = 3,
  COLLISION_BOUNDS_STYLE_NONE = 4,
  COLLISION_BOUNDS_STYLE_COUNT = 5,
}

export enum OverlayError {
  VROverlayError_None = 0,
  VROverlayError_UnknownOverlay = 10,
  VROverlayError_InvalidHandle = 11,
  VROverlayError_PermissionDenied = 12,
  VROverlayError_OverlayLimitExceeded = 13,
  VROverlayError_WrongVisibilityType = 14,
  VROverlayError_KeyTooLong = 15,
  VROverlayError_NameTooLong = 16,
  VROverlayError_KeyInUse = 17,
  VROverlayError_WrongTransformType = 18,
  VROverlayError_InvalidTrackedDevice = 19,
  VROverlayError_InvalidParameter = 20,
  VROverlayError_ThumbnailCantBeDestroyed = 21,
  VROverlayError_ArrayTooSmall = 22,
  VROverlayError_RequestFailed = 23,
  VROverlayError_InvalidTexture = 24,
  VROverlayError_UnableToLoadFile = 25,
  VROverlayError_KeyboardAlreadyInUse = 26,
  VROverlayError_NoNeighbor = 27,
  VROverlayError_TooManyMaskPrimitives = 29,
  VROverlayError_BadMaskPrimitive = 30,
  VROverlayError_TextureAlreadyLocked = 31,
  VROverlayError_TextureLockCapacityReached = 32,
  VROverlayError_TextureNotLocked = 33,
  VROverlayError_TimedOut = 34,
}

export enum ApplicationType {
  VRApplication_Other = 0,
  VRApplication_Scene = 1,
  VRApplication_Overlay = 2,
  VRApplication_Background = 3,
  VRApplication_Utility = 4,
  VRApplication_VRMonitor = 5,
  VRApplication_SteamWatchdog = 6,
  VRApplication_Bootstrapper = 7,
  VRApplication_WebHelper = 8,
  VRApplication_OpenXRInstance = 9,
  VRApplication_OpenXRScene = 10,
  VRApplication_OpenXROverlay = 11,
  VRApplication_Prism = 12,
  VRApplication_RoomView = 13,
  VRApplication_Max = 14,
}

export enum FirmwareError {
  VRFirmwareError_None = 0,
  VRFirmwareError_Success = 1,
  VRFirmwareError_Fail = 2,
}

export enum NotificationError {
  VRNotificationError_OK = 0,
  VRNotificationError_InvalidNotificationId = 100,
  VRNotificationError_NotificationQueueFull = 101,
  VRNotificationError_InvalidOverlayHandle = 102,
  VRNotificationError_SystemWithUserValueAlreadyExists = 103,
  VRNotificationError_ServiceUnavailable = 104,
}

export enum SkeletalMotionRange {
  VRSkeletalMotionRange_WithController = 0,
  VRSkeletalMotionRange_WithoutController = 1,
}

export enum SkeletalTrackingLevel {
  VRSkeletalTracking_Estimated = 0,
  VRSkeletalTracking_Partial = 1,
  VRSkeletalTracking_Full = 2,
  VRSkeletalTrackingLevel_Count = 3,
  VRSkeletalTrackingLevel_Max = 2,
}

export enum InitError {
  VRInitError_None = 0,
  VRInitError_Unknown = 1,
  VRInitError_Init_InstallationNotFound = 100,
  VRInitError_Init_InstallationCorrupt = 101,
  VRInitError_Init_VRClientDLLNotFound = 102,
  VRInitError_Init_FileNotFound = 103,
  VRInitError_Init_FactoryNotFound = 104,
  VRInitError_Init_InterfaceNotFound = 105,
  VRInitError_Init_InvalidInterface = 106,
  VRInitError_Init_UserConfigDirectoryInvalid = 107,
  VRInitError_Init_HmdNotFound = 108,
  VRInitError_Init_NotInitialized = 109,
  VRInitError_Init_PathRegistryNotFound = 110,
  VRInitError_Init_NoConfigPath = 111,
  VRInitError_Init_NoLogPath = 112,
  VRInitError_Init_PathRegistryNotWritable = 113,
  VRInitError_Init_AppInfoInitFailed = 114,
  VRInitError_Init_Retry = 115,
  VRInitError_Init_InitCanceledByUser = 116,
  VRInitError_Init_AnotherAppLaunching = 117,
  VRInitError_Init_SettingsInitFailed = 118,
  VRInitError_Init_ShuttingDown = 119,
  VRInitError_Init_TooManyObjects = 120,
  VRInitError_Init_NoServerForBackgroundApp = 121,
  VRInitError_Init_NotSupportedWithCompositor = 122,
  VRInitError_Init_NotAvailableToUtilityApps = 123,
  VRInitError_Init_Internal = 124,
  VRInitError_Init_HmdDriverIdIsNone = 125,
  VRInitError_Init_HmdNotFoundPresenceFailed = 126,
  VRInitError_Init_VRMonitorNotFound = 127,
  VRInitError_Init_VRMonitorStartupFailed = 128,
  VRInitError_Init_LowPowerWatchdogNotSupported = 129,
  VRInitError_Init_InvalidApplicationType = 130,
  VRInitError_Init_NotAvailableToWatchdogApps = 131,
  VRInitError_Init_WatchdogDisabledInSettings = 132,
  VRInitError_Init_VRDashboardNotFound = 133,
  VRInitError_Init_VRDashboardStartupFailed = 134,
  VRInitError_Init_VRHomeNotFound = 135,
  VRInitError_Init_VRHomeStartupFailed = 136,
  VRInitError_Init_RebootingBusy = 137,
  VRInitError_Init_FirmwareUpdateBusy = 138,
  VRInitError_Init_FirmwareRecoveryBusy = 139,
  VRInitError_Init_USBServiceBusy = 140,
  VRInitError_Init_VRWebHelperStartupFailed = 141,
  VRInitError_Init_TrackerManagerInitFailed = 142,
  VRInitError_Init_AlreadyRunning = 143,
  VRInitError_Init_FailedForVrMonitor = 144,
  VRInitError_Init_PropertyManagerInitFailed = 145,
  VRInitError_Init_WebServerFailed = 146,
  VRInitError_Init_IllegalTypeTransition = 147,
  VRInitError_Init_MismatchedRuntimes = 148,
  VRInitError_Init_InvalidProcessId = 149,
  VRInitError_Init_VRServiceStartupFailed = 150,
  VRInitError_Init_PrismNeedsNewDrivers = 151,
  VRInitError_Init_PrismStartupTimedOut = 152,
  VRInitError_Init_CouldNotStartPrism = 153,
  VRInitError_Init_PrismClientInitFailed = 154,
  VRInitError_Init_PrismClientStartFailed = 155,
  VRInitError_Init_PrismExitedUnexpectedly = 156,
  VRInitError_Init_BadLuid = 157,
  VRInitError_Init_NoServerForAppContainer = 158,
  VRInitError_Init_DuplicateBootstrapper = 159,
  VRInitError_Init_VRDashboardServicePending = 160,
  VRInitError_Init_VRDashboardServiceTimeout = 161,
  VRInitError_Init_VRDashboardServiceStopped = 162,
  VRInitError_Init_VRDashboardAlreadyStarted = 163,
  VRInitError_Init_VRDashboardCopyFailed = 164,
  VRInitError_Init_VRDashboardTokenFailure = 165,
  VRInitError_Init_VRDashboardEnvironmentFailure = 166,
  VRInitError_Init_VRDashboardPathFailure = 167,
  VRInitError_Driver_Failed = 200,
  VRInitError_Driver_Unknown = 201,
  VRInitError_Driver_HmdUnknown = 202,
  VRInitError_Driver_NotLoaded = 203,
  VRInitError_Driver_RuntimeOutOfDate = 204,
  VRInitError_Driver_HmdInUse = 205,
  VRInitError_Driver_NotCalibrated = 206,
  VRInitError_Driver_CalibrationInvalid = 207,
  VRInitError_Driver_HmdDisplayNotFound = 208,
  VRInitError_Driver_TrackedDeviceInterfaceUnknown = 209,
  VRInitError_Driver_HmdDriverIdOutOfBounds = 211,
  VRInitError_Driver_HmdDisplayMirrored = 212,
  VRInitError_Driver_HmdDisplayNotFoundLaptop = 213,
  VRInitError_Driver_PeerDriverNotInstalled = 214,
  VRInitError_Driver_WirelessHmdNotConnected = 215,
  VRInitError_IPC_ServerInitFailed = 300,
  VRInitError_IPC_ConnectFailed = 301,
  VRInitError_IPC_SharedStateInitFailed = 302,
  VRInitError_IPC_CompositorInitFailed = 303,
  VRInitError_IPC_MutexInitFailed = 304,
  VRInitError_IPC_Failed = 305,
  VRInitError_IPC_CompositorConnectFailed = 306,
  VRInitError_IPC_CompositorInvalidConnectResponse = 307,
  VRInitError_IPC_ConnectFailedAfterMultipleAttempts = 308,
  VRInitError_IPC_ConnectFailedAfterTargetExited = 309,
  VRInitError_IPC_NamespaceUnavailable = 310,
  VRInitError_Compositor_Failed = 400,
  VRInitError_Compositor_D3D11HardwareRequired = 401,
  VRInitError_Compositor_FirmwareRequiresUpdate = 402,
  VRInitError_Compositor_OverlayInitFailed = 403,
  VRInitError_Compositor_ScreenshotsInitFailed = 404,
  VRInitError_Compositor_UnableToCreateDevice = 405,
  VRInitError_Compositor_SharedStateIsNull = 406,
  VRInitError_Compositor_NotificationManagerIsNull = 407,
  VRInitError_Compositor_ResourceManagerClientIsNull = 408,
  VRInitError_Compositor_MessageOverlaySharedStateInitFailure = 409,
  VRInitError_Compositor_PropertiesInterfaceIsNull = 410,
  VRInitError_Compositor_CreateFullscreenWindowFailed = 411,
  VRInitError_Compositor_SettingsInterfaceIsNull = 412,
  VRInitError_Compositor_FailedToShowWindow = 413,
  VRInitError_Compositor_DistortInterfaceIsNull = 414,
  VRInitError_Compositor_DisplayFrequencyFailure = 415,
  VRInitError_Compositor_RendererInitializationFailed = 416,
  VRInitError_Compositor_DXGIFactoryInterfaceIsNull = 417,
  VRInitError_Compositor_DXGIFactoryCreateFailed = 418,
  VRInitError_Compositor_DXGIFactoryQueryFailed = 419,
  VRInitError_Compositor_InvalidAdapterDesktop = 420,
  VRInitError_Compositor_InvalidHmdAttachment = 421,
  VRInitError_Compositor_InvalidOutputDesktop = 422,
  VRInitError_Compositor_InvalidDeviceProvided = 423,
  VRInitError_Compositor_D3D11RendererInitializationFailed = 424,
  VRInitError_Compositor_FailedToFindDisplayMode = 425,
  VRInitError_Compositor_FailedToCreateSwapChain = 426,
  VRInitError_Compositor_FailedToGetBackBuffer = 427,
  VRInitError_Compositor_FailedToCreateRenderTarget = 428,
  VRInitError_Compositor_FailedToCreateDXGI2SwapChain = 429,
  VRInitError_Compositor_FailedtoGetDXGI2BackBuffer = 430,
  VRInitError_Compositor_FailedToCreateDXGI2RenderTarget = 431,
  VRInitError_Compositor_FailedToGetDXGIDeviceInterface = 432,
  VRInitError_Compositor_SelectDisplayMode = 433,
  VRInitError_Compositor_FailedToCreateNvAPIRenderTargets = 434,
  VRInitError_Compositor_NvAPISetDisplayMode = 435,
  VRInitError_Compositor_FailedToCreateDirectModeDisplay = 436,
  VRInitError_Compositor_InvalidHmdPropertyContainer = 437,
  VRInitError_Compositor_UpdateDisplayFrequency = 438,
  VRInitError_Compositor_CreateRasterizerState = 439,
  VRInitError_Compositor_CreateWireframeRasterizerState = 440,
  VRInitError_Compositor_CreateSamplerState = 441,
  VRInitError_Compositor_CreateClampToBorderSamplerState = 442,
  VRInitError_Compositor_CreateAnisoSamplerState = 443,
  VRInitError_Compositor_CreateOverlaySamplerState = 444,
  VRInitError_Compositor_CreatePanoramaSamplerState = 445,
  VRInitError_Compositor_CreateFontSamplerState = 446,
  VRInitError_Compositor_CreateNoBlendState = 447,
  VRInitError_Compositor_CreateBlendState = 448,
  VRInitError_Compositor_CreateAlphaBlendState = 449,
  VRInitError_Compositor_CreateBlendStateMaskR = 450,
  VRInitError_Compositor_CreateBlendStateMaskG = 451,
  VRInitError_Compositor_CreateBlendStateMaskB = 452,
  VRInitError_Compositor_CreateDepthStencilState = 453,
  VRInitError_Compositor_CreateDepthStencilStateNoWrite = 454,
  VRInitError_Compositor_CreateDepthStencilStateNoDepth = 455,
  VRInitError_Compositor_CreateFlushTexture = 456,
  VRInitError_Compositor_CreateDistortionSurfaces = 457,
  VRInitError_Compositor_CreateConstantBuffer = 458,
  VRInitError_Compositor_CreateHmdPoseConstantBuffer = 459,
  VRInitError_Compositor_CreateHmdPoseStagingConstantBuffer = 460,
  VRInitError_Compositor_CreateSharedFrameInfoConstantBuffer = 461,
  VRInitError_Compositor_CreateOverlayConstantBuffer = 462,
  VRInitError_Compositor_CreateSceneTextureIndexConstantBuffer = 463,
  VRInitError_Compositor_CreateReadableSceneTextureIndexConstantBuffer = 464,
  VRInitError_Compositor_CreateLayerGraphicsTextureIndexConstantBuffer = 465,
  VRInitError_Compositor_CreateLayerComputeTextureIndexConstantBuffer = 466,
  VRInitError_Compositor_CreateLayerComputeSceneTextureIndexConstantBuffer = 467,
  VRInitError_Compositor_CreateComputeHmdPoseConstantBuffer = 468,
  VRInitError_Compositor_CreateGeomConstantBuffer = 469,
  VRInitError_Compositor_CreatePanelMaskConstantBuffer = 470,
  VRInitError_Compositor_CreatePixelSimUBO = 471,
  VRInitError_Compositor_CreateMSAARenderTextures = 472,
  VRInitError_Compositor_CreateResolveRenderTextures = 473,
  VRInitError_Compositor_CreateComputeResolveRenderTextures = 474,
  VRInitError_Compositor_CreateDriverDirectModeResolveTextures = 475,
  VRInitError_Compositor_OpenDriverDirectModeResolveTextures = 476,
  VRInitError_Compositor_CreateFallbackSyncTexture = 477,
  VRInitError_Compositor_ShareFallbackSyncTexture = 478,
  VRInitError_Compositor_CreateOverlayIndexBuffer = 479,
  VRInitError_Compositor_CreateOverlayVertexBuffer = 480,
  VRInitError_Compositor_CreateTextVertexBuffer = 481,
  VRInitError_Compositor_CreateTextIndexBuffer = 482,
  VRInitError_Compositor_CreateMirrorTextures = 483,
  VRInitError_Compositor_CreateLastFrameRenderTexture = 484,
  VRInitError_Compositor_CreateMirrorOverlay = 485,
  VRInitError_Compositor_FailedToCreateVirtualDisplayBackbuffer = 486,
  VRInitError_Compositor_DisplayModeNotSupported = 487,
  VRInitError_Compositor_CreateOverlayInvalidCall = 488,
  VRInitError_Compositor_CreateOverlayAlreadyInitialized = 489,
  VRInitError_Compositor_FailedToCreateMailbox = 490,
  VRInitError_Compositor_WindowInterfaceIsNull = 491,
  VRInitError_Compositor_SystemLayerCreateInstance = 492,
  VRInitError_Compositor_SystemLayerCreateSession = 493,
  VRInitError_Compositor_CreateInverseDistortUVs = 494,
  VRInitError_Compositor_CreateBackbufferDepth = 495,
  VRInitError_Compositor_CannotDRMLeaseDisplay = 496,
  VRInitError_Compositor_CannotConnectToDisplayServer = 497,
  VRInitError_Compositor_GnomeNoDRMLeasing = 498,
  VRInitError_Compositor_FailedToInitializeEncoder = 499,
  VRInitError_Compositor_CreateBlurTexture = 500,
  VRInitError_VendorSpecific_UnableToConnectToOculusRuntime = 1000,
  VRInitError_VendorSpecific_WindowsNotInDevMode = 1001,
  VRInitError_VendorSpecific_OculusLinkNotEnabled = 1002,
  VRInitError_VendorSpecific_HmdFound_CantOpenDevice = 1101,
  VRInitError_VendorSpecific_HmdFound_UnableToRequestConfigStart = 1102,
  VRInitError_VendorSpecific_HmdFound_NoStoredConfig = 1103,
  VRInitError_VendorSpecific_HmdFound_ConfigTooBig = 1104,
  VRInitError_VendorSpecific_HmdFound_ConfigTooSmall = 1105,
  VRInitError_VendorSpecific_HmdFound_UnableToInitZLib = 1106,
  VRInitError_VendorSpecific_HmdFound_CantReadFirmwareVersion = 1107,
  VRInitError_VendorSpecific_HmdFound_UnableToSendUserDataStart = 1108,
  VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataStart = 1109,
  VRInitError_VendorSpecific_HmdFound_UnableToGetUserDataNext = 1110,
  VRInitError_VendorSpecific_HmdFound_UserDataAddressRange = 1111,
  VRInitError_VendorSpecific_HmdFound_UserDataError = 1112,
  VRInitError_VendorSpecific_HmdFound_ConfigFailedSanityCheck = 1113,
  VRInitError_VendorSpecific_OculusRuntimeBadInstall = 1114,
  VRInitError_VendorSpecific_HmdFound_UnexpectedConfiguration_1 = 1115,
  VRInitError_Steam_SteamInstallationNotFound = 2000,
  VRInitError_LastError = 2001,
}

export enum ScreenshotType {
  VRScreenshotType_None = 0,
  VRScreenshotType_Mono = 1,
  VRScreenshotType_Stereo = 2,
  VRScreenshotType_Cubemap = 3,
  VRScreenshotType_MonoPanorama = 4,
  VRScreenshotType_StereoPanorama = 5,
}

export enum ScreenshotPropertyFilenames {
  VRScreenshotPropertyFilenames_Preview = 0,
  VRScreenshotPropertyFilenames_VR = 1,
}

export enum TrackedCameraError {
  VRTrackedCameraError_None = 0,
  VRTrackedCameraError_OperationFailed = 100,
  VRTrackedCameraError_InvalidHandle = 101,
  VRTrackedCameraError_InvalidFrameHeaderVersion = 102,
  VRTrackedCameraError_OutOfHandles = 103,
  VRTrackedCameraError_IPCFailure = 104,
  VRTrackedCameraError_NotSupportedForThisDevice = 105,
  VRTrackedCameraError_SharedMemoryFailure = 106,
  VRTrackedCameraError_FrameBufferingFailure = 107,
  VRTrackedCameraError_StreamSetupFailure = 108,
  VRTrackedCameraError_InvalidGLTextureId = 109,
  VRTrackedCameraError_InvalidSharedTextureHandle = 110,
  VRTrackedCameraError_FailedToGetGLTextureId = 111,
  VRTrackedCameraError_SharedTextureFailure = 112,
  VRTrackedCameraError_NoFrameAvailable = 113,
  VRTrackedCameraError_InvalidArgument = 114,
  VRTrackedCameraError_InvalidFrameBufferSize = 115,
}

export enum TrackedCameraFrameLayout {
  EVRTrackedCameraFrameLayout_Mono = 1,
  EVRTrackedCameraFrameLayout_Stereo = 2,
  EVRTrackedCameraFrameLayout_VerticalLayout = 16,
  EVRTrackedCameraFrameLayout_HorizontalLayout = 32,
}

export enum TrackedCameraFrameType {
  VRTrackedCameraFrameType_Distorted = 0,
  VRTrackedCameraFrameType_Undistorted = 1,
  VRTrackedCameraFrameType_MaximumUndistorted = 2,
  MAX_CAMERA_FRAME_TYPES = 3,
}

export enum DistortionFunctionType {
  VRDistortionFunctionType_None = 0,
  VRDistortionFunctionType_FTheta = 1,
  VRDistortionFunctionType_Extended_FTheta = 2,
  MAX_DISTORTION_FUNCTION_TYPES = 3,
}

export enum VSync {
  VSync_None = 0,
  VSync_WaitRender = 1,
  VSync_NoWaitRender = 2,
}

export enum MuraCorrectionMode {
  EVRMuraCorrectionMode_Default = 0,
  EVRMuraCorrectionMode_NoCorrection = 1,
}

export enum Imu_OffScaleFlags {
  OffScale_AccelX = 1,
  OffScale_AccelY = 2,
  OffScale_AccelZ = 4,
  OffScale_GyroX = 8,
  OffScale_GyroY = 16,
  OffScale_GyroZ = 32,
}

export enum ApplicationError {
  VRApplicationError_None = 0,
  VRApplicationError_AppKeyAlreadyExists = 100,
  VRApplicationError_NoManifest = 101,
  VRApplicationError_NoApplication = 102,
  VRApplicationError_InvalidIndex = 103,
  VRApplicationError_UnknownApplication = 104,
  VRApplicationError_IPCFailed = 105,
  VRApplicationError_ApplicationAlreadyRunning = 106,
  VRApplicationError_InvalidManifest = 107,
  VRApplicationError_InvalidApplication = 108,
  VRApplicationError_LaunchFailed = 109,
  VRApplicationError_ApplicationAlreadyStarting = 110,
  VRApplicationError_LaunchInProgress = 111,
  VRApplicationError_OldApplicationQuitting = 112,
  VRApplicationError_TransitionAborted = 113,
  VRApplicationError_IsTemplate = 114,
  VRApplicationError_SteamVRIsExiting = 115,
  VRApplicationError_BufferTooSmall = 200,
  VRApplicationError_PropertyNotSet = 201,
  VRApplicationError_UnknownProperty = 202,
  VRApplicationError_InvalidParameter = 203,
  VRApplicationError_NotImplemented = 300,
}

export enum ApplicationProperty {
  VRApplicationProperty_Name_String = 0,
  VRApplicationProperty_LaunchType_String = 11,
  VRApplicationProperty_WorkingDirectory_String = 12,
  VRApplicationProperty_BinaryPath_String = 13,
  VRApplicationProperty_Arguments_String = 14,
  VRApplicationProperty_URL_String = 15,
  VRApplicationProperty_Description_String = 50,
  VRApplicationProperty_NewsURL_String = 51,
  VRApplicationProperty_ImagePath_String = 52,
  VRApplicationProperty_Source_String = 53,
  VRApplicationProperty_ActionManifestURL_String = 54,
  VRApplicationProperty_IsDashboardOverlay_Bool = 60,
  VRApplicationProperty_IsTemplate_Bool = 61,
  VRApplicationProperty_IsInstanced_Bool = 62,
  VRApplicationProperty_IsInternal_Bool = 63,
  VRApplicationProperty_WantsCompositorPauseInStandby_Bool = 64,
  VRApplicationProperty_IsHidden_Bool = 65,
  VRApplicationProperty_LastLaunchTime_Uint64 = 70,
}

export enum SceneApplicationState {
  EVRSceneApplicationState_None = 0,
  EVRSceneApplicationState_Starting = 1,
  EVRSceneApplicationState_Quitting = 2,
  EVRSceneApplicationState_Running = 3,
  EVRSceneApplicationState_Waiting = 4,
}

export enum ChaperoneCalibrationState {
  ChaperoneCalibrationState_OK = 1,
  ChaperoneCalibrationState_Warning = 100,
  ChaperoneCalibrationState_Warning_BaseStationMayHaveMoved = 101,
  ChaperoneCalibrationState_Warning_BaseStationRemoved = 102,
  ChaperoneCalibrationState_Warning_SeatedBoundsInvalid = 103,
  ChaperoneCalibrationState_Error = 200,
  ChaperoneCalibrationState_Error_BaseStationUninitialized = 201,
  ChaperoneCalibrationState_Error_BaseStationConflict = 202,
  ChaperoneCalibrationState_Error_PlayAreaInvalid = 203,
  ChaperoneCalibrationState_Error_CollisionBoundsInvalid = 204,
}

export enum ChaperoneConfigFile {
  EChaperoneConfigFile_Live = 1,
  EChaperoneConfigFile_Temp = 2,
}

export enum ChaperoneImportFlags {
  EChaperoneImport_BoundsOnly = 1,
}

export enum CompositorError {
  VRCompositorError_None = 0,
  VRCompositorError_RequestFailed = 1,
  VRCompositorError_IncompatibleVersion = 100,
  VRCompositorError_DoNotHaveFocus = 101,
  VRCompositorError_InvalidTexture = 102,
  VRCompositorError_IsNotSceneApplication = 103,
  VRCompositorError_TextureIsOnWrongDevice = 104,
  VRCompositorError_TextureUsesUnsupportedFormat = 105,
  VRCompositorError_SharedTexturesNotSupported = 106,
  VRCompositorError_IndexOutOfRange = 107,
  VRCompositorError_AlreadySubmitted = 108,
  VRCompositorError_InvalidBounds = 109,
  VRCompositorError_AlreadySet = 110,
}

export enum CompositorTimingMode {
  VRCompositorTimingMode_Implicit = 0,
  VRCompositorTimingMode_Explicit_RuntimePerformsPostPresentHandoff = 1,
  VRCompositorTimingMode_Explicit_ApplicationPerformsPostPresentHandoff = 2,
}

export enum OverlayInputMethod {
  VROverlayInputMethod_None = 0,
  VROverlayInputMethod_Mouse = 1,
}

export enum OverlayTransformType {
  VROverlayTransform_Invalid = -1,
  VROverlayTransform_Absolute = 0,
  VROverlayTransform_TrackedDeviceRelative = 1,
  VROverlayTransform_TrackedComponent = 3,
  VROverlayTransform_Cursor = 4,
  VROverlayTransform_DashboardTab = 5,
  VROverlayTransform_DashboardThumb = 6,
  VROverlayTransform_Mountable = 7,
  VROverlayTransform_Projection = 8,
  VROverlayTransform_Subview = 9,
}

export enum OverlayFlags {
  VROverlayFlags_NoDashboardTab = 8,
  VROverlayFlags_SendVRDiscreteScrollEvents = 64,
  VROverlayFlags_SendVRTouchpadEvents = 128,
  VROverlayFlags_ShowTouchPadScrollWheel = 256,
  VROverlayFlags_TransferOwnershipToInternalProcess = 512,
  VROverlayFlags_SideBySide_Parallel = 1024,
  VROverlayFlags_SideBySide_Crossed = 2048,
  VROverlayFlags_Panorama = 4096,
  VROverlayFlags_StereoPanorama = 8192,
  VROverlayFlags_SortWithNonSceneOverlays = 16384,
  VROverlayFlags_VisibleInDashboard = 32768,
  VROverlayFlags_MakeOverlaysInteractiveIfVisible = 65536,
  VROverlayFlags_SendVRSmoothScrollEvents = 131072,
  VROverlayFlags_ProtectedContent = 262144,
  VROverlayFlags_HideLaserIntersection = 524288,
  VROverlayFlags_WantsModalBehavior = 1048576,
  VROverlayFlags_IsPremultiplied = 2097152,
  VROverlayFlags_IgnoreTextureAlpha = 4194304,
  VROverlayFlags_EnableControlBar = 8388608,
  VROverlayFlags_EnableControlBarKeyboard = 16777216,
  VROverlayFlags_EnableControlBarClose = 33554432,
  VROverlayFlags_Reserved = 67108864,
  VROverlayFlags_EnableClickStabilization = 134217728,
  VROverlayFlags_MultiCursor = 268435456,
}

export enum MessageOverlayResponse {
  VRMessageOverlayResponse_ButtonPress_0 = 0,
  VRMessageOverlayResponse_ButtonPress_1 = 1,
  VRMessageOverlayResponse_ButtonPress_2 = 2,
  VRMessageOverlayResponse_ButtonPress_3 = 3,
  VRMessageOverlayResponse_CouldntFindSystemOverlay = 4,
  VRMessageOverlayResponse_CouldntFindOrCreateClientOverlay = 5,
  VRMessageOverlayResponse_ApplicationQuit = 6,
}

export enum GamepadTextInputMode {
  k_EGamepadTextInputModeNormal = 0,
  k_EGamepadTextInputModePassword = 1,
  k_EGamepadTextInputModeSubmit = 2,
}

export enum GamepadTextInputLineMode {
  k_EGamepadTextInputLineModeSingleLine = 0,
  k_EGamepadTextInputLineModeMultipleLines = 1,
}

export enum OverlayIntersectionMaskPrimitiveType {
  OverlayIntersectionPrimitiveType_Rectangle = 0,
  OverlayIntersectionPrimitiveType_Circle = 1,
}

export enum KeyboardFlags {
  KeyboardFlag_Minimal = 1,
  KeyboardFlag_Modal = 2,
  KeyboardFlag_ShowArrowKeys = 4,
  KeyboardFlag_HideDoneKey = 8,
}

export enum DeviceType {
  DeviceType_Invalid = -1,
  DeviceType_DirectX11 = 0,
  DeviceType_Vulkan = 1,
}

export enum HeadsetViewMode {
  HeadsetViewMode_Left = 0,
  HeadsetViewMode_Right = 1,
  HeadsetViewMode_Both = 2,
}

export enum RenderModelError {
  VRRenderModelError_None = 0,
  VRRenderModelError_Loading = 100,
  VRRenderModelError_NotSupported = 200,
  VRRenderModelError_InvalidArg = 300,
  VRRenderModelError_InvalidModel = 301,
  VRRenderModelError_NoShapes = 302,
  VRRenderModelError_MultipleShapes = 303,
  VRRenderModelError_TooManyVertices = 304,
  VRRenderModelError_MultipleTextures = 305,
  VRRenderModelError_BufferTooSmall = 306,
  VRRenderModelError_NotEnoughNormals = 307,
  VRRenderModelError_NotEnoughTexCoords = 308,
  VRRenderModelError_InvalidTexture = 400,
}

export enum RenderModelTextureFormat {
  VRRenderModelTextureFormat_RGBA8_SRGB = 0,
  VRRenderModelTextureFormat_BC2 = 1,
  VRRenderModelTextureFormat_BC4 = 2,
  VRRenderModelTextureFormat_BC7 = 3,
  VRRenderModelTextureFormat_BC7_SRGB = 4,
  VRRenderModelTextureFormat_RGBA16_FLOAT = 5,
}

export enum NotificationType {
  EVRNotificationType_Transient = 0,
  EVRNotificationType_Persistent = 1,
  EVRNotificationType_Transient_SystemWithUserValue = 2,
}

export enum NotificationStyle {
  EVRNotificationStyle_None = 0,
  EVRNotificationStyle_Application = 100,
  EVRNotificationStyle_Contact_Disabled = 200,
  EVRNotificationStyle_Contact_Enabled = 201,
  EVRNotificationStyle_Contact_Active = 202,
}

export enum SettingsError {
  VRSettingsError_None = 0,
  VRSettingsError_IPCFailed = 1,
  VRSettingsError_WriteFailed = 2,
  VRSettingsError_ReadFailed = 3,
  VRSettingsError_JsonParseFailed = 4,
  VRSettingsError_UnsetSettingHasNoDefault = 5,
  VRSettingsError_AccessDenied = 6,
}

export enum ScreenshotError {
  VRScreenshotError_None = 0,
  VRScreenshotError_RequestFailed = 1,
  VRScreenshotError_IncompatibleVersion = 100,
  VRScreenshotError_NotFound = 101,
  VRScreenshotError_BufferTooSmall = 102,
  VRScreenshotError_ScreenshotAlreadyInProgress = 108,
}

export enum SkeletalTransformSpace {
  VRSkeletalTransformSpace_Model = 0,
  VRSkeletalTransformSpace_Parent = 1,
}

export enum SkeletalReferencePose {
  VRSkeletalReferencePose_BindPose = 0,
  VRSkeletalReferencePose_OpenHand = 1,
  VRSkeletalReferencePose_Fist = 2,
  VRSkeletalReferencePose_GripLimit = 3,
}

export enum Finger {
  VRFinger_Thumb = 0,
  VRFinger_Index = 1,
  VRFinger_Middle = 2,
  VRFinger_Ring = 3,
  VRFinger_Pinky = 4,
  VRFinger_Count = 5,
}

export enum FingerSplay {
  VRFingerSplay_Thumb_Index = 0,
  VRFingerSplay_Index_Middle = 1,
  VRFingerSplay_Middle_Ring = 2,
  VRFingerSplay_Ring_Pinky = 3,
  VRFingerSplay_Count = 4,
}

export enum SummaryType {
  VRSummaryType_FromAnimation = 0,
  VRSummaryType_FromDevice = 1,
}

export enum InputFilterCancelType {
  VRInputFilterCancel_Timers = 0,
  VRInputFilterCancel_Momentum = 1,
}

export enum InputStringBits {
  VRInputString_Hand = 1,
  VRInputString_ControllerType = 2,
  VRInputString_InputSource = 4,
  VRInputString_All = -1,
}

export enum IOBufferError {
  IOBuffer_Success = 0,
  IOBuffer_OperationFailed = 100,
  IOBuffer_InvalidHandle = 101,
  IOBuffer_InvalidArgument = 102,
  IOBuffer_PathExists = 103,
  IOBuffer_PathDoesNotExist = 104,
  IOBuffer_Permission = 105,
}

export enum IOBufferMode {
  IOBufferMode_Read = 1,
  IOBufferMode_Write = 2,
  IOBufferMode_Create = 512,
}

export enum DebugError {
  VRDebugError_Success = 0,
  VRDebugError_BadParameter = 1,
}

export enum PropertyWriteType {
  PropertyWrite_Set = 0,
  PropertyWrite_Erase = 1,
  PropertyWrite_SetError = 2,
}

export enum BlockQueueError {
  BlockQueueError_None = 0,
  BlockQueueError_QueueAlreadyExists = 1,
  BlockQueueError_QueueNotFound = 2,
  BlockQueueError_BlockNotAvailable = 3,
  BlockQueueError_InvalidHandle = 4,
  BlockQueueError_InvalidParam = 5,
  BlockQueueError_ParamMismatch = 6,
  BlockQueueError_InternalError = 7,
  BlockQueueError_AlreadyInitialized = 8,
  BlockQueueError_OperationIsServerOnly = 9,
  BlockQueueError_TooManyConnections = 10,
}

export enum BlockQueueReadType {
  BlockQueueRead_Latest = 0,
  BlockQueueRead_New = 1,
  BlockQueueRead_Next = 2,
}

export enum BlockQueueCreationFlag {
  BlockQueueFlag_OwnerIsReader = 1,
}

//#endregion
// Structs

//#region Structs
/*vr::HmdMatrix34_t, [
  {
    "fieldname": "m",
    "fieldtype": "float [3][4]"
  }
]*/
export interface HmdMatrix34 {
  m: [[number, number, number, number], [number, number, number, number], [number, number, number, number]];
}

/*vr::HmdMatrix33_t, [
  {
    "fieldname": "m",
    "fieldtype": "float [3][3]"
  }
]*/
export interface HmdMatrix33 {
  m: [[number, number, number], [number, number, number], [number, number, number]];
}

/*vr::HmdMatrix44_t, [
  {
    "fieldname": "m",
    "fieldtype": "float [4][4]"
  }
]*/
export interface HmdMatrix44 {
  m: [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];
}

/*vr::HmdVector3_t, [
  {
    "fieldname": "v",
    "fieldtype": "float [3]"
  }
]*/
export interface HmdVector3 {
  v: [number, number, number];
}

/*vr::HmdVector4_t, [
  {
    "fieldname": "v",
    "fieldtype": "float [4]"
  }
]*/
export interface HmdVector4 {
  v: [number, number, number, number];
}

/*vr::HmdVector3d_t, [
  {
    "fieldname": "v",
    "fieldtype": "double [3]"
  }
]*/
export interface HmdVector3d {
  v: [number, number, number];
}

/*vr::HmdVector2_t, [
  {
    "fieldname": "v",
    "fieldtype": "float [2]"
  }
]*/
export interface HmdVector2 {
  v: [number, number];
}

/*vr::HmdQuaternion_t, [
  {
    "fieldname": "w",
    "fieldtype": "double"
  },
  {
    "fieldname": "x",
    "fieldtype": "double"
  },
  {
    "fieldname": "y",
    "fieldtype": "double"
  },
  {
    "fieldname": "z",
    "fieldtype": "double"
  }
]*/
export interface HmdQuaternion {
  w: number;
  x: number;
  y: number;
  z: number;
}

/*vr::HmdQuaternionf_t, [
  {
    "fieldname": "w",
    "fieldtype": "float"
  },
  {
    "fieldname": "x",
    "fieldtype": "float"
  },
  {
    "fieldname": "y",
    "fieldtype": "float"
  },
  {
    "fieldname": "z",
    "fieldtype": "float"
  }
]*/
export interface HmdQuaternionf {
  w: number;
  x: number;
  y: number;
  z: number;
}

/*vr::HmdColor_t, [
  {
    "fieldname": "r",
    "fieldtype": "float"
  },
  {
    "fieldname": "g",
    "fieldtype": "float"
  },
  {
    "fieldname": "b",
    "fieldtype": "float"
  },
  {
    "fieldname": "a",
    "fieldtype": "float"
  }
]*/
export interface HmdColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

/*vr::HmdQuad_t, [
  {
    "fieldname": "vCorners",
    "fieldtype": "struct vr::HmdVector3_t [4]"
  }
]*/
export interface HmdQuad {
  vCorners: [HmdVector3, HmdVector3, HmdVector3, HmdVector3];
}

/*vr::HmdRect2_t, [
  {
    "fieldname": "vTopLeft",
    "fieldtype": "struct vr::HmdVector2_t"
  },
  {
    "fieldname": "vBottomRight",
    "fieldtype": "struct vr::HmdVector2_t"
  }
]*/
export interface HmdRect2 {
  vTopLeft: HmdVector2;
  vBottomRight: HmdVector2;
}

/*vr::VRBoneTransform_t, [
  {
    "fieldname": "position",
    "fieldtype": "struct vr::HmdVector4_t"
  },
  {
    "fieldname": "orientation",
    "fieldtype": "struct vr::HmdQuaternionf_t"
  }
]*/
export interface BoneTransform {
  position: HmdVector4;
  orientation: HmdQuaternionf;
}

/*vr::DistortionCoordinates_t, [
  {
    "fieldname": "rfRed",
    "fieldtype": "float [2]"
  },
  {
    "fieldname": "rfGreen",
    "fieldtype": "float [2]"
  },
  {
    "fieldname": "rfBlue",
    "fieldtype": "float [2]"
  }
]*/
export interface DistortionCoordinates {
  rfRed: [number, number];
  rfGreen: [number, number];
  rfBlue: [number, number];
}

/*vr::Texture_t, [
  {
    "fieldname": "handle",
    "fieldtype": "void *"
  },
  {
    "fieldname": "eType",
    "fieldtype": "enum vr::ETextureType"
  },
  {
    "fieldname": "eColorSpace",
    "fieldtype": "enum vr::EColorSpace"
  }
]*/
export interface Texture {
  handle: Deno.PointerValue<unknown>;
  eType: TextureType;
  eColorSpace: ColorSpace;
}

/*vr::VRTextureBounds_t, [
  {
    "fieldname": "uMin",
    "fieldtype": "float"
  },
  {
    "fieldname": "vMin",
    "fieldtype": "float"
  },
  {
    "fieldname": "uMax",
    "fieldtype": "float"
  },
  {
    "fieldname": "vMax",
    "fieldtype": "float"
  }
]*/
export interface TextureBounds {
  uMin: number;
  vMin: number;
  uMax: number;
  vMax: number;
}

/*vr::VRTextureWithPose_t, [
  {
    "fieldname": "mDeviceToAbsoluteTracking",
    "fieldtype": "struct vr::HmdMatrix34_t"
  }
]*/
export interface TextureWithPose {
  mDeviceToAbsoluteTracking: HmdMatrix34;
}

/*vr::VRTextureDepthInfo_t, [
  {
    "fieldname": "handle",
    "fieldtype": "void *"
  },
  {
    "fieldname": "mProjection",
    "fieldtype": "struct vr::HmdMatrix44_t"
  },
  {
    "fieldname": "vRange",
    "fieldtype": "struct vr::HmdVector2_t"
  }
]*/
export interface TextureDepthInfo {
  handle: Deno.PointerValue<unknown>;
  mProjection: HmdMatrix44;
  vRange: HmdVector2;
}

/*vr::VRTextureWithDepth_t, [
  {
    "fieldname": "depth",
    "fieldtype": "struct vr::VRTextureDepthInfo_t"
  }
]*/
export interface TextureWithDepth {
  depth: TextureDepthInfo;
}

/*vr::VRTextureWithPoseAndDepth_t, [
  {
    "fieldname": "depth",
    "fieldtype": "struct vr::VRTextureDepthInfo_t"
  }
]*/
export interface TextureWithPoseAndDepth {
  depth: TextureDepthInfo;
}

/*vr::TrackedDevicePose_t, [
  {
    "fieldname": "mDeviceToAbsoluteTracking",
    "fieldtype": "struct vr::HmdMatrix34_t"
  },
  {
    "fieldname": "vVelocity",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "vAngularVelocity",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "eTrackingResult",
    "fieldtype": "enum vr::ETrackingResult"
  },
  {
    "fieldname": "bPoseIsValid",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "bDeviceIsConnected",
    "fieldtype": "_Bool"
  }
]*/
export interface TrackedDevicePose {
  mDeviceToAbsoluteTracking: HmdMatrix34;
  vVelocity: HmdVector3;
  vAngularVelocity: HmdVector3;
  eTrackingResult: TrackingResult;
  bPoseIsValid: boolean;
  bDeviceIsConnected: boolean;
}

/*vr::VRVulkanTextureData_t, [
  {
    "fieldname": "m_nImage",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "m_pDevice",
    "fieldtype": "struct VkDevice_T *"
  },
  {
    "fieldname": "m_pPhysicalDevice",
    "fieldtype": "struct VkPhysicalDevice_T *"
  },
  {
    "fieldname": "m_pInstance",
    "fieldtype": "struct VkInstance_T *"
  },
  {
    "fieldname": "m_pQueue",
    "fieldtype": "struct VkQueue_T *"
  },
  {
    "fieldname": "m_nQueueFamilyIndex",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nWidth",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nHeight",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nFormat",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nSampleCount",
    "fieldtype": "uint32_t"
  }
]*/
export interface VulkanTextureData {
  nImage: bigint;
  pDevice: Deno.PointerValue<VkDevice_T>;
  pPhysicalDevice: Deno.PointerValue<VkPhysicalDevice_T>;
  pInstance: Deno.PointerValue<VkInstance_T>;
  pQueue: Deno.PointerValue<VkQueue_T>;
  nQueueFamilyIndex: number;
  nWidth: number;
  nHeight: number;
  nFormat: number;
  nSampleCount: number;
}

/*vr::VRVulkanTextureArrayData_t, [
  {
    "fieldname": "m_unArrayIndex",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_unArraySize",
    "fieldtype": "uint32_t"
  }
]*/
export interface VulkanTextureArrayData {
  unArrayIndex: number;
  unArraySize: number;
}

/*vr::D3D12TextureData_t, [
  {
    "fieldname": "m_pResource",
    "fieldtype": "struct ID3D12Resource *"
  },
  {
    "fieldname": "m_pCommandQueue",
    "fieldtype": "struct ID3D12CommandQueue *"
  },
  {
    "fieldname": "m_nNodeMask",
    "fieldtype": "uint32_t"
  }
]*/
export interface D3D12TextureData {
  pResource: Deno.PointerValue<ID3D12Resource>;
  pCommandQueue: Deno.PointerValue<ID3D12CommandQueue>;
  nNodeMask: number;
}

/*vr::VREvent_Controller_t, [
  {
    "fieldname": "button",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Controller {
  button: number;
}

/*vr::VREvent_Mouse_t, [
  {
    "fieldname": "x",
    "fieldtype": "float"
  },
  {
    "fieldname": "y",
    "fieldtype": "float"
  },
  {
    "fieldname": "button",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "cursorIndex",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Mouse {
  x: number;
  y: number;
  button: number;
  cursorIndex: number;
}

/*vr::VREvent_Scroll_t, [
  {
    "fieldname": "xdelta",
    "fieldtype": "float"
  },
  {
    "fieldname": "ydelta",
    "fieldtype": "float"
  },
  {
    "fieldname": "unused",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "viewportscale",
    "fieldtype": "float"
  },
  {
    "fieldname": "cursorIndex",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Scroll {
  xdelta: number;
  ydelta: number;
  unused: number;
  viewportscale: number;
  cursorIndex: number;
}

/*vr::VREvent_TouchPadMove_t, [
  {
    "fieldname": "bFingerDown",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "flSecondsFingerDown",
    "fieldtype": "float"
  },
  {
    "fieldname": "fValueXFirst",
    "fieldtype": "float"
  },
  {
    "fieldname": "fValueYFirst",
    "fieldtype": "float"
  },
  {
    "fieldname": "fValueXRaw",
    "fieldtype": "float"
  },
  {
    "fieldname": "fValueYRaw",
    "fieldtype": "float"
  }
]*/
export interface Event_TouchPadMove {
  bFingerDown: boolean;
  flSecondsFingerDown: number;
  fValueXFirst: number;
  fValueYFirst: number;
  fValueXRaw: number;
  fValueYRaw: number;
}

/*vr::VREvent_Notification_t, [
  {
    "fieldname": "ulUserValue",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "notificationId",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Notification {
  ulUserValue: bigint;
  notificationId: number;
}

/*vr::VREvent_Process_t, [
  {
    "fieldname": "pid",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "oldPid",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "bForced",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "bConnectionLost",
    "fieldtype": "_Bool"
  }
]*/
export interface Event_Process {
  pid: number;
  oldPid: number;
  bForced: boolean;
  bConnectionLost: boolean;
}

/*vr::VREvent_Overlay_t, [
  {
    "fieldname": "overlayHandle",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "devicePath",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "memoryBlockId",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "cursorIndex",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Overlay {
  overlayHandle: bigint;
  devicePath: bigint;
  memoryBlockId: bigint;
  cursorIndex: number;
}

/*vr::VREvent_Status_t, [
  {
    "fieldname": "statusState",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Status {
  statusState: number;
}

/*vr::VREvent_Keyboard_t, [
  {
    "fieldname": "cNewInput",
    "fieldtype": "char [8]"
  },
  {
    "fieldname": "uUserValue",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "overlayHandle",
    "fieldtype": "uint64_t"
  }
]*/
export interface Event_Keyboard {
  cNewInput: [number, number, number, number, number, number, number, number];
  uUserValue: bigint;
  overlayHandle: bigint;
}

/*vr::VREvent_Ipd_t, [
  {
    "fieldname": "ipdMeters",
    "fieldtype": "float"
  }
]*/
export interface Event_Ipd {
  ipdMeters: number;
}

/*vr::VREvent_Chaperone_t, [
  {
    "fieldname": "m_nPreviousUniverse",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "m_nCurrentUniverse",
    "fieldtype": "uint64_t"
  }
]*/
export interface Event_Chaperone {
  nPreviousUniverse: bigint;
  nCurrentUniverse: bigint;
}

/*vr::VREvent_Reserved_t, [
  {
    "fieldname": "reserved0",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "reserved1",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "reserved2",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "reserved3",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "reserved4",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "reserved5",
    "fieldtype": "uint64_t"
  }
]*/
export interface Event_Reserved {
  reserved0: bigint;
  reserved1: bigint;
  reserved2: bigint;
  reserved3: bigint;
  reserved4: bigint;
  reserved5: bigint;
}

/*vr::VREvent_PerformanceTest_t, [
  {
    "fieldname": "m_nFidelityLevel",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_PerformanceTest {
  nFidelityLevel: number;
}

/*vr::VREvent_SeatedZeroPoseReset_t, [
  {
    "fieldname": "bResetBySystemMenu",
    "fieldtype": "_Bool"
  }
]*/
export interface Event_SeatedZeroPoseReset {
  bResetBySystemMenu: boolean;
}

/*vr::VREvent_Screenshot_t, [
  {
    "fieldname": "handle",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "type",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_Screenshot {
  handle: number;
  type: number;
}

/*vr::VREvent_ScreenshotProgress_t, [
  {
    "fieldname": "progress",
    "fieldtype": "float"
  }
]*/
export interface Event_ScreenshotProgress {
  progress: number;
}

/*vr::VREvent_ApplicationLaunch_t, [
  {
    "fieldname": "pid",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "unArgsHandle",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_ApplicationLaunch {
  pid: number;
  unArgsHandle: number;
}

/*vr::VREvent_EditingCameraSurface_t, [
  {
    "fieldname": "overlayHandle",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "nVisualMode",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_EditingCameraSurface {
  overlayHandle: bigint;
  nVisualMode: number;
}

/*vr::VREvent_MessageOverlay_t, [
  {
    "fieldname": "unVRMessageOverlayResponse",
    "fieldtype": "uint32_t"
  }
]*/
export interface Event_MessageOverlay {
  unVRMessageOverlayResponse: number;
}

/*vr::VREvent_Property_t, [
  {
    "fieldname": "container",
    "fieldtype": "PropertyContainerHandle_t"
  },
  {
    "fieldname": "prop",
    "fieldtype": "enum vr::ETrackedDeviceProperty"
  }
]*/
export interface Event_Property {
  container: PropertyContainerHandle;
  prop: TrackedDeviceProperty;
}

/*vr::VREvent_HapticVibration_t, [
  {
    "fieldname": "containerHandle",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "componentHandle",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "fDurationSeconds",
    "fieldtype": "float"
  },
  {
    "fieldname": "fFrequency",
    "fieldtype": "float"
  },
  {
    "fieldname": "fAmplitude",
    "fieldtype": "float"
  }
]*/
export interface Event_HapticVibration {
  containerHandle: bigint;
  componentHandle: bigint;
  fDurationSeconds: number;
  fFrequency: number;
  fAmplitude: number;
}

/*vr::VREvent_WebConsole_t, [
  {
    "fieldname": "webConsoleHandle",
    "fieldtype": "WebConsoleHandle_t"
  }
]*/
export interface Event_WebConsole {
  webConsoleHandle: WebConsoleHandle;
}

/*vr::VREvent_InputBindingLoad_t, [
  {
    "fieldname": "ulAppContainer",
    "fieldtype": "vr::PropertyContainerHandle_t"
  },
  {
    "fieldname": "pathMessage",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathUrl",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathControllerType",
    "fieldtype": "uint64_t"
  }
]*/
export interface Event_InputBindingLoad {
  ulAppContainer: PropertyContainerHandle;
  pathMessage: bigint;
  pathUrl: bigint;
  pathControllerType: bigint;
}

/*vr::VREvent_InputActionManifestLoad_t, [
  {
    "fieldname": "pathAppKey",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathMessage",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathMessageParam",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathManifestPath",
    "fieldtype": "uint64_t"
  }
]*/
export interface Event_InputActionManifestLoad {
  pathAppKey: bigint;
  pathMessage: bigint;
  pathMessageParam: bigint;
  pathManifestPath: bigint;
}

/*vr::VREvent_SpatialAnchor_t, [
  {
    "fieldname": "unHandle",
    "fieldtype": "SpatialAnchorHandle_t"
  }
]*/
export interface Event_SpatialAnchor {
  unHandle: SpatialAnchorHandle;
}

/*vr::VREvent_ProgressUpdate_t, [
  {
    "fieldname": "ulApplicationPropertyContainer",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathDevice",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathInputSource",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathProgressAction",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "pathIcon",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "fProgress",
    "fieldtype": "float"
  }
]*/
export interface Event_ProgressUpdate {
  ulApplicationPropertyContainer: bigint;
  pathDevice: bigint;
  pathInputSource: bigint;
  pathProgressAction: bigint;
  pathIcon: bigint;
  fProgress: number;
}

/*vr::VREvent_ShowUI_t, [
  {
    "fieldname": "eType",
    "fieldtype": "enum vr::EShowUIType"
  }
]*/
export interface Event_ShowUI {
  eType: ShowUIType;
}

/*vr::VREvent_ShowDevTools_t, [
  {
    "fieldname": "nBrowserIdentifier",
    "fieldtype": "int32_t"
  }
]*/
export interface Event_ShowDevTools {
  nBrowserIdentifier: number;
}

/*vr::VREvent_HDCPError_t, [
  {
    "fieldname": "eCode",
    "fieldtype": "enum vr::EHDCPError"
  }
]*/
export interface Event_HDCPError {
  eCode: HDCPError;
}

/*vr::VREvent_AudioVolumeControl_t, [
  {
    "fieldname": "fVolumeLevel",
    "fieldtype": "float"
  }
]*/
export interface Event_AudioVolumeControl {
  fVolumeLevel: number;
}

/*vr::VREvent_AudioMuteControl_t, [
  {
    "fieldname": "bMute",
    "fieldtype": "_Bool"
  }
]*/
export interface Event_AudioMuteControl {
  bMute: boolean;
}

/*vr::(anonymous), [
  {
    "fieldname": "reserved",
    "fieldtype": "struct vr::VREvent_Reserved_t"
  },
  {
    "fieldname": "controller",
    "fieldtype": "struct vr::VREvent_Controller_t"
  },
  {
    "fieldname": "mouse",
    "fieldtype": "struct vr::VREvent_Mouse_t"
  },
  {
    "fieldname": "scroll",
    "fieldtype": "struct vr::VREvent_Scroll_t"
  },
  {
    "fieldname": "process",
    "fieldtype": "struct vr::VREvent_Process_t"
  },
  {
    "fieldname": "notification",
    "fieldtype": "struct vr::VREvent_Notification_t"
  },
  {
    "fieldname": "overlay",
    "fieldtype": "struct vr::VREvent_Overlay_t"
  },
  {
    "fieldname": "status",
    "fieldtype": "struct vr::VREvent_Status_t"
  },
  {
    "fieldname": "keyboard",
    "fieldtype": "struct vr::VREvent_Keyboard_t"
  },
  {
    "fieldname": "ipd",
    "fieldtype": "struct vr::VREvent_Ipd_t"
  },
  {
    "fieldname": "chaperone",
    "fieldtype": "struct vr::VREvent_Chaperone_t"
  },
  {
    "fieldname": "performanceTest",
    "fieldtype": "struct vr::VREvent_PerformanceTest_t"
  },
  {
    "fieldname": "touchPadMove",
    "fieldtype": "struct vr::VREvent_TouchPadMove_t"
  },
  {
    "fieldname": "seatedZeroPoseReset",
    "fieldtype": "struct vr::VREvent_SeatedZeroPoseReset_t"
  },
  {
    "fieldname": "screenshot",
    "fieldtype": "struct vr::VREvent_Screenshot_t"
  },
  {
    "fieldname": "screenshotProgress",
    "fieldtype": "struct vr::VREvent_ScreenshotProgress_t"
  },
  {
    "fieldname": "applicationLaunch",
    "fieldtype": "struct vr::VREvent_ApplicationLaunch_t"
  },
  {
    "fieldname": "cameraSurface",
    "fieldtype": "struct vr::VREvent_EditingCameraSurface_t"
  },
  {
    "fieldname": "messageOverlay",
    "fieldtype": "struct vr::VREvent_MessageOverlay_t"
  },
  {
    "fieldname": "property",
    "fieldtype": "struct vr::VREvent_Property_t"
  },
  {
    "fieldname": "hapticVibration",
    "fieldtype": "struct vr::VREvent_HapticVibration_t"
  },
  {
    "fieldname": "webConsole",
    "fieldtype": "struct vr::VREvent_WebConsole_t"
  },
  {
    "fieldname": "inputBinding",
    "fieldtype": "struct vr::VREvent_InputBindingLoad_t"
  },
  {
    "fieldname": "actionManifest",
    "fieldtype": "struct vr::VREvent_InputActionManifestLoad_t"
  },
  {
    "fieldname": "spatialAnchor",
    "fieldtype": "struct vr::VREvent_SpatialAnchor_t"
  },
  {
    "fieldname": "progressUpdate",
    "fieldtype": "struct vr::VREvent_ProgressUpdate_t"
  },
  {
    "fieldname": "showUi",
    "fieldtype": "struct vr::VREvent_ShowUI_t"
  },
  {
    "fieldname": "showDevTools",
    "fieldtype": "struct vr::VREvent_ShowDevTools_t"
  },
  {
    "fieldname": "hdcpError",
    "fieldtype": "struct vr::VREvent_HDCPError_t"
  },
  {
    "fieldname": "audioVolumeControl",
    "fieldtype": "struct vr::VREvent_AudioVolumeControl_t"
  },
  {
    "fieldname": "audioMuteControl",
    "fieldtype": "struct vr::VREvent_AudioMuteControl_t"
  }
]*/
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

/*vr::VREvent_t, [
  {
    "fieldname": "eventType",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "trackedDeviceIndex",
    "fieldtype": "TrackedDeviceIndex_t"
  },
  {
    "fieldname": "eventAgeSeconds",
    "fieldtype": "float"
  },
  {
    "fieldname": "data",
    "fieldtype": "VREvent_Data_t"
  }
]*/
export interface Event {
  eventType: number;
  trackedDeviceIndex: TrackedDeviceIndex;
  eventAgeSeconds: number;
  data: Event_Data;
}

/*vr::RenderModel_ComponentState_t, [
  {
    "fieldname": "mTrackingToComponentRenderModel",
    "fieldtype": "struct vr::HmdMatrix34_t"
  },
  {
    "fieldname": "mTrackingToComponentLocal",
    "fieldtype": "struct vr::HmdMatrix34_t"
  },
  {
    "fieldname": "uProperties",
    "fieldtype": "VRComponentProperties"
  }
]*/
export interface RenderModel_ComponentState {
  mTrackingToComponentRenderModel: HmdMatrix34;
  mTrackingToComponentLocal: HmdMatrix34;
  uProperties: ComponentProperties;
}

/*vr::HiddenAreaMesh_t, [
  {
    "fieldname": "pVertexData",
    "fieldtype": "const struct vr::HmdVector2_t *"
  },
  {
    "fieldname": "unTriangleCount",
    "fieldtype": "uint32_t"
  }
]*/
export interface HiddenAreaMesh {
  pVertexData: Deno.PointerValue<HmdVector2>//READONLY;
  unTriangleCount: number;
}

/*vr::VRControllerAxis_t, [
  {
    "fieldname": "x",
    "fieldtype": "float"
  },
  {
    "fieldname": "y",
    "fieldtype": "float"
  }
]*/
export interface ControllerAxis {
  x: number;
  y: number;
}

/*vr::VRControllerState001_t, [
  {
    "fieldname": "unPacketNum",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "ulButtonPressed",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "ulButtonTouched",
    "fieldtype": "uint64_t"
  },
  {
    "fieldname": "rAxis",
    "fieldtype": "struct vr::VRControllerAxis_t [5]"
  }
]*/
export interface ControllerState001 {
  unPacketNum: number;
  ulButtonPressed: bigint;
  ulButtonTouched: bigint;
  rAxis: [ControllerAxis, ControllerAxis, ControllerAxis, ControllerAxis, ControllerAxis];
}

/*vr::CameraVideoStreamFrameHeader_t, [
  {
    "fieldname": "eFrameType",
    "fieldtype": "enum vr::EVRTrackedCameraFrameType"
  },
  {
    "fieldname": "nWidth",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "nHeight",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "nBytesPerPixel",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "nFrameSequence",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "trackedDevicePose",
    "fieldtype": "struct vr::TrackedDevicePose_t"
  },
  {
    "fieldname": "ulFrameExposureTime",
    "fieldtype": "uint64_t"
  }
]*/
export interface CameraVideoStreamFrameHeader {
  eFrameType: TrackedCameraFrameType;
  nWidth: number;
  nHeight: number;
  nBytesPerPixel: number;
  nFrameSequence: number;
  trackedDevicePose: TrackedDevicePose;
  ulFrameExposureTime: bigint;
}

/*vr::Compositor_FrameTiming, [
  {
    "fieldname": "m_nSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nFrameIndex",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresents",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumMisPresented",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFrames",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nReprojectionFlags",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_flSystemTimeInSeconds",
    "fieldtype": "double"
  },
  {
    "fieldname": "m_flPreSubmitGpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flPostSubmitGpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flTotalRenderGpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorRenderGpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorRenderCpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorIdleCpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flClientFrameIntervalMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flPresentCallCpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flWaitForPresentCpuMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flSubmitFrameMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flWaitGetPosesCalledMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flNewPosesReadyMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flNewFrameReadyMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorUpdateStartMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorUpdateEndMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCompositorRenderStartMs",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_HmdPose",
    "fieldtype": "vr::TrackedDevicePose_t"
  },
  {
    "fieldname": "m_nNumVSyncsReadyForUse",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumVSyncsToFirstView",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_flTransferLatencyMs",
    "fieldtype": "float"
  }
]*/
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

/*vr::Compositor_BenchmarkResults, [
  {
    "fieldname": "m_flMegaPixelsPerSecond",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flHmdRecommendedMegaPixelsPerSecond",
    "fieldtype": "float"
  }
]*/
export interface Compositor_BenchmarkResults {
  flMegaPixelsPerSecond: number;
  flHmdRecommendedMegaPixelsPerSecond: number;
}

/*vr::DriverDirectMode_FrameTiming, [
  {
    "fieldname": "m_nSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresents",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumMisPresented",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFrames",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nReprojectionFlags",
    "fieldtype": "uint32_t"
  }
]*/
export interface DriverDirectMode_FrameTiming {
  nSize: number;
  nNumFramePresents: number;
  nNumMisPresented: number;
  nNumDroppedFrames: number;
  nReprojectionFlags: number;
}

/*vr::ImuSample_t, [
  {
    "fieldname": "fSampleTime",
    "fieldtype": "double"
  },
  {
    "fieldname": "vAccel",
    "fieldtype": "struct vr::HmdVector3d_t"
  },
  {
    "fieldname": "vGyro",
    "fieldtype": "struct vr::HmdVector3d_t"
  },
  {
    "fieldname": "unOffScaleFlags",
    "fieldtype": "uint32_t"
  }
]*/
export interface ImuSample {
  fSampleTime: number;
  vAccel: HmdVector3d;
  vGyro: HmdVector3d;
  unOffScaleFlags: number;
}

/*vr::AppOverrideKeys_t, [
  {
    "fieldname": "pchKey",
    "fieldtype": "const char *"
  },
  {
    "fieldname": "pchValue",
    "fieldtype": "const char *"
  }
]*/
export interface AppOverrideKeys {
  pchKey: string;
  pchValue: string;
}

/*vr::Compositor_CumulativeStats, [
  {
    "fieldname": "m_nPid",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresents",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFrames",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumReprojectedFrames",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresentsOnStartup",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFramesOnStartup",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumReprojectedFramesOnStartup",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumLoading",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresentsLoading",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFramesLoading",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumReprojectedFramesLoading",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumTimedOut",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFramePresentsTimedOut",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumDroppedFramesTimedOut",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumReprojectedFramesTimedOut",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_nNumFrameSubmits",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "m_flSumCompositorCPUTimeMS",
    "fieldtype": "vrshared_double"
  },
  {
    "fieldname": "m_flSumCompositorGPUTimeMS",
    "fieldtype": "vrshared_double"
  },
  {
    "fieldname": "m_flSumTargetFrameTimes",
    "fieldtype": "vrshared_double"
  },
  {
    "fieldname": "m_flSumApplicationCPUTimeMS",
    "fieldtype": "vrshared_double"
  },
  {
    "fieldname": "m_flSumApplicationGPUTimeMS",
    "fieldtype": "vrshared_double"
  },
  {
    "fieldname": "m_nNumFramesWithDepth",
    "fieldtype": "uint32_t"
  }
]*/
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

/*vr::Compositor_StageRenderSettings, [
  {
    "fieldname": "m_PrimaryColor",
    "fieldtype": "struct vr::HmdColor_t"
  },
  {
    "fieldname": "m_SecondaryColor",
    "fieldtype": "struct vr::HmdColor_t"
  },
  {
    "fieldname": "m_flVignetteInnerRadius",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flVignetteOuterRadius",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flFresnelStrength",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_bBackfaceCulling",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "m_bGreyscale",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "m_bWireframe",
    "fieldtype": "_Bool"
  }
]*/
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

/*vr::VROverlayIntersectionParams_t, [
  {
    "fieldname": "vSource",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "vDirection",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "eOrigin",
    "fieldtype": "enum vr::ETrackingUniverseOrigin"
  }
]*/
export interface OverlayIntersectionParams {
  vSource: HmdVector3;
  vDirection: HmdVector3;
  eOrigin: TrackingUniverseOrigin;
}

/*vr::VROverlayIntersectionResults_t, [
  {
    "fieldname": "vPoint",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "vNormal",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "vUVs",
    "fieldtype": "struct vr::HmdVector2_t"
  },
  {
    "fieldname": "fDistance",
    "fieldtype": "float"
  }
]*/
export interface OverlayIntersectionResults {
  vPoint: HmdVector3;
  vNormal: HmdVector3;
  vUVs: HmdVector2;
  fDistance: number;
}

/*vr::IntersectionMaskRectangle_t, [
  {
    "fieldname": "m_flTopLeftX",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flTopLeftY",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flWidth",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flHeight",
    "fieldtype": "float"
  }
]*/
export interface IntersectionMaskRectangle {
  flTopLeftX: number;
  flTopLeftY: number;
  flWidth: number;
  flHeight: number;
}

/*vr::IntersectionMaskCircle_t, [
  {
    "fieldname": "m_flCenterX",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flCenterY",
    "fieldtype": "float"
  },
  {
    "fieldname": "m_flRadius",
    "fieldtype": "float"
  }
]*/
export interface IntersectionMaskCircle {
  flCenterX: number;
  flCenterY: number;
  flRadius: number;
}

/*vr::(anonymous), [
  {
    "fieldname": "m_Rectangle",
    "fieldtype": "struct vr::IntersectionMaskRectangle_t"
  },
  {
    "fieldname": "m_Circle",
    "fieldtype": "struct vr::IntersectionMaskCircle_t"
  }
]*/
export interface OverlayIntersectionMaskPrimitive_Data {
  Rectangle: IntersectionMaskRectangle;
  Circle: IntersectionMaskCircle;
}

/*vr::VROverlayIntersectionMaskPrimitive_t, [
  {
    "fieldname": "m_nPrimitiveType",
    "fieldtype": "enum vr::EVROverlayIntersectionMaskPrimitiveType"
  },
  {
    "fieldname": "m_Primitive",
    "fieldtype": "VROverlayIntersectionMaskPrimitive_Data_t"
  }
]*/
export interface OverlayIntersectionMaskPrimitive {
  nPrimitiveType: OverlayIntersectionMaskPrimitiveType;
  Primitive: OverlayIntersectionMaskPrimitive_Data;
}

/*vr::VROverlayProjection_t, [
  {
    "fieldname": "fLeft",
    "fieldtype": "float"
  },
  {
    "fieldname": "fRight",
    "fieldtype": "float"
  },
  {
    "fieldname": "fTop",
    "fieldtype": "float"
  },
  {
    "fieldname": "fBottom",
    "fieldtype": "float"
  }
]*/
export interface OverlayProjection {
  fLeft: number;
  fRight: number;
  fTop: number;
  fBottom: number;
}

/*vr::VROverlayView_t, [
  {
    "fieldname": "overlayHandle",
    "fieldtype": "VROverlayHandle_t"
  },
  {
    "fieldname": "texture",
    "fieldtype": "struct vr::Texture_t"
  },
  {
    "fieldname": "textureBounds",
    "fieldtype": "struct vr::VRTextureBounds_t"
  }
]*/
export interface OverlayView {
  overlayHandle: OverlayHandle;
  texture: Texture;
  textureBounds: TextureBounds;
}

/*vr::VRVulkanDevice_t, [
  {
    "fieldname": "m_pInstance",
    "fieldtype": "struct VkInstance_T *"
  },
  {
    "fieldname": "m_pDevice",
    "fieldtype": "struct VkDevice_T *"
  },
  {
    "fieldname": "m_pPhysicalDevice",
    "fieldtype": "struct VkPhysicalDevice_T *"
  },
  {
    "fieldname": "m_pQueue",
    "fieldtype": "struct VkQueue_T *"
  },
  {
    "fieldname": "m_uQueueFamilyIndex",
    "fieldtype": "uint32_t"
  }
]*/
export interface VulkanDevice {
  pInstance: Deno.PointerValue<VkInstance_T>;
  pDevice: Deno.PointerValue<VkDevice_T>;
  pPhysicalDevice: Deno.PointerValue<VkPhysicalDevice_T>;
  pQueue: Deno.PointerValue<VkQueue_T>;
  uQueueFamilyIndex: number;
}

/*vr::VRNativeDevice_t, [
  {
    "fieldname": "handle",
    "fieldtype": "void *"
  },
  {
    "fieldname": "eType",
    "fieldtype": "enum vr::EDeviceType"
  }
]*/
export interface NativeDevice {
  handle: Deno.PointerValue<unknown>;
  eType: DeviceType;
}

/*vr::RenderModel_Vertex_t, [
  {
    "fieldname": "vPosition",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "vNormal",
    "fieldtype": "struct vr::HmdVector3_t"
  },
  {
    "fieldname": "rfTextureCoord",
    "fieldtype": "float [2]"
  }
]*/
export interface RenderModel_Vertex {
  vPosition: HmdVector3;
  vNormal: HmdVector3;
  rfTextureCoord: [number, number];
}

/*vr::RenderModel_TextureMap_t, [
  {
    "fieldname": "unWidth",
    "fieldtype": "uint16_t"
  },
  {
    "fieldname": "unHeight",
    "fieldtype": "uint16_t"
  },
  {
    "fieldname": "rubTextureMapData",
    "fieldtype": "const uint8_t *"
  },
  {
    "fieldname": "format",
    "fieldtype": "enum vr::EVRRenderModelTextureFormat"
  },
  {
    "fieldname": "unMipLevels",
    "fieldtype": "uint16_t"
  }
]*/
export interface RenderModel_TextureMap {
  unWidth: number;
  unHeight: number;
  rubTextureMapData: Uint8Array;
  format: RenderModelTextureFormat;
  unMipLevels: number;
}

/*vr::RenderModel_t, [
  {
    "fieldname": "rVertexData",
    "fieldtype": "const struct vr::RenderModel_Vertex_t *"
  },
  {
    "fieldname": "unVertexCount",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "rIndexData",
    "fieldtype": "const uint16_t *"
  },
  {
    "fieldname": "unTriangleCount",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "diffuseTextureId",
    "fieldtype": "TextureID_t"
  }
]*/
export interface RenderModel {
  rVertexData: Deno.PointerValue<RenderModel_Vertex>//READONLY;
  unVertexCount: number;
  rIndexData: Deno.PointerValue<number>//READONLY;
  unTriangleCount: number;
  diffuseTextureId: TextureID;
}

/*vr::RenderModel_ControllerMode_State_t, [
  {
    "fieldname": "bScrollWheelVisible",
    "fieldtype": "_Bool"
  }
]*/
export interface RenderModel_ControllerMode_State {
  bScrollWheelVisible: boolean;
}

/*vr::NotificationBitmap_t, [
  {
    "fieldname": "m_pImageData",
    "fieldtype": "void *"
  },
  {
    "fieldname": "m_nWidth",
    "fieldtype": "int32_t"
  },
  {
    "fieldname": "m_nHeight",
    "fieldtype": "int32_t"
  },
  {
    "fieldname": "m_nBytesPerPixel",
    "fieldtype": "int32_t"
  }
]*/
export interface NotificationBitmap {
  pImageData: Deno.PointerValue<unknown>;
  nWidth: number;
  nHeight: number;
  nBytesPerPixel: number;
}

/*vr::CVRSettingHelper, [
  {
    "fieldname": "m_pSettings",
    "fieldtype": "class vr::IVRSettings *"
  }
]*/
export interface CVRSettingHelper {
  pSettings: Deno.PointerValue<IVRSettings>;
}

/*vr::InputAnalogActionData_t, [
  {
    "fieldname": "bActive",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "activeOrigin",
    "fieldtype": "VRInputValueHandle_t"
  },
  {
    "fieldname": "x",
    "fieldtype": "float"
  },
  {
    "fieldname": "y",
    "fieldtype": "float"
  },
  {
    "fieldname": "z",
    "fieldtype": "float"
  },
  {
    "fieldname": "deltaX",
    "fieldtype": "float"
  },
  {
    "fieldname": "deltaY",
    "fieldtype": "float"
  },
  {
    "fieldname": "deltaZ",
    "fieldtype": "float"
  },
  {
    "fieldname": "fUpdateTime",
    "fieldtype": "float"
  }
]*/
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

/*vr::InputDigitalActionData_t, [
  {
    "fieldname": "bActive",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "activeOrigin",
    "fieldtype": "VRInputValueHandle_t"
  },
  {
    "fieldname": "bState",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "bChanged",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "fUpdateTime",
    "fieldtype": "float"
  }
]*/
export interface InputDigitalActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
  bState: boolean;
  bChanged: boolean;
  fUpdateTime: number;
}

/*vr::InputPoseActionData_t, [
  {
    "fieldname": "bActive",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "activeOrigin",
    "fieldtype": "VRInputValueHandle_t"
  },
  {
    "fieldname": "pose",
    "fieldtype": "struct vr::TrackedDevicePose_t"
  }
]*/
export interface InputPoseActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
  pose: TrackedDevicePose;
}

/*vr::InputSkeletalActionData_t, [
  {
    "fieldname": "bActive",
    "fieldtype": "_Bool"
  },
  {
    "fieldname": "activeOrigin",
    "fieldtype": "VRInputValueHandle_t"
  }
]*/
export interface InputSkeletalActionData {
  bActive: boolean;
  activeOrigin: InputValueHandle;
}

/*vr::InputOriginInfo_t, [
  {
    "fieldname": "devicePath",
    "fieldtype": "VRInputValueHandle_t"
  },
  {
    "fieldname": "trackedDeviceIndex",
    "fieldtype": "TrackedDeviceIndex_t"
  },
  {
    "fieldname": "rchRenderModelComponentName",
    "fieldtype": "char [128]"
  }
]*/
export interface InputOriginInfo {
  devicePath: InputValueHandle;
  trackedDeviceIndex: TrackedDeviceIndex;
  rchRenderModelComponentName: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
}

/*vr::InputBindingInfo_t, [
  {
    "fieldname": "rchDevicePathName",
    "fieldtype": "char [128]"
  },
  {
    "fieldname": "rchInputPathName",
    "fieldtype": "char [128]"
  },
  {
    "fieldname": "rchModeName",
    "fieldtype": "char [128]"
  },
  {
    "fieldname": "rchSlotName",
    "fieldtype": "char [128]"
  },
  {
    "fieldname": "rchInputSourceType",
    "fieldtype": "char [32]"
  }
]*/
export interface InputBindingInfo {
  rchDevicePathName: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  rchInputPathName: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  rchModeName: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  rchSlotName: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  rchInputSourceType: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
}

/*vr::VRActiveActionSet_t, [
  {
    "fieldname": "ulActionSet",
    "fieldtype": "VRActionSetHandle_t"
  },
  {
    "fieldname": "ulRestrictedToDevice",
    "fieldtype": "VRInputValueHandle_t"
  },
  {
    "fieldname": "ulSecondaryActionSet",
    "fieldtype": "VRActionSetHandle_t"
  },
  {
    "fieldname": "unPadding",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "nPriority",
    "fieldtype": "int32_t"
  }
]*/
export interface ActiveActionSet {
  ulActionSet: ActionSetHandle;
  ulRestrictedToDevice: InputValueHandle;
  ulSecondaryActionSet: ActionSetHandle;
  unPadding: number;
  nPriority: number;
}

/*vr::VRSkeletalSummaryData_t, [
  {
    "fieldname": "flFingerCurl",
    "fieldtype": "float [5]"
  },
  {
    "fieldname": "flFingerSplay",
    "fieldtype": "float [4]"
  }
]*/
export interface SkeletalSummaryData {
  flFingerCurl: [number, number, number, number, number];
  flFingerSplay: [number, number, number, number];
}

/*vr::SpatialAnchorPose_t, [
  {
    "fieldname": "mAnchorToAbsoluteTracking",
    "fieldtype": "struct vr::HmdMatrix34_t"
  }
]*/
export interface SpatialAnchorPose {
  mAnchorToAbsoluteTracking: HmdMatrix34;
}

/*vr::COpenVRContext, [
  {
    "fieldname": "m_pVRSystem",
    "fieldtype": "class vr::IVRSystem *"
  },
  {
    "fieldname": "m_pVRChaperone",
    "fieldtype": "class vr::IVRChaperone *"
  },
  {
    "fieldname": "m_pVRChaperoneSetup",
    "fieldtype": "class vr::IVRChaperoneSetup *"
  },
  {
    "fieldname": "m_pVRCompositor",
    "fieldtype": "class vr::IVRCompositor *"
  },
  {
    "fieldname": "m_pVRHeadsetView",
    "fieldtype": "class vr::IVRHeadsetView *"
  },
  {
    "fieldname": "m_pVROverlay",
    "fieldtype": "class vr::IVROverlay *"
  },
  {
    "fieldname": "m_pVROverlayView",
    "fieldtype": "class vr::IVROverlayView *"
  },
  {
    "fieldname": "m_pVRResources",
    "fieldtype": "class vr::IVRResources *"
  },
  {
    "fieldname": "m_pVRRenderModels",
    "fieldtype": "class vr::IVRRenderModels *"
  },
  {
    "fieldname": "m_pVRExtendedDisplay",
    "fieldtype": "class vr::IVRExtendedDisplay *"
  },
  {
    "fieldname": "m_pVRSettings",
    "fieldtype": "class vr::IVRSettings *"
  },
  {
    "fieldname": "m_pVRApplications",
    "fieldtype": "class vr::IVRApplications *"
  },
  {
    "fieldname": "m_pVRTrackedCamera",
    "fieldtype": "class vr::IVRTrackedCamera *"
  },
  {
    "fieldname": "m_pVRScreenshots",
    "fieldtype": "class vr::IVRScreenshots *"
  },
  {
    "fieldname": "m_pVRDriverManager",
    "fieldtype": "class vr::IVRDriverManager *"
  },
  {
    "fieldname": "m_pVRInput",
    "fieldtype": "class vr::IVRInput *"
  },
  {
    "fieldname": "m_pVRIOBuffer",
    "fieldtype": "class vr::IVRIOBuffer *"
  },
  {
    "fieldname": "m_pVRSpatialAnchors",
    "fieldtype": "class vr::IVRSpatialAnchors *"
  },
  {
    "fieldname": "m_pVRDebug",
    "fieldtype": "class vr::IVRDebug *"
  },
  {
    "fieldname": "m_pVRNotifications",
    "fieldtype": "class vr::IVRNotifications *"
  }
]*/
export interface COpenVRContext {
  pVRSystem: Deno.PointerValue<IVRSystem>;
  pVRChaperone: Deno.PointerValue<IVRChaperone>;
  pVRChaperoneSetup: Deno.PointerValue<IVRChaperoneSetup>;
  pVRCompositor: Deno.PointerValue<IVRCompositor>;
  pVRHeadsetView: Deno.PointerValue<IVRHeadsetView>;
  pVROverlay: Deno.PointerValue<IVROverlay>;
  pVROverlayView: Deno.PointerValue<IVROverlayView>;
  pVRResources: Deno.PointerValue<IVRResources>;
  pVRRenderModels: Deno.PointerValue<IVRRenderModels>;
  pVRExtendedDisplay: Deno.PointerValue<IVRExtendedDisplay>;
  pVRSettings: Deno.PointerValue<IVRSettings>;
  pVRApplications: Deno.PointerValue<IVRApplications>;
  pVRTrackedCamera: Deno.PointerValue<IVRTrackedCamera>;
  pVRScreenshots: Deno.PointerValue<IVRScreenshots>;
  pVRDriverManager: Deno.PointerValue<IVRDriverManager>;
  pVRInput: Deno.PointerValue<IVRInput>;
  pVRIOBuffer: Deno.PointerValue<IVRIOBuffer>;
  pVRSpatialAnchors: Deno.PointerValue<IVRSpatialAnchors>;
  pVRDebug: Deno.PointerValue<IVRDebug>;
  pVRNotifications: Deno.PointerValue<IVRNotifications>;
}

/*vr::PropertyWrite_t, [
  {
    "fieldname": "prop",
    "fieldtype": "enum vr::ETrackedDeviceProperty"
  },
  {
    "fieldname": "writeType",
    "fieldtype": "enum vr::EPropertyWriteType"
  },
  {
    "fieldname": "eSetError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  },
  {
    "fieldname": "pvBuffer",
    "fieldtype": "void *"
  },
  {
    "fieldname": "unBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "unTag",
    "fieldtype": "PropertyTypeTag_t"
  },
  {
    "fieldname": "eError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  }
]*/
export interface PropertyWrite {
  prop: TrackedDeviceProperty;
  writeType: PropertyWriteType;
  eSetError: TrackedPropertyError;
  pvBuffer: Deno.PointerValue<unknown>;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  eError: TrackedPropertyError;
}

/*vr::PropertyRead_t, [
  {
    "fieldname": "prop",
    "fieldtype": "enum vr::ETrackedDeviceProperty"
  },
  {
    "fieldname": "pvBuffer",
    "fieldtype": "void *"
  },
  {
    "fieldname": "unBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "unTag",
    "fieldtype": "PropertyTypeTag_t"
  },
  {
    "fieldname": "unRequiredBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "eError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  }
]*/
export interface PropertyRead {
  prop: TrackedDeviceProperty;
  pvBuffer: Deno.PointerValue<unknown>;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  unRequiredBufferSize: number;
  eError: TrackedPropertyError;
}

/*vr::CVRPropertyHelpers, [
  {
    "fieldname": "m_pProperties",
    "fieldtype": "class vr::IVRProperties *"
  }
]*/
export interface CVRPropertyHelpers {
  pProperties: Deno.PointerValue<IVRProperties>;
}

/*vr::PathWrite_t, [
  {
    "fieldname": "ulPath",
    "fieldtype": "PathHandle_t"
  },
  {
    "fieldname": "writeType",
    "fieldtype": "enum vr::EPropertyWriteType"
  },
  {
    "fieldname": "eSetError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  },
  {
    "fieldname": "pvBuffer",
    "fieldtype": "void *"
  },
  {
    "fieldname": "unBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "unTag",
    "fieldtype": "PropertyTypeTag_t"
  },
  {
    "fieldname": "eError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  },
  {
    "fieldname": "pszPath",
    "fieldtype": "const char *"
  }
]*/
export interface PathWrite {
  ulPath: PathHandle;
  writeType: PropertyWriteType;
  eSetError: TrackedPropertyError;
  pvBuffer: Deno.PointerValue<unknown>;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  eError: TrackedPropertyError;
  pszPath: string;
}

/*vr::PathRead_t, [
  {
    "fieldname": "ulPath",
    "fieldtype": "PathHandle_t"
  },
  {
    "fieldname": "pvBuffer",
    "fieldtype": "void *"
  },
  {
    "fieldname": "unBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "unTag",
    "fieldtype": "PropertyTypeTag_t"
  },
  {
    "fieldname": "unRequiredBufferSize",
    "fieldtype": "uint32_t"
  },
  {
    "fieldname": "eError",
    "fieldtype": "enum vr::ETrackedPropertyError"
  },
  {
    "fieldname": "pszPath",
    "fieldtype": "const char *"
  }
]*/
export interface PathRead {
  ulPath: PathHandle;
  pvBuffer: Deno.PointerValue<unknown>;
  unBufferSize: number;
  unTag: PropertyTypeTag;
  unRequiredBufferSize: number;
  eError: TrackedPropertyError;
  pszPath: string;
}

//#endregion
// Classes

//#region Classes
export class IVRSystem {
  constructor(private ptr: Deno.PointerValue<IVRSystem>) {}

  GetRecommendedRenderTargetSize(pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetProjectionMatrix(eEye: Eye, fNearZ: number, fFarZ: number): HmdMatrix44 {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdMatrix44;
  }

  GetProjectionRaw(eEye: Eye, pfLeft: Deno.PointerValue<number>, pfRight: Deno.PointerValue<number>, pfTop: Deno.PointerValue<number>, pfBottom: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  ComputeDistortion(eEye: Eye, fU: number, fV: number, pDistortionCoordinates: Deno.PointerValue<DistortionCoordinates>): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetEyeToHeadTransform(eEye: Eye): HmdMatrix34 {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdMatrix34;
  }

  GetTimeSinceLastVsync(pfSecondsSinceLastVsync: Deno.PointerValue<number>, pulFrameCounter: Deno.PointerValue<bigint>): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetD3D9AdapterIndex(): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetDXGIOutputInfo(pnAdapterIndex: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetOutputDevice(pnDevice: Deno.PointerValue<bigint>, textureType: TextureType, pInstance: Deno.PointerValue<VkInstance_T>): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  IsDisplayOnDesktop(): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetDisplayVisibility(bIsVisibleOnDesktop: bool): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetDeviceToAbsoluteTrackingPose(eOrigin: TrackingUniverseOrigin, fPredictedSecondsToPhotonsFromNow: number, pTrackedDevicePoseArray: Deno.PointerValue<TrackedDevicePose>, unTrackedDevicePoseArrayCount: number): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetSeatedZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34 {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdMatrix34;
  }

  GetRawZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34 {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdMatrix34;
  }

  GetSortedTrackedDeviceIndicesOfClass(eTrackedDeviceClass: TrackedDeviceClass, punTrackedDeviceIndexArray: Deno.PointerValue<TrackedDeviceIndex>, unTrackedDeviceIndexArrayCount: number, unRelativeToTrackedDeviceIndex: TrackedDeviceIndex): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetTrackedDeviceActivityLevel(unDeviceId: TrackedDeviceIndex): DeviceActivityLevel {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as DeviceActivityLevel;
  }

  ApplyTransform(pOutputPose: Deno.PointerValue<TrackedDevicePose>, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>//READONLY, pTransform: Deno.PointerValue<HmdMatrix34>//READONLY): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetTrackedDeviceIndexForControllerRole(unDeviceType: TrackedControllerRole): TrackedDeviceIndex {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedDeviceIndex;
  }

  GetControllerRoleForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex): TrackedControllerRole {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedControllerRole;
  }

  GetTrackedDeviceClass(unDeviceIndex: TrackedDeviceIndex): TrackedDeviceClass {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedDeviceClass;
  }

  IsTrackedDeviceConnected(unDeviceIndex: TrackedDeviceIndex): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetBoolTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetFloatTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetInt32TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetUint64TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>): bigint {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bigint;
  }

  GetMatrix34TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pError: Deno.PointerValue<TrackedPropertyError>): HmdMatrix34 {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdMatrix34;
  }

  GetArrayTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, propType: PropertyTypeTag, pBuffer: Deno.PointerValue<unknown>, unBufferSize: number, pError: Deno.PointerValue<TrackedPropertyError>): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetStringTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex, prop: TrackedDeviceProperty, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<TrackedPropertyError>): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetPropErrorNameFromEnum(error: TrackedPropertyError): string {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  PollNextEvent(pEvent: Deno.PointerValue<Event>, uncbVREvent: number): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  PollNextEventWithPose(eOrigin: TrackingUniverseOrigin, pEvent: Deno.PointerValue<Event>, uncbVREvent: number, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetEventTypeNameFromEnum(eType: EventType): string {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  GetHiddenAreaMesh(eEye: Eye, type: HiddenAreaMeshType): HiddenAreaMesh {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HiddenAreaMesh;
  }

  GetControllerState(unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: Deno.PointerValue<ControllerState>, unControllerStateSize: number): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetControllerStateWithPose(eOrigin: TrackingUniverseOrigin, unControllerDeviceIndex: TrackedDeviceIndex, pControllerState: Deno.PointerValue<ControllerState>, unControllerStateSize: number, pTrackedDevicePose: Deno.PointerValue<TrackedDevicePose>): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  TriggerHapticPulse(unControllerDeviceIndex: TrackedDeviceIndex, unAxisId: number, usDurationMicroSec: number): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetButtonIdNameFromEnum(eButtonId: ButtonId): string {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  GetControllerAxisTypeNameFromEnum(eAxisType: ControllerAxisType): string {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  IsInputAvailable(): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IsSteamVRDrawingControllers(): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ShouldApplicationPause(): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ShouldApplicationReduceRenderingWork(): bool {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  PerformFirmwareUpdate(unDeviceIndex: TrackedDeviceIndex): FirmwareError {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as FirmwareError;
  }

  AcknowledgeQuit_Exiting(): void {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
  }

  GetAppContainerFilePaths(pchBuffer: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetRuntimeVersion(): string {
    if (this.ptr === null) throw new Error("IVRSystem pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSystem>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

}

export class IVRChaperone {
  constructor(private ptr: Deno.PointerValue<IVRChaperone>) {}

  GetCalibrationState(): ChaperoneCalibrationState {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ChaperoneCalibrationState;
  }

  GetPlayAreaSize(pSizeX: Deno.PointerValue<number>, pSizeZ: Deno.PointerValue<number>): bool {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetPlayAreaRect(rect: Deno.PointerValue<HmdQuad>): bool {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ReloadInfo(): void {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
  }

  SetSceneColor(color: HmdColor): void {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
  }

  GetBoundsColor(pOutputColorArray: Deno.PointerValue<HmdColor>, nNumOutputColors: int, flCollisionBoundsFadeDistance: number, pOutputCameraColor: Deno.PointerValue<HmdColor>): void {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
  }

  AreBoundsVisible(): bool {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ForceBoundsVisible(bForce: bool): void {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
  }

  ResetZeroPose(eTrackingUniverseOrigin: TrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("IVRChaperone pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperone>);
    // TODO: Implement FFI call
  }

}

export class IVRChaperoneSetup {
  constructor(private ptr: Deno.PointerValue<IVRChaperoneSetup>) {}

  CommitWorkingCopy(configFile: ChaperoneConfigFile): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  RevertWorkingCopy(): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  GetWorkingPlayAreaSize(pSizeX: Deno.PointerValue<number>, pSizeZ: Deno.PointerValue<number>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetWorkingPlayAreaRect(rect: Deno.PointerValue<HmdQuad>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetWorkingCollisionBoundsInfo(pQuadsBuffer: Deno.PointerValue<HmdQuad>, punQuadsCount: Deno.PointerValue<number>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetLiveCollisionBoundsInfo(pQuadsBuffer: Deno.PointerValue<HmdQuad>, punQuadsCount: Deno.PointerValue<number>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetWorkingSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetWorkingStandingZeroPoseToRawTrackingPose(pmatStandingZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetWorkingPlayAreaSize(sizeX: number, sizeZ: number): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  SetWorkingCollisionBoundsInfo(pQuadsBuffer: Deno.PointerValue<HmdQuad>, unQuadsCount: number): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  SetWorkingPerimeter(pPointBuffer: Deno.PointerValue<HmdVector2>, unPointCount: number): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  SetWorkingSeatedZeroPoseToRawTrackingPose(pMatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>//READONLY): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  SetWorkingStandingZeroPoseToRawTrackingPose(pMatStandingZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>//READONLY): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  ReloadFromDisk(configFile: ChaperoneConfigFile): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  GetLiveSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: Deno.PointerValue<HmdMatrix34>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ExportLiveToBuffer(pBuffer: string, pnBufferLength: Deno.PointerValue<number>): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ImportFromBufferToWorking(pBuffer: string, nImportFlags: number): bool {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ShowWorkingSetPreview(): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  HideWorkingSetPreview(): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

  RoomSetupStarting(): void {
    if (this.ptr === null) throw new Error("IVRChaperoneSetup pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRChaperoneSetup>);
    // TODO: Implement FFI call
  }

}

export class IVRCompositor {
  constructor(private ptr: Deno.PointerValue<IVRCompositor>) {}

  SetTrackingSpace(eOrigin: TrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetTrackingSpace(): TrackingUniverseOrigin {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackingUniverseOrigin;
  }

  WaitGetPoses(pRenderPoseArray: Deno.PointerValue<TrackedDevicePose>, unRenderPoseArrayCount: number, pGamePoseArray: Deno.PointerValue<TrackedDevicePose>, unGamePoseArrayCount: number): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  GetLastPoses(pRenderPoseArray: Deno.PointerValue<TrackedDevicePose>, unRenderPoseArrayCount: number, pGamePoseArray: Deno.PointerValue<TrackedDevicePose>, unGamePoseArrayCount: number): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  GetLastPoseForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex, pOutputPose: Deno.PointerValue<TrackedDevicePose>, pOutputGamePose: Deno.PointerValue<TrackedDevicePose>): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  Submit(eEye: Eye, pTexture: Deno.PointerValue<Texture>//READONLY, pBounds: Deno.PointerValue<TextureBounds>//READONLY, nSubmitFlags: SubmitFlags): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  SubmitWithArrayIndex(eEye: Eye, pTexture: Deno.PointerValue<Texture>//READONLY, unTextureArrayIndex: number, pBounds: Deno.PointerValue<TextureBounds>//READONLY, nSubmitFlags: SubmitFlags): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  ClearLastSubmittedFrame(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  PostPresentHandoff(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetFrameTiming(pTiming: Deno.PointerValue<Compositor_FrameTiming>, unFramesAgo: number): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetFrameTimings(pTiming: Deno.PointerValue<Compositor_FrameTiming>, nFrames: number): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetFrameTimeRemaining(): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetCumulativeStats(pStats: Deno.PointerValue<Compositor_CumulativeStats>, nStatsSizeInBytes: number): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  FadeToColor(fSeconds: number, fRed: number, fGreen: number, fBlue: number, fAlpha: number, bBackground: bool): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetCurrentFadeColor(bBackground: bool): HmdColor {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HmdColor;
  }

  FadeGrid(fSeconds: number, bFadeGridIn: bool): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetCurrentGridAlpha(): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  SetSkyboxOverride(pTextures: Deno.PointerValue<Texture>//READONLY, unTextureCount: number): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  ClearSkyboxOverride(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  CompositorBringToFront(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  CompositorGoToBack(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  CompositorQuit(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  IsFullscreen(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetCurrentSceneFocusProcess(): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetLastFrameRenderer(): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  CanRenderScene(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ShowMirrorWindow(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  HideMirrorWindow(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  IsMirrorWindowVisible(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  CompositorDumpImages(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  ShouldAppRenderWithLowResources(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  ForceInterleavedReprojectionOn(bOverride: bool): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  ForceReconnectProcess(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  SuspendRendering(bSuspend: bool): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetMirrorTextureD3D11(eEye: Eye, pD3D11DeviceOrResource: Deno.PointerValue<unknown>, ppD3D11ShaderResourceView: Deno.PointerValue<Deno.PointerValue<unknown>>): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  ReleaseMirrorTextureD3D11(pD3D11ShaderResourceView: Deno.PointerValue<unknown>): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetMirrorTextureGL(eEye: Eye, pglTextureId: Deno.PointerValue<glUInt>, pglSharedTextureHandle: Deno.PointerValue<glSharedTextureHandle>): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  ReleaseSharedGLTexture(glTextureId: glUInt, glSharedTextureHandle: glSharedTextureHandle): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  LockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  UnlockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetVulkanInstanceExtensionsRequired(pchValue: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetVulkanDeviceExtensionsRequired(pPhysicalDevice: Deno.PointerValue<VkPhysicalDevice_T>, pchValue: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  SetExplicitTimingMode(eTimingMode: CompositorTimingMode): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  SubmitExplicitTimingData(): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  IsMotionSmoothingEnabled(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IsMotionSmoothingSupported(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IsCurrentSceneFocusAppLoading(): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetStageOverride_Async(pchRenderModelPath: string, pTransform: Deno.PointerValue<HmdMatrix34>//READONLY, pRenderSettings: Deno.PointerValue<Compositor_StageRenderSettings>//READONLY, nSizeOfRenderSettings: number): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  ClearStageOverride(): void {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
  }

  GetCompositorBenchmarkResults(pBenchmarkResults: Deno.PointerValue<Compositor_BenchmarkResults>, nSizeOfBenchmarkResults: number): bool {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetLastPosePredictionIDs(pRenderPosePredictionID: Deno.PointerValue<number>, pGamePosePredictionID: Deno.PointerValue<number>): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

  GetPosesForFrame(unPosePredictionID: number, pPoseArray: Deno.PointerValue<TrackedDevicePose>, unPoseArrayCount: number): CompositorError {
    if (this.ptr === null) throw new Error("IVRCompositor pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRCompositor>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as CompositorError;
  }

}

export class IVRHeadsetView {
  constructor(private ptr: Deno.PointerValue<IVRHeadsetView>) {}

  SetHeadsetViewSize(nWidth: number, nHeight: number): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

  GetHeadsetViewSize(pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

  SetHeadsetViewMode(eHeadsetViewMode: HeadsetViewMode): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

  GetHeadsetViewMode(): HeadsetViewMode {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as HeadsetViewMode;
  }

  SetHeadsetViewCropped(bCropped: bool): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

  GetHeadsetViewCropped(): bool {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetHeadsetViewAspectRatio(): number {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  SetHeadsetViewBlendRange(flStartPct: number, flEndPct: number): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

  GetHeadsetViewBlendRange(pStartPct: Deno.PointerValue<number>, pEndPct: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRHeadsetView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRHeadsetView>);
    // TODO: Implement FFI call
  }

}

export class IVROverlay {
  constructor(private ptr: Deno.PointerValue<IVROverlay>) {}

  FindOverlay(pchOverlayKey: string, pOverlayHandle: Deno.PointerValue<OverlayHandle>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  CreateOverlay(pchOverlayKey: string, pchOverlayName: string, pOverlayHandle: Deno.PointerValue<OverlayHandle>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  DestroyOverlay(ulOverlayHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayKey(ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<OverlayError>): number {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetOverlayName(ulOverlayHandle: OverlayHandle, pchValue: string, unBufferSize: number, pError: Deno.PointerValue<OverlayError>): number {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  SetOverlayName(ulOverlayHandle: OverlayHandle, pchName: string): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayImageData(ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue<unknown>, unBufferSize: number, punWidth: Deno.PointerValue<number>, punHeight: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayErrorNameFromEnum(error: OverlayError): string {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  SetOverlayRenderingPid(ulOverlayHandle: OverlayHandle, unPID: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayRenderingPid(ulOverlayHandle: OverlayHandle): number {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  SetOverlayFlag(ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, bEnabled: bool): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayFlag(ulOverlayHandle: OverlayHandle, eOverlayFlag: OverlayFlags, pbEnabled: Deno.PointerValue<bool>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayFlags(ulOverlayHandle: OverlayHandle, pFlags: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayColor(ulOverlayHandle: OverlayHandle, fRed: number, fGreen: number, fBlue: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayColor(ulOverlayHandle: OverlayHandle, pfRed: Deno.PointerValue<number>, pfGreen: Deno.PointerValue<number>, pfBlue: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayAlpha(ulOverlayHandle: OverlayHandle, fAlpha: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayAlpha(ulOverlayHandle: OverlayHandle, pfAlpha: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTexelAspect(ulOverlayHandle: OverlayHandle, fTexelAspect: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTexelAspect(ulOverlayHandle: OverlayHandle, pfTexelAspect: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlaySortOrder(ulOverlayHandle: OverlayHandle, unSortOrder: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlaySortOrder(ulOverlayHandle: OverlayHandle, punSortOrder: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayWidthInMeters(ulOverlayHandle: OverlayHandle, fWidthInMeters: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayWidthInMeters(ulOverlayHandle: OverlayHandle, pfWidthInMeters: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayCurvature(ulOverlayHandle: OverlayHandle, fCurvature: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayCurvature(ulOverlayHandle: OverlayHandle, pfCurvature: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayPreCurvePitch(ulOverlayHandle: OverlayHandle, fRadians: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayPreCurvePitch(ulOverlayHandle: OverlayHandle, pfRadians: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTextureColorSpace(ulOverlayHandle: OverlayHandle, eTextureColorSpace: ColorSpace): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTextureColorSpace(ulOverlayHandle: OverlayHandle, peTextureColorSpace: Deno.PointerValue<ColorSpace>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTextureBounds(ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: Deno.PointerValue<TextureBounds>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTextureBounds(ulOverlayHandle: OverlayHandle, pOverlayTextureBounds: Deno.PointerValue<TextureBounds>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTransformType(ulOverlayHandle: OverlayHandle, peTransformType: Deno.PointerValue<OverlayTransformType>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTransformAbsolute(ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTransformAbsolute(ulOverlayHandle: OverlayHandle, peTrackingOrigin: Deno.PointerValue<TrackingUniverseOrigin>, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: OverlayHandle, unTrackedDevice: TrackedDeviceIndex, pmatTrackedDeviceToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: OverlayHandle, punTrackedDevice: Deno.PointerValue<TrackedDeviceIndex>, pmatTrackedDeviceToOverlayTransform: Deno.PointerValue<HmdMatrix34>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: OverlayHandle, unDeviceIndex: TrackedDeviceIndex, pchComponentName: string): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: OverlayHandle, punDeviceIndex: Deno.PointerValue<TrackedDeviceIndex>, pchComponentName: string, unComponentNameSize: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTransformCursor(ulCursorOverlayHandle: OverlayHandle, pvHotspot: Deno.PointerValue<HmdVector2>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTransformCursor(ulOverlayHandle: OverlayHandle, pvHotspot: Deno.PointerValue<HmdVector2>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTransformProjection(ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: Deno.PointerValue<HmdMatrix34>//READONLY, pProjection: Deno.PointerValue<OverlayProjection>//READONLY, eEye: Eye): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ShowOverlay(ulOverlayHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  HideOverlay(ulOverlayHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  IsOverlayVisible(ulOverlayHandle: OverlayHandle): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetTransformForOverlayCoordinates(ulOverlayHandle: OverlayHandle, eTrackingOrigin: TrackingUniverseOrigin, coordinatesInOverlay: HmdVector2, pmatTransform: Deno.PointerValue<HmdMatrix34>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  WaitFrameSync(nTimeoutMs: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  PollNextOverlayEvent(ulOverlayHandle: OverlayHandle, pEvent: Deno.PointerValue<Event>, uncbVREvent: number): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetOverlayInputMethod(ulOverlayHandle: OverlayHandle, peInputMethod: Deno.PointerValue<OverlayInputMethod>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayInputMethod(ulOverlayHandle: OverlayHandle, eInputMethod: OverlayInputMethod): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayMouseScale(ulOverlayHandle: OverlayHandle, pvecMouseScale: Deno.PointerValue<HmdVector2>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayMouseScale(ulOverlayHandle: OverlayHandle, pvecMouseScale: Deno.PointerValue<HmdVector2>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ComputeOverlayIntersection(ulOverlayHandle: OverlayHandle, pParams: Deno.PointerValue<OverlayIntersectionParams>//READONLY, pResults: Deno.PointerValue<OverlayIntersectionResults>): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IsHoverTargetOverlay(ulOverlayHandle: OverlayHandle): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetOverlayIntersectionMask(ulOverlayHandle: OverlayHandle, pMaskPrimitives: Deno.PointerValue<OverlayIntersectionMaskPrimitive>, unNumMaskPrimitives: number, unPrimitiveSize: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  TriggerLaserMouseHapticVibration(ulOverlayHandle: OverlayHandle, fDurationSeconds: number, fFrequency: number, fAmplitude: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayCursor(ulOverlayHandle: OverlayHandle, ulCursorHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayCursorPositionOverride(ulOverlayHandle: OverlayHandle, pvCursor: Deno.PointerValue<HmdVector2>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ClearOverlayCursorPositionOverride(ulOverlayHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayTexture(ulOverlayHandle: OverlayHandle, pTexture: Deno.PointerValue<Texture>//READONLY): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ClearOverlayTexture(ulOverlayHandle: OverlayHandle): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayRaw(ulOverlayHandle: OverlayHandle, pvBuffer: Deno.PointerValue<unknown>, unWidth: number, unHeight: number, unBytesPerPixel: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  SetOverlayFromFile(ulOverlayHandle: OverlayHandle, pchFilePath: string): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTexture(ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue<Deno.PointerValue<unknown>>, pNativeTextureRef: Deno.PointerValue<unknown>, pWidth: Deno.PointerValue<number>, pHeight: Deno.PointerValue<number>, pNativeFormat: Deno.PointerValue<number>, pAPIType: Deno.PointerValue<TextureType>, pColorSpace: Deno.PointerValue<ColorSpace>, pTextureBounds: Deno.PointerValue<TextureBounds>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ReleaseNativeOverlayHandle(ulOverlayHandle: OverlayHandle, pNativeTextureHandle: Deno.PointerValue<unknown>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetOverlayTextureSize(ulOverlayHandle: OverlayHandle, pWidth: Deno.PointerValue<number>, pHeight: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  CreateDashboardOverlay(pchOverlayKey: string, pchOverlayFriendlyName: string, pMainHandle: Deno.PointerValue<OverlayHandle>, pThumbnailHandle: Deno.PointerValue<OverlayHandle>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  IsDashboardVisible(): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IsActiveDashboardOverlay(ulOverlayHandle: OverlayHandle): bool {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetDashboardOverlaySceneProcess(ulOverlayHandle: OverlayHandle, unProcessId: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetDashboardOverlaySceneProcess(ulOverlayHandle: OverlayHandle, punProcessId: Deno.PointerValue<number>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ShowDashboard(pchOverlayToShow: string): void {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
  }

  GetPrimaryDashboardDevice(): TrackedDeviceIndex {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedDeviceIndex;
  }

  ShowKeyboard(eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ShowKeyboardForOverlay(ulOverlayHandle: OverlayHandle, eInputMode: GamepadTextInputMode, eLineInputMode: GamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  GetKeyboardText(pchText: string, cchText: number): number {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  HideKeyboard(): void {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
  }

  SetKeyboardTransformAbsolute(eTrackingOrigin: TrackingUniverseOrigin, pmatTrackingOriginToKeyboardTransform: Deno.PointerValue<HmdMatrix34>//READONLY): void {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
  }

  SetKeyboardPositionForOverlay(ulOverlayHandle: OverlayHandle, avoidRect: HmdRect2): void {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
  }

  ShowMessageOverlay(pchText: string, pchCaption: string, pchButton0Text: string, pchButton1Text: string, pchButton2Text: string, pchButton3Text: string): MessageOverlayResponse {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as MessageOverlayResponse;
  }

  CloseMessageOverlay(): void {
    if (this.ptr === null) throw new Error("IVROverlay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlay>);
    // TODO: Implement FFI call
  }

}

export class IVROverlayView {
  constructor(private ptr: Deno.PointerValue<IVROverlayView>) {}

  AcquireOverlayView(ulOverlayHandle: OverlayHandle, pNativeDevice: Deno.PointerValue<NativeDevice>, pOverlayView: Deno.PointerValue<OverlayView>, unOverlayViewSize: number): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlayView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlayView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  ReleaseOverlayView(pOverlayView: Deno.PointerValue<OverlayView>): OverlayError {
    if (this.ptr === null) throw new Error("IVROverlayView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlayView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as OverlayError;
  }

  PostOverlayEvent(ulOverlayHandle: OverlayHandle, pvrEvent: Deno.PointerValue<Event>//READONLY): void {
    if (this.ptr === null) throw new Error("IVROverlayView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlayView>);
    // TODO: Implement FFI call
  }

  IsViewingPermitted(ulOverlayHandle: OverlayHandle): bool {
    if (this.ptr === null) throw new Error("IVROverlayView pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVROverlayView>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

}

export class IVRResources {
  constructor(private ptr: Deno.PointerValue<IVRResources>) {}

  LoadSharedResource(pchResourceName: string, pchBuffer: string, unBufferLen: number): number {
    if (this.ptr === null) throw new Error("IVRResources pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRResources>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetResourceFullPath(pchResourceName: string, pchResourceTypeDirectory: string, pchPathBuffer: string, unBufferLen: number): number {
    if (this.ptr === null) throw new Error("IVRResources pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRResources>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

}

export class IVRRenderModels {
  constructor(private ptr: Deno.PointerValue<IVRRenderModels>) {}

  LoadRenderModel_Async(pchRenderModelName: string, ppRenderModel: Deno.PointerValue<Deno.PointerValue<RenderModel>>): RenderModelError {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as RenderModelError;
  }

  FreeRenderModel(pRenderModel: Deno.PointerValue<RenderModel>): void {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
  }

  LoadTexture_Async(textureId: TextureID, ppTexture: Deno.PointerValue<Deno.PointerValue<RenderModel_TextureMap>>): RenderModelError {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as RenderModelError;
  }

  FreeTexture(pTexture: Deno.PointerValue<RenderModel_TextureMap>): void {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
  }

  LoadTextureD3D11_Async(textureId: TextureID, pD3D11Device: Deno.PointerValue<unknown>, ppD3D11Texture2D: Deno.PointerValue<Deno.PointerValue<unknown>>): RenderModelError {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as RenderModelError;
  }

  LoadIntoTextureD3D11_Async(textureId: TextureID, pDstTexture: Deno.PointerValue<unknown>): RenderModelError {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as RenderModelError;
  }

  FreeTextureD3D11(pD3D11Texture2D: Deno.PointerValue<unknown>): void {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
  }

  GetRenderModelName(unRenderModelIndex: number, pchRenderModelName: string, unRenderModelNameLen: number): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetRenderModelCount(): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetComponentCount(pchRenderModelName: string): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetComponentName(pchRenderModelName: string, unComponentIndex: number, pchComponentName: string, unComponentNameLen: number): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetComponentButtonMask(pchRenderModelName: string, pchComponentName: string): bigint {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bigint;
  }

  GetComponentRenderModelName(pchRenderModelName: string, pchComponentName: string, pchComponentRenderModelName: string, unComponentRenderModelNameLen: number): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetComponentStateForDevicePath(pchRenderModelName: string, pchComponentName: string, devicePath: InputValueHandle, pState: Deno.PointerValue<RenderModel_ControllerMode_State>//READONLY, pComponentState: Deno.PointerValue<RenderModel_ComponentState>): bool {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetComponentState(pchRenderModelName: string, pchComponentName: string, pControllerState: Deno.PointerValue<ControllerState>//READONLY, pState: Deno.PointerValue<RenderModel_ControllerMode_State>//READONLY, pComponentState: Deno.PointerValue<RenderModel_ComponentState>): bool {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  RenderModelHasComponent(pchRenderModelName: string, pchComponentName: string): bool {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetRenderModelThumbnailURL(pchRenderModelName: string, pchThumbnailURL: string, unThumbnailURLLen: number, peError: Deno.PointerValue<RenderModelError>): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetRenderModelOriginalPath(pchRenderModelName: string, pchOriginalPath: string, unOriginalPathLen: number, peError: Deno.PointerValue<RenderModelError>): number {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetRenderModelErrorNameFromEnum(error: RenderModelError): string {
    if (this.ptr === null) throw new Error("IVRRenderModels pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRRenderModels>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

}

export class IVRExtendedDisplay {
  constructor(private ptr: Deno.PointerValue<IVRExtendedDisplay>) {}

  GetWindowBounds(pnX: Deno.PointerValue<number>, pnY: Deno.PointerValue<number>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRExtendedDisplay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRExtendedDisplay>);
    // TODO: Implement FFI call
  }

  GetEyeOutputViewport(eEye: Eye, pnX: Deno.PointerValue<number>, pnY: Deno.PointerValue<number>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRExtendedDisplay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRExtendedDisplay>);
    // TODO: Implement FFI call
  }

  GetDXGIOutputInfo(pnAdapterIndex: Deno.PointerValue<number>, pnAdapterOutputIndex: Deno.PointerValue<number>): void {
    if (this.ptr === null) throw new Error("IVRExtendedDisplay pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRExtendedDisplay>);
    // TODO: Implement FFI call
  }

}

export class IVRSettings {
  constructor(private ptr: Deno.PointerValue<IVRSettings>) {}

  GetSettingsErrorNameFromEnum(eError: SettingsError): string {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  SetBool(pchSection: string, pchSettingsKey: string, bValue: bool, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  SetInt32(pchSection: string, pchSettingsKey: string, nValue: number, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  SetFloat(pchSection: string, pchSettingsKey: string, flValue: number, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  SetString(pchSection: string, pchSettingsKey: string, pchValue: string, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  GetBool(pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>): bool {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetInt32(pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>): number {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetFloat(pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>): number {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetString(pchSection: string, pchSettingsKey: string, pchValue: string, unValueLen: number, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  RemoveSection(pchSection: string, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

  RemoveKeyInSection(pchSection: string, pchSettingsKey: string, peError: Deno.PointerValue<SettingsError>): void {
    if (this.ptr === null) throw new Error("IVRSettings pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSettings>);
    // TODO: Implement FFI call
  }

}

export class IVRApplications {
  constructor(private ptr: Deno.PointerValue<IVRApplications>) {}

  AddApplicationManifest(pchApplicationManifestFullPath: string, bTemporary: bool): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  RemoveApplicationManifest(pchApplicationManifestFullPath: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  IsApplicationInstalled(pchAppKey: string): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetApplicationCount(): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetApplicationKeyByIndex(unApplicationIndex: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetApplicationKeyByProcessId(unProcessId: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  LaunchApplication(pchAppKey: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  LaunchTemplateApplication(pchTemplateAppKey: string, pchNewAppKey: string, pKeys: Deno.PointerValue<AppOverrideKeys>//READONLY, unKeys: number): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  LaunchApplicationFromMimeType(pchMimeType: string, pchArgs: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  LaunchDashboardOverlay(pchAppKey: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  CancelApplicationLaunch(pchAppKey: string): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  IdentifyApplication(unProcessId: number, pchAppKey: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetApplicationProcessId(pchAppKey: string): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetApplicationsErrorNameFromEnum(error: ApplicationError): string {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  GetApplicationPropertyString(pchAppKey: string, eProperty: ApplicationProperty, pchPropertyValueBuffer: string, unPropertyValueBufferLen: number, peError: Deno.PointerValue<ApplicationError>): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetApplicationPropertyBool(pchAppKey: string, eProperty: ApplicationProperty, peError: Deno.PointerValue<ApplicationError>): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetApplicationPropertyUint64(pchAppKey: string, eProperty: ApplicationProperty, peError: Deno.PointerValue<ApplicationError>): bigint {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bigint;
  }

  SetApplicationAutoLaunch(pchAppKey: string, bAutoLaunch: bool): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetApplicationAutoLaunch(pchAppKey: string): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  SetDefaultApplicationForMimeType(pchAppKey: string, pchMimeType: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetDefaultApplicationForMimeType(pchMimeType: string, pchAppKeyBuffer: string, unAppKeyBufferLen: number): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetApplicationSupportedMimeTypes(pchAppKey: string, pchMimeTypesBuffer: string, unMimeTypesBuffer: number): bool {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  GetApplicationsThatSupportMimeType(pchMimeType: string, pchAppKeysThatSupportBuffer: string, unAppKeysThatSupportBuffer: number): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetApplicationLaunchArguments(unHandle: number, pchArgs: string, unArgs: number): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetStartingApplication(pchAppKeyBuffer: string, unAppKeyBufferLen: number): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetSceneApplicationState(): SceneApplicationState {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as SceneApplicationState;
  }

  PerformApplicationPrelaunchCheck(pchAppKey: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetSceneApplicationStateNameFromEnum(state: SceneApplicationState): string {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  LaunchInternalProcess(pchBinaryPath: string, pchArguments: string, pchWorkingDirectory: string): ApplicationError {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ApplicationError;
  }

  GetCurrentSceneProcessId(): number {
    if (this.ptr === null) throw new Error("IVRApplications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRApplications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

}

export class IVRTrackedCamera {
  constructor(private ptr: Deno.PointerValue<IVRTrackedCamera>) {}

  GetCameraErrorNameFromEnum(eCameraError: TrackedCameraError): string {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  HasCamera(nDeviceIndex: TrackedDeviceIndex, pHasCamera: Deno.PointerValue<bool>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetCameraFrameSize(nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>, pnFrameBufferSize: Deno.PointerValue<number>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetCameraIntrinsics(nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, pFocalLength: Deno.PointerValue<HmdVector2>, pCenter: Deno.PointerValue<HmdVector2>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetCameraProjection(nDeviceIndex: TrackedDeviceIndex, nCameraIndex: number, eFrameType: TrackedCameraFrameType, flZNear: number, flZFar: number, pProjection: Deno.PointerValue<HmdMatrix44>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  AcquireVideoStreamingService(nDeviceIndex: TrackedDeviceIndex, pHandle: Deno.PointerValue<TrackedCameraHandle>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  ReleaseVideoStreamingService(hTrackedCamera: TrackedCameraHandle): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetVideoStreamFrameBuffer(hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pFrameBuffer: Deno.PointerValue<unknown>, nFrameBufferSize: number, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetVideoStreamTextureSize(nDeviceIndex: TrackedDeviceIndex, eFrameType: TrackedCameraFrameType, pTextureBounds: Deno.PointerValue<TextureBounds>, pnWidth: Deno.PointerValue<number>, pnHeight: Deno.PointerValue<number>): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetVideoStreamTextureD3D11(hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pD3D11DeviceOrResource: Deno.PointerValue<unknown>, ppD3D11ShaderResourceView: Deno.PointerValue<Deno.PointerValue<unknown>>, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  GetVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle, eFrameType: TrackedCameraFrameType, pglTextureId: Deno.PointerValue<glUInt>, pFrameHeader: Deno.PointerValue<CameraVideoStreamFrameHeader>, nFrameHeaderSize: number): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  ReleaseVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle, glTextureId: glUInt): TrackedCameraError {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedCameraError;
  }

  SetCameraTrackingSpace(eUniverse: TrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
  }

  GetCameraTrackingSpace(): TrackingUniverseOrigin {
    if (this.ptr === null) throw new Error("IVRTrackedCamera pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRTrackedCamera>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackingUniverseOrigin;
  }

}

export class IVRScreenshots {
  constructor(private ptr: Deno.PointerValue<IVRScreenshots>) {}

  RequestScreenshot(pOutScreenshotHandle: Deno.PointerValue<ScreenshotHandle>, type: ScreenshotType, pchPreviewFilename: string, pchVRFilename: string): ScreenshotError {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotError;
  }

  HookScreenshot(pSupportedTypes: Deno.PointerValue<ScreenshotType>//READONLY, numTypes: int): ScreenshotError {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotError;
  }

  GetScreenshotPropertyType(screenshotHandle: ScreenshotHandle, pError: Deno.PointerValue<ScreenshotError>): ScreenshotType {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotType;
  }

  GetScreenshotPropertyFilename(screenshotHandle: ScreenshotHandle, filenameType: ScreenshotPropertyFilenames, pchFilename: string, cchFilename: number, pError: Deno.PointerValue<ScreenshotError>): number {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  UpdateScreenshotProgress(screenshotHandle: ScreenshotHandle, flProgress: number): ScreenshotError {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotError;
  }

  TakeStereoScreenshot(pOutScreenshotHandle: Deno.PointerValue<ScreenshotHandle>, pchPreviewFilename: string, pchVRFilename: string): ScreenshotError {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotError;
  }

  SubmitScreenshot(screenshotHandle: ScreenshotHandle, type: ScreenshotType, pchSourcePreviewFilename: string, pchSourceVRFilename: string): ScreenshotError {
    if (this.ptr === null) throw new Error("IVRScreenshots pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRScreenshots>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as ScreenshotError;
  }

}

export class IVRDriverManager {
  constructor(private ptr: Deno.PointerValue<IVRDriverManager>) {}

  GetDriverCount(): number {
    if (this.ptr === null) throw new Error("IVRDriverManager pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDriverManager>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetDriverName(nDriver: DriverId, pchValue: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("IVRDriverManager pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDriverManager>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

  GetDriverHandle(pchDriverName: string): DriverHandle {
    if (this.ptr === null) throw new Error("IVRDriverManager pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDriverManager>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as DriverHandle;
  }

  IsEnabled(nDriver: DriverId): bool {
    if (this.ptr === null) throw new Error("IVRDriverManager pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDriverManager>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

}

export class IVRInput {
  constructor(private ptr: Deno.PointerValue<IVRInput>) {}

  SetActionManifestPath(pchActionManifestPath: string): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetActionSetHandle(pchActionSetName: string, pHandle: Deno.PointerValue<ActionSetHandle>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetActionHandle(pchActionName: string, pHandle: Deno.PointerValue<ActionHandle>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetInputSourceHandle(pchInputSourcePath: string, pHandle: Deno.PointerValue<InputValueHandle>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  UpdateActionState(pSets: Deno.PointerValue<ActiveActionSet>, unSizeOfVRSelectedActionSet_t: number, unSetCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetDigitalActionData(action: ActionHandle, pActionData: Deno.PointerValue<InputDigitalActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetAnalogActionData(action: ActionHandle, pActionData: Deno.PointerValue<InputAnalogActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetPoseActionDataRelativeToNow(action: ActionHandle, eOrigin: TrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: Deno.PointerValue<InputPoseActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetPoseActionDataForNextFrame(action: ActionHandle, eOrigin: TrackingUniverseOrigin, pActionData: Deno.PointerValue<InputPoseActionData>, unActionDataSize: number, ulRestrictToDevice: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalActionData(action: ActionHandle, pActionData: Deno.PointerValue<InputSkeletalActionData>, unActionDataSize: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetDominantHand(peDominantHand: Deno.PointerValue<TrackedControllerRole>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  SetDominantHand(eDominantHand: TrackedControllerRole): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetBoneCount(action: ActionHandle, pBoneCount: Deno.PointerValue<number>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetBoneHierarchy(action: ActionHandle, pParentIndices: Deno.PointerValue<BoneIndex>, unIndexArayCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetBoneName(action: ActionHandle, nBoneIndex: BoneIndex, pchBoneName: string, unNameBufferSize: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalReferenceTransforms(action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eReferencePose: SkeletalReferencePose, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalTrackingLevel(action: ActionHandle, pSkeletalTrackingLevel: Deno.PointerValue<SkeletalTrackingLevel>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalBoneData(action: ActionHandle, eTransformSpace: SkeletalTransformSpace, eMotionRange: SkeletalMotionRange, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalSummaryData(action: ActionHandle, eSummaryType: SummaryType, pSkeletalSummaryData: Deno.PointerValue<SkeletalSummaryData>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetSkeletalBoneDataCompressed(action: ActionHandle, eMotionRange: SkeletalMotionRange, pvCompressedData: Deno.PointerValue<unknown>, unCompressedSize: number, punRequiredCompressedSize: Deno.PointerValue<number>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  DecompressSkeletalBoneData(pvCompressedBuffer: Deno.PointerValue<unknown>//READONLY, unCompressedBufferSize: number, eTransformSpace: SkeletalTransformSpace, pTransformArray: Deno.PointerValue<BoneTransform>, unTransformArrayCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  TriggerHapticVibrationAction(action: ActionHandle, fStartSecondsFromNow: number, fDurationSeconds: number, fFrequency: number, fAmplitude: number, ulRestrictToDevice: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetActionOrigins(actionSetHandle: ActionSetHandle, digitalActionHandle: ActionHandle, originsOut: Deno.PointerValue<InputValueHandle>, originOutCount: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetOriginLocalizedName(origin: InputValueHandle, pchNameArray: string, unNameArraySize: number, unStringSectionsToInclude: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetOriginTrackedDeviceInfo(origin: InputValueHandle, pOriginInfo: Deno.PointerValue<InputOriginInfo>, unOriginInfoSize: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetActionBindingInfo(action: ActionHandle, pOriginInfo: Deno.PointerValue<InputBindingInfo>, unBindingInfoSize: number, unBindingInfoCount: number, punReturnedBindingInfoCount: Deno.PointerValue<number>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  ShowActionOrigins(actionSetHandle: ActionSetHandle, ulActionHandle: ActionHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  ShowBindingsForActionSet(pSets: Deno.PointerValue<ActiveActionSet>, unSizeOfVRSelectedActionSet_t: number, unSetCount: number, originToHighlight: InputValueHandle): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetComponentStateForBinding(pchRenderModelName: string, pchComponentName: string, pOriginInfo: Deno.PointerValue<InputBindingInfo>//READONLY, unBindingInfoSize: number, unBindingInfoCount: number, pComponentState: Deno.PointerValue<RenderModel_ComponentState>): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  IsUsingLegacyInput(): bool {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

  OpenBindingUI(pchAppKey: string, ulActionSetHandle: ActionSetHandle, ulDeviceHandle: InputValueHandle, bShowOnDesktop: bool): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

  GetBindingVariant(ulDevicePath: InputValueHandle, pchVariantArray: string, unVariantArraySize: number): InputError {
    if (this.ptr === null) throw new Error("IVRInput pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRInput>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as InputError;
  }

}

export class IVRIOBuffer {
  constructor(private ptr: Deno.PointerValue<IVRIOBuffer>) {}

  Open(pchPath: string, mode: IOBufferMode, unElementSize: number, unElements: number, pulBuffer: Deno.PointerValue<IOBufferHandle>): IOBufferError {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as IOBufferError;
  }

  Close(ulBuffer: IOBufferHandle): IOBufferError {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as IOBufferError;
  }

  Read(ulBuffer: IOBufferHandle, pDst: Deno.PointerValue<unknown>, unBytes: number, punRead: Deno.PointerValue<number>): IOBufferError {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as IOBufferError;
  }

  Write(ulBuffer: IOBufferHandle, pSrc: Deno.PointerValue<unknown>, unBytes: number): IOBufferError {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as IOBufferError;
  }

  PropertyContainer(ulBuffer: IOBufferHandle): PropertyContainerHandle {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as PropertyContainerHandle;
  }

  HasReaders(ulBuffer: IOBufferHandle): bool {
    if (this.ptr === null) throw new Error("IVRIOBuffer pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRIOBuffer>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as bool;
  }

}

export class IVRSpatialAnchors {
  constructor(private ptr: Deno.PointerValue<IVRSpatialAnchors>) {}

  CreateSpatialAnchorFromDescriptor(pchDescriptor: string, pHandleOut: Deno.PointerValue<SpatialAnchorHandle>): SpatialAnchorError {
    if (this.ptr === null) throw new Error("IVRSpatialAnchors pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSpatialAnchors>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as SpatialAnchorError;
  }

  CreateSpatialAnchorFromPose(unDeviceIndex: TrackedDeviceIndex, eOrigin: TrackingUniverseOrigin, pPose: Deno.PointerValue<SpatialAnchorPose>, pHandleOut: Deno.PointerValue<SpatialAnchorHandle>): SpatialAnchorError {
    if (this.ptr === null) throw new Error("IVRSpatialAnchors pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSpatialAnchors>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as SpatialAnchorError;
  }

  GetSpatialAnchorPose(unHandle: SpatialAnchorHandle, eOrigin: TrackingUniverseOrigin, pPoseOut: Deno.PointerValue<SpatialAnchorPose>): SpatialAnchorError {
    if (this.ptr === null) throw new Error("IVRSpatialAnchors pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSpatialAnchors>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as SpatialAnchorError;
  }

  GetSpatialAnchorDescriptor(unHandle: SpatialAnchorHandle, pchDescriptorOut: string, punDescriptorBufferLenInOut: Deno.PointerValue<number>): SpatialAnchorError {
    if (this.ptr === null) throw new Error("IVRSpatialAnchors pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRSpatialAnchors>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as SpatialAnchorError;
  }

}

export class IVRDebug {
  constructor(private ptr: Deno.PointerValue<IVRDebug>) {}

  EmitVrProfilerEvent(pchMessage: string): DebugError {
    if (this.ptr === null) throw new Error("IVRDebug pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDebug>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as DebugError;
  }

  BeginVrProfilerEvent(pHandleOut: Deno.PointerValue<VrProfilerEventHandle>): DebugError {
    if (this.ptr === null) throw new Error("IVRDebug pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDebug>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as DebugError;
  }

  FinishVrProfilerEvent(hHandle: VrProfilerEventHandle, pchMessage: string): DebugError {
    if (this.ptr === null) throw new Error("IVRDebug pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDebug>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as DebugError;
  }

  DriverDebugRequest(unDeviceIndex: TrackedDeviceIndex, pchRequest: string, pchResponseBuffer: string, unResponseBufferSize: number): number {
    if (this.ptr === null) throw new Error("IVRDebug pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRDebug>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as number;
  }

}

export class IVRNotifications {
  constructor(private ptr: Deno.PointerValue<IVRNotifications>) {}

  CreateNotification(ulOverlayHandle: OverlayHandle, ulUserValue: bigint, type: NotificationType, pchText: string, style: NotificationStyle, pImage: Deno.PointerValue<NotificationBitmap>//READONLY, pNotificationId: Deno.PointerValue<NotificationId>): NotificationError {
    if (this.ptr === null) throw new Error("IVRNotifications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRNotifications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as NotificationError;
  }

  RemoveNotification(notificationId: NotificationId): NotificationError {
    if (this.ptr === null) throw new Error("IVRNotifications pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRNotifications>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as NotificationError;
  }

}

export class IVRProperties {
  constructor(private ptr: Deno.PointerValue<IVRProperties>) {}

  ReadPropertyBatch(ulContainerHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PropertyRead>, unBatchEntryCount: number): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRProperties pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRProperties>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

  WritePropertyBatch(ulContainerHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PropertyWrite>, unBatchEntryCount: number): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRProperties pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRProperties>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

  GetPropErrorNameFromEnum(error: TrackedPropertyError): string {
    if (this.ptr === null) throw new Error("IVRProperties pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRProperties>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as string;
  }

  TrackedDeviceToPropertyContainer(nDevice: TrackedDeviceIndex): PropertyContainerHandle {
    if (this.ptr === null) throw new Error("IVRProperties pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRProperties>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as PropertyContainerHandle;
  }

}

export class IVRPaths {
  constructor(private ptr: Deno.PointerValue<IVRPaths>) {}

  ReadPathBatch(ulRootHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PathRead>, unBatchEntryCount: number): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRPaths pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRPaths>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

  WritePathBatch(ulRootHandle: PropertyContainerHandle, pBatch: Deno.PointerValue<PathWrite>, unBatchEntryCount: number): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRPaths pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRPaths>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

  StringToHandle(pHandle: Deno.PointerValue<PathHandle>, pchPath: string): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRPaths pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRPaths>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

  HandleToString(pHandle: PathHandle, pchBuffer: string, unBufferSize: number, punBufferSizeUsed: Deno.PointerValue<number>): TrackedPropertyError {
    if (this.ptr === null) throw new Error("IVRPaths pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRPaths>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as TrackedPropertyError;
  }

}

export class IVRBlockQueue {
  constructor(private ptr: Deno.PointerValue<IVRBlockQueue>) {}

  Create(pulQueueHandle: Deno.PointerValue<PropertyContainerHandle>, pchPath: string, unBlockDataSize: number, unBlockHeaderSize: number, unBlockCount: number, unFlags: number): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  Connect(pulQueueHandle: Deno.PointerValue<PropertyContainerHandle>, pchPath: string): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  Destroy(ulQueueHandle: PropertyContainerHandle): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  AcquireWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  ReleaseWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  WaitAndAcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>//READONLY, eReadType: BlockQueueReadType, unTimeoutMs: number): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  AcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle, pulBlockHandle: Deno.PointerValue<PropertyContainerHandle>, ppvBuffer: Deno.PointerValue<Deno.PointerValue<unknown>>//READONLY, eReadType: BlockQueueReadType): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  ReleaseReadOnlyBlock(ulQueueHandle: PropertyContainerHandle, ulBlockHandle: PropertyContainerHandle): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

  QueueHasReader(ulQueueHandle: PropertyContainerHandle, pbHasReaders: Deno.PointerValue<bool>): BlockQueueError {
    if (this.ptr === null) throw new Error("IVRBlockQueue pointer is null");
    const view = new Deno.UnsafePointerView(this.ptr as Deno.PointerObject<IVRBlockQueue>);
    // TODO: Implement FFI call
    // TODO: Return the result
    return null as unknown as BlockQueueError;
  }

}

//#endregion
