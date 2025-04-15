<template>
  <div class="json-editor-component" :class="{'disabled': disabled, 'loading': loading}">
    <code-editor
      lang="json"
      v-model="valueComputed"
      :read-only="readOnly || disabled"
      theme="vs-dark"
    />
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
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    readOnly: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    loading: {
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
  },
});
</script>
<style scoped lang="scss">
.json-editor-component {
  width: 100%;
  height: 100%;
  transition-duration: .5s;
  filter: brightness(1);
  &.disabled {
    transition-duration: .5s;
    filter: brightness(.8);
    cursor: not-allowed !important;
    :deep(.code-editor-component) {
      pointer-events: none;
      filter: grayscale(.8);
    }
  }
  &.loading {
    cursor: progress !important;
    filter: brightness(.2);
    :deep(.code-editor-component) {
      pointer-events: none;
      @include animations.animate-grayscale(1s);
    }
  }
}
</style>
