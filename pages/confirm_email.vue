<script lang="ts">
import {defineComponent} from 'vue'
import {$availableRoutes} from "~/configs/routes.config";

export default defineComponent({
  name: "Confirm",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    }
  },
  computed: {
    $availableRoutes() {
      return $availableRoutes
    },
    token() {
      return useRoute().query.token
    },
    isLoading() {
      return useQueryManager().loadingList.includes(('email_confirm'));
    }
  },
  data() {
    return {
      response: null as any,
    }
  },
  async mounted() {
    if (this.token) {
      try {
        this.response = await useUser().confirmEmailQuery(this.token.toString());
      } catch (error) {
        this.response = error
      }
    } else {
      this.response = {
        success: false,
        message: {key: 'NO_TOKEN', text: this.$t('backend_messages.NO_TOKEN')}
      };
    }
  },
})
</script>

<template>
  <div id="confirm-email-page" class="flex-column-center default-height default-width">
    <loading-screen v-if="isLoading && !response"/>
    <div v-else-if="response" class="info-container">
      <message-box
          v-if="!response.success"
          :label="$t('error')"
          @action="() => useRouter().push($availableRoutes.home)"
          :message="$keyValidation({
            warning: [response.message.key]
          }, response)"/>
      <message-box
          v-else
          :label="$t('backend_messages.DONE')"
          @action="() => useRouter().push($availableRoutes.login)"
          :message="$keyValidation({
            success: [response.message.key]
          }, response)"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
#confirm-email-page {
  .info-container {
    width: 20rem;
  }
}
</style>