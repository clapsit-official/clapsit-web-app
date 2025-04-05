<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
import type { UserAssistantKeyItem } from '~/types/assistants.types';
export default defineComponent({
    name: "MainLayoutSidebar",
    emits: ['flodAction'],
    setup() {
        return {
            colorUtilities,
            $t: useI18nStore().i18n.global.t
        }
    },
    computed: {
        userAssistantKeys() {
        return useAssistant().getUserAssistantKeys;
        }
    },
    methods: {
        formatDateString,
        formatDateForTitle(date: Date) {
            const formated = formatDate(date);
            return `${formated.day}/${formated.month}/${formated.year} - ${formated.hours}:${formated.minutes}`;
        },
        async getAssistantItem(item: UserAssistantKeyItem) {
            await useAssistant().goToAssistantItem(item.key_name, item.c_key);
        }
    }
})
</script>
<template>
    <div id="sidebar" class="default-height">
        <div id="close_sidebar">
            <div class="hover-effect" @click="() => $emit('flodAction')">
                <icon-component icon-name="close" icon-size="20px" />
            </div>
        </div>
        <div id="user_info-sidebar">
            <profile-circle :value="useUser().getUserDetails.fullname" />
            <div id="user_info_content-sidebar">
                <span id="fullname-user_info_content">{{ useUser().getUserDetails.fullname }}</span>
                <span id="email-user_info_content">{{ useUser().getUserDetails.email }}</span>
            </div>
        </div>
        <div id="create-btn_right-side" class="flex-row-center hover-effect" @click="useModal().provide('logout')">
            <div>
                <icon-component icon-name="logout" icon-size="18px" :color="colorUtilities.$errorColor" />
            </div>
            <Text locale="buttons.logout" />
        </div>
        <div id="chat_history-sidebar">
            <div v-for="(item, index) in userAssistantKeys" style="margin: .8rem 0;" class="hover-effect ellipsis"
                :key="item.id">
                <div class="flex-row-start-center" style="gap: 5px" @click.prevent="getAssistantItem(item)"
                    :title="formatDateForTitle(item.date)">
                    <div class="icon-area">
                        <icon-component icon-name="clock_arrow" icon-size="18px" />
                    </div>
                    <strong>[{{ formatDateString(item.date) }}]</strong>
                    <span>&nbsp;- {{item.label || $t(`assistants.${item.key_name}.label`) }} </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#sidebar {
    z-index: 100;
    background-color: colors.$surfaceColor;
    position: absolute;
    right: 0;
    top: 0;
    width: 82%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    @include animations.slideInRight(.2s);
    @include colors.box-shadow-1;

    &>div {
        width: 85%;
        max-height: 20rem;
    }

    div#close_sidebar {
        padding: 2rem 0 0 0;
        display: flex;

        &>div {}
    }

    div#user_info-sidebar {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        #user_info_content-sidebar {
            display: flex;
            flex-direction: column;

            span#fullname-user_info_content {
                font-weight: 500;
                font-size: 1.3rem;
            }
        }
    }

    div#chat_history-sidebar {
        overflow-y: auto;
        background-color: colors.$whiteColor;
        border-radius: 1rem;
        @include colors.box-shadow-2();

        &>div {
            display: flex;
            align-items: center;
            gap: .5rem;
            padding: 1rem 1rem 0 1rem;

            &:last-child {
                border: none;
                padding-bottom: 1rem;
            }

            span {
                width: 90%;
                color: #666;
            }
        }
    }

    div#create-btn_right-side {
        gap: .5rem;
        padding: .8rem 0;
        border-radius: 10rem;
        background-color: colors.$whiteColor;
        @include colors.box-shadow-2
    }

    :deep(.profile-circle) {
        width: 3rem;
        height: 3rem;
        font-size: 1.4rem;
    }
}
</style>