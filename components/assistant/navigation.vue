<script lang="ts">
import colors from "~/constants/colorUtilities";
import { resultPresets } from "~/constants/json_generator";

export default defineComponent({
  name: "MainNavigation",
  setup() {
    return {
      resultPresets: shuffleAndTake(resultPresets, 7),
      t: useI18nStore().i18n.global.t,
    };
  },
  computed: {
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
    isLoading() {
      return useQueryManager().loadingList.includes("start_assistant");
    },
  },
  data() {
    return {
      startMessage: null,
    };
  },
  methods: {
    async start(data: {message?: string | null, result?: string | null}) {
      try {
        await useJSONGenerator().start(data);
      } catch (error: any) {
        // TODO: Show a popup and inform what is went wrong
      }
    }
  },
});
</script>

<template>
  <section :id="`main-navigation`" :class="`nav-${deviceType}`">
    <form id="search-nav-area" @submit.prevent="start({message: startMessage})">
      <custom-input
        v-model="startMessage"
        left-icon="rocket"
        :placeholder="t('pages.home.utilities.main_search_placeholder')"
        type="search"
      />
    </form>
    <div class="presets-area flex-row-center">
      <button
        v-for="value in resultPresets"
        @click="start({result: value.key})"
        class="preset-item ghost bordered flex-row-center"
      >
        <div class="icon-area">
          <icon-component
            :icon-name="value.icon"
            icon-size="1.3rem"
            fill
            :color="value.color"
          />
        </div>
        <div class="label">
          <Text :locale="`assistants.json_generator.presets.${value.key}`" />
        </div>
      </button>
    </div>
    <div class="btns-area flex-row-center">
      <button
        @click="start({message: startMessage})"
        class="monochrome flex-row-center"
        :class="{ loading: isLoading }"
      >
        <div class="icon-area" v-show="!isLoading">
          <IconComponent
            icon-name="circle_plus"
            :color="colorUtilities.$backgroundColor"
          />
        </div>
        <Text locale="buttons.create_new" />
      </button>
      <button class="monochrome-invers flex-row-center">
        <div class="icon-area">
          <IconComponent
            icon-name="terminal"
            :color="colorUtilities.$textPrimary"
          />
        </div>
        <Text locale="buttons.learn_how" />
      </button>
    </div>
    <div id="options-area">
      <AssistantHistories />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section#main-navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 2rem 0;
  form#search-nav-area {
    width: 90%;
    position: relative;
    left: -1rem;
    :deep(.custom-input-component) {
      max-width: 100%;
      .input-area__center {
        width: 100%;
        border-radius: 1rem;
        border: 1px solid colors.$dividerColor;
        outline: none;
        padding: 0 1rem;
        font-size: 1rem;
        .input-area__left {
          width: 5%;
        }
      }
    }
  }
  .btns-area {
    gap: 1rem;
    width: 80%;
    button {
      border-radius: 1rem;
      gap: 0.3rem;
    }
  }
  .presets-area {
    width: 96%;
    flex-wrap: wrap;
    gap: .5rem;
    .preset-item {
      width: unset;
      height: unset;
      gap: 0.3rem;
      padding: 0.5rem 1rem;
      border-radius: 10rem;
      border: 1px solid colors.$dividerColor !important;
      opacity: 0.9;
      font-size: 0.8rem;
      span.text {
        color: colors.$textPrimary;
      }
      .icon-area {
        @include animations.animate-hue-rotate(10s);
      }
      &:hover {
        @include colors.box-shadow-1;
        & {
          scale: 1.05;
          opacity: 0.8;
        }
      }
    }
  }
}
section#main-navigation.nav-desktop {
  width: 50rem;
  #options-area {
    width: 60rem;
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    nav {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
  }
}
section#main-navigation.nav-tablet {
  min-width: 30rem;
  #options-area {
    width: 60rem;
    max-width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    nav {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
  }
}
section#main-navigation.nav-mobile {
  width: 80vw;
  #options-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: nohuswrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }
  }
}
</style>
