<template>
  <section class="contacts">
    <div class="container">
      <h2 class="contacts__title">Готов записаться на первую встречу и
        познакомиться:</h2>
        <div class="contacts__dash-wrapper"> <span class="contacts__dash"></span></div>
        <form class="contacts__form">
          <input class="contacts__input" type="email" placeholder="Ваш E-mail" required>
          <input class="contacts__input" type="text" placeholder="Ваше имя" required>
          <input class="contacts__input" type="tel" placeholder="+7(999)-999-99-99" required>
          <input class="contacts__input" type="text" placeholder="Ваш вопрос" required>
          <button class="contacts__btn btn-reset">Отправить</button>
        </form>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.contacts {
  padding-bottom: 71px;
  &__title {
    margin-bottom: 58px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 38px;
font-style: normal;
font-weight: 300;
line-height: 51.3px; /* 135% */
  }
  &__dash {
    display: block;
    width: 140px;
height: 1px;
flex-shrink: 0;
background: #000;
&-wrapper {
  margin-bottom: 30px;
    display: flex;
  justify-content: center;
}
  }
  &__input {
    padding: 20px 21px;
    border: 1px solid #000;
    background: #FFF;
    outline: none;
  }
  &__form {
    display: flex;
    gap: 20px;
  justify-content: center;}
    &__btn {
      padding: 20px 60px;
      color: #FFF;
      background: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;}
}
</style>