<script>
export default defineComponent({
    name: "AssistantInfo",
    emits: ['startEvent'],
    props: {
        description: {
            type: String,
            required: true
        },
        mediaLink: {
            type: String,
        }
    },
    computed: {
        deviceType() {
            return useCoreAppStore().getDeviceType;
        },
        isLoading() {
            return useQueryManager().loadingList.includes("start_assistant");
        }
    }
});
</script>
<template>
    <div id="assistant-info">
        <section id="media-area">
        </section>
        <section id="description-area">
            <strong>{{ $t('how_can_use_it') }}</strong>
            <p>
                {{ description }}
            </p>
        </section>
        <section id="btn-area">
            <button class="black" @click="$emit('startEvent')" :class="{'loading': isLoading}">
                {{ $t('buttons.start') }}
            </button>
        </section>
    </div>
</template>
<style lang="scss" scoped>
#assistant-info {
    width: 60vw;
    max-width: 450px;
    max-height: 70vh;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        border-radius: 100rem;
    }
}
</style>