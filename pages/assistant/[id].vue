<script lang="ts">
import type { AvailableAssistants } from "~/types/assistants.types";
import json_generator from "~/components/assistant/json_generator.vue";
import ai_translator from "~/components/assistant/ai_translator.vue";
import { $availableRoutes } from "~/configs/routes.config";

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
        return c_key;
      }
      useRouter().push($availableRoutes.home);
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
        json_generator,
        ai_translator,
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
.mobile-app-container {
  #assistant_provider-page {
    width: 98%;
    height: 97%;
    display: flex;
    @include animations.fadeIn(0.1s);
  }
}
.tablet-app-container{
    #assistant_provider-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    @include animations.fadeIn(0.1s);
  }

}
</style>
