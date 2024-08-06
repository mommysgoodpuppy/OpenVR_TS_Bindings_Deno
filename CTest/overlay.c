#include <stdio.h>
#include <stdbool.h>
#include <string.h>
#include <Windows.h>
#include "openvr_capi.h"

// OpenVR function declarations
intptr_t VR_InitInternal(EVRInitError *peError, EVRApplicationType eType);
void VR_ShutdownInternal();
intptr_t VR_GetGenericInterface(const char *pchInterfaceVersion, EVRInitError *peError);

void* CNOVRGetOpenVRFunctionTable(const char* interfacename) {
    EVRInitError e;
    char fnTableName[128];
    snprintf(fnTableName, 128, "FnTable:%s", interfacename);
    void* ret = (void*)VR_GetGenericInterface(fnTableName, &e);
    printf("Getting System FnTable: %s = %p (%d)\n", fnTableName, ret, e);
    if (!ret) {
        exit(1);
    }
    return ret;
}

struct VR_IVROverlay_FnTable* overlay;
struct VR_IVRSystem_FnTable* vr_system;
struct VR_IVRInput_FnTable* vr_input;

int main() {
    EVRInitError ierr;
    uint32_t token = VR_InitInternal(&ierr, EVRApplicationType_VRApplication_Overlay);
    if (!token) {
        printf("Error: Could not initialize OpenVR\n");
        return -1;
    }

    overlay = (struct VR_IVROverlay_FnTable*)CNOVRGetOpenVRFunctionTable(IVROverlay_Version);
    vr_system = (struct VR_IVRSystem_FnTable*)CNOVRGetOpenVRFunctionTable(IVRSystem_Version);
    vr_input = (struct VR_IVRInput_FnTable*)CNOVRGetOpenVRFunctionTable(IVRInput_Version);

    // Set action manifest path
    EVRInputError input_error = vr_input->SetActionManifestPath("C:/GIT/OpenVRDenoBindgen/actions.json");
    if (input_error != EVRInputError_VRInputError_None) {
        printf("Failed to set action manifest path: %d\n", input_error);
        return -1;
    }

    // Get action set handle
    VRActionSetHandle_t action_set_handle;
    input_error = vr_input->GetActionSetHandle("/actions/main", &action_set_handle);
    if (input_error != EVRInputError_VRInputError_None) {
        printf("Failed to get action set handle: %d\n", input_error);
        return -1;
    }

    // Get action handles
    VRActionHandle_t hand_pose_left_handle, hand_pose_right_handle;
    input_error = vr_input->GetActionHandle("/actions/main/in/HandPoseLeft", &hand_pose_left_handle);
    if (input_error != EVRInputError_VRInputError_None) {
        printf("Failed to get left hand action handle: %d\n", input_error);
        return -1;
    }
    input_error = vr_input->GetActionHandle("/actions/main/in/HandPoseRight", &hand_pose_right_handle);
    if (input_error != EVRInputError_VRInputError_None) {
        printf("Failed to get right hand action handle: %d\n", input_error);
        return -1;
    }

    // Create overlay
    VROverlayHandle_t overlay_handle = 0;
    overlay->CreateOverlay("image", "image", &overlay_handle);
    printf("Overlay created with handle: %llu\n", overlay_handle);

    overlay->SetOverlayFromFile(overlay_handle, "C:/GIT/petplay/resources/PetPlay.png");
    overlay->SetOverlayWidthInMeters(overlay_handle, 0.1f);
    overlay->ShowOverlay(overlay_handle);

    // Set initial transform
    HmdMatrix34_t initial_transform = {
        .m = {
            {1.0f, 0.0f, 0.0f, 0.0f},
            {0.0f, 1.0f, 0.0f, 1.0f},
            {0.0f, 0.0f, 1.0f, -2.0f}
        }
    };
    overlay->SetOverlayTransformAbsolute(overlay_handle, ETrackingUniverseOrigin_TrackingUniverseStanding, &initial_transform);

    printf("Overlay created and shown. Press Ctrl+C to exit.\n");

    // Main loop
    while (1) {
        VRActiveActionSet_t active_action_set = {
            .ulActionSet = action_set_handle,
            .ulRestrictedToDevice = k_ulInvalidInputValueHandle,
            .ulSecondaryActionSet = 0,
            .unPadding = 0,
            .nPriority = 0
        };

        input_error = vr_input->UpdateActionState(&active_action_set, sizeof(VRActiveActionSet_t), 1);
        if (input_error != EVRInputError_VRInputError_None) {
            printf("Failed to update action state: %d\n", input_error);
            break;
        }

        InputPoseActionData_t pose_data_left = {0};
        InputPoseActionData_t pose_data_right = {0};

        printf("sizeof InputPoseActionData_t %zu\n", sizeof(struct InputPoseActionData_t));
        printf("sizeof TrackedDevicePose_t %zu\n", sizeof(struct TrackedDevicePose_t));

        input_error = vr_input->GetPoseActionDataRelativeToNow(hand_pose_left_handle, ETrackingUniverseOrigin_TrackingUniverseStanding, 0, &pose_data_left, sizeof(InputPoseActionData_t), k_ulInvalidInputValueHandle);
        /* if (input_error == EVRInputError_VRInputError_None && pose_data_left.bActive && pose_data_left.pose.bPoseIsValid) {
            printf("Left hand position:\n");
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 4; j++) {
                    printf("%f ", pose_data_left.pose.mDeviceToAbsoluteTracking.m[i][j]);
                }
                printf("\n");
            }
        } */

        input_error = vr_input->GetPoseActionDataRelativeToNow(hand_pose_right_handle, ETrackingUniverseOrigin_TrackingUniverseStanding, 0, &pose_data_right, sizeof(InputPoseActionData_t), k_ulInvalidInputValueHandle);
        if (input_error == EVRInputError_VRInputError_None && pose_data_right.bActive && pose_data_right.pose.bPoseIsValid) {
            printf("Right hand position:\n");
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 4; j++) {
                    printf("%f ", pose_data_right.pose.mDeviceToAbsoluteTracking.m[i][j]);
                }
                printf("\n");
            }
        }

        // Uncomment the following line to update overlay position based on left hand
        // overlay->SetOverlayTransformAbsolute(overlay_handle, ETrackingUniverseOrigin_TrackingUniverseStanding, &pose_data_left.pose.mDeviceToAbsoluteTracking);

        Sleep(200); // Sleep for 200ms
    }

    overlay->DestroyOverlay(overlay_handle);
    VR_ShutdownInternal();

    return 0;
}