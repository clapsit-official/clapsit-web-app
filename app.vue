<template>
  <NuxtLayout v-if="readyForView === true && deviceTypeSafe">
    <NuxtPage />
  </NuxtLayout>
  <NotAvailable v-else-if="readyForView === false" />
  <LoadingScreen v-else />
</template>
<script lang="ts">
import { _HealthService } from './services/health';
export default {
  async mounted(){ 
    await useCoreAppStore().checkHealth();
    console.log(`${useCoreAppStore().getBrandDomain} mounted!`) 
  },
  setup() {
    const { deviceType } = useDeviceDetector();
    const deviceTypeSafe = computed(() => useCoreAppStore().setDeviceType(deviceType.value || null));
    return {
      deviceTypeSafe
    }
  },
  computed: {
    systemHealth: () => useCoreAppStore().health,
    deviceType: () => useCoreAppStore().getDeviceType,
    readyForView() {
      return this.systemHealth;
    },
  },
}
</script>
