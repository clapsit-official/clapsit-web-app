<script lang="ts">
import { useI18n } from "vue-i18n";
import { $availableRoutes } from "~/configs/routes.config";
import colorUtilities from "~/constants/colorUtilities";
export default defineComponent({
  name: "JsonGenerator",
  setup() {
    return {
      $availableRoutes,
      colorUtilities,
      store: useJSONGenerator(),
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      count: 0,
      copyToggle: false,
    };
  },
  props: {
    cData: {
      type: Object,
      default: () => {
        return {
          id: null,
          label: null,
          c_key: null,
          date: null,
          key_name: "json_generator",
        };
      },
    },
  },
  computed: {
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    inputComputed: {
      get() {
        return this.store.progress.input.result;
      },
      set(value: string) {
        if (!value.startsWith("{") || !value.endsWith("}")) {
          this.store.resetInputProgress();
          this.count++;
        } else if (value === "" || !value) {
          this.store.resetInputProgress();
          this.count++;
        } else {
          this.store.inputProgress(value);
        }
      },
    },
    outputComputed: {
      get() {
        return this.store.progress.output.result;
      },
      set(value: string) {
        this.store.outputProgress(value);
      },
    },
    isLoading() {
      return useQueryManager().loadingList.includes("json_generator");
    },
    cKey() {
      return this.cData.c_key;
    },
  },
  watch: {
    cData: {
      immediate: true,
      deep: true,
      async handler() {
        if (this.cData.c_key && this.cData.key_name) {
          useJSONGenerator().environments.c_key = this.cData.c_key;
          useJSONGenerator().environments.c_id = this.cData.id;
          useJSONGenerator().environments.key_name = this.cData.key_name;
        }
      },
    },
    cKey: {
      immediate: true,
      handler() {
        this.store.resetAll();
      },
    },
  },
  methods: {
    handleGenerateShortcut(event: any) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        this.store.generate();
      }
    },
    toClipboard() {
      this.copyToggle = true;
      copyToClipboard(this.store.progress.output.result.toString());
      setTimeout(() => {
        this.copyToggle = false;
      }, 2000);
    },
  },
  mounted() {
    window.addEventListener("keydown", this.handleGenerateShortcut);
  },
  unmounted() {
    window.removeEventListener("keydown", this.handleGenerateShortcut);
  },
});
</script>

