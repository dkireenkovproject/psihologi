export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  css: ['~/assets/scss/main.scss'],
  swiper: {
		prefix: 'Swiper',
		styleLang: 'scss',
		modules: ['navigation', 'pagination'],
	},
  modules: [
    'nuxt-swiper',
  ],
  build: {
    transpile: ['gsap'],
  },
  plugins: [
    '~/plugins/gsap.ts'
  ]
});
