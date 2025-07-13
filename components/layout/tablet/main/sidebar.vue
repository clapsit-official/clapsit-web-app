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
  props: {
    fold: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
  },
});
</script>
<template>
  <div id="sidebar">
    <div>
      <section id="sidebar_logo-area" :class="{ 'flex-row-between-center': fold, 'flex-row-reverse-between-center': !fold }">
        <Logo :class="{ 'visible-logo': fold, 'hidden-logo': !fold }" :type="3" size="35px" />
        <Logo :class="{ 'visible-logo-2': !fold, 'hidden-logo-2': fold }" :type="1" size="150px" />
      </section>
      <section
        :class="{ 'visible': !fold, 'hidden': fold }"
        id="sidebar_main-tools"
        class="flex-row-between-center"
      >
        <div
          :class="{ 'visible': !fold, 'hidden': fold }"
          v-if="useRoute().path !== availableRoutes.home"
          id="fold-sidebar"
          class="flex-row-center"
          style="gap: 0.2rem"
        >
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
          style="gap: 0.4rem"
        >
          <div>
            <icon-component
              fill
              icon-name="folder_open"
              icon-size="20px"
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
          class="flex-row-between-center"
        >
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
        class="flex-column-justify-start"
      >
        <button class="ghost" @click="() => $emit('foldAction')">
          <icon-component
            hover
            icon-name="folder_open"
          />
        </button>
      </section>
      <AssistantSidebarItems :class="{ 'visible': !fold, 'hidden': fold }" />
    </div>
    <section id="sidebar_others">
      <button class="sidebar_others-item ghost" @click="() => useModal().provide('settings')">
        <div>
          <icon-component icon-name="adjustment" icon-size="20px" />
        </div>
        <Text :class="{ 'visible': !fold, 'hidden': fold }" locale="settings" />
      </button>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#sidebar {
  position: absolute;
  z-index: 100;
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
      font-size: 1rem;
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
  &.full {
    @include colors.box-shadow-4();
  }
  $movement-time: 0.3s;
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
    pointer-events: none;
    filter: blur(4px);
  }
  .visible-logo{
    transition-duration: $movement-time;
    opacity: 1;
    margin: 0 !important;
  }
  .hidden-logo{
    transition-duration: $movement-time;
    position: relative;
    left: -16.6rem;
    top: -.1rem;
    opacity: 0;
  }
  .visible-logo-2{
    transition-duration: $movement-time;
    opacity: 1;

  }
  .hidden-logo-2{
    transition-duration: $movement-time;
    opacity: 0;
    position: fixed;
    left: -3rem;
    top: -3rem;
    margin: 0 !important;
  }
}
</style>
