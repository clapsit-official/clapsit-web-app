<script lang="ts">
import { useI18n } from "vue-i18n";
import { $availableRoutes } from "~/configs/routes.config";
import colorUtilities from "~/constants/colorUtilities";
export default defineComponent({
  name: "AITranslator",
  setup() {
    return {
      $availableRoutes,
      colorUtilities,
      store: useAITranslator(),
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      count: 0,
      copyToggle: false,
    };
  },
  props: {
    cData: {
      type: Object,
      default: () => {
        return {
          id: null,
          label: null,
          c_key: null,
          date: null,
          key_name: "ai_translator",
        };
      },
    },
  },
  computed: {
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    isLoading() {
      return useQueryManager().loadingList.includes("ai_translator");
    },
    cKey() {
      return this.cData.c_key;
    },
  },
  watch: {
    cData: {
      immediate: true,
      deep: true,
      async handler() {
        if (this.cData.c_key && this.cData.key_name) {
          useAITranslator().environments.c_key = this.cData.c_key;
          useAITranslator().environments.c_id = this.cData.id;
          useAITranslator().environments.key_name = this.cData.key_name;
        }
      },
    },
  },
  methods: {
    handleGenerateShortcut(event: any) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        this.store.generate();
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleGenerateShortcut);
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleGenerateShortcut);
  },
});
</script>

<template>
  <div></div>
</template>
<style lang="scss" scoped>
.desktop-app-container,
.tablet-app-container {
  #assistant-ai_translator {
    display: flex;
    width: 99%;
    justify-content: space-between;
    padding: 0 1rem;
  }
}
.mobile-app-container {
  #assistant-ai_translator {
  }
}
</style>
