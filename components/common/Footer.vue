<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__nav">
        <ul class="footer__list list-reset">
          <li class="footer__item">
            <NuxtLink to="/blog" class="footer__link">Блог</NuxtLink>
          </li>
          <li class="footer__item">
            <NuxtLink to="/about" class="footer__link">Обо мне</NuxtLink>
          </li>
          <li class="footer__item">
            <NuxtLink to="/questions" class="footer__link">Частые вопросы</NuxtLink>
          </li>
          <li class="footer__item">
            <NuxtLink to="/contacts" class="footer__link">Контакты</NuxtLink>
          </li>

        </ul>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
  background: #171717;
  padding: 60px 0;
  &__list {
    display: flex;
    justify-content: center;
    gap: 35px;
  }
  &__link {
    color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
}
</style>