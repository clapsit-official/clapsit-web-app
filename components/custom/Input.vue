<script lang="ts">
import type { IconsTypes } from "~/assets/icons/materialIconsList";
import colorUtilities from "~/constants/colorUtilities.js";
import type { InputNameType, InputAutoCompleteType, InputMessageType } from "~/constants/types/InputComponentTypes";

export default defineComponent({
    name: "CustomInput",
    props: {
        modelValue: {
            type: String as PropType<string | number | null>,
            default: () => null
        },
        label: {
            type: String,
            default: () => null
        },
        title: {
            type: String,
            default: () => null
        },
        message: {
            type: Object as PropType<InputMessageType>,
        },
        icon: {
            type: String as PropType<IconsTypes>,
        },
        type: {
            type: String as PropType<'text' | 'password' | 'email' | 'number'>,
            default: () => 'text'
        },
        name: {
            type: String as PropType<InputNameType>,
            default: () => 'text'
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        required: {
            type: Boolean,
            default: () => false
        },
        min: {
            type: Number as PropType<Number | undefined>,
            default: () => null
        },
        max: {
            type: Number as PropType<Number | undefined>,
            default: () => null
        },
        minlength: {
            type: Number as PropType<Number | undefined>,
            default: () => null
        },
        maxlength: {
            type: Number as PropType<Number | undefined>,
            default: () => null
        },
        autocomplete: {
            type: String as PropType<InputAutoCompleteType>,
            default: () => 'off'
        },
        placeholder: {
            type: String,
            default: () => null
        },
    },
    data() {
        return {
            colorUtilities,
            focus: false as boolean
        }
    },
    computed: {
        id() {
            return `input_${generateUniqueId(5)}`
        },
        minComputed() { return `${this.min}` },
        maxComputed() { return `${this.max}` },
        minLengthComputed() { return `${this.minlength}` },
        maxLengthComputed() { return `${this.maxlength}` },
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
        status() {
            const acceptedStatuses = ['error', 'warning', 'success']
            if(this.message &&  this.message.type && acceptedStatuses.includes(this.message.type)){
                return this.message.type;
            }
            return null;
        }
    },
    methods: {
        setFocus(value: boolean) {
            this.focus = value;
        }
    }
});
</script>
<template>
    <div class="custom-input-component" :class="{ 'focused': focus, 'disabled': disabled }">
        <label 
            :for="id" 
            v-if="label" 
            class="input-label">
            <div v-if="icon">
                <icon-component :icon-name="icon" :fill="focus" icon-size=".9rem" />
            </div>
            <span class="message">
                {{ label }}
            </span>
        </label>
        <input 
            :id="id" 
            :type="type" 
            :name="name" 
            :disabled="disabled" 
            :required="required" 
            :aria-label="label"
            :title="title"
            :class="`${status}-effect`"
            :min="minComputed" 
            :max="maxComputed" 
            :minlength="minLengthComputed"
            :maxlength="maxLengthComputed" 
            :autocomplete="autocomplete" 
            :placeholder="placeholder"
            @focusin="setFocus(true)" 
            @focusout="setFocus(false)" 
            v-model="modelComputed"/>
        <label :for="id" v-if="message" class="input-message">
            <div v-if="message.text && message.type">
                <icon-component :icon-name="message.type" icon-size=".9rem"
                    :color="colorUtilities[`$${message.type}Color`]" />
            </div>
            <span class="message" v-if="message.text">
                {{ message.text }}
            </span>
        </label>
        <div style="height: 10px;" v-else></div>
    </div>
</template>
<style lang="scss" scoped>
.custom-input-component {
    width: 100%;

    input {
        $padding-value: 1rem;
        width: calc(100% - (2 * $padding-value) - 1px);
        max-width: 600px;
        height: 35px;
        border-radius: 10px;
        border: 1px solid colors.$textSecondary;
        padding: .2rem 1rem;
        font-size: 1rem;
        outline: none;
        transition-duration: animations.$default_transition_duration_value;

        &::placeholder {
            color: colors.$dividerColor
        }
    }

    label {
        cursor: pointer;
        position: relative;
        left: 3px;
    }

    label.input-label {
        font-size: .7rem;
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

    label.input-message {
        font-size: .6rem;
        font-weight: 400;
        width: 100%;
        gap: 0px;

        div {
            display: inline;
        }

        span {
            position: relative;
            top: -4px;
            display: inline;
            margin-left: 3px;
        }
    }

    &.focused {
        input {
            border-color: colors.$textPrimary;
        }

        label.input-label {
            color: colors.$textPrimary;
        }
    }
    &.disabled {
        opacity: .5;
        cursor: not-allowed !important;
        & * {
            cursor: not-allowed !important;
        }
    }
}
</style>