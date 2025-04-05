<script lang="ts">
import colorUtilities from '~/constants/colorUtilities';
import type { UserAssistantKeyItem } from '~/types/assistants.types';
export default defineComponent({
    name: 'MainLayoutSidebar',
    emits: ['flodAction'],
    setup() {
        return {
            colorUtilities,
            $t: useI18nStore().i18n.global.t
        }
    },
    props: {
        flod: {
            type: Boolean,
            required: true,
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
});
</script>
<template>
        <div id="sidebar" :class="!flod ? 'partial' : 'full'">
            <section id="sidebar_logo-area" class="flex-row-between-center">
                <Logo :type="flod ? 3 : 1" :size="flod ? '35px' : '150px'"/>
            </section>
            <section v-if="!flod" id="sidebar_main-tools" class="flex-row-between-center">
                <div id="flod-sidebar">
                    <div>
                        <icon-component 
                            @click="() => $emit('flodAction')"
                            hover
                            icon-name="left_panel_close" 
                            icon-size="22px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                </div>
                <div id="right_side-items" class="flex-row-between-center">
                    <div>
                        <icon-component 
                            hover
                            icon-name="search" 
                            icon-size="22px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                    <div id="right_side-create-new" class="flex-row-center">
                        <icon-component 
                            hover
                            icon-name="edit_square" 
                            icon-size="26px" 
                            :color="colorUtilities.$textPrimary"/>
                    </div>
                </div>
            </section>
            <section v-else style="height: 100%; gap: 20px" class="flex-column-justify-start">
                <div>
                    <icon-component hover icon-name="search"/>
                </div>
                <div>
                    <icon-component hover icon-name="edit_square"/>
                </div>
                <div>
                    <icon-component hover icon-name="clock_arrow" @click="() => $emit('flodAction')"/>
                </div>
            </section>
            <section v-if="!flod" id="sidebar_history-area">
                <div v-for="(item, index) in userAssistantKeys" style="margin: .8rem 0;" class="hover-effect ellipsis" :key="item.id">
                    <div class="flex-row-start-center" style="gap: 5px" @click.prevent="getAssistantItem(item)" :title="formatDateForTitle(item.date)">
                        <div class="icon-area">
                            <icon-component icon-name="clock_arrow" icon-size="18px"/>
                        </div>
                        <strong>[{{formatDateString(item.date)}}]</strong>
                        <span>&nbsp;- {{item.label || $t(`assistants.${item.key_name}.label`) }} </span>
                    </div>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
            <section id="sidebar_others">
                <div class="sidebar_others-item hover-effect">
                    <div>
                        <icon-component icon-name="adjustment" icon-size="20px"/>
                    </div>
                    <Text v-if="!flod" locale="settings"/>
                </div>
            </section>
        </div>
</template>
<style lang="scss" scoped>
#sidebar {
    section#sidebar_history-area {
        height: 90%;
        font-size: .85rem;
        width: 100%;
    }
    section#sidebar_main-tools {
        #right_side-items {
            gap: .5rem;
            #right_side-create-new {
                & > * {
                    position: relative;
                    top: -1px;
                    left: 1px;
                }
            }
        }
    }
    section#sidebar_others {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        .sidebar_others-item {
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
    &.full {
        @include colors.box-shadow-4();
    }
}
</style>