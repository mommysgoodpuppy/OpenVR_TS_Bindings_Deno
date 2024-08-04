#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>

#ifndef EXTERN_C
#ifdef __cplusplus
#define EXTERN_C extern "C"
#else
#define EXTERN_C
#endif
#endif

#include "openvr_capi.h"

// OpenVR function declarations
intptr_t VR_InitInternal(EVRInitError *peError, EVRApplicationType eType);
void VR_ShutdownInternal();
intptr_t VR_GetGenericInterface(const char *pchInterfaceVersion, EVRInitError *peError);

// Function to get OpenVR function table
void *CNOVRGetOpenVRFunctionTable(const char *interfacename)
{
    EVRInitError e;
    char fnTableName[128];
    snprintf(fnTableName, sizeof(fnTableName), "FnTable:%s", interfacename);
    void *ret = (void *)VR_GetGenericInterface(fnTableName, &e);
    printf("Getting System FnTable: %s = %p (%d)\n", fnTableName, ret, e);
    if (!ret)
    {
        printf("Error getting function table: %s\n", VR_GetVRInitErrorAsEnglishDescription(e));
        exit(1);
    }
    return ret;
}

// OpenVR interfaces
struct VR_IVRSystem_FnTable *oSystem;
struct VR_IVRInput_FnTable *oInput;

void PrintMatrix34(const struct HmdMatrix34_t *matrix)
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            printf("%f ", matrix->m[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

int main()
{
    EVRInitError ierr;
    uint32_t token = VR_InitInternal(&ierr, EVRApplicationType_VRApplication_Background);
    if (!token)
    {
        printf("Error: Could not initialize OpenVR: %s\n", VR_GetVRInitErrorAsEnglishDescription(ierr));
        return -5;
    }

    oSystem = CNOVRGetOpenVRFunctionTable(IVRSystem_Version);
    oInput = CNOVRGetOpenVRFunctionTable(IVRInput_Version);

    // Set action manifest
    EVRInputError inputError = oInput->SetActionManifestPath("c:/GIT/OpenVRDenoBindgen/actions.json");
    if (inputError != EVRInputError_VRInputError_None)
    {
        printf("Error setting action manifest: %d\n", inputError);
        return -1;
    }

    // Get action set handle
    VRActionSetHandle_t actionSetHandle = k_ulInvalidActionSetHandle;
    inputError = oInput->GetActionSetHandle("/actions/main", &actionSetHandle);
    if (inputError != EVRInputError_VRInputError_None)
    {
        printf("Error getting action set handle: %d\n", inputError);
        return -1;
    }

    // Get action handles
    VRActionHandle_t handPoseLeftHandle = k_ulInvalidActionHandle;
    VRActionHandle_t handPoseRightHandle = k_ulInvalidActionHandle;
    VRActionHandle_t triggerLeftHandle = k_ulInvalidActionHandle;
    VRActionHandle_t triggerRightHandle = k_ulInvalidActionHandle;

    oInput->GetActionHandle("/actions/main/in/HandPoseLeft", &handPoseLeftHandle);
    oInput->GetActionHandle("/actions/main/in/HandPoseRight", &handPoseRightHandle);
    oInput->GetActionHandle("/actions/main/in/TriggerLeft", &triggerLeftHandle);
    oInput->GetActionHandle("/actions/main/in/TriggerRight", &triggerRightHandle);

    printf("Starting main loop. Press Ctrl+C to exit.\n");

    while (true)
    {
        // Update action state
        VRActiveActionSet_t activeActionSet = {0};
        activeActionSet.ulActionSet = actionSetHandle;
        inputError = oInput->UpdateActionState(&activeActionSet, sizeof(VRActiveActionSet_t), 1);
        if (inputError != EVRInputError_VRInputError_None)
        {
            printf("Error updating action state: %d\n", inputError);
            continue;
        }

        // Get pose data
        InputPoseActionData_t poseDataLeft = {0};
        InputPoseActionData_t poseDataRight = {0};
        printf("handle = %d\n", handPoseLeftHandle);
        printf("sizeof = %d\n", sizeof(InputPoseActionData_t));
        printf("invalid = %d\n", k_ulInvalidInputValueHandle);
        printf("posedata = %d\n", &poseDataLeft);
        oInput->GetPoseActionDataRelativeToNow(handPoseLeftHandle, ETrackingUniverseOrigin_TrackingUniverseStanding, 0, &poseDataLeft, sizeof(InputPoseActionData_t), k_ulInvalidInputValueHandle);
        oInput->GetPoseActionDataRelativeToNow(handPoseRightHandle, ETrackingUniverseOrigin_TrackingUniverseStanding, 0, &poseDataRight, sizeof(InputPoseActionData_t), k_ulInvalidInputValueHandle);

        if (poseDataLeft.bActive && poseDataLeft.pose.bPoseIsValid)
        {
            printf("Left hand position:\n");
            PrintMatrix34(&poseDataLeft.pose.mDeviceToAbsoluteTracking);
        }

        if (poseDataRight.bActive && poseDataRight.pose.bPoseIsValid)
        {
            printf("Right hand position:\n");
            PrintMatrix34(&poseDataRight.pose.mDeviceToAbsoluteTracking);
        }

        // Get trigger states
        InputDigitalActionData_t triggerDataLeft = {0};
        InputDigitalActionData_t triggerDataRight = {0};

        oInput->GetDigitalActionData(triggerLeftHandle, &triggerDataLeft, sizeof(InputDigitalActionData_t), k_ulInvalidInputValueHandle);
        oInput->GetDigitalActionData(triggerRightHandle, &triggerDataRight, sizeof(InputDigitalActionData_t), k_ulInvalidInputValueHandle);

        printf("Left trigger: %s\n", triggerDataLeft.bState ? "Pressed" : "Released");
        printf("Right trigger: %s\n", triggerDataRight.bState ? "Pressed" : "Released");

        Sleep(100); // Sleep for 100ms
    }

    VR_ShutdownInternal();
    return 0;
}