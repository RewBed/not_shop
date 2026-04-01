import type gsap from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Ref } from 'vue'

interface RevertableContext {
  revert: () => void
}

export function useLandingAnimations(rootRef: Ref<HTMLElement | null>) {
  let heroIntroTimeline: gsap.core.Timeline | null = null
  let sectionRevealTriggers: ScrollTrigger[] = []
  let animationContext: RevertableContext | null = null

  const cleanupAnimations = () => {
    heroIntroTimeline?.kill()
    sectionRevealTriggers.forEach((trigger) => trigger.kill())
    sectionRevealTriggers = []
    animationContext?.revert()
    animationContext = null
  }

  const initLandingAnimations = async () => {
    const rootElement = rootRef.value
    if (!rootElement) {
      return
    }

    const { $gsap, $scrollTrigger } = useNuxtApp()
    if (!$gsap || !$scrollTrigger) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    await nextTick()
    cleanupAnimations()

    animationContext = $gsap.context(() => {
      heroIntroTimeline = $gsap.timeline({
        defaults: {
          ease: 'power2.out'
        }
      })

      heroIntroTimeline
        .from('.topbar', {
          y: -20,
          autoAlpha: 0,
          duration: 0.42
        })
        .from(
          '.hero-panel .hero-copy > *',
          {
            y: 28,
            autoAlpha: 0,
            duration: 0.56,
            stagger: 0.08
          },
          '-=0.14'
        )
        .from(
          '.hero-panel .hero-preview',
          {
            x: 24,
            autoAlpha: 0,
            duration: 0.64
          },
          '-=0.48'
        )

      const revealSections = Array.from(
        rootElement.querySelectorAll<HTMLElement>('.section-reveal')
      ).filter((section) => section.id !== 'hero')

      revealSections.forEach((section) => {
        $gsap.set(section, {
          autoAlpha: 0,
          y: 48
        })

        const tween = $gsap.to(section, {
          autoAlpha: 1,
          y: 0,
          duration: 0.74,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: section,
            start: 'top 84%',
            once: true
          }
        })

        if (tween.scrollTrigger) {
          sectionRevealTriggers.push(tween.scrollTrigger)
        }
      })
    }, rootElement)

    $scrollTrigger.refresh()
  }

  onMounted(() => {
    void initLandingAnimations()
  })

  onBeforeUnmount(() => {
    cleanupAnimations()
  })
}
