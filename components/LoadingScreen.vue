<template>
  <div>
      <div
      v-if="visible !== null"
    :class="{'fade-out': !visible}"
    :data-color-mode="colorMode.value"
    :data-dark-theme="colorMode.value === 'dark' ? 'dark_colorblind' : ''"
    :data-light-theme="colorMode.value === 'light' ? 'light_colorblind' : ''"
    class="loading-screen flex-column-center"
  >
    <div>
      <logo :type="2" small size="300" />
    </div>
    <br />
    <br />
    <div class="flex-row-center">
      <img :src="loadingGIF" alt="loading" width="20" />
      <Text locale="please_wait" />
      <span v-if="progress"> {{ progress }}% </span>
    </div>
  </div>
  </div>
</template>

<script>
import loadingGIF from "~/assets/gifs/loading2.gif";

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
        }, 1000)
      }
    }, count * 10);
  },
});
</script>

<style scoped lang="scss">
.loading-screen {
  background-color: #0D1117;
  color: #fff;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  gap: 1rem;

  img[alt="logo"] {
    width: 30vw;
  }

  div {
    gap: 0.5rem;
  }
  &.fade-out {
    transition-duration: .5s;
    opacity: 0;
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
