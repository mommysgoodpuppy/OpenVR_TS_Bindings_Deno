#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include "openvr_capi.h"

// Declare these functions which might not be in your header
intptr_t VR_InitInternal(EVRInitError *peError, EVRApplicationType eType);
void VR_ShutdownInternal();
intptr_t VR_GetGenericInterface(const char *pchInterfaceVersion, EVRInitError *peError);

void check_error(int line, EVRInitError error) {
    if (error != EVRInitError_VRInitError_None) {
        printf("Error at line %d: %s\n", line, VR_GetVRInitErrorAsEnglishDescription(error));
        exit(1);
    }
}

int main() {
    EVRInitError error;
    intptr_t token = VR_InitInternal(&error, EVRApplicationType_VRApplication_Overlay);
    check_error(__LINE__, error);
    if (token == 0) {
        printf("Failed to initialize OpenVR\n");
        return 1;
    }

    printf("OpenVR initialized successfully\n");

    printf("IVROverlay_Version: %s\n", IVROverlay_Version);

    char fnTableName[128];
    snprintf(fnTableName, 128, "FnTable:%s", IVROverlay_Version);
    printf("Constructed fnTableName: %s\n", fnTableName);
    
    struct VR_IVROverlay_FnTable* overlay = (struct VR_IVROverlay_FnTable*)VR_GetGenericInterface(fnTableName, &error);
    check_error(__LINE__, error);
    if (overlay == NULL) {
        printf("Failed to get IVROverlay interface\n");
        VR_ShutdownInternal();
        return 1;
    }

    printf("IVROverlay interface acquired\n");

    // Check if specific functions in the overlay interface are NULL
    if (overlay->CreateOverlay == NULL) {
        printf("CreateOverlay function is NULL\n");
        VR_ShutdownInternal();
        return 1;
    }

    printf("CreateOverlay function is available\n");

    VROverlayHandle_t handle = 0;
    EVROverlayError overlayError = overlay->CreateOverlay("test_overlay", "Test Overlay", &handle);
    if (overlayError != EVROverlayError_VROverlayError_None) {
        printf("Failed to create overlay: %d\n", overlayError);
        VR_ShutdownInternal();
        return 1;
    }

    printf("Overlay created successfully. Handle: %llu\n", handle);

    // At this point, we've successfully created an overlay. Let's try to get its width.
    float width = 0.0f;
    overlayError = overlay->GetOverlayWidthInMeters(handle, &width);
    if (overlayError != EVROverlayError_VROverlayError_None) {
        printf("Failed to get overlay width: %d\n", overlayError);
    } else {
        printf("Current overlay width: %f meters\n", width);
    }

    printf("Entering main loop. Press Ctrl+C to exit.\n");
    while (true) {
        // Main loop
        // You might want to add a small delay here to prevent busy-waiting
    }

    // We never reach here in this example, but in a real application, you'd want to clean up:
    // overlay->DestroyOverlay(handle);
    // VR_ShutdownInternal();

    return 0;
}