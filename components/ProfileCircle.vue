<script>
export default defineComponent({
    name: "ProfileCircle",
    props: {
        value: {
            required: true
        }
    }
})
</script>
<template>
    <div class="profile-circle_component hover-effect">
        <button class="flex-row-center ghost" @click.prevent="useModal().provide('user_account')">
            <div class="profile-circle flex-row-center" v-if="value">
                <span>
                    {{ getShortOfFullName(value) }}
                </span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.profile-circle_component {
    .profile-circle {
        background-color: colors.$primaryColor;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 100rem;
        color: colors.$backgroundColor;
        span {
            position: relative;
            top: 1px;
        }
    }
}
</style>