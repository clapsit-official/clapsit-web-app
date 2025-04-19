<script lang="ts">
import { useAITranslator } from '~/stores/assistant/providers/ai_translator';

export default defineComponent({
    name: "InfoAITranslator",
    setup() {
        return {
            $t: useI18nStore().i18n.global.t
        }
    },
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
        },
    },
    methods: {
        async start() {
            try {
                await useAITranslator().start()
                useModal().deprive('ai_translator');
            } catch(error: any) {
                
            }
        }
    }
});
</script>
<template>
    <div id="ai_translator-component" class="modal">
       <assistant-info 
        @start-event="start"
        :description="$t('assistants.ai_translator.description')"/>
    </div>
</template>
