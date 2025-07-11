<template>
  <body
    id="default_layout-area"
    :data-color-mode="colorMode.value"
    :data-dark-theme="colorMode.value === 'dark' ? 'dark_colorblind' : ''"
    :data-light-theme="colorMode.value === 'light' ? 'light_colorblind' : ''"
  >
    <slot />
  </body>
</template>
<script setup>
const colorMode = useColorMode();
</script>
<style lang="scss">
body {
  height: 100dvh;
}
</style>
