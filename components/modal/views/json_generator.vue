<script lang="ts">
import colorUtilities from "@/constants/colorUtilities";
export default defineComponent({
    name: "InfoJSONGenerator",
    setup() {
        return {
            colorUtilities,
            $t: useI18nStore().i18n.global.t
        }
    },
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
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
                await useJSONGenerator().start()
                useModal().deprive('json_generator');
            } catch(error: any) {
                this.failed = true;
            }
        }
    }
});
</script>
<template>
    <div id="json_generator-component" class="modal">
       <assistant-info 
        v-if="!failed"
        @start-event="start"
        :description="$t('assistants.json_generator.description')"/>
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
