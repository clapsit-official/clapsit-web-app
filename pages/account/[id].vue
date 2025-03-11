<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Account"
})
</script>

<template>
  <div>
    {{$route.params}}
  </div>
</template>

<style scoped lang="scss">

</style>