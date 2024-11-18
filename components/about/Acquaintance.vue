<template>
  <section class="acquaintance">
    <div class="container">
<div class="acquaintance__wrapper">
  <div class="acquaintance__content-1">
    <img class="acquaintance__img" src="/img/about-acquaintance-1.jpg" alt="acquaintance">
  </div>
  <div class="acquaintance__content-2">
<h2 class="acquaintance__title">Давайте знакомиться!</h2>
<span class="acquaintance__span">Немного обо мне</span>
<div class="acquaintance__center"><span class="acquaintance__dash"></span></div>
<div class="acquaintance__description-wrapper">
<p class="acquaintance__description">Психологическое консультирование для меня—
возможность участвовать в отношениях, где фокус моего
внимания всегда на ваших потребностях.</p>
<p class="acquaintance__description">Я верю в том, что работа со мной помогает вам идти туда,
куда вы хотите идти. И исцелить то, что должно быть
исцелено. Вместе мы создадим безопасную среду, которая
необходима для продуктивной работы и собственный язык
для понимания ваших потребностей, который останется с
вами навсегда.</p>
<div class="acquaintance__center"><a class="acquaintance__link" href="#"><img class="acquaintance__img-2" src="/img/about-acquaintance.png" alt="acquaintance"></a></div>
</div>
  </div>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.acquaintance {
  padding: 180px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  &__title {
    margin-bottom: 10px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 45.852px;
font-style: normal;
font-weight: 700;
line-height: 65px; /* 159.113% */
  }
  &__span {
    margin-bottom: 16px ;
    display: block;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 27px; /* 180% */
opacity: 0.6;
  }
  &__dash {
    margin-bottom: 18px;
    display: block;
    opacity: 0.9;
    background: #616161;
    width: 50px;
height: 3px;
  }
  &__description {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 18.594px;
font-style: normal;
font-weight: 400;
line-height: 31px; /* 166.723% */
  }
  &__description-wrapper {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__img-2 {
    max-width: 200px;
min-height: 126.66px;
  }
  &__center {
    display: flex;
    justify-content: center;
  }
}
</style>