<script lang="ts">
import type { LanguageContent } from '~/constants/types/LocalesType';

export default defineComponent({
    name: "DynamicText",
    props: {
        locale: {
            type: String,
            required: true
        },
        args: Object,
    },
});
</script>
<template>
    <span class="text">
        {{ $t(locale, {brand: useCoreAppStore().getBrandName, ...args}) }}
        <slot/>
    </span>
</template>