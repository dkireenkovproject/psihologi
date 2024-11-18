<template>
  <header class="header">
    <div class="header__wrapper">
      <NuxtLink to="/" class="header__logo-link"><img class="header__logo" src="/img/logo.png" alt="logo"> </NuxtLink><nav class="header__nav">
        <ul class="header__list list-reset">
          <li class="header__item">
            <NuxtLink to="/about" class="header__link">Обо мне</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/services" class="header__link">Услуги</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/group" class="header__link">Группы</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/blog" class="header__link">Блог</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/contacts" class="header__link">Контакты</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  padding: 5px 45px;
  background: #F5A327;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__list {
    display: flex;
    gap: 50px;
  }
  &__logo {
    width: 110px;
    height: auto;
  }
  &__link {
    color: #FFF;
text-align: right;
font-family: 'Akrobat';
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration: none;
  }
}
</style>