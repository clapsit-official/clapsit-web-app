<script lang="ts">
import { $availableRoutes } from "~/configs/routes.config";
import colors from "~/constants/colorUtilities";
export default defineComponent({
  name: "MainLayoutSidebar",
  emits: ["foldAction"],
  setup() {
    return {
      availableRoutes: $availableRoutes,
      $t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
  },
  props: {
    fold: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
<template>
  <div id="sidebar">
    <div>
      <section v-if="fold" id="sidebar_logo-area" class="flex-row-between-center">
        <Logo :type="3" size="35px" />
      </section>
      <section v-else id="sidebar_logo-area" class="flex-row-between-center">
        <Logo :type="1" size="150px" />
      </section>
      <section
        :class="{ 'visible': !fold, 'hidden': fold }"
        id="sidebar_main-tools"
        class="flex-row-between-center">
        <div
          :class="{ 'visible': !fold, 'hidden': fold }"
          v-if="useRoute().path !== availableRoutes.home"
          id="fold-sidebar"
          class="flex-row-center"
          style="gap: 0.2rem">
          <div>
            <icon-component
              icon-name="clock_arrow"
              icon-size="1rem"
              :color="colorUtilities.$textPrimary"
            />
          </div>
          <div class="recently" v-if="!fold"><Text locale="history" />:</div>
        </div>
        <div
          :class="{ 'visible': !fold, 'hidden': fold }"
          v-else
          id="fold-sidebar"
          class="flex-row-center"
          style="gap: 0.2rem">
          <div>
            <icon-component
              icon-name="folder_open"
              icon-size="1rem"
              :color="colorUtilities.$textPrimary"
            />
          </div>
          <div class="recently" v-if="!fold">
            <Text locale="collections" />:
          </div>
        </div>
        <div
          :class="{ 'visible': !fold, 'hidden': fold }"
          id="right_side-items"
          class="flex-row-between-center">
          <button class="ghost" @click="() => $emit('foldAction')">
            <icon-component
              hover
              icon-name="left_panel_close"
              icon-size="22px"
              :color="colorUtilities.$textPrimary"
            />
          </button>
        </div>
      </section>
      <section
        :class="{ 'visible': fold, 'hidden': !fold }"
        class="flex-column-justify-start">
        <div>
          <icon-component
            hover
            icon-name="folder_open"
            @click="() => $emit('foldAction')"
          />
        </div>
      </section>
      <AssistantSidebarItems :class="{ 'visible': !fold, 'hidden': fold }" />
    </div>
    <section id="sidebar_others">
      <div class="sidebar_others-item hover-effect">
        <div>
          <icon-component icon-name="adjustment" icon-size="20px" />
        </div>
        <Text :class="{ 'visible': !fold, 'hidden': fold }" locale="settings" />
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#sidebar {
  border-right: 1px solid colors.$dividerColor;
  section#sidebar_main-tools {
    #right_side-items {
      gap: 0.5rem;
      #right_side-create-new {
        & > * {
          position: relative;
          top: -1px;
          left: 1px;
        }
      }
    }
    .recently {
      font-size: 0.85rem;
    }
    padding: 1rem 0;
    border-bottom: 1px solid colors.$dividerColor;
  }
  section#sidebar_others {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .sidebar_others-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
  $movement-time: .3s;
  .visible {
    transition-duration: $movement-time;
    transition-timing-function: linear;
    opacity: 1;
  }
  .hidden {
    transition-duration: $movement-time;
    transition-timing-function: linear;
    opacity: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    height: 0 !important;
    filter: blur(4px);
  }
}
</style>
