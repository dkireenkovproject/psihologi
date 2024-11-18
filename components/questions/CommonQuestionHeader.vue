<template>
  <section class="question">
    <div class="question__wrapper"><NuxtLink to="/questions" class="question__link">Вернутся назад</NuxtLink><h2 class="question__subtitle">FAQ</h2><div class="question__dash"></div></div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.question {
  padding: 20px 0px 35px 0px;
  
  &__wrapper {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  &__subtitle {
    color: #000;
font-family: s'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32.4px; /* 135% */
  }
  &__link {
    color: #000;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 32.4px; /* 135% */
    text-decoration: none;
    padding-left: 20px;
  }
}
</style>