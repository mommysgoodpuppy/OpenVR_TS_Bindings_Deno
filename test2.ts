import * as OpenVR from "./openvr/FULL.ts";
let _void = null

const manifestPath = Deno.realPathSync("c:/GIT/OpenVRDenoBindgen/actions.json");

function GetControllerPositions(pVRInput: OpenVR.IVRInput, poseAction: OpenVR.VRActionHandle_t): OpenVR.InputPoseActionData_t | null {
    // Update action state
    let actionSet: OpenVR.VRActiveActionSet_t = {
        ulActionSet: 0n, // Your action set handle
        ulRestrictedToDevice: OpenVR.k_ulInvalidInputValueHandle,
        ulSecondaryActionSet: 0n,
        unPadding: 0,
        nPriority: 0
    };

    let error
    const actionSets = [actionSet];

    [error] = pVRInput.UpdateActionState(actionSets, OpenVR.VRActiveActionSet_t.byteLength, actionSets.length);
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

    function stringToPointer(str: string): Deno.PointerValue {
        const encoder = new TextEncoder();
        const view = encoder.encode(str + '\0');
        return Deno.UnsafePointer.of(view);
    }
    let error

    const initerror = OpenVR.InitError.VRInitError_None
    const initerrorptr = Deno.UnsafePointer.of<OpenVR.InitError>(new Int32Array(1))
    if (initerrorptr === null) throw new Error("Invalid pointer");
    const TypeSafeINITERRPTR: OpenVR.InitErrorPTRType = initerrorptr


    OpenVR.VR_InitInternal(initerrorptr, OpenVR.ApplicationType.VRApplication_Overlay);


    const overlayPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVROverlay_Version), TypeSafeINITERRPTR);
    const IVRPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRSystem_Version), TypeSafeINITERRPTR);
    const IVRInputPtr = OpenVR.VR_GetGenericInterface(stringToPointer(OpenVR.IVRInput_Version), TypeSafeINITERRPTR);


    const overlay = new OpenVR.IVROverlay(overlayPtr);
    const vrSystem = new OpenVR.IVRSystem(IVRPtr);
    const vrInput = new OpenVR.IVRInput(IVRInputPtr);

    /* error = vrInput.SetActionManifestPath(manifestPath);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to set action manifest path: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to set action manifest path");
    } */



    /* let actionSetHandle: Deno.PointerValue<OpenVR.ActionHandle> = Deno.UnsafePointer.of(new BigUint64Array([0n]))
    error = vrInput.GetActionHandle("/actions/main", actionSetHandle);
    if (error !== OpenVR.InputError.VRInputError_None) {
        console.error(`Failed to get pose action: ${OpenVR.InputError[error]}`);
        throw new Error("Failed to set action manifest path");
    } */

    
    let overlayhandle: OpenVR.OverlayHandle = 0n;
    const overlayhandleBigUintArray = new BigUint64Array([overlayhandle]);

    const overlayhandlePTR = Deno.UnsafePointer.of<OpenVR.OverlayHandle>(overlayhandleBigUintArray)
    ??(()=>{throw new Error("Invalid pointer")})();
    
    overlayhandle = new Deno.UnsafePointerView(overlayhandlePTR).getBigUint64();
    console.log(`${overlayhandle}`);



    if (overlayhandlePTR === null) throw new Error("Invalid pointer");
    error = overlay.CreateOverlay("image", "image", overlayhandlePTR);

    console.log(`Overlay created with handle: ${overlayhandlePTR}`);

    type a = Deno.NativeBigIntType

    //uint64_t overlayHandle
    const overlayhandleXX = Deno.UnsafePointerView.getArrayBuffer(overlayhandlePTR, 9) as OpenVR.OverlayHandle;
    console.log(`Overlay created with handle: ${overlayhandle}`);

    error = overlay.SetOverlayFromFile(overlayhandle, "C:/GIT/petplay/resources/PetPlay.png");
    error = overlay.SetOverlayWidthInMeters(overlayhandle, 1);
    error = overlay.ShowOverlay(overlayhandle);

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