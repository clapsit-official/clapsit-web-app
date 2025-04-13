<template>
  <div class="json-editor-component">
    <code-editor
      lang="json"
      v-model="valueComputed"
      :read-only="readOnly"
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
    }
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
}
</style>
