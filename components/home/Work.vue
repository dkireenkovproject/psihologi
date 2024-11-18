<template>
  <section class="work">
    <div class="container">
<h2 class="work__title">Как я работаю:</h2>
<div class="work__wrapper">
<ul class="work__list list-reset">
  <li v-for="(item, index) in items" :key="index" class="work__item">
<img class="work__img" :src="item.img" alt="work">
<p class="work__description">{{ item.description }}</p>
  </li>
</ul>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {WorkItems} from '~/utils/WorkItems';

const items = WorkItems;
</script>

<style lang="scss" scoped>
.work {
  padding:  75px 0 105px 0;
  &__title {
    margin-bottom: 90px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 42px;
font-style: normal;
font-weight: 700;
line-height: 51.66px; /* 123% */
  }
  &__list {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 38px;
  }
  &__item {
    display: flex;
    gap: 40px;
    align-items: center;
  }
  &__description {
    color: #474747;
font-family: 'Akrobat';
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 27px; /* 135% */
letter-spacing: 1px;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>