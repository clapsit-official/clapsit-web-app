<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Account",
  setup() {
    return {
      userDetails: useUser().getUserDetails
    }
  },
  computed: {
    isLoading() {
      return useQueryManager().loadingList.includes('auth') || useQueryManager().loadingList.includes('logout');
    }
  },
  methods: {
    async logout() {
      await useUser().logoutUser();
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
      <button class="black" style="width: 100px" @click="logout" :class="{'loading': isLoading}">
        Logout
      </button>
  </div>
</template>

<style scoped lang="scss">

</style>