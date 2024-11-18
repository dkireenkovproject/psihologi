<template>
  <section class="about">
    <div class="container">
      <div class="about__wrapper">
        <div class="about__content-1">        <h2 class="about__title">О себе</h2>
        <span class="about__dash"></span>
        <p class="about__text">Здравствуйте, я Мария Королева, психолог.<br><br>

С 2012 года помогаю своим клиентам справиться со страхами, тревогой, стрессом или эмоциональным перенапряжением.<br><br>

Если у вас возникают трудности в отношениях, вы часто конфликтуете с близкими, сомневаетесь в себе или тяготитесь зависимостью - все это возможные темы для работы со мной.<br><br>

Я училась и в России и за рубежом. Моими учителями были Стивен Гиллиген, Роберт Дилтс, Джудит Делозье, Римантас Кочунас, Александр Алексейчик, Михаил Гинзбург.<br><br>

Мои клиенты говорят, что я создаю для них теплую атмосферу, в которой легко и комфортно решать даже самые сложные вопросы.</p>
<NuxtLink to="/about" class="about__btn btn-reset">Узнать больше</NuxtLink>
</div>
<div class="about__content-2"><img class="about__img" src="/img/about-home.jpg" alt="about"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.about {
  background: #DB9809;
  padding: 180px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: 40% 55%;
    gap: 5%;
  }
  &__dash {
    margin-bottom: 25px;
    display: block;
    max-width: 50px;
    width: 100%;
    height: 3px;
    background-color: black;
  }
  &__title {
    margin-bottom: 25px;
    color: #000;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__text {
    margin-bottom: 64px;
    color: #000;
font-family: 'Akrobat';
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 31px; /* 155% */
letter-spacing: 1px;

  }
  &__img {
    width: 100%;
  }
  &__btn {
    padding: 20px 62px;
    color: #FFF;
    background-color: #000000;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration: none;
  }
}
</style>