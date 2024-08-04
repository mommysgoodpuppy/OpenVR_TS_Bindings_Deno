import * as OpenVR from "./openvr/FULL.ts";
import { fillBuffer, readBufferStructured } from "./openvr_defs.ts";
import { P } from "./pointers.ts";

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/actions.json");

function stringToPointer(str: string): Deno.PointerValue {
    const encoder = new TextEncoder();
    const view = encoder.encode(str + '\0');
    return Deno.UnsafePointer.of(view);
}

async function main() {
    //#region structures
    const EmptyPoseData: OpenVR.InputPoseActionData = {
        bActive: false,
        activeOrigin: 0n,
        pose: {
            mDeviceToAbsoluteTracking: {
                m: [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            },
            vVelocity: { v: [0, 0, 0] },
            vAngularVelocity: { v: [0, 0, 0] },
            eTrackingResult: 1,
            bPoseIsValid: false,
            bDeviceIsConnected: false
        }
    }
    const EmptyDigitalActionData: OpenVR.InputDigitalActionData = {
        bActive: false,
        activeOrigin: 0n,
        bState: false,
        bChanged: false,
        fUpdateTime: 0.0
    };


    //#endregion

    let _
    let leftPoseData
    let rightPoseData
    let error;

    //#region init




    const initerrorptr = Deno.UnsafePointer.of<OpenVR.InitError>(new Int32Array(1))!
    const TypeSafeINITERRPTR: OpenVR.InitErrorPTRType = initerrorptr


    const errorX = Deno.UnsafePointer.of(new Int32Array(1))!;
    OpenVR.VR_InitInternal(errorX, OpenVR.ApplicationType.VRApplication_Overlay);
    let a = new Deno.UnsafePointerView(errorX).getInt32();
    console.log(a)


    const overlayPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVROverlay_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)

    //const IVRPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRSystem_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)
    const IVRInputPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRInput_Version), TypeSafeINITERRPTR);
    a = new Deno.UnsafePointerView(TypeSafeINITERRPTR).getInt32();
    console.log(a)

    const overlay = new OpenVR.IVROverlay(overlayPtr);
    //const vrSystem = new OpenVR.IVRSystem(IVRPtr);
    const vrInput = new OpenVR.IVRInput(IVRInputPtr);
    //#endregion


    //#region controller setup


    //set action manifest path
    error = vrInput.SetActionManifestPath(manifestPath);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to set action manifest path: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to set action manifest path");
    }

    //get action set handle
    const actionSetHandlePTR = P.BigUint64P<OpenVR.ActionSetHandle>();
    error = vrInput.GetActionSetHandle("/actions/main", actionSetHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get action set handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get action set handle");
    }
    if (actionSetHandlePTR === null) throw new Error("Invalid pointer");
    const actionSetHandle = new Deno.UnsafePointerView(actionSetHandlePTR).getBigUint64();


    //#region Get action handles
    let handPoseLeftHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    const handPoseLeftHandlePTR = P.BigUint64P<OpenVR.ActionHandle>();
    let handPoseRightHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    const handPoseRightHandlePTR = P.BigUint64P<OpenVR.ActionHandle>();



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


    let triggerLeftHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    let triggerRightHandle: OpenVR.ActionHandle = OpenVR.k_ulInvalidActionHandle;
    const triggerLeftHandlePTR = P.BigUint64P<OpenVR.ActionHandle>();
    const triggerRightHandlePTR = P.BigUint64P<OpenVR.ActionHandle>();

    error = vrInput.GetActionHandle("/actions/main/in/TriggerLeft", triggerLeftHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get left trigger action handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get left trigger action handle");
    }
    if (triggerLeftHandlePTR === null) throw new Error("Invalid pointer");
    triggerLeftHandle = new Deno.UnsafePointerView(triggerLeftHandlePTR).getBigUint64();

    error = vrInput.GetActionHandle("/actions/main/in/TriggerRight", triggerRightHandlePTR);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get right trigger action handle: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to get right trigger action handle");
    }
    if (triggerRightHandlePTR === null) throw new Error("Invalid pointer");
    triggerRightHandle = new Deno.UnsafePointerView(triggerRightHandlePTR).getBigUint64();



    //#endregion


    //#endregion

    //overlayhandle
    const overlayHandlePTR = P.BigUint64P<OpenVR.OverlayHandle>();
    error = overlay.CreateOverlay("image", "image", overlayHandlePTR);
    const overlayHandle = new Deno.UnsafePointerView(overlayHandlePTR).getBigUint64();


    console.log(`Overlay created with handle: ${overlayHandle}`);

    overlay.SetOverlayFromFile(overlayHandle, "C:/GIT/petplay/resources/PetPlay.png");
    overlay.SetOverlayWidthInMeters(overlayHandle, 0.1);
    overlay.ShowOverlay(overlayHandle);

    const initialTransform: OpenVR.HmdMatrix34 = {
        m: [
            [1.0, 0.0, 0.0, 0.0],
            [0.0, 1.0, 0.0, 1.0],
            [0.0, 0.0, 1.0, -2.0]
        ]
    };
    const initialTransformPTR = Deno.UnsafePointer.of<OpenVR.HmdMatrix34>(new Float32Array(initialTransform.m.flat()));
    overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding, initialTransformPTR);

    console.log("Overlay created and shown. Press Ctrl+C to exit.");

    const activeActionSet: OpenVR.ActiveActionSet = {
        ulActionSet: actionSetHandle,
        ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
        ulSecondaryActionSet: 0n,
        unPadding: 0, //uint32
        nPriority: 0  //int32
    };

    //#region Main loop

    while (true) {



        const activeActionSetBuffer = new ArrayBuffer(32); // Adjust size if needed
        const activeActionSetView = new DataView(activeActionSetBuffer);

        fillBuffer(activeActionSetView, activeActionSet);

        // Create a pointer to the buffer
        const activeActionSetPtr = Deno.UnsafePointer.of<OpenVR.ActiveActionSet>(activeActionSetBuffer)!;
        error = vrInput.UpdateActionState(activeActionSetPtr, 32, 1);
        if (error !== OpenVR.InputError.VRInputError_None) {
            console.error(`Failed to update action state: ${OpenVR.InputError[error]}`);
            throw new Error("Failed to update action state");
        }

        //get pose data
        const poseDataSize = 96; // Adjust if needed
        const posedataleftpointer = Deno.UnsafePointer.of<OpenVR.InputPoseActionData>(new ArrayBuffer(poseDataSize))!;
        const posedatarightpointer = Deno.UnsafePointer.of<OpenVR.InputPoseActionData>(new ArrayBuffer(poseDataSize))!;

        error = vrInput.GetPoseActionDataRelativeToNow(
            handPoseLeftHandle,
            OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            posedataleftpointer,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );
        const bufferL = new Deno.UnsafePointerView(posedataleftpointer).getArrayBuffer(poseDataSize);
        const poseDataViewL = new DataView(bufferL);
        if (error === OpenVR.InputError.VRInputError_None) {
            [leftPoseData, _] = readBufferStructured(poseDataViewL, EmptyPoseData);

        }
        error = vrInput.GetPoseActionDataRelativeToNow(
            handPoseRightHandle,
            OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            posedatarightpointer,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );
        const bufferR = new Deno.UnsafePointerView(posedatarightpointer).getArrayBuffer(poseDataSize);
        const poseDataViewR = new DataView(bufferR);
        if (error === OpenVR.InputError.VRInputError_None) {
            [rightPoseData, _] = readBufferStructured(poseDataViewR, EmptyPoseData);
        }

        //get trigger data
        const triggerDataSize = 42;
        const triggerLeftPointer = Deno.UnsafePointer.of<OpenVR.InputDigitalActionData>(new ArrayBuffer(triggerDataSize))!;
        const triggerRightPointer = Deno.UnsafePointer.of<OpenVR.InputDigitalActionData>(new ArrayBuffer(triggerDataSize))!;

        error = vrInput.GetDigitalActionData(
            triggerLeftHandle,
            triggerLeftPointer,
            42,
            OpenVR.k_ulInvalidInputValueHandle
        );
        const bufferLX = new Deno.UnsafePointerView(triggerLeftPointer).getArrayBuffer(triggerDataSize);
        const triggerDataViewL = new DataView(bufferLX);
        error = vrInput.GetDigitalActionData(
            triggerRightHandle,
            triggerRightPointer,
            42,
            OpenVR.k_ulInvalidInputValueHandle
        );
        const bufferRX = new Deno.UnsafePointerView(triggerRightPointer).getArrayBuffer(triggerDataSize);
        const triggerDataViewR = new DataView(bufferRX);

        //update overlay pos if trigger is pressed
        if (error === OpenVR.InputError.VRInputError_None) {
            const [leftTriggerData, _] = readBufferStructured(triggerDataViewL, EmptyDigitalActionData);
            const [rightTriggerData, __] = readBufferStructured(triggerDataViewR, EmptyDigitalActionData);

            //console.log(`Left trigger: ${leftTriggerData.bState ? "Pressed" : "Released"}`);
            //console.log(`Right trigger: ${rightTriggerData.bState ? "Pressed" : "Released"}`);

            // Move the overlay if the trigger is pressed
            if (leftTriggerData.bState || rightTriggerData.bState) {
                const activeHandPose = leftTriggerData.bState ? leftPoseData : rightPoseData;
                if (activeHandPose.bActive && activeHandPose.pose.bPoseIsValid) {
                    const newTransform = activeHandPose.pose.mDeviceToAbsoluteTracking;
                    const newTransformPtr = Deno.UnsafePointer.of<OpenVR.HmdMatrix34>(new Float32Array(newTransform.m.flat()));
                    overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding, newTransformPtr);
                }
            }
        }

        await new Promise(resolve => setTimeout(resolve, 2));
    }
}

main().catch(console.error);