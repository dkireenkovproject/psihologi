<template>
  <section class="hero" :style="{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${backgroundImage})` }">
    <div class="container">
<div class="hero__wrapper">
  <h1 class="hero__title">{{ title }}</h1>
  <p class="hero__subtitle">{{ subtitle }}</p>
</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
	subtitle: string
  backgroundImage: string
}>()
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  background: rgba(0, 0, 0, 0.70);
  min-height: 950px;
    width: 100%;
    background-position: center center;    background-repeat: no-repeat;
background-size: cover;
&__title {
  margin-bottom: 40px;
  color: #FFF;
font-family: 'Akrobat';
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 71.34px; /* 123% */
letter-spacing: 1px;
}
&__subtitle {
  color: #ffffff;
font-family: 'Akrobat';
text-align: center;
font-size: 68px;
font-style: normal;
font-weight: 400;
line-height: 73.4px; /* 155% */
letter-spacing: 1px;

}
&__wrapper {
 padding-top: 300px;
}
}

</style>