<template>
  <section class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav">
          <ul class="header__list list-reset">
            <li class="header__item">
              <NuxtLink to="/" class="header__link">Главная</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink @click="scroll1" class="header__link">О группе</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink @click="scroll2" class="header__link">Ведущие</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/contacts" class="header__link">Контакты</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink @click="scroll3" class="header__link">Часто задаваемые вопросы</NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink @click="scroll4" class="header__link">Запись</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()
const scroll1 = () => {
  const scrollSection1 = document.getElementById('group-1')
  if (scrollSection1) {
    $gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: scrollSection1, offsetY: 20 },
      ease: 'power2.inOut'
    })
  }
}
const scroll2 = () => {
  const scrollSection1 = document.getElementById('group-2')
  if (scrollSection1) {
    $gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: scrollSection1, offsetY: 20 },
      ease: 'power2.inOut'
    })
  }
}
const scroll3 = () => {
  const scrollSection1 = document.getElementById('group-3')
  if (scrollSection1) {
    $gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: scrollSection1, offsetY: 20 },
      ease: 'power2.inOut'
    })
  }
}
const scroll4 = () => {
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
.header {
  padding: 10px 0;
  background-color:  rgba(43, 42, 42, 0.7);
  
  &__list  {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  &__link {
    color: #ffffff;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 700;
text-decoration: none;
cursor: pointer;
  }
}
</style>