<template>
  <div class="code-editor-component">
    <MonacoEditor
      v-model="valueComputed"
      :lang="lang"
      :options="{
        theme: theme,
        automaticLayout: true,
        wordWrap: 'on',
        readOnly: readOnly,
        minimap: {
          enabled: minimapEnabled,
        },
        scrollbar: {
          alwaysConsumeMouseWheel: false,
          verticalScrollbarSize: 5,
          horizontalScrollbarSize: 5,
        },
      }"
    />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "CodeEditor",
  props: {
    lang: {
      type: String as PropType<
        | "json"
        | "javascript"
        | "typescript"
        | "html"
        | "css"
        | "scss"
        | "less"
        | "markdown"
      >,
      default: () => "text",
    },
    theme: {
      type: String as PropType<"vs-dark" | "hc-black" | "hc-light">,
      default: () => "vs",
    },
    modelValue: {
      type: String,
      required: true,
    },
    minimapEnabled: {
      type: Boolean,
      default: () => false,
    },
    readOnly: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    valueComputed: {
      get() {
        return this.modelValue;
      },
      set(value: string) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
<style scoped lang="scss">
.code-editor-component {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1.3rem 0;
  background-color: #1e1e1e;
  @include colors.box-shadow-2;
  * {
    font-family: "Fira Code", monospace !important;
  }
  &:deep(.monaco-editor) {
    border: 1px solid red !important;
    width: 100px;
    * {
      font-family: "Fira Code", monospace !important;
    }
    .overflow-guard {
      width: 50rem !important;
      border: 1px solid blue;
      & > * {
        .lines-content {
          border: 1px solid orange;
          width: 40rem !important;
          .view-lines {
            width: 30rem !important;
            border: 1px solid lime;
            & > * {
              width: 20rem !important;
              border: 1px solid white;
            }
          }
        }
      }
    }
  }
}
.desktop-app-container {
  .code-editor-component {
    & > * {
      position: relative;
      height: 100%;
      &:deep(.monaco-editor) {
        * {
          font-size: 11px !important;
        }
      }
    }
  }
}

.tablet-app-container {
  .code-editor-component {
    & > * {
      position: relative;
      width: 36vw;
      height: 100%;
      min-height: 500px;
      &:deep(.monaco-editor) {
        * {
          font-size: 0.9rem !important;
        }
      }
    }
  }
}
</style>
