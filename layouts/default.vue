<template>
  <div
    id="default_layout-area"
    :data-color-mode="colorMode.value"
    :data-dark-theme="colorMode.value === 'dark' ? 'dark_colorblind' : ''"
    :data-light-theme="colorMode.value === 'light' ? 'light_colorblind' : ''"
  >
    <slot />
  </div>
</template>
<script setup>
const colorMode = useColorMode();
</script>
