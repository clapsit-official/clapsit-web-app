<template>
  <div id="home-page" class="default-height">
    <ComingSoon v-if="!ready" />
    <div id="home-page-content" class="flex-column-center" v-else>
      <div id="area-header" class="flex-column-center">
        <h1>
          👋
          <Text locale="say_hello_to" :args="{
            name: parseFullname(useUser().getUserDetails.fullname).first_name
          }" />
        </h1>
        <span class="description">
          <Text locale="main_description"/>
        </span>
      </div>
      <AssistantNavigation />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Home",
  setup() {
    return {
      auth: useAuth()
    }
  },
  computed: {
    ready() {
      return this.auth.checkAuthCredentials();
    },
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
  },
  methods: {
    async logout() {
      await useUser().logoutUser();
    }
  },
})
</script>
<style lang="scss" scoped>
.desktop-app-container {
  #home-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    div#home-page-content {
      height: 100%;
    }

    #area-header {
      width: 40rem;
      text-align: center;
      gap: 1rem;
      span.description {
        color: colors.$textSecondary;
      }
    }
  }
}

.tablet-app-container {
  #home-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    div {
      gap: 1rem;
      margin: 1.5rem 0
    }

    #area-header {
      width: 70%;
      text-align: center;
      gap: 1rem;

      span.description {
        color: colors.$textSecondary;
      }
    }
  }
}
.mobile-app-container {
  #home-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    div {
      gap: 1rem;
      margin: 1.5rem 0
    }

    #area-header {
      width: 90%;
      text-align: center;
      gap: 1rem;

      span.description {
        color: colors.$textSecondary;
      }
    }
  }
}
</style>