<script lang="ts">
import type { IconsTypes } from "~/assets/icons/IconsList";
import colors from "~/constants/colorUtilities";
import type {
  InputMessageType,
  OptionsType,
} from "~/constants/types/InputComponentTypes";

export default defineComponent({
  name: "CustomSelect",
  setup() {
    return {
      $t: useI18nStore().i18n.global.t,
    };
  },
  props: {
    modelValue: {
      type: String as PropType<string | number | null>,
      default: () => null,
    },
    options: {
      type: Array as PropType<OptionsType[]>,
      default: () => [],
      required: true,
    },
    label: {
      type: String,
      default: () => " ",
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
    name: {
      type: String,
      default: () => "text",
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    multiple: {
      type: Boolean,
      default: () => false,
    },
    required: {
      type: Boolean,
      default: () => false,
    },
    placeholder: {
      type: String,
      default: () => useI18nStore().i18n.global.t("select_an_option"),
    },
  },
  data() {
    return {
      focus: false as boolean,
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
    tempuraryValue(): OptionsType {
      return {
        label: this.placeholder,
        value: null,
        disabled: false,
      };
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
    leftIconComputed() {
      if (this.leftIcon) return this.leftIcon;
      return null;
    },
    iconColor() {
      return this.focus
        ? this.colorUtilities.$textPrimary
        : this.colorUtilities.$textSecondary;
    },
    optionsComputed() {
      if (this.options.length < 1) {
        return [
          {
            label: useI18nStore().i18n.global.t("no_options"),
            value: null,
            disabled: true,
          },
        ];
      }
      return [this.tempuraryValue, ...this.options];
    },
  },
  methods: {
    setFocus(value: boolean) {
      this.focus = value;
    },
    leftIconAction(event: Event) {
      this.$emit("clickLeftIcon", event);
    },
  },
  emits: [
    "clickLeftIcon", 
    "clickRightIcon", 
    "update:modelValue", 
    "input", 
    "change", 
    "select"
  ],
});
</script>
<template>
  <div
    class="custom-select-component"
    :class="{ focused: focus, disabled: disabled || options.length < 1 }"
    :title="title"
    :key="options.length"
  >
    <div class="select-area__top" v-show="label">
      <label :for="id" class="select-label">
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
    <div class="select-area__center" :class="`${status}-effect`">
      <div class="select-area__left">
        <icon-component
          v-if="leftIconComputed"
          @click="leftIconAction"
          icon-size="1.5rem"
          :fill="focus"
          :color="iconColor"
          :icon-name="leftIconComputed"
        />
      </div>
      <div class="select-area__main">
        <select
          :id="id"
          :name="name"
          :disabled="disabled"
          :required="required"
          :aria-label="label"
          :title="title"
          :multiple="multiple"
          :class="`${status}-effect`"
          @focusin="setFocus(true)"
          @focusout="setFocus(false)"
          @input="(event) => $emit('input', event)"
          @change="(event) => $emit('change', event)"
          @select="(event) => $emit('select', event)"
          v-model="modelComputed"
        >
          <option
            v-for="(option, index) in optionsComputed"
            :key="index"
            :disabled="option.disabled"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="select-area__right"></div>
    </div>
    <div class="select-area__bottom">
      <label :for="id" class="select-message" v-if="message">
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
$select-component-height: 40px;
$select-gap-value: 0.2rem;

.custom-select-component {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 10vw;
  height: calc($select-component-height + 1.6rem);
  margin: $select-gap-value 0;
  transition-duration: animations.$default_transition_duration_value;
  cursor: pointer !important;
  & > div {
    transition-duration: animations.$default_transition_duration_value;
    width: 100%;
    & > label {
      cursor: pointer;
      position: relative;
      left: 3px;
    }
  }

  .select-area__top {
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

  .select-area__center {
    display: flex;
    border-radius: 7px;
    border: 1px solid colors.$surfaceColor2;
    height: 100%;
    width: 100%;
    background: colors.$surfaceColor2;

    & > div {
      height: $select-component-height;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .select-area__left {
      padding: 0 0.4rem;
    }
    .select-area__main {
      min-width: 80%;
      width: 100%;
      padding: 0 $select-gap-value;
      select {
        width: 100%;
        height: $select-component-height;
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
    .select-area__right {
      width: 1%;
      padding: 0 $select-gap-value;
    }
  }

  .select-area__bottom {
    display: block;
    min-height: 0.2rem;

    label.select-message {
      font-size: 0.7rem;
      font-weight: 400;
      width: 100%;
      position: relative;
      top: 3px;
      height: 100%;
      div {
        display: inline;
      }

      span {
        position: relative;
        top: -5px;
        display: inline;
        margin-left: 3px;
      }
    }
  }

  &.focused {
    .select-area__top {
      label {
        color: colors.$textPrimary;
      }
    }
    .select-area__center {
      @include colors.box-shadow-1();
    }
  }

  &.disabled {
    opacity: 0.3;
    & * {
      cursor: not-allowed;
    }
    .select-area__left,
    .select-area__right,
    .select-area__center {
      cursor: not-allowed;
      overflow: hidden;
      & * {
        pointer-events: none;
      }
    }
  }
}
</style>
