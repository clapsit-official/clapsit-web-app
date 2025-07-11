<template>
  <div>
    <div
      v-if="visible !== null"
      :class="{ 'fade-out': !visible }"
      :data-color-mode="colorMode.value"
      :data-dark-theme="colorMode.value === 'dark' ? 'dark_colorblind' : ''"
      :data-light-theme="colorMode.value === 'light' ? 'light_colorblind' : ''"
      class="loading-screen flex-column-center"
    >
      <div class="logo-area">
        <logo :type="3" small size="200" />
      </div>
      <br />
      <h1>{{ [useCoreAppStore().getBrandName, 'com'].join('.') }}</h1>
      <br />
      <div class="please-wait flex-row-center">
        <img :src="loadingGIF" alt="loading" width="20" />
        <Text :locale="progress ? 'loading' : 'please_wait'" />
        <span v-if="progress"> {{ progress }}% </span>
      </div>
    </div>
  </div>
</template>

<script>
import loadingGIF from "~/assets/gifs/loading2.gif";
import { $availableRoutes } from "~/configs/routes.config";

export default defineComponent({
  name: "LoadingScreen",
  setup() {
    const colorMode = useColorMode();
    return {
      colorMode,
      loadingGIF,
    };
  },
  data() {
    return {
      progress: 0,
      visible: true,
    };
  },
  methods: {
    getRandomBetween,
  },
  mounted() {
    const count = this.getRandomBetween(1, 9);
    if (useRoute().path === $availableRoutes.json_generator) {
      const interval = setInterval(() => {
        if (this.progress + count < 100) {
          this.progress += count;
        } else {
          clearInterval(interval);
          this.visible = false;
          this.progress = 100;
          const tId = setTimeout(() => {
            this.visible = null;
            clearTimeout(tId);
          }, 1000);
        }
      }, count * 10);
    } else {
      this.visible = false;
      const tId = setTimeout(() => {
        this.visible = null;
        clearTimeout(tId);
      }, 1000);
    }
  },
});
</script>

<style scoped lang="scss">
.loading-screen {
  background-color: #0d1117;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  gap: 1rem;
  @include animations.animate-hue-rotate(4s);

  img[alt="logo"] {
    width: 30vw;
  }

  div {
    gap: 0.5rem;
  }
  &.fade-out {
    transition-duration: 0.3s;
    opacity: 0;
  }
  .logo-area {
    @include animations.wobble(3s);
  }
}

#mobile-app {
  .loading-screen {
    img[alt="logo"] {
      width: 30vw;
    }
  }
}
</style>
