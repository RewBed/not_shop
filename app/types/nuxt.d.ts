import type gsap from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
    $scrollTrigger: typeof ScrollTrigger
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $gsap: typeof gsap
    $scrollTrigger: typeof ScrollTrigger
  }
}

export {}
