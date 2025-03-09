<template>
    <div class="loading-screen flex-column-center">
        <img :src="loadingGIF">
        <span>{{ $t('please_wait') }}...</span>
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
    img{
        width: 3rem;
    }
}
</style>