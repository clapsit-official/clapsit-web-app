<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Account",
  setup() {
    return {
      userDetails: useUser().getUserDetails
    }
  }
})
</script>

<template>
  <div>
      <ul>
        <li v-for="data in Object.keys(userDetails)">
          {{data}}: <strong>{{userDetails[data] || '-'}}</strong>
        </li>
      </ul>
  </div>
</template>

<style scoped lang="scss">

</style>