<template>
  <form
    id="assistant-jsong_generator"
    :key="count"
    @submit.prevent="store.generate"
    v-if="deviceType !== 'mobile'"
  >
    <div id="input" class="editor-area">
      <div class="headline-area flex-row-between-center">
        <strong> <Text locale="assistants.json_generator.input" />: </strong>
        <div class="icon-area">
          <icon-component
            icon-name="info"
            :color="colorUtilities.$whiteColor"
            :icon-size="'1.5rem'"
            :title="$t('assistants.json_generator.input_info')"
          />
        </div>
      </div>
      <JsonEditorComponent :disabled="isLoading" v-model="inputComputed" />
      <div id="input-message">
        <textarea
          id="input-message_assistant-jsong_generator"
          :readonly="isLoading"
          v-model="store.progress.input.message"
          :placeholder="$t('assistants.json_generator.input_placeholder')"
        />
      </div>
    </div>
    <div id="btns-area">
      <button
        class="primary"
        :class="{ loading: isLoading }"
        :title="$t('assistants.json_generator.generate')"
        type="submit"
        @click="store.generate"
      >
        <icon-component
          v-if="!isLoading"
          icon-name="rocket"
          :color="colorUtilities.$whiteColor"
          fill
        />
      </button>
      <button
        class="white"
        type="button"
        :title="
          !copyToggle
            ? $t('assistants.json_generator.copy')
            : $t('assistants.json_generator.copied')
        "
        @click="toClipboard"
      >
        <icon-component
          :fill="copyToggle"
          :color="colorUtilities.$blackColor"
          :icon-name="copyToggle ? 'clipboard_copied' : 'clipboard_copy'"
        />
      </button>
      <button
        class="white"
        :title="$t('assistants.json_generator.reverse')"
        type="button"
        @click="store.reverse"
      >
        <icon-component
          :color="colorUtilities.$blackColor"
          icon-name="refresh"
        />
      </button>
      <button
        class="white"
        :title="$t('assistants.json_generator.clear')"
        type="reset"
        @click="store.resetAll"
      >
        <icon-component
          fill
          icon-name="trash"
          :color="colorUtilities.$errorColor"
        />
      </button>
    </div>
    <div id="output" class="editor-area">
      <div class="headline-area flex-row-between-center">
        <strong> <Text locale="assistants.json_generator.output" />: </strong>
        <div class="icon-area">
          <icon-component
            icon-name="info"
            :color="colorUtilities.$whiteColor"
            :icon-size="'1.5rem'"
            :title="$t('assistants.json_generator.output_info')"
          />
        </div>
      </div>
      <JsonEditorComponent
        :loading="isLoading"
        v-model="outputComputed"
        :read-only="true"
      />
      <div id="output-message">
        <textarea
          id="output-message_assistant-jsong_generator"
          readonly
          :key="store.progress.output.message"
          v-model="store.progress.output.message"
          :placeholder="
            !isLoading
              ? $t('assistants.json_generator.output_placeholder')
              : $t('assistants.json_generator.loading')
          "
        />
      </div>
    </div>
  </form>
  <div
    v-else
    class="flex-column-center"
    style="width: 100%; gap: 40px; height: 50vh"
  >
    <div class="icon-area">
      <icon-component icon-name="warning" icon-size="50px" color="white" fill />
    </div>
    <span style="text-align: center; width: 90%; font-size: 17px">
      <Text locale="not_supported_device" />
    </span>
    <BackToHomeButton />
  </div>
</template>
<style lang="scss" scoped>
.desktop-app-container,
.tablet-app-container {
  #assistant-jsong_generator {
    display: flex;
    width: 99%;
    justify-content: space-between;
    padding: 0 1rem;
    #btns-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      gap: 1rem;
      height: 80%;
      width: 50px;
      button {
        width: 3rem;
        height: 3rem;
      }
    }
    .editor-area {
      width: 100%;
      height: 95%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      $default_border_radius: 3rem;
      .headline-area {
        background-color: colors.$surfaceColor;
        padding: 0.5rem 1.5rem;
        border-radius: $default_border_radius;
        min-height: 5%;
        cursor: pointer;
      }
      #output-message,
      #input-message {
        $padding-textarea: 1.5rem;
        width: calc(100% - ($padding-textarea * 2));
        padding: $padding-textarea;
        background-color: colors.$surfaceColor;
        border-radius: $default_border_radius;        
        @include colors.box-shadow-2;
        textarea {
          width: 100%;
          height: 100%;
          min-height: 1rem;
          font-family: 'Fira Code', monospace !important;
          font-size: 0.8rem;
          font-weight: bold;
          resize: none;
          border: none;
          color: colors.$primaryColor;
          background-color: transparent;
          outline: none;
          &:hover {
            resize: vertical;
          }
          &#output-message_assistant-jsong_generator {
            @include animations.fadeIn(0.5s);
          }
        }
      }

      #input-message {
        border-top-left-radius: 0 !important;
      }
      #output-message {
        border-top-right-radius: 0 !important;
        pointer-events: none;
      }

      &#input {
        .headline-area,
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
          border-top-left-radius: 0 !important;
        }
      }

      &#output {
        .headline-area,
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
          border-top-right-radius: 0 !important;
        }
      }

      &#output {
      }
    }
  }
}
.mobile-app-container {
  #assistant-jsong_generator {
    & > * {
      display: none;
    }
  }
}
</style>
