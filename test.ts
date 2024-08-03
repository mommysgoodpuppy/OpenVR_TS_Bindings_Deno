import * as OpenVR from "./openvr/FULL.ts";

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/actions.json");

function stringToPointer(str: string): Deno.PointerValue {
    const encoder = new TextEncoder();
    const view = encoder.encode(str + '\0');
    return Deno.UnsafePointer.of(view);
}

async function main() {
    let error;



    const initerrorptr = Deno.UnsafePointer.of<OpenVR.InitError>(new Int32Array(1))!
    const TypeSafeINITERRPTR: OpenVR.InitErrorPTRType = initerrorptr


    const errorX = Deno.UnsafePointer.of(new Int32Array(1))!;
    OpenVR.VR_InitInternal(errorX, OpenVR.ApplicationType.VRApplication_Overlay);
    let a = new Deno.UnsafePointerView(errorX).getInt32();
    console.log(a)

    
    const overlayPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVROverlay_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)
    
    const IVRPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRSystem_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)
    const IVRInputPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRInput_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)

    const overlay = new OpenVR.IVROverlay(overlayPtr);
    const vrSystem = new OpenVR.IVRSystem(IVRPtr);
    const vrInput = new OpenVR.IVRInput(IVRInputPtr);


    //#region controller setup
    /*
    
    //set action manifest path
    error = vrInput.SetActionManifestPath(manifestPath);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to set action manifest path: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to set action manifest path");
    }

    //get action set handle
    const actionSetHandlePTR = Deno.UnsafePointer.of<OpenVR.ActionSetHandle>(new BigUint64Array(1))!
    error = vrInput.GetActionSetHandle("/actions/main", actionSetHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get action set handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get action set handle");
    }
    if (actionSetHandlePTR === null) throw new Error("Invalid pointer");
    const actionSetHandle = new Deno.UnsafePointerView(actionSetHandlePTR).getBigUint64();


    //#region Get action handles
    let handPoseLeftHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    const handPoseLeftHandlePTR = Deno.UnsafePointer.of<OpenVR.ActionHandle>(new BigUint64Array(1))!
    let handPoseRightHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    const handPoseRightHandlePTR = Deno.UnsafePointer.of<OpenVR.ActionHandle>(new BigUint64Array(1))!
    
    error = vrInput.GetActionHandle("/actions/main/in/HandPoseLeft", handPoseLeftHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get action handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get action handle");
    }
    if (handPoseLeftHandlePTR === null) throw new Error("Invalid pointer");
    handPoseLeftHandle = new Deno.UnsafePointerView(handPoseLeftHandlePTR).getBigUint64();

    error = vrInput.GetActionHandle("/actions/main/in/HandPoseRight", handPoseRightHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get action handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get action handle");
    }
    if (handPoseRightHandlePTR === null) throw new Error("Invalid pointer");
    handPoseRightHandle = new Deno.UnsafePointerView(handPoseRightHandlePTR).getBigUint64();

    console.log(handPoseLeftHandle, handPoseRightHandle);
    //#endregion
    
    */
    //#endregion


    const handlebuffer = new BigUint64Array(1)
    const overlayHandlePTR = Deno.UnsafePointer.of<OpenVR.OverlayHandle>(handlebuffer)!
    error = overlay.CreateOverlay("image", "image", overlayHandlePTR);
    if (error !== OpenVR.OverlayError.VROverlayError_None) {
        console.error(`Failed to create overlay: ${OpenVR.OverlayError[error]}`);
        throw new Error("Failed to create overlay");
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    const overlayHandle = new Deno.UnsafePointerView(overlayHandlePTR).getBigUint64();
    console.log(`Overlay created with handle: ${handlebuffer[0]}`);

    overlay.SetOverlayFromFile(overlayHandle, "C:/GIT/petplay/resources/PetPlay.png");
    overlay.SetOverlayWidthInMeters(overlayHandle, 1);
    overlay.ShowOverlay(overlayHandle);

    const initialTransform: OpenVR.HmdMatrix34 = {
        m: [
            [1.0, 0.0, 0.0, 1.0],
            [0.0, 1.0, 0.0, 1.0],
            [0.0, 0.0, 1.0, -2.0]
        ]
    };
    const initialTransformPTR = Deno.UnsafePointer.of<OpenVR.HmdMatrix34>(new Float32Array(initialTransform.m.flat()));

    overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding, initialTransformPTR);

    console.log("Overlay created and shown. Press Ctrl+C to exit.");


    //#region Main loop
    while (false) {

        let activeActionSet: OpenVR.ActiveActionSet = {
            ulActionSet: 0n,
            ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
            ulSecondaryActionSet: 0n,
            unPadding: 0,
            nPriority: 0
        };
        activeActionSet.ulActionSet = actionSetHandle[0];
        let actionSets = [activeActionSet];


        error = vrInput.UpdateActionState(activeActionSet, OpenVR.ActiveActionSet.byteLength, actionSets.length);
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