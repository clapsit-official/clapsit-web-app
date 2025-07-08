<script lang="ts">
import { $availableRoutes } from "~/configs/routes.config";
import colors from "~/constants/colorUtilities";
export default defineComponent({
  name: "JsonGenerator",
  setup() {
    return {
      $availableRoutes,
      store: useJSONGenerator(),
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      copyToggle: false,
      inputValueChanged: false,
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
          save: false,
          key_name: "json_generator",
        };
      },
    },
  },
  computed: {
    colorUtilities(){
      const colorMode = useColorMode().value;
      return colors(colorMode)
    },
    deviceType() {
      return useCoreAppStore().getDeviceType;
    },
    inputComputed: {
      get() {
        return this.store.progress.input.result;
      },
      set(value: string) {
        this.store.inputProgress(value);
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
    cId() {
      const { c_id } = useRoute().query;
      if (c_id) {
        return Number(c_id);
      }
      return null;
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
          useJSONGenerator().environments.save = this.cData.save;
        }
      },
    },
  },
  methods: {
    async generate() {
      try {
        await this.store.generate();
        if (this.store.progress.output.result) {
          this.inputValueChanged = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    handleGenerateShortcut(event: any) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        this.generate();
      }
    },
    resetInputProgress() {
      this.store.resetInputProgress();
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
    @submit.prevent="generate"
    v-if="deviceType !== 'mobile'"
  >
    <div id="input" class="editor-area">
      <div class="headline-area bordered flex-row-between-center">
        <strong> <Text locale="assistants.json_generator.input" />: </strong>
        <div class="icon-area flex-row-center">
          <icon-component
            icon-name="typescript_icon"
            :icon-size="'1.5rem'"
            :title="$t('assistants.json_generator.input_info')"
          />
        </div>
      </div>
      <TsEditorComponent
        @reset-input-progress="resetInputProgress"
        :disabled="isLoading"
        v-model="inputComputed"
      />
      <div id="input-message" class="bordered">
        <textarea
          :rows="1"
          id="input-message_assistant-jsong_generator"
          :readonly="isLoading"
          @input="() => (inputValueChanged = true)"
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
      >
        <icon-component
          v-if="!isLoading"
          icon-name="rocket"
          :color="colorUtilities.$whiteColor"
          fill
        />
      </button>
      <button
        class="monochrome-invers"
        type="button"
        :title="
          !copyToggle
            ? $t('assistants.json_generator.copy')
            : $t('assistants.json_generator.copied')
        "
        @click="toClipboard"
      >
        <icon-component
          :icon-name="!copyToggle ? 'clipboard_copy' : 'clipboard_copied'"
          :fill="copyToggle"
          :color="colorUtilities.$textPrimary"
        />
      </button>
      <button
        class="monochrome-invers"
        :title="$t('assistants.json_generator.reverse')"
        type="button"
        :disabled="
          !useAssistant().data.history.length ||
          inputValueChanged ||
          !cId ||
          isLoading
        "
        @click="store.getAPI"
      >
        API
      </button>
      <button
        class="monochrome-invers"
        :title="$t('assistants.json_generator.clear')"
        type="reset"
        @click="store.resetToStart"
      >
        <icon-component
          fill
          icon-name="trash"
          :color="colorUtilities.$errorColor"
        />
      </button>
    </div>
    <div id="output" class="editor-area">
      <div class="headline-area bordered flex-row-between-center">
        <strong> <Text locale="assistants.json_generator.output" />: </strong>
        <div class="icon-area">
          <icon-component
            icon-name="json_icon"
            :fill="true"
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
.desktop-app-container {
  #assistant-jsong_generator {
    display: flex;
    width: 99%;
    justify-content: space-between;
    padding: 0 1rem 1rem 1rem;
    #btns-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      gap: 1rem;
      height: 80%;
      width: 30px;
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        color: colors.$warningColor;
      }
    }
    .editor-area {
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      $default_border_radius: 0.6rem;
      .headline-area {
        background-color: colors.$surfaceColor;
        padding: 0.5rem 1.5rem;
        border-radius: $default_border_radius;
        min-height: 5%;
      }
      #input-message {
        $padding-textarea: 1.6rem;
        width: calc(100% - 2px);
        height: 25%;
        background-color: colors.$surfaceColor;
        border-radius: $default_border_radius;
        overflow: hidden;
        @include colors.box-shadow-2;
        textarea {
          height: calc(100% - ($padding-textarea * 2));
          width: calc(100% - ($padding-textarea * 2));
          padding: $padding-textarea;
          font-family: "Fira Code", monospace !important;
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
        }
      }

      &#input {
        .headline-area,
        :deep(.typescript-editor-component),
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
        }
      }

      &#output {
        .headline-area,
        :deep(.typescript-editor-component),
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
        }
      }

      &#output {
      }
    }
  }
}
.tablet-app-container {
  #assistant-jsong_generator {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    position: relative;
    left: 1rem;
    #btns-area {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 2rem;
      gap: 1rem;
      height: 10%;
      width: 100%;
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25%;
        height: 3rem;
        color: colors.$warningColor;
      }
    }
    .editor-area {
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      $default_border_radius: 0.6rem;
      .headline-area {
        display: none;
      }
      #input-message {
        $padding-textarea: 1.6rem;
        width: calc(100% - 2px);
        height: 25%;
        background-color: colors.$surfaceColor;
        border-radius: $default_border_radius;
        @include colors.box-shadow-2;
        textarea {
          height: calc(100% - ($padding-textarea * 2));
          width: calc(100% - ($padding-textarea * 2));
          padding: $padding-textarea;
          font-family: "Fira Code", monospace !important;
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
        }
      }

      &#input {
        .headline-area,
        :deep(.typescript-editor-component),
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
        }
      }

      &#output {
        .headline-area,
        :deep(.typescript-editor-component),
        :deep(.json-editor-component) {
          border-radius: $default_border_radius;
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