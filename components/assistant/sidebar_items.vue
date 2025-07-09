<script lang="ts">
import colors from "~/constants/colorUtilities";
import type {
  UserAssistantHistoryItem,
  UserAssistantKeyItem,
} from "~/types/assistants.types";

export default defineComponent({
  name: "AssistantSidebarItems",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
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
      await useAssistant().goToAssistantItem(
        useAssistant().getCurrentAssistantStore.environments.key_name,
        item.c_key,
        item.c_id,
        false
      );
    },
    getSidebarNestItem(item: any) {
      let itemTitle: string | undefined;
      if (this.currentRoute === "json_generator") {
        itemTitle = item.input.message;
      } else if (this.currentRoute === "ai_translator") {
        if (item.input.data && item.output.result) itemTitle = item.output.result.output.result;
        else itemTitle = undefined;
      } else {
        itemTitle = this.$t("no_message");
      }
      return revertEscapeSequences(capitalizeFirstLetter(itemTitle)) || null;
    },
  },
});
</script>
<template>
  <section id="sidebar_history-area">
    <div
      v-if="currentRoute === 'home'"
      v-for="(item, index) in userAssistantKeys"
      style="margin: 1rem 0"
      :key="item.id"
    >
      <div
        class="flex-row-start-center"
        style="gap: 5px"
        @click.prevent="getAssistantItem(item)"
        :title="`${formatDateForTitle(item.date)}: ${capitalizeFirstLetter(revertEscapeSequences(item.label)) || $t(`assistants.${item.key_name}.label`)}`"
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
            capitalizeFirstLetter(revertEscapeSequences(item.label)) || $t(`assistants.${item.key_name}.label`)
          }}
        </span>
        <div class="flex-row-center" @click.stop style="gap: 0.5rem">
          <icon-component
            icon-name="trash"
            icon-size="18px"
            class="icon-area-2"
            :color="colorUtilities.$errorColor"
            :title="$t('buttons.delete')"
            @click="useAssistant().deleteKeyById(item.id)"
          />
          <icon-component
            :fill="item.save"
            :class="{ 'icon-area-2': !item.save }"
            @click="useAssistant().saveKeyById(item.id, !item.save)"
            :title="$t('buttons.pin')"
            icon-name="thumbtack"
            icon-size="18px"
          />
        </div>
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
      <div class="flex-row-center" style="gap: 0.5rem; width: 100%">
        <strong> [{{ formatDateString(item.date) }}] </strong>
        <span
          :class="{ highlight: item.c_id === cId || (!cId && index === 0) }"
          class="ellipsis"
          v-if="getSidebarNestItem(item)"
        >
          {{ getSidebarNestItem(item) }}
        </span>
        <i v-else style="opacity: 0.5;"> {{ $t("no_message") }}</i>
        <div class="flex-row-center" @click.stop style="gap: 0.5rem">
          <icon-component
            icon-name="trash"
            icon-size="18px"
            :color="colorUtilities.$errorColor"
            class="icon-area-2"
            @click="useAssistant().deleteHistoryByConversationId(item.c_id)"
            :title="$t('buttons.delete')"
          />
          <icon-component
            :fill="item.save"
            :class="{ 'icon-area-2': !item.save }"
            @click="
              useAssistant().saveHistoryByConversationId(item.c_id, !item.save)
            "
            :title="!item.save ? $t('buttons.add_to_favorites') : $t('buttons.remove_from_favorites')"
            icon-name="star"
            icon-size="18px"
          />
        </div>
      </div>
    </div>
    <div v-if="currentRoute === 'home' && !userAssistantKeys.length">
      <Text locale="there_is_no_item_yet"/>
    </div>
    <div v-if="currentRoute !== 'home' && !userAssistantKeyHistory.length">
      <Text locale="there_is_no_item_yet"/>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section#sidebar_history-area {
  height: 90%;
  font-size: .9rem;
  width: 100%;
  user-select: none;
  .icon-area {
    background-color: colors.$surfaceColor2;
    border-radius: 50%;
    transition-duration: 0.3s;
  }
  span.highlight {
    opacity: 0.5;
  }
  & > div:hover {
    cursor: pointer;
    .icon-area {
      background-color: colors.$whiteColor;
      & > * {
        @include animations.animate-hue-rotate(1s);
      }
    }
    .icon-area-2 {
      display: flex;
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
    .icon-area-2 {
      display: none;
    }
  }
}
</style>
