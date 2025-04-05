<template>
    <div id="assistant-jsong_generator">
        <div class="editor-area">
            <strong>Input:</strong>
            <JsonEditorComponent/>
        </div>
        <div>
            <button class="white">
                <icon-component icon-name="person"/>
            </button>
            <button class="white">
                <icon-component icon-name="person"/>
            </button>
            <button class="white">
                <icon-component icon-name="person"/>
            </button>
            <button class="white">
                <icon-component icon-name="person"/>
            </button>
        </div>
        <div class="editor-area">
            <strong>Output:</strong>
            <JsonEditorComponent/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#assistant-jsong_generator {
    width: 100%;
    height: 80vh;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    .editor-area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>