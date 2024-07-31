import * as OpenVR from "./openvr_bindings.ts";
let _void = null
let pose: OpenVR.TrackedDevicePose_t = new OpenVR.TrackedDevicePose_t();

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/action.json");

function GetControllerPositions(pVRInput: OpenVR.IVRInput, poseAction: OpenVR.VRActionHandle_t): OpenVR.InputPoseActionData_t | null {
    // Update action state
    let actionSet: OpenVR.VRActiveActionSet_t = {
        ulActionSet: 0, // Your action set handle
        ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
        ulSecondaryActionSet: 0,
        unPadding: 0,
        nPriority: 0
    };

    let error

    [error, actionSet] = pVRInput.UpdateActionState(actionSet, OpenVR.VRActiveActionSet_t.byteLength, 1);
    if (error !== OpenVR.EVRInputError.VRInputError_None) {
        console.error(`Failed to update action state: ${OpenVR.EVRInputError[error]}`);
        return null;
    }

    // Get pose data
    let poseData = new OpenVR.InputPoseActionData_t();
    [error, poseData] = pVRInput.GetPoseActionDataForNextFrame(
        poseAction,
        OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding,
        poseData,
        OpenVR.InputPoseActionData_t.byteLength,
        OpenVR.k_ulInvalidInputValueHandle
    );

    if (error !== OpenVR.EVRInputError.VRInputError_None) {
        console.error(`Failed to get pose data: ${OpenVR.EVRInputError[error]}`);
        return null;
    }

    // Check if the pose is valid
    if (poseData.bActive && poseData.pose.bPoseIsValid) {
        return poseData;
    }

    return null;
}

async function main() {
    let error

    
    const errorX = new Int32Array(1);
    OpenVR.OpenVR.VR_Init(Deno.UnsafePointer.of(errorX), OpenVR.EVRApplicationType.VRApplication_Overlay);
    

    
    
    
    const overlayHandle2: OpenVR.VROverlayHandle_t = 0n;
    const overlayPtr = OpenVR.getGenericInterface(OpenVR.IVROverlay_Version);
    const IVRPtr = OpenVR.getGenericInterface(OpenVR.IVRSystem_Version);
    const IVRInputPtr = OpenVR.getGenericInterface(OpenVR.IVRInput_Version);


    const overlay = new OpenVR.IVROverlay(overlayPtr);
    const vrSystem = new OpenVR.IVRSystem(IVRPtr);
    const vrInput = new OpenVR.IVRInput(IVRInputPtr);

    error = vrInput.SetActionManifestPath(manifestPath);
    if (error !== OpenVR.EVRInputError.VRInputError_None) {
        console.error(`Failed to set action manifest path: ${OpenVR.EVRInputError[error]}`);
        throw new Error("Failed to set action manifest path");
        return;
    }



    let actionSetHandle: OpenVR.VRActionHandle_t = 0n;

    [error, actionSetHandle] = vrInput.GetActionHandle("/actions/main", actionSetHandle);
    if (error !== OpenVR.EVRInputError.VRInputError_None) {
        console.error(`Failed to get pose action: ${OpenVR.EVRInputError[error]}`);
        throw new Error("Failed to set action manifest path");
        return null;
    }
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
        const controllerPosition = GetControllerPositions(vrInput, actionSetHandle);
        if (controllerPosition) {
            overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, controllerPosition);
        }
        await new Promise(resolve => setTimeout(resolve, 300));
    }
}

main().catch(console.error);