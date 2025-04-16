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
      $t: useI18nStore().i18n.global.t
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
    }
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
      }
    }
  },
  methods: {
    handleGenerateShortcut(event: any) {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        this.store.generate();
      }
    },
    toClipboard() {
      this.copyToggle = true;
      copyToClipboard(this.store.progress.output.result.toString())
      setTimeout(() => {
        this.copyToggle = false;
      }, 2000)
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleGenerateShortcut);
  },
  unmounted(){
    window.removeEventListener('keydown', this.handleGenerateShortcut);
  }
});
</script>

<template>
  <form id="assistant-jsong_generator" :key="count" @submit.prevent="store.generate">
    <div class="editor-area">
      <strong>
        <Text locale="assistants.json_generator.input"/>:
      </strong>
      <JsonEditorComponent 
        :disabled="isLoading"
        v-model="inputComputed" />
      <textarea
        :readonly="isLoading"
        v-model="store.progress.input.message"
        :placeholder="$t('assistants.json_generator.input_placeholder')"
      />
    </div>
    <div id="btns-area">
      <button
        class="primary"
        :class="{ loading: isLoading }"
        :title="$t('assistants.json_generator.generate')"
        type="submit"
        @click="store.generate">
        <icon-component
          v-if="!isLoading"
          icon-name="rocket"
          :color="colorUtilities.$whiteColor"
          fill />
      </button>
      <button 
        class="white" 
        type="button"
        :title="$t('assistants.json_generator.copy')"
        @click="toClipboard">
        <icon-component 
          :fill="copyToggle" 
          :color="colorUtilities.$blackColor"
          :icon-name="copyToggle ? 'file_check' : 'file_copy_alt'" />
      </button>
      <button 
        class="white"
        :title="$t('assistants.json_generator.reverse')"
        type="button"
        @click="store.reverse">
        <icon-component 
          :color="colorUtilities.$blackColor"
          icon-name="refresh" />
      </button>
      <button 
        class="white" 
        :title="$t('assistants.json_generator.clear')"
        type="reset"
        @click="store.resetAll">
        <icon-component
          fill
          icon-name="trash"
          :color="colorUtilities.$errorColor"
        />
      </button>
    </div>
    <div class="editor-area">
      <strong>
        <Text locale="assistants.json_generator.output"/>:
      </strong>
      <JsonEditorComponent 
        :loading="isLoading"
        v-model="outputComputed" 
        :read-only="true" />
      <textarea
        readonly
        v-model="store.progress.output.message"
        :placeholder="!isLoading ? $t('assistants.json_generator.output_placeholder') : $t('assistants.json_generator.loading')"
      />
    </div>
  </form>
</template>
<style lang="scss" scoped>
.desktop-app-container,
.tablet-app-container {
  #assistant-jsong_generator {
    display: flex;
    width: 98%;
    justify-content: space-between;
    #btns-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;
      gap: 1rem;
      height: 80%;
      width: 50px;
      margin-top: 2.5rem;
      button {
        width: 3rem;
      }
    }
    .editor-area {
      width: 100%;
      height: 60vh;
      & > * {
        margin: 1.6rem 0;
      }
      textarea {
        width: calc(100% - (1.3rem * 2));
        min-height: 10vh;
        resize: vertical;
        padding: 1.3rem;
        background-color: #1E1E1E;
        color: colors.$primaryColor;
        font-family: "JetBrains Mono", monospace !important;
        font-size: .8rem;
        font-weight: bold;
        border-radius: .7rem;
        border: none;
        @include colors.box-shadow-2;
        outline: none;
      }
    }
  }
}
</style>
