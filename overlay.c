#include <stdio.h>
#include <stdbool.h>
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

int main() {
    EVRInitError ierr;
    uint32_t token = VR_InitInternal(&ierr, EVRApplicationType_VRApplication_Overlay);
    if (!token) {
        printf("Error: Could not initialize OpenVR\n");
        return -1;
    }

    struct VR_IVROverlay_FnTable* overlay = (struct VR_IVROverlay_FnTable*)CNOVRGetOpenVRFunctionTable(IVROverlay_Version);

    printf("Function pointer for FindOverlay: %p\n", (void*)overlay->FindOverlay);
    printf("Function pointer for CreateOverlay: %p\n", (void*)overlay->CreateOverlay);

    overlay = CNOVRGetOpenVRFunctionTable(IVROverlay_Version);

    VROverlayHandle_t overlayHandle = 0;
    printf("Overlay not yet: %llu\n", overlayHandle);
    overlay->CreateOverlay("minimal-overlay", "Minimal Overlay", &overlayHandle);
    printf("Overlay created with handle: %llu\n", overlayHandle);
    overlay->SetOverlayWidthInMeters(overlayHandle, 0.5f);
    overlay->ShowOverlay(overlayHandle);

    // Simple static content for the overlay
    uint8_t buffer[16 * 16 * 4] = {0};
    for (int i = 0; i < 16 * 16; i++) {
        buffer[i * 4] = 255;  // Red
        buffer[i * 4 + 3] = 255;  // Alpha
    }
    overlay->SetOverlayRaw(overlayHandle, buffer, 16, 16, 4);

    printf("Overlay created and displayed. Press Enter to exit...\n");
    getchar();

    overlay->DestroyOverlay(overlayHandle);
    VR_ShutdownInternal();

    return 0;
}