<template>
  <div class="flex-column-center" style="height: 100vh">
    <img :src="logo" alt="logo" style="width: 200px;">
    <br>
    <img :src="randomVector" alt="vector" :srcset="randomVector" style="width: 40vw; min-width: 450px;">
    <br>
    <span style="font-size: 2.5rem; font-weight: bolder;">
        Coming soon...
    </span>
    <span style="font-size: 1.4rem; color: #aaa;">
        We're working on it
    </span>
  </div>
</template>
<script lang="ts">
import logo from '~/assets/images/logo1.png';
import amico from '~/assets/images/code-snippets-amico.svg';
import amico2 from '~/assets/images/Programming-amico.svg';
import amico3 from '~/assets/images/Programming-cuate.svg';
export default {
    name: "Home",
    setup() {
        return {
            logo,
        }
    },
    computed: {
        randomVector(){
            const vectors = [amico, amico2, amico3]
            return vectors[getRandomBetween(0, vectors.length - 1)]
        }
    }

}
</script>