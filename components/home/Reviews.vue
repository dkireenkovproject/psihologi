<template>
  <div class="slider">
<div class="slider__title">Отзывы клиентов</div>
    <Swiper
    navigation
			:modules="[SwiperNavigation]"
			:slides-per-view="1"
			:loop="true"
			space-between="300"
    >
      <SwiperSlide v-for="(testimonial, index) in slide" :key="index">
        <div class="container">
        <div class="slider__wrapper">
        <p class="slider__text">{{ testimonial.text }}</p>
      </div>
    </div>
      </SwiperSlide>

    </Swiper>
  </div>

</template>

<script lang="ts" setup>

const slide = SliderHome;
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  padding-bottom: 50px;
  &__text {
max-width: 600px;
    height: auto;
    color: #000;
text-align: center;
font-family: 'Akrobat';
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
}
</style>
<style lang="scss">
.swiper-button-prev::after {
	background-image: url('/svg/arrow-1.svg') !important;
	color: transparent !important;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}

.swiper-button-next::after {
	background-image: url('/svg/arrow-2.svg') !important;
	color: transparent !important;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}
.swiper-wrapper {
  align-items: center !important;
}
</style>