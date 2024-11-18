<template>
  <section class="content">
    <div class="container">
      <ul class="content__list list-reset">
        <li v-for="(item, index) in items" :key="index" class="content__item">
            <h3 class="content__subtitle">{{ item.title }}</h3>
            <p class="content__description">{{ item.description }}</p>
            <div class="content__link-wrapper"><NuxtLink :to="`/questions/${item.id}`" class="content__link">Подробнее</NuxtLink></div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const items = QuestionsContent;
</script>

<style lang="scss" scoped>
.content {
  padding: 45px 0 135px 0;
  border-bottom: 1px solid #000;
  background: #EFEFEF;
  &__subtitle {
    margin-bottom: 12px;
    color: #000;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32.4px; /* 135% */
  }
  &__description {
    margin-bottom: 25px;
    color: #000;
    font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 27px; /* 150% */
  }
  &__link {
    padding: 14px 30px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
    border-radius: 3px;
border: 1px solid #000;
background: #FFF;
    text-decoration: none;

  }
  &__link-wrapper {
    margin-top: auto;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    padding: 32px 40px;
    border-radius: 5px;
background: #FFF;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  }
}
</style>