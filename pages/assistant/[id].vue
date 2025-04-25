<script lang="ts">
import type { AvailableAssistants } from "~/types/assistants.types";
import { $availableRoutes } from "~/configs/routes.config";
import Loading from "~/components/Loading.vue";

export default {
  name: "AssistantContainer",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    cKey() {
      const { c_key } = useRoute().query;
      if (c_key) {
        return c_key.toString();
      }
      return null;
    },
    cId() {
      const { c_id } = useRoute().query;
      if (c_id) {
        return Number(c_id);
      }
      return null
    },
    keyName(): AvailableAssistants | undefined {
      const { id } = useRoute().params;
      if (id) {
        if (this.assistantComponents[id as AvailableAssistants] !== undefined) {
          return id as AvailableAssistants;
        }
      }
      useRouter().push($availableRoutes.home);
    },
    assistantComponents(): { [key in AvailableAssistants]: any } {
      return {
        json_generator: defineAsyncComponent({
          loader: async () => {
            await updateAssistantHistory(this.cKey);
            return import('@/components/assistant/json_generator.vue')
          },
          loadingComponent: Loading
        }),
        ai_translator: defineAsyncComponent({
          loader: async () => {
            await updateAssistantHistory(this.cKey);
            return import('@/components/assistant/ai_translator.vue')
          },
          loadingComponent: Loading
        }),
      };
    },
    currentComponent() {
      return this.assistantComponents[this.keyName!];
    },
    currentCKeyData() {
      return useAssistant().getUserAssistantKeys.find(
        (item) => item.c_key === this.cKey
      );
    },
  },
  beforeUnmount() {
    useAssistant().resetAssistantKeyHistory();
  },
  watch: {
    cId: {
      immediate: true,
      deep: true,
      handler(val) {
        useAssistant().goToAssistantHistoryById(val);
      },
    }
  }
};
</script>
<template>
  <div id="assistant_provider-page">
    <component :is="currentComponent" :cData="currentCKeyData" />
  </div>
</template>
<style lang="scss" scoped>
.desktop-app-container,
.tablet-app-container,
.mobile-app-container {
  #assistant_provider-page {
    width: 100%;
    height: 100%;
    display: flex;
    @include animations.fadeIn(0.1s);
  }
}
</style>
