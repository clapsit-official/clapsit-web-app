<template>
    <div :id="`signup-with-${platform}-button-component`" class="signup-with-button-component">
        <button class="action-button flex-row-between-center">
            <img :src="platformLogos[platform]" :alt="platform" class="platform-logo">
            <span>{{ $t('continue_with', {platform: capitalizeFirstLetter(platform)}) }}</span>
            <div></div>
        </button>
    </div>
</template>
<script lang="ts">
import apple from '~/assets/images/apple_logo.png'
import facebook from '~/assets/images/facebook_logo.png'
import google from '~/assets/images/google_logo.png'

export default defineComponent({
    name: "SignupWithButton",
    setup() {
        return {
            platformLogos: {
                apple,
                facebook,
                google
            }
        }
    },
    props: {
        platform: {
            type: String as PropType<'apple' | 'google' | 'facebook'>,
            required: true,
        },
    }
})
</script>
<style lang="scss" scoped>
div.signup-with-button-component {
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
        
        img.platform-logo {
            width: 1.5rem;
            height: 1.5rem;
        }
        span {
            width: 70%;
            font-weight: 500;
            color: colors.$textPrimary;
        }
        &:hover {
            opacity: 0.7;
        }
    }
}
</style>