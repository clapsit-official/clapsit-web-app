<template>
    <div>
        <strong>Welcome to Clapsit!</strong>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    name: "HomePage",
    mounted(){
        console.log('App Mounted', useCoreAppStore().getMessage);
    }
});
</script>