<template>
  <div v-if="error.statusCode === 404">
    <not-found />
  </div>
  <div v-else class="flex-column-center" style="height: 90vh;">
    <h2>Error: {{ error.statusCode }}</h2>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">Go back to home</nuxt-link>
  </div>
</template>

<script>
import { clearError } from '#imports'

export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    clearError,
  },
}
</script>