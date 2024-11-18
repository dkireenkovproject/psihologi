<template>
  <section class="content">
    <div class="container">
      <h2 class="content__title">Выбирайте самую интересную для вас тему
      </h2>
      <p class="content__description">Я надеюсь, что мои публикации будут вам
        полезны</p>
        <div class="content__wrapper">
          <ul class="content__list list-reset">
            <li v-for="(item, index) in items" :key="index" class="content__item">
              <NuxtLink :to="`/blog/${item.id}`" class="content__link">
                <img class="content__img" :src="item.img" alt="content">
                <h3 class="content__subtitle">{{ item.title }}</h3>
              </NuxtLink>
            </li>
          </ul>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const items = BlogItems;
</script>

<style lang="scss" scoped>
.content {
  padding-top: 30px;
  padding-bottom: 161px;
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
    margin-bottom: 94px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 51.66px; /* 123% */
  }
  &__subtitle {
    color: #000;
font-family: 'Akrobat';
font-size: 26px;
font-style: normal;
text-align: center;
font-weight: 700;
line-height: 31.98px; /* 123% */
  }
  &__link {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-decoration: none;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

}
</style>