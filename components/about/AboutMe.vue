<template>
  <section class="aboutme">
    <div class="container">
<h2 class="aboutme__title">Три вещи, которые
  вам стоит знать обо мне</h2>
</div>
<div class="aboutme__wrapper">
  <div class="aboutme__wrapper-1">
    <ul class="aboutme__list list-reset">
      <li v-for="(item, index) in items" :key="index" class="aboutme__item">
<div class="aboutme__content" :class="{ 'aboutme__content-reverse': index % 2 !== 0 }">
  <img class="aboutme__img" :src="item.img" alt="aboutme">
  <div class="aboutme__content-2">
    <h3 class="aboutme__subtitle">{{ item.title }}</h3>
    <p v-for="(description, index) in item.description" :key="index" class="aboutme__description">{{ description }}</p>
  </div>
</div>
      </li>
    </ul>
  </div>
</div>
<div class="container">
<div class="aboutme__wrapper-3">
    <div class="aboutme__wrapper-4">
    <p class="aboutme__subtitle-2">Хотите познакомиться ближе?<br>
      Начните с индивидуальной первой встречи.</p>
      <NuxtLink class="aboutme__btn btn-reset" @click="scroll">Забронировать встречу</NuxtLink>
    </div>
  </div>
</div>
  </section>
</template>

<script lang="ts" setup>
const items = AboutItems
const { $gsap } = useNuxtApp()
const scroll = () => {
  const scrollSection1 = document.getElementById('contacts')
  if (scrollSection1) {
    $gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: scrollSection1, offsetY: 20 },
      ease: 'power2.inOut'
    })
  }
}
</script>

<style lang="scss" scoped>
.aboutme {
  background: #EDEDED;
padding: 90px 0 180px 0;
&__title {
  margin-bottom: 120px;
  color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 63.96px; /* 123% */
}
&__subtitle {
  margin-bottom: 1.4375rem;
  color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 36.9px; /* 123% */
}
&__content {
  display: flex;
  &-reverse {
    flex-direction: row-reverse;
  }
}
&__img {
  max-width: 50%;
  height: auto;
}
&__content-2 {
  padding: 40px 120px;
  background: #FFF;
}
&__description {
  margin-bottom: 1.25rem;
  color: #000;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 25px; /* 138.889% */
&:last-child {
  margin-bottom: 0;
}
}
&__wrapper {
  margin-bottom: 165px;
  display: flex;
  justify-content: center;
}
&__wrapper-1 {
  display: flex;
  justify-content: center;
  max-width: 1200px;
}
&__subtitle-2 {
  max-width: 450px;
  color: #000;
font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 300;
line-height: 34.1px; /* 155% */
}
&__wrapper-4 {
  display: flex;
  gap: 150px;
  align-items: center;
  justify-content: center;
}
&__btn  {
  padding: 20px 60px;
  color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 5px;
background: #038C5C;
}
}
</style>