<script lang="ts">
import colorUtilities from "~/constants/colorUtilities";
export default defineComponent({
  name: "JsonGenerator",
  setup() {
    return {
      colorUtilities,
      store: useJSONGenerator(),
    };
  },
  data() {
    return {
      count: 0,
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
          this.store.inputProgress(`{\n}`);
          this.count++;
        } else if (value === "" || !value) {
          this.store.inputProgress(`{\n}`);
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
  },
  watch: {
    cData: {
      immediate: true,
      deep: true,
      handler() {
        if (this.cData) {
          useJSONGenerator().environments.conversation_key = this.cData.c_key;
          useJSONGenerator().environments.key_name = this.cData.key_name;
        }
      },
    },
  },
});
</script>

<template>
  <div id="assistant-jsong_generator" :key="count">
    <div class="editor-area">
      <strong>Input:</strong>
      <custom-input
        v-model="store.progress.input.message"
        left-icon="message_caption"
        placeholder="Message"
      />
      <JsonEditorComponent v-model="inputComputed" />
    </div>
    <div id="btns-area">
      <button
        class="primary"
        :class="{ loading: isLoading }"
        title="Generate"
        @click="store.generate"
      >
        <icon-component
          v-if="!isLoading"
          icon-name="rocket"
          :color="colorUtilities.$whiteColor"
          fill
        />
      </button>
      <button class="white" title="Reset">
        <icon-component
          icon-name="refresh"
          :color="colorUtilities.$errorColor"
        />
      </button>
      <button class="white">
        <icon-component icon-name="person" />
      </button>
      <button class="white">
        <icon-component icon-name="person" />
      </button>
    </div>
    <div class="editor-area">
      <strong>Output:</strong>
      <custom-input
        v-model="store.progress.output.message"
        left-icon="message_caption"
        placeholder="Message"
      />
      <JsonEditorComponent v-model="outputComputed" :read-only="true" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.desktop-app-container {
  #assistant-jsong_generator {
    display: flex;
    justify-content: center;
    #btns-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      gap: 1rem;
      height: 80%;
      button {
        width: 3rem;
      }
    }
  }
}
</style>
