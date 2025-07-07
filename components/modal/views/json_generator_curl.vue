<script lang="ts">
import colors from "@/constants/colorUtilities";
export default defineComponent({
  name: "JSONGeneratorCURL",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      copyToggle: false,
    };
  },
  computed: {
    colorUtilities(){
      const colorMode = useColorMode().value;
      return colors(colorMode)
    },
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    cId() {
      const { c_id } = useRoute().query;
      if (c_id) {
        return Number(c_id);
      }
      return null;
    },
    urlComputed() {
      return `${this.baseUrl}/api/v1/aim/json_generator/${this.cId}`;
    },
    baseUrl() {
      return window.location.origin;
    },
    cURL() {
      return this.createCurlCommand(
        "GET",
        this.urlComputed,
        useAuth().getAuthCredentials().access_token!
      );
    },
  },
  methods: {
    createCurlCommand(method: string, url: string, token: string) {
      const curlCommand = `curl -X ${method.toUpperCase()} "${url}" \\
        -H "Content-Type: application/json" \\
        -H "Authorization: Bearer ${token}" \\ `;
      return curlCommand;
    },
    toClipboard() {
      this.copyToggle = true;
      copyToClipboard(this.cURL.toString());
      setTimeout(() => {
        this.copyToggle = false;
      }, 2000);
    },
    openInNewTab(url: string) {
      window.open(url, "_blank");
    },
  },
});
</script>
<template>
  <div id="json_generator_curl-component" class="modal">
    <section id="url-area">
      <div id="content_url-area">
        <nuxt-link :to="urlComputed">
          {{ urlComputed }}
        </nuxt-link>
      </div>
      <div id="btns_url-area">
        <button type="button" @click="openInNewTab(urlComputed)" class="monochrome-invers">
          <icon-component
            icon-name="arrow_up_right"
            :color="colorUtilities.$textPrimary"
          />
        </button>
      </div>
    </section>
    <section id="curl-area">
      <div id="header_curl-area">
        <span>shell</span>
        <button
          :title="
            !copyToggle
              ? $t('assistants.json_generator.copy')
              : $t('assistants.json_generator.copied')
          "
          type="button"
          @click="toClipboard"
           class="monochrome-invers"
        >
          <icon-component
            :icon-name="!copyToggle ? 'file_copy_alt' : 'file_check'"
            :icon-size="copyToggle ? '1.1rem' : ''"
            :fill="copyToggle"
            :color="colorUtilities.$textPrimary"
          />
        </button>
      </div>
      <div id="content_curl-area">
        <span v-text="cURL"></span>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
#json_generator_curl-component {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  section {
    background-color: colors.$disabledColor;
    border-radius: 0.4rem;
    padding: 1rem 2rem;
  }
  section#curl-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    #header_curl-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: bold;
      button {
        width: 2rem;
        height: 2rem;
      }
    }
    #content_curl-area {
      word-wrap: break-word;
      color: colors.$textSecondary;
      & > * {
        font-family: "Fira Code", monospace !important;
      }
    }
  }
  section#url-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    #content_url-area {
        a {
            text-decoration: none;
            color: colors.$textPrimary;
            
        }
    }
    #btns_url-area {
      button {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
