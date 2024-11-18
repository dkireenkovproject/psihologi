<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="hero__title">Мария Королева</h1>
        <p class="hero__description">Психолог, член ВЕАЭТ (восточно-европейской ассоциации
          экзистенциальной терапии)</p>
          <span class="hero__dash"></span>
          <p class="hero__description-2">Дорогие друзья, на этой странице вы можете задать мне вопросы, записаться ко мне на
встречу, а еще посмотреть на кабинет, в котором я работаю и увидеть, как ко мне
добраться на личную встречу.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hero {
  background-image:  linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(10, 10, 10, 0.70) 100%), url('/img/contacts-hero.jpg');
  width: 100%;
  height: 500px;
    background-position: center center;    
    background-repeat: no-repeat;
background-size: cover;
&__wrapper {
  max-width: 551px;
  height: auto;
  padding-top: 150px;
  margin-bottom: 170px;
}
&__title {
  margin-bottom: 15px;
  color: #FFF;
font-family: 'Akrobat';
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 50px; /* 156.25% */
}
&__description {
  margin-bottom: 23px;
  color: #FFF;
  font-family: 'Akrobat';
  font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 36px; /* 156.522% */
opacity: 0.4;
}
&__dash {
  margin-bottom: 32px;
  display: block;
  max-width: 654px;
  width: 100%;
height: 1px;
  opacity: 0.2;
background: #FFF;
}
&__description-2 {
  color: #FFF;
  font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
}
}
</style>