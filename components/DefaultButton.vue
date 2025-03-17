<template>
    <div :id="`${kind}-button-component`" class="default-button-component">
        <button class="action-button flex-between-center hover-effect">
            <span>{{ label }}</span>
        </button>
    </div>
</template>
<script lang="ts">

export default defineComponent({
    name: "DefaultButton",
    props: {
        kind: {
            type: String as PropType<'main' | 'secondary' | 'outlined'>,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
    }
})
</script>
<style lang="scss" scoped>
div.default-button-component {
    width: 100%;
    height: 3rem;
    margin: .3rem 0;
    button.action-button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        border:  1px solid colors.$dividerColor;
        background-color: #fff;
        transition-duration: animations.$default_transition_duration_value;
        
        img.kind-logo {
            width: 1.5rem;
            height: 1.5rem;
        }
        span {
            width: 70%;
            font-weight: 500;
            color: colors.$textPrimary;
        }
    }
}

div#main-button-component {
    width: 100%;
    height: 3rem;
    margin: .3rem 0;
    button.action-button {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-radius: 10rem;
        border:  1px solid colors.$primaryColor;
        background-color: colors.$primaryColor;
        transition-duration: animations.$default_transition_duration_value;

        img.kind-logo {
            width: 1.5rem;
            height: 1.5rem;
        }
        span {
            width: 70%;
            font-weight: 500;
            color: colors.$backgroundColor;
        }
    }
}
</style>