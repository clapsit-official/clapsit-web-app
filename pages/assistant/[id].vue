<script lang="ts">
import type { AvailableAssistants } from '~/types/assistants.types';
import json_generator from '~/components/assistant/json_generator.vue';
import { $availableRoutes } from '~/configs/routes.config';

export default {
    name: "AssistantContainer",
    setup() {
        return {
            $t: useI18nStore().i18n.global.t,
        }
    },
    computed: {
        cKey() {
            const { c_key } = useRoute().query;
            if (c_key) {
                return c_key;
            } else {
                useRouter().push($availableRoutes.home);
            }
        },
        keyName(): AvailableAssistants | undefined {
            const { id } = useRoute().params;
            if (id) {
                if (this.assistantComponents[id as AvailableAssistants] !== undefined) {
                    return id as AvailableAssistants;
                }
            }
            useRouter().push($availableRoutes.home);
        },
        assistantComponents(): { [key in AvailableAssistants]: any } {
            return {
                json_generator,
            }
        },
        currentCKeyData() {
            return useAssistant().getUserAssistantKeys.find((item) => {
                return item.c_key === this.cKey;
            });
        },
        currentComponent() {
            return this.assistantComponents[this.keyName!];
        }
    },
    watch: {
        currentCKeyData: {
            immediate: true,
            deep: true,
            handler() {
                if (this.currentCKeyData?.label && typeof this.currentCKeyData?.label === 'string') {
                    useSeoMeta({ title: this.currentCKeyData?.label  + ' | ' + useCoreAppStore().getBrandName });
                } else {
                    useSeoMeta({ title: this.$t(`assistants.${this.keyName}.label`) + ' | ' + useCoreAppStore().getBrandName });
                }
            }
        }
    }
}
</script>
<template>
    <div id="assistant_provider-page">
        <component 
            :is="currentComponent" 
            :cData="currentCKeyData"
            v-if="keyName" />
    </div>
</template>
<style lang="scss" scoped>
#learn_a_lang-page {
    width: 100%;
    height: 100%;
    @include animations.fadeIn(.1s);
}
</style>