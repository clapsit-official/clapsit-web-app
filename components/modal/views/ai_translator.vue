<script lang="ts">
import colors from "@/constants/colorUtilities";
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
        colorUtilities(){
            const colorMode = useColorMode().value;
            return colors(colorMode)
        },
    },
    data() {
        return {
            failed: false
        }
    },
    methods: {
        async start() {
            try {
                await useAITranslator().start()
                useModal().deprive('ai_translator');
            } catch(error: any) {
                this.failed = true;
            }
        }
    }
});
</script>
<template>
    <div id="ai_translator-component" class="modal">
       <assistant-info 
        v-if="!failed"
        @start-event="start"
        :description="$t('assistants.ai_translator.description')"/>
        <div v-else style="text-align: center;">
            <div class="icon-area">
                <icon-component icon-name="warning" :color="colorUtilities.$warningColor" fill icon-size="55px" />
            </div>
            <br>
            <div>
                {{ $t('backend_messages.SOMETHING_WENT_WRONG') }}
            </div>
        </div>
    </div>
</template>
