<template>
  <section class="address">
    <div class="container">
<h2 class="address__title">Готовы встретиться?</h2>
<p class="address__description">Заполняйте форму и я свяжусь с вами</p>
<div class="address__content">
<form class="address__form">
  <div class="address__wrapper">
    <div class="address__content-wraaper">
    <span class="address__span">Телефон</span>
    <a class="address__link" href="tel:+79999999999">+7 (999) 999-99-99</a>
  </div>
  <input class="address__input" type="email" placeholder="Ваш E-mail" required>
  </div>
  <div class="address__wrapper">
    <div class="address__content-wraaper">
    <span class="address__span">SKYPE</span>
    <a class="address__link address__link-color" href="#">psyvopros</a>
  </div>
  <input class="address__input" type="tel" placeholder="+7(999)-999-99-99" required>
  </div>
  <div class="address__wrapper">
    <div class="address__content-wraaper">
    <span class="address__span">E-MAIL</span>
    <a class="address__link address__link-color" href="mailto:mariakoroleva@bk.ru">mariakoroleva@bk.ru</a>
    <a class="address__link address__link-color" href="mailto:consult@mariakoroleva.com">consult@mariakoroleva.com</a>
  </div>
  <input class="address__input" type="text" placeholder="Ваше имя" required>
  </div>
  <div class="address__wrapper">
    <div class="address__content-wraaper">
      <p class="address__span">Пишите в <a class="address__link-color" href="#">WhatsApp</a> или <a class="address__link-color" href="#">Telegram</a></p>
      <p class="address__span">Facebook:  <a class="address__link-color" href="#">Мария Королева</a></p>
  </div>
  
  <textarea class="address__input-textearea" type="text" placeholder="Ваш вопрос" required></textarea>
  </div>
  <div class="address__wrapper">
    <div class="address__content-wraaper">
      <p class="address__span address__dop-span">г.Москва, м. Сухаревская, Малая Сухаревская
площадь,
дом 2, строение 2</p>
  </div>
<div class="address__btn-wrapper">
  <button class="address__btn btn-reset">Отправить</button>
  </div>
  </div>
</form>
</div>
<div class="address__policy">
<span class="address__text">Даю свое согласие на обработку своих персональных данных, указанных в форме обратной связи (Имя; номер телефона; адрес электронной почты), оператору в целях коммуникации со мной.</span>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.address {
  padding-top: 100px;
  padding-bottom: 150px;
  &__content {
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
  }
  &__title {
    margin-bottom: 40px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__description {
    margin-bottom: 90px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: 36px; /* 150% */
  }
  &__span, &__link {
    display: block;
    color: #000;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 26.1px; /* 145% */
text-decoration: none;
  }
  &__link-color {
    color: #FF8562;
    text-decoration: none;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
align-items: center;
    gap: 180px;
  }
  &__input {
    padding: 20px;
    border: 1px solid #C7C7C7;
    min-width: 451px;
    height: auto;
    outline: none;
  &::placeholder {
    color: #757575;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
}
&__input-textearea {
  padding: 20px;
    border: 1px solid #C7C7C7;
    min-width: 451px;
    height: 100%; 
    min-height: 110px; 
          resize: none;
outline: none;
    }
&__form {
  display: flex;
  flex-direction: column;
  gap: 25px;

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
  border-radius: 30px;
background: #1F5BFF;
}
&__dop-span {
  max-width: 300px;
}
&__btn-wrapper {
  min-width: 451px;
}
&__text {
  max-width: 700px;
  display: block;
  color: #000000;
text-align: center;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 23.25px; /* 155% */
text-decoration: none;
}
&__policy {
  display: flex;
  justify-content: center;
}
}
</style>