<script lang="ts">
export default defineComponent({
    name: "InfoJSONGenerator",
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
        :description="$t('assistants.json_generator.description')"/>
    </div>
</template>
