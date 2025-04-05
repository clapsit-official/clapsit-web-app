<template>
  <div class="json-editor-component">
    <MonacoEditor v-model="valueComputed" lang="json" />
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: "JsonEditorComponent",
  data() {
    return {
      value: "",
    };
  },
  computed: {
    valueComputed: {
      get() {
        return this.value;
      },
      set(value: string) {
        this.value = value;
      },
    },
  },
});
</script>
<style scoped lang="scss">
.json-editor-component {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem 0;
  background-color: #fff;
  & > * {
    position: relative;
    width: 100%;
    height: 100%;
    &:deep(.monaco-editor) {
      * {
        font-size: .9rem !important;
        font-family: "JetBrains Mono", monospace !important;
      } 
      & > * {
      }
    }
  }
}
</style>
