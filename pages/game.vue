<script lang="ts">
import DefaultScreen from "~/utils/scripts/classes/DefaultScreen.js";
import Game from "~/utils/scripts/classes/Game.js";

export default {
    mounted() {
        setTimeout(() => {
            const screen_element = document.getElementById('screen');
            const default_screen = new DefaultScreen(screen_element);

            const game = new Game();
            default_screen.integrate(game.start());
        }, 1000)
    }
}
</script>
<template>
    <body>
        <main class="flex-column-center">
            <div id="screen">
                <h2>Loading...</h2>
            </div>
        </main>
    </body>
</template>
<style lang="scss" scoped>
main {
    height: 100vh;
}
* {
    margin: 0 auto;
    padding: 0;
    font-family: system-ui, -apple-system;
}

body {
    background-color: rgb(22, 23, 28);
    width: 100vw;
    height: 100vh;
    overflow: auto;
    font-weight: 400;
}

main {
    width: 90%;
    height: 90%;
    background-color: #ccc;
    border-radius: 28px;
    overflow: hidden;
    cursor: pointer;
    -webkit-box-shadow: 0px 2px 17px 0px #000;
    -moz-box-shadow: 0px 2px 17px 0px #000;
    box-shadow: 0px 2px 17px 0px #000;
}

.flex-center-all{
    display: flex;
    align-items: center;
    justify-content: center;
}

.error-msg {
    background-color: #eee;
    color: brrown;
    padding: 10px;
}

.animation{
    transform: rotate(60deg);
}
</style>