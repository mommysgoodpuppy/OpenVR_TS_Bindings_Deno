import * as OpenVR from "./openvr_bindings.ts";

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/actions.json");

async function main() {
    let error;

    const errorX = new Int32Array(1);
    OpenVR.OpenVR.VR_Init(Deno.UnsafePointer.of(errorX), OpenVR.EVRApplicationType.VRApplication_Overlay);

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
    }

    let actionSetHandle: OpenVR.VRActionSetHandle_t = 0n;
    [error, actionSetHandle] = vrInput.GetActionSetHandle("/actions/main", actionSetHandle);
    if (error !== OpenVR.EVRInputError.VRInputError_None) {
        console.error(`Failed to get action set handle: ${OpenVR.EVRInputError[error]}`);
        throw new Error("Failed to get action set handle");
    }

    let handPoseLeftHandle: OpenVR.VRActionHandle_t = OpenVR.k_ulInvalidActionHandle;
    let handPoseRightHandle: OpenVR.VRActionHandle_t = OpenVR.k_ulInvalidActionHandle;
    [error, handPoseLeftHandle] = vrInput.GetActionHandle("/actions/main/in/HandPoseLeft", handPoseLeftHandle);
    [error, handPoseRightHandle] = vrInput.GetActionHandle("/actions/main/in/HandPoseRight", handPoseRightHandle);
    console.log(handPoseLeftHandle, handPoseRightHandle);

    const overlayHandle2: OpenVR.VROverlayHandle_t = 0n;
    const [_errorX, overlayHandle] = overlay.CreateOverlay("image", "image", overlayHandle2);

    console.log(`Overlay created with handle: ${overlayHandle}`);

    overlay.SetOverlayFromFile(overlayHandle, "C:/GIT/petplay/resources/PetPlay.png");
    overlay.SetOverlayWidthInMeters(overlayHandle, 1);
    overlay.ShowOverlay(overlayHandle);

    const initialTransform:OpenVR.HmdMatrix34_t = {
        m: [
            [1.0, 0.0, 0.0, 0.0],
            [0.0, 1.0, 0.0, 1.0],
            [0.0, 0.0, 1.0, -2.0]
        ]
    };

    overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, initialTransform);

    console.log("Overlay created and shown. Press Ctrl+C to exit.");

    while (true) {
        
        let activeActionSet: OpenVR.VRActiveActionSet_t = {
            ulActionSet: 0n,
            ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
            ulSecondaryActionSet: 0n,
            unPadding: 0,
            nPriority: 0
        };
        activeActionSet.ulActionSet = actionSetHandle[0];
        let actionSets = [activeActionSet];


        [error, activeActionSet] = vrInput.UpdateActionState(activeActionSet, OpenVR.VRActiveActionSet_t.byteLength, actionSets.length);
        if (error !== OpenVR.EVRInputError.VRInputError_None) {
            console.error(`Failed to update action state: ${OpenVR.EVRInputError[error]}`);
            throw new Error("Failed to update action state");
            continue;
        }

        let poseDataLeft = new OpenVR.InputPoseActionData_t();
        let poseDataRight = new OpenVR.InputPoseActionData_t();
        const lefthandle = handPoseLeftHandle[0];
        const righthandle = handPoseRightHandle[0];


        [error, poseDataLeft] = vrInput.GetPoseActionDataRelativeToNow(
            lefthandle,
            OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            poseDataLeft,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );
        if (error !== OpenVR.EVRInputError.VRInputError_None) {
            console.error(`Failed to GetPoseActionDataRelativeToNow: ${OpenVR.EVRInputError[error]}`);
            throw new Error(`Failed to GetPoseActionDataRelativeToNow: ${OpenVR.EVRInputError[error]}`);
            continue;
        }
        console.log(poseDataLeft);

        

        [error, poseDataRight] = vrInput.GetPoseActionDataRelativeToNow(
            righthandle,
            OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            poseDataRight,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );
        if (error !== OpenVR.EVRInputError.VRInputError_None) {
            console.error(`Failed to update action state: ${OpenVR.EVRInputError[error]}`);
            throw new Error("Failed to update action state");
            continue;
        }

        if (poseDataLeft.bActive && poseDataLeft.pose.bPoseIsValid) {
            console.log("Left hand position:");
            console.log(poseDataLeft.pose.mDeviceToAbsoluteTracking);
            overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, poseDataLeft.pose.mDeviceToAbsoluteTracking);
        }

        if (poseDataRight.bActive && poseDataRight.pose.bPoseIsValid) {
            console.log("Right hand position:");
            console.log(poseDataRight.pose.mDeviceToAbsoluteTracking);
            // Uncomment the following line if you want to attach the overlay to the right hand instead
            // overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.ETrackingUniverseOrigin.TrackingUniverseStanding, poseDataRight.pose.mDeviceToAbsoluteTracking);
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
    }
}

main().catch(console.error);