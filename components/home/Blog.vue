<template>
  <section class="blog">
    <div class="container">
      <div class="blog__wrapper">
      <span class="blog__sub">БЛОГ АВТОРА</span>
      <h3 class="blog__title">Мои публикации</h3>
      <p class="blog__description">Это ссылки на мои последние статьи.<br>
        Выбирайте самую актуальную тему и читайте.</p>
      </div>
      <ul class="blog__list list-reset">
         <li v-for="(item, index) in items" :key="index" class="blog__item">
          <NuxtLink to="/" class="blog__link">
<img class="blog__img" :src="item.img" alt="blog">
<h3 class="blog__subtitle">{{ item.subtitle }}</h3>
<p class="blog__date">{{ item.description }}</p></NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>

const items = BlogHome;
</script>

<style lang="scss" scoped>
.blog {
  padding-bottom: 131px;
  &__sub {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 2.5px;
text-transform: uppercase;
  }
  &__title {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 64px;
font-style: normal;
font-weight: 700;
line-height: 78.72px; /* 123% */
  }
  &__description {
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 24px;
font-style: normal;
font-weight: 300;
line-height: 36px; /* 150% */
  }
  &__wrapper {
    margin-bottom: 139px;
    display: flex;
    flex-direction: column;
    gap: 49px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  &__subtitle {
    margin-bottom: 13px;
min-height: 100px;
    color: #000;
font-family: 'Akrobat';
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: 31.98px; /* 123% */
  }
  &__date {
    color: #777;
font-family: 'Akrobat';
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 24.8px; /* 155% */
  }
  &__img {
margin-bottom: 13px;
}
&__link {
  text-decoration: none;
}
}
</style>