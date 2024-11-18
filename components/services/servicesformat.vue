<template>
  <section class="format">
    <div class="container">
      <div class="format__wrapper-1"><h1 class="format__title">Выбирайте тот формат работы, который вам более актуален и подходит для решения вашей задачи</h1></div>
      <h2 class="format__subtitle">Услуги психолога</h2>
      <div class="format__wrapper-2">
        <ul class="format__list list-reset">
          <li v-for="(item, index) in items" :key="index" class="format__item"  :class="{ 'format__item-reverse': index % 2 !== 0 }">
<div class="format__content-1">
            <h3 class="format__subtitle-2">{{ item.title }}</h3>
<p class="format__description">{{ item.description }}</p>
<NuxtLink class="format__btn btn-reset" @click="scroll">Узнать больше</NuxtLink> 
</div>
  <img class="format__img" :src="item.img" alt="format">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const items = ServicesItems;

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
.format {
  padding: 121px 0 105px 0;
  &__title {
    margin-bottom: 48px;
    max-width: 700px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 30px;
font-style: normal;
font-weight: 300;
line-height: 40.5px; /* 135% */
  }
  &__wrapper-1 {
    display: flex;
    justify-content: center;
  }
  &__subtitle {
    margin-bottom: 105px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__subtitle-2 {
    margin-bottom: 28px;
    color: #000;
font-family: 'Akrobat';
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: 31.98px; /* 123% */
  }
  &__description {
    margin-bottom: 35px;
    color: #000;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 27.9px; /* 155% */
  }
  &__btn {
    padding: 14px 29px;
    color: #FFFFFF;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 31.98px; /* 123% */
text-decoration: none;
border-radius: 30px;
background: #E8890C;
  }
  &__item {
    display: flex;
    
    gap: 120px;
    &-reverse {
      flex-direction: row-reverse;
    }
  }
  &__img {
    max-width: 460px;
    height: 340px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 120px;
  }
  &__content-1 {
    max-width: 400px;
  }
}
</style>