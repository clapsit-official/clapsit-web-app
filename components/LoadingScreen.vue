<template>
    <div class="loading-screen flex-column-center">
        <img :src="logo">
        <span>{{ $t('please_wait') }}...</span>
    </div>
</template>
<script lang="ts">
import loadingGIF from '~/assets/gifs/loading2.gif';
import logo from '~/assets/images/logo2.svg';

export default defineComponent({
    name: "LoadingScreen",
    setup() {
        return {
            loadingGIF,
            logo,
            $t: useI18nStore().i18n.global.t,
        }
    }
});
</script>
<style scoped lang="scss">
.loading-screen{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(250, 250, 250, 0.7);
    backdrop-filter: blur(4px);
    gap: 1rem;
    @include animations.fadeIn(1s);
    img{
        width: 30rem;
        @include animations.bounce(1s, 1s);
    }
}
</style>