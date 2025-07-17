<template>
  <div id="clapsit">
    <LoadingScreen/>
    <NuxtLayout v-if="deviceTypeSafe && !isLoading" :class="`${deviceTypeSafe}-app-container`">
      <NuxtPage v-if="readyForView === true && deviceTypeSafe" ref="NuxtPage"/>
      <NotAvailable v-else-if="readyForView === false" />
      <Modal/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts">
import { availableRoutes } from './configs/routes.config';
import { _HealthService } from './services/health.service';
export default {
  async mounted() {
    console.log(`${useCoreAppStore().getBrandDomain} mounted!`);
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
    isLoading() {
      if(!window.location.pathname.includes(availableRoutes.getstarted)) {
        return useQueryManager().loadingList.includes('health') || useQueryManager().loadingList.includes('auth');
      }
      return useQueryManager().loadingList.includes('health')
    },
    readyForView() {
      return this.systemHealth;
    },
  },
  watch: {
    deviceTypeSafe: {
      handler(newVal) {
        if (newVal) {
          const html = document.getElementsByTagName('html')[0];
          html.id = `${newVal}-app`;
        }
      },
      immediate: true,
    }
  }
}
</script>
