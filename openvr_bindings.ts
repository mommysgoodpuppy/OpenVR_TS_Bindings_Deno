// Auto-generated OpenVR bindings for Deno

//#region FFI
const openVRLib = Deno.dlopen("openvr_api", {
  VR_InitInternal: { parameters: ["pointer", "i32"], result: "pointer" },
  VR_ShutdownInternal: { parameters: [], result: "void" },
  VR_GetVRInitErrorAsEnglishDescription: { parameters: ["i32"], result: "pointer" },
  VR_GetVRInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },
  VR_GetGenericInterface: { parameters: ["pointer", "pointer"], result: "pointer" },
  VR_IsHmdPresent: { parameters: [], result: "bool" },
  VR_IsRuntimeInstalled: { parameters: [], result: "bool" },
  VR_GetStringForHmdError: { parameters: ["i32"], result: "pointer" },
  VR_GetInitToken: { parameters: [], result: "u64" },
});

export const OpenVR = {
  VR_Init: (ptr: Deno.PointerValue, applicationType: number): Deno.PointerValue => {
        return openVRLib.symbols.VR_InitInternal(ptr, applicationType);
      },

  VR_GetGenericInterface: (pchInterfaceVersion: Deno.PointerValue, EVRInitError: Deno.PointerValue): Deno.PointerValue => {
    return openVRLib.symbols.VR_GetGenericInterface(pchInterfaceVersion, EVRInitError);
  },
        VR_Shutdown: () => {
        openVRLib.symbols.VR_ShutdownInternal();
      },
};
//#endregion
//#region typedefs
export type PropertyTypeTag_t = number;
export type vrshared_uint64_t = bigint;
export type vrshared_double = number;
export type SpatialAnchorHandle_t = number;
export type glSharedTextureHandle_t = Deno.PointerValue;
export type glInt_t = number;
export type glUInt_t = number;
export type SharedTextureHandle_t = bigint;
export type DriverId_t = number;
export type TrackedDeviceIndex_t = number;
export type WebConsoleHandle_t = bigint;
export type PropertyContainerHandle_t = bigint;
export type DriverHandle_t = PropertyContainerHandle_t;
export type VRActionHandle_t = bigint;
export type VRActionSetHandle_t = bigint;
export type VRInputValueHandle_t = bigint;
export type VRComponentProperties = number;
export type VRControllerState_t = VRControllerState001_t;
export type VROverlayHandle_t = bigint;
export type BoneIndex_t = number;
export type TrackedCameraHandle_t = bigint;
export type ScreenshotHandle_t = number;
export type TextureID_t = number;
export type VRNotificationId = number;
export type IOBufferHandle_t = bigint;
export type VrProfilerEventHandle_t = bigint;
export type HmdError = EVRInitError;
export type Hmd_Eye = EVREye;
export type ColorSpace = EColorSpace;
export type HmdTrackingResult = ETrackingResult;
export type TrackedDeviceClass = ETrackedDeviceClass;
export type TrackingUniverseOrigin = ETrackingUniverseOrigin;
export type TrackedDeviceProperty = ETrackedDeviceProperty;
export type TrackedPropertyError = ETrackedPropertyError;
export type VRSubmitFlags_t = EVRSubmitFlags;
export type VRState_t = EVRState;
export type CollisionBoundsStyle_t = ECollisionBoundsStyle;
export type VROverlayError = EVROverlayError;
export type VRFirmwareError = EVRFirmwareError;
export type VRCompositorError = EVRCompositorError;
export type VRScreenshotsError = EVRScreenshotError;
export type PathHandle_t = bigint;

//#endregion
//#region enums
export enum EVREye {
  Eye_Left = 0,
  Eye_Right = 1,
}

export enum ETextureType {
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

export enum EColorSpace {
  ColorSpace_Auto = 0,
  ColorSpace_Gamma = 1,
  ColorSpace_Linear = 2,
}

export enum ETrackingResult {
  TrackingResult_Uninitialized = 1,
  TrackingResult_Calibrating_InProgress = 100,
  TrackingResult_Calibrating_OutOfRange = 101,
  TrackingResult_Running_OK = 200,
  TrackingResult_Running_OutOfRange = 201,
  TrackingResult_Fallback_RotationOnly = 300,
}

export enum ETrackedDeviceClass {
  TrackedDeviceClass_Invalid = 0,
  TrackedDeviceClass_HMD = 1,
  TrackedDeviceClass_Controller = 2,
  TrackedDeviceClass_GenericTracker = 3,
  TrackedDeviceClass_TrackingReference = 4,
  TrackedDeviceClass_DisplayRedirect = 5,
  TrackedDeviceClass_Max = 6,
}

export enum ETrackedControllerRole {
  TrackedControllerRole_Invalid = 0,
  TrackedControllerRole_LeftHand = 1,
  TrackedControllerRole_RightHand = 2,
  TrackedControllerRole_OptOut = 3,
  TrackedControllerRole_Treadmill = 4,
  TrackedControllerRole_Stylus = 5,
  TrackedControllerRole_Max = 5,
}

export enum ETrackingUniverseOrigin {
  TrackingUniverseSeated = 0,
  TrackingUniverseStanding = 1,
  TrackingUniverseRawAndUncalibrated = 2,
}

export enum EAdditionalRadioFeatures {
  AdditionalRadioFeatures_None = 0,
  AdditionalRadioFeatures_HTCLinkBox = 1,
  AdditionalRadioFeatures_InternalDongle = 2,
  AdditionalRadioFeatures_ExternalDongle = 4,
}

export enum ETrackedDeviceProperty {
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

export enum ETrackedPropertyError {
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

export enum EHmdTrackingStyle {
  HmdTrackingStyle_Unknown = 0,
  HmdTrackingStyle_Lighthouse = 1,
  HmdTrackingStyle_OutsideInCameras = 2,
  HmdTrackingStyle_InsideOutCameras = 3,
}

export enum EVRSubmitFlags {
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

export enum EVRState {
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

export enum EVREventType {
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

export enum EDeviceActivityLevel {
  k_EDeviceActivityLevel_Unknown = -1,
  k_EDeviceActivityLevel_Idle = 0,
  k_EDeviceActivityLevel_UserInteraction = 1,
  k_EDeviceActivityLevel_UserInteraction_Timeout = 2,
  k_EDeviceActivityLevel_Standby = 3,
  k_EDeviceActivityLevel_Idle_Timeout = 4,
}

export enum EVRButtonId {
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

export enum EVRMouseButton {
  VRMouseButton_Left = 1,
  VRMouseButton_Right = 2,
  VRMouseButton_Middle = 4,
}

export enum EShowUIType {
  ShowUI_ControllerBinding = 0,
  ShowUI_ManageTrackers = 1,
  ShowUI_Pairing = 3,
  ShowUI_Settings = 4,
  ShowUI_DebugCommands = 5,
  ShowUI_FullControllerBinding = 6,
  ShowUI_ManageDrivers = 7,
}

export enum EHDCPError {
  HDCPError_None = 0,
  HDCPError_LinkLost = 1,
  HDCPError_Tampered = 2,
  HDCPError_DeviceRevoked = 3,
  HDCPError_Unknown = 4,
}

export enum EVRComponentProperty {
  VRComponentProperty_IsStatic = 1,
  VRComponentProperty_IsVisible = 2,
  VRComponentProperty_IsTouched = 4,
  VRComponentProperty_IsPressed = 8,
  VRComponentProperty_IsScrolled = 16,
  VRComponentProperty_IsHighlighted = 32,
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

export enum EVRSpatialAnchorError {
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

export enum EHiddenAreaMeshType {
  k_eHiddenAreaMesh_Standard = 0,
  k_eHiddenAreaMesh_Inverse = 1,
  k_eHiddenAreaMesh_LineLoop = 2,
  k_eHiddenAreaMesh_Max = 3,
}

export enum EVRControllerAxisType {
  k_eControllerAxis_None = 0,
  k_eControllerAxis_TrackPad = 1,
  k_eControllerAxis_Joystick = 2,
  k_eControllerAxis_Trigger = 3,
}

export enum EVRControllerEventOutputType {
  ControllerEventOutput_OSEvents = 0,
  ControllerEventOutput_VREvents = 1,
}

export enum ECollisionBoundsStyle {
  COLLISION_BOUNDS_STYLE_BEGINNER = 0,
  COLLISION_BOUNDS_STYLE_INTERMEDIATE = 1,
  COLLISION_BOUNDS_STYLE_SQUARES = 2,
  COLLISION_BOUNDS_STYLE_ADVANCED = 3,
  COLLISION_BOUNDS_STYLE_NONE = 4,
  COLLISION_BOUNDS_STYLE_COUNT = 5,
}

export enum EVROverlayError {
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

export enum EVRApplicationType {
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

export enum EVRFirmwareError {
  VRFirmwareError_None = 0,
  VRFirmwareError_Success = 1,
  VRFirmwareError_Fail = 2,
}

export enum EVRNotificationError {
  VRNotificationError_OK = 0,
  VRNotificationError_InvalidNotificationId = 100,
  VRNotificationError_NotificationQueueFull = 101,
  VRNotificationError_InvalidOverlayHandle = 102,
  VRNotificationError_SystemWithUserValueAlreadyExists = 103,
  VRNotificationError_ServiceUnavailable = 104,
}

export enum EVRSkeletalMotionRange {
  VRSkeletalMotionRange_WithController = 0,
  VRSkeletalMotionRange_WithoutController = 1,
}

export enum EVRSkeletalTrackingLevel {
  VRSkeletalTracking_Estimated = 0,
  VRSkeletalTracking_Partial = 1,
  VRSkeletalTracking_Full = 2,
  VRSkeletalTrackingLevel_Count = 3,
  VRSkeletalTrackingLevel_Max = 2,
}

export enum EVRInitError {
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

export enum EVRScreenshotType {
  VRScreenshotType_None = 0,
  VRScreenshotType_Mono = 1,
  VRScreenshotType_Stereo = 2,
  VRScreenshotType_Cubemap = 3,
  VRScreenshotType_MonoPanorama = 4,
  VRScreenshotType_StereoPanorama = 5,
}

export enum EVRScreenshotPropertyFilenames {
  VRScreenshotPropertyFilenames_Preview = 0,
  VRScreenshotPropertyFilenames_VR = 1,
}

export enum EVRTrackedCameraError {
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

export enum EVRTrackedCameraFrameLayout {
  EVRTrackedCameraFrameLayout_Mono = 1,
  EVRTrackedCameraFrameLayout_Stereo = 2,
  EVRTrackedCameraFrameLayout_VerticalLayout = 16,
  EVRTrackedCameraFrameLayout_HorizontalLayout = 32,
}

export enum EVRTrackedCameraFrameType {
  VRTrackedCameraFrameType_Distorted = 0,
  VRTrackedCameraFrameType_Undistorted = 1,
  VRTrackedCameraFrameType_MaximumUndistorted = 2,
  MAX_CAMERA_FRAME_TYPES = 3,
}

export enum EVRDistortionFunctionType {
  VRDistortionFunctionType_None = 0,
  VRDistortionFunctionType_FTheta = 1,
  VRDistortionFunctionType_Extended_FTheta = 2,
  MAX_DISTORTION_FUNCTION_TYPES = 3,
}

export enum EVSync {
  VSync_None = 0,
  VSync_WaitRender = 1,
  VSync_NoWaitRender = 2,
}

export enum EVRMuraCorrectionMode {
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

export enum EVRApplicationError {
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

export enum EVRApplicationProperty {
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

export enum EVRSceneApplicationState {
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

export enum EChaperoneConfigFile {
  EChaperoneConfigFile_Live = 1,
  EChaperoneConfigFile_Temp = 2,
}

export enum EChaperoneImportFlags {
  EChaperoneImport_BoundsOnly = 1,
}

export enum EVRCompositorError {
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

export enum EVRCompositorTimingMode {
  VRCompositorTimingMode_Implicit = 0,
  VRCompositorTimingMode_Explicit_RuntimePerformsPostPresentHandoff = 1,
  VRCompositorTimingMode_Explicit_ApplicationPerformsPostPresentHandoff = 2,
}

export enum VROverlayInputMethod {
  VROverlayInputMethod_None = 0,
  VROverlayInputMethod_Mouse = 1,
}

export enum VROverlayTransformType {
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

export enum VROverlayFlags {
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

export enum VRMessageOverlayResponse {
  VRMessageOverlayResponse_ButtonPress_0 = 0,
  VRMessageOverlayResponse_ButtonPress_1 = 1,
  VRMessageOverlayResponse_ButtonPress_2 = 2,
  VRMessageOverlayResponse_ButtonPress_3 = 3,
  VRMessageOverlayResponse_CouldntFindSystemOverlay = 4,
  VRMessageOverlayResponse_CouldntFindOrCreateClientOverlay = 5,
  VRMessageOverlayResponse_ApplicationQuit = 6,
}

export enum EGamepadTextInputMode {
  k_EGamepadTextInputModeNormal = 0,
  k_EGamepadTextInputModePassword = 1,
  k_EGamepadTextInputModeSubmit = 2,
}

export enum EGamepadTextInputLineMode {
  k_EGamepadTextInputLineModeSingleLine = 0,
  k_EGamepadTextInputLineModeMultipleLines = 1,
}

export enum EVROverlayIntersectionMaskPrimitiveType {
  OverlayIntersectionPrimitiveType_Rectangle = 0,
  OverlayIntersectionPrimitiveType_Circle = 1,
}

export enum EKeyboardFlags {
  KeyboardFlag_Minimal = 1,
  KeyboardFlag_Modal = 2,
  KeyboardFlag_ShowArrowKeys = 4,
  KeyboardFlag_HideDoneKey = 8,
}

export enum EDeviceType {
  DeviceType_Invalid = -1,
  DeviceType_DirectX11 = 0,
  DeviceType_Vulkan = 1,
}

export enum HeadsetViewMode_t {
  HeadsetViewMode_Left = 0,
  HeadsetViewMode_Right = 1,
  HeadsetViewMode_Both = 2,
}

export enum EVRRenderModelError {
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

export enum EVRRenderModelTextureFormat {
  VRRenderModelTextureFormat_RGBA8_SRGB = 0,
  VRRenderModelTextureFormat_BC2 = 1,
  VRRenderModelTextureFormat_BC4 = 2,
  VRRenderModelTextureFormat_BC7 = 3,
  VRRenderModelTextureFormat_BC7_SRGB = 4,
  VRRenderModelTextureFormat_RGBA16_FLOAT = 5,
}

export enum EVRNotificationType {
  EVRNotificationType_Transient = 0,
  EVRNotificationType_Persistent = 1,
  EVRNotificationType_Transient_SystemWithUserValue = 2,
}

export enum EVRNotificationStyle {
  EVRNotificationStyle_None = 0,
  EVRNotificationStyle_Application = 100,
  EVRNotificationStyle_Contact_Disabled = 200,
  EVRNotificationStyle_Contact_Enabled = 201,
  EVRNotificationStyle_Contact_Active = 202,
}

export enum EVRSettingsError {
  VRSettingsError_None = 0,
  VRSettingsError_IPCFailed = 1,
  VRSettingsError_WriteFailed = 2,
  VRSettingsError_ReadFailed = 3,
  VRSettingsError_JsonParseFailed = 4,
  VRSettingsError_UnsetSettingHasNoDefault = 5,
  VRSettingsError_AccessDenied = 6,
}

export enum EVRScreenshotError {
  VRScreenshotError_None = 0,
  VRScreenshotError_RequestFailed = 1,
  VRScreenshotError_IncompatibleVersion = 100,
  VRScreenshotError_NotFound = 101,
  VRScreenshotError_BufferTooSmall = 102,
  VRScreenshotError_ScreenshotAlreadyInProgress = 108,
}

export enum EVRSkeletalTransformSpace {
  VRSkeletalTransformSpace_Model = 0,
  VRSkeletalTransformSpace_Parent = 1,
}

export enum EVRSkeletalReferencePose {
  VRSkeletalReferencePose_BindPose = 0,
  VRSkeletalReferencePose_OpenHand = 1,
  VRSkeletalReferencePose_Fist = 2,
  VRSkeletalReferencePose_GripLimit = 3,
}

export enum EVRFinger {
  VRFinger_Thumb = 0,
  VRFinger_Index = 1,
  VRFinger_Middle = 2,
  VRFinger_Ring = 3,
  VRFinger_Pinky = 4,
  VRFinger_Count = 5,
}

export enum EVRFingerSplay {
  VRFingerSplay_Thumb_Index = 0,
  VRFingerSplay_Index_Middle = 1,
  VRFingerSplay_Middle_Ring = 2,
  VRFingerSplay_Ring_Pinky = 3,
  VRFingerSplay_Count = 4,
}

export enum EVRSummaryType {
  VRSummaryType_FromAnimation = 0,
  VRSummaryType_FromDevice = 1,
}

export enum EVRInputFilterCancelType {
  VRInputFilterCancel_Timers = 0,
  VRInputFilterCancel_Momentum = 1,
}

export enum EVRInputStringBits {
  VRInputString_Hand = 1,
  VRInputString_ControllerType = 2,
  VRInputString_InputSource = 4,
  VRInputString_All = -1,
}

export enum EIOBufferError {
  IOBuffer_Success = 0,
  IOBuffer_OperationFailed = 100,
  IOBuffer_InvalidHandle = 101,
  IOBuffer_InvalidArgument = 102,
  IOBuffer_PathExists = 103,
  IOBuffer_PathDoesNotExist = 104,
  IOBuffer_Permission = 105,
}

export enum EIOBufferMode {
  IOBufferMode_Read = 1,
  IOBufferMode_Write = 2,
  IOBufferMode_Create = 512,
}

export enum EVRDebugError {
  VRDebugError_Success = 0,
  VRDebugError_BadParameter = 1,
}

export enum EPropertyWriteType {
  PropertyWrite_Set = 0,
  PropertyWrite_Erase = 1,
  PropertyWrite_SetError = 2,
}

export enum EBlockQueueError {
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

export enum EBlockQueueReadType {
  BlockQueueRead_Latest = 0,
  BlockQueueRead_New = 1,
  BlockQueueRead_Next = 2,
}

export enum EBlockQueueCreationFlag {
  BlockQueueFlag_OwnerIsReader = 1,
}

//#endregion
//#region consts
export const k_nDriverNone: number = 4294967295 >>> 0;
export const k_unMaxDriverDebugResponseSize: number = 32768 >>> 0;
export const k_unTrackedDeviceIndex_Hmd: number = 0 >>> 0;
export const k_unMaxTrackedDeviceCount: number = 64 >>> 0;
export const k_unTrackedDeviceIndexOther: number = 4294967294 >>> 0;
export const k_unTrackedDeviceIndexInvalid: number = 4294967295 >>> 0;
export const k_ulInvalidPropertyContainer: bigint = 0n;
export const k_unInvalidPropertyTag: number = 0;
export const k_ulInvalidDriverHandle: bigint = 0n;
export const k_unFloatPropertyTag: number = 1;
export const k_unInt32PropertyTag: number = 2;
export const k_unUint64PropertyTag: number = 3;
export const k_unBoolPropertyTag: number = 4;
export const k_unStringPropertyTag: number = 5;
export const k_unErrorPropertyTag: number = 6;
export const k_unDoublePropertyTag: number = 7;
export const k_unHmdMatrix34PropertyTag: number = 20;
export const k_unHmdMatrix44PropertyTag: number = 21;
export const k_unHmdVector3PropertyTag: number = 22;
export const k_unHmdVector4PropertyTag: number = 23;
export const k_unHmdVector2PropertyTag: number = 24;
export const k_unHmdQuadPropertyTag: number = 25;
export const k_unHiddenAreaPropertyTag: number = 30;
export const k_unPathHandleInfoTag: number = 31;
export const k_unActionPropertyTag: number = 32;
export const k_unInputValuePropertyTag: number = 33;
export const k_unWildcardPropertyTag: number = 34;
export const k_unHapticVibrationPropertyTag: number = 35;
export const k_unSkeletonPropertyTag: number = 36;
export const k_unSpatialAnchorPosePropertyTag: number = 40;
export const k_unJsonPropertyTag: number = 41;
export const k_unActiveActionSetPropertyTag: number = 42;
export const k_unOpenVRInternalReserved_Start: number = 1000;
export const k_unOpenVRInternalReserved_End: number = 10000;
export const k_unMaxPropertyStringSize: number = 32768 >>> 0;
export const k_ulInvalidActionHandle: bigint = 0n;
export const k_ulInvalidActionSetHandle: bigint = 0n;
export const k_ulInvalidInputValueHandle: bigint = 0n;
export const k_unControllerStateAxisCount: number = 5 >>> 0;
export const k_ulOverlayHandleInvalid: bigint = 0n;
export const k_unMaxDistortionFunctionParameters: number = 8 >>> 0;
export const k_unScreenshotHandleInvalid: number = 0 >>> 0;
export const IVRSystem_Version: string = "IVRSystem_022";
export const IVRExtendedDisplay_Version: string = "IVRExtendedDisplay_001";
export const IVRTrackedCamera_Version: string = "IVRTrackedCamera_006";
export const k_unMaxApplicationKeyLength: number = 128 >>> 0;
export const k_pch_MimeType_HomeApp: string = "vr/home";
export const k_pch_MimeType_GameTheater: string = "vr/game_theater";
export const IVRApplications_Version: string = "IVRApplications_007";
export const IVRChaperone_Version: string = "IVRChaperone_004";
export const IVRChaperoneSetup_Version: string = "IVRChaperoneSetup_006";
export const IVRCompositor_Version: string = "IVRCompositor_028";
export const k_unVROverlayMaxKeyLength: number = 128 >>> 0;
export const k_unVROverlayMaxNameLength: number = 128 >>> 0;
export const k_unMaxOverlayCount: number = 128 >>> 0;
export const k_unMaxOverlayIntersectionMaskPrimitivesCount: number = 32 >>> 0;
export const IVROverlay_Version: string = "IVROverlay_027";
export const IVROverlayView_Version: string = "IVROverlayView_003";
export const k_unHeadsetViewMaxWidth: number = 3840 >>> 0;
export const k_unHeadsetViewMaxHeight: number = 2160 >>> 0;
export const k_pchHeadsetViewOverlayKey: string = "system.HeadsetView";
export const IVRHeadsetView_Version: string = "IVRHeadsetView_001";
export const k_pch_Controller_Component_GDC2015: string = "gdc2015";
export const k_pch_Controller_Component_Base: string = "base";
export const k_pch_Controller_Component_Tip: string = "tip";
export const k_pch_Controller_Component_OpenXR_Aim: string = "openxr_aim";
export const k_pch_Controller_Component_HandGrip: string = "handgrip";
export const k_pch_Controller_Component_OpenXR_Grip: string = "openxr_grip";
export const k_pch_Controller_Component_OpenXR_HandModel: string = "openxr_handmodel";
export const k_pch_Controller_Component_Status: string = "status";
export const IVRRenderModels_Version: string = "IVRRenderModels_006";
export const k_unNotificationTextMaxSize: number = 256 >>> 0;
export const IVRNotifications_Version: string = "IVRNotifications_002";
export const k_unMaxSettingsKeyLength: number = 128 >>> 0;
export const IVRSettings_Version: string = "IVRSettings_003";
export const k_pch_SteamVR_Section: string = "steamvr";
export const k_pch_SteamVR_RequireHmd_String: string = "requireHmd";
export const k_pch_SteamVR_ForcedDriverKey_String: string = "forcedDriver";
export const k_pch_SteamVR_ForcedHmdKey_String: string = "forcedHmd";
export const k_pch_SteamVR_DisplayDebug_Bool: string = "displayDebug";
export const k_pch_SteamVR_DebugProcessPipe_String: string = "debugProcessPipe";
export const k_pch_SteamVR_DisplayDebugX_Int32: string = "displayDebugX";
export const k_pch_SteamVR_DisplayDebugY_Int32: string = "displayDebugY";
export const k_pch_SteamVR_SendSystemButtonToAllApps_Bool: string = "sendSystemButtonToAllApps";
export const k_pch_SteamVR_LogLevel_Int32: string = "loglevel";
export const k_pch_SteamVR_IPD_Float: string = "ipd";
export const k_pch_SteamVR_Background_String: string = "background";
export const k_pch_SteamVR_BackgroundUseDomeProjection_Bool: string = "backgroundUseDomeProjection";
export const k_pch_SteamVR_BackgroundCameraHeight_Float: string = "backgroundCameraHeight";
export const k_pch_SteamVR_BackgroundDomeRadius_Float: string = "backgroundDomeRadius";
export const k_pch_SteamVR_GridColor_String: string = "gridColor";
export const k_pch_SteamVR_PlayAreaColor_String: string = "playAreaColor";
export const k_pch_SteamVR_TrackingLossColor_String: string = "trackingLossColor";
export const k_pch_SteamVR_ShowStage_Bool: string = "showStage";
export const k_pch_SteamVR_DrawTrackingReferences_Bool: string = "drawTrackingReferences";
export const k_pch_SteamVR_ActivateMultipleDrivers_Bool: string = "activateMultipleDrivers";
export const k_pch_SteamVR_UsingSpeakers_Bool: string = "usingSpeakers";
export const k_pch_SteamVR_SpeakersForwardYawOffsetDegrees_Float: string = "speakersForwardYawOffsetDegrees";
export const k_pch_SteamVR_BaseStationPowerManagement_Int32: string = "basestationPowerManagement";
export const k_pch_SteamVR_ShowBaseStationPowerManagementTip_Int32: string = "ShowBaseStationPowerManagementTip";
export const k_pch_SteamVR_NeverKillProcesses_Bool: string = "neverKillProcesses";
export const k_pch_SteamVR_SupersampleScale_Float: string = "supersampleScale";
export const k_pch_SteamVR_MaxRecommendedResolution_Int32: string = "maxRecommendedResolution";
export const k_pch_SteamVR_MotionSmoothing_Bool: string = "motionSmoothing";
export const k_pch_SteamVR_MotionSmoothingOverride_Int32: string = "motionSmoothingOverride";
export const k_pch_SteamVR_FramesToThrottle_Int32: string = "framesToThrottle";
export const k_pch_SteamVR_AdditionalFramesToPredict_Int32: string = "additionalFramesToPredict";
export const k_pch_SteamVR_WorldScale_Float: string = "worldScale";
export const k_pch_SteamVR_FovScale_Int32: string = "fovScale";
export const k_pch_SteamVR_FovScaleLetterboxed_Bool: string = "fovScaleLetterboxed";
export const k_pch_SteamVR_DisableAsyncReprojection_Bool: string = "disableAsync";
export const k_pch_SteamVR_ForceFadeOnBadTracking_Bool: string = "forceFadeOnBadTracking";
export const k_pch_SteamVR_DefaultMirrorView_Int32: string = "mirrorView";
export const k_pch_SteamVR_ShowLegacyMirrorView_Bool: string = "showLegacyMirrorView";
export const k_pch_SteamVR_MirrorViewVisibility_Bool: string = "showMirrorView";
export const k_pch_SteamVR_MirrorViewDisplayMode_Int32: string = "mirrorViewDisplayMode";
export const k_pch_SteamVR_MirrorViewEye_Int32: string = "mirrorViewEye";
export const k_pch_SteamVR_MirrorViewGeometry_String: string = "mirrorViewGeometry";
export const k_pch_SteamVR_MirrorViewGeometryMaximized_String: string = "mirrorViewGeometryMaximized";
export const k_pch_SteamVR_PerfGraphVisibility_Bool: string = "showPerfGraph";
export const k_pch_SteamVR_StartMonitorFromAppLaunch: string = "startMonitorFromAppLaunch";
export const k_pch_SteamVR_StartCompositorFromAppLaunch_Bool: string = "startCompositorFromAppLaunch";
export const k_pch_SteamVR_StartDashboardFromAppLaunch_Bool: string = "startDashboardFromAppLaunch";
export const k_pch_SteamVR_StartOverlayAppsFromDashboard_Bool: string = "startOverlayAppsFromDashboard";
export const k_pch_SteamVR_EnableHomeApp: string = "enableHomeApp";
export const k_pch_SteamVR_CycleBackgroundImageTimeSec_Int32: string = "CycleBackgroundImageTimeSec";
export const k_pch_SteamVR_RetailDemo_Bool: string = "retailDemo";
export const k_pch_SteamVR_IpdOffset_Float: string = "ipdOffset";
export const k_pch_SteamVR_AllowSupersampleFiltering_Bool: string = "allowSupersampleFiltering";
export const k_pch_SteamVR_SupersampleManualOverride_Bool: string = "supersampleManualOverride";
export const k_pch_SteamVR_EnableLinuxVulkanAsync_Bool: string = "enableLinuxVulkanAsync";
export const k_pch_SteamVR_AllowDisplayLockedMode_Bool: string = "allowDisplayLockedMode";
export const k_pch_SteamVR_HaveStartedTutorialForNativeChaperoneDriver_Bool: string = "haveStartedTutorialForNativeChaperoneDriver";
export const k_pch_SteamVR_ForceWindows32bitVRMonitor: string = "forceWindows32BitVRMonitor";
export const k_pch_SteamVR_DebugInputBinding: string = "debugInputBinding";
export const k_pch_SteamVR_DoNotFadeToGrid: string = "doNotFadeToGrid";
export const k_pch_SteamVR_EnableSharedResourceJournaling: string = "enableSharedResourceJournaling";
export const k_pch_SteamVR_EnableSafeMode: string = "enableSafeMode";
export const k_pch_SteamVR_PreferredRefreshRate: string = "preferredRefreshRate";
export const k_pch_SteamVR_LastVersionNotice: string = "lastVersionNotice";
export const k_pch_SteamVR_LastVersionNoticeDate: string = "lastVersionNoticeDate";
export const k_pch_SteamVR_HmdDisplayColorGainR_Float: string = "hmdDisplayColorGainR";
export const k_pch_SteamVR_HmdDisplayColorGainG_Float: string = "hmdDisplayColorGainG";
export const k_pch_SteamVR_HmdDisplayColorGainB_Float: string = "hmdDisplayColorGainB";
export const k_pch_SteamVR_CustomIconStyle_String: string = "customIconStyle";
export const k_pch_SteamVR_CustomOffIconStyle_String: string = "customOffIconStyle";
export const k_pch_SteamVR_CustomIconForceUpdate_String: string = "customIconForceUpdate";
export const k_pch_SteamVR_AllowGlobalActionSetPriority: string = "globalActionSetPriority";
export const k_pch_SteamVR_OverlayRenderQuality: string = "overlayRenderQuality_2";
export const k_pch_SteamVR_BlockOculusSDKOnOpenVRLaunchOption_Bool: string = "blockOculusSDKOnOpenVRLaunchOption";
export const k_pch_SteamVR_BlockOculusSDKOnAllLaunches_Bool: string = "blockOculusSDKOnAllLaunches";
export const k_pch_SteamVR_HDCPLegacyCompatibility_Bool: string = "hdcp14legacyCompatibility";
export const k_pch_SteamVR_DisplayPortTrainingMode_Int: string = "displayPortTrainingMode";
export const k_pch_SteamVR_UsePrism_Bool: string = "usePrism";
export const k_pch_SteamVR_AllowFallbackMirrorWindowLinux_Bool: string = "allowFallbackMirrorWindowLinux";
export const k_pch_OpenXR_Section: string = "openxr";
export const k_pch_OpenXR_MetaUnityPluginCompatibility_Int32: string = "metaUnityPluginCompatibility";
export const k_pch_DirectMode_Section: string = "direct_mode";
export const k_pch_DirectMode_Enable_Bool: string = "enable";
export const k_pch_DirectMode_Count_Int32: string = "count";
export const k_pch_DirectMode_EdidVid_Int32: string = "edidVid";
export const k_pch_DirectMode_EdidPid_Int32: string = "edidPid";
export const k_pch_Lighthouse_Section: string = "driver_lighthouse";
export const k_pch_Lighthouse_DisableIMU_Bool: string = "disableimu";
export const k_pch_Lighthouse_DisableIMUExceptHMD_Bool: string = "disableimuexcepthmd";
export const k_pch_Lighthouse_UseDisambiguation_String: string = "usedisambiguation";
export const k_pch_Lighthouse_DisambiguationDebug_Int32: string = "disambiguationdebug";
export const k_pch_Lighthouse_PrimaryBasestation_Int32: string = "primarybasestation";
export const k_pch_Lighthouse_DBHistory_Bool: string = "dbhistory";
export const k_pch_Lighthouse_EnableBluetooth_Bool: string = "enableBluetooth";
export const k_pch_Lighthouse_PowerManagedBaseStations_String: string = "PowerManagedBaseStations";
export const k_pch_Lighthouse_PowerManagedBaseStations2_String: string = "PowerManagedBaseStations2";
export const k_pch_Lighthouse_InactivityTimeoutForBaseStations_Int32: string = "InactivityTimeoutForBaseStations";
export const k_pch_Lighthouse_EnableImuFallback_Bool: string = "enableImuFallback";
export const k_pch_Null_Section: string = "driver_null";
export const k_pch_Null_SerialNumber_String: string = "serialNumber";
export const k_pch_Null_ModelNumber_String: string = "modelNumber";
export const k_pch_Null_WindowX_Int32: string = "windowX";
export const k_pch_Null_WindowY_Int32: string = "windowY";
export const k_pch_Null_WindowWidth_Int32: string = "windowWidth";
export const k_pch_Null_WindowHeight_Int32: string = "windowHeight";
export const k_pch_Null_RenderWidth_Int32: string = "renderWidth";
export const k_pch_Null_RenderHeight_Int32: string = "renderHeight";
export const k_pch_Null_SecondsFromVsyncToPhotons_Float: string = "secondsFromVsyncToPhotons";
export const k_pch_Null_DisplayFrequency_Float: string = "displayFrequency";
export const k_pch_WindowsMR_Section: string = "driver_holographic";
export const k_pch_UserInterface_Section: string = "userinterface";
export const k_pch_UserInterface_StatusAlwaysOnTop_Bool: string = "StatusAlwaysOnTop";
export const k_pch_UserInterface_MinimizeToTray_Bool: string = "MinimizeToTray";
export const k_pch_UserInterface_HidePopupsWhenStatusMinimized_Bool: string = "HidePopupsWhenStatusMinimized";
export const k_pch_UserInterface_Screenshots_Bool: string = "screenshots";
export const k_pch_UserInterface_ScreenshotType_Int: string = "screenshotType";
export const k_pch_Notifications_Section: string = "notifications";
export const k_pch_Notifications_DoNotDisturb_Bool: string = "DoNotDisturb";
export const k_pch_Keyboard_Section: string = "keyboard";
export const k_pch_Keyboard_TutorialCompletions: string = "TutorialCompletions";
export const k_pch_Keyboard_ScaleX: string = "ScaleX";
export const k_pch_Keyboard_ScaleY: string = "ScaleY";
export const k_pch_Keyboard_OffsetLeftX: string = "OffsetLeftX";
export const k_pch_Keyboard_OffsetRightX: string = "OffsetRightX";
export const k_pch_Keyboard_OffsetY: string = "OffsetY";
export const k_pch_Keyboard_Smoothing: string = "Smoothing";
export const k_pch_Perf_Section: string = "perfcheck";
export const k_pch_Perf_PerfGraphInHMD_Bool: string = "perfGraphInHMD";
export const k_pch_Perf_AllowTimingStore_Bool: string = "allowTimingStore";
export const k_pch_Perf_SaveTimingsOnExit_Bool: string = "saveTimingsOnExit";
export const k_pch_Perf_TestData_Float: string = "perfTestData";
export const k_pch_Perf_GPUProfiling_Bool: string = "GPUProfiling";
export const k_pch_Perf_GpuBusMonitoring_Bool: string = "gpuBusMonitoring";
export const k_pch_CollisionBounds_Section: string = "collisionBounds";
export const k_pch_CollisionBounds_Style_Int32: string = "CollisionBoundsStyle";
export const k_pch_CollisionBounds_GroundPerimeterOn_Bool: string = "CollisionBoundsGroundPerimeterOn";
export const k_pch_CollisionBounds_CenterMarkerOn_Bool: string = "CollisionBoundsCenterMarkerOn";
export const k_pch_CollisionBounds_PlaySpaceOn_Bool: string = "CollisionBoundsPlaySpaceOn";
export const k_pch_CollisionBounds_FadeDistance_Float: string = "CollisionBoundsFadeDistance";
export const k_pch_CollisionBounds_WallHeight_Float: string = "CollisionBoundsWallHeight";
export const k_pch_CollisionBounds_ColorGammaR_Int32: string = "CollisionBoundsColorGammaR";
export const k_pch_CollisionBounds_ColorGammaG_Int32: string = "CollisionBoundsColorGammaG";
export const k_pch_CollisionBounds_ColorGammaB_Int32: string = "CollisionBoundsColorGammaB";
export const k_pch_CollisionBounds_ColorGammaA_Int32: string = "CollisionBoundsColorGammaA";
export const k_pch_CollisionBounds_EnableDriverImport: string = "enableDriverBoundsImport";
export const k_pch_Camera_Section: string = "camera";
export const k_pch_Camera_EnableCamera_Bool: string = "enableCamera";
export const k_pch_Camera_ShowOnController_Bool: string = "showOnController";
export const k_pch_Camera_EnableCameraForCollisionBounds_Bool: string = "enableCameraForCollisionBounds";
export const k_pch_Camera_RoomView_Int32: string = "roomView";
export const k_pch_Camera_BoundsColorGammaR_Int32: string = "cameraBoundsColorGammaR";
export const k_pch_Camera_BoundsColorGammaG_Int32: string = "cameraBoundsColorGammaG";
export const k_pch_Camera_BoundsColorGammaB_Int32: string = "cameraBoundsColorGammaB";
export const k_pch_Camera_BoundsColorGammaA_Int32: string = "cameraBoundsColorGammaA";
export const k_pch_Camera_BoundsStrength_Int32: string = "cameraBoundsStrength";
export const k_pch_Camera_RoomViewStyle_Int32: string = "roomViewStyle";
export const k_pch_audio_Section: string = "audio";
export const k_pch_audio_SetOsDefaultPlaybackDevice_Bool: string = "setOsDefaultPlaybackDevice";
export const k_pch_audio_EnablePlaybackDeviceOverride_Bool: string = "enablePlaybackDeviceOverride";
export const k_pch_audio_PlaybackDeviceOverride_String: string = "playbackDeviceOverride";
export const k_pch_audio_PlaybackDeviceOverrideName_String: string = "playbackDeviceOverrideName";
export const k_pch_audio_SetOsDefaultRecordingDevice_Bool: string = "setOsDefaultRecordingDevice";
export const k_pch_audio_EnableRecordingDeviceOverride_Bool: string = "enableRecordingDeviceOverride";
export const k_pch_audio_RecordingDeviceOverride_String: string = "recordingDeviceOverride";
export const k_pch_audio_RecordingDeviceOverrideName_String: string = "recordingDeviceOverrideName";
export const k_pch_audio_EnablePlaybackMirror_Bool: string = "enablePlaybackMirror";
export const k_pch_audio_PlaybackMirrorDevice_String: string = "playbackMirrorDevice";
export const k_pch_audio_PlaybackMirrorDeviceName_String: string = "playbackMirrorDeviceName";
export const k_pch_audio_OldPlaybackMirrorDevice_String: string = "onPlaybackMirrorDevice";
export const k_pch_audio_ActiveMirrorDevice_String: string = "activePlaybackMirrorDevice";
export const k_pch_audio_EnablePlaybackMirrorIndependentVolume_Bool: string = "enablePlaybackMirrorIndependentVolume";
export const k_pch_audio_LastHmdPlaybackDeviceId_String: string = "lastHmdPlaybackDeviceId";
export const k_pch_audio_VIVEHDMIGain: string = "viveHDMIGain";
export const k_pch_audio_DualSpeakerAndJackOutput_Bool: string = "dualSpeakerAndJackOutput";
export const k_pch_audio_MuteMicMonitor_Bool: string = "muteMicMonitor";
export const k_pch_Power_Section: string = "power";
export const k_pch_Power_PowerOffOnExit_Bool: string = "powerOffOnExit";
export const k_pch_Power_TurnOffScreensTimeout_Float: string = "turnOffScreensTimeout";
export const k_pch_Power_TurnOffControllersTimeout_Float: string = "turnOffControllersTimeout";
export const k_pch_Power_ReturnToWatchdogTimeout_Float: string = "returnToWatchdogTimeout";
export const k_pch_Power_AutoLaunchSteamVROnButtonPress: string = "autoLaunchSteamVROnButtonPress";
export const k_pch_Power_PauseCompositorOnStandby_Bool: string = "pauseCompositorOnStandby";
export const k_pch_Dashboard_Section: string = "dashboard";
export const k_pch_Dashboard_EnableDashboard_Bool: string = "enableDashboard";
export const k_pch_Dashboard_ArcadeMode_Bool: string = "arcadeMode";
export const k_pch_Dashboard_Position: string = "position";
export const k_pch_Dashboard_DesktopScale: string = "desktopScale";
export const k_pch_Dashboard_DashboardScale: string = "dashboardScale";
export const k_pch_Dashboard_UseStandaloneSystemLayer: string = "standaloneSystemLayer";
export const k_pch_Dashboard_StickyDashboard: string = "stickyDashboard";
export const k_pch_Dashboard_AllowSteamOverlays_Bool: string = "allowSteamOverlays";
export const k_pch_Dashboard_AllowVRGamepadUI_Bool: string = "allowVRGamepadUI";
export const k_pch_Dashboard_AllowVRGamepadUIViaGamescope_Bool: string = "allowVRGamepadUIViaGamescope";
export const k_pch_Dashboard_SteamMatchesHMDFramerate: string = "steamMatchesHMDFramerate";
export const k_pch_modelskin_Section: string = "modelskins";
export const k_pch_Driver_Enable_Bool: string = "enable";
export const k_pch_Driver_BlockedBySafemode_Bool: string = "blocked_by_safe_mode";
export const k_pch_Driver_LoadPriority_Int32: string = "loadPriority";
export const k_pch_WebInterface_Section: string = "WebInterface";
export const k_pch_VRWebHelper_Section: string = "VRWebHelper";
export const k_pch_VRWebHelper_DebuggerEnabled_Bool: string = "DebuggerEnabled";
export const k_pch_VRWebHelper_DebuggerPort_Int32: string = "DebuggerPort";
export const k_pch_TrackingOverride_Section: string = "TrackingOverrides";
export const k_pch_App_BindingAutosaveURLSuffix_String: string = "AutosaveURL";
export const k_pch_App_BindingLegacyAPISuffix_String: string = "_legacy";
export const k_pch_App_BindingSteamVRInputAPISuffix_String: string = "_steamvrinput";
export const k_pch_App_BindingOpenXRAPISuffix_String: string = "_openxr";
export const k_pch_App_BindingCurrentURLSuffix_String: string = "CurrentURL";
export const k_pch_App_BindingPreviousURLSuffix_String: string = "PreviousURL";
export const k_pch_App_NeedToUpdateAutosaveSuffix_Bool: string = "NeedToUpdateAutosave";
export const k_pch_App_DominantHand_Int32: string = "DominantHand";
export const k_pch_App_BlockOculusSDK_Bool: string = "blockOculusSDK";
export const k_pch_Trackers_Section: string = "trackers";
export const k_pch_DesktopUI_Section: string = "DesktopUI";
export const k_pch_LastKnown_Section: string = "LastKnown";
export const k_pch_LastKnown_HMDManufacturer_String: string = "HMDManufacturer";
export const k_pch_LastKnown_HMDModel_String: string = "HMDModel";
export const k_pch_LastKnown_ActualHMDDriver_String: string = "ActualHMDDriver";
export const k_pch_DismissedWarnings_Section: string = "DismissedWarnings";
export const k_pch_Input_Section: string = "input";
export const k_pch_Input_LeftThumbstickRotation_Float: string = "leftThumbstickRotation";
export const k_pch_Input_RightThumbstickRotation_Float: string = "rightThumbstickRotation";
export const k_pch_Input_ThumbstickDeadzone_Float: string = "thumbstickDeadzone";
export const k_pch_GpuSpeed_Section: string = "GpuSpeed";
export const IVRScreenshots_Version: string = "IVRScreenshots_001";
export const IVRResources_Version: string = "IVRResources_001";
export const IVRDriverManager_Version: string = "IVRDriverManager_001";
export const k_unMaxActionNameLength: number = 64 >>> 0;
export const k_unMaxActionSetNameLength: number = 64 >>> 0;
export const k_unMaxActionOriginCount: number = 16 >>> 0;
export const k_unMaxBoneNameLength: number = 32 >>> 0;
export const k_nActionSetOverlayGlobalPriorityMin: number = 16777216;
export const k_nActionSetOverlayGlobalPriorityMax: number = 33554431;
export const k_nActionSetPriorityReservedMin: number = 33554432;
export const IVRInput_Version: string = "IVRInput_010";
export const k_ulInvalidIOBufferHandle: bigint = 0n;
export const IVRIOBuffer_Version: string = "IVRIOBuffer_002";
export const k_ulInvalidSpatialAnchorHandle: number = 0;
export const IVRSpatialAnchors_Version: string = "IVRSpatialAnchors_001";
export const IVRDebug_Version: string = "IVRDebug_001";
export const k_ulDisplayRedirectContainer: bigint = 25769803779n;
export const IVRProperties_Version: string = "IVRProperties_001";
export const k_pchPathUserHandRight: string = "/user/hand/right";
export const k_pchPathUserHandLeft: string = "/user/hand/left";
export const k_pchPathUserHandPrimary: string = "/user/hand/primary";
export const k_pchPathUserHandSecondary: string = "/user/hand/secondary";
export const k_pchPathUserHead: string = "/user/head";
export const k_pchPathUserGamepad: string = "/user/gamepad";
export const k_pchPathUserTreadmill: string = "/user/treadmill";
export const k_pchPathUserStylus: string = "/user/stylus";
export const k_pchPathDevices: string = "/devices";
export const k_pchPathDevicePath: string = "/device_path";
export const k_pchPathBestAliasPath: string = "/best_alias_path";
export const k_pchPathBoundTrackerAliasPath: string = "/bound_tracker_path";
export const k_pchPathBoundTrackerRole: string = "/bound_tracker_role";
export const k_pchPathPoseRaw: string = "/pose/raw";
export const k_pchPathPoseTip: string = "/pose/tip";
export const k_pchPathPoseGrip: string = "/pose/grip";
export const k_pchPathSystemButtonClick: string = "/input/system/click";
export const k_pchPathProximity: string = "/proximity";
export const k_pchPathControllerTypePrefix: string = "/controller_type/";
export const k_pchPathInputProfileSuffix: string = "/input_profile";
export const k_pchPathBindingNameSuffix: string = "/binding_name";
export const k_pchPathBindingUrlSuffix: string = "/binding_url";
export const k_pchPathBindingErrorSuffix: string = "/binding_error";
export const k_pchPathActiveActionSets: string = "/active_action_sets";
export const k_pchPathComponentUpdates: string = "/total_component_updates";
export const k_pchPathUserFootLeft: string = "/user/foot/left";
export const k_pchPathUserFootRight: string = "/user/foot/right";
export const k_pchPathUserShoulderLeft: string = "/user/shoulder/left";
export const k_pchPathUserShoulderRight: string = "/user/shoulder/right";
export const k_pchPathUserElbowLeft: string = "/user/elbow/left";
export const k_pchPathUserElbowRight: string = "/user/elbow/right";
export const k_pchPathUserKneeLeft: string = "/user/knee/left";
export const k_pchPathUserKneeRight: string = "/user/knee/right";
export const k_pchPathUserWristLeft: string = "/user/wrist/left";
export const k_pchPathUserWristRight: string = "/user/wrist/right";
export const k_pchPathUserAnkleLeft: string = "/user/ankle/left";
export const k_pchPathUserAnkleRight: string = "/user/ankle/right";
export const k_pchPathUserWaist: string = "/user/waist";
export const k_pchPathUserChest: string = "/user/chest";
export const k_pchPathUserCamera: string = "/user/camera";
export const k_pchPathUserKeyboard: string = "/user/keyboard";
export const k_pchPathClientAppKey: string = "/client_info/app_key";
export const k_ulInvalidPathHandle: bigint = 0n;
export const IVRPaths_Version: string = "IVRPaths_001";
export const IVRBlockQueue_Version: string = "IVRBlockQueue_005";

//#endregion
//#region Structs
export class HmdMatrix34_t {
  static readonly byteLength = 48;

  m: number[][];

  constructor() {
    this.m = Array(3).fill(null).map(() => Array(4).fill(null).map(() => 0));
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdMatrix34_t {
    const view = new DataView(buffer, offset);
    const result = new HmdMatrix34_t();
    let currentOffset = 0;

    result.m = [];
    for (let i0 = 0; i0 < 3; i0++) {
      result.m[i0] = [];
      result.m[i0] = [];
      for (let i1 = 0; i1 < 4; i1++) {
    result.m[i0][i1] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
      }
    }
    return result;
  }
}

export class HmdMatrix33_t {
  static readonly byteLength = 36;

  m: number[][];

  constructor() {
    this.m = Array(3).fill(null).map(() => Array(3).fill(null).map(() => 0));
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdMatrix33_t {
    const view = new DataView(buffer, offset);
    const result = new HmdMatrix33_t();
    let currentOffset = 0;

    result.m = [];
    for (let i0 = 0; i0 < 3; i0++) {
      result.m[i0] = [];
      result.m[i0] = [];
      for (let i1 = 0; i1 < 3; i1++) {
    result.m[i0][i1] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
      }
    }
    return result;
  }
}

export class HmdMatrix44_t {
  static readonly byteLength = 64;

  m: number[][];

  constructor() {
    this.m = Array(4).fill(null).map(() => Array(4).fill(null).map(() => 0));
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdMatrix44_t {
    const view = new DataView(buffer, offset);
    const result = new HmdMatrix44_t();
    let currentOffset = 0;

    result.m = [];
    for (let i0 = 0; i0 < 4; i0++) {
      result.m[i0] = [];
      result.m[i0] = [];
      for (let i1 = 0; i1 < 4; i1++) {
    result.m[i0][i1] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
      }
    }
    return result;
  }
}

export class HmdVector3_t {
  static readonly byteLength = 12;

  v: number[];

  constructor() {
    this.v = Array(3).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdVector3_t {
    const view = new DataView(buffer, offset);
    const result = new HmdVector3_t();
    let currentOffset = 0;

    result.v = [];
    for (let i0 = 0; i0 < 3; i0++) {
    result.v[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class HmdVector4_t {
  static readonly byteLength = 16;

  v: number[];

  constructor() {
    this.v = Array(4).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdVector4_t {
    const view = new DataView(buffer, offset);
    const result = new HmdVector4_t();
    let currentOffset = 0;

    result.v = [];
    for (let i0 = 0; i0 < 4; i0++) {
    result.v[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class HmdVector3d_t {
  static readonly byteLength = 24;

  v: number[];

  constructor() {
    this.v = Array(3).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdVector3d_t {
    const view = new DataView(buffer, offset);
    const result = new HmdVector3d_t();
    let currentOffset = 0;

    result.v = [];
    for (let i0 = 0; i0 < 3; i0++) {
    result.v[i0] = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    }
    return result;
  }
}

export class HmdVector2_t {
  static readonly byteLength = 8;

  v: number[];

  constructor() {
    this.v = Array(2).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdVector2_t {
    const view = new DataView(buffer, offset);
    const result = new HmdVector2_t();
    let currentOffset = 0;

    result.v = [];
    for (let i0 = 0; i0 < 2; i0++) {
    result.v[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class HmdQuaternion_t {
  static readonly byteLength = 32;

  w: number;
  x: number;
  y: number;
  z: number;

  constructor() {
    this.w = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdQuaternion_t {
    const view = new DataView(buffer, offset);
    const result = new HmdQuaternion_t();
    let currentOffset = 0;

    result.w = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.x = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.y = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.z = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class HmdQuaternionf_t {
  static readonly byteLength = 16;

  w: number;
  x: number;
  y: number;
  z: number;

  constructor() {
    this.w = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdQuaternionf_t {
    const view = new DataView(buffer, offset);
    const result = new HmdQuaternionf_t();
    let currentOffset = 0;

    result.w = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.x = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.y = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.z = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class HmdColor_t {
  static readonly byteLength = 16;

  r: number;
  g: number;
  b: number;
  a: number;

  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdColor_t {
    const view = new DataView(buffer, offset);
    const result = new HmdColor_t();
    let currentOffset = 0;

    result.r = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.g = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.b = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.a = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class HmdQuad_t {
  static readonly byteLength = 48;

  vCorners: HmdVector3_t[];

  constructor() {
    this.vCorners = Array(4).fill(null).map(() => new HmdVector3_t());
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdQuad_t {
    const view = new DataView(buffer, offset);
    const result = new HmdQuad_t();
    let currentOffset = 0;

    result.vCorners = [];
    for (let i0 = 0; i0 < 4; i0++) {
    result.vCorners[i0] = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    }
    return result;
  }
}

export class HmdRect2_t {
  static readonly byteLength = 16;

  vTopLeft: HmdVector2_t;
  vBottomRight: HmdVector2_t;

  constructor() {
    this.vTopLeft = new HmdVector2_t();
    this.vBottomRight = new HmdVector2_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HmdRect2_t {
    const view = new DataView(buffer, offset);
    const result = new HmdRect2_t();
    let currentOffset = 0;

    result.vTopLeft = HmdVector2_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector2_t.byteLength;
    result.vBottomRight = HmdVector2_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector2_t.byteLength;
    return result;
  }
}

export class VRBoneTransform_t {
  static readonly byteLength = 32;

  position: HmdVector4_t;
  orientation: HmdQuaternionf_t;

  constructor() {
    this.position = new HmdVector4_t();
    this.orientation = new HmdQuaternionf_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRBoneTransform_t {
    const view = new DataView(buffer, offset);
    const result = new VRBoneTransform_t();
    let currentOffset = 0;

    result.position = HmdVector4_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector4_t.byteLength;
    result.orientation = HmdQuaternionf_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdQuaternionf_t.byteLength;
    return result;
  }
}

export class DistortionCoordinates_t {
  static readonly byteLength = 24;

  rfRed: number[];
  rfGreen: number[];
  rfBlue: number[];

  constructor() {
    this.rfRed = Array(2).fill(null).map(() => 0);
    this.rfGreen = Array(2).fill(null).map(() => 0);
    this.rfBlue = Array(2).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): DistortionCoordinates_t {
    const view = new DataView(buffer, offset);
    const result = new DistortionCoordinates_t();
    let currentOffset = 0;

    result.rfRed = [];
    for (let i0 = 0; i0 < 2; i0++) {
    result.rfRed[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    result.rfGreen = [];
    for (let i0 = 0; i0 < 2; i0++) {
    result.rfGreen[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    result.rfBlue = [];
    for (let i0 = 0; i0 < 2; i0++) {
    result.rfBlue[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class Texture_t {
  static readonly byteLength = 16;

  handle: Uint8Array;
  eType: ETextureType;
  eColorSpace: EColorSpace;

  constructor() {
    this.handle = null;
    this.eType = 0;
    this.eColorSpace = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): Texture_t {
    const view = new DataView(buffer, offset);
    const result = new Texture_t();
    let currentOffset = 0;

    result.handle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.eType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.eColorSpace = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRTextureBounds_t {
  static readonly byteLength = 16;

  uMin: number;
  vMin: number;
  uMax: number;
  vMax: number;

  constructor() {
    this.uMin = 0;
    this.vMin = 0;
    this.uMax = 0;
    this.vMax = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRTextureBounds_t {
    const view = new DataView(buffer, offset);
    const result = new VRTextureBounds_t();
    let currentOffset = 0;

    result.uMin = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.vMin = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.uMax = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.vMax = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRTextureWithPose_t {
  static readonly byteLength = 48;

  mDeviceToAbsoluteTracking: HmdMatrix34_t;

  constructor() {
    this.mDeviceToAbsoluteTracking = new HmdMatrix34_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRTextureWithPose_t {
    const view = new DataView(buffer, offset);
    const result = new VRTextureWithPose_t();
    let currentOffset = 0;

    result.mDeviceToAbsoluteTracking = HmdMatrix34_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix34_t.byteLength;
    return result;
  }
}

export class VRTextureDepthInfo_t {
  static readonly byteLength = 80;

  handle: Uint8Array;
  mProjection: HmdMatrix44_t;
  vRange: HmdVector2_t;

  constructor() {
    this.handle = null;
    this.mProjection = new HmdMatrix44_t();
    this.vRange = new HmdVector2_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRTextureDepthInfo_t {
    const view = new DataView(buffer, offset);
    const result = new VRTextureDepthInfo_t();
    let currentOffset = 0;

    result.handle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.mProjection = HmdMatrix44_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix44_t.byteLength;
    result.vRange = HmdVector2_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector2_t.byteLength;
    return result;
  }
}

export class VRTextureWithDepth_t {
  static readonly byteLength = 80;

  depth: VRTextureDepthInfo_t;

  constructor() {
    this.depth = new VRTextureDepthInfo_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRTextureWithDepth_t {
    const view = new DataView(buffer, offset);
    const result = new VRTextureWithDepth_t();
    let currentOffset = 0;

    result.depth = VRTextureDepthInfo_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VRTextureDepthInfo_t.byteLength;
    return result;
  }
}

export class VRTextureWithPoseAndDepth_t {
  static readonly byteLength = 80;

  depth: VRTextureDepthInfo_t;

  constructor() {
    this.depth = new VRTextureDepthInfo_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRTextureWithPoseAndDepth_t {
    const view = new DataView(buffer, offset);
    const result = new VRTextureWithPoseAndDepth_t();
    let currentOffset = 0;

    result.depth = VRTextureDepthInfo_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VRTextureDepthInfo_t.byteLength;
    return result;
  }
}

export class TrackedDevicePose_t {
  static readonly byteLength = 78;

  mDeviceToAbsoluteTracking: HmdMatrix34_t;
  vVelocity: HmdVector3_t;
  vAngularVelocity: HmdVector3_t;
  eTrackingResult: ETrackingResult;
  bPoseIsValid: boolean;
  bDeviceIsConnected: boolean;

  constructor() {
    this.mDeviceToAbsoluteTracking = new HmdMatrix34_t();
    this.vVelocity = new HmdVector3_t();
    this.vAngularVelocity = new HmdVector3_t();
    this.eTrackingResult = ETrackingResult.TrackingResult_Uninitialized;
    this.bPoseIsValid = false;
    this.bDeviceIsConnected = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): TrackedDevicePose_t {
    const view = new DataView(buffer, offset);
    const result = new TrackedDevicePose_t();
    let currentOffset = 0;

    result.mDeviceToAbsoluteTracking = HmdMatrix34_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix34_t.byteLength;
    result.vVelocity = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.vAngularVelocity = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.eTrackingResult = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.bPoseIsValid = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.bDeviceIsConnected = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }

  toBuffer(): ArrayBuffer {
    const buffer = new ArrayBuffer(TrackedDevicePose_t.byteLength);
    const view = new DataView(buffer);
    let currentOffset = 0;

    const mDeviceToAbsoluteTrackingBuffer = this.mDeviceToAbsoluteTracking.toBuffer();
    new Uint8Array(buffer, currentOffset).set(new Uint8Array(mDeviceToAbsoluteTrackingBuffer));
    currentOffset += HmdMatrix34_t.byteLength;

    const vVelocityBuffer = this.vVelocity.toBuffer();
    new Uint8Array(buffer, currentOffset).set(new Uint8Array(vVelocityBuffer));
    currentOffset += HmdVector3_t.byteLength;

    const vAngularVelocityBuffer = this.vAngularVelocity.toBuffer();
    new Uint8Array(buffer, currentOffset).set(new Uint8Array(vAngularVelocityBuffer));
    currentOffset += HmdVector3_t.byteLength;

    view.setInt32(currentOffset, this.eTrackingResult, true);
    currentOffset += 4;
    view.setUint8(currentOffset, this.bPoseIsValid ? 1 : 0);
    currentOffset += 1;
    view.setUint8(currentOffset, this.bDeviceIsConnected ? 1 : 0);
    currentOffset += 1;

    return buffer;
  }
}

export class VRVulkanTextureData_t {
  static readonly byteLength = 60;

  m_nImage: bigint;
  m_pDevice: Uint8Array;
  m_pPhysicalDevice: Uint8Array;
  m_pInstance: Uint8Array;
  m_pQueue: Uint8Array;
  m_nQueueFamilyIndex: number;
  m_nWidth: number;
  m_nHeight: number;
  m_nFormat: number;
  m_nSampleCount: number;

  constructor() {
    this.m_nImage = 0n;
    this.m_pDevice = null;
    this.m_pPhysicalDevice = null;
    this.m_pInstance = null;
    this.m_pQueue = null;
    this.m_nQueueFamilyIndex = 0;
    this.m_nWidth = 0;
    this.m_nHeight = 0;
    this.m_nFormat = 0;
    this.m_nSampleCount = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRVulkanTextureData_t {
    const view = new DataView(buffer, offset);
    const result = new VRVulkanTextureData_t();
    let currentOffset = 0;

    result.m_nImage = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pPhysicalDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pInstance = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pQueue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_nQueueFamilyIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nWidth = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nHeight = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nFormat = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nSampleCount = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRVulkanTextureArrayData_t {
  static readonly byteLength = 8;

  m_unArrayIndex: number;
  m_unArraySize: number;

  constructor() {
    this.m_unArrayIndex = 0;
    this.m_unArraySize = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRVulkanTextureArrayData_t {
    const view = new DataView(buffer, offset);
    const result = new VRVulkanTextureArrayData_t();
    let currentOffset = 0;

    result.m_unArrayIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_unArraySize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class D3D12TextureData_t {
  static readonly byteLength = 20;

  m_pResource: Uint8Array;
  m_pCommandQueue: Uint8Array;
  m_nNodeMask: number;

  constructor() {
    this.m_pResource = null;
    this.m_pCommandQueue = null;
    this.m_nNodeMask = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): D3D12TextureData_t {
    const view = new DataView(buffer, offset);
    const result = new D3D12TextureData_t();
    let currentOffset = 0;

    result.m_pResource = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pCommandQueue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_nNodeMask = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Controller_t {
  static readonly byteLength = 4;

  button: number;

  constructor() {
    this.button = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Controller_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Controller_t();
    let currentOffset = 0;

    result.button = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Mouse_t {
  static readonly byteLength = 16;

  x: number;
  y: number;
  button: number;
  cursorIndex: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.button = 0;
    this.cursorIndex = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Mouse_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Mouse_t();
    let currentOffset = 0;

    result.x = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.y = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.button = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.cursorIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Scroll_t {
  static readonly byteLength = 20;

  xdelta: number;
  ydelta: number;
  unused: number;
  viewportscale: number;
  cursorIndex: number;

  constructor() {
    this.xdelta = 0;
    this.ydelta = 0;
    this.unused = 0;
    this.viewportscale = 0;
    this.cursorIndex = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Scroll_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Scroll_t();
    let currentOffset = 0;

    result.xdelta = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.ydelta = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.unused = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.viewportscale = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.cursorIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_TouchPadMove_t {
  static readonly byteLength = 21;

  bFingerDown: boolean;
  flSecondsFingerDown: number;
  fValueXFirst: number;
  fValueYFirst: number;
  fValueXRaw: number;
  fValueYRaw: number;

  constructor() {
    this.bFingerDown = false;
    this.flSecondsFingerDown = 0;
    this.fValueXFirst = 0;
    this.fValueYFirst = 0;
    this.fValueXRaw = 0;
    this.fValueYRaw = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_TouchPadMove_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_TouchPadMove_t();
    let currentOffset = 0;

    result.bFingerDown = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.flSecondsFingerDown = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fValueXFirst = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fValueYFirst = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fValueXRaw = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fValueYRaw = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Notification_t {
  static readonly byteLength = 12;

  ulUserValue: bigint;
  notificationId: number;

  constructor() {
    this.ulUserValue = 0n;
    this.notificationId = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Notification_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Notification_t();
    let currentOffset = 0;

    result.ulUserValue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.notificationId = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Process_t {
  static readonly byteLength = 10;

  pid: number;
  oldPid: number;
  bForced: boolean;
  bConnectionLost: boolean;

  constructor() {
    this.pid = 0;
    this.oldPid = 0;
    this.bForced = false;
    this.bConnectionLost = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Process_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Process_t();
    let currentOffset = 0;

    result.pid = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.oldPid = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.bForced = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.bConnectionLost = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }
}

export class VREvent_Overlay_t {
  static readonly byteLength = 28;

  overlayHandle: bigint;
  devicePath: bigint;
  memoryBlockId: bigint;
  cursorIndex: number;

  constructor() {
    this.overlayHandle = 0n;
    this.devicePath = 0n;
    this.memoryBlockId = 0n;
    this.cursorIndex = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Overlay_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Overlay_t();
    let currentOffset = 0;

    result.overlayHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.devicePath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.memoryBlockId = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.cursorIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Status_t {
  static readonly byteLength = 4;

  statusState: number;

  constructor() {
    this.statusState = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Status_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Status_t();
    let currentOffset = 0;

    result.statusState = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Keyboard_t {
  static readonly byteLength = 16;

  cNewInput: any[];
  uUserValue: bigint;
  overlayHandle: bigint;

  constructor() {
    this.cNewInput = Array(8).fill(null).map(() => null);
    this.uUserValue = 0n;
    this.overlayHandle = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Keyboard_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Keyboard_t();
    let currentOffset = 0;

    result.cNewInput = [];
    for (let i0 = 0; i0 < 8; i0++) {
    // Unknown type char for field cNewInput[i0]
    }
    result.uUserValue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.overlayHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_Ipd_t {
  static readonly byteLength = 4;

  ipdMeters: number;

  constructor() {
    this.ipdMeters = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Ipd_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Ipd_t();
    let currentOffset = 0;

    result.ipdMeters = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Chaperone_t {
  static readonly byteLength = 16;

  m_nPreviousUniverse: bigint;
  m_nCurrentUniverse: bigint;

  constructor() {
    this.m_nPreviousUniverse = 0n;
    this.m_nCurrentUniverse = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Chaperone_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Chaperone_t();
    let currentOffset = 0;

    result.m_nPreviousUniverse = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_nCurrentUniverse = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_Reserved_t {
  static readonly byteLength = 48;

  reserved0: bigint;
  reserved1: bigint;
  reserved2: bigint;
  reserved3: bigint;
  reserved4: bigint;
  reserved5: bigint;

  constructor() {
    this.reserved0 = 0n;
    this.reserved1 = 0n;
    this.reserved2 = 0n;
    this.reserved3 = 0n;
    this.reserved4 = 0n;
    this.reserved5 = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Reserved_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Reserved_t();
    let currentOffset = 0;

    result.reserved0 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.reserved1 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.reserved2 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.reserved3 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.reserved4 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.reserved5 = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_PerformanceTest_t {
  static readonly byteLength = 4;

  m_nFidelityLevel: number;

  constructor() {
    this.m_nFidelityLevel = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_PerformanceTest_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_PerformanceTest_t();
    let currentOffset = 0;

    result.m_nFidelityLevel = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_SeatedZeroPoseReset_t {
  static readonly byteLength = 1;

  bResetBySystemMenu: boolean;

  constructor() {
    this.bResetBySystemMenu = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_SeatedZeroPoseReset_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_SeatedZeroPoseReset_t();
    let currentOffset = 0;

    result.bResetBySystemMenu = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }
}

export class VREvent_Screenshot_t {
  static readonly byteLength = 8;

  handle: number;
  type: number;

  constructor() {
    this.handle = 0;
    this.type = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Screenshot_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Screenshot_t();
    let currentOffset = 0;

    result.handle = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.type = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_ScreenshotProgress_t {
  static readonly byteLength = 4;

  progress: number;

  constructor() {
    this.progress = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_ScreenshotProgress_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_ScreenshotProgress_t();
    let currentOffset = 0;

    result.progress = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_ApplicationLaunch_t {
  static readonly byteLength = 8;

  pid: number;
  unArgsHandle: number;

  constructor() {
    this.pid = 0;
    this.unArgsHandle = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_ApplicationLaunch_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_ApplicationLaunch_t();
    let currentOffset = 0;

    result.pid = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unArgsHandle = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_EditingCameraSurface_t {
  static readonly byteLength = 12;

  overlayHandle: bigint;
  nVisualMode: number;

  constructor() {
    this.overlayHandle = 0n;
    this.nVisualMode = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_EditingCameraSurface_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_EditingCameraSurface_t();
    let currentOffset = 0;

    result.overlayHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.nVisualMode = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_MessageOverlay_t {
  static readonly byteLength = 4;

  unVRMessageOverlayResponse: number;

  constructor() {
    this.unVRMessageOverlayResponse = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_MessageOverlay_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_MessageOverlay_t();
    let currentOffset = 0;

    result.unVRMessageOverlayResponse = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_Property_t {
  static readonly byteLength = 12;

  container: bigint;
  prop: ETrackedDeviceProperty;

  constructor() {
    this.container = 0n;
    this.prop = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_Property_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_Property_t();
    let currentOffset = 0;

    result.container = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.prop = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_HapticVibration_t {
  static readonly byteLength = 28;

  containerHandle: bigint;
  componentHandle: bigint;
  fDurationSeconds: number;
  fFrequency: number;
  fAmplitude: number;

  constructor() {
    this.containerHandle = 0n;
    this.componentHandle = 0n;
    this.fDurationSeconds = 0;
    this.fFrequency = 0;
    this.fAmplitude = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_HapticVibration_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_HapticVibration_t();
    let currentOffset = 0;

    result.containerHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.componentHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.fDurationSeconds = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fFrequency = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fAmplitude = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_WebConsole_t {
  static readonly byteLength = 8;

  webConsoleHandle: bigint;

  constructor() {
    this.webConsoleHandle = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_WebConsole_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_WebConsole_t();
    let currentOffset = 0;

    result.webConsoleHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_InputBindingLoad_t {
  static readonly byteLength = 32;

  ulAppContainer: bigint;
  pathMessage: bigint;
  pathUrl: bigint;
  pathControllerType: bigint;

  constructor() {
    this.ulAppContainer = 0n;
    this.pathMessage = 0n;
    this.pathUrl = 0n;
    this.pathControllerType = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_InputBindingLoad_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_InputBindingLoad_t();
    let currentOffset = 0;

    result.ulAppContainer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathMessage = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathUrl = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathControllerType = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_InputActionManifestLoad_t {
  static readonly byteLength = 32;

  pathAppKey: bigint;
  pathMessage: bigint;
  pathMessageParam: bigint;
  pathManifestPath: bigint;

  constructor() {
    this.pathAppKey = 0n;
    this.pathMessage = 0n;
    this.pathMessageParam = 0n;
    this.pathManifestPath = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_InputActionManifestLoad_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_InputActionManifestLoad_t();
    let currentOffset = 0;

    result.pathAppKey = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathMessage = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathMessageParam = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathManifestPath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_SpatialAnchor_t {
  static readonly byteLength = 4;

  unHandle: number;

  constructor() {
    this.unHandle = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_SpatialAnchor_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_SpatialAnchor_t();
    let currentOffset = 0;

    result.unHandle = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class VREvent_ProgressUpdate_t {
  static readonly byteLength = 44;

  ulApplicationPropertyContainer: bigint;
  pathDevice: bigint;
  pathInputSource: bigint;
  pathProgressAction: bigint;
  pathIcon: bigint;
  fProgress: number;

  constructor() {
    this.ulApplicationPropertyContainer = 0n;
    this.pathDevice = 0n;
    this.pathInputSource = 0n;
    this.pathProgressAction = 0n;
    this.pathIcon = 0n;
    this.fProgress = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_ProgressUpdate_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_ProgressUpdate_t();
    let currentOffset = 0;

    result.ulApplicationPropertyContainer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathInputSource = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathProgressAction = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pathIcon = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.fProgress = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_ShowUI_t {
  static readonly byteLength = 4;

  eType: EShowUIType;

  constructor() {
    this.eType = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_ShowUI_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_ShowUI_t();
    let currentOffset = 0;

    result.eType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_ShowDevTools_t {
  static readonly byteLength = 4;

  nBrowserIdentifier: number;

  constructor() {
    this.nBrowserIdentifier = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_ShowDevTools_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_ShowDevTools_t();
    let currentOffset = 0;

    result.nBrowserIdentifier = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_HDCPError_t {
  static readonly byteLength = 4;

  eCode: EHDCPError;

  constructor() {
    this.eCode = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_HDCPError_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_HDCPError_t();
    let currentOffset = 0;

    result.eCode = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_AudioVolumeControl_t {
  static readonly byteLength = 4;

  fVolumeLevel: number;

  constructor() {
    this.fVolumeLevel = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_AudioVolumeControl_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_AudioVolumeControl_t();
    let currentOffset = 0;

    result.fVolumeLevel = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VREvent_AudioMuteControl_t {
  static readonly byteLength = 1;

  bMute: boolean;

  constructor() {
    this.bMute = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_AudioMuteControl_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_AudioMuteControl_t();
    let currentOffset = 0;

    result.bMute = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }
}

export class AnonymousStruct_1 {
  static readonly byteLength = 417;

  reserved: VREvent_Reserved_t;
  controller: VREvent_Controller_t;
  mouse: VREvent_Mouse_t;
  scroll: VREvent_Scroll_t;
  process: VREvent_Process_t;
  notification: VREvent_Notification_t;
  overlay: VREvent_Overlay_t;
  status: VREvent_Status_t;
  keyboard: VREvent_Keyboard_t;
  ipd: VREvent_Ipd_t;
  chaperone: VREvent_Chaperone_t;
  performanceTest: VREvent_PerformanceTest_t;
  touchPadMove: VREvent_TouchPadMove_t;
  seatedZeroPoseReset: VREvent_SeatedZeroPoseReset_t;
  screenshot: VREvent_Screenshot_t;
  screenshotProgress: VREvent_ScreenshotProgress_t;
  applicationLaunch: VREvent_ApplicationLaunch_t;
  cameraSurface: VREvent_EditingCameraSurface_t;
  messageOverlay: VREvent_MessageOverlay_t;
  property: VREvent_Property_t;
  hapticVibration: VREvent_HapticVibration_t;
  webConsole: VREvent_WebConsole_t;
  inputBinding: VREvent_InputBindingLoad_t;
  actionManifest: VREvent_InputActionManifestLoad_t;
  spatialAnchor: VREvent_SpatialAnchor_t;
  progressUpdate: VREvent_ProgressUpdate_t;
  showUi: VREvent_ShowUI_t;
  showDevTools: VREvent_ShowDevTools_t;
  hdcpError: VREvent_HDCPError_t;
  audioVolumeControl: VREvent_AudioVolumeControl_t;
  audioMuteControl: VREvent_AudioMuteControl_t;

  constructor() {
    this.reserved = new VREvent_Reserved_t();
    this.controller = new VREvent_Controller_t();
    this.mouse = new VREvent_Mouse_t();
    this.scroll = new VREvent_Scroll_t();
    this.process = new VREvent_Process_t();
    this.notification = new VREvent_Notification_t();
    this.overlay = new VREvent_Overlay_t();
    this.status = new VREvent_Status_t();
    this.keyboard = new VREvent_Keyboard_t();
    this.ipd = new VREvent_Ipd_t();
    this.chaperone = new VREvent_Chaperone_t();
    this.performanceTest = new VREvent_PerformanceTest_t();
    this.touchPadMove = new VREvent_TouchPadMove_t();
    this.seatedZeroPoseReset = new VREvent_SeatedZeroPoseReset_t();
    this.screenshot = new VREvent_Screenshot_t();
    this.screenshotProgress = new VREvent_ScreenshotProgress_t();
    this.applicationLaunch = new VREvent_ApplicationLaunch_t();
    this.cameraSurface = new VREvent_EditingCameraSurface_t();
    this.messageOverlay = new VREvent_MessageOverlay_t();
    this.property = new VREvent_Property_t();
    this.hapticVibration = new VREvent_HapticVibration_t();
    this.webConsole = new VREvent_WebConsole_t();
    this.inputBinding = new VREvent_InputBindingLoad_t();
    this.actionManifest = new VREvent_InputActionManifestLoad_t();
    this.spatialAnchor = new VREvent_SpatialAnchor_t();
    this.progressUpdate = new VREvent_ProgressUpdate_t();
    this.showUi = new VREvent_ShowUI_t();
    this.showDevTools = new VREvent_ShowDevTools_t();
    this.hdcpError = new VREvent_HDCPError_t();
    this.audioVolumeControl = new VREvent_AudioVolumeControl_t();
    this.audioMuteControl = new VREvent_AudioMuteControl_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): AnonymousStruct_1 {
    const view = new DataView(buffer, offset);
    const result = new AnonymousStruct_1();
    let currentOffset = 0;

    result.reserved = VREvent_Reserved_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Reserved_t.byteLength;
    result.controller = VREvent_Controller_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Controller_t.byteLength;
    result.mouse = VREvent_Mouse_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Mouse_t.byteLength;
    result.scroll = VREvent_Scroll_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Scroll_t.byteLength;
    result.process = VREvent_Process_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Process_t.byteLength;
    result.notification = VREvent_Notification_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Notification_t.byteLength;
    result.overlay = VREvent_Overlay_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Overlay_t.byteLength;
    result.status = VREvent_Status_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Status_t.byteLength;
    result.keyboard = VREvent_Keyboard_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Keyboard_t.byteLength;
    result.ipd = VREvent_Ipd_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Ipd_t.byteLength;
    result.chaperone = VREvent_Chaperone_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Chaperone_t.byteLength;
    result.performanceTest = VREvent_PerformanceTest_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_PerformanceTest_t.byteLength;
    result.touchPadMove = VREvent_TouchPadMove_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_TouchPadMove_t.byteLength;
    result.seatedZeroPoseReset = VREvent_SeatedZeroPoseReset_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_SeatedZeroPoseReset_t.byteLength;
    result.screenshot = VREvent_Screenshot_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Screenshot_t.byteLength;
    result.screenshotProgress = VREvent_ScreenshotProgress_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_ScreenshotProgress_t.byteLength;
    result.applicationLaunch = VREvent_ApplicationLaunch_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_ApplicationLaunch_t.byteLength;
    result.cameraSurface = VREvent_EditingCameraSurface_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_EditingCameraSurface_t.byteLength;
    result.messageOverlay = VREvent_MessageOverlay_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_MessageOverlay_t.byteLength;
    result.property = VREvent_Property_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_Property_t.byteLength;
    result.hapticVibration = VREvent_HapticVibration_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_HapticVibration_t.byteLength;
    result.webConsole = VREvent_WebConsole_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_WebConsole_t.byteLength;
    result.inputBinding = VREvent_InputBindingLoad_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_InputBindingLoad_t.byteLength;
    result.actionManifest = VREvent_InputActionManifestLoad_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_InputActionManifestLoad_t.byteLength;
    result.spatialAnchor = VREvent_SpatialAnchor_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_SpatialAnchor_t.byteLength;
    result.progressUpdate = VREvent_ProgressUpdate_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_ProgressUpdate_t.byteLength;
    result.showUi = VREvent_ShowUI_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_ShowUI_t.byteLength;
    result.showDevTools = VREvent_ShowDevTools_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_ShowDevTools_t.byteLength;
    result.hdcpError = VREvent_HDCPError_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_HDCPError_t.byteLength;
    result.audioVolumeControl = VREvent_AudioVolumeControl_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_AudioVolumeControl_t.byteLength;
    result.audioMuteControl = VREvent_AudioMuteControl_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VREvent_AudioMuteControl_t.byteLength;
    return result;
  }
}

export class VREvent_t {
  static readonly byteLength = 12;

  eventType: number;
  trackedDeviceIndex: number;
  eventAgeSeconds: number;
  data: any;

  constructor() {
    this.eventType = 0;
    this.trackedDeviceIndex = 0;
    this.eventAgeSeconds = 0;
    this.data = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VREvent_t {
    const view = new DataView(buffer, offset);
    const result = new VREvent_t();
    let currentOffset = 0;

    result.eventType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.trackedDeviceIndex = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.eventAgeSeconds = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    // Unknown type VREvent_Data_t for field data
    return result;
  }
}

export class RenderModel_ComponentState_t {
  static readonly byteLength = 100;

  mTrackingToComponentRenderModel: HmdMatrix34_t;
  mTrackingToComponentLocal: HmdMatrix34_t;
  uProperties: number;

  constructor() {
    this.mTrackingToComponentRenderModel = new HmdMatrix34_t();
    this.mTrackingToComponentLocal = new HmdMatrix34_t();
    this.uProperties = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): RenderModel_ComponentState_t {
    const view = new DataView(buffer, offset);
    const result = new RenderModel_ComponentState_t();
    let currentOffset = 0;

    result.mTrackingToComponentRenderModel = HmdMatrix34_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix34_t.byteLength;
    result.mTrackingToComponentLocal = HmdMatrix34_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix34_t.byteLength;
    result.uProperties = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class HiddenAreaMesh_t {
  static readonly byteLength = 12;

  pVertexData: Uint8Array;
  unTriangleCount: number;

  constructor() {
    this.pVertexData = null;
    this.unTriangleCount = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): HiddenAreaMesh_t {
    const view = new DataView(buffer, offset);
    const result = new HiddenAreaMesh_t();
    let currentOffset = 0;

    result.pVertexData = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unTriangleCount = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRControllerAxis_t {
  static readonly byteLength = 8;

  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRControllerAxis_t {
    const view = new DataView(buffer, offset);
    const result = new VRControllerAxis_t();
    let currentOffset = 0;

    result.x = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.y = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRControllerState001_t {
  static readonly byteLength = 60;

  unPacketNum: number;
  ulButtonPressed: bigint;
  ulButtonTouched: bigint;
  rAxis: VRControllerAxis_t[];

  constructor() {
    this.unPacketNum = 0;
    this.ulButtonPressed = 0n;
    this.ulButtonTouched = 0n;
    this.rAxis = Array(5).fill(null).map(() => new VRControllerAxis_t());
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRControllerState001_t {
    const view = new DataView(buffer, offset);
    const result = new VRControllerState001_t();
    let currentOffset = 0;

    result.unPacketNum = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.ulButtonPressed = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.ulButtonTouched = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.rAxis = [];
    for (let i0 = 0; i0 < 5; i0++) {
    result.rAxis[i0] = VRControllerAxis_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VRControllerAxis_t.byteLength;
    }
    return result;
  }
}

export class CameraVideoStreamFrameHeader_t {
  static readonly byteLength = 106;

  eFrameType: EVRTrackedCameraFrameType;
  nWidth: number;
  nHeight: number;
  nBytesPerPixel: number;
  nFrameSequence: number;
  trackedDevicePose: TrackedDevicePose_t;
  ulFrameExposureTime: bigint;

  constructor() {
    this.eFrameType = 0;
    this.nWidth = 0;
    this.nHeight = 0;
    this.nBytesPerPixel = 0;
    this.nFrameSequence = 0;
    this.trackedDevicePose = new TrackedDevicePose_t();
    this.ulFrameExposureTime = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): CameraVideoStreamFrameHeader_t {
    const view = new DataView(buffer, offset);
    const result = new CameraVideoStreamFrameHeader_t();
    let currentOffset = 0;

    result.eFrameType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.nWidth = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.nHeight = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.nBytesPerPixel = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.nFrameSequence = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.trackedDevicePose = TrackedDevicePose_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += TrackedDevicePose_t.byteLength;
    result.ulFrameExposureTime = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class Compositor_FrameTiming {
  static readonly byteLength = 186;

  m_nSize: number;
  m_nFrameIndex: number;
  m_nNumFramePresents: number;
  m_nNumMisPresented: number;
  m_nNumDroppedFrames: number;
  m_nReprojectionFlags: number;
  m_flSystemTimeInSeconds: number;
  m_flPreSubmitGpuMs: number;
  m_flPostSubmitGpuMs: number;
  m_flTotalRenderGpuMs: number;
  m_flCompositorRenderGpuMs: number;
  m_flCompositorRenderCpuMs: number;
  m_flCompositorIdleCpuMs: number;
  m_flClientFrameIntervalMs: number;
  m_flPresentCallCpuMs: number;
  m_flWaitForPresentCpuMs: number;
  m_flSubmitFrameMs: number;
  m_flWaitGetPosesCalledMs: number;
  m_flNewPosesReadyMs: number;
  m_flNewFrameReadyMs: number;
  m_flCompositorUpdateStartMs: number;
  m_flCompositorUpdateEndMs: number;
  m_flCompositorRenderStartMs: number;
  m_HmdPose: TrackedDevicePose_t;
  m_nNumVSyncsReadyForUse: number;
  m_nNumVSyncsToFirstView: number;
  m_flTransferLatencyMs: number;

  constructor() {
    this.m_nSize = 0;
    this.m_nFrameIndex = 0;
    this.m_nNumFramePresents = 0;
    this.m_nNumMisPresented = 0;
    this.m_nNumDroppedFrames = 0;
    this.m_nReprojectionFlags = 0;
    this.m_flSystemTimeInSeconds = 0;
    this.m_flPreSubmitGpuMs = 0;
    this.m_flPostSubmitGpuMs = 0;
    this.m_flTotalRenderGpuMs = 0;
    this.m_flCompositorRenderGpuMs = 0;
    this.m_flCompositorRenderCpuMs = 0;
    this.m_flCompositorIdleCpuMs = 0;
    this.m_flClientFrameIntervalMs = 0;
    this.m_flPresentCallCpuMs = 0;
    this.m_flWaitForPresentCpuMs = 0;
    this.m_flSubmitFrameMs = 0;
    this.m_flWaitGetPosesCalledMs = 0;
    this.m_flNewPosesReadyMs = 0;
    this.m_flNewFrameReadyMs = 0;
    this.m_flCompositorUpdateStartMs = 0;
    this.m_flCompositorUpdateEndMs = 0;
    this.m_flCompositorRenderStartMs = 0;
    this.m_HmdPose = new TrackedDevicePose_t();
    this.m_nNumVSyncsReadyForUse = 0;
    this.m_nNumVSyncsToFirstView = 0;
    this.m_flTransferLatencyMs = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): Compositor_FrameTiming {
    const view = new DataView(buffer, offset);
    const result = new Compositor_FrameTiming();
    let currentOffset = 0;

    result.m_nSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nFrameIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresents = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumMisPresented = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFrames = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nReprojectionFlags = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_flSystemTimeInSeconds = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_flPreSubmitGpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flPostSubmitGpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flTotalRenderGpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorRenderGpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorRenderCpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorIdleCpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flClientFrameIntervalMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flPresentCallCpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flWaitForPresentCpuMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flSubmitFrameMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flWaitGetPosesCalledMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flNewPosesReadyMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flNewFrameReadyMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorUpdateStartMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorUpdateEndMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCompositorRenderStartMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_HmdPose = TrackedDevicePose_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += TrackedDevicePose_t.byteLength;
    result.m_nNumVSyncsReadyForUse = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumVSyncsToFirstView = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_flTransferLatencyMs = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class Compositor_BenchmarkResults {
  static readonly byteLength = 8;

  m_flMegaPixelsPerSecond: number;
  m_flHmdRecommendedMegaPixelsPerSecond: number;

  constructor() {
    this.m_flMegaPixelsPerSecond = 0;
    this.m_flHmdRecommendedMegaPixelsPerSecond = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): Compositor_BenchmarkResults {
    const view = new DataView(buffer, offset);
    const result = new Compositor_BenchmarkResults();
    let currentOffset = 0;

    result.m_flMegaPixelsPerSecond = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flHmdRecommendedMegaPixelsPerSecond = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class DriverDirectMode_FrameTiming {
  static readonly byteLength = 20;

  m_nSize: number;
  m_nNumFramePresents: number;
  m_nNumMisPresented: number;
  m_nNumDroppedFrames: number;
  m_nReprojectionFlags: number;

  constructor() {
    this.m_nSize = 0;
    this.m_nNumFramePresents = 0;
    this.m_nNumMisPresented = 0;
    this.m_nNumDroppedFrames = 0;
    this.m_nReprojectionFlags = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): DriverDirectMode_FrameTiming {
    const view = new DataView(buffer, offset);
    const result = new DriverDirectMode_FrameTiming();
    let currentOffset = 0;

    result.m_nSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresents = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumMisPresented = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFrames = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nReprojectionFlags = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class ImuSample_t {
  static readonly byteLength = 60;

  fSampleTime: number;
  vAccel: HmdVector3d_t;
  vGyro: HmdVector3d_t;
  unOffScaleFlags: number;

  constructor() {
    this.fSampleTime = 0;
    this.vAccel = new HmdVector3d_t();
    this.vGyro = new HmdVector3d_t();
    this.unOffScaleFlags = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): ImuSample_t {
    const view = new DataView(buffer, offset);
    const result = new ImuSample_t();
    let currentOffset = 0;

    result.fSampleTime = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.vAccel = HmdVector3d_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3d_t.byteLength;
    result.vGyro = HmdVector3d_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3d_t.byteLength;
    result.unOffScaleFlags = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class AppOverrideKeys_t {
  static readonly byteLength = 16;

  pchKey: Uint8Array;
  pchValue: Uint8Array;

  constructor() {
    this.pchKey = null;
    this.pchValue = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): AppOverrideKeys_t {
    const view = new DataView(buffer, offset);
    const result = new AppOverrideKeys_t();
    let currentOffset = 0;

    result.pchKey = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pchValue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class Compositor_CumulativeStats {
  static readonly byteLength = 88;

  m_nPid: number;
  m_nNumFramePresents: number;
  m_nNumDroppedFrames: number;
  m_nNumReprojectedFrames: number;
  m_nNumFramePresentsOnStartup: number;
  m_nNumDroppedFramesOnStartup: number;
  m_nNumReprojectedFramesOnStartup: number;
  m_nNumLoading: number;
  m_nNumFramePresentsLoading: number;
  m_nNumDroppedFramesLoading: number;
  m_nNumReprojectedFramesLoading: number;
  m_nNumTimedOut: number;
  m_nNumFramePresentsTimedOut: number;
  m_nNumDroppedFramesTimedOut: number;
  m_nNumReprojectedFramesTimedOut: number;
  m_nNumFrameSubmits: number;
  m_flSumCompositorCPUTimeMS: number;
  m_flSumCompositorGPUTimeMS: number;
  m_flSumTargetFrameTimes: number;
  m_flSumApplicationCPUTimeMS: number;
  m_flSumApplicationGPUTimeMS: number;
  m_nNumFramesWithDepth: number;

  constructor() {
    this.m_nPid = 0;
    this.m_nNumFramePresents = 0;
    this.m_nNumDroppedFrames = 0;
    this.m_nNumReprojectedFrames = 0;
    this.m_nNumFramePresentsOnStartup = 0;
    this.m_nNumDroppedFramesOnStartup = 0;
    this.m_nNumReprojectedFramesOnStartup = 0;
    this.m_nNumLoading = 0;
    this.m_nNumFramePresentsLoading = 0;
    this.m_nNumDroppedFramesLoading = 0;
    this.m_nNumReprojectedFramesLoading = 0;
    this.m_nNumTimedOut = 0;
    this.m_nNumFramePresentsTimedOut = 0;
    this.m_nNumDroppedFramesTimedOut = 0;
    this.m_nNumReprojectedFramesTimedOut = 0;
    this.m_nNumFrameSubmits = 0;
    this.m_flSumCompositorCPUTimeMS = 0;
    this.m_flSumCompositorGPUTimeMS = 0;
    this.m_flSumTargetFrameTimes = 0;
    this.m_flSumApplicationCPUTimeMS = 0;
    this.m_flSumApplicationGPUTimeMS = 0;
    this.m_nNumFramesWithDepth = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): Compositor_CumulativeStats {
    const view = new DataView(buffer, offset);
    const result = new Compositor_CumulativeStats();
    let currentOffset = 0;

    result.m_nPid = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresents = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFrames = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumReprojectedFrames = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresentsOnStartup = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFramesOnStartup = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumReprojectedFramesOnStartup = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumLoading = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresentsLoading = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFramesLoading = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumReprojectedFramesLoading = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumTimedOut = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFramePresentsTimedOut = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumDroppedFramesTimedOut = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumReprojectedFramesTimedOut = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nNumFrameSubmits = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_flSumCompositorCPUTimeMS = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_flSumCompositorGPUTimeMS = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_flSumTargetFrameTimes = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_flSumApplicationCPUTimeMS = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_flSumApplicationGPUTimeMS = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.m_nNumFramesWithDepth = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class Compositor_StageRenderSettings {
  static readonly byteLength = 47;

  m_PrimaryColor: HmdColor_t;
  m_SecondaryColor: HmdColor_t;
  m_flVignetteInnerRadius: number;
  m_flVignetteOuterRadius: number;
  m_flFresnelStrength: number;
  m_bBackfaceCulling: boolean;
  m_bGreyscale: boolean;
  m_bWireframe: boolean;

  constructor() {
    this.m_PrimaryColor = new HmdColor_t();
    this.m_SecondaryColor = new HmdColor_t();
    this.m_flVignetteInnerRadius = 0;
    this.m_flVignetteOuterRadius = 0;
    this.m_flFresnelStrength = 0;
    this.m_bBackfaceCulling = false;
    this.m_bGreyscale = false;
    this.m_bWireframe = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): Compositor_StageRenderSettings {
    const view = new DataView(buffer, offset);
    const result = new Compositor_StageRenderSettings();
    let currentOffset = 0;

    result.m_PrimaryColor = HmdColor_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdColor_t.byteLength;
    result.m_SecondaryColor = HmdColor_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdColor_t.byteLength;
    result.m_flVignetteInnerRadius = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flVignetteOuterRadius = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flFresnelStrength = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_bBackfaceCulling = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.m_bGreyscale = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.m_bWireframe = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }
}

export class VROverlayIntersectionParams_t {
  static readonly byteLength = 28;

  vSource: HmdVector3_t;
  vDirection: HmdVector3_t;
  eOrigin: ETrackingUniverseOrigin;

  constructor() {
    this.vSource = new HmdVector3_t();
    this.vDirection = new HmdVector3_t();
    this.eOrigin = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VROverlayIntersectionParams_t {
    const view = new DataView(buffer, offset);
    const result = new VROverlayIntersectionParams_t();
    let currentOffset = 0;

    result.vSource = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.vDirection = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.eOrigin = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VROverlayIntersectionResults_t {
  static readonly byteLength = 36;

  vPoint: HmdVector3_t;
  vNormal: HmdVector3_t;
  vUVs: HmdVector2_t;
  fDistance: number;

  constructor() {
    this.vPoint = new HmdVector3_t();
    this.vNormal = new HmdVector3_t();
    this.vUVs = new HmdVector2_t();
    this.fDistance = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VROverlayIntersectionResults_t {
    const view = new DataView(buffer, offset);
    const result = new VROverlayIntersectionResults_t();
    let currentOffset = 0;

    result.vPoint = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.vNormal = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.vUVs = HmdVector2_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector2_t.byteLength;
    result.fDistance = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class IntersectionMaskRectangle_t {
  static readonly byteLength = 16;

  m_flTopLeftX: number;
  m_flTopLeftY: number;
  m_flWidth: number;
  m_flHeight: number;

  constructor() {
    this.m_flTopLeftX = 0;
    this.m_flTopLeftY = 0;
    this.m_flWidth = 0;
    this.m_flHeight = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): IntersectionMaskRectangle_t {
    const view = new DataView(buffer, offset);
    const result = new IntersectionMaskRectangle_t();
    let currentOffset = 0;

    result.m_flTopLeftX = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flTopLeftY = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flWidth = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flHeight = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class IntersectionMaskCircle_t {
  static readonly byteLength = 12;

  m_flCenterX: number;
  m_flCenterY: number;
  m_flRadius: number;

  constructor() {
    this.m_flCenterX = 0;
    this.m_flCenterY = 0;
    this.m_flRadius = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): IntersectionMaskCircle_t {
    const view = new DataView(buffer, offset);
    const result = new IntersectionMaskCircle_t();
    let currentOffset = 0;

    result.m_flCenterX = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flCenterY = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.m_flRadius = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class AnonymousStruct_2 {
  static readonly byteLength = 28;

  m_Rectangle: IntersectionMaskRectangle_t;
  m_Circle: IntersectionMaskCircle_t;

  constructor() {
    this.m_Rectangle = new IntersectionMaskRectangle_t();
    this.m_Circle = new IntersectionMaskCircle_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): AnonymousStruct_2 {
    const view = new DataView(buffer, offset);
    const result = new AnonymousStruct_2();
    let currentOffset = 0;

    result.m_Rectangle = IntersectionMaskRectangle_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += IntersectionMaskRectangle_t.byteLength;
    result.m_Circle = IntersectionMaskCircle_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += IntersectionMaskCircle_t.byteLength;
    return result;
  }
}

export class VROverlayIntersectionMaskPrimitive_t {
  static readonly byteLength = 4;

  m_nPrimitiveType: EVROverlayIntersectionMaskPrimitiveType;
  m_Primitive: any;

  constructor() {
    this.m_nPrimitiveType = 0;
    this.m_Primitive = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VROverlayIntersectionMaskPrimitive_t {
    const view = new DataView(buffer, offset);
    const result = new VROverlayIntersectionMaskPrimitive_t();
    let currentOffset = 0;

    result.m_nPrimitiveType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    // Unknown type VROverlayIntersectionMaskPrimitive_Data_t for field m_Primitive
    return result;
  }
}

export class VROverlayProjection_t {
  static readonly byteLength = 16;

  fLeft: number;
  fRight: number;
  fTop: number;
  fBottom: number;

  constructor() {
    this.fLeft = 0;
    this.fRight = 0;
    this.fTop = 0;
    this.fBottom = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VROverlayProjection_t {
    const view = new DataView(buffer, offset);
    const result = new VROverlayProjection_t();
    let currentOffset = 0;

    result.fLeft = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fRight = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fTop = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fBottom = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VROverlayView_t {
  static readonly byteLength = 40;

  overlayHandle: bigint;
  texture: Texture_t;
  textureBounds: VRTextureBounds_t;

  constructor() {
    this.overlayHandle = 0n;
    this.texture = new Texture_t();
    this.textureBounds = new VRTextureBounds_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VROverlayView_t {
    const view = new DataView(buffer, offset);
    const result = new VROverlayView_t();
    let currentOffset = 0;

    result.overlayHandle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.texture = Texture_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += Texture_t.byteLength;
    result.textureBounds = VRTextureBounds_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += VRTextureBounds_t.byteLength;
    return result;
  }
}

export class VRVulkanDevice_t {
  static readonly byteLength = 36;

  m_pInstance: Uint8Array;
  m_pDevice: Uint8Array;
  m_pPhysicalDevice: Uint8Array;
  m_pQueue: Uint8Array;
  m_uQueueFamilyIndex: number;

  constructor() {
    this.m_pInstance = null;
    this.m_pDevice = null;
    this.m_pPhysicalDevice = null;
    this.m_pQueue = null;
    this.m_uQueueFamilyIndex = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRVulkanDevice_t {
    const view = new DataView(buffer, offset);
    const result = new VRVulkanDevice_t();
    let currentOffset = 0;

    result.m_pInstance = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pPhysicalDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pQueue = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_uQueueFamilyIndex = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRNativeDevice_t {
  static readonly byteLength = 12;

  handle: Uint8Array;
  eType: EDeviceType;

  constructor() {
    this.handle = null;
    this.eType = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRNativeDevice_t {
    const view = new DataView(buffer, offset);
    const result = new VRNativeDevice_t();
    let currentOffset = 0;

    result.handle = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.eType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class RenderModel_Vertex_t {
  static readonly byteLength = 32;

  vPosition: HmdVector3_t;
  vNormal: HmdVector3_t;
  rfTextureCoord: number[];

  constructor() {
    this.vPosition = new HmdVector3_t();
    this.vNormal = new HmdVector3_t();
    this.rfTextureCoord = Array(2).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): RenderModel_Vertex_t {
    const view = new DataView(buffer, offset);
    const result = new RenderModel_Vertex_t();
    let currentOffset = 0;

    result.vPosition = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.vNormal = HmdVector3_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdVector3_t.byteLength;
    result.rfTextureCoord = [];
    for (let i0 = 0; i0 < 2; i0++) {
    result.rfTextureCoord[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class RenderModel_TextureMap_t {
  static readonly byteLength = 18;

  unWidth: number;
  unHeight: number;
  rubTextureMapData: Uint8Array;
  format: EVRRenderModelTextureFormat;
  unMipLevels: number;

  constructor() {
    this.unWidth = 0;
    this.unHeight = 0;
    this.rubTextureMapData = null;
    this.format = 0;
    this.unMipLevels = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): RenderModel_TextureMap_t {
    const view = new DataView(buffer, offset);
    const result = new RenderModel_TextureMap_t();
    let currentOffset = 0;

    result.unWidth = view.getUint16(currentOffset, true);
    currentOffset += 2;
    result.unHeight = view.getUint16(currentOffset, true);
    currentOffset += 2;
    result.rubTextureMapData = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.format = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unMipLevels = view.getUint16(currentOffset, true);
    currentOffset += 2;
    return result;
  }
}

export class RenderModel_t {
  static readonly byteLength = 28;

  rVertexData: Uint8Array;
  unVertexCount: number;
  rIndexData: Uint8Array;
  unTriangleCount: number;
  diffuseTextureId: number;

  constructor() {
    this.rVertexData = null;
    this.unVertexCount = 0;
    this.rIndexData = null;
    this.unTriangleCount = 0;
    this.diffuseTextureId = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): RenderModel_t {
    const view = new DataView(buffer, offset);
    const result = new RenderModel_t();
    let currentOffset = 0;

    result.rVertexData = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unVertexCount = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.rIndexData = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unTriangleCount = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.diffuseTextureId = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class RenderModel_ControllerMode_State_t {
  static readonly byteLength = 1;

  bScrollWheelVisible: boolean;

  constructor() {
    this.bScrollWheelVisible = false;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): RenderModel_ControllerMode_State_t {
    const view = new DataView(buffer, offset);
    const result = new RenderModel_ControllerMode_State_t();
    let currentOffset = 0;

    result.bScrollWheelVisible = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    return result;
  }
}

export class NotificationBitmap_t {
  static readonly byteLength = 20;

  m_pImageData: Uint8Array;
  m_nWidth: number;
  m_nHeight: number;
  m_nBytesPerPixel: number;

  constructor() {
    this.m_pImageData = null;
    this.m_nWidth = 0;
    this.m_nHeight = 0;
    this.m_nBytesPerPixel = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): NotificationBitmap_t {
    const view = new DataView(buffer, offset);
    const result = new NotificationBitmap_t();
    let currentOffset = 0;

    result.m_pImageData = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_nWidth = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nHeight = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.m_nBytesPerPixel = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class CVRSettingHelper {
  static readonly byteLength = 8;

  m_pSettings: Uint8Array;

  constructor() {
    this.m_pSettings = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): CVRSettingHelper {
    const view = new DataView(buffer, offset);
    const result = new CVRSettingHelper();
    let currentOffset = 0;

    result.m_pSettings = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class InputAnalogActionData_t {
  static readonly byteLength = 37;

  bActive: boolean;
  activeOrigin: bigint;
  x: number;
  y: number;
  z: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
  fUpdateTime: number;

  constructor() {
    this.bActive = false;
    this.activeOrigin = 0n;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.deltaZ = 0;
    this.fUpdateTime = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputAnalogActionData_t {
    const view = new DataView(buffer, offset);
    const result = new InputAnalogActionData_t();
    let currentOffset = 0;

    result.bActive = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.activeOrigin = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.x = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.y = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.z = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.deltaX = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.deltaY = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.deltaZ = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    result.fUpdateTime = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class InputDigitalActionData_t {
  static readonly byteLength = 15;

  bActive: boolean;
  activeOrigin: bigint;
  bState: boolean;
  bChanged: boolean;
  fUpdateTime: number;

  constructor() {
    this.bActive = false;
    this.activeOrigin = 0n;
    this.bState = false;
    this.bChanged = false;
    this.fUpdateTime = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputDigitalActionData_t {
    const view = new DataView(buffer, offset);
    const result = new InputDigitalActionData_t();
    let currentOffset = 0;

    result.bActive = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.activeOrigin = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.bState = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.bChanged = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.fUpdateTime = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class InputPoseActionData_t {
  static readonly byteLength = 1 + 8 + TrackedDevicePose_t.byteLength;

  bActive: boolean;
  activeOrigin: bigint;
  pose: TrackedDevicePose_t;

  constructor() {
    this.bActive = false;
    this.activeOrigin = 0n;
    this.pose = new TrackedDevicePose_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputPoseActionData_t {
    const view = new DataView(buffer, offset);
    const result = new InputPoseActionData_t();
    let currentOffset = 0;

    result.bActive = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.activeOrigin = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pose = TrackedDevicePose_t.fromBuffer(buffer, offset + currentOffset);

    return result;
  }

  toBuffer(): ArrayBuffer {
    const buffer = new ArrayBuffer(InputPoseActionData_t.byteLength);
    const view = new DataView(buffer);
    let currentOffset = 0;

    view.setUint8(currentOffset, this.bActive ? 1 : 0);
    currentOffset += 1;
    view.setBigUint64(currentOffset, this.activeOrigin, true);
    currentOffset += 8;

    const poseBuffer = this.pose.toBuffer();
    new Uint8Array(buffer, currentOffset).set(new Uint8Array(poseBuffer));

    return buffer;
  }
}

export class InputSkeletalActionData_t {
  static readonly byteLength = 9;

  bActive: boolean;
  activeOrigin: bigint;

  constructor() {
    this.bActive = false;
    this.activeOrigin = 0n;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputSkeletalActionData_t {
    const view = new DataView(buffer, offset);
    const result = new InputSkeletalActionData_t();
    let currentOffset = 0;

    result.bActive = view.getUint8(currentOffset) !== 0;
    currentOffset += 1;
    result.activeOrigin = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class InputOriginInfo_t {
  static readonly byteLength = 12;

  devicePath: bigint;
  trackedDeviceIndex: number;
  rchRenderModelComponentName: any[];

  constructor() {
    this.devicePath = 0n;
    this.trackedDeviceIndex = 0;
    this.rchRenderModelComponentName = Array(128).fill(null).map(() => null);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputOriginInfo_t {
    const view = new DataView(buffer, offset);
    const result = new InputOriginInfo_t();
    let currentOffset = 0;

    result.devicePath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.trackedDeviceIndex = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.rchRenderModelComponentName = [];
    for (let i0 = 0; i0 < 128; i0++) {
    // Unknown type char for field rchRenderModelComponentName[i0]
    }
    return result;
  }
}

export class InputBindingInfo_t {
  static readonly byteLength = 0;

  rchDevicePathName: any[];
  rchInputPathName: any[];
  rchModeName: any[];
  rchSlotName: any[];
  rchInputSourceType: any[];

  constructor() {
    this.rchDevicePathName = Array(128).fill(null).map(() => null);
    this.rchInputPathName = Array(128).fill(null).map(() => null);
    this.rchModeName = Array(128).fill(null).map(() => null);
    this.rchSlotName = Array(128).fill(null).map(() => null);
    this.rchInputSourceType = Array(32).fill(null).map(() => null);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): InputBindingInfo_t {
    const view = new DataView(buffer, offset);
    const result = new InputBindingInfo_t();
    let currentOffset = 0;

    result.rchDevicePathName = [];
    for (let i0 = 0; i0 < 128; i0++) {
    // Unknown type char for field rchDevicePathName[i0]
    }
    result.rchInputPathName = [];
    for (let i0 = 0; i0 < 128; i0++) {
    // Unknown type char for field rchInputPathName[i0]
    }
    result.rchModeName = [];
    for (let i0 = 0; i0 < 128; i0++) {
    // Unknown type char for field rchModeName[i0]
    }
    result.rchSlotName = [];
    for (let i0 = 0; i0 < 128; i0++) {
    // Unknown type char for field rchSlotName[i0]
    }
    result.rchInputSourceType = [];
    for (let i0 = 0; i0 < 32; i0++) {
    // Unknown type char for field rchInputSourceType[i0]
    }
    return result;
  }
}

export class VRActiveActionSet_t {
  static readonly byteLength = 32;

  ulActionSet: bigint;
  ulRestrictedToDevice: bigint;
  ulSecondaryActionSet: bigint;
  unPadding: number;
  nPriority: number;

  constructor() {
    this.ulActionSet = 0n;
    this.ulRestrictedToDevice = 0n;
    this.ulSecondaryActionSet = 0n;
    this.unPadding = 0;
    this.nPriority = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRActiveActionSet_t {
    const view = new DataView(buffer, offset);
    const result = new VRActiveActionSet_t();
    let currentOffset = 0;

    result.ulActionSet = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.ulRestrictedToDevice = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.ulSecondaryActionSet = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unPadding = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.nPriority = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class VRSkeletalSummaryData_t {
  static readonly byteLength = 36;

  flFingerCurl: number[];
  flFingerSplay: number[];

  constructor() {
    this.flFingerCurl = Array(5).fill(null).map(() => 0);
    this.flFingerSplay = Array(4).fill(null).map(() => 0);
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): VRSkeletalSummaryData_t {
    const view = new DataView(buffer, offset);
    const result = new VRSkeletalSummaryData_t();
    let currentOffset = 0;

    result.flFingerCurl = [];
    for (let i0 = 0; i0 < 5; i0++) {
    result.flFingerCurl[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    result.flFingerSplay = [];
    for (let i0 = 0; i0 < 4; i0++) {
    result.flFingerSplay[i0] = view.getFloat32(currentOffset, true);
    currentOffset += 4;
    }
    return result;
  }
}

export class SpatialAnchorPose_t {
  static readonly byteLength = 48;

  mAnchorToAbsoluteTracking: HmdMatrix34_t;

  constructor() {
    this.mAnchorToAbsoluteTracking = new HmdMatrix34_t();
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): SpatialAnchorPose_t {
    const view = new DataView(buffer, offset);
    const result = new SpatialAnchorPose_t();
    let currentOffset = 0;

    result.mAnchorToAbsoluteTracking = HmdMatrix34_t.fromBuffer(buffer, offset + currentOffset);
    currentOffset += HmdMatrix34_t.byteLength;
    return result;
  }
}

export class COpenVRContext {
  static readonly byteLength = 160;

  m_pVRSystem: Uint8Array;
  m_pVRChaperone: Uint8Array;
  m_pVRChaperoneSetup: Uint8Array;
  m_pVRCompositor: Uint8Array;
  m_pVRHeadsetView: Uint8Array;
  m_pVROverlay: Uint8Array;
  m_pVROverlayView: Uint8Array;
  m_pVRResources: Uint8Array;
  m_pVRRenderModels: Uint8Array;
  m_pVRExtendedDisplay: Uint8Array;
  m_pVRSettings: Uint8Array;
  m_pVRApplications: Uint8Array;
  m_pVRTrackedCamera: Uint8Array;
  m_pVRScreenshots: Uint8Array;
  m_pVRDriverManager: Uint8Array;
  m_pVRInput: Uint8Array;
  m_pVRIOBuffer: Uint8Array;
  m_pVRSpatialAnchors: Uint8Array;
  m_pVRDebug: Uint8Array;
  m_pVRNotifications: Uint8Array;

  constructor() {
    this.m_pVRSystem = null;
    this.m_pVRChaperone = null;
    this.m_pVRChaperoneSetup = null;
    this.m_pVRCompositor = null;
    this.m_pVRHeadsetView = null;
    this.m_pVROverlay = null;
    this.m_pVROverlayView = null;
    this.m_pVRResources = null;
    this.m_pVRRenderModels = null;
    this.m_pVRExtendedDisplay = null;
    this.m_pVRSettings = null;
    this.m_pVRApplications = null;
    this.m_pVRTrackedCamera = null;
    this.m_pVRScreenshots = null;
    this.m_pVRDriverManager = null;
    this.m_pVRInput = null;
    this.m_pVRIOBuffer = null;
    this.m_pVRSpatialAnchors = null;
    this.m_pVRDebug = null;
    this.m_pVRNotifications = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): COpenVRContext {
    const view = new DataView(buffer, offset);
    const result = new COpenVRContext();
    let currentOffset = 0;

    result.m_pVRSystem = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRChaperone = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRChaperoneSetup = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRCompositor = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRHeadsetView = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVROverlay = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVROverlayView = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRResources = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRRenderModels = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRExtendedDisplay = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRSettings = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRApplications = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRTrackedCamera = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRScreenshots = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRDriverManager = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRInput = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRIOBuffer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRSpatialAnchors = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRDebug = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.m_pVRNotifications = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class PropertyWrite_t {
  static readonly byteLength = 32;

  prop: ETrackedDeviceProperty;
  writeType: EPropertyWriteType;
  eSetError: ETrackedPropertyError;
  pvBuffer: Uint8Array;
  unBufferSize: number;
  unTag: number;
  eError: ETrackedPropertyError;

  constructor() {
    this.prop = 0;
    this.writeType = 0;
    this.eSetError = 0;
    this.pvBuffer = null;
    this.unBufferSize = 0;
    this.unTag = 0;
    this.eError = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): PropertyWrite_t {
    const view = new DataView(buffer, offset);
    const result = new PropertyWrite_t();
    let currentOffset = 0;

    result.prop = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.writeType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.eSetError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.pvBuffer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unTag = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.eError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class PropertyRead_t {
  static readonly byteLength = 28;

  prop: ETrackedDeviceProperty;
  pvBuffer: Uint8Array;
  unBufferSize: number;
  unTag: number;
  unRequiredBufferSize: number;
  eError: ETrackedPropertyError;

  constructor() {
    this.prop = 0;
    this.pvBuffer = null;
    this.unBufferSize = 0;
    this.unTag = 0;
    this.unRequiredBufferSize = 0;
    this.eError = 0;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): PropertyRead_t {
    const view = new DataView(buffer, offset);
    const result = new PropertyRead_t();
    let currentOffset = 0;

    result.prop = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.pvBuffer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unTag = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.unRequiredBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.eError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    return result;
  }
}

export class CVRPropertyHelpers {
  static readonly byteLength = 8;

  m_pProperties: Uint8Array;

  constructor() {
    this.m_pProperties = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): CVRPropertyHelpers {
    const view = new DataView(buffer, offset);
    const result = new CVRPropertyHelpers();
    let currentOffset = 0;

    result.m_pProperties = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class PathWrite_t {
  static readonly byteLength = 44;

  ulPath: bigint;
  writeType: EPropertyWriteType;
  eSetError: ETrackedPropertyError;
  pvBuffer: Uint8Array;
  unBufferSize: number;
  unTag: number;
  eError: ETrackedPropertyError;
  pszPath: Uint8Array;

  constructor() {
    this.ulPath = 0n;
    this.writeType = 0;
    this.eSetError = 0;
    this.pvBuffer = null;
    this.unBufferSize = 0;
    this.unTag = 0;
    this.eError = 0;
    this.pszPath = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): PathWrite_t {
    const view = new DataView(buffer, offset);
    const result = new PathWrite_t();
    let currentOffset = 0;

    result.ulPath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.writeType = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.eSetError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.pvBuffer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unTag = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.eError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.pszPath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

export class PathRead_t {
  static readonly byteLength = 40;

  ulPath: bigint;
  pvBuffer: Uint8Array;
  unBufferSize: number;
  unTag: number;
  unRequiredBufferSize: number;
  eError: ETrackedPropertyError;
  pszPath: Uint8Array;

  constructor() {
    this.ulPath = 0n;
    this.pvBuffer = null;
    this.unBufferSize = 0;
    this.unTag = 0;
    this.unRequiredBufferSize = 0;
    this.eError = 0;
    this.pszPath = null;
  }

  static fromBuffer(buffer: ArrayBuffer, offset: number): PathRead_t {
    const view = new DataView(buffer, offset);
    const result = new PathRead_t();
    let currentOffset = 0;

    result.ulPath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.pvBuffer = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    result.unBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.unTag = view.getFloat64(currentOffset, true);
    currentOffset += 8;
    result.unRequiredBufferSize = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.eError = view.getInt32(currentOffset, true);
    currentOffset += 4;
    result.pszPath = view.getBigUint64(currentOffset, true);
    currentOffset += 8;
    return result;
  }
}

//#endregion
//#region Methods
//method class IVRSystem
export interface IVRSystem {
  GetRecommendedRenderTargetSize(pnWidth: number, pnHeight: number): void;
  GetProjectionMatrix(eEye: EVREye, fNearZ: number, fFarZ: number): HmdMatrix44_t;
  GetProjectionRaw(eEye: EVREye, pfLeft: number, pfRight: number, pfTop: number, pfBottom: number): void;
  ComputeDistortion(eEye: EVREye, fU: number, fV: number, pDistortionCoordinates: DistortionCoordinates_t): boolean;
  GetEyeToHeadTransform(eEye: EVREye): HmdMatrix34_t;
  GetTimeSinceLastVsync(pfSecondsSinceLastVsync: number, pulFrameCounter: bigint): boolean;
  GetD3D9AdapterIndex(): number;
  GetDXGIOutputInfo(pnAdapterIndex: number): void;
  GetOutputDevice(pnDevice: bigint, textureType: ETextureType, pInstance: VkInstance_T): void;
  IsDisplayOnDesktop(): boolean;
  SetDisplayVisibility(bIsVisibleOnDesktop: boolean): boolean;
  GetDeviceToAbsoluteTrackingPose(eOrigin: ETrackingUniverseOrigin, fPredictedSecondsToPhotonsFromNow: number, pTrackedDevicePoseArray: TrackedDevicePose_t, unTrackedDevicePoseArrayCount: number): void;
  GetSeatedZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34_t;
  GetRawZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34_t;
  GetSortedTrackedDeviceIndicesOfClass(eTrackedDeviceClass: ETrackedDeviceClass, punTrackedDeviceIndexArray: TrackedDeviceIndex_t, unTrackedDeviceIndexArrayCount: number, unRelativeToTrackedDeviceIndex: TrackedDeviceIndex_t): number;
  GetTrackedDeviceActivityLevel(unDeviceId: TrackedDeviceIndex_t): EDeviceActivityLevel;
  ApplyTransform(pOutputPose: TrackedDevicePose_t, pTrackedDevicePose: TrackedDevicePose_t, pTransform: HmdMatrix34_t): void;
  GetTrackedDeviceIndexForControllerRole(unDeviceType: ETrackedControllerRole): TrackedDeviceIndex_t;
  GetControllerRoleForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex_t): ETrackedControllerRole;
  GetTrackedDeviceClass(unDeviceIndex: TrackedDeviceIndex_t): ETrackedDeviceClass;
  IsTrackedDeviceConnected(unDeviceIndex: TrackedDeviceIndex_t): boolean;
  GetBoolTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): boolean;
  GetFloatTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): number;
  GetInt32TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): number;
  GetUint64TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): bigint;
  GetMatrix34TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): HmdMatrix34_t;
  GetArrayTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, propType: PropertyTypeTag_t, pBuffer: Uint8Array, unBufferSize: number, pError: ETrackedPropertyError): number;
  GetStringTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pchValue: string, unBufferSize: number, pError: ETrackedPropertyError): number;
  GetPropErrorNameFromEnum(error: ETrackedPropertyError): string;
  PollNextEvent(pEvent: VREvent_t, uncbVREvent: number): boolean;
  PollNextEventWithPose(eOrigin: ETrackingUniverseOrigin, pEvent: VREvent_t, uncbVREvent: number, pTrackedDevicePose: TrackedDevicePose_t): boolean;
  GetEventTypeNameFromEnum(eType: EVREventType): string;
  GetHiddenAreaMesh(eEye: EVREye, type: EHiddenAreaMeshType): HiddenAreaMesh_t;
  GetControllerState(unControllerDeviceIndex: TrackedDeviceIndex_t, pControllerState: VRControllerState_t, unControllerStateSize: number): boolean;
  GetControllerStateWithPose(eOrigin: ETrackingUniverseOrigin, unControllerDeviceIndex: TrackedDeviceIndex_t, pControllerState: VRControllerState_t, unControllerStateSize: number, pTrackedDevicePose: TrackedDevicePose_t): boolean;
  TriggerHapticPulse(unControllerDeviceIndex: TrackedDeviceIndex_t, unAxisId: number, usDurationMicroSec: number): void;
  GetButtonIdNameFromEnum(eButtonId: EVRButtonId): string;
  GetControllerAxisTypeNameFromEnum(eAxisType: EVRControllerAxisType): string;
  IsInputAvailable(): boolean;
  IsSteamVRDrawingControllers(): boolean;
  ShouldApplicationPause(): boolean;
  ShouldApplicationReduceRenderingWork(): boolean;
  PerformFirmwareUpdate(unDeviceIndex: TrackedDeviceIndex_t): EVRFirmwareError;
  AcknowledgeQuit_Exiting(): void;
  GetAppContainerFilePaths(pchBuffer: string, unBufferSize: number): number;
  GetRuntimeVersion(): string;
}

//method class IVRExtendedDisplay
export interface IVRExtendedDisplay {
  GetWindowBounds(pnX: number, pnY: number, pnWidth: number, pnHeight: number): void;
  GetEyeOutputViewport(eEye: EVREye, pnX: number, pnY: number, pnWidth: number, pnHeight: number): void;
  GetDXGIOutputInfo(pnAdapterIndex: number, pnAdapterOutputIndex: number): void;
}

//method class IVRTrackedCamera
export interface IVRTrackedCamera {
  GetCameraErrorNameFromEnum(eCameraError: EVRTrackedCameraError): string;
  HasCamera(nDeviceIndex: TrackedDeviceIndex_t, pHasCamera: boolean): EVRTrackedCameraError;
  GetCameraFrameSize(nDeviceIndex: TrackedDeviceIndex_t, eFrameType: EVRTrackedCameraFrameType, pnWidth: number, pnHeight: number, pnFrameBufferSize: number): EVRTrackedCameraError;
  GetCameraIntrinsics(nDeviceIndex: TrackedDeviceIndex_t, nCameraIndex: number, eFrameType: EVRTrackedCameraFrameType, pFocalLength: HmdVector2_t, pCenter: HmdVector2_t): EVRTrackedCameraError;
  GetCameraProjection(nDeviceIndex: TrackedDeviceIndex_t, nCameraIndex: number, eFrameType: EVRTrackedCameraFrameType, flZNear: number, flZFar: number, pProjection: HmdMatrix44_t): EVRTrackedCameraError;
  AcquireVideoStreamingService(nDeviceIndex: TrackedDeviceIndex_t, pHandle: TrackedCameraHandle_t): EVRTrackedCameraError;
  ReleaseVideoStreamingService(hTrackedCamera: TrackedCameraHandle_t): EVRTrackedCameraError;
  GetVideoStreamFrameBuffer(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pFrameBuffer: Uint8Array, nFrameBufferSize: number, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): EVRTrackedCameraError;
  GetVideoStreamTextureSize(nDeviceIndex: TrackedDeviceIndex_t, eFrameType: EVRTrackedCameraFrameType, pTextureBounds: VRTextureBounds_t, pnWidth: number, pnHeight: number): EVRTrackedCameraError;
  GetVideoStreamTextureD3D11(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pD3D11DeviceOrResource: Uint8Array, ppD3D11ShaderResourceView: Uint8Array, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): EVRTrackedCameraError;
  GetVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pglTextureId: glUInt_t, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): EVRTrackedCameraError;
  ReleaseVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle_t, glTextureId: glUInt_t): EVRTrackedCameraError;
  SetCameraTrackingSpace(eUniverse: ETrackingUniverseOrigin): void;
  GetCameraTrackingSpace(): ETrackingUniverseOrigin;
}

//method class IVRApplications
export interface IVRApplications {
  AddApplicationManifest(pchApplicationManifestFullPath: string, bTemporary: boolean): EVRApplicationError;
  RemoveApplicationManifest(pchApplicationManifestFullPath: string): EVRApplicationError;
  IsApplicationInstalled(pchAppKey: string): boolean;
  GetApplicationCount(): number;
  GetApplicationKeyByIndex(unApplicationIndex: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError;
  GetApplicationKeyByProcessId(unProcessId: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError;
  LaunchApplication(pchAppKey: string): EVRApplicationError;
  LaunchTemplateApplication(pchTemplateAppKey: string, pchNewAppKey: string, pKeys: AppOverrideKeys_t, unKeys: number): EVRApplicationError;
  LaunchApplicationFromMimeType(pchMimeType: string, pchArgs: string): EVRApplicationError;
  LaunchDashboardOverlay(pchAppKey: string): EVRApplicationError;
  CancelApplicationLaunch(pchAppKey: string): boolean;
  IdentifyApplication(unProcessId: number, pchAppKey: string): EVRApplicationError;
  GetApplicationProcessId(pchAppKey: string): number;
  GetApplicationsErrorNameFromEnum(error: EVRApplicationError): string;
  GetApplicationPropertyString(pchAppKey: string, eProperty: EVRApplicationProperty, pchPropertyValueBuffer: string, unPropertyValueBufferLen: number, peError: EVRApplicationError): number;
  GetApplicationPropertyBool(pchAppKey: string, eProperty: EVRApplicationProperty, peError: EVRApplicationError): boolean;
  GetApplicationPropertyUint64(pchAppKey: string, eProperty: EVRApplicationProperty, peError: EVRApplicationError): bigint;
  SetApplicationAutoLaunch(pchAppKey: string, bAutoLaunch: boolean): EVRApplicationError;
  GetApplicationAutoLaunch(pchAppKey: string): boolean;
  SetDefaultApplicationForMimeType(pchAppKey: string, pchMimeType: string): EVRApplicationError;
  GetDefaultApplicationForMimeType(pchMimeType: string, pchAppKeyBuffer: string, unAppKeyBufferLen: number): boolean;
  GetApplicationSupportedMimeTypes(pchAppKey: string, pchMimeTypesBuffer: string, unMimeTypesBuffer: number): boolean;
  GetApplicationsThatSupportMimeType(pchMimeType: string, pchAppKeysThatSupportBuffer: string, unAppKeysThatSupportBuffer: number): number;
  GetApplicationLaunchArguments(unHandle: number, pchArgs: string, unArgs: number): number;
  GetStartingApplication(pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError;
  GetSceneApplicationState(): EVRSceneApplicationState;
  PerformApplicationPrelaunchCheck(pchAppKey: string): EVRApplicationError;
  GetSceneApplicationStateNameFromEnum(state: EVRSceneApplicationState): string;
  LaunchInternalProcess(pchBinaryPath: string, pchArguments: string, pchWorkingDirectory: string): EVRApplicationError;
  GetCurrentSceneProcessId(): number;
}

//method class IVRChaperone
export interface IVRChaperone {
  GetCalibrationState(): ChaperoneCalibrationState;
  GetPlayAreaSize(pSizeX: number, pSizeZ: number): boolean;
  GetPlayAreaRect(rect: HmdQuad_t): boolean;
  ReloadInfo(): void;
  SetSceneColor(color: HmdColor_t): void;
  GetBoundsColor(pOutputColorArray: HmdColor_t, nNumOutputColors: number, flCollisionBoundsFadeDistance: number, pOutputCameraColor: HmdColor_t): void;
  AreBoundsVisible(): boolean;
  ForceBoundsVisible(bForce: boolean): void;
  ResetZeroPose(eTrackingUniverseOrigin: ETrackingUniverseOrigin): void;
}

//method class IVRChaperoneSetup
export interface IVRChaperoneSetup {
  CommitWorkingCopy(configFile: EChaperoneConfigFile): boolean;
  RevertWorkingCopy(): void;
  GetWorkingPlayAreaSize(pSizeX: number, pSizeZ: number): boolean;
  GetWorkingPlayAreaRect(rect: HmdQuad_t): boolean;
  GetWorkingCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t, punQuadsCount: number): boolean;
  GetLiveCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t, punQuadsCount: number): boolean;
  GetWorkingSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): boolean;
  GetWorkingStandingZeroPoseToRawTrackingPose(pmatStandingZeroPoseToRawTrackingPose: HmdMatrix34_t): boolean;
  SetWorkingPlayAreaSize(sizeX: number, sizeZ: number): void;
  SetWorkingCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t, unQuadsCount: number): void;
  SetWorkingPerimeter(pPointBuffer: HmdVector2_t, unPointCount: number): void;
  SetWorkingSeatedZeroPoseToRawTrackingPose(pMatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): void;
  SetWorkingStandingZeroPoseToRawTrackingPose(pMatStandingZeroPoseToRawTrackingPose: HmdMatrix34_t): void;
  ReloadFromDisk(configFile: EChaperoneConfigFile): void;
  GetLiveSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): boolean;
  ExportLiveToBuffer(pBuffer: string, pnBufferLength: number): boolean;
  ImportFromBufferToWorking(pBuffer: string, nImportFlags: number): boolean;
  ShowWorkingSetPreview(): void;
  HideWorkingSetPreview(): void;
  RoomSetupStarting(): void;
}

//method class IVRCompositor
export interface IVRCompositor {
  SetTrackingSpace(eOrigin: ETrackingUniverseOrigin): void;
  GetTrackingSpace(): ETrackingUniverseOrigin;
  WaitGetPoses(pRenderPoseArray: TrackedDevicePose_t, unRenderPoseArrayCount: number, pGamePoseArray: TrackedDevicePose_t, unGamePoseArrayCount: number): EVRCompositorError;
  GetLastPoses(pRenderPoseArray: TrackedDevicePose_t, unRenderPoseArrayCount: number, pGamePoseArray: TrackedDevicePose_t, unGamePoseArrayCount: number): EVRCompositorError;
  GetLastPoseForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex_t, pOutputPose: TrackedDevicePose_t, pOutputGamePose: TrackedDevicePose_t): EVRCompositorError;
  Submit(eEye: EVREye, pTexture: Texture_t, pBounds: VRTextureBounds_t, nSubmitFlags: EVRSubmitFlags): EVRCompositorError;
  SubmitWithArrayIndex(eEye: EVREye, pTexture: Texture_t, unTextureArrayIndex: number, pBounds: VRTextureBounds_t, nSubmitFlags: EVRSubmitFlags): EVRCompositorError;
  ClearLastSubmittedFrame(): void;
  PostPresentHandoff(): void;
  GetFrameTiming(pTiming: Compositor_FrameTiming, unFramesAgo: number): boolean;
  GetFrameTimings(pTiming: Compositor_FrameTiming, nFrames: number): number;
  GetFrameTimeRemaining(): number;
  GetCumulativeStats(pStats: Compositor_CumulativeStats, nStatsSizeInBytes: number): void;
  FadeToColor(fSeconds: number, fRed: number, fGreen: number, fBlue: number, fAlpha: number, bBackground: boolean): void;
  GetCurrentFadeColor(bBackground: boolean): HmdColor_t;
  FadeGrid(fSeconds: number, bFadeGridIn: boolean): void;
  GetCurrentGridAlpha(): number;
  SetSkyboxOverride(pTextures: Texture_t, unTextureCount: number): EVRCompositorError;
  ClearSkyboxOverride(): void;
  CompositorBringToFront(): void;
  CompositorGoToBack(): void;
  CompositorQuit(): void;
  IsFullscreen(): boolean;
  GetCurrentSceneFocusProcess(): number;
  GetLastFrameRenderer(): number;
  CanRenderScene(): boolean;
  ShowMirrorWindow(): void;
  HideMirrorWindow(): void;
  IsMirrorWindowVisible(): boolean;
  CompositorDumpImages(): void;
  ShouldAppRenderWithLowResources(): boolean;
  ForceInterleavedReprojectionOn(bOverride: boolean): void;
  ForceReconnectProcess(): void;
  SuspendRendering(bSuspend: boolean): void;
  GetMirrorTextureD3D11(eEye: EVREye, pD3D11DeviceOrResource: Uint8Array, ppD3D11ShaderResourceView: Uint8Array): EVRCompositorError;
  ReleaseMirrorTextureD3D11(pD3D11ShaderResourceView: Uint8Array): void;
  GetMirrorTextureGL(eEye: EVREye, pglTextureId: glUInt_t, pglSharedTextureHandle: glSharedTextureHandle_t): EVRCompositorError;
  ReleaseSharedGLTexture(glTextureId: glUInt_t, glSharedTextureHandle: glSharedTextureHandle_t): boolean;
  LockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle_t): void;
  UnlockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle_t): void;
  GetVulkanInstanceExtensionsRequired(pchValue: string, unBufferSize: number): number;
  GetVulkanDeviceExtensionsRequired(pPhysicalDevice: VkPhysicalDevice_T, pchValue: string, unBufferSize: number): number;
  SetExplicitTimingMode(eTimingMode: EVRCompositorTimingMode): void;
  SubmitExplicitTimingData(): EVRCompositorError;
  IsMotionSmoothingEnabled(): boolean;
  IsMotionSmoothingSupported(): boolean;
  IsCurrentSceneFocusAppLoading(): boolean;
  SetStageOverride_Async(pchRenderModelPath: string, pTransform: HmdMatrix34_t, pRenderSettings: Compositor_StageRenderSettings, nSizeOfRenderSettings: number): EVRCompositorError;
  ClearStageOverride(): void;
  GetCompositorBenchmarkResults(pBenchmarkResults: Compositor_BenchmarkResults, nSizeOfBenchmarkResults: number): boolean;
  GetLastPosePredictionIDs(pRenderPosePredictionID: number, pGamePosePredictionID: number): EVRCompositorError;
  GetPosesForFrame(unPosePredictionID: number, pPoseArray: TrackedDevicePose_t, unPoseArrayCount: number): EVRCompositorError;
}

//method class IVROverlay
export interface IVROverlay {
  FindOverlay(pchOverlayKey: string, pOverlayHandle: VROverlayHandle_t): EVROverlayError;
  CreateOverlay(pchOverlayKey: string, pchOverlayName: string, pOverlayHandle: VROverlayHandle_t): EVROverlayError;
  DestroyOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError;
  GetOverlayKey(ulOverlayHandle: VROverlayHandle_t, pchValue: string, unBufferSize: number, pError: EVROverlayError): number;
  GetOverlayName(ulOverlayHandle: VROverlayHandle_t, pchValue: string, unBufferSize: number, pError: EVROverlayError): number;
  SetOverlayName(ulOverlayHandle: VROverlayHandle_t, pchName: string): EVROverlayError;
  GetOverlayImageData(ulOverlayHandle: VROverlayHandle_t, pvBuffer: Uint8Array, unBufferSize: number, punWidth: number, punHeight: number): EVROverlayError;
  GetOverlayErrorNameFromEnum(error: EVROverlayError): string;
  SetOverlayRenderingPid(ulOverlayHandle: VROverlayHandle_t, unPID: number): EVROverlayError;
  GetOverlayRenderingPid(ulOverlayHandle: VROverlayHandle_t): number;
  SetOverlayFlag(ulOverlayHandle: VROverlayHandle_t, eOverlayFlag: VROverlayFlags, bEnabled: boolean): EVROverlayError;
  GetOverlayFlag(ulOverlayHandle: VROverlayHandle_t, eOverlayFlag: VROverlayFlags, pbEnabled: boolean): EVROverlayError;
  GetOverlayFlags(ulOverlayHandle: VROverlayHandle_t, pFlags: number): EVROverlayError;
  SetOverlayColor(ulOverlayHandle: VROverlayHandle_t, fRed: number, fGreen: number, fBlue: number): EVROverlayError;
  GetOverlayColor(ulOverlayHandle: VROverlayHandle_t, pfRed: number, pfGreen: number, pfBlue: number): EVROverlayError;
  SetOverlayAlpha(ulOverlayHandle: VROverlayHandle_t, fAlpha: number): EVROverlayError;
  GetOverlayAlpha(ulOverlayHandle: VROverlayHandle_t, pfAlpha: number): EVROverlayError;
  SetOverlayTexelAspect(ulOverlayHandle: VROverlayHandle_t, fTexelAspect: number): EVROverlayError;
  GetOverlayTexelAspect(ulOverlayHandle: VROverlayHandle_t, pfTexelAspect: number): EVROverlayError;
  SetOverlaySortOrder(ulOverlayHandle: VROverlayHandle_t, unSortOrder: number): EVROverlayError;
  GetOverlaySortOrder(ulOverlayHandle: VROverlayHandle_t, punSortOrder: number): EVROverlayError;
  SetOverlayWidthInMeters(ulOverlayHandle: VROverlayHandle_t, fWidthInMeters: number): EVROverlayError;
  GetOverlayWidthInMeters(ulOverlayHandle: VROverlayHandle_t, pfWidthInMeters: number): EVROverlayError;
  SetOverlayCurvature(ulOverlayHandle: VROverlayHandle_t, fCurvature: number): EVROverlayError;
  GetOverlayCurvature(ulOverlayHandle: VROverlayHandle_t, pfCurvature: number): EVROverlayError;
  SetOverlayPreCurvePitch(ulOverlayHandle: VROverlayHandle_t, fRadians: number): EVROverlayError;
  GetOverlayPreCurvePitch(ulOverlayHandle: VROverlayHandle_t, pfRadians: number): EVROverlayError;
  SetOverlayTextureColorSpace(ulOverlayHandle: VROverlayHandle_t, eTextureColorSpace: EColorSpace): EVROverlayError;
  GetOverlayTextureColorSpace(ulOverlayHandle: VROverlayHandle_t, peTextureColorSpace: EColorSpace): EVROverlayError;
  SetOverlayTextureBounds(ulOverlayHandle: VROverlayHandle_t, pOverlayTextureBounds: VRTextureBounds_t): EVROverlayError;
  GetOverlayTextureBounds(ulOverlayHandle: VROverlayHandle_t, pOverlayTextureBounds: VRTextureBounds_t): EVROverlayError;
  GetOverlayTransformType(ulOverlayHandle: VROverlayHandle_t, peTransformType: VROverlayTransformType): EVROverlayError;
  SetOverlayTransformAbsolute(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t): EVROverlayError;
  GetOverlayTransformAbsolute(ulOverlayHandle: VROverlayHandle_t, peTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t): EVROverlayError;
  SetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: VROverlayHandle_t, unTrackedDevice: TrackedDeviceIndex_t, pmatTrackedDeviceToOverlayTransform: HmdMatrix34_t): EVROverlayError;
  GetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: VROverlayHandle_t, punTrackedDevice: TrackedDeviceIndex_t, pmatTrackedDeviceToOverlayTransform: HmdMatrix34_t): EVROverlayError;
  SetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: VROverlayHandle_t, unDeviceIndex: TrackedDeviceIndex_t, pchComponentName: string): EVROverlayError;
  GetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: VROverlayHandle_t, punDeviceIndex: TrackedDeviceIndex_t, pchComponentName: string, unComponentNameSize: number): EVROverlayError;
  SetOverlayTransformCursor(ulCursorOverlayHandle: VROverlayHandle_t, pvHotspot: HmdVector2_t): EVROverlayError;
  GetOverlayTransformCursor(ulOverlayHandle: VROverlayHandle_t, pvHotspot: HmdVector2_t): EVROverlayError;
  SetOverlayTransformProjection(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t, pProjection: VROverlayProjection_t, eEye: EVREye): EVROverlayError;
  ShowOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError;
  HideOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError;
  IsOverlayVisible(ulOverlayHandle: VROverlayHandle_t): boolean;
  GetTransformForOverlayCoordinates(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, coordinatesInOverlay: HmdVector2_t, pmatTransform: HmdMatrix34_t): EVROverlayError;
  WaitFrameSync(nTimeoutMs: number): EVROverlayError;
  PollNextOverlayEvent(ulOverlayHandle: VROverlayHandle_t, pEvent: VREvent_t, uncbVREvent: number): boolean;
  GetOverlayInputMethod(ulOverlayHandle: VROverlayHandle_t, peInputMethod: VROverlayInputMethod): EVROverlayError;
  SetOverlayInputMethod(ulOverlayHandle: VROverlayHandle_t, eInputMethod: VROverlayInputMethod): EVROverlayError;
  GetOverlayMouseScale(ulOverlayHandle: VROverlayHandle_t, pvecMouseScale: HmdVector2_t): EVROverlayError;
  SetOverlayMouseScale(ulOverlayHandle: VROverlayHandle_t, pvecMouseScale: HmdVector2_t): EVROverlayError;
  ComputeOverlayIntersection(ulOverlayHandle: VROverlayHandle_t, pParams: VROverlayIntersectionParams_t, pResults: VROverlayIntersectionResults_t): boolean;
  IsHoverTargetOverlay(ulOverlayHandle: VROverlayHandle_t): boolean;
  SetOverlayIntersectionMask(ulOverlayHandle: VROverlayHandle_t, pMaskPrimitives: VROverlayIntersectionMaskPrimitive_t, unNumMaskPrimitives: number, unPrimitiveSize: number): EVROverlayError;
  TriggerLaserMouseHapticVibration(ulOverlayHandle: VROverlayHandle_t, fDurationSeconds: number, fFrequency: number, fAmplitude: number): EVROverlayError;
  SetOverlayCursor(ulOverlayHandle: VROverlayHandle_t, ulCursorHandle: VROverlayHandle_t): EVROverlayError;
  SetOverlayCursorPositionOverride(ulOverlayHandle: VROverlayHandle_t, pvCursor: HmdVector2_t): EVROverlayError;
  ClearOverlayCursorPositionOverride(ulOverlayHandle: VROverlayHandle_t): EVROverlayError;
  SetOverlayTexture(ulOverlayHandle: VROverlayHandle_t, pTexture: Texture_t): EVROverlayError;
  ClearOverlayTexture(ulOverlayHandle: VROverlayHandle_t): EVROverlayError;
  SetOverlayRaw(ulOverlayHandle: VROverlayHandle_t, pvBuffer: Uint8Array, unWidth: number, unHeight: number, unBytesPerPixel: number): EVROverlayError;
  SetOverlayFromFile(ulOverlayHandle: VROverlayHandle_t, pchFilePath: string): EVROverlayError;
  GetOverlayTexture(ulOverlayHandle: VROverlayHandle_t, pNativeTextureHandle: Uint8Array, pNativeTextureRef: Uint8Array, pWidth: number, pHeight: number, pNativeFormat: number, pAPIType: ETextureType, pColorSpace: EColorSpace, pTextureBounds: VRTextureBounds_t): EVROverlayError;
  ReleaseNativeOverlayHandle(ulOverlayHandle: VROverlayHandle_t, pNativeTextureHandle: Uint8Array): EVROverlayError;
  GetOverlayTextureSize(ulOverlayHandle: VROverlayHandle_t, pWidth: number, pHeight: number): EVROverlayError;
  CreateDashboardOverlay(pchOverlayKey: string, pchOverlayFriendlyName: string, pMainHandle: VROverlayHandle_t, pThumbnailHandle: VROverlayHandle_t): EVROverlayError;
  IsDashboardVisible(): boolean;
  IsActiveDashboardOverlay(ulOverlayHandle: VROverlayHandle_t): boolean;
  SetDashboardOverlaySceneProcess(ulOverlayHandle: VROverlayHandle_t, unProcessId: number): EVROverlayError;
  GetDashboardOverlaySceneProcess(ulOverlayHandle: VROverlayHandle_t, punProcessId: number): EVROverlayError;
  ShowDashboard(pchOverlayToShow: string): void;
  GetPrimaryDashboardDevice(): TrackedDeviceIndex_t;
  ShowKeyboard(eInputMode: EGamepadTextInputMode, eLineInputMode: EGamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): EVROverlayError;
  ShowKeyboardForOverlay(ulOverlayHandle: VROverlayHandle_t, eInputMode: EGamepadTextInputMode, eLineInputMode: EGamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): EVROverlayError;
  GetKeyboardText(pchText: string, cchText: number): number;
  HideKeyboard(): void;
  SetKeyboardTransformAbsolute(eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToKeyboardTransform: HmdMatrix34_t): void;
  SetKeyboardPositionForOverlay(ulOverlayHandle: VROverlayHandle_t, avoidRect: HmdRect2_t): void;
  ShowMessageOverlay(pchText: string, pchCaption: string, pchButton0Text: string, pchButton1Text: string, pchButton2Text: string, pchButton3Text: string): VRMessageOverlayResponse;
  CloseMessageOverlay(): void;
}

//method class IVROverlayView
export interface IVROverlayView {
  AcquireOverlayView(ulOverlayHandle: VROverlayHandle_t, pNativeDevice: VRNativeDevice_t, pOverlayView: VROverlayView_t, unOverlayViewSize: number): EVROverlayError;
  ReleaseOverlayView(pOverlayView: VROverlayView_t): EVROverlayError;
  PostOverlayEvent(ulOverlayHandle: VROverlayHandle_t, pvrEvent: VREvent_t): void;
  IsViewingPermitted(ulOverlayHandle: VROverlayHandle_t): boolean;
}

//method class IVRHeadsetView
export interface IVRHeadsetView {
  SetHeadsetViewSize(nWidth: number, nHeight: number): void;
  GetHeadsetViewSize(pnWidth: number, pnHeight: number): void;
  SetHeadsetViewMode(eHeadsetViewMode: HeadsetViewMode_t): void;
  GetHeadsetViewMode(): HeadsetViewMode_t;
  SetHeadsetViewCropped(bCropped: boolean): void;
  GetHeadsetViewCropped(): boolean;
  GetHeadsetViewAspectRatio(): number;
  SetHeadsetViewBlendRange(flStartPct: number, flEndPct: number): void;
  GetHeadsetViewBlendRange(pStartPct: number, pEndPct: number): void;
}

//method class IVRRenderModels
export interface IVRRenderModels {
  LoadRenderModel_Async(pchRenderModelName: string, ppRenderModel: RenderModel_t): EVRRenderModelError;
  FreeRenderModel(pRenderModel: RenderModel_t): void;
  LoadTexture_Async(textureId: TextureID_t, ppTexture: RenderModel_TextureMap_t): EVRRenderModelError;
  FreeTexture(pTexture: RenderModel_TextureMap_t): void;
  LoadTextureD3D11_Async(textureId: TextureID_t, pD3D11Device: Uint8Array, ppD3D11Texture2D: Uint8Array): EVRRenderModelError;
  LoadIntoTextureD3D11_Async(textureId: TextureID_t, pDstTexture: Uint8Array): EVRRenderModelError;
  FreeTextureD3D11(pD3D11Texture2D: Uint8Array): void;
  GetRenderModelName(unRenderModelIndex: number, pchRenderModelName: string, unRenderModelNameLen: number): number;
  GetRenderModelCount(): number;
  GetComponentCount(pchRenderModelName: string): number;
  GetComponentName(pchRenderModelName: string, unComponentIndex: number, pchComponentName: string, unComponentNameLen: number): number;
  GetComponentButtonMask(pchRenderModelName: string, pchComponentName: string): bigint;
  GetComponentRenderModelName(pchRenderModelName: string, pchComponentName: string, pchComponentRenderModelName: string, unComponentRenderModelNameLen: number): number;
  GetComponentStateForDevicePath(pchRenderModelName: string, pchComponentName: string, devicePath: VRInputValueHandle_t, pState: RenderModel_ControllerMode_State_t, pComponentState: RenderModel_ComponentState_t): boolean;
  GetComponentState(pchRenderModelName: string, pchComponentName: string, pControllerState: VRControllerState_t, pState: RenderModel_ControllerMode_State_t, pComponentState: RenderModel_ComponentState_t): boolean;
  RenderModelHasComponent(pchRenderModelName: string, pchComponentName: string): boolean;
  GetRenderModelThumbnailURL(pchRenderModelName: string, pchThumbnailURL: string, unThumbnailURLLen: number, peError: EVRRenderModelError): number;
  GetRenderModelOriginalPath(pchRenderModelName: string, pchOriginalPath: string, unOriginalPathLen: number, peError: EVRRenderModelError): number;
  GetRenderModelErrorNameFromEnum(error: EVRRenderModelError): string;
}

//method class IVRNotifications
export interface IVRNotifications {
  CreateNotification(ulOverlayHandle: VROverlayHandle_t, ulUserValue: bigint, type: EVRNotificationType, pchText: string, style: EVRNotificationStyle, pImage: NotificationBitmap_t, pNotificationId: VRNotificationId): EVRNotificationError;
  RemoveNotification(notificationId: VRNotificationId): EVRNotificationError;
}

//method class IVRSettings
export interface IVRSettings {
  GetSettingsErrorNameFromEnum(eError: EVRSettingsError): string;
  SetBool(pchSection: string, pchSettingsKey: string, bValue: boolean, peError: EVRSettingsError): void;
  SetInt32(pchSection: string, pchSettingsKey: string, nValue: number, peError: EVRSettingsError): void;
  SetFloat(pchSection: string, pchSettingsKey: string, flValue: number, peError: EVRSettingsError): void;
  SetString(pchSection: string, pchSettingsKey: string, pchValue: string, peError: EVRSettingsError): void;
  GetBool(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): boolean;
  GetInt32(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): number;
  GetFloat(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): number;
  GetString(pchSection: string, pchSettingsKey: string, pchValue: string, unValueLen: number, peError: EVRSettingsError): void;
  RemoveSection(pchSection: string, peError: EVRSettingsError): void;
  RemoveKeyInSection(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): void;
}

//method class IVRScreenshots
export interface IVRScreenshots {
  RequestScreenshot(pOutScreenshotHandle: ScreenshotHandle_t, type: EVRScreenshotType, pchPreviewFilename: string, pchVRFilename: string): EVRScreenshotError;
  HookScreenshot(pSupportedTypes: EVRScreenshotType, numTypes: number): EVRScreenshotError;
  GetScreenshotPropertyType(screenshotHandle: ScreenshotHandle_t, pError: EVRScreenshotError): EVRScreenshotType;
  GetScreenshotPropertyFilename(screenshotHandle: ScreenshotHandle_t, filenameType: EVRScreenshotPropertyFilenames, pchFilename: string, cchFilename: number, pError: EVRScreenshotError): number;
  UpdateScreenshotProgress(screenshotHandle: ScreenshotHandle_t, flProgress: number): EVRScreenshotError;
  TakeStereoScreenshot(pOutScreenshotHandle: ScreenshotHandle_t, pchPreviewFilename: string, pchVRFilename: string): EVRScreenshotError;
  SubmitScreenshot(screenshotHandle: ScreenshotHandle_t, type: EVRScreenshotType, pchSourcePreviewFilename: string, pchSourceVRFilename: string): EVRScreenshotError;
}

//method class IVRResources
export interface IVRResources {
  LoadSharedResource(pchResourceName: string, pchBuffer: string, unBufferLen: number): number;
  GetResourceFullPath(pchResourceName: string, pchResourceTypeDirectory: string, pchPathBuffer: string, unBufferLen: number): number;
}

//method class IVRDriverManager
export interface IVRDriverManager {
  GetDriverCount(): number;
  GetDriverName(nDriver: DriverId_t, pchValue: string, unBufferSize: number): number;
  GetDriverHandle(pchDriverName: string): DriverHandle_t;
  IsEnabled(nDriver: DriverId_t): boolean;
}

//method class IVRInput
export interface IVRInput {
  SetActionManifestPath(pchActionManifestPath: string): EVRInputError;
  GetActionSetHandle(pchActionSetName: string, pHandle: VRActionSetHandle_t): EVRInputError;
  GetActionHandle(pchActionName: string, pHandle: VRActionHandle_t): EVRInputError;
  GetInputSourceHandle(pchInputSourcePath: string, pHandle: VRInputValueHandle_t): EVRInputError;
  UpdateActionState(pSets: VRActiveActionSet_t, unSizeOfVRSelectedActionSet_t: number, unSetCount: number): EVRInputError;
  GetDigitalActionData(action: VRActionHandle_t, pActionData: InputDigitalActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError;
  GetAnalogActionData(action: VRActionHandle_t, pActionData: InputAnalogActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError;
  GetPoseActionDataRelativeToNow(action: VRActionHandle_t, eOrigin: ETrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: InputPoseActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError;
  GetPoseActionDataForNextFrame(action: VRActionHandle_t, eOrigin: ETrackingUniverseOrigin, pActionData: InputPoseActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError;
  GetSkeletalActionData(action: VRActionHandle_t, pActionData: InputSkeletalActionData_t, unActionDataSize: number): EVRInputError;
  GetDominantHand(peDominantHand: ETrackedControllerRole): EVRInputError;
  SetDominantHand(eDominantHand: ETrackedControllerRole): EVRInputError;
  GetBoneCount(action: VRActionHandle_t, pBoneCount: number): EVRInputError;
  GetBoneHierarchy(action: VRActionHandle_t, pParentIndices: BoneIndex_t, unIndexArayCount: number): EVRInputError;
  GetBoneName(action: VRActionHandle_t, nBoneIndex: BoneIndex_t, pchBoneName: string, unNameBufferSize: number): EVRInputError;
  GetSkeletalReferenceTransforms(action: VRActionHandle_t, eTransformSpace: EVRSkeletalTransformSpace, eReferencePose: EVRSkeletalReferencePose, pTransformArray: VRBoneTransform_t, unTransformArrayCount: number): EVRInputError;
  GetSkeletalTrackingLevel(action: VRActionHandle_t, pSkeletalTrackingLevel: EVRSkeletalTrackingLevel): EVRInputError;
  GetSkeletalBoneData(action: VRActionHandle_t, eTransformSpace: EVRSkeletalTransformSpace, eMotionRange: EVRSkeletalMotionRange, pTransformArray: VRBoneTransform_t, unTransformArrayCount: number): EVRInputError;
  GetSkeletalSummaryData(action: VRActionHandle_t, eSummaryType: EVRSummaryType, pSkeletalSummaryData: VRSkeletalSummaryData_t): EVRInputError;
  GetSkeletalBoneDataCompressed(action: VRActionHandle_t, eMotionRange: EVRSkeletalMotionRange, pvCompressedData: Uint8Array, unCompressedSize: number, punRequiredCompressedSize: number): EVRInputError;
  DecompressSkeletalBoneData(pvCompressedBuffer: Uint8Array, unCompressedBufferSize: number, eTransformSpace: EVRSkeletalTransformSpace, pTransformArray: VRBoneTransform_t, unTransformArrayCount: number): EVRInputError;
  TriggerHapticVibrationAction(action: VRActionHandle_t, fStartSecondsFromNow: number, fDurationSeconds: number, fFrequency: number, fAmplitude: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError;
  GetActionOrigins(actionSetHandle: VRActionSetHandle_t, digitalActionHandle: VRActionHandle_t, originsOut: VRInputValueHandle_t, originOutCount: number): EVRInputError;
  GetOriginLocalizedName(origin: VRInputValueHandle_t, pchNameArray: string, unNameArraySize: number, unStringSectionsToInclude: number): EVRInputError;
  GetOriginTrackedDeviceInfo(origin: VRInputValueHandle_t, pOriginInfo: InputOriginInfo_t, unOriginInfoSize: number): EVRInputError;
  GetActionBindingInfo(action: VRActionHandle_t, pOriginInfo: InputBindingInfo_t, unBindingInfoSize: number, unBindingInfoCount: number, punReturnedBindingInfoCount: number): EVRInputError;
  ShowActionOrigins(actionSetHandle: VRActionSetHandle_t, ulActionHandle: VRActionHandle_t): EVRInputError;
  ShowBindingsForActionSet(pSets: VRActiveActionSet_t, unSizeOfVRSelectedActionSet_t: number, unSetCount: number, originToHighlight: VRInputValueHandle_t): EVRInputError;
  GetComponentStateForBinding(pchRenderModelName: string, pchComponentName: string, pOriginInfo: InputBindingInfo_t, unBindingInfoSize: number, unBindingInfoCount: number, pComponentState: RenderModel_ComponentState_t): EVRInputError;
  IsUsingLegacyInput(): boolean;
  OpenBindingUI(pchAppKey: string, ulActionSetHandle: VRActionSetHandle_t, ulDeviceHandle: VRInputValueHandle_t, bShowOnDesktop: boolean): EVRInputError;
  GetBindingVariant(ulDevicePath: VRInputValueHandle_t, pchVariantArray: string, unVariantArraySize: number): EVRInputError;
}

//method class IVRIOBuffer
export interface IVRIOBuffer {
  Open(pchPath: string, mode: EIOBufferMode, unElementSize: number, unElements: number, pulBuffer: IOBufferHandle_t): EIOBufferError;
  Close(ulBuffer: IOBufferHandle_t): EIOBufferError;
  Read(ulBuffer: IOBufferHandle_t, pDst: Uint8Array, unBytes: number, punRead: number): EIOBufferError;
  Write(ulBuffer: IOBufferHandle_t, pSrc: Uint8Array, unBytes: number): EIOBufferError;
  PropertyContainer(ulBuffer: IOBufferHandle_t): PropertyContainerHandle_t;
  HasReaders(ulBuffer: IOBufferHandle_t): boolean;
}

//method class IVRSpatialAnchors
export interface IVRSpatialAnchors {
  CreateSpatialAnchorFromDescriptor(pchDescriptor: string, pHandleOut: SpatialAnchorHandle_t): EVRSpatialAnchorError;
  CreateSpatialAnchorFromPose(unDeviceIndex: TrackedDeviceIndex_t, eOrigin: ETrackingUniverseOrigin, pPose: SpatialAnchorPose_t, pHandleOut: SpatialAnchorHandle_t): EVRSpatialAnchorError;
  GetSpatialAnchorPose(unHandle: SpatialAnchorHandle_t, eOrigin: ETrackingUniverseOrigin, pPoseOut: SpatialAnchorPose_t): EVRSpatialAnchorError;
  GetSpatialAnchorDescriptor(unHandle: SpatialAnchorHandle_t, pchDescriptorOut: string, punDescriptorBufferLenInOut: number): EVRSpatialAnchorError;
}

//method class IVRDebug
export interface IVRDebug {
  EmitVrProfilerEvent(pchMessage: string): EVRDebugError;
  BeginVrProfilerEvent(pHandleOut: VrProfilerEventHandle_t): EVRDebugError;
  FinishVrProfilerEvent(hHandle: VrProfilerEventHandle_t, pchMessage: string): EVRDebugError;
  DriverDebugRequest(unDeviceIndex: TrackedDeviceIndex_t, pchRequest: string, pchResponseBuffer: string, unResponseBufferSize: number): number;
}

//method class IVRProperties
export interface IVRProperties {
  ReadPropertyBatch(ulContainerHandle: PropertyContainerHandle_t, pBatch: PropertyRead_t, unBatchEntryCount: number): ETrackedPropertyError;
  WritePropertyBatch(ulContainerHandle: PropertyContainerHandle_t, pBatch: PropertyWrite_t, unBatchEntryCount: number): ETrackedPropertyError;
  GetPropErrorNameFromEnum(error: ETrackedPropertyError): string;
  TrackedDeviceToPropertyContainer(nDevice: TrackedDeviceIndex_t): PropertyContainerHandle_t;
}

//method class IVRPaths
export interface IVRPaths {
  ReadPathBatch(ulRootHandle: PropertyContainerHandle_t, pBatch: PathRead_t, unBatchEntryCount: number): ETrackedPropertyError;
  WritePathBatch(ulRootHandle: PropertyContainerHandle_t, pBatch: PathWrite_t, unBatchEntryCount: number): ETrackedPropertyError;
  StringToHandle(pHandle: PathHandle_t, pchPath: string): ETrackedPropertyError;
  HandleToString(pHandle: PathHandle_t, pchBuffer: string, unBufferSize: number, punBufferSizeUsed: number): ETrackedPropertyError;
}

//method class IVRBlockQueue
export interface IVRBlockQueue {
  Create(pulQueueHandle: PropertyContainerHandle_t, pchPath: string, unBlockDataSize: number, unBlockHeaderSize: number, unBlockCount: number, unFlags: number): EBlockQueueError;
  Connect(pulQueueHandle: PropertyContainerHandle_t, pchPath: string): EBlockQueueError;
  Destroy(ulQueueHandle: PropertyContainerHandle_t): EBlockQueueError;
  AcquireWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array): EBlockQueueError;
  ReleaseWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, ulBlockHandle: PropertyContainerHandle_t): EBlockQueueError;
  WaitAndAcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array, eReadType: EBlockQueueReadType, unTimeoutMs: number): EBlockQueueError;
  AcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array, eReadType: EBlockQueueReadType): EBlockQueueError;
  ReleaseReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, ulBlockHandle: PropertyContainerHandle_t): EBlockQueueError;
  QueueHasReader(ulQueueHandle: PropertyContainerHandle_t, pbHasReaders: boolean): EBlockQueueError;
}

//#endregion
//#region WRAPPERS
/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetRecommendedRenderTargetSize",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
export class IVRSystem {
  constructor(private ptr: Deno.PointerValue) {}

  GetRecommendedRenderTargetSize(pnWidth: number, pnHeight: number): [void, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "void" });
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const result = func.call(this.ptr, pnWidthPtr, pnHeightPtr);
    return [result, pnWidthBuffer, pnHeightBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetProjectionMatrix",
  "returntype": "struct vr::HmdMatrix44_t",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "fNearZ",
      "paramtype": "float"
    },
    {
      "paramname": "fFarZ",
      "paramtype": "float"
    }
  ]
}*/
  GetProjectionMatrix(eEye: EVREye, fNearZ: number, fFarZ: number): HmdMatrix44_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "f32", "f32"], result: { struct: ["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"] } });
    const fNearZArray = new Float64Array([fNearZ]);
    const fNearZPtr = Deno.UnsafePointer.of(fNearZArray);
    const fFarZArray = new Float64Array([fFarZ]);
    const fFarZPtr = Deno.UnsafePointer.of(fFarZArray);
    const result = func.call(this.ptr, eEye, fNearZ, fFarZ);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      m: Array(4).fill(0).map((_, i1) => Array(4).fill(0).map((_, i0) => (    result as any)[0][i0])[i1]),
    } as HmdMatrix44_t;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetProjectionRaw",
  "returntype": "void",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pfLeft",
      "paramtype": "float *"
    },
    {
      "paramname": "pfRight",
      "paramtype": "float *"
    },
    {
      "paramname": "pfTop",
      "paramtype": "float *"
    },
    {
      "paramname": "pfBottom",
      "paramtype": "float *"
    }
  ]
}*/
  GetProjectionRaw(eEye: EVREye, pfLeft: number, pfRight: number, pfTop: number, pfBottom: number): [void, number, number, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pfLeftArray = new Float64Array([pfLeft]);
    const pfLeftPtr = Deno.UnsafePointer.of(pfLeftArray);
    const pfRightArray = new Float64Array([pfRight]);
    const pfRightPtr = Deno.UnsafePointer.of(pfRightArray);
    const pfTopArray = new Float64Array([pfTop]);
    const pfTopPtr = Deno.UnsafePointer.of(pfTopArray);
    const pfBottomArray = new Float64Array([pfBottom]);
    const pfBottomPtr = Deno.UnsafePointer.of(pfBottomArray);
    const result = func.call(this.ptr, eEye, pfLeftPtr, pfRightPtr, pfTopPtr, pfBottomPtr);
    return [result, pfLeftBuffer, pfRightBuffer, pfTopBuffer, pfBottomBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "ComputeDistortion",
  "returntype": "bool",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "fU",
      "paramtype": "float"
    },
    {
      "paramname": "fV",
      "paramtype": "float"
    },
    {
      "paramname": "pDistortionCoordinates",
      "paramtype": "struct vr::DistortionCoordinates_t *"
    }
  ]
}*/
  ComputeDistortion(eEye: EVREye, fU: number, fV: number, pDistortionCoordinates: DistortionCoordinates_t): [boolean, DistortionCoordinates_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "f32", "f32", "pointer"], result: "u8" });
    const pDistortionCoordinatesBuffer = new ArrayBuffer(24);
    const pDistortionCoordinatesView = new DataView(pDistortionCoordinatesBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pDistortionCoordinatesView.setFloat32((i0 * 1) * 4, pDistortionCoordinates.rfRed[i0], true);
    }
    for (let i0 = 0; i0 < 2; i0++) {
        pDistortionCoordinatesView.setFloat32((i0 * 1) * 4, pDistortionCoordinates.rfGreen[i0], true);
    }
    for (let i0 = 0; i0 < 2; i0++) {
        pDistortionCoordinatesView.setFloat32((i0 * 1) * 4, pDistortionCoordinates.rfBlue[i0], true);
    }
    const pDistortionCoordinatesPtr = Deno.UnsafePointer.of(pDistortionCoordinatesBuffer);
    const fUArray = new Float64Array([fU]);
    const fUPtr = Deno.UnsafePointer.of(fUArray);
    const fVArray = new Float64Array([fV]);
    const fVPtr = Deno.UnsafePointer.of(fVArray);
    const result = func.call(this.ptr, eEye, fU, fV, pDistortionCoordinatesPtr);
    return [result, DistortionCoordinates_t.fromBuffer(pDistortionCoordinatesBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetEyeToHeadTransform",
  "returntype": "struct vr::HmdMatrix34_t",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    }
  ]
}*/
  GetEyeToHeadTransform(eEye: EVREye): HmdMatrix34_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: { struct: ["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"] } });
    const result = func.call(this.ptr, eEye);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      m: Array(4).fill(0).map((_, i1) => Array(3).fill(0).map((_, i0) => (    result as any)[0][i0])[i1]),
    } as HmdMatrix34_t;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetTimeSinceLastVsync",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pfSecondsSinceLastVsync",
      "paramtype": "float *"
    },
    {
      "paramname": "pulFrameCounter",
      "paramtype": "uint64_t *"
    }
  ]
}*/
  GetTimeSinceLastVsync(pfSecondsSinceLastVsync: number, pulFrameCounter: bigint): [boolean, number, bigint] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pfSecondsSinceLastVsyncArray = new Float64Array([pfSecondsSinceLastVsync]);
    const pfSecondsSinceLastVsyncPtr = Deno.UnsafePointer.of(pfSecondsSinceLastVsyncArray);
    const pulFrameCounterBuffer = new BigUint64Array([pulFrameCounter]);
    const pulFrameCounterPtr = Deno.UnsafePointer.of(pulFrameCounterBuffer);
    const result = func.call(this.ptr, pfSecondsSinceLastVsyncPtr, pulFrameCounterPtr);
    return [result, pfSecondsSinceLastVsyncBuffer, pulFrameCounterBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetD3D9AdapterIndex",
  "returntype": "int32_t"
}*/
  GetD3D9AdapterIndex(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetDXGIOutputInfo",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnAdapterIndex",
      "paramtype": "int32_t *"
    }
  ]
}*/
  GetDXGIOutputInfo(pnAdapterIndex: number): [void, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pnAdapterIndexArray = new Float64Array([pnAdapterIndex]);
    const pnAdapterIndexPtr = Deno.UnsafePointer.of(pnAdapterIndexArray);
    const result = func.call(this.ptr, pnAdapterIndexPtr);
    return [result, pnAdapterIndexBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetOutputDevice",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnDevice",
      "paramtype": "uint64_t *"
    },
    {
      "paramname": "textureType",
      "paramtype": "vr::ETextureType"
    },
    {
      "paramname": "pInstance",
      "paramtype": "struct VkInstance_T *"
    }
  ]
}*/
  GetOutputDevice(pnDevice: bigint, textureType: ETextureType, pInstance: VkInstance_T): [void, bigint, VkInstance_T] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "pointer"], result: "void" });
    const pnDeviceBuffer = new BigUint64Array([pnDevice]);
    const pnDevicePtr = Deno.UnsafePointer.of(pnDeviceBuffer);
    const result = func.call(this.ptr, pnDevicePtr, textureType, pInstancePtr);
    return [result, pnDeviceBuffer, pInstanceBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "IsDisplayOnDesktop",
  "returntype": "bool"
}*/
  IsDisplayOnDesktop(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "SetDisplayVisibility",
  "returntype": "bool",
  "params": [
    {
      "paramname": "bIsVisibleOnDesktop",
      "paramtype": "bool"
    }
  ]
}*/
  SetDisplayVisibility(bIsVisibleOnDesktop: boolean): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: "u8" });
    const bIsVisibleOnDesktopArray = new Uint8Array([bIsVisibleOnDesktop ? 1 : 0]);
    const bIsVisibleOnDesktopPtr = Deno.UnsafePointer.of(bIsVisibleOnDesktopArray);
    const result = func.call(this.ptr, bIsVisibleOnDesktop ? 1 : 0);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetDeviceToAbsoluteTrackingPose",
  "returntype": "void",
  "params": [
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "fPredictedSecondsToPhotonsFromNow",
      "paramtype": "float"
    },
    {
      "paramname": "pTrackedDevicePoseArray",
      "array_count": "unTrackedDevicePoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unTrackedDevicePoseArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetDeviceToAbsoluteTrackingPose(eOrigin: ETrackingUniverseOrigin, fPredictedSecondsToPhotonsFromNow: number, pTrackedDevicePoseArray: TrackedDevicePose_t[], unTrackedDevicePoseArrayCount: number): [void, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "f32", "pointer", "u32"], result: "void" });
    const pTrackedDevicePoseArrayCount = unTrackedDevicePoseArrayCount;
    const pTrackedDevicePoseArrayBuffer = new ArrayBuffer(88 * pTrackedDevicePoseArrayCount);
    const pTrackedDevicePoseArrayView = new DataView(pTrackedDevicePoseArrayBuffer);
    const pTrackedDevicePoseArrayPtr = Deno.UnsafePointer.of(pTrackedDevicePoseArrayBuffer);
    const fPredictedSecondsToPhotonsFromNowArray = new Float64Array([fPredictedSecondsToPhotonsFromNow]);
    const fPredictedSecondsToPhotonsFromNowPtr = Deno.UnsafePointer.of(fPredictedSecondsToPhotonsFromNowArray);
    const unTrackedDevicePoseArrayCountArray = new Float64Array([unTrackedDevicePoseArrayCount]);
    const unTrackedDevicePoseArrayCountPtr = Deno.UnsafePointer.of(unTrackedDevicePoseArrayCountArray);
    const result = func.call(this.ptr, eOrigin, fPredictedSecondsToPhotonsFromNow, pTrackedDevicePoseArrayPtr, unTrackedDevicePoseArrayCount);
    return [result, TrackedDevicePose_t.fromBuffer(pTrackedDevicePoseArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetSeatedZeroPoseToStandingAbsoluteTrackingPose",
  "returntype": "struct vr::HmdMatrix34_t"
}*/
  GetSeatedZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: { struct: ["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"] } });
    const result = func.call(this.ptr);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      m: Array(4).fill(0).map((_, i1) => Array(3).fill(0).map((_, i0) => (    result as any)[0][i0])[i1]),
    } as HmdMatrix34_t;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetRawZeroPoseToStandingAbsoluteTrackingPose",
  "returntype": "struct vr::HmdMatrix34_t"
}*/
  GetRawZeroPoseToStandingAbsoluteTrackingPose(): HmdMatrix34_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: { struct: ["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"] } });
    const result = func.call(this.ptr);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      m: Array(4).fill(0).map((_, i1) => Array(3).fill(0).map((_, i0) => (    result as any)[0][i0])[i1]),
    } as HmdMatrix34_t;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetSortedTrackedDeviceIndicesOfClass",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "eTrackedDeviceClass",
      "paramtype": "vr::ETrackedDeviceClass"
    },
    {
      "paramname": "punTrackedDeviceIndexArray",
      "array_count": "unTrackedDeviceIndexArrayCount",
      "paramtype": "vr::TrackedDeviceIndex_t *"
    },
    {
      "paramname": "unTrackedDeviceIndexArrayCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unRelativeToTrackedDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  GetSortedTrackedDeviceIndicesOfClass(eTrackedDeviceClass: ETrackedDeviceClass, punTrackedDeviceIndexArray: TrackedDeviceIndex_t[], unTrackedDeviceIndexArrayCount: number, unRelativeToTrackedDeviceIndex: TrackedDeviceIndex_t): [number, TrackedDeviceIndex_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "u32", "u32"], result: "u32" });
    const punTrackedDeviceIndexArrayArray = new Float64Array([punTrackedDeviceIndexArray]);
    const punTrackedDeviceIndexArrayPtr = Deno.UnsafePointer.of(punTrackedDeviceIndexArrayArray);
    const unTrackedDeviceIndexArrayCountArray = new Float64Array([unTrackedDeviceIndexArrayCount]);
    const unTrackedDeviceIndexArrayCountPtr = Deno.UnsafePointer.of(unTrackedDeviceIndexArrayCountArray);
    const unRelativeToTrackedDeviceIndexArray = new Float64Array([unRelativeToTrackedDeviceIndex]);
    const unRelativeToTrackedDeviceIndexPtr = Deno.UnsafePointer.of(unRelativeToTrackedDeviceIndexArray);
    const result = func.call(this.ptr, eTrackedDeviceClass, punTrackedDeviceIndexArrayPtr, unTrackedDeviceIndexArrayCount, unRelativeToTrackedDeviceIndex);
    return [result, punTrackedDeviceIndexArrayBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetTrackedDeviceActivityLevel",
  "returntype": "vr::EDeviceActivityLevel",
  "params": [
    {
      "paramname": "unDeviceId",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  GetTrackedDeviceActivityLevel(unDeviceId: TrackedDeviceIndex_t): EDeviceActivityLevel {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const unDeviceIdArray = new Float64Array([unDeviceId]);
    const unDeviceIdPtr = Deno.UnsafePointer.of(unDeviceIdArray);
    const result = func.call(this.ptr, unDeviceId);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "ApplyTransform",
  "returntype": "void",
  "params": [
    {
      "paramname": "pOutputPose",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "pTrackedDevicePose",
      "paramtype": "const struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "pTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  ApplyTransform(pOutputPose: TrackedDevicePose_t, pTrackedDevicePose: TrackedDevicePose_t, pTransform: HmdMatrix34_t): [void, TrackedDevicePose_t, TrackedDevicePose_t, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pOutputPoseBuffer = new ArrayBuffer(88);
    const pOutputPoseView = new DataView(pOutputPoseBuffer);
    const pOutputPosePtr = Deno.UnsafePointer.of(pOutputPoseBuffer);
    const pTrackedDevicePoseBuffer = new ArrayBuffer(88);
    const pTrackedDevicePoseView = new DataView(pTrackedDevicePoseBuffer);
    const pTrackedDevicePosePtr = Deno.UnsafePointer.of(pTrackedDevicePoseBuffer);
    const pTransformBuffer = new ArrayBuffer(48);
    const pTransformView = new DataView(pTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pTransform.m[i0][i1], true);
        }
    }
    const pTransformPtr = Deno.UnsafePointer.of(pTransformBuffer);
    const result = func.call(this.ptr, pOutputPosePtr, pTrackedDevicePosePtr, pTransformPtr);
    return [result, TrackedDevicePose_t.fromBuffer(pOutputPoseBuffer, 0), TrackedDevicePose_t.fromBuffer(pTrackedDevicePoseBuffer, 0), HmdMatrix34_t.fromBuffer(pTransformBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetTrackedDeviceIndexForControllerRole",
  "returntype": "vr::TrackedDeviceIndex_t",
  "params": [
    {
      "paramname": "unDeviceType",
      "paramtype": "vr::ETrackedControllerRole"
    }
  ]
}*/
  GetTrackedDeviceIndexForControllerRole(unDeviceType: ETrackedControllerRole): TrackedDeviceIndex_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "u32" });
    const result = func.call(this.ptr, unDeviceType);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetControllerRoleForTrackedDeviceIndex",
  "returntype": "vr::ETrackedControllerRole",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  GetControllerRoleForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex_t): ETrackedControllerRole {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetTrackedDeviceClass",
  "returntype": "vr::ETrackedDeviceClass",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  GetTrackedDeviceClass(unDeviceIndex: TrackedDeviceIndex_t): ETrackedDeviceClass {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "IsTrackedDeviceConnected",
  "returntype": "bool",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  IsTrackedDeviceConnected(unDeviceIndex: TrackedDeviceIndex_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(160));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "u8" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetBoolTrackedDeviceProperty",
  "returntype": "bool",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetBoolTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): [boolean, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(168));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: "u8" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetFloatTrackedDeviceProperty",
  "returntype": "float",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetFloatTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): [number, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(176));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: "f32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetInt32TrackedDeviceProperty",
  "returntype": "int32_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetInt32TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): [number, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(184));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: "i32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetUint64TrackedDeviceProperty",
  "returntype": "uint64_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetUint64TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): [bigint, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(192));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: "u64" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetMatrix34TrackedDeviceProperty",
  "returntype": "struct vr::HmdMatrix34_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetMatrix34TrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pError: ETrackedPropertyError): [HmdMatrix34_t, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(200));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: { struct: ["f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32","f32"] } });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetArrayTrackedDeviceProperty",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "propType",
      "paramtype": "vr::PropertyTypeTag_t"
    },
    {
      "paramname": "pBuffer",
      "paramtype": "void *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetArrayTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, propType: PropertyTypeTag_t, pBuffer: Uint8Array, unBufferSize: number, pError: ETrackedPropertyError): [number, Uint8Array, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(208));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "u32", "pointer", "u32", "pointer"], result: "u32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const propTypeArray = new Float64Array([propType]);
    const propTypePtr = Deno.UnsafePointer.of(propTypeArray);
    const pBufferPtr = Deno.UnsafePointer.of(pBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, propType, pBufferPtr, unBufferSize, pErrorPtr);
    return [result, pBufferBuffer, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetStringTrackedDeviceProperty",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "prop",
      "paramtype": "vr::ETrackedDeviceProperty"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::ETrackedPropertyError *"
    }
  ]
}*/
  GetStringTrackedDeviceProperty(unDeviceIndex: TrackedDeviceIndex_t, prop: ETrackedDeviceProperty, pchValue: string, unBufferSize: number, pError: ETrackedPropertyError): [number, ETrackedPropertyError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(216));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "u32", "pointer"], result: "u32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, unDeviceIndex, prop, pchValuePtr, unBufferSize, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetPropErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "error",
      "paramtype": "vr::ETrackedPropertyError"
    }
  ]
}*/
  GetPropErrorNameFromEnum(error: ETrackedPropertyError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(224));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, error);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "PollNextEvent",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pEvent",
      "paramtype": "struct vr::VREvent_t *"
    },
    {
      "paramname": "uncbVREvent",
      "paramtype": "uint32_t"
    }
  ]
}*/
  PollNextEvent(pEvent: VREvent_t, uncbVREvent: number): [boolean, VREvent_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(232));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u8" });
    const pEventBuffer = new ArrayBuffer(NaN);
    const pEventView = new DataView(pEventBuffer);
    const pEventPtr = Deno.UnsafePointer.of(pEventBuffer);
    const uncbVREventArray = new Float64Array([uncbVREvent]);
    const uncbVREventPtr = Deno.UnsafePointer.of(uncbVREventArray);
    const result = func.call(this.ptr, pEventPtr, uncbVREvent);
    return [result, VREvent_t.fromBuffer(pEventBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "PollNextEventWithPose",
  "returntype": "bool",
  "params": [
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pEvent",
      "paramtype": "struct vr::VREvent_t *"
    },
    {
      "paramname": "uncbVREvent",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pTrackedDevicePose",
      "paramtype": "vr::TrackedDevicePose_t *"
    }
  ]
}*/
  PollNextEventWithPose(eOrigin: ETrackingUniverseOrigin, pEvent: VREvent_t, uncbVREvent: number, pTrackedDevicePose: TrackedDevicePose_t): [boolean, VREvent_t, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(240));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "u32", "pointer"], result: "u8" });
    const pEventBuffer = new ArrayBuffer(NaN);
    const pEventView = new DataView(pEventBuffer);
    const pEventPtr = Deno.UnsafePointer.of(pEventBuffer);
    const pTrackedDevicePoseBuffer = new ArrayBuffer(88);
    const pTrackedDevicePoseView = new DataView(pTrackedDevicePoseBuffer);
    const pTrackedDevicePosePtr = Deno.UnsafePointer.of(pTrackedDevicePoseBuffer);
    const uncbVREventArray = new Float64Array([uncbVREvent]);
    const uncbVREventPtr = Deno.UnsafePointer.of(uncbVREventArray);
    const result = func.call(this.ptr, eOrigin, pEventPtr, uncbVREvent, pTrackedDevicePosePtr);
    return [result, VREvent_t.fromBuffer(pEventBuffer, 0), TrackedDevicePose_t.fromBuffer(pTrackedDevicePoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetEventTypeNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "eType",
      "paramtype": "vr::EVREventType"
    }
  ]
}*/
  GetEventTypeNameFromEnum(eType: EVREventType): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(248));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, eType);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetHiddenAreaMesh",
  "returntype": "struct vr::HiddenAreaMesh_t",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "type",
      "paramtype": "vr::EHiddenAreaMeshType"
    }
  ]
}*/
  GetHiddenAreaMesh(eEye: EVREye, type: EHiddenAreaMeshType): HiddenAreaMesh_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(256));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "i32"], result: { struct: ["pointer", "u32"] } });
    const result = func.call(this.ptr, eEye, type);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      pVertexData: (result as any)[0],
      unTriangleCount: (result as any)[1],
    } as HiddenAreaMesh_t;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetControllerState",
  "returntype": "bool",
  "params": [
    {
      "paramname": "unControllerDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pControllerState",
      "paramtype": "vr::VRControllerState_t *"
    },
    {
      "paramname": "unControllerStateSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetControllerState(unControllerDeviceIndex: TrackedDeviceIndex_t, pControllerState: VRControllerState_t, unControllerStateSize: number): [boolean, VRControllerState_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(264));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "u8" });
    const unControllerDeviceIndexArray = new Float64Array([unControllerDeviceIndex]);
    const unControllerDeviceIndexPtr = Deno.UnsafePointer.of(unControllerDeviceIndexArray);
    const pControllerStateBuffer = new ArrayBuffer(64);
    const pControllerStateView = new DataView(pControllerStateBuffer);
    const pControllerStatePtr = Deno.UnsafePointer.of(pControllerStateBuffer);
    const unControllerStateSizeArray = new Float64Array([unControllerStateSize]);
    const unControllerStateSizePtr = Deno.UnsafePointer.of(unControllerStateSizeArray);
    const result = func.call(this.ptr, unControllerDeviceIndex, pControllerStatePtr, unControllerStateSize);
    return [result, pControllerStateBuffer];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetControllerStateWithPose",
  "returntype": "bool",
  "params": [
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "unControllerDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pControllerState",
      "paramtype": "vr::VRControllerState_t *"
    },
    {
      "paramname": "unControllerStateSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pTrackedDevicePose",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    }
  ]
}*/
  GetControllerStateWithPose(eOrigin: ETrackingUniverseOrigin, unControllerDeviceIndex: TrackedDeviceIndex_t, pControllerState: VRControllerState_t, unControllerStateSize: number, pTrackedDevicePose: TrackedDevicePose_t): [boolean, VRControllerState_t, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(272));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "u32", "pointer", "u32", "pointer"], result: "u8" });
    const pTrackedDevicePoseBuffer = new ArrayBuffer(88);
    const pTrackedDevicePoseView = new DataView(pTrackedDevicePoseBuffer);
    const pTrackedDevicePosePtr = Deno.UnsafePointer.of(pTrackedDevicePoseBuffer);
    const unControllerDeviceIndexArray = new Float64Array([unControllerDeviceIndex]);
    const unControllerDeviceIndexPtr = Deno.UnsafePointer.of(unControllerDeviceIndexArray);
    const pControllerStateBuffer = new ArrayBuffer(64);
    const pControllerStateView = new DataView(pControllerStateBuffer);
    const pControllerStatePtr = Deno.UnsafePointer.of(pControllerStateBuffer);
    const unControllerStateSizeArray = new Float64Array([unControllerStateSize]);
    const unControllerStateSizePtr = Deno.UnsafePointer.of(unControllerStateSizeArray);
    const result = func.call(this.ptr, eOrigin, unControllerDeviceIndex, pControllerStatePtr, unControllerStateSize, pTrackedDevicePosePtr);
    return [result, pControllerStateBuffer, TrackedDevicePose_t.fromBuffer(pTrackedDevicePoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "TriggerHapticPulse",
  "returntype": "void",
  "params": [
    {
      "paramname": "unControllerDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "unAxisId",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "usDurationMicroSec",
      "paramtype": "unsigned short"
    }
  ]
}*/
  TriggerHapticPulse(unControllerDeviceIndex: TrackedDeviceIndex_t, unAxisId: number, usDurationMicroSec: number): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(280));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "u32", "u16"], result: "void" });
    const unControllerDeviceIndexArray = new Float64Array([unControllerDeviceIndex]);
    const unControllerDeviceIndexPtr = Deno.UnsafePointer.of(unControllerDeviceIndexArray);
    const unAxisIdArray = new Float64Array([unAxisId]);
    const unAxisIdPtr = Deno.UnsafePointer.of(unAxisIdArray);
    const usDurationMicroSecArray = new Float64Array([usDurationMicroSec]);
    const usDurationMicroSecPtr = Deno.UnsafePointer.of(usDurationMicroSecArray);
    const result = func.call(this.ptr, unControllerDeviceIndex, unAxisId, usDurationMicroSec);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetButtonIdNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "eButtonId",
      "paramtype": "vr::EVRButtonId"
    }
  ]
}*/
  GetButtonIdNameFromEnum(eButtonId: EVRButtonId): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(288));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, eButtonId);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetControllerAxisTypeNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "eAxisType",
      "paramtype": "vr::EVRControllerAxisType"
    }
  ]
}*/
  GetControllerAxisTypeNameFromEnum(eAxisType: EVRControllerAxisType): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(296));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, eAxisType);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "IsInputAvailable",
  "returntype": "bool"
}*/
  IsInputAvailable(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(304));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "IsSteamVRDrawingControllers",
  "returntype": "bool"
}*/
  IsSteamVRDrawingControllers(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(312));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "ShouldApplicationPause",
  "returntype": "bool"
}*/
  ShouldApplicationPause(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(320));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "ShouldApplicationReduceRenderingWork",
  "returntype": "bool"
}*/
  ShouldApplicationReduceRenderingWork(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(328));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "PerformFirmwareUpdate",
  "returntype": "vr::EVRFirmwareError",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  PerformFirmwareUpdate(unDeviceIndex: TrackedDeviceIndex_t): EVRFirmwareError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(336));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "AcknowledgeQuit_Exiting",
  "returntype": "void"
}*/
  AcknowledgeQuit_Exiting(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(344));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetAppContainerFilePaths",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetAppContainerFilePaths(pchBuffer: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(352));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u32" });
    const pchBufferBuffer = new TextEncoder().encode(pchBuffer + '\0');
    const pchBufferPtr = Deno.UnsafePointer.of(pchBufferBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, pchBufferPtr, unBufferSize);
    return result;
  }

/*{
  "classname": "vr::IVRSystem",
  "methodname": "GetRuntimeVersion",
  "returntype": "const char *"
}*/
  GetRuntimeVersion(): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(360));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "pointer" });
    const result = func.call(this.ptr);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRExtendedDisplay",
  "methodname": "GetWindowBounds",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnX",
      "paramtype": "int32_t *"
    },
    {
      "paramname": "pnY",
      "paramtype": "int32_t *"
    },
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
}

export class IVRExtendedDisplay {
  constructor(private ptr: Deno.PointerValue) {}

  GetWindowBounds(pnX: number, pnY: number, pnWidth: number, pnHeight: number): [void, number, number, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pnXArray = new Float64Array([pnX]);
    const pnXPtr = Deno.UnsafePointer.of(pnXArray);
    const pnYArray = new Float64Array([pnY]);
    const pnYPtr = Deno.UnsafePointer.of(pnYArray);
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const result = func.call(this.ptr, pnXPtr, pnYPtr, pnWidthPtr, pnHeightPtr);
    return [result, pnXBuffer, pnYBuffer, pnWidthBuffer, pnHeightBuffer];
  }

/*{
  "classname": "vr::IVRExtendedDisplay",
  "methodname": "GetEyeOutputViewport",
  "returntype": "void",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pnX",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnY",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetEyeOutputViewport(eEye: EVREye, pnX: number, pnY: number, pnWidth: number, pnHeight: number): [void, number, number, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pnXArray = new Float64Array([pnX]);
    const pnXPtr = Deno.UnsafePointer.of(pnXArray);
    const pnYArray = new Float64Array([pnY]);
    const pnYPtr = Deno.UnsafePointer.of(pnYArray);
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const result = func.call(this.ptr, eEye, pnXPtr, pnYPtr, pnWidthPtr, pnHeightPtr);
    return [result, pnXBuffer, pnYBuffer, pnWidthBuffer, pnHeightBuffer];
  }

/*{
  "classname": "vr::IVRExtendedDisplay",
  "methodname": "GetDXGIOutputInfo",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnAdapterIndex",
      "paramtype": "int32_t *"
    },
    {
      "paramname": "pnAdapterOutputIndex",
      "paramtype": "int32_t *"
    }
  ]
}*/
  GetDXGIOutputInfo(pnAdapterIndex: number, pnAdapterOutputIndex: number): [void, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "void" });
    const pnAdapterIndexArray = new Float64Array([pnAdapterIndex]);
    const pnAdapterIndexPtr = Deno.UnsafePointer.of(pnAdapterIndexArray);
    const pnAdapterOutputIndexArray = new Float64Array([pnAdapterOutputIndex]);
    const pnAdapterOutputIndexPtr = Deno.UnsafePointer.of(pnAdapterOutputIndexArray);
    const result = func.call(this.ptr, pnAdapterIndexPtr, pnAdapterOutputIndexPtr);
    return [result, pnAdapterIndexBuffer, pnAdapterOutputIndexBuffer];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetCameraErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "eCameraError",
      "paramtype": "vr::EVRTrackedCameraError"
    }
  ]
}*/
}

export class IVRTrackedCamera {
  constructor(private ptr: Deno.PointerValue) {}

  GetCameraErrorNameFromEnum(eCameraError: EVRTrackedCameraError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, eCameraError);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "HasCamera",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pHasCamera",
      "paramtype": "bool *"
    }
  ]
}*/
  HasCamera(nDeviceIndex: TrackedDeviceIndex_t, pHasCamera: boolean): [EVRTrackedCameraError, boolean] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer"], result: "i32" });
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const pHasCameraArray = new Uint8Array([pHasCamera ? 1 : 0]);
    const pHasCameraPtr = Deno.UnsafePointer.of(pHasCameraArray);
    const result = func.call(this.ptr, nDeviceIndex, pHasCameraPtr);
    return [result, pHasCameraBuffer];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetCameraFrameSize",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnFrameBufferSize",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetCameraFrameSize(nDeviceIndex: TrackedDeviceIndex_t, eFrameType: EVRTrackedCameraFrameType, pnWidth: number, pnHeight: number, pnFrameBufferSize: number): [EVRTrackedCameraError, number, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "pointer", "pointer"], result: "i32" });
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const pnFrameBufferSizeArray = new Float64Array([pnFrameBufferSize]);
    const pnFrameBufferSizePtr = Deno.UnsafePointer.of(pnFrameBufferSizeArray);
    const result = func.call(this.ptr, nDeviceIndex, eFrameType, pnWidthPtr, pnHeightPtr, pnFrameBufferSizePtr);
    return [result, pnWidthBuffer, pnHeightBuffer, pnFrameBufferSizeBuffer];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetCameraIntrinsics",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "nCameraIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pFocalLength",
      "paramtype": "vr::HmdVector2_t *"
    },
    {
      "paramname": "pCenter",
      "paramtype": "vr::HmdVector2_t *"
    }
  ]
}*/
  GetCameraIntrinsics(nDeviceIndex: TrackedDeviceIndex_t, nCameraIndex: number, eFrameType: EVRTrackedCameraFrameType, pFocalLength: HmdVector2_t, pCenter: HmdVector2_t): [EVRTrackedCameraError, HmdVector2_t, HmdVector2_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "u32", "i32", "pointer", "pointer"], result: "i32" });
    const pFocalLengthBuffer = new ArrayBuffer(8);
    const pFocalLengthView = new DataView(pFocalLengthBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pFocalLengthView.setFloat32((i0 * 1) * 4, pFocalLength.v[i0], true);
    }
    const pFocalLengthPtr = Deno.UnsafePointer.of(pFocalLengthBuffer);
    const pCenterBuffer = new ArrayBuffer(8);
    const pCenterView = new DataView(pCenterBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pCenterView.setFloat32((i0 * 1) * 4, pCenter.v[i0], true);
    }
    const pCenterPtr = Deno.UnsafePointer.of(pCenterBuffer);
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const nCameraIndexArray = new Float64Array([nCameraIndex]);
    const nCameraIndexPtr = Deno.UnsafePointer.of(nCameraIndexArray);
    const result = func.call(this.ptr, nDeviceIndex, nCameraIndex, eFrameType, pFocalLengthPtr, pCenterPtr);
    return [result, HmdVector2_t.fromBuffer(pFocalLengthBuffer, 0), HmdVector2_t.fromBuffer(pCenterBuffer, 0)];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetCameraProjection",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "nCameraIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "flZNear",
      "paramtype": "float"
    },
    {
      "paramname": "flZFar",
      "paramtype": "float"
    },
    {
      "paramname": "pProjection",
      "paramtype": "vr::HmdMatrix44_t *"
    }
  ]
}*/
  GetCameraProjection(nDeviceIndex: TrackedDeviceIndex_t, nCameraIndex: number, eFrameType: EVRTrackedCameraFrameType, flZNear: number, flZFar: number, pProjection: HmdMatrix44_t): [EVRTrackedCameraError, HmdMatrix44_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "u32", "i32", "f32", "f32", "pointer"], result: "i32" });
    const pProjectionBuffer = new ArrayBuffer(64);
    const pProjectionView = new DataView(pProjectionBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pProjectionView.setFloat32((i0 * 4 + i1 * 1) * 4, pProjection.m[i0][i1], true);
        }
    }
    const pProjectionPtr = Deno.UnsafePointer.of(pProjectionBuffer);
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const nCameraIndexArray = new Float64Array([nCameraIndex]);
    const nCameraIndexPtr = Deno.UnsafePointer.of(nCameraIndexArray);
    const flZNearArray = new Float64Array([flZNear]);
    const flZNearPtr = Deno.UnsafePointer.of(flZNearArray);
    const flZFarArray = new Float64Array([flZFar]);
    const flZFarPtr = Deno.UnsafePointer.of(flZFarArray);
    const result = func.call(this.ptr, nDeviceIndex, nCameraIndex, eFrameType, flZNear, flZFar, pProjectionPtr);
    return [result, HmdMatrix44_t.fromBuffer(pProjectionBuffer, 0)];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "AcquireVideoStreamingService",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pHandle",
      "paramtype": "vr::TrackedCameraHandle_t *"
    }
  ]
}*/
  AcquireVideoStreamingService(nDeviceIndex: TrackedDeviceIndex_t, pHandle: TrackedCameraHandle_t): [EVRTrackedCameraError, TrackedCameraHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer"], result: "i32" });
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const result = func.call(this.ptr, nDeviceIndex, pHandlePtr);
    return [result, pHandleBuffer];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "ReleaseVideoStreamingService",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "hTrackedCamera",
      "paramtype": "vr::TrackedCameraHandle_t"
    }
  ]
}*/
  ReleaseVideoStreamingService(hTrackedCamera: TrackedCameraHandle_t): EVRTrackedCameraError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const hTrackedCameraBuffer = new BigUint64Array([hTrackedCamera]);
    const hTrackedCameraPtr = Deno.UnsafePointer.of(hTrackedCameraBuffer);
    const result = func.call(this.ptr, hTrackedCamera);
    return result;
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetVideoStreamFrameBuffer",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "hTrackedCamera",
      "paramtype": "vr::TrackedCameraHandle_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pFrameBuffer",
      "paramtype": "void *"
    },
    {
      "paramname": "nFrameBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pFrameHeader",
      "paramtype": "vr::CameraVideoStreamFrameHeader_t *"
    },
    {
      "paramname": "nFrameHeaderSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetVideoStreamFrameBuffer(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pFrameBuffer: Uint8Array, nFrameBufferSize: number, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): [EVRTrackedCameraError, Uint8Array, CameraVideoStreamFrameHeader_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "u32", "pointer", "u32"], result: "i32" });
    const pFrameHeaderBuffer = new ArrayBuffer(120);
    const pFrameHeaderView = new DataView(pFrameHeaderBuffer);
    const pFrameHeaderPtr = Deno.UnsafePointer.of(pFrameHeaderBuffer);
    const hTrackedCameraBuffer = new BigUint64Array([hTrackedCamera]);
    const hTrackedCameraPtr = Deno.UnsafePointer.of(hTrackedCameraBuffer);
    const pFrameBufferPtr = Deno.UnsafePointer.of(pFrameBuffer);
    const nFrameBufferSizeArray = new Float64Array([nFrameBufferSize]);
    const nFrameBufferSizePtr = Deno.UnsafePointer.of(nFrameBufferSizeArray);
    const nFrameHeaderSizeArray = new Float64Array([nFrameHeaderSize]);
    const nFrameHeaderSizePtr = Deno.UnsafePointer.of(nFrameHeaderSizeArray);
    const result = func.call(this.ptr, hTrackedCamera, eFrameType, pFrameBufferPtr, nFrameBufferSize, pFrameHeaderPtr, nFrameHeaderSize);
    return [result, pFrameBufferBuffer, CameraVideoStreamFrameHeader_t.fromBuffer(pFrameHeaderBuffer, 0)];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetVideoStreamTextureSize",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "nDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pTextureBounds",
      "paramtype": "vr::VRTextureBounds_t *"
    },
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetVideoStreamTextureSize(nDeviceIndex: TrackedDeviceIndex_t, eFrameType: EVRTrackedCameraFrameType, pTextureBounds: VRTextureBounds_t, pnWidth: number, pnHeight: number): [EVRTrackedCameraError, VRTextureBounds_t, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "pointer", "pointer"], result: "i32" });
    const pTextureBoundsBuffer = new ArrayBuffer(16);
    const pTextureBoundsView = new DataView(pTextureBoundsBuffer);
    const pTextureBoundsPtr = Deno.UnsafePointer.of(pTextureBoundsBuffer);
    const nDeviceIndexArray = new Float64Array([nDeviceIndex]);
    const nDeviceIndexPtr = Deno.UnsafePointer.of(nDeviceIndexArray);
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const result = func.call(this.ptr, nDeviceIndex, eFrameType, pTextureBoundsPtr, pnWidthPtr, pnHeightPtr);
    return [result, VRTextureBounds_t.fromBuffer(pTextureBoundsBuffer, 0), pnWidthBuffer, pnHeightBuffer];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetVideoStreamTextureD3D11",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "hTrackedCamera",
      "paramtype": "vr::TrackedCameraHandle_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pD3D11DeviceOrResource",
      "paramtype": "void *"
    },
    {
      "paramname": "ppD3D11ShaderResourceView",
      "paramtype": "void **"
    },
    {
      "paramname": "pFrameHeader",
      "paramtype": "vr::CameraVideoStreamFrameHeader_t *"
    },
    {
      "paramname": "nFrameHeaderSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetVideoStreamTextureD3D11(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pD3D11DeviceOrResource: Uint8Array, ppD3D11ShaderResourceView: Uint8Array, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): [EVRTrackedCameraError, Uint8Array, Uint8Array, CameraVideoStreamFrameHeader_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "pointer", "pointer", "u32"], result: "i32" });
    const pFrameHeaderBuffer = new ArrayBuffer(120);
    const pFrameHeaderView = new DataView(pFrameHeaderBuffer);
    const pFrameHeaderPtr = Deno.UnsafePointer.of(pFrameHeaderBuffer);
    const hTrackedCameraBuffer = new BigUint64Array([hTrackedCamera]);
    const hTrackedCameraPtr = Deno.UnsafePointer.of(hTrackedCameraBuffer);
    const pD3D11DeviceOrResourcePtr = Deno.UnsafePointer.of(pD3D11DeviceOrResource);
    const ppD3D11ShaderResourceViewPtr = Deno.UnsafePointer.of(ppD3D11ShaderResourceView);
    const nFrameHeaderSizeArray = new Float64Array([nFrameHeaderSize]);
    const nFrameHeaderSizePtr = Deno.UnsafePointer.of(nFrameHeaderSizeArray);
    const result = func.call(this.ptr, hTrackedCamera, eFrameType, pD3D11DeviceOrResourcePtr, ppD3D11ShaderResourceViewPtr, pFrameHeaderPtr, nFrameHeaderSize);
    return [result, pD3D11DeviceOrResourceBuffer, ppD3D11ShaderResourceViewBuffer, CameraVideoStreamFrameHeader_t.fromBuffer(pFrameHeaderBuffer, 0)];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetVideoStreamTextureGL",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "hTrackedCamera",
      "paramtype": "vr::TrackedCameraHandle_t"
    },
    {
      "paramname": "eFrameType",
      "paramtype": "vr::EVRTrackedCameraFrameType"
    },
    {
      "paramname": "pglTextureId",
      "paramtype": "vr::glUInt_t *"
    },
    {
      "paramname": "pFrameHeader",
      "paramtype": "vr::CameraVideoStreamFrameHeader_t *"
    },
    {
      "paramname": "nFrameHeaderSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle_t, eFrameType: EVRTrackedCameraFrameType, pglTextureId: glUInt_t, pFrameHeader: CameraVideoStreamFrameHeader_t, nFrameHeaderSize: number): [EVRTrackedCameraError, glUInt_t, CameraVideoStreamFrameHeader_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "pointer", "u32"], result: "i32" });
    const pFrameHeaderBuffer = new ArrayBuffer(120);
    const pFrameHeaderView = new DataView(pFrameHeaderBuffer);
    const pFrameHeaderPtr = Deno.UnsafePointer.of(pFrameHeaderBuffer);
    const hTrackedCameraBuffer = new BigUint64Array([hTrackedCamera]);
    const hTrackedCameraPtr = Deno.UnsafePointer.of(hTrackedCameraBuffer);
    const pglTextureIdArray = new Float64Array([pglTextureId]);
    const pglTextureIdPtr = Deno.UnsafePointer.of(pglTextureIdArray);
    const nFrameHeaderSizeArray = new Float64Array([nFrameHeaderSize]);
    const nFrameHeaderSizePtr = Deno.UnsafePointer.of(nFrameHeaderSizeArray);
    const result = func.call(this.ptr, hTrackedCamera, eFrameType, pglTextureIdPtr, pFrameHeaderPtr, nFrameHeaderSize);
    return [result, pglTextureIdBuffer, CameraVideoStreamFrameHeader_t.fromBuffer(pFrameHeaderBuffer, 0)];
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "ReleaseVideoStreamTextureGL",
  "returntype": "vr::EVRTrackedCameraError",
  "params": [
    {
      "paramname": "hTrackedCamera",
      "paramtype": "vr::TrackedCameraHandle_t"
    },
    {
      "paramname": "glTextureId",
      "paramtype": "vr::glUInt_t"
    }
  ]
}*/
  ReleaseVideoStreamTextureGL(hTrackedCamera: TrackedCameraHandle_t, glTextureId: glUInt_t): EVRTrackedCameraError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32"], result: "i32" });
    const hTrackedCameraBuffer = new BigUint64Array([hTrackedCamera]);
    const hTrackedCameraPtr = Deno.UnsafePointer.of(hTrackedCameraBuffer);
    const glTextureIdArray = new Float64Array([glTextureId]);
    const glTextureIdPtr = Deno.UnsafePointer.of(glTextureIdArray);
    const result = func.call(this.ptr, hTrackedCamera, glTextureId);
    return result;
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "SetCameraTrackingSpace",
  "returntype": "void",
  "params": [
    {
      "paramname": "eUniverse",
      "paramtype": "vr::ETrackingUniverseOrigin"
    }
  ]
}*/
  SetCameraTrackingSpace(eUniverse: ETrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, eUniverse);
    return result;
  }

/*{
  "classname": "vr::IVRTrackedCamera",
  "methodname": "GetCameraTrackingSpace",
  "returntype": "vr::ETrackingUniverseOrigin"
}*/
  GetCameraTrackingSpace(): ETrackingUniverseOrigin {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "AddApplicationManifest",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchApplicationManifestFullPath",
      "paramtype": "const char *"
    },
    {
      "paramname": "bTemporary",
      "paramtype": "bool"
    }
  ]
}*/
}

export class IVRApplications {
  constructor(private ptr: Deno.PointerValue) {}

  AddApplicationManifest(pchApplicationManifestFullPath: string, bTemporary: boolean): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u8"], result: "i32" });
    const pchApplicationManifestFullPathBuffer = new TextEncoder().encode(pchApplicationManifestFullPath + '\0');
    const pchApplicationManifestFullPathPtr = Deno.UnsafePointer.of(pchApplicationManifestFullPathBuffer);
    const bTemporaryArray = new Uint8Array([bTemporary ? 1 : 0]);
    const bTemporaryPtr = Deno.UnsafePointer.of(bTemporaryArray);
    const result = func.call(this.ptr, pchApplicationManifestFullPathPtr, bTemporary ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "RemoveApplicationManifest",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchApplicationManifestFullPath",
      "paramtype": "const char *"
    }
  ]
}*/
  RemoveApplicationManifest(pchApplicationManifestFullPath: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchApplicationManifestFullPathBuffer = new TextEncoder().encode(pchApplicationManifestFullPath + '\0');
    const pchApplicationManifestFullPathPtr = Deno.UnsafePointer.of(pchApplicationManifestFullPathBuffer);
    const result = func.call(this.ptr, pchApplicationManifestFullPathPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "IsApplicationInstalled",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  IsApplicationInstalled(pchAppKey: string): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationCount",
  "returntype": "uint32_t"
}*/
  GetApplicationCount(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationKeyByIndex",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "unApplicationIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchAppKeyBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unAppKeyBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetApplicationKeyByIndex(unApplicationIndex: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "i32" });
    const unApplicationIndexArray = new Float64Array([unApplicationIndex]);
    const unApplicationIndexPtr = Deno.UnsafePointer.of(unApplicationIndexArray);
    const pchAppKeyBufferBuffer = new TextEncoder().encode(pchAppKeyBuffer + '\0');
    const pchAppKeyBufferPtr = Deno.UnsafePointer.of(pchAppKeyBufferBuffer);
    const unAppKeyBufferLenArray = new Float64Array([unAppKeyBufferLen]);
    const unAppKeyBufferLenPtr = Deno.UnsafePointer.of(unAppKeyBufferLenArray);
    const result = func.call(this.ptr, unApplicationIndex, pchAppKeyBufferPtr, unAppKeyBufferLen);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationKeyByProcessId",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "unProcessId",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchAppKeyBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unAppKeyBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetApplicationKeyByProcessId(unProcessId: number, pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "i32" });
    const unProcessIdArray = new Float64Array([unProcessId]);
    const unProcessIdPtr = Deno.UnsafePointer.of(unProcessIdArray);
    const pchAppKeyBufferBuffer = new TextEncoder().encode(pchAppKeyBuffer + '\0');
    const pchAppKeyBufferPtr = Deno.UnsafePointer.of(pchAppKeyBufferBuffer);
    const unAppKeyBufferLenArray = new Float64Array([unAppKeyBufferLen]);
    const unAppKeyBufferLenPtr = Deno.UnsafePointer.of(unAppKeyBufferLenArray);
    const result = func.call(this.ptr, unProcessId, pchAppKeyBufferPtr, unAppKeyBufferLen);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "LaunchApplication",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  LaunchApplication(pchAppKey: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "LaunchTemplateApplication",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchTemplateAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchNewAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pKeys",
      "array_count": "unKeys",
      "paramtype": "const struct vr::AppOverrideKeys_t *"
    },
    {
      "paramname": "unKeys",
      "paramtype": "uint32_t"
    }
  ]
}*/
  LaunchTemplateApplication(pchTemplateAppKey: string, pchNewAppKey: string, pKeys: AppOverrideKeys_t[], unKeys: number): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32"], result: "i32" });
    const pKeysCount = unKeys;
    const pKeysBuffer = new ArrayBuffer(16 * pKeysCount);
    const pKeysView = new DataView(pKeysBuffer);
    const pKeysPtr = Deno.UnsafePointer.of(pKeysBuffer);
    const pchTemplateAppKeyBuffer = new TextEncoder().encode(pchTemplateAppKey + '\0');
    const pchTemplateAppKeyPtr = Deno.UnsafePointer.of(pchTemplateAppKeyBuffer);
    const pchNewAppKeyBuffer = new TextEncoder().encode(pchNewAppKey + '\0');
    const pchNewAppKeyPtr = Deno.UnsafePointer.of(pchNewAppKeyBuffer);
    const unKeysArray = new Float64Array([unKeys]);
    const unKeysPtr = Deno.UnsafePointer.of(unKeysArray);
    const result = func.call(this.ptr, pchTemplateAppKeyPtr, pchNewAppKeyPtr, pKeysPtr, unKeys);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "LaunchApplicationFromMimeType",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchMimeType",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchArgs",
      "paramtype": "const char *"
    }
  ]
}*/
  LaunchApplicationFromMimeType(pchMimeType: string, pchArgs: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchMimeTypeBuffer = new TextEncoder().encode(pchMimeType + '\0');
    const pchMimeTypePtr = Deno.UnsafePointer.of(pchMimeTypeBuffer);
    const pchArgsBuffer = new TextEncoder().encode(pchArgs + '\0');
    const pchArgsPtr = Deno.UnsafePointer.of(pchArgsBuffer);
    const result = func.call(this.ptr, pchMimeTypePtr, pchArgsPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "LaunchDashboardOverlay",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  LaunchDashboardOverlay(pchAppKey: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "CancelApplicationLaunch",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  CancelApplicationLaunch(pchAppKey: string): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "IdentifyApplication",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "unProcessId",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  IdentifyApplication(unProcessId: number, pchAppKey: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer"], result: "i32" });
    const unProcessIdArray = new Float64Array([unProcessId]);
    const unProcessIdPtr = Deno.UnsafePointer.of(unProcessIdArray);
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, unProcessId, pchAppKeyPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationProcessId",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  GetApplicationProcessId(pchAppKey: string): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationsErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "error",
      "paramtype": "vr::EVRApplicationError"
    }
  ]
}*/
  GetApplicationsErrorNameFromEnum(error: EVRApplicationError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, error);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationPropertyString",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "eProperty",
      "paramtype": "vr::EVRApplicationProperty"
    },
    {
      "paramname": "pchPropertyValueBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unPropertyValueBufferLen",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRApplicationError *"
    }
  ]
}*/
  GetApplicationPropertyString(pchAppKey: string, eProperty: EVRApplicationProperty, pchPropertyValueBuffer: string, unPropertyValueBufferLen: number, peError: EVRApplicationError): [number, EVRApplicationError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "pointer", "u32", "pointer"], result: "u32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const pchPropertyValueBufferBuffer = new TextEncoder().encode(pchPropertyValueBuffer + '\0');
    const pchPropertyValueBufferPtr = Deno.UnsafePointer.of(pchPropertyValueBufferBuffer);
    const unPropertyValueBufferLenArray = new Float64Array([unPropertyValueBufferLen]);
    const unPropertyValueBufferLenPtr = Deno.UnsafePointer.of(unPropertyValueBufferLenArray);
    const result = func.call(this.ptr, pchAppKeyPtr, eProperty, pchPropertyValueBufferPtr, unPropertyValueBufferLen, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationPropertyBool",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "eProperty",
      "paramtype": "vr::EVRApplicationProperty"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRApplicationError *"
    }
  ]
}*/
  GetApplicationPropertyBool(pchAppKey: string, eProperty: EVRApplicationProperty, peError: EVRApplicationError): [boolean, EVRApplicationError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "pointer"], result: "u8" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr, eProperty, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationPropertyUint64",
  "returntype": "uint64_t",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "eProperty",
      "paramtype": "vr::EVRApplicationProperty"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRApplicationError *"
    }
  ]
}*/
  GetApplicationPropertyUint64(pchAppKey: string, eProperty: EVRApplicationProperty, peError: EVRApplicationError): [bigint, EVRApplicationError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "pointer"], result: "u64" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr, eProperty, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "SetApplicationAutoLaunch",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "bAutoLaunch",
      "paramtype": "bool"
    }
  ]
}*/
  SetApplicationAutoLaunch(pchAppKey: string, bAutoLaunch: boolean): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u8"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const bAutoLaunchArray = new Uint8Array([bAutoLaunch ? 1 : 0]);
    const bAutoLaunchPtr = Deno.UnsafePointer.of(bAutoLaunchArray);
    const result = func.call(this.ptr, pchAppKeyPtr, bAutoLaunch ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationAutoLaunch",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  GetApplicationAutoLaunch(pchAppKey: string): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "SetDefaultApplicationForMimeType",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchMimeType",
      "paramtype": "const char *"
    }
  ]
}*/
  SetDefaultApplicationForMimeType(pchAppKey: string, pchMimeType: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const pchMimeTypeBuffer = new TextEncoder().encode(pchMimeType + '\0');
    const pchMimeTypePtr = Deno.UnsafePointer.of(pchMimeTypeBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr, pchMimeTypePtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetDefaultApplicationForMimeType",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchMimeType",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchAppKeyBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unAppKeyBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetDefaultApplicationForMimeType(pchMimeType: string, pchAppKeyBuffer: string, unAppKeyBufferLen: number): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(160));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32"], result: "u8" });
    const pchMimeTypeBuffer = new TextEncoder().encode(pchMimeType + '\0');
    const pchMimeTypePtr = Deno.UnsafePointer.of(pchMimeTypeBuffer);
    const pchAppKeyBufferBuffer = new TextEncoder().encode(pchAppKeyBuffer + '\0');
    const pchAppKeyBufferPtr = Deno.UnsafePointer.of(pchAppKeyBufferBuffer);
    const unAppKeyBufferLenArray = new Float64Array([unAppKeyBufferLen]);
    const unAppKeyBufferLenPtr = Deno.UnsafePointer.of(unAppKeyBufferLenArray);
    const result = func.call(this.ptr, pchMimeTypePtr, pchAppKeyBufferPtr, unAppKeyBufferLen);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationSupportedMimeTypes",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchMimeTypesBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unMimeTypesBuffer",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetApplicationSupportedMimeTypes(pchAppKey: string, pchMimeTypesBuffer: string, unMimeTypesBuffer: number): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(168));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32"], result: "u8" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const pchMimeTypesBufferBuffer = new TextEncoder().encode(pchMimeTypesBuffer + '\0');
    const pchMimeTypesBufferPtr = Deno.UnsafePointer.of(pchMimeTypesBufferBuffer);
    const unMimeTypesBufferArray = new Float64Array([unMimeTypesBuffer]);
    const unMimeTypesBufferPtr = Deno.UnsafePointer.of(unMimeTypesBufferArray);
    const result = func.call(this.ptr, pchAppKeyPtr, pchMimeTypesBufferPtr, unMimeTypesBuffer);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationsThatSupportMimeType",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchMimeType",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchAppKeysThatSupportBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unAppKeysThatSupportBuffer",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetApplicationsThatSupportMimeType(pchMimeType: string, pchAppKeysThatSupportBuffer: string, unAppKeysThatSupportBuffer: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(176));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32"], result: "u32" });
    const pchMimeTypeBuffer = new TextEncoder().encode(pchMimeType + '\0');
    const pchMimeTypePtr = Deno.UnsafePointer.of(pchMimeTypeBuffer);
    const pchAppKeysThatSupportBufferBuffer = new TextEncoder().encode(pchAppKeysThatSupportBuffer + '\0');
    const pchAppKeysThatSupportBufferPtr = Deno.UnsafePointer.of(pchAppKeysThatSupportBufferBuffer);
    const unAppKeysThatSupportBufferArray = new Float64Array([unAppKeysThatSupportBuffer]);
    const unAppKeysThatSupportBufferPtr = Deno.UnsafePointer.of(unAppKeysThatSupportBufferArray);
    const result = func.call(this.ptr, pchMimeTypePtr, pchAppKeysThatSupportBufferPtr, unAppKeysThatSupportBuffer);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetApplicationLaunchArguments",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "unHandle",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchArgs",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unArgs",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetApplicationLaunchArguments(unHandle: number, pchArgs: string, unArgs: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(184));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "u32" });
    const unHandleArray = new Float64Array([unHandle]);
    const unHandlePtr = Deno.UnsafePointer.of(unHandleArray);
    const pchArgsBuffer = new TextEncoder().encode(pchArgs + '\0');
    const pchArgsPtr = Deno.UnsafePointer.of(pchArgsBuffer);
    const unArgsArray = new Float64Array([unArgs]);
    const unArgsPtr = Deno.UnsafePointer.of(unArgsArray);
    const result = func.call(this.ptr, unHandle, pchArgsPtr, unArgs);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetStartingApplication",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKeyBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unAppKeyBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetStartingApplication(pchAppKeyBuffer: string, unAppKeyBufferLen: number): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(192));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "i32" });
    const pchAppKeyBufferBuffer = new TextEncoder().encode(pchAppKeyBuffer + '\0');
    const pchAppKeyBufferPtr = Deno.UnsafePointer.of(pchAppKeyBufferBuffer);
    const unAppKeyBufferLenArray = new Float64Array([unAppKeyBufferLen]);
    const unAppKeyBufferLenPtr = Deno.UnsafePointer.of(unAppKeyBufferLenArray);
    const result = func.call(this.ptr, pchAppKeyBufferPtr, unAppKeyBufferLen);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetSceneApplicationState",
  "returntype": "vr::EVRSceneApplicationState"
}*/
  GetSceneApplicationState(): EVRSceneApplicationState {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(200));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "PerformApplicationPrelaunchCheck",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    }
  ]
}*/
  PerformApplicationPrelaunchCheck(pchAppKey: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(208));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const result = func.call(this.ptr, pchAppKeyPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetSceneApplicationStateNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "state",
      "paramtype": "vr::EVRSceneApplicationState"
    }
  ]
}*/
  GetSceneApplicationStateNameFromEnum(state: EVRSceneApplicationState): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(216));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, state);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "LaunchInternalProcess",
  "returntype": "vr::EVRApplicationError",
  "params": [
    {
      "paramname": "pchBinaryPath",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchArguments",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchWorkingDirectory",
      "paramtype": "const char *"
    }
  ]
}*/
  LaunchInternalProcess(pchBinaryPath: string, pchArguments: string, pchWorkingDirectory: string): EVRApplicationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(224));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pchBinaryPathBuffer = new TextEncoder().encode(pchBinaryPath + '\0');
    const pchBinaryPathPtr = Deno.UnsafePointer.of(pchBinaryPathBuffer);
    const pchArgumentsBuffer = new TextEncoder().encode(pchArguments + '\0');
    const pchArgumentsPtr = Deno.UnsafePointer.of(pchArgumentsBuffer);
    const pchWorkingDirectoryBuffer = new TextEncoder().encode(pchWorkingDirectory + '\0');
    const pchWorkingDirectoryPtr = Deno.UnsafePointer.of(pchWorkingDirectoryBuffer);
    const result = func.call(this.ptr, pchBinaryPathPtr, pchArgumentsPtr, pchWorkingDirectoryPtr);
    return result;
  }

/*{
  "classname": "vr::IVRApplications",
  "methodname": "GetCurrentSceneProcessId",
  "returntype": "uint32_t"
}*/
  GetCurrentSceneProcessId(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(232));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "GetCalibrationState",
  "returntype": "vr::ChaperoneCalibrationState"
}*/
}

export class IVRChaperone {
  constructor(private ptr: Deno.PointerValue) {}

  GetCalibrationState(): ChaperoneCalibrationState {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "GetPlayAreaSize",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pSizeX",
      "paramtype": "float *"
    },
    {
      "paramname": "pSizeZ",
      "paramtype": "float *"
    }
  ]
}*/
  GetPlayAreaSize(pSizeX: number, pSizeZ: number): [boolean, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pSizeXArray = new Float64Array([pSizeX]);
    const pSizeXPtr = Deno.UnsafePointer.of(pSizeXArray);
    const pSizeZArray = new Float64Array([pSizeZ]);
    const pSizeZPtr = Deno.UnsafePointer.of(pSizeZArray);
    const result = func.call(this.ptr, pSizeXPtr, pSizeZPtr);
    return [result, pSizeXBuffer, pSizeZBuffer];
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "GetPlayAreaRect",
  "returntype": "bool",
  "params": [
    {
      "paramname": "rect",
      "paramtype": "struct vr::HmdQuad_t *"
    }
  ]
}*/
  GetPlayAreaRect(rect: HmdQuad_t): [boolean, HmdQuad_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const rectBuffer = new ArrayBuffer(48);
    const rectView = new DataView(rectBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        rectView.setUint8((i0 * 1) * undefined, rect.vCorners[i0], true);
    }
    const rectPtr = Deno.UnsafePointer.of(rectBuffer);
    const result = func.call(this.ptr, rectPtr);
    return [result, HmdQuad_t.fromBuffer(rectBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "ReloadInfo",
  "returntype": "void"
}*/
  ReloadInfo(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "SetSceneColor",
  "returntype": "void",
  "params": [
    {
      "paramname": "color",
      "paramtype": "struct vr::HmdColor_t"
    }
  ]
}*/
  SetSceneColor(color: HmdColor_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", { struct: ["f32", "f32", "f32", "f32"] }], result: "void" });
    const colorBuffer = new ArrayBuffer(16);
    const colorView = new DataView(colorBuffer);
    const colorPtr = Deno.UnsafePointer.of(colorBuffer);
    const result = func.call(this.ptr, colorBuffer);
    return result;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "GetBoundsColor",
  "returntype": "void",
  "params": [
    {
      "paramname": "pOutputColorArray",
      "paramtype": "struct vr::HmdColor_t *"
    },
    {
      "paramname": "nNumOutputColors",
      "paramtype": "int"
    },
    {
      "paramname": "flCollisionBoundsFadeDistance",
      "paramtype": "float"
    },
    {
      "paramname": "pOutputCameraColor",
      "paramtype": "struct vr::HmdColor_t *"
    }
  ]
}*/
  GetBoundsColor(pOutputColorArray: HmdColor_t, nNumOutputColors: number, flCollisionBoundsFadeDistance: number, pOutputCameraColor: HmdColor_t): [void, HmdColor_t, HmdColor_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "f32", "pointer"], result: "void" });
    const pOutputColorArrayBuffer = new ArrayBuffer(16);
    const pOutputColorArrayView = new DataView(pOutputColorArrayBuffer);
    const pOutputColorArrayPtr = Deno.UnsafePointer.of(pOutputColorArrayBuffer);
    const pOutputCameraColorBuffer = new ArrayBuffer(16);
    const pOutputCameraColorView = new DataView(pOutputCameraColorBuffer);
    const pOutputCameraColorPtr = Deno.UnsafePointer.of(pOutputCameraColorBuffer);
    const nNumOutputColorsArray = new Float64Array([nNumOutputColors]);
    const nNumOutputColorsPtr = Deno.UnsafePointer.of(nNumOutputColorsArray);
    const flCollisionBoundsFadeDistanceArray = new Float64Array([flCollisionBoundsFadeDistance]);
    const flCollisionBoundsFadeDistancePtr = Deno.UnsafePointer.of(flCollisionBoundsFadeDistanceArray);
    const result = func.call(this.ptr, pOutputColorArrayPtr, nNumOutputColors, flCollisionBoundsFadeDistance, pOutputCameraColorPtr);
    return [result, HmdColor_t.fromBuffer(pOutputColorArrayBuffer, 0), HmdColor_t.fromBuffer(pOutputCameraColorBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "AreBoundsVisible",
  "returntype": "bool"
}*/
  AreBoundsVisible(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "ForceBoundsVisible",
  "returntype": "void",
  "params": [
    {
      "paramname": "bForce",
      "paramtype": "bool"
    }
  ]
}*/
  ForceBoundsVisible(bForce: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: "void" });
    const bForceArray = new Uint8Array([bForce ? 1 : 0]);
    const bForcePtr = Deno.UnsafePointer.of(bForceArray);
    const result = func.call(this.ptr, bForce ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRChaperone",
  "methodname": "ResetZeroPose",
  "returntype": "void",
  "params": [
    {
      "paramname": "eTrackingUniverseOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    }
  ]
}*/
  ResetZeroPose(eTrackingUniverseOrigin: ETrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, eTrackingUniverseOrigin);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "CommitWorkingCopy",
  "returntype": "bool",
  "params": [
    {
      "paramname": "configFile",
      "paramtype": "vr::EChaperoneConfigFile"
    }
  ]
}*/
}

export class IVRChaperoneSetup {
  constructor(private ptr: Deno.PointerValue) {}

  CommitWorkingCopy(configFile: EChaperoneConfigFile): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "u8" });
    const result = func.call(this.ptr, configFile);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "RevertWorkingCopy",
  "returntype": "void"
}*/
  RevertWorkingCopy(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetWorkingPlayAreaSize",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pSizeX",
      "paramtype": "float *"
    },
    {
      "paramname": "pSizeZ",
      "paramtype": "float *"
    }
  ]
}*/
  GetWorkingPlayAreaSize(pSizeX: number, pSizeZ: number): [boolean, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pSizeXArray = new Float64Array([pSizeX]);
    const pSizeXPtr = Deno.UnsafePointer.of(pSizeXArray);
    const pSizeZArray = new Float64Array([pSizeZ]);
    const pSizeZPtr = Deno.UnsafePointer.of(pSizeZArray);
    const result = func.call(this.ptr, pSizeXPtr, pSizeZPtr);
    return [result, pSizeXBuffer, pSizeZBuffer];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetWorkingPlayAreaRect",
  "returntype": "bool",
  "params": [
    {
      "paramname": "rect",
      "paramtype": "struct vr::HmdQuad_t *"
    }
  ]
}*/
  GetWorkingPlayAreaRect(rect: HmdQuad_t): [boolean, HmdQuad_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const rectBuffer = new ArrayBuffer(48);
    const rectView = new DataView(rectBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        rectView.setUint8((i0 * 1) * undefined, rect.vCorners[i0], true);
    }
    const rectPtr = Deno.UnsafePointer.of(rectBuffer);
    const result = func.call(this.ptr, rectPtr);
    return [result, HmdQuad_t.fromBuffer(rectBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetWorkingCollisionBoundsInfo",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pQuadsBuffer",
      "out_array_count": "punQuadsCount",
      "paramtype": "struct vr::HmdQuad_t *"
    },
    {
      "paramname": "punQuadsCount",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetWorkingCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t, punQuadsCount: number): [boolean, HmdQuad_t, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pQuadsBufferBuffer = new ArrayBuffer(48);
    const pQuadsBufferView = new DataView(pQuadsBufferBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        pQuadsBufferView.setUint8((i0 * 1) * undefined, pQuadsBuffer.vCorners[i0], true);
    }
    const pQuadsBufferPtr = Deno.UnsafePointer.of(pQuadsBufferBuffer);
    const punQuadsCountArray = new Float64Array([punQuadsCount]);
    const punQuadsCountPtr = Deno.UnsafePointer.of(punQuadsCountArray);
    const result = func.call(this.ptr, pQuadsBufferPtr, punQuadsCountPtr);
    return [result, HmdQuad_t.fromBuffer(pQuadsBufferBuffer, 0), punQuadsCountBuffer];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetLiveCollisionBoundsInfo",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pQuadsBuffer",
      "out_array_count": "punQuadsCount",
      "paramtype": "struct vr::HmdQuad_t *"
    },
    {
      "paramname": "punQuadsCount",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetLiveCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t, punQuadsCount: number): [boolean, HmdQuad_t, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pQuadsBufferBuffer = new ArrayBuffer(48);
    const pQuadsBufferView = new DataView(pQuadsBufferBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        pQuadsBufferView.setUint8((i0 * 1) * undefined, pQuadsBuffer.vCorners[i0], true);
    }
    const pQuadsBufferPtr = Deno.UnsafePointer.of(pQuadsBufferBuffer);
    const punQuadsCountArray = new Float64Array([punQuadsCount]);
    const punQuadsCountPtr = Deno.UnsafePointer.of(punQuadsCountArray);
    const result = func.call(this.ptr, pQuadsBufferPtr, punQuadsCountPtr);
    return [result, HmdQuad_t.fromBuffer(pQuadsBufferBuffer, 0), punQuadsCountBuffer];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetWorkingSeatedZeroPoseToRawTrackingPose",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pmatSeatedZeroPoseToRawTrackingPose",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetWorkingSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): [boolean, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pmatSeatedZeroPoseToRawTrackingPoseBuffer = new ArrayBuffer(48);
    const pmatSeatedZeroPoseToRawTrackingPoseView = new DataView(pmatSeatedZeroPoseToRawTrackingPoseBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatSeatedZeroPoseToRawTrackingPoseView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatSeatedZeroPoseToRawTrackingPose.m[i0][i1], true);
        }
    }
    const pmatSeatedZeroPoseToRawTrackingPosePtr = Deno.UnsafePointer.of(pmatSeatedZeroPoseToRawTrackingPoseBuffer);
    const result = func.call(this.ptr, pmatSeatedZeroPoseToRawTrackingPosePtr);
    return [result, HmdMatrix34_t.fromBuffer(pmatSeatedZeroPoseToRawTrackingPoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetWorkingStandingZeroPoseToRawTrackingPose",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pmatStandingZeroPoseToRawTrackingPose",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetWorkingStandingZeroPoseToRawTrackingPose(pmatStandingZeroPoseToRawTrackingPose: HmdMatrix34_t): [boolean, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pmatStandingZeroPoseToRawTrackingPoseBuffer = new ArrayBuffer(48);
    const pmatStandingZeroPoseToRawTrackingPoseView = new DataView(pmatStandingZeroPoseToRawTrackingPoseBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatStandingZeroPoseToRawTrackingPoseView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatStandingZeroPoseToRawTrackingPose.m[i0][i1], true);
        }
    }
    const pmatStandingZeroPoseToRawTrackingPosePtr = Deno.UnsafePointer.of(pmatStandingZeroPoseToRawTrackingPoseBuffer);
    const result = func.call(this.ptr, pmatStandingZeroPoseToRawTrackingPosePtr);
    return [result, HmdMatrix34_t.fromBuffer(pmatStandingZeroPoseToRawTrackingPoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "SetWorkingPlayAreaSize",
  "returntype": "void",
  "params": [
    {
      "paramname": "sizeX",
      "paramtype": "float"
    },
    {
      "paramname": "sizeZ",
      "paramtype": "float"
    }
  ]
}*/
  SetWorkingPlayAreaSize(sizeX: number, sizeZ: number): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "f32", "f32"], result: "void" });
    const sizeXArray = new Float64Array([sizeX]);
    const sizeXPtr = Deno.UnsafePointer.of(sizeXArray);
    const sizeZArray = new Float64Array([sizeZ]);
    const sizeZPtr = Deno.UnsafePointer.of(sizeZArray);
    const result = func.call(this.ptr, sizeX, sizeZ);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "SetWorkingCollisionBoundsInfo",
  "returntype": "void",
  "params": [
    {
      "paramname": "pQuadsBuffer",
      "array_count": "unQuadsCount",
      "paramtype": "struct vr::HmdQuad_t *"
    },
    {
      "paramname": "unQuadsCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetWorkingCollisionBoundsInfo(pQuadsBuffer: HmdQuad_t[], unQuadsCount: number): [void, HmdQuad_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "void" });
    const pQuadsBufferCount = unQuadsCount;
    const pQuadsBufferBuffer = new ArrayBuffer(48 * pQuadsBufferCount);
    const pQuadsBufferView = new DataView(pQuadsBufferBuffer);
    for (let i0 = 0; i0 < 4; i0++) {
        pQuadsBufferView.setUint8((i0 * 1) * undefined, pQuadsBuffer.vCorners[i0], true);
    }
    const pQuadsBufferPtr = Deno.UnsafePointer.of(pQuadsBufferBuffer);
    const unQuadsCountArray = new Float64Array([unQuadsCount]);
    const unQuadsCountPtr = Deno.UnsafePointer.of(unQuadsCountArray);
    const result = func.call(this.ptr, pQuadsBufferPtr, unQuadsCount);
    return [result, HmdQuad_t.fromBuffer(pQuadsBufferBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "SetWorkingPerimeter",
  "returntype": "void",
  "params": [
    {
      "paramname": "pPointBuffer",
      "array_count": "unPointCount",
      "paramtype": "struct vr::HmdVector2_t *"
    },
    {
      "paramname": "unPointCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetWorkingPerimeter(pPointBuffer: HmdVector2_t[], unPointCount: number): [void, HmdVector2_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "void" });
    const pPointBufferCount = unPointCount;
    const pPointBufferBuffer = new ArrayBuffer(8 * pPointBufferCount);
    const pPointBufferView = new DataView(pPointBufferBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pPointBufferView.setFloat32((i0 * 1) * 4, pPointBuffer.v[i0], true);
    }
    const pPointBufferPtr = Deno.UnsafePointer.of(pPointBufferBuffer);
    const unPointCountArray = new Float64Array([unPointCount]);
    const unPointCountPtr = Deno.UnsafePointer.of(unPointCountArray);
    const result = func.call(this.ptr, pPointBufferPtr, unPointCount);
    return [result, HmdVector2_t.fromBuffer(pPointBufferBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "SetWorkingSeatedZeroPoseToRawTrackingPose",
  "returntype": "void",
  "params": [
    {
      "paramname": "pMatSeatedZeroPoseToRawTrackingPose",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  SetWorkingSeatedZeroPoseToRawTrackingPose(pMatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pMatSeatedZeroPoseToRawTrackingPoseBuffer = new ArrayBuffer(48);
    const pMatSeatedZeroPoseToRawTrackingPoseView = new DataView(pMatSeatedZeroPoseToRawTrackingPoseBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pMatSeatedZeroPoseToRawTrackingPoseView.setFloat32((i0 * 4 + i1 * 1) * 4, pMatSeatedZeroPoseToRawTrackingPose.m[i0][i1], true);
        }
    }
    const pMatSeatedZeroPoseToRawTrackingPosePtr = Deno.UnsafePointer.of(pMatSeatedZeroPoseToRawTrackingPoseBuffer);
    const result = func.call(this.ptr, pMatSeatedZeroPoseToRawTrackingPosePtr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "SetWorkingStandingZeroPoseToRawTrackingPose",
  "returntype": "void",
  "params": [
    {
      "paramname": "pMatStandingZeroPoseToRawTrackingPose",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  SetWorkingStandingZeroPoseToRawTrackingPose(pMatStandingZeroPoseToRawTrackingPose: HmdMatrix34_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pMatStandingZeroPoseToRawTrackingPoseBuffer = new ArrayBuffer(48);
    const pMatStandingZeroPoseToRawTrackingPoseView = new DataView(pMatStandingZeroPoseToRawTrackingPoseBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pMatStandingZeroPoseToRawTrackingPoseView.setFloat32((i0 * 4 + i1 * 1) * 4, pMatStandingZeroPoseToRawTrackingPose.m[i0][i1], true);
        }
    }
    const pMatStandingZeroPoseToRawTrackingPosePtr = Deno.UnsafePointer.of(pMatStandingZeroPoseToRawTrackingPoseBuffer);
    const result = func.call(this.ptr, pMatStandingZeroPoseToRawTrackingPosePtr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "ReloadFromDisk",
  "returntype": "void",
  "params": [
    {
      "paramname": "configFile",
      "paramtype": "vr::EChaperoneConfigFile"
    }
  ]
}*/
  ReloadFromDisk(configFile: EChaperoneConfigFile): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, configFile);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "GetLiveSeatedZeroPoseToRawTrackingPose",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pmatSeatedZeroPoseToRawTrackingPose",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetLiveSeatedZeroPoseToRawTrackingPose(pmatSeatedZeroPoseToRawTrackingPose: HmdMatrix34_t): [boolean, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u8" });
    const pmatSeatedZeroPoseToRawTrackingPoseBuffer = new ArrayBuffer(48);
    const pmatSeatedZeroPoseToRawTrackingPoseView = new DataView(pmatSeatedZeroPoseToRawTrackingPoseBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatSeatedZeroPoseToRawTrackingPoseView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatSeatedZeroPoseToRawTrackingPose.m[i0][i1], true);
        }
    }
    const pmatSeatedZeroPoseToRawTrackingPosePtr = Deno.UnsafePointer.of(pmatSeatedZeroPoseToRawTrackingPoseBuffer);
    const result = func.call(this.ptr, pmatSeatedZeroPoseToRawTrackingPosePtr);
    return [result, HmdMatrix34_t.fromBuffer(pmatSeatedZeroPoseToRawTrackingPoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "ExportLiveToBuffer",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "pnBufferLength",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  ExportLiveToBuffer(pBuffer: string, pnBufferLength: number): [boolean, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pBufferBuffer = new TextEncoder().encode(pBuffer + '\0');
    const pBufferPtr = Deno.UnsafePointer.of(pBufferBuffer);
    const pnBufferLengthArray = new Float64Array([pnBufferLength]);
    const pnBufferLengthPtr = Deno.UnsafePointer.of(pnBufferLengthArray);
    const result = func.call(this.ptr, pBufferPtr, pnBufferLengthPtr);
    return [result, pnBufferLengthBuffer];
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "ImportFromBufferToWorking",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pBuffer",
      "paramtype": "const char *"
    },
    {
      "paramname": "nImportFlags",
      "paramtype": "uint32_t"
    }
  ]
}*/
  ImportFromBufferToWorking(pBuffer: string, nImportFlags: number): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u8" });
    const pBufferBuffer = new TextEncoder().encode(pBuffer + '\0');
    const pBufferPtr = Deno.UnsafePointer.of(pBufferBuffer);
    const nImportFlagsArray = new Float64Array([nImportFlags]);
    const nImportFlagsPtr = Deno.UnsafePointer.of(nImportFlagsArray);
    const result = func.call(this.ptr, pBufferPtr, nImportFlags);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "ShowWorkingSetPreview",
  "returntype": "void"
}*/
  ShowWorkingSetPreview(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "HideWorkingSetPreview",
  "returntype": "void"
}*/
  HideWorkingSetPreview(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRChaperoneSetup",
  "methodname": "RoomSetupStarting",
  "returntype": "void"
}*/
  RoomSetupStarting(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SetTrackingSpace",
  "returntype": "void",
  "params": [
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    }
  ]
}*/
}

export class IVRCompositor {
  constructor(private ptr: Deno.PointerValue) {}

  SetTrackingSpace(eOrigin: ETrackingUniverseOrigin): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, eOrigin);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetTrackingSpace",
  "returntype": "vr::ETrackingUniverseOrigin"
}*/
  GetTrackingSpace(): ETrackingUniverseOrigin {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "WaitGetPoses",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "pRenderPoseArray",
      "array_count": "unRenderPoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unRenderPoseArrayCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pGamePoseArray",
      "array_count": "unGamePoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unGamePoseArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  WaitGetPoses(pRenderPoseArray: TrackedDevicePose_t[], unRenderPoseArrayCount: number, pGamePoseArray: TrackedDevicePose_t[], unGamePoseArrayCount: number): [EVRCompositorError, TrackedDevicePose_t, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "pointer", "u32"], result: "i32" });
    const pRenderPoseArrayCount = unRenderPoseArrayCount;
    const pRenderPoseArrayBuffer = new ArrayBuffer(88 * pRenderPoseArrayCount);
    const pRenderPoseArrayView = new DataView(pRenderPoseArrayBuffer);
    const pRenderPoseArrayPtr = Deno.UnsafePointer.of(pRenderPoseArrayBuffer);
    const pGamePoseArrayCount = unGamePoseArrayCount;
    const pGamePoseArrayBuffer = new ArrayBuffer(88 * pGamePoseArrayCount);
    const pGamePoseArrayView = new DataView(pGamePoseArrayBuffer);
    const pGamePoseArrayPtr = Deno.UnsafePointer.of(pGamePoseArrayBuffer);
    const unRenderPoseArrayCountArray = new Float64Array([unRenderPoseArrayCount]);
    const unRenderPoseArrayCountPtr = Deno.UnsafePointer.of(unRenderPoseArrayCountArray);
    const unGamePoseArrayCountArray = new Float64Array([unGamePoseArrayCount]);
    const unGamePoseArrayCountPtr = Deno.UnsafePointer.of(unGamePoseArrayCountArray);
    const result = func.call(this.ptr, pRenderPoseArrayPtr, unRenderPoseArrayCount, pGamePoseArrayPtr, unGamePoseArrayCount);
    return [result, TrackedDevicePose_t.fromBuffer(pRenderPoseArrayBuffer, 0), TrackedDevicePose_t.fromBuffer(pGamePoseArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetLastPoses",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "pRenderPoseArray",
      "array_count": "unRenderPoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unRenderPoseArrayCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pGamePoseArray",
      "array_count": "unGamePoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unGamePoseArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetLastPoses(pRenderPoseArray: TrackedDevicePose_t[], unRenderPoseArrayCount: number, pGamePoseArray: TrackedDevicePose_t[], unGamePoseArrayCount: number): [EVRCompositorError, TrackedDevicePose_t, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "pointer", "u32"], result: "i32" });
    const pRenderPoseArrayCount = unRenderPoseArrayCount;
    const pRenderPoseArrayBuffer = new ArrayBuffer(88 * pRenderPoseArrayCount);
    const pRenderPoseArrayView = new DataView(pRenderPoseArrayBuffer);
    const pRenderPoseArrayPtr = Deno.UnsafePointer.of(pRenderPoseArrayBuffer);
    const pGamePoseArrayCount = unGamePoseArrayCount;
    const pGamePoseArrayBuffer = new ArrayBuffer(88 * pGamePoseArrayCount);
    const pGamePoseArrayView = new DataView(pGamePoseArrayBuffer);
    const pGamePoseArrayPtr = Deno.UnsafePointer.of(pGamePoseArrayBuffer);
    const unRenderPoseArrayCountArray = new Float64Array([unRenderPoseArrayCount]);
    const unRenderPoseArrayCountPtr = Deno.UnsafePointer.of(unRenderPoseArrayCountArray);
    const unGamePoseArrayCountArray = new Float64Array([unGamePoseArrayCount]);
    const unGamePoseArrayCountPtr = Deno.UnsafePointer.of(unGamePoseArrayCountArray);
    const result = func.call(this.ptr, pRenderPoseArrayPtr, unRenderPoseArrayCount, pGamePoseArrayPtr, unGamePoseArrayCount);
    return [result, TrackedDevicePose_t.fromBuffer(pRenderPoseArrayBuffer, 0), TrackedDevicePose_t.fromBuffer(pGamePoseArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetLastPoseForTrackedDeviceIndex",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pOutputPose",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "pOutputGamePose",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    }
  ]
}*/
  GetLastPoseForTrackedDeviceIndex(unDeviceIndex: TrackedDeviceIndex_t, pOutputPose: TrackedDevicePose_t, pOutputGamePose: TrackedDevicePose_t): [EVRCompositorError, TrackedDevicePose_t, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "pointer"], result: "i32" });
    const pOutputPoseBuffer = new ArrayBuffer(88);
    const pOutputPoseView = new DataView(pOutputPoseBuffer);
    const pOutputPosePtr = Deno.UnsafePointer.of(pOutputPoseBuffer);
    const pOutputGamePoseBuffer = new ArrayBuffer(88);
    const pOutputGamePoseView = new DataView(pOutputGamePoseBuffer);
    const pOutputGamePosePtr = Deno.UnsafePointer.of(pOutputGamePoseBuffer);
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const result = func.call(this.ptr, unDeviceIndex, pOutputPosePtr, pOutputGamePosePtr);
    return [result, TrackedDevicePose_t.fromBuffer(pOutputPoseBuffer, 0), TrackedDevicePose_t.fromBuffer(pOutputGamePoseBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "Submit",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pTexture",
      "paramtype": "const struct vr::Texture_t *"
    },
    {
      "paramname": "pBounds",
      "paramtype": "const struct vr::VRTextureBounds_t *"
    },
    {
      "paramname": "nSubmitFlags",
      "paramtype": "vr::EVRSubmitFlags"
    }
  ]
}*/
  Submit(eEye: EVREye, pTexture: Texture_t, pBounds: VRTextureBounds_t, nSubmitFlags: EVRSubmitFlags): EVRCompositorError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer", "i32"], result: "i32" });
    const pTextureBuffer = new ArrayBuffer(16);
    const pTextureView = new DataView(pTextureBuffer);
    const pTexturePtr = Deno.UnsafePointer.of(pTextureBuffer);
    const pBoundsBuffer = new ArrayBuffer(16);
    const pBoundsView = new DataView(pBoundsBuffer);
    const pBoundsPtr = Deno.UnsafePointer.of(pBoundsBuffer);
    const result = func.call(this.ptr, eEye, pTexturePtr, pBoundsPtr, nSubmitFlags);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SubmitWithArrayIndex",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pTexture",
      "paramtype": "const struct vr::Texture_t *"
    },
    {
      "paramname": "unTextureArrayIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pBounds",
      "paramtype": "const struct vr::VRTextureBounds_t *"
    },
    {
      "paramname": "nSubmitFlags",
      "paramtype": "vr::EVRSubmitFlags"
    }
  ]
}*/
  SubmitWithArrayIndex(eEye: EVREye, pTexture: Texture_t, unTextureArrayIndex: number, pBounds: VRTextureBounds_t, nSubmitFlags: EVRSubmitFlags): EVRCompositorError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "u32", "pointer", "i32"], result: "i32" });
    const pTextureBuffer = new ArrayBuffer(16);
    const pTextureView = new DataView(pTextureBuffer);
    const pTexturePtr = Deno.UnsafePointer.of(pTextureBuffer);
    const pBoundsBuffer = new ArrayBuffer(16);
    const pBoundsView = new DataView(pBoundsBuffer);
    const pBoundsPtr = Deno.UnsafePointer.of(pBoundsBuffer);
    const unTextureArrayIndexArray = new Float64Array([unTextureArrayIndex]);
    const unTextureArrayIndexPtr = Deno.UnsafePointer.of(unTextureArrayIndexArray);
    const result = func.call(this.ptr, eEye, pTexturePtr, unTextureArrayIndex, pBoundsPtr, nSubmitFlags);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ClearLastSubmittedFrame",
  "returntype": "void"
}*/
  ClearLastSubmittedFrame(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "PostPresentHandoff",
  "returntype": "void"
}*/
  PostPresentHandoff(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetFrameTiming",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pTiming",
      "paramtype": "struct vr::Compositor_FrameTiming *"
    },
    {
      "paramname": "unFramesAgo",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetFrameTiming(pTiming: Compositor_FrameTiming, unFramesAgo: number): [boolean, Compositor_FrameTiming] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u8" });
    const pTimingBuffer = new ArrayBuffer(200);
    const pTimingView = new DataView(pTimingBuffer);
    const pTimingPtr = Deno.UnsafePointer.of(pTimingBuffer);
    const unFramesAgoArray = new Float64Array([unFramesAgo]);
    const unFramesAgoPtr = Deno.UnsafePointer.of(unFramesAgoArray);
    const result = func.call(this.ptr, pTimingPtr, unFramesAgo);
    return [result, Compositor_FrameTiming.fromBuffer(pTimingBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetFrameTimings",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pTiming",
      "array_count": "nFrames",
      "paramtype": "struct vr::Compositor_FrameTiming *"
    },
    {
      "paramname": "nFrames",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetFrameTimings(pTiming: Compositor_FrameTiming[], nFrames: number): [number, Compositor_FrameTiming] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u32" });
    const pTimingCount = nFrames;
    const pTimingBuffer = new ArrayBuffer(200 * pTimingCount);
    const pTimingView = new DataView(pTimingBuffer);
    const pTimingPtr = Deno.UnsafePointer.of(pTimingBuffer);
    const nFramesArray = new Float64Array([nFrames]);
    const nFramesPtr = Deno.UnsafePointer.of(nFramesArray);
    const result = func.call(this.ptr, pTimingPtr, nFrames);
    return [result, Compositor_FrameTiming.fromBuffer(pTimingBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetFrameTimeRemaining",
  "returntype": "float"
}*/
  GetFrameTimeRemaining(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "f32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetCumulativeStats",
  "returntype": "void",
  "params": [
    {
      "paramname": "pStats",
      "paramtype": "struct vr::Compositor_CumulativeStats *"
    },
    {
      "paramname": "nStatsSizeInBytes",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetCumulativeStats(pStats: Compositor_CumulativeStats, nStatsSizeInBytes: number): [void, Compositor_CumulativeStats] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "void" });
    const pStatsBuffer = new ArrayBuffer(88);
    const pStatsView = new DataView(pStatsBuffer);
    const pStatsPtr = Deno.UnsafePointer.of(pStatsBuffer);
    const nStatsSizeInBytesArray = new Float64Array([nStatsSizeInBytes]);
    const nStatsSizeInBytesPtr = Deno.UnsafePointer.of(nStatsSizeInBytesArray);
    const result = func.call(this.ptr, pStatsPtr, nStatsSizeInBytes);
    return [result, Compositor_CumulativeStats.fromBuffer(pStatsBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "FadeToColor",
  "returntype": "void",
  "params": [
    {
      "paramname": "fSeconds",
      "paramtype": "float"
    },
    {
      "paramname": "fRed",
      "paramtype": "float"
    },
    {
      "paramname": "fGreen",
      "paramtype": "float"
    },
    {
      "paramname": "fBlue",
      "paramtype": "float"
    },
    {
      "paramname": "fAlpha",
      "paramtype": "float"
    },
    {
      "paramname": "bBackground",
      "paramtype": "bool"
    }
  ]
}*/
  FadeToColor(fSeconds: number, fRed: number, fGreen: number, fBlue: number, fAlpha: number, bBackground: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "f32", "f32", "f32", "f32", "f32", "u8"], result: "void" });
    const fSecondsArray = new Float64Array([fSeconds]);
    const fSecondsPtr = Deno.UnsafePointer.of(fSecondsArray);
    const fRedArray = new Float64Array([fRed]);
    const fRedPtr = Deno.UnsafePointer.of(fRedArray);
    const fGreenArray = new Float64Array([fGreen]);
    const fGreenPtr = Deno.UnsafePointer.of(fGreenArray);
    const fBlueArray = new Float64Array([fBlue]);
    const fBluePtr = Deno.UnsafePointer.of(fBlueArray);
    const fAlphaArray = new Float64Array([fAlpha]);
    const fAlphaPtr = Deno.UnsafePointer.of(fAlphaArray);
    const bBackgroundArray = new Uint8Array([bBackground ? 1 : 0]);
    const bBackgroundPtr = Deno.UnsafePointer.of(bBackgroundArray);
    const result = func.call(this.ptr, fSeconds, fRed, fGreen, fBlue, fAlpha, bBackground ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetCurrentFadeColor",
  "returntype": "struct vr::HmdColor_t",
  "params": [
    {
      "paramname": "bBackground",
      "paramtype": "bool"
    }
  ]
}*/
  GetCurrentFadeColor(bBackground: boolean): HmdColor_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: { struct: ["f32", "f32", "f32", "f32"] } });
    const bBackgroundArray = new Uint8Array([bBackground ? 1 : 0]);
    const bBackgroundPtr = Deno.UnsafePointer.of(bBackgroundArray);
    const result = func.call(this.ptr, bBackground ? 1 : 0);
    if (result === null) throw new Error("Function returned null pointer");
    return {
      r: (result as any)[0],
      g: (result as any)[1],
      b: (result as any)[2],
      a: (result as any)[3],
    } as HmdColor_t;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "FadeGrid",
  "returntype": "void",
  "params": [
    {
      "paramname": "fSeconds",
      "paramtype": "float"
    },
    {
      "paramname": "bFadeGridIn",
      "paramtype": "bool"
    }
  ]
}*/
  FadeGrid(fSeconds: number, bFadeGridIn: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "f32", "u8"], result: "void" });
    const fSecondsArray = new Float64Array([fSeconds]);
    const fSecondsPtr = Deno.UnsafePointer.of(fSecondsArray);
    const bFadeGridInArray = new Uint8Array([bFadeGridIn ? 1 : 0]);
    const bFadeGridInPtr = Deno.UnsafePointer.of(bFadeGridInArray);
    const result = func.call(this.ptr, fSeconds, bFadeGridIn ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetCurrentGridAlpha",
  "returntype": "float"
}*/
  GetCurrentGridAlpha(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "f32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SetSkyboxOverride",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "pTextures",
      "array_count": "unTextureCount",
      "paramtype": "const struct vr::Texture_t *"
    },
    {
      "paramname": "unTextureCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetSkyboxOverride(pTextures: Texture_t[], unTextureCount: number): EVRCompositorError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "i32" });
    const pTexturesCount = unTextureCount;
    const pTexturesBuffer = new ArrayBuffer(16 * pTexturesCount);
    const pTexturesView = new DataView(pTexturesBuffer);
    const pTexturesPtr = Deno.UnsafePointer.of(pTexturesBuffer);
    const unTextureCountArray = new Float64Array([unTextureCount]);
    const unTextureCountPtr = Deno.UnsafePointer.of(unTextureCountArray);
    const result = func.call(this.ptr, pTexturesPtr, unTextureCount);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ClearSkyboxOverride",
  "returntype": "void"
}*/
  ClearSkyboxOverride(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "CompositorBringToFront",
  "returntype": "void"
}*/
  CompositorBringToFront(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "CompositorGoToBack",
  "returntype": "void"
}*/
  CompositorGoToBack(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(160));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "CompositorQuit",
  "returntype": "void"
}*/
  CompositorQuit(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(168));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "IsFullscreen",
  "returntype": "bool"
}*/
  IsFullscreen(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(176));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetCurrentSceneFocusProcess",
  "returntype": "uint32_t"
}*/
  GetCurrentSceneFocusProcess(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(184));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetLastFrameRenderer",
  "returntype": "uint32_t"
}*/
  GetLastFrameRenderer(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(192));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "CanRenderScene",
  "returntype": "bool"
}*/
  CanRenderScene(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(200));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ShowMirrorWindow",
  "returntype": "void"
}*/
  ShowMirrorWindow(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(208));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "HideMirrorWindow",
  "returntype": "void"
}*/
  HideMirrorWindow(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(216));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "IsMirrorWindowVisible",
  "returntype": "bool"
}*/
  IsMirrorWindowVisible(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(224));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "CompositorDumpImages",
  "returntype": "void"
}*/
  CompositorDumpImages(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(232));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ShouldAppRenderWithLowResources",
  "returntype": "bool"
}*/
  ShouldAppRenderWithLowResources(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(240));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ForceInterleavedReprojectionOn",
  "returntype": "void",
  "params": [
    {
      "paramname": "bOverride",
      "paramtype": "bool"
    }
  ]
}*/
  ForceInterleavedReprojectionOn(bOverride: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(248));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: "void" });
    const bOverrideArray = new Uint8Array([bOverride ? 1 : 0]);
    const bOverridePtr = Deno.UnsafePointer.of(bOverrideArray);
    const result = func.call(this.ptr, bOverride ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ForceReconnectProcess",
  "returntype": "void"
}*/
  ForceReconnectProcess(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(256));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SuspendRendering",
  "returntype": "void",
  "params": [
    {
      "paramname": "bSuspend",
      "paramtype": "bool"
    }
  ]
}*/
  SuspendRendering(bSuspend: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(264));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: "void" });
    const bSuspendArray = new Uint8Array([bSuspend ? 1 : 0]);
    const bSuspendPtr = Deno.UnsafePointer.of(bSuspendArray);
    const result = func.call(this.ptr, bSuspend ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetMirrorTextureD3D11",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pD3D11DeviceOrResource",
      "paramtype": "void *"
    },
    {
      "paramname": "ppD3D11ShaderResourceView",
      "paramtype": "void **"
    }
  ]
}*/
  GetMirrorTextureD3D11(eEye: EVREye, pD3D11DeviceOrResource: Uint8Array, ppD3D11ShaderResourceView: Uint8Array): [EVRCompositorError, Uint8Array, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(272));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer"], result: "i32" });
    const pD3D11DeviceOrResourcePtr = Deno.UnsafePointer.of(pD3D11DeviceOrResource);
    const ppD3D11ShaderResourceViewPtr = Deno.UnsafePointer.of(ppD3D11ShaderResourceView);
    const result = func.call(this.ptr, eEye, pD3D11DeviceOrResourcePtr, ppD3D11ShaderResourceViewPtr);
    return [result, pD3D11DeviceOrResourceBuffer, ppD3D11ShaderResourceViewBuffer];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ReleaseMirrorTextureD3D11",
  "returntype": "void",
  "params": [
    {
      "paramname": "pD3D11ShaderResourceView",
      "paramtype": "void *"
    }
  ]
}*/
  ReleaseMirrorTextureD3D11(pD3D11ShaderResourceView: Uint8Array): [void, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(280));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pD3D11ShaderResourceViewPtr = Deno.UnsafePointer.of(pD3D11ShaderResourceView);
    const result = func.call(this.ptr, pD3D11ShaderResourceViewPtr);
    return [result, pD3D11ShaderResourceViewBuffer];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetMirrorTextureGL",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    },
    {
      "paramname": "pglTextureId",
      "paramtype": "vr::glUInt_t *"
    },
    {
      "paramname": "pglSharedTextureHandle",
      "paramtype": "vr::glSharedTextureHandle_t *"
    }
  ]
}*/
  GetMirrorTextureGL(eEye: EVREye, pglTextureId: glUInt_t, pglSharedTextureHandle: glSharedTextureHandle_t): [EVRCompositorError, glUInt_t, glSharedTextureHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(288));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer"], result: "i32" });
    const pglTextureIdArray = new Float64Array([pglTextureId]);
    const pglTextureIdPtr = Deno.UnsafePointer.of(pglTextureIdArray);
    const pglSharedTextureHandlePtr = pglSharedTextureHandle;
    const result = func.call(this.ptr, eEye, pglTextureIdPtr, pglSharedTextureHandlePtr);
    return [result, pglTextureIdBuffer, pglSharedTextureHandleBuffer];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ReleaseSharedGLTexture",
  "returntype": "bool",
  "params": [
    {
      "paramname": "glTextureId",
      "paramtype": "vr::glUInt_t"
    },
    {
      "paramname": "glSharedTextureHandle",
      "paramtype": "vr::glSharedTextureHandle_t"
    }
  ]
}*/
  ReleaseSharedGLTexture(glTextureId: glUInt_t, glSharedTextureHandle: glSharedTextureHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(296));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer"], result: "u8" });
    const glTextureIdArray = new Float64Array([glTextureId]);
    const glTextureIdPtr = Deno.UnsafePointer.of(glTextureIdArray);
    const glSharedTextureHandlePtr = glSharedTextureHandle;
    const result = func.call(this.ptr, glTextureId, glSharedTextureHandle);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "LockGLSharedTextureForAccess",
  "returntype": "void",
  "params": [
    {
      "paramname": "glSharedTextureHandle",
      "paramtype": "vr::glSharedTextureHandle_t"
    }
  ]
}*/
  LockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(304));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const glSharedTextureHandlePtr = glSharedTextureHandle;
    const result = func.call(this.ptr, glSharedTextureHandle);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "UnlockGLSharedTextureForAccess",
  "returntype": "void",
  "params": [
    {
      "paramname": "glSharedTextureHandle",
      "paramtype": "vr::glSharedTextureHandle_t"
    }
  ]
}*/
  UnlockGLSharedTextureForAccess(glSharedTextureHandle: glSharedTextureHandle_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(312));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const glSharedTextureHandlePtr = glSharedTextureHandle;
    const result = func.call(this.ptr, glSharedTextureHandle);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetVulkanInstanceExtensionsRequired",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetVulkanInstanceExtensionsRequired(pchValue: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(320));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u32" });
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, pchValuePtr, unBufferSize);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetVulkanDeviceExtensionsRequired",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pPhysicalDevice",
      "paramtype": "struct VkPhysicalDevice_T *"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetVulkanDeviceExtensionsRequired(pPhysicalDevice: VkPhysicalDevice_T, pchValue: string, unBufferSize: number): [number, VkPhysicalDevice_T] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(328));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32"], result: "u32" });
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, pPhysicalDevicePtr, pchValuePtr, unBufferSize);
    return [result, pPhysicalDeviceBuffer];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SetExplicitTimingMode",
  "returntype": "void",
  "params": [
    {
      "paramname": "eTimingMode",
      "paramtype": "vr::EVRCompositorTimingMode"
    }
  ]
}*/
  SetExplicitTimingMode(eTimingMode: EVRCompositorTimingMode): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(336));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, eTimingMode);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SubmitExplicitTimingData",
  "returntype": "vr::EVRCompositorError"
}*/
  SubmitExplicitTimingData(): EVRCompositorError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(344));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "IsMotionSmoothingEnabled",
  "returntype": "bool"
}*/
  IsMotionSmoothingEnabled(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(352));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "IsMotionSmoothingSupported",
  "returntype": "bool"
}*/
  IsMotionSmoothingSupported(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(360));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "IsCurrentSceneFocusAppLoading",
  "returntype": "bool"
}*/
  IsCurrentSceneFocusAppLoading(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(368));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "SetStageOverride_Async",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "pchRenderModelPath",
      "paramtype": "const char *"
    },
    {
      "paramname": "pTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    },
    {
      "paramname": "pRenderSettings",
      "paramtype": "const struct vr::Compositor_StageRenderSettings *"
    },
    {
      "paramname": "nSizeOfRenderSettings",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetStageOverride_Async(pchRenderModelPath: string, pTransform: HmdMatrix34_t, pRenderSettings: Compositor_StageRenderSettings, nSizeOfRenderSettings: number): EVRCompositorError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(376));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32"], result: "i32" });
    const pTransformBuffer = new ArrayBuffer(48);
    const pTransformView = new DataView(pTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pTransform.m[i0][i1], true);
        }
    }
    const pTransformPtr = Deno.UnsafePointer.of(pTransformBuffer);
    const pRenderSettingsBuffer = new ArrayBuffer(48);
    const pRenderSettingsView = new DataView(pRenderSettingsBuffer);
    const pRenderSettingsPtr = Deno.UnsafePointer.of(pRenderSettingsBuffer);
    const pchRenderModelPathBuffer = new TextEncoder().encode(pchRenderModelPath + '\0');
    const pchRenderModelPathPtr = Deno.UnsafePointer.of(pchRenderModelPathBuffer);
    const nSizeOfRenderSettingsArray = new Float64Array([nSizeOfRenderSettings]);
    const nSizeOfRenderSettingsPtr = Deno.UnsafePointer.of(nSizeOfRenderSettingsArray);
    const result = func.call(this.ptr, pchRenderModelPathPtr, pTransformPtr, pRenderSettingsPtr, nSizeOfRenderSettings);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "ClearStageOverride",
  "returntype": "void"
}*/
  ClearStageOverride(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(384));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetCompositorBenchmarkResults",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pBenchmarkResults",
      "paramtype": "struct vr::Compositor_BenchmarkResults *"
    },
    {
      "paramname": "nSizeOfBenchmarkResults",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetCompositorBenchmarkResults(pBenchmarkResults: Compositor_BenchmarkResults, nSizeOfBenchmarkResults: number): [boolean, Compositor_BenchmarkResults] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(392));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u8" });
    const pBenchmarkResultsBuffer = new ArrayBuffer(8);
    const pBenchmarkResultsView = new DataView(pBenchmarkResultsBuffer);
    const pBenchmarkResultsPtr = Deno.UnsafePointer.of(pBenchmarkResultsBuffer);
    const nSizeOfBenchmarkResultsArray = new Float64Array([nSizeOfBenchmarkResults]);
    const nSizeOfBenchmarkResultsPtr = Deno.UnsafePointer.of(nSizeOfBenchmarkResultsArray);
    const result = func.call(this.ptr, pBenchmarkResultsPtr, nSizeOfBenchmarkResults);
    return [result, Compositor_BenchmarkResults.fromBuffer(pBenchmarkResultsBuffer, 0)];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetLastPosePredictionIDs",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "pRenderPosePredictionID",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pGamePosePredictionID",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetLastPosePredictionIDs(pRenderPosePredictionID: number, pGamePosePredictionID: number): [EVRCompositorError, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(400));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pRenderPosePredictionIDArray = new Float64Array([pRenderPosePredictionID]);
    const pRenderPosePredictionIDPtr = Deno.UnsafePointer.of(pRenderPosePredictionIDArray);
    const pGamePosePredictionIDArray = new Float64Array([pGamePosePredictionID]);
    const pGamePosePredictionIDPtr = Deno.UnsafePointer.of(pGamePosePredictionIDArray);
    const result = func.call(this.ptr, pRenderPosePredictionIDPtr, pGamePosePredictionIDPtr);
    return [result, pRenderPosePredictionIDBuffer, pGamePosePredictionIDBuffer];
  }

/*{
  "classname": "vr::IVRCompositor",
  "methodname": "GetPosesForFrame",
  "returntype": "vr::EVRCompositorError",
  "params": [
    {
      "paramname": "unPosePredictionID",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pPoseArray",
      "array_count": "unPoseArrayCount",
      "paramtype": "struct vr::TrackedDevicePose_t *"
    },
    {
      "paramname": "unPoseArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetPosesForFrame(unPosePredictionID: number, pPoseArray: TrackedDevicePose_t[], unPoseArrayCount: number): [EVRCompositorError, TrackedDevicePose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(408));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "i32" });
    const pPoseArrayCount = unPoseArrayCount;
    const pPoseArrayBuffer = new ArrayBuffer(88 * pPoseArrayCount);
    const pPoseArrayView = new DataView(pPoseArrayBuffer);
    const pPoseArrayPtr = Deno.UnsafePointer.of(pPoseArrayBuffer);
    const unPosePredictionIDArray = new Float64Array([unPosePredictionID]);
    const unPosePredictionIDPtr = Deno.UnsafePointer.of(unPosePredictionIDArray);
    const unPoseArrayCountArray = new Float64Array([unPoseArrayCount]);
    const unPoseArrayCountPtr = Deno.UnsafePointer.of(unPoseArrayCountArray);
    const result = func.call(this.ptr, unPosePredictionID, pPoseArrayPtr, unPoseArrayCount);
    return [result, TrackedDevicePose_t.fromBuffer(pPoseArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "FindOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "pchOverlayKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t *"
    }
  ]
}*/
}

export class IVROverlay {
  constructor(private ptr: Deno.PointerValue) {}

  FindOverlay(pchOverlayKey: string, pOverlayHandle: VROverlayHandle_t): [EVROverlayError, VROverlayHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchOverlayKeyBuffer = new TextEncoder().encode(pchOverlayKey + '\0');
    const pchOverlayKeyPtr = Deno.UnsafePointer.of(pchOverlayKeyBuffer);
    const pOverlayHandleBuffer = new BigUint64Array([pOverlayHandle]);
    const pOverlayHandlePtr = Deno.UnsafePointer.of(pOverlayHandleBuffer);
    const result = func.call(this.ptr, pchOverlayKeyPtr, pOverlayHandlePtr);
    return [result, pOverlayHandleBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "CreateOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "pchOverlayKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchOverlayName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t *"
    }
  ]
}*/
  CreateOverlay(pchOverlayKey: string, pchOverlayName: string, pOverlayHandle: VROverlayHandle_t): [EVROverlayError, VROverlayHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pchOverlayKeyBuffer = new TextEncoder().encode(pchOverlayKey + '\0');
    const pchOverlayKeyPtr = Deno.UnsafePointer.of(pchOverlayKeyBuffer);
    const pchOverlayNameBuffer = new TextEncoder().encode(pchOverlayName + '\0');
    const pchOverlayNamePtr = Deno.UnsafePointer.of(pchOverlayNameBuffer);
    const pOverlayHandleBuffer = new BigUint64Array([pOverlayHandle]);
    const pOverlayHandlePtr = Deno.UnsafePointer.of(pOverlayHandleBuffer);
    const result = func.call(this.ptr, pchOverlayKeyPtr, pchOverlayNamePtr, pOverlayHandlePtr);
    return [result, pOverlayHandleBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "DestroyOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  DestroyOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayKey",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::EVROverlayError *"
    }
  ]
}*/
  GetOverlayKey(ulOverlayHandle: VROverlayHandle_t, pchValue: string, unBufferSize: number, pError: EVROverlayError): [number, EVROverlayError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "pointer"], result: "u32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, ulOverlayHandle, pchValuePtr, unBufferSize, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayName",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::EVROverlayError *"
    }
  ]
}*/
  GetOverlayName(ulOverlayHandle: VROverlayHandle_t, pchValue: string, unBufferSize: number, pError: EVROverlayError): [number, EVROverlayError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "pointer"], result: "u32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, ulOverlayHandle, pchValuePtr, unBufferSize, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayName",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pchName",
      "paramtype": "const char *"
    }
  ]
}*/
  SetOverlayName(ulOverlayHandle: VROverlayHandle_t, pchName: string): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pchNameBuffer = new TextEncoder().encode(pchName + '\0');
    const pchNamePtr = Deno.UnsafePointer.of(pchNameBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pchNamePtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayImageData",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvBuffer",
      "paramtype": "void *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "punWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "punHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetOverlayImageData(ulOverlayHandle: VROverlayHandle_t, pvBuffer: Uint8Array, unBufferSize: number, punWidth: number, punHeight: number): [EVROverlayError, Uint8Array, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "pointer", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pvBufferPtr = Deno.UnsafePointer.of(pvBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const punWidthArray = new Float64Array([punWidth]);
    const punWidthPtr = Deno.UnsafePointer.of(punWidthArray);
    const punHeightArray = new Float64Array([punHeight]);
    const punHeightPtr = Deno.UnsafePointer.of(punHeightArray);
    const result = func.call(this.ptr, ulOverlayHandle, pvBufferPtr, unBufferSize, punWidthPtr, punHeightPtr);
    return [result, pvBufferBuffer, punWidthBuffer, punHeightBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "error",
      "paramtype": "vr::EVROverlayError"
    }
  ]
}*/
  GetOverlayErrorNameFromEnum(error: EVROverlayError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, error);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayRenderingPid",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "unPID",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetOverlayRenderingPid(ulOverlayHandle: VROverlayHandle_t, unPID: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unPIDArray = new Float64Array([unPID]);
    const unPIDPtr = Deno.UnsafePointer.of(unPIDArray);
    const result = func.call(this.ptr, ulOverlayHandle, unPID);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayRenderingPid",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  GetOverlayRenderingPid(ulOverlayHandle: VROverlayHandle_t): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayFlag",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eOverlayFlag",
      "paramtype": "vr::VROverlayFlags"
    },
    {
      "paramname": "bEnabled",
      "paramtype": "bool"
    }
  ]
}*/
  SetOverlayFlag(ulOverlayHandle: VROverlayHandle_t, eOverlayFlag: VROverlayFlags, bEnabled: boolean): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "u8"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const bEnabledArray = new Uint8Array([bEnabled ? 1 : 0]);
    const bEnabledPtr = Deno.UnsafePointer.of(bEnabledArray);
    const result = func.call(this.ptr, ulOverlayHandle, eOverlayFlag, bEnabled ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayFlag",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eOverlayFlag",
      "paramtype": "vr::VROverlayFlags"
    },
    {
      "paramname": "pbEnabled",
      "paramtype": "bool *"
    }
  ]
}*/
  GetOverlayFlag(ulOverlayHandle: VROverlayHandle_t, eOverlayFlag: VROverlayFlags, pbEnabled: boolean): [EVROverlayError, boolean] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pbEnabledArray = new Uint8Array([pbEnabled ? 1 : 0]);
    const pbEnabledPtr = Deno.UnsafePointer.of(pbEnabledArray);
    const result = func.call(this.ptr, ulOverlayHandle, eOverlayFlag, pbEnabledPtr);
    return [result, pbEnabledBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayFlags",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pFlags",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetOverlayFlags(ulOverlayHandle: VROverlayHandle_t, pFlags: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pFlagsArray = new Float64Array([pFlags]);
    const pFlagsPtr = Deno.UnsafePointer.of(pFlagsArray);
    const result = func.call(this.ptr, ulOverlayHandle, pFlagsPtr);
    return [result, pFlagsBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayColor",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fRed",
      "paramtype": "float"
    },
    {
      "paramname": "fGreen",
      "paramtype": "float"
    },
    {
      "paramname": "fBlue",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayColor(ulOverlayHandle: VROverlayHandle_t, fRed: number, fGreen: number, fBlue: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32", "f32", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fRedArray = new Float64Array([fRed]);
    const fRedPtr = Deno.UnsafePointer.of(fRedArray);
    const fGreenArray = new Float64Array([fGreen]);
    const fGreenPtr = Deno.UnsafePointer.of(fGreenArray);
    const fBlueArray = new Float64Array([fBlue]);
    const fBluePtr = Deno.UnsafePointer.of(fBlueArray);
    const result = func.call(this.ptr, ulOverlayHandle, fRed, fGreen, fBlue);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayColor",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfRed",
      "paramtype": "float *"
    },
    {
      "paramname": "pfGreen",
      "paramtype": "float *"
    },
    {
      "paramname": "pfBlue",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayColor(ulOverlayHandle: VROverlayHandle_t, pfRed: number, pfGreen: number, pfBlue: number): [EVROverlayError, number, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfRedArray = new Float64Array([pfRed]);
    const pfRedPtr = Deno.UnsafePointer.of(pfRedArray);
    const pfGreenArray = new Float64Array([pfGreen]);
    const pfGreenPtr = Deno.UnsafePointer.of(pfGreenArray);
    const pfBlueArray = new Float64Array([pfBlue]);
    const pfBluePtr = Deno.UnsafePointer.of(pfBlueArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfRedPtr, pfGreenPtr, pfBluePtr);
    return [result, pfRedBuffer, pfGreenBuffer, pfBlueBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayAlpha",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fAlpha",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayAlpha(ulOverlayHandle: VROverlayHandle_t, fAlpha: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fAlphaArray = new Float64Array([fAlpha]);
    const fAlphaPtr = Deno.UnsafePointer.of(fAlphaArray);
    const result = func.call(this.ptr, ulOverlayHandle, fAlpha);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayAlpha",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfAlpha",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayAlpha(ulOverlayHandle: VROverlayHandle_t, pfAlpha: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfAlphaArray = new Float64Array([pfAlpha]);
    const pfAlphaPtr = Deno.UnsafePointer.of(pfAlphaArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfAlphaPtr);
    return [result, pfAlphaBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTexelAspect",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fTexelAspect",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayTexelAspect(ulOverlayHandle: VROverlayHandle_t, fTexelAspect: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fTexelAspectArray = new Float64Array([fTexelAspect]);
    const fTexelAspectPtr = Deno.UnsafePointer.of(fTexelAspectArray);
    const result = func.call(this.ptr, ulOverlayHandle, fTexelAspect);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTexelAspect",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfTexelAspect",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayTexelAspect(ulOverlayHandle: VROverlayHandle_t, pfTexelAspect: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfTexelAspectArray = new Float64Array([pfTexelAspect]);
    const pfTexelAspectPtr = Deno.UnsafePointer.of(pfTexelAspectArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfTexelAspectPtr);
    return [result, pfTexelAspectBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlaySortOrder",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "unSortOrder",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetOverlaySortOrder(ulOverlayHandle: VROverlayHandle_t, unSortOrder: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unSortOrderArray = new Float64Array([unSortOrder]);
    const unSortOrderPtr = Deno.UnsafePointer.of(unSortOrderArray);
    const result = func.call(this.ptr, ulOverlayHandle, unSortOrder);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlaySortOrder",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "punSortOrder",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetOverlaySortOrder(ulOverlayHandle: VROverlayHandle_t, punSortOrder: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(160));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const punSortOrderArray = new Float64Array([punSortOrder]);
    const punSortOrderPtr = Deno.UnsafePointer.of(punSortOrderArray);
    const result = func.call(this.ptr, ulOverlayHandle, punSortOrderPtr);
    return [result, punSortOrderBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayWidthInMeters",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fWidthInMeters",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayWidthInMeters(ulOverlayHandle: VROverlayHandle_t, fWidthInMeters: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(168));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fWidthInMetersArray = new Float64Array([fWidthInMeters]);
    const fWidthInMetersPtr = Deno.UnsafePointer.of(fWidthInMetersArray);
    const result = func.call(this.ptr, ulOverlayHandle, fWidthInMeters);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayWidthInMeters",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfWidthInMeters",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayWidthInMeters(ulOverlayHandle: VROverlayHandle_t, pfWidthInMeters: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(176));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfWidthInMetersArray = new Float64Array([pfWidthInMeters]);
    const pfWidthInMetersPtr = Deno.UnsafePointer.of(pfWidthInMetersArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfWidthInMetersPtr);
    return [result, pfWidthInMetersBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayCurvature",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fCurvature",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayCurvature(ulOverlayHandle: VROverlayHandle_t, fCurvature: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(184));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fCurvatureArray = new Float64Array([fCurvature]);
    const fCurvaturePtr = Deno.UnsafePointer.of(fCurvatureArray);
    const result = func.call(this.ptr, ulOverlayHandle, fCurvature);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayCurvature",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfCurvature",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayCurvature(ulOverlayHandle: VROverlayHandle_t, pfCurvature: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(192));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfCurvatureArray = new Float64Array([pfCurvature]);
    const pfCurvaturePtr = Deno.UnsafePointer.of(pfCurvatureArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfCurvaturePtr);
    return [result, pfCurvatureBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayPreCurvePitch",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fRadians",
      "paramtype": "float"
    }
  ]
}*/
  SetOverlayPreCurvePitch(ulOverlayHandle: VROverlayHandle_t, fRadians: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(200));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fRadiansArray = new Float64Array([fRadians]);
    const fRadiansPtr = Deno.UnsafePointer.of(fRadiansArray);
    const result = func.call(this.ptr, ulOverlayHandle, fRadians);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayPreCurvePitch",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pfRadians",
      "paramtype": "float *"
    }
  ]
}*/
  GetOverlayPreCurvePitch(ulOverlayHandle: VROverlayHandle_t, pfRadians: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(208));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pfRadiansArray = new Float64Array([pfRadians]);
    const pfRadiansPtr = Deno.UnsafePointer.of(pfRadiansArray);
    const result = func.call(this.ptr, ulOverlayHandle, pfRadiansPtr);
    return [result, pfRadiansBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTextureColorSpace",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eTextureColorSpace",
      "paramtype": "vr::EColorSpace"
    }
  ]
}*/
  SetOverlayTextureColorSpace(ulOverlayHandle: VROverlayHandle_t, eTextureColorSpace: EColorSpace): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(216));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eTextureColorSpace);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTextureColorSpace",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "peTextureColorSpace",
      "paramtype": "vr::EColorSpace *"
    }
  ]
}*/
  GetOverlayTextureColorSpace(ulOverlayHandle: VROverlayHandle_t, peTextureColorSpace: EColorSpace): [EVROverlayError, EColorSpace] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(224));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, peTextureColorSpacePtr);
    return [result, peTextureColorSpaceBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTextureBounds",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pOverlayTextureBounds",
      "paramtype": "const struct vr::VRTextureBounds_t *"
    }
  ]
}*/
  SetOverlayTextureBounds(ulOverlayHandle: VROverlayHandle_t, pOverlayTextureBounds: VRTextureBounds_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(232));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pOverlayTextureBoundsBuffer = new ArrayBuffer(16);
    const pOverlayTextureBoundsView = new DataView(pOverlayTextureBoundsBuffer);
    const pOverlayTextureBoundsPtr = Deno.UnsafePointer.of(pOverlayTextureBoundsBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pOverlayTextureBoundsPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTextureBounds",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pOverlayTextureBounds",
      "paramtype": "struct vr::VRTextureBounds_t *"
    }
  ]
}*/
  GetOverlayTextureBounds(ulOverlayHandle: VROverlayHandle_t, pOverlayTextureBounds: VRTextureBounds_t): [EVROverlayError, VRTextureBounds_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(240));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pOverlayTextureBoundsBuffer = new ArrayBuffer(16);
    const pOverlayTextureBoundsView = new DataView(pOverlayTextureBoundsBuffer);
    const pOverlayTextureBoundsPtr = Deno.UnsafePointer.of(pOverlayTextureBoundsBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pOverlayTextureBoundsPtr);
    return [result, VRTextureBounds_t.fromBuffer(pOverlayTextureBoundsBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTransformType",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "peTransformType",
      "paramtype": "vr::VROverlayTransformType *"
    }
  ]
}*/
  GetOverlayTransformType(ulOverlayHandle: VROverlayHandle_t, peTransformType: VROverlayTransformType): [EVROverlayError, VROverlayTransformType] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(248));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, peTransformTypePtr);
    return [result, peTransformTypeBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTransformAbsolute",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eTrackingOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pmatTrackingOriginToOverlayTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  SetOverlayTransformAbsolute(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(256));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer"], result: "i32" });
    const pmatTrackingOriginToOverlayTransformBuffer = new ArrayBuffer(48);
    const pmatTrackingOriginToOverlayTransformView = new DataView(pmatTrackingOriginToOverlayTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackingOriginToOverlayTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackingOriginToOverlayTransform.m[i0][i1], true);
        }
    }
    const pmatTrackingOriginToOverlayTransformPtr = Deno.UnsafePointer.of(pmatTrackingOriginToOverlayTransformBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eTrackingOrigin, pmatTrackingOriginToOverlayTransformPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTransformAbsolute",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "peTrackingOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin *"
    },
    {
      "paramname": "pmatTrackingOriginToOverlayTransform",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetOverlayTransformAbsolute(ulOverlayHandle: VROverlayHandle_t, peTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t): [EVROverlayError, ETrackingUniverseOrigin, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(264));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer"], result: "i32" });
    const pmatTrackingOriginToOverlayTransformBuffer = new ArrayBuffer(48);
    const pmatTrackingOriginToOverlayTransformView = new DataView(pmatTrackingOriginToOverlayTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackingOriginToOverlayTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackingOriginToOverlayTransform.m[i0][i1], true);
        }
    }
    const pmatTrackingOriginToOverlayTransformPtr = Deno.UnsafePointer.of(pmatTrackingOriginToOverlayTransformBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, peTrackingOriginPtr, pmatTrackingOriginToOverlayTransformPtr);
    return [result, peTrackingOriginBuffer, HmdMatrix34_t.fromBuffer(pmatTrackingOriginToOverlayTransformBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTransformTrackedDeviceRelative",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "unTrackedDevice",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pmatTrackedDeviceToOverlayTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  SetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: VROverlayHandle_t, unTrackedDevice: TrackedDeviceIndex_t, pmatTrackedDeviceToOverlayTransform: HmdMatrix34_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(272));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32", "pointer"], result: "i32" });
    const pmatTrackedDeviceToOverlayTransformBuffer = new ArrayBuffer(48);
    const pmatTrackedDeviceToOverlayTransformView = new DataView(pmatTrackedDeviceToOverlayTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackedDeviceToOverlayTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackedDeviceToOverlayTransform.m[i0][i1], true);
        }
    }
    const pmatTrackedDeviceToOverlayTransformPtr = Deno.UnsafePointer.of(pmatTrackedDeviceToOverlayTransformBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unTrackedDeviceArray = new Float64Array([unTrackedDevice]);
    const unTrackedDevicePtr = Deno.UnsafePointer.of(unTrackedDeviceArray);
    const result = func.call(this.ptr, ulOverlayHandle, unTrackedDevice, pmatTrackedDeviceToOverlayTransformPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTransformTrackedDeviceRelative",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "punTrackedDevice",
      "paramtype": "vr::TrackedDeviceIndex_t *"
    },
    {
      "paramname": "pmatTrackedDeviceToOverlayTransform",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetOverlayTransformTrackedDeviceRelative(ulOverlayHandle: VROverlayHandle_t, punTrackedDevice: TrackedDeviceIndex_t, pmatTrackedDeviceToOverlayTransform: HmdMatrix34_t): [EVROverlayError, TrackedDeviceIndex_t, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(280));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer"], result: "i32" });
    const pmatTrackedDeviceToOverlayTransformBuffer = new ArrayBuffer(48);
    const pmatTrackedDeviceToOverlayTransformView = new DataView(pmatTrackedDeviceToOverlayTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackedDeviceToOverlayTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackedDeviceToOverlayTransform.m[i0][i1], true);
        }
    }
    const pmatTrackedDeviceToOverlayTransformPtr = Deno.UnsafePointer.of(pmatTrackedDeviceToOverlayTransformBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const punTrackedDeviceArray = new Float64Array([punTrackedDevice]);
    const punTrackedDevicePtr = Deno.UnsafePointer.of(punTrackedDeviceArray);
    const result = func.call(this.ptr, ulOverlayHandle, punTrackedDevicePtr, pmatTrackedDeviceToOverlayTransformPtr);
    return [result, punTrackedDeviceBuffer, HmdMatrix34_t.fromBuffer(pmatTrackedDeviceToOverlayTransformBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTransformTrackedDeviceComponent",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    }
  ]
}*/
  SetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: VROverlayHandle_t, unDeviceIndex: TrackedDeviceIndex_t, pchComponentName: string): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(288));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, unDeviceIndex, pchComponentNamePtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTransformTrackedDeviceComponent",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "punDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t *"
    },
    {
      "paramname": "pchComponentName",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unComponentNameSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetOverlayTransformTrackedDeviceComponent(ulOverlayHandle: VROverlayHandle_t, punDeviceIndex: TrackedDeviceIndex_t, pchComponentName: string, unComponentNameSize: number): [EVROverlayError, TrackedDeviceIndex_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(296));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "u32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const punDeviceIndexArray = new Float64Array([punDeviceIndex]);
    const punDeviceIndexPtr = Deno.UnsafePointer.of(punDeviceIndexArray);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const unComponentNameSizeArray = new Float64Array([unComponentNameSize]);
    const unComponentNameSizePtr = Deno.UnsafePointer.of(unComponentNameSizeArray);
    const result = func.call(this.ptr, ulOverlayHandle, punDeviceIndexPtr, pchComponentNamePtr, unComponentNameSize);
    return [result, punDeviceIndexBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTransformCursor",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulCursorOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvHotspot",
      "paramtype": "const struct vr::HmdVector2_t *"
    }
  ]
}*/
  SetOverlayTransformCursor(ulCursorOverlayHandle: VROverlayHandle_t, pvHotspot: HmdVector2_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(304));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pvHotspotBuffer = new ArrayBuffer(8);
    const pvHotspotView = new DataView(pvHotspotBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pvHotspotView.setFloat32((i0 * 1) * 4, pvHotspot.v[i0], true);
    }
    const pvHotspotPtr = Deno.UnsafePointer.of(pvHotspotBuffer);
    const ulCursorOverlayHandleBuffer = new BigUint64Array([ulCursorOverlayHandle]);
    const ulCursorOverlayHandlePtr = Deno.UnsafePointer.of(ulCursorOverlayHandleBuffer);
    const result = func.call(this.ptr, ulCursorOverlayHandle, pvHotspotPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTransformCursor",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvHotspot",
      "paramtype": "struct vr::HmdVector2_t *"
    }
  ]
}*/
  GetOverlayTransformCursor(ulOverlayHandle: VROverlayHandle_t, pvHotspot: HmdVector2_t): [EVROverlayError, HmdVector2_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(312));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pvHotspotBuffer = new ArrayBuffer(8);
    const pvHotspotView = new DataView(pvHotspotBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pvHotspotView.setFloat32((i0 * 1) * 4, pvHotspot.v[i0], true);
    }
    const pvHotspotPtr = Deno.UnsafePointer.of(pvHotspotBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pvHotspotPtr);
    return [result, HmdVector2_t.fromBuffer(pvHotspotBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTransformProjection",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eTrackingOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pmatTrackingOriginToOverlayTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    },
    {
      "paramname": "pProjection",
      "paramtype": "const struct vr::VROverlayProjection_t *"
    },
    {
      "paramname": "eEye",
      "paramtype": "vr::EVREye"
    }
  ]
}*/
  SetOverlayTransformProjection(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToOverlayTransform: HmdMatrix34_t, pProjection: VROverlayProjection_t, eEye: EVREye): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(320));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "pointer", "i32"], result: "i32" });
    const pmatTrackingOriginToOverlayTransformBuffer = new ArrayBuffer(48);
    const pmatTrackingOriginToOverlayTransformView = new DataView(pmatTrackingOriginToOverlayTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackingOriginToOverlayTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackingOriginToOverlayTransform.m[i0][i1], true);
        }
    }
    const pmatTrackingOriginToOverlayTransformPtr = Deno.UnsafePointer.of(pmatTrackingOriginToOverlayTransformBuffer);
    const pProjectionBuffer = new ArrayBuffer(16);
    const pProjectionView = new DataView(pProjectionBuffer);
    const pProjectionPtr = Deno.UnsafePointer.of(pProjectionBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eTrackingOrigin, pmatTrackingOriginToOverlayTransformPtr, pProjectionPtr, eEye);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ShowOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  ShowOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(328));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "HideOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  HideOverlay(ulOverlayHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(336));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "IsOverlayVisible",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  IsOverlayVisible(ulOverlayHandle: VROverlayHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(344));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u8" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result !== 0;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetTransformForOverlayCoordinates",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eTrackingOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "coordinatesInOverlay",
      "paramtype": "struct vr::HmdVector2_t"
    },
    {
      "paramname": "pmatTransform",
      "paramtype": "struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  GetTransformForOverlayCoordinates(ulOverlayHandle: VROverlayHandle_t, eTrackingOrigin: ETrackingUniverseOrigin, coordinatesInOverlay: HmdVector2_t, pmatTransform: HmdMatrix34_t): [EVROverlayError, HmdMatrix34_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(352));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", { struct: ["f32","f32"] }, "pointer"], result: "i32" });
    const coordinatesInOverlayBuffer = new ArrayBuffer(8);
    const coordinatesInOverlayView = new DataView(coordinatesInOverlayBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        coordinatesInOverlayView.setFloat32((i0 * 1) * 4, coordinatesInOverlay.v[i0], true);
    }
    const coordinatesInOverlayPtr = Deno.UnsafePointer.of(coordinatesInOverlayBuffer);
    const pmatTransformBuffer = new ArrayBuffer(48);
    const pmatTransformView = new DataView(pmatTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTransform.m[i0][i1], true);
        }
    }
    const pmatTransformPtr = Deno.UnsafePointer.of(pmatTransformBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eTrackingOrigin, coordinatesInOverlayBuffer, pmatTransformPtr);
    return [result, HmdMatrix34_t.fromBuffer(pmatTransformBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "WaitFrameSync",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "nTimeoutMs",
      "paramtype": "uint32_t"
    }
  ]
}*/
  WaitFrameSync(nTimeoutMs: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(360));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const nTimeoutMsArray = new Float64Array([nTimeoutMs]);
    const nTimeoutMsPtr = Deno.UnsafePointer.of(nTimeoutMsArray);
    const result = func.call(this.ptr, nTimeoutMs);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "PollNextOverlayEvent",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pEvent",
      "paramtype": "struct vr::VREvent_t *"
    },
    {
      "paramname": "uncbVREvent",
      "paramtype": "uint32_t"
    }
  ]
}*/
  PollNextOverlayEvent(ulOverlayHandle: VROverlayHandle_t, pEvent: VREvent_t, uncbVREvent: number): [boolean, VREvent_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(368));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "u8" });
    const pEventBuffer = new ArrayBuffer(NaN);
    const pEventView = new DataView(pEventBuffer);
    const pEventPtr = Deno.UnsafePointer.of(pEventBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const uncbVREventArray = new Float64Array([uncbVREvent]);
    const uncbVREventPtr = Deno.UnsafePointer.of(uncbVREventArray);
    const result = func.call(this.ptr, ulOverlayHandle, pEventPtr, uncbVREvent);
    return [result, VREvent_t.fromBuffer(pEventBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayInputMethod",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "peInputMethod",
      "paramtype": "vr::VROverlayInputMethod *"
    }
  ]
}*/
  GetOverlayInputMethod(ulOverlayHandle: VROverlayHandle_t, peInputMethod: VROverlayInputMethod): [EVROverlayError, VROverlayInputMethod] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(376));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, peInputMethodPtr);
    return [result, peInputMethodBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayInputMethod",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eInputMethod",
      "paramtype": "vr::VROverlayInputMethod"
    }
  ]
}*/
  SetOverlayInputMethod(ulOverlayHandle: VROverlayHandle_t, eInputMethod: VROverlayInputMethod): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(384));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eInputMethod);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayMouseScale",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvecMouseScale",
      "paramtype": "struct vr::HmdVector2_t *"
    }
  ]
}*/
  GetOverlayMouseScale(ulOverlayHandle: VROverlayHandle_t, pvecMouseScale: HmdVector2_t): [EVROverlayError, HmdVector2_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(392));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pvecMouseScaleBuffer = new ArrayBuffer(8);
    const pvecMouseScaleView = new DataView(pvecMouseScaleBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pvecMouseScaleView.setFloat32((i0 * 1) * 4, pvecMouseScale.v[i0], true);
    }
    const pvecMouseScalePtr = Deno.UnsafePointer.of(pvecMouseScaleBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pvecMouseScalePtr);
    return [result, HmdVector2_t.fromBuffer(pvecMouseScaleBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayMouseScale",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvecMouseScale",
      "paramtype": "const struct vr::HmdVector2_t *"
    }
  ]
}*/
  SetOverlayMouseScale(ulOverlayHandle: VROverlayHandle_t, pvecMouseScale: HmdVector2_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(400));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pvecMouseScaleBuffer = new ArrayBuffer(8);
    const pvecMouseScaleView = new DataView(pvecMouseScaleBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pvecMouseScaleView.setFloat32((i0 * 1) * 4, pvecMouseScale.v[i0], true);
    }
    const pvecMouseScalePtr = Deno.UnsafePointer.of(pvecMouseScaleBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pvecMouseScalePtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ComputeOverlayIntersection",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pParams",
      "paramtype": "const struct vr::VROverlayIntersectionParams_t *"
    },
    {
      "paramname": "pResults",
      "paramtype": "struct vr::VROverlayIntersectionResults_t *"
    }
  ]
}*/
  ComputeOverlayIntersection(ulOverlayHandle: VROverlayHandle_t, pParams: VROverlayIntersectionParams_t, pResults: VROverlayIntersectionResults_t): [boolean, VROverlayIntersectionParams_t, VROverlayIntersectionResults_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(408));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer"], result: "u8" });
    const pParamsBuffer = new ArrayBuffer(32);
    const pParamsView = new DataView(pParamsBuffer);
    const pParamsPtr = Deno.UnsafePointer.of(pParamsBuffer);
    const pResultsBuffer = new ArrayBuffer(48);
    const pResultsView = new DataView(pResultsBuffer);
    const pResultsPtr = Deno.UnsafePointer.of(pResultsBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pParamsPtr, pResultsPtr);
    return [result, VROverlayIntersectionParams_t.fromBuffer(pParamsBuffer, 0), VROverlayIntersectionResults_t.fromBuffer(pResultsBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "IsHoverTargetOverlay",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  IsHoverTargetOverlay(ulOverlayHandle: VROverlayHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(416));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u8" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result !== 0;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayIntersectionMask",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pMaskPrimitives",
      "paramtype": "struct vr::VROverlayIntersectionMaskPrimitive_t *"
    },
    {
      "paramname": "unNumMaskPrimitives",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unPrimitiveSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetOverlayIntersectionMask(ulOverlayHandle: VROverlayHandle_t, pMaskPrimitives: VROverlayIntersectionMaskPrimitive_t, unNumMaskPrimitives: number, unPrimitiveSize: number): [EVROverlayError, VROverlayIntersectionMaskPrimitive_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(424));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "u32"], result: "i32" });
    const pMaskPrimitivesBuffer = new ArrayBuffer(NaN);
    const pMaskPrimitivesView = new DataView(pMaskPrimitivesBuffer);
    const pMaskPrimitivesPtr = Deno.UnsafePointer.of(pMaskPrimitivesBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unNumMaskPrimitivesArray = new Float64Array([unNumMaskPrimitives]);
    const unNumMaskPrimitivesPtr = Deno.UnsafePointer.of(unNumMaskPrimitivesArray);
    const unPrimitiveSizeArray = new Float64Array([unPrimitiveSize]);
    const unPrimitiveSizePtr = Deno.UnsafePointer.of(unPrimitiveSizeArray);
    const result = func.call(this.ptr, ulOverlayHandle, pMaskPrimitivesPtr, unNumMaskPrimitives, unPrimitiveSize);
    return [result, VROverlayIntersectionMaskPrimitive_t.fromBuffer(pMaskPrimitivesBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "TriggerLaserMouseHapticVibration",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "fDurationSeconds",
      "paramtype": "float"
    },
    {
      "paramname": "fFrequency",
      "paramtype": "float"
    },
    {
      "paramname": "fAmplitude",
      "paramtype": "float"
    }
  ]
}*/
  TriggerLaserMouseHapticVibration(ulOverlayHandle: VROverlayHandle_t, fDurationSeconds: number, fFrequency: number, fAmplitude: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(432));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32", "f32", "f32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const fDurationSecondsArray = new Float64Array([fDurationSeconds]);
    const fDurationSecondsPtr = Deno.UnsafePointer.of(fDurationSecondsArray);
    const fFrequencyArray = new Float64Array([fFrequency]);
    const fFrequencyPtr = Deno.UnsafePointer.of(fFrequencyArray);
    const fAmplitudeArray = new Float64Array([fAmplitude]);
    const fAmplitudePtr = Deno.UnsafePointer.of(fAmplitudeArray);
    const result = func.call(this.ptr, ulOverlayHandle, fDurationSeconds, fFrequency, fAmplitude);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayCursor",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "ulCursorHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  SetOverlayCursor(ulOverlayHandle: VROverlayHandle_t, ulCursorHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(440));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const ulCursorHandleBuffer = new BigUint64Array([ulCursorHandle]);
    const ulCursorHandlePtr = Deno.UnsafePointer.of(ulCursorHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, ulCursorHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayCursorPositionOverride",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvCursor",
      "paramtype": "const struct vr::HmdVector2_t *"
    }
  ]
}*/
  SetOverlayCursorPositionOverride(ulOverlayHandle: VROverlayHandle_t, pvCursor: HmdVector2_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(448));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pvCursorBuffer = new ArrayBuffer(8);
    const pvCursorView = new DataView(pvCursorBuffer);
    for (let i0 = 0; i0 < 2; i0++) {
        pvCursorView.setFloat32((i0 * 1) * 4, pvCursor.v[i0], true);
    }
    const pvCursorPtr = Deno.UnsafePointer.of(pvCursorBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pvCursorPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ClearOverlayCursorPositionOverride",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  ClearOverlayCursorPositionOverride(ulOverlayHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(456));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayTexture",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pTexture",
      "paramtype": "const struct vr::Texture_t *"
    }
  ]
}*/
  SetOverlayTexture(ulOverlayHandle: VROverlayHandle_t, pTexture: Texture_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(464));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const pTextureBuffer = new ArrayBuffer(16);
    const pTextureView = new DataView(pTextureBuffer);
    const pTexturePtr = Deno.UnsafePointer.of(pTextureBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pTexturePtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ClearOverlayTexture",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  ClearOverlayTexture(ulOverlayHandle: VROverlayHandle_t): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(472));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayRaw",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvBuffer",
      "paramtype": "void *"
    },
    {
      "paramname": "unWidth",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unHeight",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unBytesPerPixel",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetOverlayRaw(ulOverlayHandle: VROverlayHandle_t, pvBuffer: Uint8Array, unWidth: number, unHeight: number, unBytesPerPixel: number): [EVROverlayError, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(480));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "u32", "u32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pvBufferPtr = Deno.UnsafePointer.of(pvBuffer);
    const unWidthArray = new Float64Array([unWidth]);
    const unWidthPtr = Deno.UnsafePointer.of(unWidthArray);
    const unHeightArray = new Float64Array([unHeight]);
    const unHeightPtr = Deno.UnsafePointer.of(unHeightArray);
    const unBytesPerPixelArray = new Float64Array([unBytesPerPixel]);
    const unBytesPerPixelPtr = Deno.UnsafePointer.of(unBytesPerPixelArray);
    const result = func.call(this.ptr, ulOverlayHandle, pvBufferPtr, unWidth, unHeight, unBytesPerPixel);
    return [result, pvBufferBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetOverlayFromFile",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pchFilePath",
      "paramtype": "const char *"
    }
  ]
}*/
  SetOverlayFromFile(ulOverlayHandle: VROverlayHandle_t, pchFilePath: string): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(488));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pchFilePathBuffer = new TextEncoder().encode(pchFilePath + '\0');
    const pchFilePathPtr = Deno.UnsafePointer.of(pchFilePathBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pchFilePathPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTexture",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pNativeTextureHandle",
      "paramtype": "void **"
    },
    {
      "paramname": "pNativeTextureRef",
      "paramtype": "void *"
    },
    {
      "paramname": "pWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pHeight",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pNativeFormat",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pAPIType",
      "paramtype": "vr::ETextureType *"
    },
    {
      "paramname": "pColorSpace",
      "paramtype": "vr::EColorSpace *"
    },
    {
      "paramname": "pTextureBounds",
      "paramtype": "struct vr::VRTextureBounds_t *"
    }
  ]
}*/
  GetOverlayTexture(ulOverlayHandle: VROverlayHandle_t, pNativeTextureHandle: Uint8Array, pNativeTextureRef: Uint8Array, pWidth: number, pHeight: number, pNativeFormat: number, pAPIType: ETextureType, pColorSpace: EColorSpace, pTextureBounds: VRTextureBounds_t): [EVROverlayError, Uint8Array, Uint8Array, number, number, number, ETextureType, EColorSpace, VRTextureBounds_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(496));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pTextureBoundsBuffer = new ArrayBuffer(16);
    const pTextureBoundsView = new DataView(pTextureBoundsBuffer);
    const pTextureBoundsPtr = Deno.UnsafePointer.of(pTextureBoundsBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pNativeTextureHandlePtr = Deno.UnsafePointer.of(pNativeTextureHandle);
    const pNativeTextureRefPtr = Deno.UnsafePointer.of(pNativeTextureRef);
    const pWidthArray = new Float64Array([pWidth]);
    const pWidthPtr = Deno.UnsafePointer.of(pWidthArray);
    const pHeightArray = new Float64Array([pHeight]);
    const pHeightPtr = Deno.UnsafePointer.of(pHeightArray);
    const pNativeFormatArray = new Float64Array([pNativeFormat]);
    const pNativeFormatPtr = Deno.UnsafePointer.of(pNativeFormatArray);
    const result = func.call(this.ptr, ulOverlayHandle, pNativeTextureHandlePtr, pNativeTextureRefPtr, pWidthPtr, pHeightPtr, pNativeFormatPtr, pAPITypePtr, pColorSpacePtr, pTextureBoundsPtr);
    return [result, pNativeTextureHandleBuffer, pNativeTextureRefBuffer, pWidthBuffer, pHeightBuffer, pNativeFormatBuffer, pAPITypeBuffer, pColorSpaceBuffer, VRTextureBounds_t.fromBuffer(pTextureBoundsBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ReleaseNativeOverlayHandle",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pNativeTextureHandle",
      "paramtype": "void *"
    }
  ]
}*/
  ReleaseNativeOverlayHandle(ulOverlayHandle: VROverlayHandle_t, pNativeTextureHandle: Uint8Array): [EVROverlayError, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(504));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pNativeTextureHandlePtr = Deno.UnsafePointer.of(pNativeTextureHandle);
    const result = func.call(this.ptr, ulOverlayHandle, pNativeTextureHandlePtr);
    return [result, pNativeTextureHandleBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetOverlayTextureSize",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetOverlayTextureSize(ulOverlayHandle: VROverlayHandle_t, pWidth: number, pHeight: number): [EVROverlayError, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(512));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const pWidthArray = new Float64Array([pWidth]);
    const pWidthPtr = Deno.UnsafePointer.of(pWidthArray);
    const pHeightArray = new Float64Array([pHeight]);
    const pHeightPtr = Deno.UnsafePointer.of(pHeightArray);
    const result = func.call(this.ptr, ulOverlayHandle, pWidthPtr, pHeightPtr);
    return [result, pWidthBuffer, pHeightBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "CreateDashboardOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "pchOverlayKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchOverlayFriendlyName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pMainHandle",
      "paramtype": "vr::VROverlayHandle_t *"
    },
    {
      "paramname": "pThumbnailHandle",
      "paramtype": "vr::VROverlayHandle_t *"
    }
  ]
}*/
  CreateDashboardOverlay(pchOverlayKey: string, pchOverlayFriendlyName: string, pMainHandle: VROverlayHandle_t, pThumbnailHandle: VROverlayHandle_t): [EVROverlayError, VROverlayHandle_t, VROverlayHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(520));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pchOverlayKeyBuffer = new TextEncoder().encode(pchOverlayKey + '\0');
    const pchOverlayKeyPtr = Deno.UnsafePointer.of(pchOverlayKeyBuffer);
    const pchOverlayFriendlyNameBuffer = new TextEncoder().encode(pchOverlayFriendlyName + '\0');
    const pchOverlayFriendlyNamePtr = Deno.UnsafePointer.of(pchOverlayFriendlyNameBuffer);
    const pMainHandleBuffer = new BigUint64Array([pMainHandle]);
    const pMainHandlePtr = Deno.UnsafePointer.of(pMainHandleBuffer);
    const pThumbnailHandleBuffer = new BigUint64Array([pThumbnailHandle]);
    const pThumbnailHandlePtr = Deno.UnsafePointer.of(pThumbnailHandleBuffer);
    const result = func.call(this.ptr, pchOverlayKeyPtr, pchOverlayFriendlyNamePtr, pMainHandlePtr, pThumbnailHandlePtr);
    return [result, pMainHandleBuffer, pThumbnailHandleBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "IsDashboardVisible",
  "returntype": "bool"
}*/
  IsDashboardVisible(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(528));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "IsActiveDashboardOverlay",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  IsActiveDashboardOverlay(ulOverlayHandle: VROverlayHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(536));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u8" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result !== 0;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetDashboardOverlaySceneProcess",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "unProcessId",
      "paramtype": "uint32_t"
    }
  ]
}*/
  SetDashboardOverlaySceneProcess(ulOverlayHandle: VROverlayHandle_t, unProcessId: number): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(544));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u32"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unProcessIdArray = new Float64Array([unProcessId]);
    const unProcessIdPtr = Deno.UnsafePointer.of(unProcessIdArray);
    const result = func.call(this.ptr, ulOverlayHandle, unProcessId);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetDashboardOverlaySceneProcess",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "punProcessId",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetDashboardOverlaySceneProcess(ulOverlayHandle: VROverlayHandle_t, punProcessId: number): [EVROverlayError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(552));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const punProcessIdArray = new Float64Array([punProcessId]);
    const punProcessIdPtr = Deno.UnsafePointer.of(punProcessIdArray);
    const result = func.call(this.ptr, ulOverlayHandle, punProcessIdPtr);
    return [result, punProcessIdBuffer];
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ShowDashboard",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchOverlayToShow",
      "paramtype": "const char *"
    }
  ]
}*/
  ShowDashboard(pchOverlayToShow: string): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(560));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pchOverlayToShowBuffer = new TextEncoder().encode(pchOverlayToShow + '\0');
    const pchOverlayToShowPtr = Deno.UnsafePointer.of(pchOverlayToShowBuffer);
    const result = func.call(this.ptr, pchOverlayToShowPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetPrimaryDashboardDevice",
  "returntype": "vr::TrackedDeviceIndex_t"
}*/
  GetPrimaryDashboardDevice(): TrackedDeviceIndex_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(568));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ShowKeyboard",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "eInputMode",
      "paramtype": "vr::EGamepadTextInputMode"
    },
    {
      "paramname": "eLineInputMode",
      "paramtype": "vr::EGamepadTextInputLineMode"
    },
    {
      "paramname": "unFlags",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchDescription",
      "paramtype": "const char *"
    },
    {
      "paramname": "unCharMax",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchExistingText",
      "paramtype": "const char *"
    },
    {
      "paramname": "uUserValue",
      "paramtype": "uint64_t"
    }
  ]
}*/
  ShowKeyboard(eInputMode: EGamepadTextInputMode, eLineInputMode: EGamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(576));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "i32", "u32", "pointer", "u32", "pointer", "u64"], result: "i32" });
    const unFlagsArray = new Float64Array([unFlags]);
    const unFlagsPtr = Deno.UnsafePointer.of(unFlagsArray);
    const pchDescriptionBuffer = new TextEncoder().encode(pchDescription + '\0');
    const pchDescriptionPtr = Deno.UnsafePointer.of(pchDescriptionBuffer);
    const unCharMaxArray = new Float64Array([unCharMax]);
    const unCharMaxPtr = Deno.UnsafePointer.of(unCharMaxArray);
    const pchExistingTextBuffer = new TextEncoder().encode(pchExistingText + '\0');
    const pchExistingTextPtr = Deno.UnsafePointer.of(pchExistingTextBuffer);
    const uUserValueBuffer = new BigUint64Array([uUserValue]);
    const uUserValuePtr = Deno.UnsafePointer.of(uUserValueBuffer);
    const result = func.call(this.ptr, eInputMode, eLineInputMode, unFlags, pchDescriptionPtr, unCharMax, pchExistingTextPtr, uUserValue);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ShowKeyboardForOverlay",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "eInputMode",
      "paramtype": "vr::EGamepadTextInputMode"
    },
    {
      "paramname": "eLineInputMode",
      "paramtype": "vr::EGamepadTextInputLineMode"
    },
    {
      "paramname": "unFlags",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchDescription",
      "paramtype": "const char *"
    },
    {
      "paramname": "unCharMax",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchExistingText",
      "paramtype": "const char *"
    },
    {
      "paramname": "uUserValue",
      "paramtype": "uint64_t"
    }
  ]
}*/
  ShowKeyboardForOverlay(ulOverlayHandle: VROverlayHandle_t, eInputMode: EGamepadTextInputMode, eLineInputMode: EGamepadTextInputLineMode, unFlags: number, pchDescription: string, unCharMax: number, pchExistingText: string, uUserValue: bigint): EVROverlayError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(584));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "i32", "u32", "pointer", "u32", "pointer", "u64"], result: "i32" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unFlagsArray = new Float64Array([unFlags]);
    const unFlagsPtr = Deno.UnsafePointer.of(unFlagsArray);
    const pchDescriptionBuffer = new TextEncoder().encode(pchDescription + '\0');
    const pchDescriptionPtr = Deno.UnsafePointer.of(pchDescriptionBuffer);
    const unCharMaxArray = new Float64Array([unCharMax]);
    const unCharMaxPtr = Deno.UnsafePointer.of(unCharMaxArray);
    const pchExistingTextBuffer = new TextEncoder().encode(pchExistingText + '\0');
    const pchExistingTextPtr = Deno.UnsafePointer.of(pchExistingTextBuffer);
    const uUserValueBuffer = new BigUint64Array([uUserValue]);
    const uUserValuePtr = Deno.UnsafePointer.of(uUserValueBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, eInputMode, eLineInputMode, unFlags, pchDescriptionPtr, unCharMax, pchExistingTextPtr, uUserValue);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "GetKeyboardText",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchText",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "cchText",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetKeyboardText(pchText: string, cchText: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(592));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32"], result: "u32" });
    const pchTextBuffer = new TextEncoder().encode(pchText + '\0');
    const pchTextPtr = Deno.UnsafePointer.of(pchTextBuffer);
    const cchTextArray = new Float64Array([cchText]);
    const cchTextPtr = Deno.UnsafePointer.of(cchTextArray);
    const result = func.call(this.ptr, pchTextPtr, cchText);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "HideKeyboard",
  "returntype": "void"
}*/
  HideKeyboard(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(600));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetKeyboardTransformAbsolute",
  "returntype": "void",
  "params": [
    {
      "paramname": "eTrackingOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pmatTrackingOriginToKeyboardTransform",
      "paramtype": "const struct vr::HmdMatrix34_t *"
    }
  ]
}*/
  SetKeyboardTransformAbsolute(eTrackingOrigin: ETrackingUniverseOrigin, pmatTrackingOriginToKeyboardTransform: HmdMatrix34_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(608));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer"], result: "void" });
    const pmatTrackingOriginToKeyboardTransformBuffer = new ArrayBuffer(48);
    const pmatTrackingOriginToKeyboardTransformView = new DataView(pmatTrackingOriginToKeyboardTransformBuffer);
    for (let i0 = 0; i0 < 3; i0++) {
        for (let i1 = 0; i1 < 4; i1++) {
            pmatTrackingOriginToKeyboardTransformView.setFloat32((i0 * 4 + i1 * 1) * 4, pmatTrackingOriginToKeyboardTransform.m[i0][i1], true);
        }
    }
    const pmatTrackingOriginToKeyboardTransformPtr = Deno.UnsafePointer.of(pmatTrackingOriginToKeyboardTransformBuffer);
    const result = func.call(this.ptr, eTrackingOrigin, pmatTrackingOriginToKeyboardTransformPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "SetKeyboardPositionForOverlay",
  "returntype": "void",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "avoidRect",
      "paramtype": "struct vr::HmdRect2_t"
    }
  ]
}*/
  SetKeyboardPositionForOverlay(ulOverlayHandle: VROverlayHandle_t, avoidRect: HmdRect2_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(616));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", { struct: [{ struct: ["f32","f32"] }, { struct: ["f32","f32"] }] }], result: "void" });
    const avoidRectBuffer = new ArrayBuffer(16);
    const avoidRectView = new DataView(avoidRectBuffer);
    const avoidRectPtr = Deno.UnsafePointer.of(avoidRectBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, avoidRectBuffer);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "ShowMessageOverlay",
  "returntype": "vr::VRMessageOverlayResponse",
  "params": [
    {
      "paramname": "pchText",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchCaption",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchButton0Text",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchButton1Text",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchButton2Text",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchButton3Text",
      "paramtype": "const char *"
    }
  ]
}*/
  ShowMessageOverlay(pchText: string, pchCaption: string, pchButton0Text: string, pchButton1Text: string, pchButton2Text: string, pchButton3Text: string): VRMessageOverlayResponse {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(624));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pchTextBuffer = new TextEncoder().encode(pchText + '\0');
    const pchTextPtr = Deno.UnsafePointer.of(pchTextBuffer);
    const pchCaptionBuffer = new TextEncoder().encode(pchCaption + '\0');
    const pchCaptionPtr = Deno.UnsafePointer.of(pchCaptionBuffer);
    const pchButton0TextBuffer = new TextEncoder().encode(pchButton0Text + '\0');
    const pchButton0TextPtr = Deno.UnsafePointer.of(pchButton0TextBuffer);
    const pchButton1TextBuffer = new TextEncoder().encode(pchButton1Text + '\0');
    const pchButton1TextPtr = Deno.UnsafePointer.of(pchButton1TextBuffer);
    const pchButton2TextBuffer = new TextEncoder().encode(pchButton2Text + '\0');
    const pchButton2TextPtr = Deno.UnsafePointer.of(pchButton2TextBuffer);
    const pchButton3TextBuffer = new TextEncoder().encode(pchButton3Text + '\0');
    const pchButton3TextPtr = Deno.UnsafePointer.of(pchButton3TextBuffer);
    const result = func.call(this.ptr, pchTextPtr, pchCaptionPtr, pchButton0TextPtr, pchButton1TextPtr, pchButton2TextPtr, pchButton3TextPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlay",
  "methodname": "CloseMessageOverlay",
  "returntype": "void"
}*/
  CloseMessageOverlay(): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(632));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "void" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVROverlayView",
  "methodname": "AcquireOverlayView",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pNativeDevice",
      "paramtype": "struct vr::VRNativeDevice_t *"
    },
    {
      "paramname": "pOverlayView",
      "paramtype": "struct vr::VROverlayView_t *"
    },
    {
      "paramname": "unOverlayViewSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVROverlayView {
  constructor(private ptr: Deno.PointerValue) {}

  AcquireOverlayView(ulOverlayHandle: VROverlayHandle_t, pNativeDevice: VRNativeDevice_t, pOverlayView: VROverlayView_t, unOverlayViewSize: number): [EVROverlayError, VRNativeDevice_t, VROverlayView_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "u32"], result: "i32" });
    const pNativeDeviceBuffer = new ArrayBuffer(16);
    const pNativeDeviceView = new DataView(pNativeDeviceBuffer);
    const pNativeDevicePtr = Deno.UnsafePointer.of(pNativeDeviceBuffer);
    const pOverlayViewBuffer = new ArrayBuffer(40);
    const pOverlayViewView = new DataView(pOverlayViewBuffer);
    const pOverlayViewPtr = Deno.UnsafePointer.of(pOverlayViewBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const unOverlayViewSizeArray = new Float64Array([unOverlayViewSize]);
    const unOverlayViewSizePtr = Deno.UnsafePointer.of(unOverlayViewSizeArray);
    const result = func.call(this.ptr, ulOverlayHandle, pNativeDevicePtr, pOverlayViewPtr, unOverlayViewSize);
    return [result, VRNativeDevice_t.fromBuffer(pNativeDeviceBuffer, 0), VROverlayView_t.fromBuffer(pOverlayViewBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlayView",
  "methodname": "ReleaseOverlayView",
  "returntype": "vr::EVROverlayError",
  "params": [
    {
      "paramname": "pOverlayView",
      "paramtype": "struct vr::VROverlayView_t *"
    }
  ]
}*/
  ReleaseOverlayView(pOverlayView: VROverlayView_t): [EVROverlayError, VROverlayView_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pOverlayViewBuffer = new ArrayBuffer(40);
    const pOverlayViewView = new DataView(pOverlayViewBuffer);
    const pOverlayViewPtr = Deno.UnsafePointer.of(pOverlayViewBuffer);
    const result = func.call(this.ptr, pOverlayViewPtr);
    return [result, VROverlayView_t.fromBuffer(pOverlayViewBuffer, 0)];
  }

/*{
  "classname": "vr::IVROverlayView",
  "methodname": "PostOverlayEvent",
  "returntype": "void",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "pvrEvent",
      "paramtype": "const struct vr::VREvent_t *"
    }
  ]
}*/
  PostOverlayEvent(ulOverlayHandle: VROverlayHandle_t, pvrEvent: VREvent_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "void" });
    const pvrEventBuffer = new ArrayBuffer(NaN);
    const pvrEventView = new DataView(pvrEventBuffer);
    const pvrEventPtr = Deno.UnsafePointer.of(pvrEventBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle, pvrEventPtr);
    return result;
  }

/*{
  "classname": "vr::IVROverlayView",
  "methodname": "IsViewingPermitted",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    }
  ]
}*/
  IsViewingPermitted(ulOverlayHandle: VROverlayHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u8" });
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const result = func.call(this.ptr, ulOverlayHandle);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "SetHeadsetViewSize",
  "returntype": "void",
  "params": [
    {
      "paramname": "nWidth",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "nHeight",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVRHeadsetView {
  constructor(private ptr: Deno.PointerValue) {}

  SetHeadsetViewSize(nWidth: number, nHeight: number): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "u32"], result: "void" });
    const nWidthArray = new Float64Array([nWidth]);
    const nWidthPtr = Deno.UnsafePointer.of(nWidthArray);
    const nHeightArray = new Float64Array([nHeight]);
    const nHeightPtr = Deno.UnsafePointer.of(nHeightArray);
    const result = func.call(this.ptr, nWidth, nHeight);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "GetHeadsetViewSize",
  "returntype": "void",
  "params": [
    {
      "paramname": "pnWidth",
      "paramtype": "uint32_t *"
    },
    {
      "paramname": "pnHeight",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetHeadsetViewSize(pnWidth: number, pnHeight: number): [void, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "void" });
    const pnWidthArray = new Float64Array([pnWidth]);
    const pnWidthPtr = Deno.UnsafePointer.of(pnWidthArray);
    const pnHeightArray = new Float64Array([pnHeight]);
    const pnHeightPtr = Deno.UnsafePointer.of(pnHeightArray);
    const result = func.call(this.ptr, pnWidthPtr, pnHeightPtr);
    return [result, pnWidthBuffer, pnHeightBuffer];
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "SetHeadsetViewMode",
  "returntype": "void",
  "params": [
    {
      "paramname": "eHeadsetViewMode",
      "paramtype": "vr::HeadsetViewMode_t"
    }
  ]
}*/
  SetHeadsetViewMode(eHeadsetViewMode: HeadsetViewMode_t): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "void" });
    const result = func.call(this.ptr, eHeadsetViewMode);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "GetHeadsetViewMode",
  "returntype": "vr::HeadsetViewMode_t"
}*/
  GetHeadsetViewMode(): HeadsetViewMode_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "i32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "SetHeadsetViewCropped",
  "returntype": "void",
  "params": [
    {
      "paramname": "bCropped",
      "paramtype": "bool"
    }
  ]
}*/
  SetHeadsetViewCropped(bCropped: boolean): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u8"], result: "void" });
    const bCroppedArray = new Uint8Array([bCropped ? 1 : 0]);
    const bCroppedPtr = Deno.UnsafePointer.of(bCroppedArray);
    const result = func.call(this.ptr, bCropped ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "GetHeadsetViewCropped",
  "returntype": "bool"
}*/
  GetHeadsetViewCropped(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "GetHeadsetViewAspectRatio",
  "returntype": "float"
}*/
  GetHeadsetViewAspectRatio(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "f32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "SetHeadsetViewBlendRange",
  "returntype": "void",
  "params": [
    {
      "paramname": "flStartPct",
      "paramtype": "float"
    },
    {
      "paramname": "flEndPct",
      "paramtype": "float"
    }
  ]
}*/
  SetHeadsetViewBlendRange(flStartPct: number, flEndPct: number): void {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "f32", "f32"], result: "void" });
    const flStartPctArray = new Float64Array([flStartPct]);
    const flStartPctPtr = Deno.UnsafePointer.of(flStartPctArray);
    const flEndPctArray = new Float64Array([flEndPct]);
    const flEndPctPtr = Deno.UnsafePointer.of(flEndPctArray);
    const result = func.call(this.ptr, flStartPct, flEndPct);
    return result;
  }

/*{
  "classname": "vr::IVRHeadsetView",
  "methodname": "GetHeadsetViewBlendRange",
  "returntype": "void",
  "params": [
    {
      "paramname": "pStartPct",
      "paramtype": "float *"
    },
    {
      "paramname": "pEndPct",
      "paramtype": "float *"
    }
  ]
}*/
  GetHeadsetViewBlendRange(pStartPct: number, pEndPct: number): [void, number, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "void" });
    const pStartPctArray = new Float64Array([pStartPct]);
    const pStartPctPtr = Deno.UnsafePointer.of(pStartPctArray);
    const pEndPctArray = new Float64Array([pEndPct]);
    const pEndPctPtr = Deno.UnsafePointer.of(pEndPctArray);
    const result = func.call(this.ptr, pStartPctPtr, pEndPctPtr);
    return [result, pStartPctBuffer, pEndPctBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "LoadRenderModel_Async",
  "returntype": "vr::EVRRenderModelError",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "ppRenderModel",
      "paramtype": "struct vr::RenderModel_t **"
    }
  ]
}*/
}

export class IVRRenderModels {
  constructor(private ptr: Deno.PointerValue) {}

  LoadRenderModel_Async(pchRenderModelName: string, ppRenderModel: RenderModel_t): [EVRRenderModelError, RenderModel_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const ppRenderModelBuffer = new ArrayBuffer(64);
    const ppRenderModelView = new DataView(ppRenderModelBuffer);
    const ppRenderModelPtr = Deno.UnsafePointer.of(ppRenderModelBuffer);
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr, ppRenderModelPtr);
    return [result, RenderModel_t.fromBuffer(ppRenderModelBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "FreeRenderModel",
  "returntype": "void",
  "params": [
    {
      "paramname": "pRenderModel",
      "paramtype": "struct vr::RenderModel_t *"
    }
  ]
}*/
  FreeRenderModel(pRenderModel: RenderModel_t): [void, RenderModel_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pRenderModelBuffer = new ArrayBuffer(64);
    const pRenderModelView = new DataView(pRenderModelBuffer);
    const pRenderModelPtr = Deno.UnsafePointer.of(pRenderModelBuffer);
    const result = func.call(this.ptr, pRenderModelPtr);
    return [result, RenderModel_t.fromBuffer(pRenderModelBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "LoadTexture_Async",
  "returntype": "vr::EVRRenderModelError",
  "params": [
    {
      "paramname": "textureId",
      "paramtype": "vr::TextureID_t"
    },
    {
      "paramname": "ppTexture",
      "paramtype": "struct vr::RenderModel_TextureMap_t **"
    }
  ]
}*/
  LoadTexture_Async(textureId: TextureID_t, ppTexture: RenderModel_TextureMap_t): [EVRRenderModelError, RenderModel_TextureMap_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer"], result: "i32" });
    const ppTextureBuffer = new ArrayBuffer(24);
    const ppTextureView = new DataView(ppTextureBuffer);
    const ppTexturePtr = Deno.UnsafePointer.of(ppTextureBuffer);
    const textureIdArray = new Float64Array([textureId]);
    const textureIdPtr = Deno.UnsafePointer.of(textureIdArray);
    const result = func.call(this.ptr, textureId, ppTexturePtr);
    return [result, RenderModel_TextureMap_t.fromBuffer(ppTextureBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "FreeTexture",
  "returntype": "void",
  "params": [
    {
      "paramname": "pTexture",
      "paramtype": "struct vr::RenderModel_TextureMap_t *"
    }
  ]
}*/
  FreeTexture(pTexture: RenderModel_TextureMap_t): [void, RenderModel_TextureMap_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pTextureBuffer = new ArrayBuffer(24);
    const pTextureView = new DataView(pTextureBuffer);
    const pTexturePtr = Deno.UnsafePointer.of(pTextureBuffer);
    const result = func.call(this.ptr, pTexturePtr);
    return [result, RenderModel_TextureMap_t.fromBuffer(pTextureBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "LoadTextureD3D11_Async",
  "returntype": "vr::EVRRenderModelError",
  "params": [
    {
      "paramname": "textureId",
      "paramtype": "vr::TextureID_t"
    },
    {
      "paramname": "pD3D11Device",
      "paramtype": "void *"
    },
    {
      "paramname": "ppD3D11Texture2D",
      "paramtype": "void **"
    }
  ]
}*/
  LoadTextureD3D11_Async(textureId: TextureID_t, pD3D11Device: Uint8Array, ppD3D11Texture2D: Uint8Array): [EVRRenderModelError, Uint8Array, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer", "pointer"], result: "i32" });
    const textureIdArray = new Float64Array([textureId]);
    const textureIdPtr = Deno.UnsafePointer.of(textureIdArray);
    const pD3D11DevicePtr = Deno.UnsafePointer.of(pD3D11Device);
    const ppD3D11Texture2DPtr = Deno.UnsafePointer.of(ppD3D11Texture2D);
    const result = func.call(this.ptr, textureId, pD3D11DevicePtr, ppD3D11Texture2DPtr);
    return [result, pD3D11DeviceBuffer, ppD3D11Texture2DBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "LoadIntoTextureD3D11_Async",
  "returntype": "vr::EVRRenderModelError",
  "params": [
    {
      "paramname": "textureId",
      "paramtype": "vr::TextureID_t"
    },
    {
      "paramname": "pDstTexture",
      "paramtype": "void *"
    }
  ]
}*/
  LoadIntoTextureD3D11_Async(textureId: TextureID_t, pDstTexture: Uint8Array): [EVRRenderModelError, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32", "pointer"], result: "i32" });
    const textureIdArray = new Float64Array([textureId]);
    const textureIdPtr = Deno.UnsafePointer.of(textureIdArray);
    const pDstTexturePtr = Deno.UnsafePointer.of(pDstTexture);
    const result = func.call(this.ptr, textureId, pDstTexturePtr);
    return [result, pDstTextureBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "FreeTextureD3D11",
  "returntype": "void",
  "params": [
    {
      "paramname": "pD3D11Texture2D",
      "paramtype": "void *"
    }
  ]
}*/
  FreeTextureD3D11(pD3D11Texture2D: Uint8Array): [void, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "void" });
    const pD3D11Texture2DPtr = Deno.UnsafePointer.of(pD3D11Texture2D);
    const result = func.call(this.ptr, pD3D11Texture2DPtr);
    return [result, pD3D11Texture2DBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetRenderModelName",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "unRenderModelIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchRenderModelName",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unRenderModelNameLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetRenderModelName(unRenderModelIndex: number, pchRenderModelName: string, unRenderModelNameLen: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "u32" });
    const unRenderModelIndexArray = new Float64Array([unRenderModelIndex]);
    const unRenderModelIndexPtr = Deno.UnsafePointer.of(unRenderModelIndexArray);
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const unRenderModelNameLenArray = new Float64Array([unRenderModelNameLen]);
    const unRenderModelNameLenPtr = Deno.UnsafePointer.of(unRenderModelNameLenArray);
    const result = func.call(this.ptr, unRenderModelIndex, pchRenderModelNamePtr, unRenderModelNameLen);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetRenderModelCount",
  "returntype": "uint32_t"
}*/
  GetRenderModelCount(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentCount",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    }
  ]
}*/
  GetComponentCount(pchRenderModelName: string): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u32" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentName",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "unComponentIndex",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pchComponentName",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unComponentNameLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetComponentName(pchRenderModelName: string, unComponentIndex: number, pchComponentName: string, unComponentNameLen: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "pointer", "u32"], result: "u32" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const unComponentIndexArray = new Float64Array([unComponentIndex]);
    const unComponentIndexPtr = Deno.UnsafePointer.of(unComponentIndexArray);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const unComponentNameLenArray = new Float64Array([unComponentNameLen]);
    const unComponentNameLenPtr = Deno.UnsafePointer.of(unComponentNameLenArray);
    const result = func.call(this.ptr, pchRenderModelNamePtr, unComponentIndex, pchComponentNamePtr, unComponentNameLen);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentButtonMask",
  "returntype": "uint64_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    }
  ]
}*/
  GetComponentButtonMask(pchRenderModelName: string, pchComponentName: string): bigint {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u64" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentRenderModelName",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentRenderModelName",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unComponentRenderModelNameLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetComponentRenderModelName(pchRenderModelName: string, pchComponentName: string, pchComponentRenderModelName: string, unComponentRenderModelNameLen: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32"], result: "u32" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const pchComponentRenderModelNameBuffer = new TextEncoder().encode(pchComponentRenderModelName + '\0');
    const pchComponentRenderModelNamePtr = Deno.UnsafePointer.of(pchComponentRenderModelNameBuffer);
    const unComponentRenderModelNameLenArray = new Float64Array([unComponentRenderModelNameLen]);
    const unComponentRenderModelNameLenPtr = Deno.UnsafePointer.of(unComponentRenderModelNameLenArray);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr, pchComponentRenderModelNamePtr, unComponentRenderModelNameLen);
    return result;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentStateForDevicePath",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    },
    {
      "paramname": "devicePath",
      "paramtype": "vr::VRInputValueHandle_t"
    },
    {
      "paramname": "pState",
      "paramtype": "const vr::RenderModel_ControllerMode_State_t *"
    },
    {
      "paramname": "pComponentState",
      "paramtype": "vr::RenderModel_ComponentState_t *"
    }
  ]
}*/
  GetComponentStateForDevicePath(pchRenderModelName: string, pchComponentName: string, devicePath: VRInputValueHandle_t, pState: RenderModel_ControllerMode_State_t, pComponentState: RenderModel_ComponentState_t): [boolean, RenderModel_ControllerMode_State_t, RenderModel_ComponentState_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u64", "pointer", "pointer"], result: "u8" });
    const pStateBuffer = new ArrayBuffer(1);
    const pStateView = new DataView(pStateBuffer);
    const pStatePtr = Deno.UnsafePointer.of(pStateBuffer);
    const pComponentStateBuffer = new ArrayBuffer(104);
    const pComponentStateView = new DataView(pComponentStateBuffer);
    const pComponentStatePtr = Deno.UnsafePointer.of(pComponentStateBuffer);
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const devicePathBuffer = new BigUint64Array([devicePath]);
    const devicePathPtr = Deno.UnsafePointer.of(devicePathBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr, devicePath, pStatePtr, pComponentStatePtr);
    return [result, RenderModel_ControllerMode_State_t.fromBuffer(pStateBuffer, 0), RenderModel_ComponentState_t.fromBuffer(pComponentStateBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetComponentState",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pControllerState",
      "paramtype": "const vr::VRControllerState_t *"
    },
    {
      "paramname": "pState",
      "paramtype": "const struct vr::RenderModel_ControllerMode_State_t *"
    },
    {
      "paramname": "pComponentState",
      "paramtype": "struct vr::RenderModel_ComponentState_t *"
    }
  ]
}*/
  GetComponentState(pchRenderModelName: string, pchComponentName: string, pControllerState: VRControllerState_t, pState: RenderModel_ControllerMode_State_t, pComponentState: RenderModel_ComponentState_t): [boolean, VRControllerState_t, RenderModel_ControllerMode_State_t, RenderModel_ComponentState_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"], result: "u8" });
    const pStateBuffer = new ArrayBuffer(1);
    const pStateView = new DataView(pStateBuffer);
    const pStatePtr = Deno.UnsafePointer.of(pStateBuffer);
    const pComponentStateBuffer = new ArrayBuffer(104);
    const pComponentStateView = new DataView(pComponentStateBuffer);
    const pComponentStatePtr = Deno.UnsafePointer.of(pComponentStateBuffer);
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const pControllerStateBuffer = new ArrayBuffer(64);
    const pControllerStateView = new DataView(pControllerStateBuffer);
    const pControllerStatePtr = Deno.UnsafePointer.of(pControllerStateBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr, pControllerStatePtr, pStatePtr, pComponentStatePtr);
    return [result, pControllerStateBuffer, RenderModel_ControllerMode_State_t.fromBuffer(pStateBuffer, 0), RenderModel_ComponentState_t.fromBuffer(pComponentStateBuffer, 0)];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "RenderModelHasComponent",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    }
  ]
}*/
  RenderModelHasComponent(pchRenderModelName: string, pchComponentName: string): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "u8" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetRenderModelThumbnailURL",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchThumbnailURL",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unThumbnailURLLen",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRRenderModelError *"
    }
  ]
}*/
  GetRenderModelThumbnailURL(pchRenderModelName: string, pchThumbnailURL: string, unThumbnailURLLen: number, peError: EVRRenderModelError): [number, EVRRenderModelError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32", "pointer"], result: "u32" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchThumbnailURLBuffer = new TextEncoder().encode(pchThumbnailURL + '\0');
    const pchThumbnailURLPtr = Deno.UnsafePointer.of(pchThumbnailURLBuffer);
    const unThumbnailURLLenArray = new Float64Array([unThumbnailURLLen]);
    const unThumbnailURLLenPtr = Deno.UnsafePointer.of(unThumbnailURLLenArray);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchThumbnailURLPtr, unThumbnailURLLen, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetRenderModelOriginalPath",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchOriginalPath",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unOriginalPathLen",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRRenderModelError *"
    }
  ]
}*/
  GetRenderModelOriginalPath(pchRenderModelName: string, pchOriginalPath: string, unOriginalPathLen: number, peError: EVRRenderModelError): [number, EVRRenderModelError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32", "pointer"], result: "u32" });
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchOriginalPathBuffer = new TextEncoder().encode(pchOriginalPath + '\0');
    const pchOriginalPathPtr = Deno.UnsafePointer.of(pchOriginalPathBuffer);
    const unOriginalPathLenArray = new Float64Array([unOriginalPathLen]);
    const unOriginalPathLenPtr = Deno.UnsafePointer.of(unOriginalPathLenArray);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchOriginalPathPtr, unOriginalPathLen, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRRenderModels",
  "methodname": "GetRenderModelErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "error",
      "paramtype": "vr::EVRRenderModelError"
    }
  ]
}*/
  GetRenderModelErrorNameFromEnum(error: EVRRenderModelError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, error);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRNotifications",
  "methodname": "CreateNotification",
  "returntype": "vr::EVRNotificationError",
  "params": [
    {
      "paramname": "ulOverlayHandle",
      "paramtype": "vr::VROverlayHandle_t"
    },
    {
      "paramname": "ulUserValue",
      "paramtype": "uint64_t"
    },
    {
      "paramname": "type",
      "paramtype": "vr::EVRNotificationType"
    },
    {
      "paramname": "pchText",
      "paramtype": "const char *"
    },
    {
      "paramname": "style",
      "paramtype": "vr::EVRNotificationStyle"
    },
    {
      "paramname": "pImage",
      "paramtype": "const struct vr::NotificationBitmap_t *"
    },
    {
      "paramname": "pNotificationId",
      "paramtype": "vr::VRNotificationId *"
    }
  ]
}*/
}

export class IVRNotifications {
  constructor(private ptr: Deno.PointerValue) {}

  CreateNotification(ulOverlayHandle: VROverlayHandle_t, ulUserValue: bigint, type: EVRNotificationType, pchText: string, style: EVRNotificationStyle, pImage: NotificationBitmap_t, pNotificationId: VRNotificationId): [EVRNotificationError, NotificationBitmap_t, VRNotificationId] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64", "i32", "pointer", "i32", "pointer", "pointer"], result: "i32" });
    const pImageBuffer = new ArrayBuffer(24);
    const pImageView = new DataView(pImageBuffer);
    const pImagePtr = Deno.UnsafePointer.of(pImageBuffer);
    const ulOverlayHandleBuffer = new BigUint64Array([ulOverlayHandle]);
    const ulOverlayHandlePtr = Deno.UnsafePointer.of(ulOverlayHandleBuffer);
    const ulUserValueBuffer = new BigUint64Array([ulUserValue]);
    const ulUserValuePtr = Deno.UnsafePointer.of(ulUserValueBuffer);
    const pchTextBuffer = new TextEncoder().encode(pchText + '\0');
    const pchTextPtr = Deno.UnsafePointer.of(pchTextBuffer);
    const pNotificationIdArray = new Float64Array([pNotificationId]);
    const pNotificationIdPtr = Deno.UnsafePointer.of(pNotificationIdArray);
    const result = func.call(this.ptr, ulOverlayHandle, ulUserValue, type, pchTextPtr, style, pImagePtr, pNotificationIdPtr);
    return [result, NotificationBitmap_t.fromBuffer(pImageBuffer, 0), pNotificationIdBuffer];
  }

/*{
  "classname": "vr::IVRNotifications",
  "methodname": "RemoveNotification",
  "returntype": "vr::EVRNotificationError",
  "params": [
    {
      "paramname": "notificationId",
      "paramtype": "vr::VRNotificationId"
    }
  ]
}*/
  RemoveNotification(notificationId: VRNotificationId): EVRNotificationError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "i32" });
    const notificationIdArray = new Float64Array([notificationId]);
    const notificationIdPtr = Deno.UnsafePointer.of(notificationIdArray);
    const result = func.call(this.ptr, notificationId);
    return result;
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "GetSettingsErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "eError",
      "paramtype": "vr::EVRSettingsError"
    }
  ]
}*/
}

export class IVRSettings {
  constructor(private ptr: Deno.PointerValue) {}

  GetSettingsErrorNameFromEnum(eError: EVRSettingsError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, eError);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "SetBool",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "bValue",
      "paramtype": "bool"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  SetBool(pchSection: string, pchSettingsKey: string, bValue: boolean, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u8", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const bValueArray = new Uint8Array([bValue ? 1 : 0]);
    const bValuePtr = Deno.UnsafePointer.of(bValueArray);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, bValue ? 1 : 0, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "SetInt32",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "nValue",
      "paramtype": "int32_t"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  SetInt32(pchSection: string, pchSettingsKey: string, nValue: number, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "i32", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const nValueArray = new Float64Array([nValue]);
    const nValuePtr = Deno.UnsafePointer.of(nValueArray);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, nValue, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "SetFloat",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "flValue",
      "paramtype": "float"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  SetFloat(pchSection: string, pchSettingsKey: string, flValue: number, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "f32", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const flValueArray = new Float64Array([flValue]);
    const flValuePtr = Deno.UnsafePointer.of(flValueArray);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, flValue, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "SetString",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchValue",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  SetString(pchSection: string, pchSettingsKey: string, pchValue: string, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, pchValuePtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "GetBool",
  "returntype": "bool",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  GetBool(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): [boolean, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "u8" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "GetInt32",
  "returntype": "int32_t",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  GetInt32(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): [number, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "GetFloat",
  "returntype": "float",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  GetFloat(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): [number, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "f32" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "GetString",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unValueLen",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  GetString(pchSection: string, pchSettingsKey: string, pchValue: string, unValueLen: number, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unValueLenArray = new Float64Array([unValueLen]);
    const unValueLenPtr = Deno.UnsafePointer.of(unValueLenArray);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, pchValuePtr, unValueLen, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "RemoveSection",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  RemoveSection(pchSection: string, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const result = func.call(this.ptr, pchSectionPtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRSettings",
  "methodname": "RemoveKeyInSection",
  "returntype": "void",
  "params": [
    {
      "paramname": "pchSection",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSettingsKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "peError",
      "paramtype": "vr::EVRSettingsError *"
    }
  ]
}*/
  RemoveKeyInSection(pchSection: string, pchSettingsKey: string, peError: EVRSettingsError): [void, EVRSettingsError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "void" });
    const pchSectionBuffer = new TextEncoder().encode(pchSection + '\0');
    const pchSectionPtr = Deno.UnsafePointer.of(pchSectionBuffer);
    const pchSettingsKeyBuffer = new TextEncoder().encode(pchSettingsKey + '\0');
    const pchSettingsKeyPtr = Deno.UnsafePointer.of(pchSettingsKeyBuffer);
    const result = func.call(this.ptr, pchSectionPtr, pchSettingsKeyPtr, peErrorPtr);
    return [result, peErrorBuffer];
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "RequestScreenshot",
  "returntype": "vr::EVRScreenshotError",
  "params": [
    {
      "paramname": "pOutScreenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t *"
    },
    {
      "paramname": "type",
      "paramtype": "vr::EVRScreenshotType"
    },
    {
      "paramname": "pchPreviewFilename",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchVRFilename",
      "paramtype": "const char *"
    }
  ]
}*/
}

export class IVRScreenshots {
  constructor(private ptr: Deno.PointerValue) {}

  RequestScreenshot(pOutScreenshotHandle: ScreenshotHandle_t, type: EVRScreenshotType, pchPreviewFilename: string, pchVRFilename: string): [EVRScreenshotError, ScreenshotHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "pointer", "pointer"], result: "i32" });
    const pOutScreenshotHandleArray = new Float64Array([pOutScreenshotHandle]);
    const pOutScreenshotHandlePtr = Deno.UnsafePointer.of(pOutScreenshotHandleArray);
    const pchPreviewFilenameBuffer = new TextEncoder().encode(pchPreviewFilename + '\0');
    const pchPreviewFilenamePtr = Deno.UnsafePointer.of(pchPreviewFilenameBuffer);
    const pchVRFilenameBuffer = new TextEncoder().encode(pchVRFilename + '\0');
    const pchVRFilenamePtr = Deno.UnsafePointer.of(pchVRFilenameBuffer);
    const result = func.call(this.ptr, pOutScreenshotHandlePtr, type, pchPreviewFilenamePtr, pchVRFilenamePtr);
    return [result, pOutScreenshotHandleBuffer];
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "HookScreenshot",
  "returntype": "vr::EVRScreenshotError",
  "params": [
    {
      "paramname": "pSupportedTypes",
      "array_count": "numTypes",
      "paramtype": "const vr::EVRScreenshotType *"
    },
    {
      "paramname": "numTypes",
      "paramtype": "int"
    }
  ]
}*/
  HookScreenshot(pSupportedTypes: EVRScreenshotType[], numTypes: number): EVRScreenshotError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32"], result: "i32" });
    const numTypesArray = new Float64Array([numTypes]);
    const numTypesPtr = Deno.UnsafePointer.of(numTypesArray);
    const result = func.call(this.ptr, pSupportedTypesPtr, numTypes);
    return result;
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "GetScreenshotPropertyType",
  "returntype": "vr::EVRScreenshotType",
  "params": [
    {
      "paramname": "screenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::EVRScreenshotError *"
    }
  ]
}*/
  GetScreenshotPropertyType(screenshotHandle: ScreenshotHandle_t, pError: EVRScreenshotError): [EVRScreenshotType, EVRScreenshotError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer"], result: "i32" });
    const screenshotHandleArray = new Float64Array([screenshotHandle]);
    const screenshotHandlePtr = Deno.UnsafePointer.of(screenshotHandleArray);
    const result = func.call(this.ptr, screenshotHandle, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "GetScreenshotPropertyFilename",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "screenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t"
    },
    {
      "paramname": "filenameType",
      "paramtype": "vr::EVRScreenshotPropertyFilenames"
    },
    {
      "paramname": "pchFilename",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "cchFilename",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pError",
      "paramtype": "vr::EVRScreenshotError *"
    }
  ]
}*/
  GetScreenshotPropertyFilename(screenshotHandle: ScreenshotHandle_t, filenameType: EVRScreenshotPropertyFilenames, pchFilename: string, cchFilename: number, pError: EVRScreenshotError): [number, EVRScreenshotError] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "u32", "pointer"], result: "u32" });
    const screenshotHandleArray = new Float64Array([screenshotHandle]);
    const screenshotHandlePtr = Deno.UnsafePointer.of(screenshotHandleArray);
    const pchFilenameBuffer = new TextEncoder().encode(pchFilename + '\0');
    const pchFilenamePtr = Deno.UnsafePointer.of(pchFilenameBuffer);
    const cchFilenameArray = new Float64Array([cchFilename]);
    const cchFilenamePtr = Deno.UnsafePointer.of(cchFilenameArray);
    const result = func.call(this.ptr, screenshotHandle, filenameType, pchFilenamePtr, cchFilename, pErrorPtr);
    return [result, pErrorBuffer];
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "UpdateScreenshotProgress",
  "returntype": "vr::EVRScreenshotError",
  "params": [
    {
      "paramname": "screenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t"
    },
    {
      "paramname": "flProgress",
      "paramtype": "float"
    }
  ]
}*/
  UpdateScreenshotProgress(screenshotHandle: ScreenshotHandle_t, flProgress: number): EVRScreenshotError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "f32"], result: "i32" });
    const screenshotHandleArray = new Float64Array([screenshotHandle]);
    const screenshotHandlePtr = Deno.UnsafePointer.of(screenshotHandleArray);
    const flProgressArray = new Float64Array([flProgress]);
    const flProgressPtr = Deno.UnsafePointer.of(flProgressArray);
    const result = func.call(this.ptr, screenshotHandle, flProgress);
    return result;
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "TakeStereoScreenshot",
  "returntype": "vr::EVRScreenshotError",
  "params": [
    {
      "paramname": "pOutScreenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t *"
    },
    {
      "paramname": "pchPreviewFilename",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchVRFilename",
      "paramtype": "const char *"
    }
  ]
}*/
  TakeStereoScreenshot(pOutScreenshotHandle: ScreenshotHandle_t, pchPreviewFilename: string, pchVRFilename: string): [EVRScreenshotError, ScreenshotHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer"], result: "i32" });
    const pOutScreenshotHandleArray = new Float64Array([pOutScreenshotHandle]);
    const pOutScreenshotHandlePtr = Deno.UnsafePointer.of(pOutScreenshotHandleArray);
    const pchPreviewFilenameBuffer = new TextEncoder().encode(pchPreviewFilename + '\0');
    const pchPreviewFilenamePtr = Deno.UnsafePointer.of(pchPreviewFilenameBuffer);
    const pchVRFilenameBuffer = new TextEncoder().encode(pchVRFilename + '\0');
    const pchVRFilenamePtr = Deno.UnsafePointer.of(pchVRFilenameBuffer);
    const result = func.call(this.ptr, pOutScreenshotHandlePtr, pchPreviewFilenamePtr, pchVRFilenamePtr);
    return [result, pOutScreenshotHandleBuffer];
  }

/*{
  "classname": "vr::IVRScreenshots",
  "methodname": "SubmitScreenshot",
  "returntype": "vr::EVRScreenshotError",
  "params": [
    {
      "paramname": "screenshotHandle",
      "paramtype": "vr::ScreenshotHandle_t"
    },
    {
      "paramname": "type",
      "paramtype": "vr::EVRScreenshotType"
    },
    {
      "paramname": "pchSourcePreviewFilename",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchSourceVRFilename",
      "paramtype": "const char *"
    }
  ]
}*/
  SubmitScreenshot(screenshotHandle: ScreenshotHandle_t, type: EVRScreenshotType, pchSourcePreviewFilename: string, pchSourceVRFilename: string): EVRScreenshotError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "pointer"], result: "i32" });
    const screenshotHandleArray = new Float64Array([screenshotHandle]);
    const screenshotHandlePtr = Deno.UnsafePointer.of(screenshotHandleArray);
    const pchSourcePreviewFilenameBuffer = new TextEncoder().encode(pchSourcePreviewFilename + '\0');
    const pchSourcePreviewFilenamePtr = Deno.UnsafePointer.of(pchSourcePreviewFilenameBuffer);
    const pchSourceVRFilenameBuffer = new TextEncoder().encode(pchSourceVRFilename + '\0');
    const pchSourceVRFilenamePtr = Deno.UnsafePointer.of(pchSourceVRFilenameBuffer);
    const result = func.call(this.ptr, screenshotHandle, type, pchSourcePreviewFilenamePtr, pchSourceVRFilenamePtr);
    return result;
  }

/*{
  "classname": "vr::IVRResources",
  "methodname": "LoadSharedResource",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchResourceName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchBuffer",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVRResources {
  constructor(private ptr: Deno.PointerValue) {}

  LoadSharedResource(pchResourceName: string, pchBuffer: string, unBufferLen: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32"], result: "u32" });
    const pchResourceNameBuffer = new TextEncoder().encode(pchResourceName + '\0');
    const pchResourceNamePtr = Deno.UnsafePointer.of(pchResourceNameBuffer);
    const pchBufferBuffer = new TextEncoder().encode(pchBuffer + '\0');
    const pchBufferPtr = Deno.UnsafePointer.of(pchBufferBuffer);
    const unBufferLenArray = new Float64Array([unBufferLen]);
    const unBufferLenPtr = Deno.UnsafePointer.of(unBufferLenArray);
    const result = func.call(this.ptr, pchResourceNamePtr, pchBufferPtr, unBufferLen);
    return result;
  }

/*{
  "classname": "vr::IVRResources",
  "methodname": "GetResourceFullPath",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "pchResourceName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchResourceTypeDirectory",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchPathBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferLen",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetResourceFullPath(pchResourceName: string, pchResourceTypeDirectory: string, pchPathBuffer: string, unBufferLen: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32"], result: "u32" });
    const pchResourceNameBuffer = new TextEncoder().encode(pchResourceName + '\0');
    const pchResourceNamePtr = Deno.UnsafePointer.of(pchResourceNameBuffer);
    const pchResourceTypeDirectoryBuffer = new TextEncoder().encode(pchResourceTypeDirectory + '\0');
    const pchResourceTypeDirectoryPtr = Deno.UnsafePointer.of(pchResourceTypeDirectoryBuffer);
    const pchPathBufferBuffer = new TextEncoder().encode(pchPathBuffer + '\0');
    const pchPathBufferPtr = Deno.UnsafePointer.of(pchPathBufferBuffer);
    const unBufferLenArray = new Float64Array([unBufferLen]);
    const unBufferLenPtr = Deno.UnsafePointer.of(unBufferLenArray);
    const result = func.call(this.ptr, pchResourceNamePtr, pchResourceTypeDirectoryPtr, pchPathBufferPtr, unBufferLen);
    return result;
  }

/*{
  "classname": "vr::IVRDriverManager",
  "methodname": "GetDriverCount",
  "returntype": "uint32_t"
}*/
}

export class IVRDriverManager {
  constructor(private ptr: Deno.PointerValue) {}

  GetDriverCount(): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u32" });
    const result = func.call(this.ptr);
    return result;
  }

/*{
  "classname": "vr::IVRDriverManager",
  "methodname": "GetDriverName",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "nDriver",
      "paramtype": "vr::DriverId_t"
    },
    {
      "paramname": "pchValue",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetDriverName(nDriver: DriverId_t, pchValue: string, unBufferSize: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "u32"], result: "u32" });
    const nDriverArray = new Float64Array([nDriver]);
    const nDriverPtr = Deno.UnsafePointer.of(nDriverArray);
    const pchValueBuffer = new TextEncoder().encode(pchValue + '\0');
    const pchValuePtr = Deno.UnsafePointer.of(pchValueBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const result = func.call(this.ptr, nDriver, pchValuePtr, unBufferSize);
    return result;
  }

/*{
  "classname": "vr::IVRDriverManager",
  "methodname": "GetDriverHandle",
  "returntype": "DriverHandle_t",
  "params": [
    {
      "paramname": "pchDriverName",
      "paramtype": "const char *"
    }
  ]
}*/
  GetDriverHandle(pchDriverName: string): DriverHandle_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "u64" });
    const pchDriverNameBuffer = new TextEncoder().encode(pchDriverName + '\0');
    const pchDriverNamePtr = Deno.UnsafePointer.of(pchDriverNameBuffer);
    const result = func.call(this.ptr, pchDriverNamePtr);
    return result;
  }

/*{
  "classname": "vr::IVRDriverManager",
  "methodname": "IsEnabled",
  "returntype": "bool",
  "params": [
    {
      "paramname": "nDriver",
      "paramtype": "vr::DriverId_t"
    }
  ]
}*/
  IsEnabled(nDriver: DriverId_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "u8" });
    const nDriverArray = new Float64Array([nDriver]);
    const nDriverPtr = Deno.UnsafePointer.of(nDriverArray);
    const result = func.call(this.ptr, nDriver);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "SetActionManifestPath",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchActionManifestPath",
      "paramtype": "const char *"
    }
  ]
}*/
}

export class IVRInput {
  constructor(private ptr: Deno.PointerValue) {}

  SetActionManifestPath(pchActionManifestPath: string): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchActionManifestPathBuffer = new TextEncoder().encode(pchActionManifestPath + '\0');
    const pchActionManifestPathPtr = Deno.UnsafePointer.of(pchActionManifestPathBuffer);
    const result = func.call(this.ptr, pchActionManifestPathPtr);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetActionSetHandle",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchActionSetName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pHandle",
      "paramtype": "vr::VRActionSetHandle_t *"
    }
  ]
}*/
  GetActionSetHandle(pchActionSetName: string, pHandle: VRActionSetHandle_t): [EVRInputError, VRActionSetHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchActionSetNameBuffer = new TextEncoder().encode(pchActionSetName + '\0');
    const pchActionSetNamePtr = Deno.UnsafePointer.of(pchActionSetNameBuffer);
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const result = func.call(this.ptr, pchActionSetNamePtr, pHandlePtr);
    return [result, pHandleBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetActionHandle",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchActionName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pHandle",
      "paramtype": "vr::VRActionHandle_t *"
    }
  ]
}*/
  GetActionHandle(pchActionName: string, pHandle: VRActionHandle_t): [EVRInputError, VRActionHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchActionNameBuffer = new TextEncoder().encode(pchActionName + '\0');
    const pchActionNamePtr = Deno.UnsafePointer.of(pchActionNameBuffer);
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const result = func.call(this.ptr, pchActionNamePtr, pHandlePtr);
    return [result, pHandleBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetInputSourceHandle",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchInputSourcePath",
      "paramtype": "const char *"
    },
    {
      "paramname": "pHandle",
      "paramtype": "vr::VRInputValueHandle_t *"
    }
  ]
}*/
  GetInputSourceHandle(pchInputSourcePath: string, pHandle: VRInputValueHandle_t): [EVRInputError, VRInputValueHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchInputSourcePathBuffer = new TextEncoder().encode(pchInputSourcePath + '\0');
    const pchInputSourcePathPtr = Deno.UnsafePointer.of(pchInputSourcePathBuffer);
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const result = func.call(this.ptr, pchInputSourcePathPtr, pHandlePtr);
    return [result, pHandleBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "UpdateActionState",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pSets",
      "array_count": "unSetCount",
      "paramtype": "struct vr::VRActiveActionSet_t *"
    },
    {
      "paramname": "unSizeOfVRSelectedActionSet_t",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unSetCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  UpdateActionState(pSets: VRActiveActionSet_t[], unSizeOfVRSelectedActionSet_t: number, unSetCount: number): [EVRInputError, VRActiveActionSet_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "u32"], result: "i32" });
    const pSetsCount = unSetCount;
    const pSetsBuffer = new ArrayBuffer(32 * pSetsCount);
    const pSetsView = new DataView(pSetsBuffer);
    const pSetsPtr = Deno.UnsafePointer.of(pSetsBuffer);
    const unSizeOfVRSelectedActionSet_tArray = new Float64Array([unSizeOfVRSelectedActionSet_t]);
    const unSizeOfVRSelectedActionSet_tPtr = Deno.UnsafePointer.of(unSizeOfVRSelectedActionSet_tArray);
    const unSetCountArray = new Float64Array([unSetCount]);
    const unSetCountPtr = Deno.UnsafePointer.of(unSetCountArray);
    const result = func.call(this.ptr, pSetsPtr, unSizeOfVRSelectedActionSet_t, unSetCount);
    return [result, VRActiveActionSet_t.fromBuffer(pSetsBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetDigitalActionData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pActionData",
      "paramtype": "struct vr::InputDigitalActionData_t *"
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
  GetDigitalActionData(action: VRActionHandle_t, pActionData: InputDigitalActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): [EVRInputError, InputDigitalActionData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "u64"], result: "i32" });
    const pActionDataBuffer = new ArrayBuffer(24);
    const pActionDataView = new DataView(pActionDataBuffer);
    const pActionDataPtr = Deno.UnsafePointer.of(pActionDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unActionDataSizeArray = new Float64Array([unActionDataSize]);
    const unActionDataSizePtr = Deno.UnsafePointer.of(unActionDataSizeArray);
    const ulRestrictToDeviceBuffer = new BigUint64Array([ulRestrictToDevice]);
    const ulRestrictToDevicePtr = Deno.UnsafePointer.of(ulRestrictToDeviceBuffer);
    const result = func.call(this.ptr, action, pActionDataPtr, unActionDataSize, ulRestrictToDevice);
    return [result, InputDigitalActionData_t.fromBuffer(pActionDataBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetAnalogActionData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pActionData",
      "paramtype": "struct vr::InputAnalogActionData_t *"
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
  GetAnalogActionData(action: VRActionHandle_t, pActionData: InputAnalogActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): [EVRInputError, InputAnalogActionData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "u64"], result: "i32" });
    const pActionDataBuffer = new ArrayBuffer(48);
    const pActionDataView = new DataView(pActionDataBuffer);
    const pActionDataPtr = Deno.UnsafePointer.of(pActionDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unActionDataSizeArray = new Float64Array([unActionDataSize]);
    const unActionDataSizePtr = Deno.UnsafePointer.of(unActionDataSizeArray);
    const ulRestrictToDeviceBuffer = new BigUint64Array([ulRestrictToDevice]);
    const ulRestrictToDevicePtr = Deno.UnsafePointer.of(ulRestrictToDeviceBuffer);
    const result = func.call(this.ptr, action, pActionDataPtr, unActionDataSize, ulRestrictToDevice);
    return [result, InputAnalogActionData_t.fromBuffer(pActionDataBuffer, 0)];
  }

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
  GetPoseActionDataRelativeToNow(action: VRActionHandle_t, eOrigin: ETrackingUniverseOrigin, fPredictedSecondsFromNow: number, pActionData: InputPoseActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): [EVRInputError, InputPoseActionData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "f32", "pointer", "u32", "u64"], result: "i32" });
    const pActionDataBuffer = new ArrayBuffer(104);
    const pActionDataView = new DataView(pActionDataBuffer);
    const pActionDataPtr = Deno.UnsafePointer.of(pActionDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const fPredictedSecondsFromNowArray = new Float64Array([fPredictedSecondsFromNow]);
    const fPredictedSecondsFromNowPtr = Deno.UnsafePointer.of(fPredictedSecondsFromNowArray);
    const unActionDataSizeArray = new Float64Array([unActionDataSize]);
    const unActionDataSizePtr = Deno.UnsafePointer.of(unActionDataSizeArray);
    const ulRestrictToDeviceBuffer = new BigUint64Array([ulRestrictToDevice]);
    const ulRestrictToDevicePtr = Deno.UnsafePointer.of(ulRestrictToDeviceBuffer);
    const result = func.call(this.ptr, action, eOrigin, fPredictedSecondsFromNow, pActionDataPtr, unActionDataSize, ulRestrictToDevice);
    return [result, InputPoseActionData_t.fromBuffer(pActionDataBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetPoseActionDataForNextFrame",
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
  GetPoseActionDataForNextFrame(action: VRActionHandle_t, eOrigin: ETrackingUniverseOrigin, pActionData: InputPoseActionData_t, unActionDataSize: number, ulRestrictToDevice: VRInputValueHandle_t): [EVRInputError, InputPoseActionData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "u32", "u64"], result: "i32" });
    const pActionDataBuffer = new ArrayBuffer(104);
    const pActionDataView = new DataView(pActionDataBuffer);
    const pActionDataPtr = Deno.UnsafePointer.of(pActionDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unActionDataSizeArray = new Float64Array([unActionDataSize]);
    const unActionDataSizePtr = Deno.UnsafePointer.of(unActionDataSizeArray);
    const ulRestrictToDeviceBuffer = new BigUint64Array([ulRestrictToDevice]);
    const ulRestrictToDevicePtr = Deno.UnsafePointer.of(ulRestrictToDeviceBuffer);
    const result = func.call(this.ptr, action, eOrigin, pActionDataPtr, unActionDataSize, ulRestrictToDevice);
    return [result, InputPoseActionData_t.fromBuffer(pActionDataBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalActionData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pActionData",
      "paramtype": "struct vr::InputSkeletalActionData_t *"
    },
    {
      "paramname": "unActionDataSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetSkeletalActionData(action: VRActionHandle_t, pActionData: InputSkeletalActionData_t, unActionDataSize: number): [EVRInputError, InputSkeletalActionData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(72));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pActionDataBuffer = new ArrayBuffer(16);
    const pActionDataView = new DataView(pActionDataBuffer);
    const pActionDataPtr = Deno.UnsafePointer.of(pActionDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unActionDataSizeArray = new Float64Array([unActionDataSize]);
    const unActionDataSizePtr = Deno.UnsafePointer.of(unActionDataSizeArray);
    const result = func.call(this.ptr, action, pActionDataPtr, unActionDataSize);
    return [result, InputSkeletalActionData_t.fromBuffer(pActionDataBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetDominantHand",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "peDominantHand",
      "paramtype": "vr::ETrackedControllerRole *"
    }
  ]
}*/
  GetDominantHand(peDominantHand: ETrackedControllerRole): [EVRInputError, ETrackedControllerRole] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(80));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const result = func.call(this.ptr, peDominantHandPtr);
    return [result, peDominantHandBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "SetDominantHand",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "eDominantHand",
      "paramtype": "vr::ETrackedControllerRole"
    }
  ]
}*/
  SetDominantHand(eDominantHand: ETrackedControllerRole): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(88));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "i32" });
    const result = func.call(this.ptr, eDominantHand);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetBoneCount",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pBoneCount",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetBoneCount(action: VRActionHandle_t, pBoneCount: number): [EVRInputError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(96));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const pBoneCountArray = new Float64Array([pBoneCount]);
    const pBoneCountPtr = Deno.UnsafePointer.of(pBoneCountArray);
    const result = func.call(this.ptr, action, pBoneCountPtr);
    return [result, pBoneCountBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetBoneHierarchy",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pParentIndices",
      "array_count": "unIndexArayCount",
      "paramtype": "vr::BoneIndex_t *"
    },
    {
      "paramname": "unIndexArayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetBoneHierarchy(action: VRActionHandle_t, pParentIndices: BoneIndex_t[], unIndexArayCount: number): [EVRInputError, BoneIndex_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(104));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const pParentIndicesArray = new Float64Array([pParentIndices]);
    const pParentIndicesPtr = Deno.UnsafePointer.of(pParentIndicesArray);
    const unIndexArayCountArray = new Float64Array([unIndexArayCount]);
    const unIndexArayCountPtr = Deno.UnsafePointer.of(unIndexArayCountArray);
    const result = func.call(this.ptr, action, pParentIndicesPtr, unIndexArayCount);
    return [result, pParentIndicesBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetBoneName",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "nBoneIndex",
      "paramtype": "vr::BoneIndex_t"
    },
    {
      "paramname": "pchBoneName",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unNameBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetBoneName(action: VRActionHandle_t, nBoneIndex: BoneIndex_t, pchBoneName: string, unNameBufferSize: number): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(112));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "u32"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const nBoneIndexArray = new Float64Array([nBoneIndex]);
    const nBoneIndexPtr = Deno.UnsafePointer.of(nBoneIndexArray);
    const pchBoneNameBuffer = new TextEncoder().encode(pchBoneName + '\0');
    const pchBoneNamePtr = Deno.UnsafePointer.of(pchBoneNameBuffer);
    const unNameBufferSizeArray = new Float64Array([unNameBufferSize]);
    const unNameBufferSizePtr = Deno.UnsafePointer.of(unNameBufferSizeArray);
    const result = func.call(this.ptr, action, nBoneIndex, pchBoneNamePtr, unNameBufferSize);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalReferenceTransforms",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "eTransformSpace",
      "paramtype": "vr::EVRSkeletalTransformSpace"
    },
    {
      "paramname": "eReferencePose",
      "paramtype": "vr::EVRSkeletalReferencePose"
    },
    {
      "paramname": "pTransformArray",
      "array_count": "unTransformArrayCount",
      "paramtype": "struct vr::VRBoneTransform_t *"
    },
    {
      "paramname": "unTransformArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetSkeletalReferenceTransforms(action: VRActionHandle_t, eTransformSpace: EVRSkeletalTransformSpace, eReferencePose: EVRSkeletalReferencePose, pTransformArray: VRBoneTransform_t[], unTransformArrayCount: number): [EVRInputError, VRBoneTransform_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(120));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "i32", "pointer", "u32"], result: "i32" });
    const pTransformArrayCount = unTransformArrayCount;
    const pTransformArrayBuffer = new ArrayBuffer(32 * pTransformArrayCount);
    const pTransformArrayView = new DataView(pTransformArrayBuffer);
    const pTransformArrayPtr = Deno.UnsafePointer.of(pTransformArrayBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unTransformArrayCountArray = new Float64Array([unTransformArrayCount]);
    const unTransformArrayCountPtr = Deno.UnsafePointer.of(unTransformArrayCountArray);
    const result = func.call(this.ptr, action, eTransformSpace, eReferencePose, pTransformArrayPtr, unTransformArrayCount);
    return [result, VRBoneTransform_t.fromBuffer(pTransformArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalTrackingLevel",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pSkeletalTrackingLevel",
      "paramtype": "vr::EVRSkeletalTrackingLevel *"
    }
  ]
}*/
  GetSkeletalTrackingLevel(action: VRActionHandle_t, pSkeletalTrackingLevel: EVRSkeletalTrackingLevel): [EVRInputError, EVRSkeletalTrackingLevel] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(128));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const result = func.call(this.ptr, action, pSkeletalTrackingLevelPtr);
    return [result, pSkeletalTrackingLevelBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalBoneData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "eTransformSpace",
      "paramtype": "vr::EVRSkeletalTransformSpace"
    },
    {
      "paramname": "eMotionRange",
      "paramtype": "vr::EVRSkeletalMotionRange"
    },
    {
      "paramname": "pTransformArray",
      "array_count": "unTransformArrayCount",
      "paramtype": "struct vr::VRBoneTransform_t *"
    },
    {
      "paramname": "unTransformArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetSkeletalBoneData(action: VRActionHandle_t, eTransformSpace: EVRSkeletalTransformSpace, eMotionRange: EVRSkeletalMotionRange, pTransformArray: VRBoneTransform_t[], unTransformArrayCount: number): [EVRInputError, VRBoneTransform_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(136));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "i32", "pointer", "u32"], result: "i32" });
    const pTransformArrayCount = unTransformArrayCount;
    const pTransformArrayBuffer = new ArrayBuffer(32 * pTransformArrayCount);
    const pTransformArrayView = new DataView(pTransformArrayBuffer);
    const pTransformArrayPtr = Deno.UnsafePointer.of(pTransformArrayBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unTransformArrayCountArray = new Float64Array([unTransformArrayCount]);
    const unTransformArrayCountPtr = Deno.UnsafePointer.of(unTransformArrayCountArray);
    const result = func.call(this.ptr, action, eTransformSpace, eMotionRange, pTransformArrayPtr, unTransformArrayCount);
    return [result, VRBoneTransform_t.fromBuffer(pTransformArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalSummaryData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "eSummaryType",
      "paramtype": "vr::EVRSummaryType"
    },
    {
      "paramname": "pSkeletalSummaryData",
      "paramtype": "struct vr::VRSkeletalSummaryData_t *"
    }
  ]
}*/
  GetSkeletalSummaryData(action: VRActionHandle_t, eSummaryType: EVRSummaryType, pSkeletalSummaryData: VRSkeletalSummaryData_t): [EVRInputError, VRSkeletalSummaryData_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(144));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer"], result: "i32" });
    const pSkeletalSummaryDataBuffer = new ArrayBuffer(36);
    const pSkeletalSummaryDataView = new DataView(pSkeletalSummaryDataBuffer);
    for (let i0 = 0; i0 < 5; i0++) {
        pSkeletalSummaryDataView.setFloat32((i0 * 1) * 4, pSkeletalSummaryData.flFingerCurl[i0], true);
    }
    for (let i0 = 0; i0 < 4; i0++) {
        pSkeletalSummaryDataView.setFloat32((i0 * 1) * 4, pSkeletalSummaryData.flFingerSplay[i0], true);
    }
    const pSkeletalSummaryDataPtr = Deno.UnsafePointer.of(pSkeletalSummaryDataBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const result = func.call(this.ptr, action, eSummaryType, pSkeletalSummaryDataPtr);
    return [result, VRSkeletalSummaryData_t.fromBuffer(pSkeletalSummaryDataBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetSkeletalBoneDataCompressed",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "eMotionRange",
      "paramtype": "vr::EVRSkeletalMotionRange"
    },
    {
      "paramname": "pvCompressedData",
      "out_buffer_count": "unCompressedSize",
      "paramtype": "void *"
    },
    {
      "paramname": "unCompressedSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "punRequiredCompressedSize",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetSkeletalBoneDataCompressed(action: VRActionHandle_t, eMotionRange: EVRSkeletalMotionRange, pvCompressedData: Uint8Array, unCompressedSize: number, punRequiredCompressedSize: number): [EVRInputError, Uint8Array, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(152));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "i32", "pointer", "u32", "pointer"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const pvCompressedDataPtr = Deno.UnsafePointer.of(pvCompressedData);
    const unCompressedSizeArray = new Float64Array([unCompressedSize]);
    const unCompressedSizePtr = Deno.UnsafePointer.of(unCompressedSizeArray);
    const punRequiredCompressedSizeArray = new Float64Array([punRequiredCompressedSize]);
    const punRequiredCompressedSizePtr = Deno.UnsafePointer.of(punRequiredCompressedSizeArray);
    const result = func.call(this.ptr, action, eMotionRange, pvCompressedDataPtr, unCompressedSize, punRequiredCompressedSizePtr);
    return [result, pvCompressedDataBuffer, punRequiredCompressedSizeBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "DecompressSkeletalBoneData",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pvCompressedBuffer",
      "paramtype": "const void *"
    },
    {
      "paramname": "unCompressedBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "eTransformSpace",
      "paramtype": "vr::EVRSkeletalTransformSpace"
    },
    {
      "paramname": "pTransformArray",
      "array_count": "unTransformArrayCount",
      "paramtype": "struct vr::VRBoneTransform_t *"
    },
    {
      "paramname": "unTransformArrayCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  DecompressSkeletalBoneData(pvCompressedBuffer: Uint8Array, unCompressedBufferSize: number, eTransformSpace: EVRSkeletalTransformSpace, pTransformArray: VRBoneTransform_t[], unTransformArrayCount: number): [EVRInputError, Uint8Array, VRBoneTransform_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(160));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "i32", "pointer", "u32"], result: "i32" });
    const pTransformArrayCount = unTransformArrayCount;
    const pTransformArrayBuffer = new ArrayBuffer(32 * pTransformArrayCount);
    const pTransformArrayView = new DataView(pTransformArrayBuffer);
    const pTransformArrayPtr = Deno.UnsafePointer.of(pTransformArrayBuffer);
    const pvCompressedBufferPtr = Deno.UnsafePointer.of(pvCompressedBuffer);
    const unCompressedBufferSizeArray = new Float64Array([unCompressedBufferSize]);
    const unCompressedBufferSizePtr = Deno.UnsafePointer.of(unCompressedBufferSizeArray);
    const unTransformArrayCountArray = new Float64Array([unTransformArrayCount]);
    const unTransformArrayCountPtr = Deno.UnsafePointer.of(unTransformArrayCountArray);
    const result = func.call(this.ptr, pvCompressedBufferPtr, unCompressedBufferSize, eTransformSpace, pTransformArrayPtr, unTransformArrayCount);
    return [result, pvCompressedBufferBuffer, VRBoneTransform_t.fromBuffer(pTransformArrayBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "TriggerHapticVibrationAction",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "fStartSecondsFromNow",
      "paramtype": "float"
    },
    {
      "paramname": "fDurationSeconds",
      "paramtype": "float"
    },
    {
      "paramname": "fFrequency",
      "paramtype": "float"
    },
    {
      "paramname": "fAmplitude",
      "paramtype": "float"
    },
    {
      "paramname": "ulRestrictToDevice",
      "paramtype": "vr::VRInputValueHandle_t"
    }
  ]
}*/
  TriggerHapticVibrationAction(action: VRActionHandle_t, fStartSecondsFromNow: number, fDurationSeconds: number, fFrequency: number, fAmplitude: number, ulRestrictToDevice: VRInputValueHandle_t): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(168));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "f32", "f32", "f32", "f32", "u64"], result: "i32" });
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const fStartSecondsFromNowArray = new Float64Array([fStartSecondsFromNow]);
    const fStartSecondsFromNowPtr = Deno.UnsafePointer.of(fStartSecondsFromNowArray);
    const fDurationSecondsArray = new Float64Array([fDurationSeconds]);
    const fDurationSecondsPtr = Deno.UnsafePointer.of(fDurationSecondsArray);
    const fFrequencyArray = new Float64Array([fFrequency]);
    const fFrequencyPtr = Deno.UnsafePointer.of(fFrequencyArray);
    const fAmplitudeArray = new Float64Array([fAmplitude]);
    const fAmplitudePtr = Deno.UnsafePointer.of(fAmplitudeArray);
    const ulRestrictToDeviceBuffer = new BigUint64Array([ulRestrictToDevice]);
    const ulRestrictToDevicePtr = Deno.UnsafePointer.of(ulRestrictToDeviceBuffer);
    const result = func.call(this.ptr, action, fStartSecondsFromNow, fDurationSeconds, fFrequency, fAmplitude, ulRestrictToDevice);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetActionOrigins",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "actionSetHandle",
      "paramtype": "vr::VRActionSetHandle_t"
    },
    {
      "paramname": "digitalActionHandle",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "originsOut",
      "array_count": "originOutCount",
      "paramtype": "vr::VRInputValueHandle_t *"
    },
    {
      "paramname": "originOutCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetActionOrigins(actionSetHandle: VRActionSetHandle_t, digitalActionHandle: VRActionHandle_t, originsOut: VRInputValueHandle_t[], originOutCount: number): [EVRInputError, VRInputValueHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(176));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64", "pointer", "u32"], result: "i32" });
    const actionSetHandleBuffer = new BigUint64Array([actionSetHandle]);
    const actionSetHandlePtr = Deno.UnsafePointer.of(actionSetHandleBuffer);
    const digitalActionHandleBuffer = new BigUint64Array([digitalActionHandle]);
    const digitalActionHandlePtr = Deno.UnsafePointer.of(digitalActionHandleBuffer);
    const originsOutBuffer = new BigUint64Array([originsOut]);
    const originsOutPtr = Deno.UnsafePointer.of(originsOutBuffer);
    const originOutCountArray = new Float64Array([originOutCount]);
    const originOutCountPtr = Deno.UnsafePointer.of(originOutCountArray);
    const result = func.call(this.ptr, actionSetHandle, digitalActionHandle, originsOutPtr, originOutCount);
    return [result, originsOutBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetOriginLocalizedName",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "origin",
      "paramtype": "vr::VRInputValueHandle_t"
    },
    {
      "paramname": "pchNameArray",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unNameArraySize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unStringSectionsToInclude",
      "paramtype": "int32_t"
    }
  ]
}*/
  GetOriginLocalizedName(origin: VRInputValueHandle_t, pchNameArray: string, unNameArraySize: number, unStringSectionsToInclude: number): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(184));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "i32"], result: "i32" });
    const originBuffer = new BigUint64Array([origin]);
    const originPtr = Deno.UnsafePointer.of(originBuffer);
    const pchNameArrayBuffer = new TextEncoder().encode(pchNameArray + '\0');
    const pchNameArrayPtr = Deno.UnsafePointer.of(pchNameArrayBuffer);
    const unNameArraySizeArray = new Float64Array([unNameArraySize]);
    const unNameArraySizePtr = Deno.UnsafePointer.of(unNameArraySizeArray);
    const unStringSectionsToIncludeArray = new Float64Array([unStringSectionsToInclude]);
    const unStringSectionsToIncludePtr = Deno.UnsafePointer.of(unStringSectionsToIncludeArray);
    const result = func.call(this.ptr, origin, pchNameArrayPtr, unNameArraySize, unStringSectionsToInclude);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetOriginTrackedDeviceInfo",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "origin",
      "paramtype": "vr::VRInputValueHandle_t"
    },
    {
      "paramname": "pOriginInfo",
      "paramtype": "struct vr::InputOriginInfo_t *"
    },
    {
      "paramname": "unOriginInfoSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetOriginTrackedDeviceInfo(origin: VRInputValueHandle_t, pOriginInfo: InputOriginInfo_t, unOriginInfoSize: number): [EVRInputError, InputOriginInfo_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(192));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pOriginInfoBuffer = new ArrayBuffer(144);
    const pOriginInfoView = new DataView(pOriginInfoBuffer);
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchRenderModelComponentName[i0], true);
    }
    const pOriginInfoPtr = Deno.UnsafePointer.of(pOriginInfoBuffer);
    const originBuffer = new BigUint64Array([origin]);
    const originPtr = Deno.UnsafePointer.of(originBuffer);
    const unOriginInfoSizeArray = new Float64Array([unOriginInfoSize]);
    const unOriginInfoSizePtr = Deno.UnsafePointer.of(unOriginInfoSizeArray);
    const result = func.call(this.ptr, origin, pOriginInfoPtr, unOriginInfoSize);
    return [result, InputOriginInfo_t.fromBuffer(pOriginInfoBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetActionBindingInfo",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "action",
      "paramtype": "vr::VRActionHandle_t"
    },
    {
      "paramname": "pOriginInfo",
      "array_count": "unBindingInfoCount",
      "paramtype": "struct vr::InputBindingInfo_t *"
    },
    {
      "paramname": "unBindingInfoSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unBindingInfoCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "punReturnedBindingInfoCount",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetActionBindingInfo(action: VRActionHandle_t, pOriginInfo: InputBindingInfo_t[], unBindingInfoSize: number, unBindingInfoCount: number, punReturnedBindingInfoCount: number): [EVRInputError, InputBindingInfo_t, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(200));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "u32", "pointer"], result: "i32" });
    const pOriginInfoCount = unBindingInfoCount;
    const pOriginInfoBuffer = new ArrayBuffer(544 * pOriginInfoCount);
    const pOriginInfoView = new DataView(pOriginInfoBuffer);
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchDevicePathName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchInputPathName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchModeName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchSlotName[i0], true);
    }
    for (let i0 = 0; i0 < 32; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchInputSourceType[i0], true);
    }
    const pOriginInfoPtr = Deno.UnsafePointer.of(pOriginInfoBuffer);
    const actionBuffer = new BigUint64Array([action]);
    const actionPtr = Deno.UnsafePointer.of(actionBuffer);
    const unBindingInfoSizeArray = new Float64Array([unBindingInfoSize]);
    const unBindingInfoSizePtr = Deno.UnsafePointer.of(unBindingInfoSizeArray);
    const unBindingInfoCountArray = new Float64Array([unBindingInfoCount]);
    const unBindingInfoCountPtr = Deno.UnsafePointer.of(unBindingInfoCountArray);
    const punReturnedBindingInfoCountArray = new Float64Array([punReturnedBindingInfoCount]);
    const punReturnedBindingInfoCountPtr = Deno.UnsafePointer.of(punReturnedBindingInfoCountArray);
    const result = func.call(this.ptr, action, pOriginInfoPtr, unBindingInfoSize, unBindingInfoCount, punReturnedBindingInfoCountPtr);
    return [result, InputBindingInfo_t.fromBuffer(pOriginInfoBuffer, 0), punReturnedBindingInfoCountBuffer];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "ShowActionOrigins",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "actionSetHandle",
      "paramtype": "vr::VRActionSetHandle_t"
    },
    {
      "paramname": "ulActionHandle",
      "paramtype": "vr::VRActionHandle_t"
    }
  ]
}*/
  ShowActionOrigins(actionSetHandle: VRActionSetHandle_t, ulActionHandle: VRActionHandle_t): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(208));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64"], result: "i32" });
    const actionSetHandleBuffer = new BigUint64Array([actionSetHandle]);
    const actionSetHandlePtr = Deno.UnsafePointer.of(actionSetHandleBuffer);
    const ulActionHandleBuffer = new BigUint64Array([ulActionHandle]);
    const ulActionHandlePtr = Deno.UnsafePointer.of(ulActionHandleBuffer);
    const result = func.call(this.ptr, actionSetHandle, ulActionHandle);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "ShowBindingsForActionSet",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pSets",
      "array_count": "unSetCount",
      "paramtype": "struct vr::VRActiveActionSet_t *"
    },
    {
      "paramname": "unSizeOfVRSelectedActionSet_t",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unSetCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "originToHighlight",
      "paramtype": "vr::VRInputValueHandle_t"
    }
  ]
}*/
  ShowBindingsForActionSet(pSets: VRActiveActionSet_t[], unSizeOfVRSelectedActionSet_t: number, unSetCount: number, originToHighlight: VRInputValueHandle_t): [EVRInputError, VRActiveActionSet_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(216));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u32", "u32", "u64"], result: "i32" });
    const pSetsCount = unSetCount;
    const pSetsBuffer = new ArrayBuffer(32 * pSetsCount);
    const pSetsView = new DataView(pSetsBuffer);
    const pSetsPtr = Deno.UnsafePointer.of(pSetsBuffer);
    const unSizeOfVRSelectedActionSet_tArray = new Float64Array([unSizeOfVRSelectedActionSet_t]);
    const unSizeOfVRSelectedActionSet_tPtr = Deno.UnsafePointer.of(unSizeOfVRSelectedActionSet_tArray);
    const unSetCountArray = new Float64Array([unSetCount]);
    const unSetCountPtr = Deno.UnsafePointer.of(unSetCountArray);
    const originToHighlightBuffer = new BigUint64Array([originToHighlight]);
    const originToHighlightPtr = Deno.UnsafePointer.of(originToHighlightBuffer);
    const result = func.call(this.ptr, pSetsPtr, unSizeOfVRSelectedActionSet_t, unSetCount, originToHighlight);
    return [result, VRActiveActionSet_t.fromBuffer(pSetsBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetComponentStateForBinding",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchRenderModelName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchComponentName",
      "paramtype": "const char *"
    },
    {
      "paramname": "pOriginInfo",
      "paramtype": "const struct vr::InputBindingInfo_t *"
    },
    {
      "paramname": "unBindingInfoSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unBindingInfoCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pComponentState",
      "paramtype": "vr::RenderModel_ComponentState_t *"
    }
  ]
}*/
  GetComponentStateForBinding(pchRenderModelName: string, pchComponentName: string, pOriginInfo: InputBindingInfo_t, unBindingInfoSize: number, unBindingInfoCount: number, pComponentState: RenderModel_ComponentState_t): [EVRInputError, InputBindingInfo_t, RenderModel_ComponentState_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(224));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "pointer", "u32", "u32", "pointer"], result: "i32" });
    const pOriginInfoBuffer = new ArrayBuffer(544);
    const pOriginInfoView = new DataView(pOriginInfoBuffer);
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchDevicePathName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchInputPathName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchModeName[i0], true);
    }
    for (let i0 = 0; i0 < 128; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchSlotName[i0], true);
    }
    for (let i0 = 0; i0 < 32; i0++) {
        pOriginInfoView.setInt8((i0 * 1) * 1, pOriginInfo.rchInputSourceType[i0], true);
    }
    const pOriginInfoPtr = Deno.UnsafePointer.of(pOriginInfoBuffer);
    const pComponentStateBuffer = new ArrayBuffer(104);
    const pComponentStateView = new DataView(pComponentStateBuffer);
    const pComponentStatePtr = Deno.UnsafePointer.of(pComponentStateBuffer);
    const pchRenderModelNameBuffer = new TextEncoder().encode(pchRenderModelName + '\0');
    const pchRenderModelNamePtr = Deno.UnsafePointer.of(pchRenderModelNameBuffer);
    const pchComponentNameBuffer = new TextEncoder().encode(pchComponentName + '\0');
    const pchComponentNamePtr = Deno.UnsafePointer.of(pchComponentNameBuffer);
    const unBindingInfoSizeArray = new Float64Array([unBindingInfoSize]);
    const unBindingInfoSizePtr = Deno.UnsafePointer.of(unBindingInfoSizeArray);
    const unBindingInfoCountArray = new Float64Array([unBindingInfoCount]);
    const unBindingInfoCountPtr = Deno.UnsafePointer.of(unBindingInfoCountArray);
    const result = func.call(this.ptr, pchRenderModelNamePtr, pchComponentNamePtr, pOriginInfoPtr, unBindingInfoSize, unBindingInfoCount, pComponentStatePtr);
    return [result, InputBindingInfo_t.fromBuffer(pOriginInfoBuffer, 0), RenderModel_ComponentState_t.fromBuffer(pComponentStateBuffer, 0)];
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "IsUsingLegacyInput",
  "returntype": "bool"
}*/
  IsUsingLegacyInput(): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(232));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer"], result: "u8" });
    const result = func.call(this.ptr);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "OpenBindingUI",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "pchAppKey",
      "paramtype": "const char *"
    },
    {
      "paramname": "ulActionSetHandle",
      "paramtype": "vr::VRActionSetHandle_t"
    },
    {
      "paramname": "ulDeviceHandle",
      "paramtype": "vr::VRInputValueHandle_t"
    },
    {
      "paramname": "bShowOnDesktop",
      "paramtype": "bool"
    }
  ]
}*/
  OpenBindingUI(pchAppKey: string, ulActionSetHandle: VRActionSetHandle_t, ulDeviceHandle: VRInputValueHandle_t, bShowOnDesktop: boolean): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(240));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "u64", "u64", "u8"], result: "i32" });
    const pchAppKeyBuffer = new TextEncoder().encode(pchAppKey + '\0');
    const pchAppKeyPtr = Deno.UnsafePointer.of(pchAppKeyBuffer);
    const ulActionSetHandleBuffer = new BigUint64Array([ulActionSetHandle]);
    const ulActionSetHandlePtr = Deno.UnsafePointer.of(ulActionSetHandleBuffer);
    const ulDeviceHandleBuffer = new BigUint64Array([ulDeviceHandle]);
    const ulDeviceHandlePtr = Deno.UnsafePointer.of(ulDeviceHandleBuffer);
    const bShowOnDesktopArray = new Uint8Array([bShowOnDesktop ? 1 : 0]);
    const bShowOnDesktopPtr = Deno.UnsafePointer.of(bShowOnDesktopArray);
    const result = func.call(this.ptr, pchAppKeyPtr, ulActionSetHandle, ulDeviceHandle, bShowOnDesktop ? 1 : 0);
    return result;
  }

/*{
  "classname": "vr::IVRInput",
  "methodname": "GetBindingVariant",
  "returntype": "vr::EVRInputError",
  "params": [
    {
      "paramname": "ulDevicePath",
      "paramtype": "vr::VRInputValueHandle_t"
    },
    {
      "paramname": "pchVariantArray",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unVariantArraySize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  GetBindingVariant(ulDevicePath: VRInputValueHandle_t, pchVariantArray: string, unVariantArraySize: number): EVRInputError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(248));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const ulDevicePathBuffer = new BigUint64Array([ulDevicePath]);
    const ulDevicePathPtr = Deno.UnsafePointer.of(ulDevicePathBuffer);
    const pchVariantArrayBuffer = new TextEncoder().encode(pchVariantArray + '\0');
    const pchVariantArrayPtr = Deno.UnsafePointer.of(pchVariantArrayBuffer);
    const unVariantArraySizeArray = new Float64Array([unVariantArraySize]);
    const unVariantArraySizePtr = Deno.UnsafePointer.of(unVariantArraySizeArray);
    const result = func.call(this.ptr, ulDevicePath, pchVariantArrayPtr, unVariantArraySize);
    return result;
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "Open",
  "returntype": "vr::EIOBufferError",
  "params": [
    {
      "paramname": "pchPath",
      "paramtype": "const char *"
    },
    {
      "paramname": "mode",
      "paramtype": "vr::EIOBufferMode"
    },
    {
      "paramname": "unElementSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unElements",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "pulBuffer",
      "paramtype": "vr::IOBufferHandle_t *"
    }
  ]
}*/
}

export class IVRIOBuffer {
  constructor(private ptr: Deno.PointerValue) {}

  Open(pchPath: string, mode: EIOBufferMode, unElementSize: number, unElements: number, pulBuffer: IOBufferHandle_t): [EIOBufferError, IOBufferHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "i32", "u32", "u32", "pointer"], result: "i32" });
    const pchPathBuffer = new TextEncoder().encode(pchPath + '\0');
    const pchPathPtr = Deno.UnsafePointer.of(pchPathBuffer);
    const unElementSizeArray = new Float64Array([unElementSize]);
    const unElementSizePtr = Deno.UnsafePointer.of(unElementSizeArray);
    const unElementsArray = new Float64Array([unElements]);
    const unElementsPtr = Deno.UnsafePointer.of(unElementsArray);
    const pulBufferBuffer = new BigUint64Array([pulBuffer]);
    const pulBufferPtr = Deno.UnsafePointer.of(pulBufferBuffer);
    const result = func.call(this.ptr, pchPathPtr, mode, unElementSize, unElements, pulBufferPtr);
    return [result, pulBufferBuffer];
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "Close",
  "returntype": "vr::EIOBufferError",
  "params": [
    {
      "paramname": "ulBuffer",
      "paramtype": "vr::IOBufferHandle_t"
    }
  ]
}*/
  Close(ulBuffer: IOBufferHandle_t): EIOBufferError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulBufferBuffer = new BigUint64Array([ulBuffer]);
    const ulBufferPtr = Deno.UnsafePointer.of(ulBufferBuffer);
    const result = func.call(this.ptr, ulBuffer);
    return result;
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "Read",
  "returntype": "vr::EIOBufferError",
  "params": [
    {
      "paramname": "ulBuffer",
      "paramtype": "vr::IOBufferHandle_t"
    },
    {
      "paramname": "pDst",
      "paramtype": "void *"
    },
    {
      "paramname": "unBytes",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "punRead",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  Read(ulBuffer: IOBufferHandle_t, pDst: Uint8Array, unBytes: number, punRead: number): [EIOBufferError, Uint8Array, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "pointer"], result: "i32" });
    const ulBufferBuffer = new BigUint64Array([ulBuffer]);
    const ulBufferPtr = Deno.UnsafePointer.of(ulBufferBuffer);
    const pDstPtr = Deno.UnsafePointer.of(pDst);
    const unBytesArray = new Float64Array([unBytes]);
    const unBytesPtr = Deno.UnsafePointer.of(unBytesArray);
    const punReadArray = new Float64Array([punRead]);
    const punReadPtr = Deno.UnsafePointer.of(punReadArray);
    const result = func.call(this.ptr, ulBuffer, pDstPtr, unBytes, punReadPtr);
    return [result, pDstBuffer, punReadBuffer];
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "Write",
  "returntype": "vr::EIOBufferError",
  "params": [
    {
      "paramname": "ulBuffer",
      "paramtype": "vr::IOBufferHandle_t"
    },
    {
      "paramname": "pSrc",
      "paramtype": "void *"
    },
    {
      "paramname": "unBytes",
      "paramtype": "uint32_t"
    }
  ]
}*/
  Write(ulBuffer: IOBufferHandle_t, pSrc: Uint8Array, unBytes: number): [EIOBufferError, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const ulBufferBuffer = new BigUint64Array([ulBuffer]);
    const ulBufferPtr = Deno.UnsafePointer.of(ulBufferBuffer);
    const pSrcPtr = Deno.UnsafePointer.of(pSrc);
    const unBytesArray = new Float64Array([unBytes]);
    const unBytesPtr = Deno.UnsafePointer.of(unBytesArray);
    const result = func.call(this.ptr, ulBuffer, pSrcPtr, unBytes);
    return [result, pSrcBuffer];
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "PropertyContainer",
  "returntype": "vr::PropertyContainerHandle_t",
  "params": [
    {
      "paramname": "ulBuffer",
      "paramtype": "vr::IOBufferHandle_t"
    }
  ]
}*/
  PropertyContainer(ulBuffer: IOBufferHandle_t): PropertyContainerHandle_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u64" });
    const ulBufferBuffer = new BigUint64Array([ulBuffer]);
    const ulBufferPtr = Deno.UnsafePointer.of(ulBufferBuffer);
    const result = func.call(this.ptr, ulBuffer);
    return result;
  }

/*{
  "classname": "vr::IVRIOBuffer",
  "methodname": "HasReaders",
  "returntype": "bool",
  "params": [
    {
      "paramname": "ulBuffer",
      "paramtype": "vr::IOBufferHandle_t"
    }
  ]
}*/
  HasReaders(ulBuffer: IOBufferHandle_t): boolean {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "u8" });
    const ulBufferBuffer = new BigUint64Array([ulBuffer]);
    const ulBufferPtr = Deno.UnsafePointer.of(ulBufferBuffer);
    const result = func.call(this.ptr, ulBuffer);
    return result !== 0;
  }

/*{
  "classname": "vr::IVRSpatialAnchors",
  "methodname": "CreateSpatialAnchorFromDescriptor",
  "returntype": "vr::EVRSpatialAnchorError",
  "params": [
    {
      "paramname": "pchDescriptor",
      "paramtype": "const char *"
    },
    {
      "paramname": "pHandleOut",
      "paramtype": "vr::SpatialAnchorHandle_t *"
    }
  ]
}*/
}

export class IVRSpatialAnchors {
  constructor(private ptr: Deno.PointerValue) {}

  CreateSpatialAnchorFromDescriptor(pchDescriptor: string, pHandleOut: SpatialAnchorHandle_t): [EVRSpatialAnchorError, SpatialAnchorHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pchDescriptorBuffer = new TextEncoder().encode(pchDescriptor + '\0');
    const pchDescriptorPtr = Deno.UnsafePointer.of(pchDescriptorBuffer);
    const pHandleOutArray = new Float64Array([pHandleOut]);
    const pHandleOutPtr = Deno.UnsafePointer.of(pHandleOutArray);
    const result = func.call(this.ptr, pchDescriptorPtr, pHandleOutPtr);
    return [result, pHandleOutBuffer];
  }

/*{
  "classname": "vr::IVRSpatialAnchors",
  "methodname": "CreateSpatialAnchorFromPose",
  "returntype": "vr::EVRSpatialAnchorError",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pPose",
      "paramtype": "struct vr::SpatialAnchorPose_t *"
    },
    {
      "paramname": "pHandleOut",
      "paramtype": "vr::SpatialAnchorHandle_t *"
    }
  ]
}*/
  CreateSpatialAnchorFromPose(unDeviceIndex: TrackedDeviceIndex_t, eOrigin: ETrackingUniverseOrigin, pPose: SpatialAnchorPose_t, pHandleOut: SpatialAnchorHandle_t): [EVRSpatialAnchorError, SpatialAnchorPose_t, SpatialAnchorHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer", "pointer"], result: "i32" });
    const pPoseBuffer = new ArrayBuffer(48);
    const pPoseView = new DataView(pPoseBuffer);
    const pPosePtr = Deno.UnsafePointer.of(pPoseBuffer);
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const pHandleOutArray = new Float64Array([pHandleOut]);
    const pHandleOutPtr = Deno.UnsafePointer.of(pHandleOutArray);
    const result = func.call(this.ptr, unDeviceIndex, eOrigin, pPosePtr, pHandleOutPtr);
    return [result, SpatialAnchorPose_t.fromBuffer(pPoseBuffer, 0), pHandleOutBuffer];
  }

/*{
  "classname": "vr::IVRSpatialAnchors",
  "methodname": "GetSpatialAnchorPose",
  "returntype": "vr::EVRSpatialAnchorError",
  "params": [
    {
      "paramname": "unHandle",
      "paramtype": "vr::SpatialAnchorHandle_t"
    },
    {
      "paramname": "eOrigin",
      "paramtype": "vr::ETrackingUniverseOrigin"
    },
    {
      "paramname": "pPoseOut",
      "paramtype": "struct vr::SpatialAnchorPose_t *"
    }
  ]
}*/
  GetSpatialAnchorPose(unHandle: SpatialAnchorHandle_t, eOrigin: ETrackingUniverseOrigin, pPoseOut: SpatialAnchorPose_t): [EVRSpatialAnchorError, SpatialAnchorPose_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "i32", "pointer"], result: "i32" });
    const pPoseOutBuffer = new ArrayBuffer(48);
    const pPoseOutView = new DataView(pPoseOutBuffer);
    const pPoseOutPtr = Deno.UnsafePointer.of(pPoseOutBuffer);
    const unHandleArray = new Float64Array([unHandle]);
    const unHandlePtr = Deno.UnsafePointer.of(unHandleArray);
    const result = func.call(this.ptr, unHandle, eOrigin, pPoseOutPtr);
    return [result, SpatialAnchorPose_t.fromBuffer(pPoseOutBuffer, 0)];
  }

/*{
  "classname": "vr::IVRSpatialAnchors",
  "methodname": "GetSpatialAnchorDescriptor",
  "returntype": "vr::EVRSpatialAnchorError",
  "params": [
    {
      "paramname": "unHandle",
      "paramtype": "vr::SpatialAnchorHandle_t"
    },
    {
      "paramname": "pchDescriptorOut",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "punDescriptorBufferLenInOut",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  GetSpatialAnchorDescriptor(unHandle: SpatialAnchorHandle_t, pchDescriptorOut: string, punDescriptorBufferLenInOut: number): [EVRSpatialAnchorError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "pointer"], result: "i32" });
    const unHandleArray = new Float64Array([unHandle]);
    const unHandlePtr = Deno.UnsafePointer.of(unHandleArray);
    const pchDescriptorOutBuffer = new TextEncoder().encode(pchDescriptorOut + '\0');
    const pchDescriptorOutPtr = Deno.UnsafePointer.of(pchDescriptorOutBuffer);
    const punDescriptorBufferLenInOutArray = new Float64Array([punDescriptorBufferLenInOut]);
    const punDescriptorBufferLenInOutPtr = Deno.UnsafePointer.of(punDescriptorBufferLenInOutArray);
    const result = func.call(this.ptr, unHandle, pchDescriptorOutPtr, punDescriptorBufferLenInOutPtr);
    return [result, punDescriptorBufferLenInOutBuffer];
  }

/*{
  "classname": "vr::IVRDebug",
  "methodname": "EmitVrProfilerEvent",
  "returntype": "vr::EVRDebugError",
  "params": [
    {
      "paramname": "pchMessage",
      "paramtype": "const char *"
    }
  ]
}*/
}

export class IVRDebug {
  constructor(private ptr: Deno.PointerValue) {}

  EmitVrProfilerEvent(pchMessage: string): EVRDebugError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pchMessageBuffer = new TextEncoder().encode(pchMessage + '\0');
    const pchMessagePtr = Deno.UnsafePointer.of(pchMessageBuffer);
    const result = func.call(this.ptr, pchMessagePtr);
    return result;
  }

/*{
  "classname": "vr::IVRDebug",
  "methodname": "BeginVrProfilerEvent",
  "returntype": "vr::EVRDebugError",
  "params": [
    {
      "paramname": "pHandleOut",
      "paramtype": "vr::VrProfilerEventHandle_t *"
    }
  ]
}*/
  BeginVrProfilerEvent(pHandleOut: VrProfilerEventHandle_t): [EVRDebugError, VrProfilerEventHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer"], result: "i32" });
    const pHandleOutBuffer = new BigUint64Array([pHandleOut]);
    const pHandleOutPtr = Deno.UnsafePointer.of(pHandleOutBuffer);
    const result = func.call(this.ptr, pHandleOutPtr);
    return [result, pHandleOutBuffer];
  }

/*{
  "classname": "vr::IVRDebug",
  "methodname": "FinishVrProfilerEvent",
  "returntype": "vr::EVRDebugError",
  "params": [
    {
      "paramname": "hHandle",
      "paramtype": "vr::VrProfilerEventHandle_t"
    },
    {
      "paramname": "pchMessage",
      "paramtype": "const char *"
    }
  ]
}*/
  FinishVrProfilerEvent(hHandle: VrProfilerEventHandle_t, pchMessage: string): EVRDebugError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const hHandleBuffer = new BigUint64Array([hHandle]);
    const hHandlePtr = Deno.UnsafePointer.of(hHandleBuffer);
    const pchMessageBuffer = new TextEncoder().encode(pchMessage + '\0');
    const pchMessagePtr = Deno.UnsafePointer.of(pchMessageBuffer);
    const result = func.call(this.ptr, hHandle, pchMessagePtr);
    return result;
  }

/*{
  "classname": "vr::IVRDebug",
  "methodname": "DriverDebugRequest",
  "returntype": "uint32_t",
  "params": [
    {
      "paramname": "unDeviceIndex",
      "paramtype": "vr::TrackedDeviceIndex_t"
    },
    {
      "paramname": "pchRequest",
      "paramtype": "const char *"
    },
    {
      "paramname": "pchResponseBuffer",
      "out_string": " ",
      "paramtype": "char *"
    },
    {
      "paramname": "unResponseBufferSize",
      "paramtype": "uint32_t"
    }
  ]
}*/
  DriverDebugRequest(unDeviceIndex: TrackedDeviceIndex_t, pchRequest: string, pchResponseBuffer: string, unResponseBufferSize: number): number {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32", "pointer", "pointer", "u32"], result: "u32" });
    const unDeviceIndexArray = new Float64Array([unDeviceIndex]);
    const unDeviceIndexPtr = Deno.UnsafePointer.of(unDeviceIndexArray);
    const pchRequestBuffer = new TextEncoder().encode(pchRequest + '\0');
    const pchRequestPtr = Deno.UnsafePointer.of(pchRequestBuffer);
    const pchResponseBufferBuffer = new TextEncoder().encode(pchResponseBuffer + '\0');
    const pchResponseBufferPtr = Deno.UnsafePointer.of(pchResponseBufferBuffer);
    const unResponseBufferSizeArray = new Float64Array([unResponseBufferSize]);
    const unResponseBufferSizePtr = Deno.UnsafePointer.of(unResponseBufferSizeArray);
    const result = func.call(this.ptr, unDeviceIndex, pchRequestPtr, pchResponseBufferPtr, unResponseBufferSize);
    return result;
  }

/*{
  "classname": "vr::IVRProperties",
  "methodname": "ReadPropertyBatch",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "ulContainerHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pBatch",
      "paramtype": "struct vr::PropertyRead_t *"
    },
    {
      "paramname": "unBatchEntryCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVRProperties {
  constructor(private ptr: Deno.PointerValue) {}

  ReadPropertyBatch(ulContainerHandle: PropertyContainerHandle_t, pBatch: PropertyRead_t, unBatchEntryCount: number): [ETrackedPropertyError, PropertyRead_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pBatchBuffer = new ArrayBuffer(32);
    const pBatchView = new DataView(pBatchBuffer);
    const pBatchPtr = Deno.UnsafePointer.of(pBatchBuffer);
    const ulContainerHandleBuffer = new BigUint64Array([ulContainerHandle]);
    const ulContainerHandlePtr = Deno.UnsafePointer.of(ulContainerHandleBuffer);
    const unBatchEntryCountArray = new Float64Array([unBatchEntryCount]);
    const unBatchEntryCountPtr = Deno.UnsafePointer.of(unBatchEntryCountArray);
    const result = func.call(this.ptr, ulContainerHandle, pBatchPtr, unBatchEntryCount);
    return [result, PropertyRead_t.fromBuffer(pBatchBuffer, 0)];
  }

/*{
  "classname": "vr::IVRProperties",
  "methodname": "WritePropertyBatch",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "ulContainerHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pBatch",
      "paramtype": "struct vr::PropertyWrite_t *"
    },
    {
      "paramname": "unBatchEntryCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  WritePropertyBatch(ulContainerHandle: PropertyContainerHandle_t, pBatch: PropertyWrite_t, unBatchEntryCount: number): [ETrackedPropertyError, PropertyWrite_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pBatchBuffer = new ArrayBuffer(40);
    const pBatchView = new DataView(pBatchBuffer);
    const pBatchPtr = Deno.UnsafePointer.of(pBatchBuffer);
    const ulContainerHandleBuffer = new BigUint64Array([ulContainerHandle]);
    const ulContainerHandlePtr = Deno.UnsafePointer.of(ulContainerHandleBuffer);
    const unBatchEntryCountArray = new Float64Array([unBatchEntryCount]);
    const unBatchEntryCountPtr = Deno.UnsafePointer.of(unBatchEntryCountArray);
    const result = func.call(this.ptr, ulContainerHandle, pBatchPtr, unBatchEntryCount);
    return [result, PropertyWrite_t.fromBuffer(pBatchBuffer, 0)];
  }

/*{
  "classname": "vr::IVRProperties",
  "methodname": "GetPropErrorNameFromEnum",
  "returntype": "const char *",
  "params": [
    {
      "paramname": "error",
      "paramtype": "vr::ETrackedPropertyError"
    }
  ]
}*/
  GetPropErrorNameFromEnum(error: ETrackedPropertyError): string {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "i32"], result: "pointer" });
    const result = func.call(this.ptr, error);
    return result === null ? "" : Deno.UnsafePointerView.getCString(result);
  }

/*{
  "classname": "vr::IVRProperties",
  "methodname": "TrackedDeviceToPropertyContainer",
  "returntype": "PropertyContainerHandle_t",
  "params": [
    {
      "paramname": "nDevice",
      "paramtype": "vr::TrackedDeviceIndex_t"
    }
  ]
}*/
  TrackedDeviceToPropertyContainer(nDevice: TrackedDeviceIndex_t): PropertyContainerHandle_t {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u32"], result: "u64" });
    const nDeviceArray = new Float64Array([nDevice]);
    const nDevicePtr = Deno.UnsafePointer.of(nDeviceArray);
    const result = func.call(this.ptr, nDevice);
    return result;
  }

/*{
  "classname": "vr::IVRPaths",
  "methodname": "ReadPathBatch",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "ulRootHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pBatch",
      "paramtype": "struct vr::PathRead_t *"
    },
    {
      "paramname": "unBatchEntryCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVRPaths {
  constructor(private ptr: Deno.PointerValue) {}

  ReadPathBatch(ulRootHandle: PropertyContainerHandle_t, pBatch: PathRead_t, unBatchEntryCount: number): [ETrackedPropertyError, PathRead_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pBatchBuffer = new ArrayBuffer(40);
    const pBatchView = new DataView(pBatchBuffer);
    const pBatchPtr = Deno.UnsafePointer.of(pBatchBuffer);
    const ulRootHandleBuffer = new BigUint64Array([ulRootHandle]);
    const ulRootHandlePtr = Deno.UnsafePointer.of(ulRootHandleBuffer);
    const unBatchEntryCountArray = new Float64Array([unBatchEntryCount]);
    const unBatchEntryCountPtr = Deno.UnsafePointer.of(unBatchEntryCountArray);
    const result = func.call(this.ptr, ulRootHandle, pBatchPtr, unBatchEntryCount);
    return [result, PathRead_t.fromBuffer(pBatchBuffer, 0)];
  }

/*{
  "classname": "vr::IVRPaths",
  "methodname": "WritePathBatch",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "ulRootHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pBatch",
      "paramtype": "struct vr::PathWrite_t *"
    },
    {
      "paramname": "unBatchEntryCount",
      "paramtype": "uint32_t"
    }
  ]
}*/
  WritePathBatch(ulRootHandle: PropertyContainerHandle_t, pBatch: PathWrite_t, unBatchEntryCount: number): [ETrackedPropertyError, PathWrite_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32"], result: "i32" });
    const pBatchBuffer = new ArrayBuffer(48);
    const pBatchView = new DataView(pBatchBuffer);
    const pBatchPtr = Deno.UnsafePointer.of(pBatchBuffer);
    const ulRootHandleBuffer = new BigUint64Array([ulRootHandle]);
    const ulRootHandlePtr = Deno.UnsafePointer.of(ulRootHandleBuffer);
    const unBatchEntryCountArray = new Float64Array([unBatchEntryCount]);
    const unBatchEntryCountPtr = Deno.UnsafePointer.of(unBatchEntryCountArray);
    const result = func.call(this.ptr, ulRootHandle, pBatchPtr, unBatchEntryCount);
    return [result, PathWrite_t.fromBuffer(pBatchBuffer, 0)];
  }

/*{
  "classname": "vr::IVRPaths",
  "methodname": "StringToHandle",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "pHandle",
      "paramtype": "vr::PathHandle_t *"
    },
    {
      "paramname": "pchPath",
      "paramtype": "const char *"
    }
  ]
}*/
  StringToHandle(pHandle: PathHandle_t, pchPath: string): [ETrackedPropertyError, PathHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const pchPathBuffer = new TextEncoder().encode(pchPath + '\0');
    const pchPathPtr = Deno.UnsafePointer.of(pchPathBuffer);
    const result = func.call(this.ptr, pHandlePtr, pchPathPtr);
    return [result, pHandleBuffer];
  }

/*{
  "classname": "vr::IVRPaths",
  "methodname": "HandleToString",
  "returntype": "vr::ETrackedPropertyError",
  "params": [
    {
      "paramname": "pHandle",
      "paramtype": "vr::PathHandle_t"
    },
    {
      "paramname": "pchBuffer",
      "paramtype": "char *"
    },
    {
      "paramname": "unBufferSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "punBufferSizeUsed",
      "paramtype": "uint32_t *"
    }
  ]
}*/
  HandleToString(pHandle: PathHandle_t, pchBuffer: string, unBufferSize: number, punBufferSizeUsed: number): [ETrackedPropertyError, number] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "u32", "pointer"], result: "i32" });
    const pHandleBuffer = new BigUint64Array([pHandle]);
    const pHandlePtr = Deno.UnsafePointer.of(pHandleBuffer);
    const pchBufferBuffer = new TextEncoder().encode(pchBuffer + '\0');
    const pchBufferPtr = Deno.UnsafePointer.of(pchBufferBuffer);
    const unBufferSizeArray = new Float64Array([unBufferSize]);
    const unBufferSizePtr = Deno.UnsafePointer.of(unBufferSizeArray);
    const punBufferSizeUsedArray = new Float64Array([punBufferSizeUsed]);
    const punBufferSizeUsedPtr = Deno.UnsafePointer.of(punBufferSizeUsedArray);
    const result = func.call(this.ptr, pHandle, pchBufferPtr, unBufferSize, punBufferSizeUsedPtr);
    return [result, punBufferSizeUsedBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "Create",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "pulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t *"
    },
    {
      "paramname": "pchPath",
      "paramtype": "const char *"
    },
    {
      "paramname": "unBlockDataSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unBlockHeaderSize",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unBlockCount",
      "paramtype": "uint32_t"
    },
    {
      "paramname": "unFlags",
      "paramtype": "uint32_t"
    }
  ]
}*/
}

export class IVRBlockQueue {
  constructor(private ptr: Deno.PointerValue) {}

  Create(pulQueueHandle: PropertyContainerHandle_t, pchPath: string, unBlockDataSize: number, unBlockHeaderSize: number, unBlockCount: number, unFlags: number): [EBlockQueueError, PropertyContainerHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(0));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer", "u32", "u32", "u32", "u32"], result: "i32" });
    const pulQueueHandleBuffer = new BigUint64Array([pulQueueHandle]);
    const pulQueueHandlePtr = Deno.UnsafePointer.of(pulQueueHandleBuffer);
    const pchPathBuffer = new TextEncoder().encode(pchPath + '\0');
    const pchPathPtr = Deno.UnsafePointer.of(pchPathBuffer);
    const unBlockDataSizeArray = new Float64Array([unBlockDataSize]);
    const unBlockDataSizePtr = Deno.UnsafePointer.of(unBlockDataSizeArray);
    const unBlockHeaderSizeArray = new Float64Array([unBlockHeaderSize]);
    const unBlockHeaderSizePtr = Deno.UnsafePointer.of(unBlockHeaderSizeArray);
    const unBlockCountArray = new Float64Array([unBlockCount]);
    const unBlockCountPtr = Deno.UnsafePointer.of(unBlockCountArray);
    const unFlagsArray = new Float64Array([unFlags]);
    const unFlagsPtr = Deno.UnsafePointer.of(unFlagsArray);
    const result = func.call(this.ptr, pulQueueHandlePtr, pchPathPtr, unBlockDataSize, unBlockHeaderSize, unBlockCount, unFlags);
    return [result, pulQueueHandleBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "Connect",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "pulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t *"
    },
    {
      "paramname": "pchPath",
      "paramtype": "const char *"
    }
  ]
}*/
  Connect(pulQueueHandle: PropertyContainerHandle_t, pchPath: string): [EBlockQueueError, PropertyContainerHandle_t] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(8));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "pointer", "pointer"], result: "i32" });
    const pulQueueHandleBuffer = new BigUint64Array([pulQueueHandle]);
    const pulQueueHandlePtr = Deno.UnsafePointer.of(pulQueueHandleBuffer);
    const pchPathBuffer = new TextEncoder().encode(pchPath + '\0');
    const pchPathPtr = Deno.UnsafePointer.of(pchPathBuffer);
    const result = func.call(this.ptr, pulQueueHandlePtr, pchPathPtr);
    return [result, pulQueueHandleBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "Destroy",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    }
  ]
}*/
  Destroy(ulQueueHandle: PropertyContainerHandle_t): EBlockQueueError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(16));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const result = func.call(this.ptr, ulQueueHandle);
    return result;
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "AcquireWriteOnlyBlock",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pulBlockHandle",
      "paramtype": "vr::PropertyContainerHandle_t *"
    },
    {
      "paramname": "ppvBuffer",
      "paramtype": "void **"
    }
  ]
}*/
  AcquireWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array): [EBlockQueueError, PropertyContainerHandle_t, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(24));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const pulBlockHandleBuffer = new BigUint64Array([pulBlockHandle]);
    const pulBlockHandlePtr = Deno.UnsafePointer.of(pulBlockHandleBuffer);
    const ppvBufferPtr = Deno.UnsafePointer.of(ppvBuffer);
    const result = func.call(this.ptr, ulQueueHandle, pulBlockHandlePtr, ppvBufferPtr);
    return [result, pulBlockHandleBuffer, ppvBufferBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "ReleaseWriteOnlyBlock",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "ulBlockHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    }
  ]
}*/
  ReleaseWriteOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, ulBlockHandle: PropertyContainerHandle_t): EBlockQueueError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(32));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const ulBlockHandleBuffer = new BigUint64Array([ulBlockHandle]);
    const ulBlockHandlePtr = Deno.UnsafePointer.of(ulBlockHandleBuffer);
    const result = func.call(this.ptr, ulQueueHandle, ulBlockHandle);
    return result;
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "WaitAndAcquireReadOnlyBlock",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pulBlockHandle",
      "paramtype": "vr::PropertyContainerHandle_t *"
    },
    {
      "paramname": "ppvBuffer",
      "paramtype": "const void **"
    },
    {
      "paramname": "eReadType",
      "paramtype": "vr::EBlockQueueReadType"
    },
    {
      "paramname": "unTimeoutMs",
      "paramtype": "uint32_t"
    }
  ]
}*/
  WaitAndAcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array, eReadType: EBlockQueueReadType, unTimeoutMs: number): [EBlockQueueError, PropertyContainerHandle_t, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(40));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "i32", "u32"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const pulBlockHandleBuffer = new BigUint64Array([pulBlockHandle]);
    const pulBlockHandlePtr = Deno.UnsafePointer.of(pulBlockHandleBuffer);
    const ppvBufferPtr = Deno.UnsafePointer.of(ppvBuffer);
    const unTimeoutMsArray = new Float64Array([unTimeoutMs]);
    const unTimeoutMsPtr = Deno.UnsafePointer.of(unTimeoutMsArray);
    const result = func.call(this.ptr, ulQueueHandle, pulBlockHandlePtr, ppvBufferPtr, eReadType, unTimeoutMs);
    return [result, pulBlockHandleBuffer, ppvBufferBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "AcquireReadOnlyBlock",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pulBlockHandle",
      "paramtype": "vr::PropertyContainerHandle_t *"
    },
    {
      "paramname": "ppvBuffer",
      "paramtype": "const void **"
    },
    {
      "paramname": "eReadType",
      "paramtype": "vr::EBlockQueueReadType"
    }
  ]
}*/
  AcquireReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, pulBlockHandle: PropertyContainerHandle_t, ppvBuffer: Uint8Array, eReadType: EBlockQueueReadType): [EBlockQueueError, PropertyContainerHandle_t, Uint8Array] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(48));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer", "pointer", "i32"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const pulBlockHandleBuffer = new BigUint64Array([pulBlockHandle]);
    const pulBlockHandlePtr = Deno.UnsafePointer.of(pulBlockHandleBuffer);
    const ppvBufferPtr = Deno.UnsafePointer.of(ppvBuffer);
    const result = func.call(this.ptr, ulQueueHandle, pulBlockHandlePtr, ppvBufferPtr, eReadType);
    return [result, pulBlockHandleBuffer, ppvBufferBuffer];
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "ReleaseReadOnlyBlock",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "ulBlockHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    }
  ]
}*/
  ReleaseReadOnlyBlock(ulQueueHandle: PropertyContainerHandle_t, ulBlockHandle: PropertyContainerHandle_t): EBlockQueueError {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(56));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "u64"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const ulBlockHandleBuffer = new BigUint64Array([ulBlockHandle]);
    const ulBlockHandlePtr = Deno.UnsafePointer.of(ulBlockHandleBuffer);
    const result = func.call(this.ptr, ulQueueHandle, ulBlockHandle);
    return result;
  }

/*{
  "classname": "vr::IVRBlockQueue",
  "methodname": "QueueHasReader",
  "returntype": "vr::EBlockQueueError",
  "params": [
    {
      "paramname": "ulQueueHandle",
      "paramtype": "vr::PropertyContainerHandle_t"
    },
    {
      "paramname": "pbHasReaders",
      "paramtype": "bool *"
    }
  ]
}*/
  QueueHasReader(ulQueueHandle: PropertyContainerHandle_t, pbHasReaders: boolean): [EBlockQueueError, boolean] {
    if (this.ptr === null) throw new Error("Invalid pointer");
    const vr = new Deno.UnsafePointerView(this.ptr);
    const vtablePtr = Deno.UnsafePointer.create(vr.getBigUint64(0));
    if (vtablePtr === null) throw new Error("Invalid vtable pointer");
    const vtable = new Deno.UnsafePointerView(vtablePtr);
    const funcPtr = Deno.UnsafePointer.create(vtable.getBigUint64(64));
    if (funcPtr === null) throw new Error("Invalid function pointer");
    const func = new Deno.UnsafeFnPointer(funcPtr, { parameters: ["pointer", "u64", "pointer"], result: "i32" });
    const ulQueueHandleBuffer = new BigUint64Array([ulQueueHandle]);
    const ulQueueHandlePtr = Deno.UnsafePointer.of(ulQueueHandleBuffer);
    const pbHasReadersArray = new Uint8Array([pbHasReaders ? 1 : 0]);
    const pbHasReadersPtr = Deno.UnsafePointer.of(pbHasReadersArray);
    const result = func.call(this.ptr, ulQueueHandle, pbHasReadersPtr);
    return [result, pbHasReadersBuffer];
  }

}

//#endregion


function stringToPointer(str: string): Deno.PointerValue {
  const encoder = new TextEncoder();
  const view = encoder.encode(str + '\0');
  return Deno.UnsafePointer.of(view);
}

export function getGenericInterface(interfaceName: string): Deno.PointerValue {
  const error = new Int32Array(1); 
  const namePtr = stringToPointer(interfaceName);
  return OpenVR.VR_GetGenericInterface(namePtr, Deno.UnsafePointer.of(error));
}
        