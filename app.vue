<template>
  <div v-if="readyForView === true">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div v-else-if="readyForView === false">
    <NotAvailable/>
  </div>
  <div v-else>
    <LoadingScreen/>
  </div>
</template>
<script lang="ts">
import { _HealthService } from './services/health';
export default {
  async mounted() {
    console.log('App mounted!');
    try {
      const {success} = await _HealthService.get();
      this.readyForView = success;
    } catch (error: any) {
      this.readyForView = false;
    }
  },
  data(){
    return {
      readyForView: null as Boolean | null
    }
  }
}
</script>