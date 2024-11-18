<template>
  <section class="certificates">
<div class="container">
    <h2 class="certificates__title">Мои сертификаты</h2>
    <Swiper
    navigation
     class="certificates-swiper"
			:modules="[SwiperNavigation]"
			:slides-per-view="1"
			:loop="true"
			space-between="300"

    >
      <SwiperSlide v-for="(certificate, index) in slide" :key="index">
<div class="certificates__wrapper">
        <img class="certificates__img" :src="certificate.img" alt="certificate">
     </div>
      </SwiperSlide>

    </Swiper>
  </div>
  </section>
</template>

<script lang="ts" setup>
const slide = CertificatesImg
</script>

<style lang="scss" scoped>
.certificates {
  padding: 80px 0;
  &__title {
    margin-bottom: 80px;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 46px;
font-style: normal;
font-weight: 700;
line-height: 56.58px; /* 123% */
  }
  &__wrapper {
    display: flex;
    justify-content: center;
  }
// &__img {
//   width: 100%;
//   height: 100%;
// }
}
</style>
<!-- <style>
.certificates-swiper .swiper-slide {
width: 760px;
  margin: 0; /* Убираем лишние отступы */
  padding: 0; /* Убираем лишние паддинги */
  box-sizing: border-box; /* Гарантируем, что отступы не влияют на размер */
}
.certificates-swiper .swiper-slide-active {
width: 760px !important;

}
.certificates-swiper .swiper-slide-next {
max-width: 760px !important;

}
</style> -->
