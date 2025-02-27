import { ref, onMounted, onUnmounted } from 'vue';
import deviceDetection from "~/utils/device-detection";

export function useWindowSize() {
    const width = ref(process.client ? window.innerWidth : 0);
    const height = ref(process.client ? window.innerHeight : 0);

    function updateSize() {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    onMounted(() => {
        if (process.client) {
            window.addEventListener('resize', updateSize);
        }
    });

    onUnmounted(() => {
        if (process.client) {
            window.removeEventListener('resize', updateSize);
        }
    });

    return { width, height };
}

export function useDeviceDetector() {
    const width = ref(process.client ? window.innerWidth : 0);
    const deviceType: any = ref(deviceDetection(width.value));

    function updateSize() {
        width.value = window.innerWidth;
        deviceType.value = deviceDetection(width.value);
    }

    onMounted(() => {
        if (process.client) {
            window.addEventListener('resize', updateSize);
        }
    });

    onUnmounted(() => {
        if (process.client) {
            window.removeEventListener('resize', updateSize);
        }
    });

    return {deviceType}
}