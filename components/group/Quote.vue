<template>
  <section class="quote">
    <div class="container">
      <div class="quote__content">
        <img class="quote__img" src="/img/qoute.png" alt="quote">
<div class="quote__wrapper">
  <h2 class="quote__title">"Одиночество обусловлено не отсутствием людей вокруг, а невозможностью говорить с людьми о том, что кажется тебе существенным."</h2>
  <span class="quote__span">Карл Густав Юнг, психиатр и педагог</span>
</div>

    </div>
  </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.quote {
  padding: 100px 0;

  &__content {
    display: flex;
    align-items:flex-start;
    justify-content: center;
gap: 40px;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__title {
    margin-bottom: 30px;
  color: #000000;
font-family: 'Akrobat';
font-size: 30px;
font-style: normal;
font-weight: 700;
  }
&__span {
  
  color: #000000;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 400;
}
&__img {
  font-size: 0;
  flex-shrink: 0;
}
}
</style>