import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'


gsap.registerPlugin(ScrollToPlugin)

declare module '#app' {
    interface NuxtApp {
      $gsap: typeof gsap;
    }
  }

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('gsap', gsap)
})