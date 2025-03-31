<script setup lang="ts">
import { $availableRoutes } from '~/configs/routes.config';

</script>

<template>
  <div class="back_to_home_button hover-effect" @click="() => useRouter().push($availableRoutes.home)">
    <div class="icon-area">
        <IconComponent icon-name="arrow_back" icon-size="1.2rem"/>
    </div>
    <span>
        <Text locale="back_to_home"/>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.back_to_home_button {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  margin: 3rem 0;
  background-color: #eeeeee;
  padding: 1rem;
  border-radius: 10rem;
  user-select: none;
}
</style>