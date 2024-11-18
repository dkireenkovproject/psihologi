<template>
  <section class="hero">
    <div class="container">
<div class="hero__wrapper">
  <h1 class="hero__title">Терапевтическая группа</h1>
  <p class="hero__subtitle">"Вы не одиноки в своём одиночестве"</p>
  <div class="hero__dash-wrapper"><span class="hero__dash"></span></div>
  <p class="hero__description">Москва, 28 - 30 октября 2022.<br>
    Малая Сухаревская пл., дом 2, стр 2</p>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/group-hero.jpg');
  min-height: 1050px;
    width: 100%;
    background-position: center center;    background-repeat: no-repeat;
background-size: cover;
&__title {
  text-align: center;
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
  margin-bottom: 50px;
  text-align: center;
  color: #FFF;
font-family: 'Akrobat';
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: 43.4px; /* 155% */
}
&__wrapper {
 padding-top: 300px;
}
&__dash {
  margin-bottom: 40px;
  display: block;
  max-width: 250px;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
}
&__dash-wrapper {
  display: flex;
  justify-content: center;
}
&__description {
  text-align: center;
  color: #FFF;
font-family: 'Akrobat';
font-size: 25px;
font-style: normal;
font-weight: 400;
}
}

</style>