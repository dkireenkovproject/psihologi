<template>
  <section class="hero">
    <div class="container">
<h1 class="hero__title">Блог</h1>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hero {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 40%, rgba(0, 0, 0, 0.40) 100%),url('/img/blog-hero.png');
  min-height: 650px;
    width: 100%;
    background-position: center center;    background-repeat: no-repeat;
background-size: cover;
&__title {
  padding-top: 280px;
  color: #FFF;
text-align: center;
font-family: 'Akrobat';
font-size: 72px;
font-style: normal;
font-weight: 700;
line-height: 84.24px; /* 117% */
letter-spacing: 0.5px;
}
}


</style>