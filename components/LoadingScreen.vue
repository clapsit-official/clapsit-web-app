<template>
  <div class="loading-screen flex-column-center">
    <logo/>
    <br>
    <br>
    <div class="flex-row-center">
      <img :src="loadingGIF" alt="loading">
      <span>{{ $t('please_wait') }}...</span>
    </div>
  </div>
</template>

<script lang="ts">
import loadingGIF from '~/assets/gifs/loading2.gif';

export default defineComponent({
  name: "LoadingScreen",
  setup() {
    return {
      loadingGIF,
      $t: useI18nStore().i18n.global.t,
    }
  }
});
</script>

<style scoped lang="scss">
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(250, 250, 250, 0.7);
  backdrop-filter: blur(4px);
  gap: 1rem;

  img[alt="logo"] {
    width: 30vw;
    @include animations.bounce(1s, 1s);
  }

  div {
    gap: .5rem;
    img[alt="loading"] {
      width: 1.5rem
    }
  }
}

#mobile-app {
  .loading-screen {
    img[alt="logo"] {
      width: 30vw
    }
  }
}
</style>