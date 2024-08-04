import * as OpenVR from "./openvr/FULL.ts";
import {fillBuffer, readBufferStructured } from "./openvr_defs.ts";
import { P } from "./pointers.ts";

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/actions.json");

function stringToPointer(str: string): Deno.PointerValue {
    const encoder = new TextEncoder();
    const view = encoder.encode(str + '\0');
    return Deno.UnsafePointer.of(view);
}

async function main() {

    //#region init
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


    console.log(EmptyPoseData)
    const empty34: OpenVR.HmdMatrix34 = {
        m: [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    }

    const InputPoseActionDataTemplate: Record<string, StructField> = {
        bActive: { type: 'boolean' },
        activeOrigin: { type: 'uint64' },
        pose: {
            type: 'object',
            objectTemplate: {
                mDeviceToAbsoluteTracking: {
                    type: 'array',
                    arrayType: { type: 'float32' },
                    arrayDimensions: [3, 4]
                },
                vVelocity: {
                    type: 'array',
                    arrayType: { type: 'float32' },
                    arrayDimensions: [3]
                },
                vAngularVelocity: {
                    type: 'array',
                    arrayType: { type: 'float32' },
                    arrayDimensions: [3]
                },
                eTrackingResult: { type: 'int32' },
                bPoseIsValid: { type: 'boolean' },
                bDeviceIsConnected: { type: 'boolean' }
            }
        }
    };


    //#region Main loop
    let poseData: OpenVR.InputPoseActionData = EmptyPoseData;
    console.log(EmptyPoseData)
    while (true) {


        const activeActionSet: OpenVR.ActiveActionSet = {
            ulActionSet: actionSetHandle,
            ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
            ulSecondaryActionSet: 0n,
            unPadding: 0,
            nPriority: 0
        };

        const activeActionSetBuffer = new ArrayBuffer(32); // Adjust size if needed
        const activeActionSetView = new DataView(activeActionSetBuffer);

        activeActionSetView.setBigUint64(0, activeActionSet.ulActionSet, true);
        activeActionSetView.setBigUint64(8, activeActionSet.ulRestrictedToDevice, true);
        activeActionSetView.setBigUint64(16, activeActionSet.ulSecondaryActionSet, true);
        activeActionSetView.setUint32(24, activeActionSet.unPadding, true);
        activeActionSetView.setInt32(28, activeActionSet.nPriority, true);

        // Create a pointer to the buffer
        const activeActionSetPtr = Deno.UnsafePointer.of<OpenVR.ActiveActionSet>(activeActionSetBuffer)!;


        error = vrInput.UpdateActionState(activeActionSetPtr, 32, 1);
        if (error !== OpenVR.InputError.VRInputError_None) {
            console.error(`Failed to update action state: ${OpenVR.InputError[error]}`);
            throw new Error("Failed to update action state");
        }

        const poseDataSize = 96; // Adjust if needed
        const poseDataBufferR = new ArrayBuffer(poseDataSize);
        const poseDataBufferL = new ArrayBuffer(poseDataSize);
        const poseDataViewR = new DataView(poseDataBufferR);
        const poseDataViewL = new DataView(poseDataBufferL);
        fillBuffer(poseDataViewR, EmptyPoseData);
        fillBuffer(poseDataViewL, EmptyPoseData);

        const posedataleftpointer = Deno.UnsafePointer.of<OpenVR.InputPoseActionData>(poseDataBufferL)!;
        const posedatarightpointer = Deno.UnsafePointer.of<OpenVR.InputPoseActionData>(poseDataBufferR)!;

        //[rightEmptyData, _1] = readBuffer(poseDataViewR, EmptyPoseData);

        error = vrInput.GetPoseActionDataRelativeToNow(
            handPoseLeftHandle,
            OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            posedataleftpointer,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );
        error = vrInput.GetPoseActionDataRelativeToNow(
            handPoseRightHandle,
            OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding,
            0,
            posedatarightpointer,
            96,
            OpenVR.k_ulInvalidInputValueHandle
        );

        /* if (error === OpenVR.InputError.VRInputError_None) {
            const rightPoseData = readInputPoseActionData(poseDataViewR);
            console.log(rightPoseData)
        } */


        if (error === OpenVR.InputError.VRInputError_None) {
            const [rightPoseData, _] = readBufferStructured(poseDataViewR, EmptyPoseData);
            if (rightPoseData.bActive && rightPoseData.pose.bPoseIsValid) {
                console.log(rightPoseData)
                console.log("Right hand position:");
                console.log(JSON.stringify(rightPoseData.pose.mDeviceToAbsoluteTracking, null, 2));
            }
        }



        //overlay.SetOverlayTransformAbsolute(overlayHandle, OpenVR.TrackingUniverseOrigin.TrackingUniverseStanding, hmdMatrix34Ptr);



        await new Promise(resolve => setTimeout(resolve, 200));
    }
}

main().catch(console.error);