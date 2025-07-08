<script lang="ts">
import colors from "~/constants/colorUtilities";

export default defineComponent({
  name: "MainNavigation",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
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
  methods: {
    async start() {
      try {
        await useJSONGenerator().start();
        useModal().deprive("json_generator");
      } catch (error: any) {
        // TODO: Show a popup and inform what is went wrong
      }
    },
  },
});
</script>

<template>
  <section :id="`main-navigation`" :class="`nav-${deviceType}`">
    <form id="search-nav-area">
      <custom-input
        left-icon="rocket"
        :placeholder="$t('Lets start to build amazing APIs')"
        type="search"
      />
    </form>
    <div class="btns-area flex-row-center">
      <button @click="start" class="monochrome flex-row-center" :class="{'loading': isLoading}">
        <div class="icon-area" v-show="!isLoading">
          <IconComponent
            icon-name="circle_plus"
            :color="colorUtilities.$backgroundColor"
          />
        </div>
        <Text locale="Create new" />
      </button>
      <button class="monochrome-invers flex-row-center">
        <div class="icon-area">
          <IconComponent
            icon-name="terminal"
            :color="colorUtilities.$textPrimary"
          />
        </div>
        <Text locale="Learn how" />
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
