<template>
  <section class="hero">
    <div class="container">
<div class="hero__wrapper">
  <h1 class="hero__title">Мария Королева</h1>
  <p class="hero__subtitle">Все, что вы хотели знать обо мне</p>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.70) 0%, rgba(140, 103, 3, 0.60) 100%), url('/img/about-hero.png');
  min-height: 1350px;
    width: 100%;
    background-position: center center;    background-repeat: no-repeat;
background-size: cover;
&__title {
  margin-bottom: 40px;
  color: #FFF;
font-family: 'Akrobat';
font-size: 58px;
font-style: normal;
font-weight: 700;
line-height: 71.34px; /* 123% */
letter-spacing: 1px;
}
&__subtitle {
  color: #AFAFAF;
font-family: 'Akrobat';
font-size: 28px;
font-style: normal;
font-weight: 300;
line-height: 43.4px; /* 155% */
}
&__wrapper {
 padding-top: 500px;
}
}

</style>