<script lang="ts">
import type {
  UserAssistantHistoryItem,
  UserAssistantKeyItem,
} from "~/types/assistants.types";

export default defineComponent({
  name: "AssistantHistories",
  props: {
    call: {
      type: String as PropType<"recently" | "saved">,
      default: () => null,
    },
  },
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    isActive() {
      return (
        !!useAssistant().getSavedAssistantKeyHistory.length ||
        !!useAssistant().getRecentlyAssistantKeyHistory.length
      );
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
        item.key_name,
        item.c_key,
        item.c_id,
        true
      );
    },
    getSidebarNestItem(item: UserAssistantHistoryItem) {
      let itemTitle: string | undefined;
      if (item.key_name === "json_generator") {
        itemTitle = item.input.message;
      } else if (item.key_name === "ai_translator") {
        if (item.input.data && item.output.result)
          itemTitle = item.output.result.output.result;
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
  <div id="assistant-histories_component" v-if="isActive">
    <section
      id="favorites_assistant-histories"
      class="bordered"
      v-if="
        useAssistant().getSavedAssistantKeyHistory.length &&
        !!(call === 'saved' || call === null)
      "
    >
      <div class="header">
        <div class="icon-area">
          <icon-component icon-name="star" icon-size="1.5rem" />
        </div>
        <h3>{{ $t("favorites") }}</h3>
      </div>
      <span class="divider"></span>
      <ul class="list">
        <li
          v-for="(item, index) in useAssistant().getSavedAssistantKeyHistory"
          :key="index"
          style="margin: 1rem 0; gap: 10px"
          class="hover-effect flex-row-start-center"
          @click.prevent="getAssistantHistory(item)"
          :title="formatDateForTitle(item.date)"
        >
          <div class="flex-row-center" style="gap: 0.5rem; width: 100%">
            <div class="icon-area">
              <icon-component icon-name="star" icon-size="1rem" fill />
            </div>
            <span class="ellipsis" v-if="getSidebarNestItem(item)">
              {{ getSidebarNestItem(item) }}
            </span>
            <span class="ellipsis" v-else>
              <i style="opacity: 0.5"> {{ $t("no_message") }}</i>
            </span>
          </div>
        </li>
      </ul>
    </section>
    <br v-if="call === null" />
    <section
      id="last_assistant-histories"
      class="bordered"
      v-if="
        useAssistant().getRecentlyAssistantKeyHistory.length &&
        !!(call === 'recently' || call === null)
      "
    >
      <div class="header">
        <div class="icon-area">
          <icon-component icon-name="clock_arrow" icon-size="1.5rem" />
        </div>
        <h3>{{ $t("recently") }}</h3>
      </div>
      <span class="divider"></span>
      <ul class="list">
        <li
          v-for="(item, index) in useAssistant().getRecentlyAssistantKeyHistory"
          :key="index"
          style="margin: 1rem 0; gap: 10px"
          class="hover-effect flex-row-start-center"
          @click.prevent="getAssistantHistory(item)"
          :title="formatDateForTitle(item.date)"
        >
          <div class="flex-row-center" style="gap: 0.5rem; width: 100%">
            <strong> [{{ formatDateString(item.date) }}] </strong>
            <span class="ellipsis" v-if="getSidebarNestItem(item)">
              {{ getSidebarNestItem(item) }}
            </span>
            <span class="ellipsis" v-else>
              <i style="opacity: 0.5"> {{ $t("no_message") }}</i>
            </span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.desktop-app-container,
.mobile-app-container,
.tablet-app-container {
  #assistant-histories_component {
    min-height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    font-size: 0.9rem;
    width: 100%;
    margin: .5rem;
    gap: 1rem;
    section {
      width: 87%;
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      border-radius: .7rem;
      background-color: colors.$surfaceColor;
      padding: 2rem 2rem 1rem 2rem;
      .header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 1rem;
      }
      ul {
        max-height: 15rem;
        overflow-y: auto;
        opacity: 0.7;
      }
    }
  }
}
.desktop-app-container {
  #assistant-histories_component {
    section {
      width: 90%;
    }
  }
}
.tablet-app-container {
  #assistant-histories_component {
    section {
      width: 83%;
    }
  }
}


</style>
