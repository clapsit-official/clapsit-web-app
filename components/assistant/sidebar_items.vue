<script lang="ts">
import { nodeModuleNameResolver } from "typescript";
import colorUtilities from "~/constants/colorUtilities";
import type {
  UserAssistantHistoryItem,
  UserAssistantKeyItem,
} from "~/types/assistants.types";

export default defineComponent({
  name: "AssistantSidebarItems",
  setup() {
    return {
      colorUtilities,
      $t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    userAssistantKeys() {
      return useAssistant().getUserAssistantKeys;
    },
    userAssistantKeyHistory() {
      return useAssistant().getAssistantKeyHistory;
    },
    currentRoute() {
      return useRouteManagement().config.key;
    },
    cId() {
      const { c_id } = useRoute().query;
      if (c_id) {
        return Number(c_id);
      }
      return null;
    },
  },
  methods: {
    formatDateString,
    formatDateForTitle(date: Date) {
      const formated = formatDate(date);
      return `${formated.day}/${formated.month}/${formated.year} - ${formated.hours}:${formated.minutes}`;
    },
    async getAssistantItem(item: UserAssistantKeyItem) {
      await useAssistant().goToAssistantItem(item.key_name, item.c_key);
    },
    async getAssistantHistory(item: UserAssistantHistoryItem) {
      await useAssistant().goToAssistantItem(useAssistant().getCurrentAssistantStore.environments.key_name, item.c_key, item.c_id);
    },
    getSidebarNestItem(item: any) {
      let itemTitle: string | undefined;
      if(this.currentRoute === "json_generator") {
        itemTitle = item.input.message;
      } else if(this.currentRoute === "ai_translator") {
        if (item.input.data) itemTitle = item.input.data.input
        else itemTitle = undefined;
      } else {
        itemTitle = '--';
      }
      return capitalizeFirstLetter(itemTitle) || null;
    },
  },
});
</script>
<template>
  <section id="sidebar_history-area">
    <div
      v-if="currentRoute === 'home'"
      v-for="(item, index) in userAssistantKeys"
      style="margin: 0.8rem 0"
      :key="item.id"
    >
      <div
        class="flex-row-start-center"
        style="gap: 5px"
        @click.prevent="getAssistantItem(item)"
        :title="formatDateForTitle(item.date)"
      >
        <div class="icon-area flex-row-center">
          <icon-component
            fill
            :icon-name="item.key_name"
            icon-size="18px"
            :color="colorUtilities.$primaryColor"
          />
        </div>
        <span class="ellipsis">
          {{
            capitalizeFirstLetter(item.label) ||
            $t(`assistants.${item.key_name}.label`)
          }}
        </span>
      </div>
    </div>
    <div
      v-else
      v-for="(item, index) in userAssistantKeyHistory"
      :key="index"
      style="margin: 1rem 0; gap: 10px"
      class="hover-effect flex-row-start-center"
      @click.prevent="getAssistantHistory(item)"
      :title="formatDateForTitle(item.date)"
    >
      <div class="flex-row-center" style="gap: 0.5rem">
        <strong> [{{ formatDateString(item.date) }}] </strong>
        <span class="ellipsis" v-if="getSidebarNestItem(item)">
          {{ getSidebarNestItem(item) }}
        </span>
        <i v-else> {{ $t("no_message") }}</i>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section#sidebar_history-area {
  height: 90%;
  font-size: 0.75rem;
  width: 100%;
  user-select: none;
  .icon-area {
    background-color: colors.$surfaceColor2;
    border-radius: 50%;
    transition-duration: 0.3s;
  }
  & > div:hover {
    cursor: pointer;
    .icon-area {
      background-color: colors.$whiteColor;
      & > * {
        @include animations.animate-hue-rotate(1s);
      }
    }
  }
}
.desktop-app-container {
  section#sidebar_history-area {
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    &:hover {
      overflow-y: auto !important;
    }
  }
}
</style>
