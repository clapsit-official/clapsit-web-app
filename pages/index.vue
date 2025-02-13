<template>
    <div>
        Welcome to Clapsit!
    </div>
</template>
<script lang="ts">
export default defineComponent({
    name: "HomePage",
    mounted(){
        console.log('App Mounted', useCoreAppStore().getMessage);
    }
})
</script>