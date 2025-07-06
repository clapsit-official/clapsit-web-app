<script lang="ts">
import type { IconsTypes } from "~/assets/icons/IconsList";
import colors from "~/constants/colorUtilities";
import type {
  InputNameType,
  InputAutoCompleteType,
  InputMessageType,
} from "~/constants/types/InputComponentTypes";

export default defineComponent({
  name: "CustomInput",
  props: {
    modelValue: {
      type: String as PropType<string | number | null>,
      default: () => null,
    },
    label: {
      type: String,
      default: () => null,
    },
    title: {
      type: String,
      default: () => null,
    },
    message: {
      type: Object as PropType<InputMessageType>,
    },
    icon: {
      type: String as PropType<IconsTypes>,
    },
    leftIcon: {
      type: String as PropType<IconsTypes>,
    },
    rightIcon: {
      type: String as PropType<IconsTypes>,
    },
    type: {
      type: String as PropType<
        "text" | "password" | "email" | "number" | "tel" | "date" | "search"
      >,
      default: () => "text",
    },
    name: {
      type: String as PropType<InputNameType>,
      default: () => "text",
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    min: {
      type: Number as PropType<Number | undefined>,
      default: () => null,
    },
    max: {
      type: Number as PropType<Number | undefined>,
      default: () => null,
    },
    minlength: {
      type: Number as PropType<Number | undefined>,
      default: () => null,
    },
    maxlength: {
      type: Number as PropType<Number | undefined>,
      default: () => null,
    },
    autocomplete: {
      type: String as PropType<InputAutoCompleteType>,
      default: () => "off",
    },
    placeholder: {
      type: String,
      default: () => null,
    },
  },
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  data() {
    return {
      focus: false as boolean,
      showPassword: false,
    };
  },
  computed: {
    colorUtilities() {
      const colorMode = useColorMode().value;
      return colors(colorMode);
    },
    id() {
      return `input_${generateUniqueId(5)}`;
    },
    minComputed() {
      return `${this.min}`;
    },
    maxComputed() {
      return `${this.max}`;
    },
    minLengthComputed() {
      return `${this.minlength}`;
    },
    maxLengthComputed() {
      return `${this.maxlength}`;
    },
    modelComputed: {
      set(val: typeof this.modelValue) {
        if (!this.disabled) {
          this.$emit("update:modelValue", val);
        }
      },
      get() {
        return this.modelValue;
      },
    },
    status() {
      const acceptedStatuses = ["error", "warning", "success"];
      if (
        this.message &&
        this.message.type &&
        acceptedStatuses.includes(this.message.type)
      ) {
        return this.message.type;
      }
      return null;
    },
    typeComputed() {
      if (this.showPassword) {
        return "text";
      }
      return this.type;
    },
    leftIconComputed() {
      if (this.leftIcon) return this.leftIcon;
      return null;
    },
    rightIconComputed(): IconsTypes | null {
      if (this.type === "password") {
        if (this.showPassword) {
          return "visibility_off";
        }
        return "visibility";
      }
      if (this.rightIcon) return this.rightIcon;
      return null;
    },
    iconColor() {
      return this.focus
        ? this.colorUtilities.$textPrimary
        : this.colorUtilities.$textSecondary;
    },
  },
  methods: {
    setFocus(value: boolean) {
      this.focus = value;
    },
    leftIconAction(event: Event) {
      this.$emit("clickLeftIcon", event);
    },
    rightIconAction(event: Event) {
      if (this.type === "password") {
        this.showPassword = !this.showPassword;
      } else {
        this.$emit("clickRightIcon", event);
      }
    },
  },
  emits: ["clickLeftIcon", "clickRightIcon", "update:modelValue"],
});
</script>
<template>
  <div
    class="custom-input-component"
    :class="{ focused: focus, disabled: disabled }"
  >
    <div class="input-area__top" v-if="label">
      <label :for="id" class="input-label">
        <div v-if="icon">
          <icon-component
            :icon-name="icon"
            :fill="focus"
            :color="iconColor"
            icon-size="1rem"
          />
        </div>
        <span class="message">
          {{ label }}
        </span>
      </label>
    </div>
    <div class="input-area__center bordered" :class="`${status}-effect`">
      <div class="input-area__left" v-if="leftIconComputed">
        <icon-component
          @click="leftIconAction"
          class="hover-effect"
          icon-size="1.5rem"
          :color="iconColor"
          :icon-name="leftIconComputed"
        />
      </div>
      <div class="input-area__main">
        <input
          :id="id"
          :type="typeComputed"
          :name="name"
          :disabled="disabled"
          :required="required"
          :aria-label="label"
          :title="title"
          :min="minComputed"
          :class="`${status}-effect`"
          :max="maxComputed"
          :minlength="minLengthComputed"
          :maxlength="maxLengthComputed"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          @focusin="setFocus(true)"
          @focusout="setFocus(false)"
          v-model="modelComputed"
        />
      </div>
      <div class="input-area__right" v-if="rightIconComputed">
        <icon-component
          @click="rightIconAction"
          class="hover-effect"
          icon-size="1.5rem"
          :color="iconColor"
          :icon-name="rightIconComputed"
        />
      </div>
    </div>
    <div class="input-area__bottom">
      <label :for="id" class="input-message" v-if="message">
        <div v-if="message.text && message.type">
          <icon-component
            :icon-name="message.type"
            icon-size="1.1rem"
            :color="colorUtilities[`$${message.type}Color`]"
          />
        </div>
        <span class="message" v-if="message.text">
          {{ message.text }}
        </span>
      </label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$input-component-height: 40px;
$input-gap-value: 0.5rem;

.custom-input-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: $input-gap-value 0;
  transition-duration: animations.$default_transition_duration_value;

  & > div {
    transition-duration: animations.$default_transition_duration_value;
    width: 100%;
    & > label {
      cursor: pointer;
      position: relative;
      left: 3px;
    }
  }

  .input-area__top {
    display: block;
    label {
      font-size: 0.7rem;
      font-weight: 500;
      color: colors.$textSecondary;
      div {
        display: inline;
      }

      span {
        position: relative;
        top: -3px;
        display: inline;
        margin-left: 3px;
      }
    }
  }

  .input-area__center {
    display: flex;
    border-radius: 7px;
    height: 100%;
    overflow: hidden;
    width: 100%;
    background: colors.$surfaceColor2;

    & > div {
      height: $input-component-height;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .input-area__left {
      width: 10%;
    }
    .input-area__main {
      min-width: 80%;
      width: 100%;
      padding: 0 $input-gap-value;
      input {
        width: 100%;
        height: $input-component-height;
        font-size: 1rem;
        outline: none;
        transition-duration: animations.$default_transition_duration_value;
        border: none !important;
        background: transparent;
        color: colors.$textPrimary;
        &::placeholder {
          color: colors.$dividerColor;
        }
      }
    }
    .input-area__right {
      width: 10%;
      padding: 0 $input-gap-value;
    }
  }

  .input-area__bottom {
    display: block;
    min-height: 0.2rem;
    label.input-message {
      font-size: 0.7rem;
      font-weight: 400;
      width: 100%;
      position: relative;
      top: 3px;
      div {
        display: inline;
      }

      span {
        color: colors.$textSecondary;
        position: relative;
        top: -5px;
        display: inline;
        margin-left: 3px;
      }
    }
  }

  &.focused {
    .input-area__top {
      label {
        color: colors.$textPrimary;
      }
    }
    .input-area__center {
      @include colors.box-shadow-1();
    }
  }

  &.disabled {
    opacity: 0.3;
    & * {
      cursor: not-allowed;
    }
    .input-area__left,
    .input-area__right,
    .input-area__center {
      background-color: #ddd;
    }
  }
}
</style>
