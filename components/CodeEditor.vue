<template>
  <div class="code-editor-component">
    <MonacoEditor 
      v-model="valueComputed" 
      :lang="lang" 
      :options="{ 
        theme: theme,
        automaticLayout: false,
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
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid colors.$textSecondary;
  & > * {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 600px;
    min-height: 500px;
    &:deep(.monaco-editor) {
      * {
        font-size: .8rem !important;
        font-family: "JetBrains Mono", monospace !important;
      }
    }
  }
}
</style>
