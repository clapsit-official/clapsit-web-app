<script lang="ts">
import type { IconsTypes } from '~/assets/icons/IconsList';
import type { InputMessageType } from '~/constants/types/InputComponentTypes';
import colorUtilities from '~/constants/colorUtilities';
export default defineComponent({
    name: "MessageComponent",
    emits: ['action'],
    props: {
        label: {
            type: String,
            default: () => null
        },
        message: {
            type: Object as PropType<InputMessageType>,
        },
    },
    setup() {
        return {
            colorUtilities,
            id: generateUniqueId(),
        }
    },
    data() {
        return {
            show: true
        }
    },
    computed: {
        icon() {
            return this.message?.type;
        }
    },
    methods: {
        reset() {
            this.show = false;
        },
        action(event: Event){
            this.$emit('action', event)
            this.reset();
        }
    }
})
</script>
<template>
    <section class="message-component" :class="`${message?.type}-effect`" v-if="show && message" @click="action">
        <div class="icon-area" v-if="icon">
            <icon-component :icon-name="icon" icon-size="1.8rem" :color="colorUtilities.$textPrimary" fill />
        </div>
        <div class="content-area">
            <label class="message-label" :for="id" v-if="label"> {{ label }}</label>
            <div class="message-content" v-if="message" :id="id">
                {{ message.text }}
            </div>
        </div>
        <div class="close-area">
            <div class="close-icon-area">
                <icon-component icon-name="close" icon-size="1rem" @click="reset"/>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.message-component {
    min-height: 5rem;
    border-radius: .5rem;
    font-size: 1rem;
    border: 1px solid colors.$surfaceColor;
    background-color: colors.$successColor;
    transition-duration: animations.$default_transition_duration_value;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem 0;
    cursor: pointer;
    
    @include colors.box-shadow-2();
    @include animations.shake(1s);

    label {
        font-weight: bold;
        cursor: pointer;
    }

    &.error-effect {
        @include colors.box-shadow-3();
    }

    &.warning-effect {
        @include colors.box-shadow-3();
    }

    &:hover {
        @include colors.box-shadow-1();
    }

    .icon-area {
        max-width: 30px;
    }

    .content-area {
        display: flex;
        flex-direction: column;
        gap: .3rem;
        padding: 1rem 0;
        .message-content {
            cursor: pointer;
            max-width: 12rem;
            color: colors.$textSecondary;
            font-size: .8rem;
        }
    }

    .close-area {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;
        & > * {
            cursor: pointer;
        }
    }
}
</style>