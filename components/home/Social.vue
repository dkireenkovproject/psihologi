<template>
  <section class="social">
    <div class="container">
      <div class="social__wrapper">
        <h2 class="social__title">Больше моих публикаций можно
          найти в социальных сетях</h2>
        <a class="social__link" href="/"><img src="/svg/social-home.svg" alt="facebook"></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.social {
  padding: 30px;
  background: #2B2B2B;

  &__title {
    width: 100%;
    max-width: 441.09px;
    color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 34.44px; /* 123% */
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 45px;
  }
}
</style>