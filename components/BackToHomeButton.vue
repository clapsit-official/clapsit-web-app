<template>
  <div class="back_to_home_button hover-effect" @click="() => useRouter().push('/')">
    <div class="icon-area">
        <IconComponent icon-name="arrow_back" icon-size="1.2rem"/>
    </div>
    <span>
        {{$t('back_to_home')}}
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
}
</style>