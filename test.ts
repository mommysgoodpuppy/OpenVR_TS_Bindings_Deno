import * as OpenVR from "./openvr_bindings.ts";
let _void = null
let pose: OpenVR.TrackedDevicePose_t = new OpenVR.TrackedDevicePose_t();

function GetControllerPositions(pVRSystem: OpenVR.IVRSystem): OpenVR.HmdMatrix34_t | null {
    [_void, pose] = pVRSystem.GetDeviceToAbsoluteTrackingPose(OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, 0.0, pose, OpenVR.k_unMaxTrackedDeviceCount);
    console.log(pose.mDeviceToAbsoluteTracking.m)
    for (let Device: OpenVR.TrackedDeviceIndex_t = 0; Device < OpenVR.k_unMaxTrackedDeviceCount; ++Device) {
        const deviceClass = pVRSystem.GetTrackedDeviceClass(Device);
        if (deviceClass === OpenVR.ETrackedDeviceClass.TrackedDeviceClass_Controller) {
            let state: OpenVR.VRControllerState_t = new OpenVR.VRControllerState001_t
            const sizeofState = OpenVR.VRControllerState001_t.byteLength
            let enabled
            [enabled, state] = pVRSystem.GetControllerState(Device, state, sizeofState)
            const a = OpenVR.VRControllerState001_t.fromBuffer(state as unknown as ArrayBuffer, 1)
            if (enabled) {
                //console.log(a)
                for (let i = 0; i < OpenVR.EVRButtonId.k_EButton_Max; i++) {
                    //OpenVR.EVRButtonId.k_EButton_SteamVR_Trigger
                    if (a?.ulButtonPressed != null) {
                        return pose.mDeviceToAbsoluteTracking;
                    }
                }
            }
        }
    }
    return null;
}

async function main() {
    const error = new Int32Array(1);
    OpenVR.OpenVR.VR_Init(Deno.UnsafePointer.of(error), OpenVR.EVRApplicationType.VRApplication_Overlay);
    const overlayHandle2: OpenVR.VROverlayHandle_t = 0n;
    const overlayPtr = OpenVR.getGenericInterface(OpenVR.IVROverlay_Version);
    const IVRPtr = OpenVR.getGenericInterface(OpenVR.IVRSystem_Version);
    const overlay = new OpenVR.IVROverlay(overlayPtr);
    const vrSystem = new OpenVR.IVRSystem(IVRPtr);

    const [_errorX, xbuffer] = overlay.CreateOverlay("image", "image", overlayHandle2);
    const buffer = xbuffer as unknown as Array<ArrayBuffer>
    const overlayHandle = buffer[0] as unknown as bigint;
    console.log(`Overlay created with handle: ${overlayHandle}`);

    overlay.SetOverlayFromFile(overlayHandle, "C:/GIT/petplay/resources/PetPlay.png");
    overlay.SetOverlayWidthInMeters(overlayHandle, 1);
    overlay.ShowOverlay(overlayHandle);

    const transform: OpenVR.HmdMatrix34_t = {
        m: [
            [1.0, 0.0, 0.0, 0.0],
            [0.0, 1.0, 0.0, 1.0],
            [0.0, 0.0, 1.0, -2.0]
        ]
    };

    overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, transform);


    console.log("Overlay created and shown. Press Ctrl+C to exit.");

    while (true) {
        const controllerPosition = GetControllerPositions(vrSystem);
        if (controllerPosition) {
            overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, controllerPosition);
        }
        await new Promise(resolve => setTimeout(resolve, 1600));
    }
}

main().catch(console.error);