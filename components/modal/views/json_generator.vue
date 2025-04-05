<script lang="ts">
import JsonGeneratorInfoVideo from '~/assets/videos/learn_json_generator.mov';
export default defineComponent({
    name: "InfoJSONGenerator",
    setup() {
        return {
            JsonGeneratorInfoVideo,
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
                await useJSONGenerator().start()
                useModal().deprive('json_generator');
            } catch(error: any) {
                
            }
        }
    }
});
</script>
<template>
    <div id="json_generator-component" class="modal">
       <assistant-info 
        @start-event="start"
        :mediaLink="JsonGeneratorInfoVideo" 
        :description="$t('assistants.json_generator.description')"/>
    </div>
</template>
