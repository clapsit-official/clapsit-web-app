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
      }" />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "CodeEditor",
  props: {
    lang: {
      type: String as PropType<'json' | 'javascript' | 'typescript' | 'html' | 'css' | 'scss' | 'less' | 'markdown'>,
      default: () => 'text'
    },
    theme: {
      type: String as PropType<'vs-dark'| 'hc-black'| 'hc-light'>,
      default: () => 'vs'
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
        this.$emit('update:modelValue', value);
      }
    },
  }
});
</script>
<style scoped lang="scss">
.code-editor-component {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 1.3rem 0;
    background-color: #1E1E1E;
    border-radius: .7rem;
    overflow: hidden;
    @include colors.box-shadow-2;
    &:deep(.monaco-editor) {
        width: 100%;
        height: 100%;
        .overflow-guard {
          width: 100%;
          height: 100%;
          & > * {
            width: 100%;
            .lines-content {
              width: 100%;
              height: 100%;
              .view-lines {
                height: 100%;
                & > * {
                  width: 100% !important;
                  height: 100%;
                }
              }
            }
          }
        }
    }
}
.desktop-app-container{
  .code-editor-component {
    & > * {
      position: relative;
      height: 100%;
      &:deep(.monaco-editor) {
        * {
          font-size: 11px !important;
          font-family: "JetBrains Mono", monospace !important;
        }
      }
    }
  }
}

.tablet-app-container{
  .code-editor-component {
    & > * {
      position: relative;
      width: 36vw;
      height: 100%;
      min-height: 500px;
      &:deep(.monaco-editor) {
        * {
          font-size: .9rem !important;
          font-family: "JetBrains Mono", monospace !important;
        }
      }
    }
  }
}
</style>
