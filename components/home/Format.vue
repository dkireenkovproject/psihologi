<template>
  <section class="format">
    <div class="container">
<h2 class="format__title">Формат работы</h2>
<ul class="format__list list-reset">
  <li v-for="(item, index) in items" :key="index" class="format__item">
    <h3 class="format__subtitle">{{ item.title }}</h3>
    
    <span class="format__price"> {{ item.price }}</span>
    <p v-for="(description, index) in item.description" :key="index" class="format__description">{{ description }}</p>
    <NuxtLink to="/" class="format__btn btn-reset">Узнать больше</NuxtLink>

  </li>
</ul>
<div class="format__dash-wrapper"><span class="format__dash"></span></div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const items = FormatItems;
</script>

<style lang="scss" scoped>
.format {
  padding-bottom: 47px;
  &__title {
    margin-bottom: 105px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__list {
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  &__item {
    border: 1px solid #ebebeb;
    background-color: #ffffff;
    border-radius: 9px;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;

  }
  &__subtitle {
min-height: 90px;
margin-bottom: 20px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 29.7px; /* 135% */
  }
  &__price {
    display: block;
margin-bottom: 29px;
    color: #DB9809;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__description { 
    text-align: left;
    color: #595959;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 24.8px; /* 155% */
  }
  &__description {
    margin-bottom: 27px;
  }
  &__btn {
    margin-top: auto; /* Прижимает кнопку к низу */
    padding: 14px 30px;
    color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
background: #DB9809;
text-decoration: none;
  }
  // &__content {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;

  // }
  &__dash {
    display: block;
    width: 140px;
height: 1px;
flex-shrink: 0;
background: #000;
&-wrapper {
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
}
  }
}
</style>