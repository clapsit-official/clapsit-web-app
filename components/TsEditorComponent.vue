<template>
  <div
    class="typescript-editor-component bordered"
    :class="{ disabled: disabled, loading: loading, 'dark': colorMode === 'dark' }"
  >
    <code-editor
      :key="count"
      lang="typescript"
      v-model="valueComputed"
      :read-only="readOnly || disabled"
      :theme="theme"
    />
    <div class="loading-area" v-if="loading">
      <div class="gif-area">
        <img :src="loadingGIF" alt="loading" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import loadingGIF from "~/assets/gifs/loading3.gif";
export default defineComponent({
  name: "TsEditorComponent",
  emits: [
    "update:modelValue",
  ],
  data() {
    return {
      loadingGIF,
      value: "",
      count: 0,
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
        this.$emit("update:modelValue", value); 
      },
    },
    colorMode() {
      return useColorMode().value;
    },
    theme(): any{
      return this.colorMode === 'dark' ? 'vs-dark' : 'vs-light'
    },
  },
});
</script>
<style scoped lang="scss">
@keyframes rocket-animation {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
    filter: brightness(1.1);
  }
  100% {
    transform: scale(0.7);
  }
}
@keyframes rocket-rotate-animation {
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(65deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
.typescript-editor-component {
  width: calc(100% - 2px);
  height: 100%;
  transition-duration: 0.5s;
  border-radius: 2rem;
  overflow: hidden;
  filter: blur(0);
  :deep(.code-editor-component) {
    transition-duration: 1s;
    transition-delay: 1s;
  }
  &.disabled {
    transition-duration: 0.5s;
    cursor: not-allowed !important;
    :deep(.code-editor-component) {
      pointer-events: none;
      filter: brightness(0.7);
    }
  }
  &.loading {
    cursor: progress !important;
    :deep(.code-editor-component) {
      pointer-events: none;
      filter: brightness(.2);
    }
    .loading-area {
      width: 100%;
      height: 100%;
      padding: 1.3rem 0;
      position: absolute;
      top: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: colors.$whiteColor;
      .gif-area {
        animation: rocket-rotate-animation 10s ease-in-out infinite;
        display: block;
        img {
          animation: rocket-animation 3s ease-in-out infinite;
          display: block;
          width: 80px;
        }
      }
    }
  }
  &.dark {
    background-color: #1E1E1E;
  }
}
</style>
