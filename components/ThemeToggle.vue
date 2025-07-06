<template>
  <div>
    <button @click="toggleTheme">Tema Değiştir</button>
    <p>Geçerli Tema: {{ $colorMode.value }}</p>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>