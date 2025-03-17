<script lang="ts">
import { defineComponent } from 'vue'
import type { InputNameType } from "~/constants/types/InputComponentTypes";

export default defineComponent({
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: () => null
    },
    title: {
      type: String,
      default: () => null
    },
    name: {
      type: String as PropType<InputNameType>,
      default: () => 'checkbox'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    required: {
      type: Boolean,
      default: () => false
    },
  },
  computed: {
    id() { return `checkbox_${generateUniqueId(5)}` },
    modelComputed: {
      set(val: typeof this.modelValue) {
        if (!this.disabled) {
          this.$emit('update:modelValue', val);
        }
      },
      get() {
        return this.modelValue;
      }
    },
  }
})
</script>

<template>
  <div class="checkbox-component" :class="{ 'disabled': disabled }">
    <input 
      type="checkbox" 
      v-model="modelComputed"
      :title="title" 
      :name="name" 
      :disabled="disabled" 
      :required="required" 
      :id="id" />
    <label :for="id" class="checkbox-label">
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">
.checkbox-component {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: .25rem 0;
  gap: 10px;

  input[type="checkbox"] {
    accent-color: colors.$blackColor;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid colors.$blackColor;
    display: inline-block;
    position: relative;
    cursor: pointer
  }

  label.checkbox-label {
    font-size: .9rem;
    cursor: pointer;
    user-select: none;
  }

  &.disabled {
    label {
      color: #ccc;
      cursor: not-allowed !important;
    }

    input[type="checkbox"] {
      cursor: not-allowed !important;
    }
  }
}
</style>