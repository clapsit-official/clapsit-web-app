<script lang="ts">
export default defineComponent({
    name: "LogoutPromptComponent",
    computed: {
        isLoading() {
            return useQueryManager().loadingList.includes('logout')
        }
    }
})
</script>
<template>
    <div id="logout_prompt-component" style="width: 100%;">
        <Text locale="logout_prompt_question"/>
        <br>
        <br>
        <div class="btns-area flex-column-end-center">
            <button class="danger" @click="useUser().logoutUser()" :class="{'loading': isLoading}">
                <Text locale="buttons.logout"/>
            </button>
            <button class="white" @click="useModal().deprive('logout')">
                <Text locale="buttons.cancel"/>
            </button>
        </div>
    </div>
</template>