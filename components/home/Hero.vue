<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper"><h1 class="hero__title">Психология как искусство быть рядом</h1>
        <p class="hero__subtitle">Я всегда с вами и за вас.
         </p>
          <p class="hero__subtitle hero__pd1"> Даже когда вы против себя... Особенно в эти моменты.</p>
          <p class="hero__subtitle  hero__pd2">Консультация частного психолога в Москве.</p>
          <div class="hero__btn-wrapper">
<NuxtLink class="hero__btn hero__btn-color btn-reset" @click="scroll">Записаться на встречу</NuxtLink> <NuxtLink to="/contacts" class="hero__btn btn-reset">Контакты для связи</NuxtLink>
</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
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

<style scoped lang="scss" >
.hero {
  background-image: linear-gradient(0deg, rgba(5, 5, 5, 0.70) 0%, rgba(140, 103, 3, 0.60) 100%), url('/img/hero.png');
  height: 950px;
    width: 100%;
    background-position:center;
    background-size: cover;
    &__wrapper {
      padding: 250px 0 20px 0; 
      max-width: 860px;
    }
    &__title {
      margin-bottom: 40px;
      color: #FFF;
font-family: 'Akrobat';
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: 71.34px; /* 123% */
letter-spacing: 1px;
    }
    &__subtitle {
      color: #AFAFAF;
font-family: 'Akrobat';
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: 43.4px; /* 155% */
letter-spacing: 1.2px;
    }
    &__btn {
padding: 20px 62px;
color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: #E0E0E0;
text-decoration: none;

&-color {
  background: #FFD600;
}
    }
    &__btn-wrapper {
      display: flex;
      gap: 20px;
    }
    &__pd1 {
  margin-bottom: 53px;
}
&__pd2 {
  margin-bottom: 113px;
}
}
</style>