<script setup lang="ts">
type PlanId = 'start' | 'business' | 'premium'
type DemoFilter = 'all' | PlanId

interface HeroSlideMetric {
  value: string
  label: string
  icon: string
}

interface HeroSlide {
  id: PlanId
  eyebrow: string
  title: string
  subtitle: string
  icon: string
  previewLabel: string
  bullets: string[]
  metrics: HeroSlideMetric[]
}

interface AudienceCard {
  title: string
  pain: string
  icon: string
}

interface SolutionCard {
  title: string
  description: string
  icon: string
}

interface Plan {
  id: PlanId
  label: string
  title: string
  summary: string
  features: string[]
  price: string
  icon: string
  featured?: boolean
}

interface IncludedFeature {
  title: string
  description: string
  icon: string
}

interface FlowStep {
  title: string
  description: string
  icon: string
}

interface DemoItem {
  id: string
  tariff: PlanId
  title: string
  format: string
  icon: string
}

interface ComparisonRow {
  feature: string
  start: string
  business: string
  premium: string
}

interface Testimonial {
  company: string
  result: string
  quote: string
}

interface FaqItem {
  question: string
  answer: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 'start',
    eyebrow: 'Лендинги под разные этапы роста',
    title: 'Готовые лендинги под ваш масштаб бизнеса - запуститесь за 1-3 дня',
    subtitle: 'Вариант Старт: быстро проверяете спрос и не тратите время на долгую разработку.',
    icon: 'ri:seedling-line',
    previewLabel: 'Заглушка: демо тарифа Старт',
    bullets: ['1 лендинг', 'Базовая структура', 'Минимальный дизайн', 'Быстрый запуск рекламы'],
    metrics: [
      { value: '1-2 дня', label: 'Запуск после выбора', icon: 'ri:timer-flash-line' },
      { value: '1 лендинг', label: 'Для теста ниши', icon: 'ri:layout-grid-line' },
      { value: 'Минимум затрат', label: 'Без лишней разработки', icon: 'ri:wallet-3-line' }
    ]
  },
  {
    id: 'business',
    eyebrow: 'Лендинги под разные этапы роста',
    title: 'Вариант Бизнес - продуманная структура и инструменты для роста заявок',
    subtitle: 'Оптимальный пакет: воронка, анимации, формы и кастомизация без потери темпа запуска.',
    icon: 'ri:briefcase-4-line',
    previewLabel: 'Заглушка: демо тарифа Бизнес',
    bullets: ['Сложная структура', 'Анимации', 'Подключение форм', 'Базовая кастомизация'],
    metrics: [
      { value: '3-5 блоков', label: 'Глубина лендинга', icon: 'ri:pages-line' },
      { value: 'Формы + CTA', label: 'Сбор заявок', icon: 'ri:mail-send-line' },
      { value: 'Рост конверсии', label: 'За счет UX', icon: 'ri:line-chart-line' }
    ]
  },
  {
    id: 'premium',
    eyebrow: 'Лендинги под разные этапы роста',
    title: 'Вариант Премиум - максимум структуры, кастомизации и интеграций',
    subtitle: 'Для масштабирования сложных продуктов: CRM, аналитика, глубокая настройка и поддержка.',
    icon: 'ri:vip-crown-2-line',
    previewLabel: 'Заглушка: демо тарифа Премиум',
    bullets: ['Максимальная структура', 'Глубокая кастомизация', 'Интеграции CRM/аналитика', 'Поддержка'],
    metrics: [
      { value: '10+ блоков', label: 'Сложные воронки', icon: 'ri:git-merge-line' },
      { value: 'Интеграции', label: 'CRM и аналитика', icon: 'ri:links-line' },
      { value: 'Приоритет', label: 'Поддержка и развитие', icon: 'ri:customer-service-2-line' }
    ]
  }
]

const audienceCards: AudienceCard[] = [
  {
    title: 'Стартапы',
    pain: 'Быстрый старт в новой нише и проверка гипотез с минимальными рисками.',
    icon: 'ri:rocket-line'
  },
  {
    title: 'Эксперты',
    pain: 'Запуск страницы услуг без долгого продакшена и сложной разработки.',
    icon: 'ri:user-star-line'
  },
  {
    title: 'E-commerce',
    pain: 'Готовые продуктовые блоки для продажи онлайн без кастомного бюджета.',
    icon: 'ri:shopping-bag-4-line'
  },
  {
    title: 'Агентства',
    pain: 'Повторяемый шаблон для разных клиентов и масштабирования офферов.',
    icon: 'ri:building-4-line'
  }
]

const problems = [
  'Долго делать сайт',
  'Дорого у разработчиков',
  'Нет понимания структуры',
  'Сайт не конвертит'
]

const solutions: SolutionCard[] = [
  {
    title: 'Готовые шаблоны',
    description: 'Быстрый старт без долгого проектирования структуры.',
    icon: 'ri:layout-grid-line'
  },
  {
    title: 'Проверенные блоки',
    description: 'Контентные секции уже адаптированы под конверсию.',
    icon: 'ri:shield-check-line'
  },
  {
    title: 'Быстрый запуск',
    description: 'Собираете страницу и запускаете трафик в короткие сроки.',
    icon: 'ri:rocket-line'
  },
  {
    title: 'Продуманный UX',
    description: 'Пользовательский путь уже выстроен до целевого действия.',
    icon: 'ri:cursor-line'
  }
]

const plans: Plan[] = [
  {
    id: 'start',
    label: 'Старт',
    title: 'Быстрый запуск',
    summary: '1 лендинг для теста гипотезы',
    features: ['Базовая структура', 'Минимальный дизайн', 'Без кастомизации'],
    price: 'от 19 000 ₽',
    icon: 'ri:flashlight-line'
  },
  {
    id: 'business',
    label: 'Бизнес',
    title: 'Оптимальный рост',
    summary: 'Сбалансированный вариант для заявок',
    features: ['Сложная структура', 'Анимации', 'Подключение форм', 'Базовая кастомизация'],
    price: 'от 49 000 ₽',
    icon: 'ri:briefcase-4-line',
    featured: true
  },
  {
    id: 'premium',
    label: 'Премиум',
    title: 'Максимум возможностей',
    summary: 'Глубокая адаптация под ваш процесс',
    features: ['Максимальная структура', 'Глубокая кастомизация', 'CRM и аналитика', 'Приоритетная поддержка'],
    price: 'от 99 000 ₽',
    icon: 'ri:vip-diamond-line'
  }
]

const tariffLabel: Record<PlanId, string> = {
  start: 'Старт',
  business: 'Бизнес',
  premium: 'Премиум'
}

const demoTabs = [
  { value: 'all', label: 'Все тарифы', icon: 'ri:list-check-2' },
  { value: 'start', label: 'Старт', icon: 'ri:seedling' },
  { value: 'business', label: 'Бизнес', icon: 'ri:briefcase-4' },
  { value: 'premium', label: 'Премиум', icon: 'ri:vip-crown-2' }
]

const demoItems: DemoItem[] = [
  {
    id: 'demo-start',
    tariff: 'start',
    title: 'Демо: запуск ниши',
    format: 'Скриншот / видео',
    icon: 'ri:image-2-line'
  },
  {
    id: 'demo-business',
    tariff: 'business',
    title: 'Демо: воронка услуг',
    format: 'Скриншот / видео',
    icon: 'ri:play-circle-line'
  },
  {
    id: 'demo-premium',
    tariff: 'premium',
    title: 'Демо: сложный продукт',
    format: 'Скриншот / видео',
    icon: 'ri:slideshow-4-line'
  }
]

const includedFeatures: IncludedFeature[] = [
  {
    title: 'Готовая структура блоков',
    description: 'Секции уже собраны в правильной последовательности для заявки.',
    icon: 'ri:layout-grid-line'
  },
  {
    title: 'Адаптивность',
    description: 'Корректно выглядит на телефонах, планшетах и десктопе.',
    icon: 'ri:smartphone-line'
  },
  {
    title: 'SEO-база',
    description: 'Базовая техническая подготовка под индексацию и скорость.',
    icon: 'ri:search-eye-line'
  },
  {
    title: 'Формы заявок',
    description: 'Готовые точки сбора лидов с понятными сценариями действия.',
    icon: 'ri:mail-send-line'
  },
  {
    title: 'Быстрая загрузка',
    description: 'Оптимизированная структура для быстрого старта рекламы.',
    icon: 'ri:rocket-2-line'
  }
]

const flowSteps: FlowStep[] = [
  {
    title: 'Выбираете тариф',
    description: 'Сравниваете варианты Старт, Бизнес и Премиум, чтобы подобрать нужную глубину структуры и функциональности.',
    icon: 'ri:price-tag-3-line'
  },
  {
    title: 'Получаете шаблон',
    description: 'Сразу получаете готовый лендинг с продуманной архитектурой блоков, адаптивной сеткой и базовыми настройками.',
    icon: 'ri:folder-download-line'
  },
  {
    title: 'Заполняете контент',
    description: 'Меняете тексты, оффер, изображения и CTA под свою нишу без долгой разработки и бесконечных правок.',
    icon: 'ri:file-edit-line'
  },
  {
    title: 'Запускаете рекламу',
    description: 'Подключаете источники трафика и начинаете собирать заявки, используя уже подготовленный конверсионный сценарий.',
    icon: 'ri:megaphone-line'
  }
]

const comparisonRows: ComparisonRow[] = [
  { feature: 'Блоки', start: '1 набор', business: '2 набора', premium: '3+ наборов' },
  { feature: 'Кастомизация', start: 'Нет', business: 'Частично', premium: 'Полная' },
  { feature: 'Интеграции', start: 'Нет', business: 'Базовые', premium: 'Расширенные' },
  { feature: 'Поддержка', start: 'Нет', business: 'Стандарт', premium: 'Приоритет' }
]

const comparisonColumns = [
  { accessorKey: 'feature', header: 'Функция' },
  { accessorKey: 'start', header: 'Старт' },
  { accessorKey: 'business', header: 'Бизнес' },
  { accessorKey: 'premium', header: 'Премиум' }
]

const testimonials: Testimonial[] = [
  {
    company: 'EduStart',
    result: '+34% заявок за 2 недели',
    quote: 'Запустили лендинг за три дня и сразу пошли лиды.'
  },
  {
    company: 'Fit Expert',
    result: 'CPL ниже на 27%',
    quote: 'Взяли готовую структуру и быстро адаптировали под оффер.'
  },
  {
    company: 'Shopline',
    result: 'Конверсия выросла с 1.8% до 3.1%',
    quote: 'Удобно, что UX уже продуман: меньше догадок и переделок.'
  }
]

const faqItems: FaqItem[] = [
  {
    question: 'Можно ли редактировать шаблон?',
    answer: 'Да. Все блоки можно менять: тексты, цвета, порядок секций, медиа и CTA.'
  },
  {
    question: 'Под какие ниши подходят лендинги?',
    answer: 'Под услуги, экспертные продукты, e-commerce, онлайн-курсы, b2b и франшизы.'
  },
  {
    question: 'Нужен ли разработчик для запуска?',
    answer: 'Не обязательно. Базовые изменения выполняются без кода, а сложные интеграции можно подключить отдельно.'
  },
  {
    question: 'Сколько времени занимает запуск?',
    answer: 'Обычно от 1 до 3 дней, в зависимости от тарифа и готовности контента.'
  }
]

const faqAccordionItems = computed(() => faqItems.map(item => ({
  label: item.question,
  content: item.answer,
  icon: 'ri:question-line'
})))

const activeDemoFilter = ref<DemoFilter>('all')

const filteredDemos = computed(() => {
  if (activeDemoFilter.value === 'all') {
    return demoItems
  }
  return demoItems.filter(item => item.tariff === activeDemoFilter.value)
})

let heroIntroTimeline: any = null
let sectionRevealTriggers: any[] = []

const initLandingAnimations = async () => {
  const { $gsap, $scrollTrigger } = useNuxtApp()
  if (!$gsap || !$scrollTrigger) {
    return
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  await nextTick()

  heroIntroTimeline?.kill()
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
    .from('.hero-panel .hero-copy > *', {
      y: 28,
      autoAlpha: 0,
      duration: 0.56,
      stagger: 0.08
    }, '-=0.14')
    .from('.hero-panel .hero-preview', {
      x: 24,
      autoAlpha: 0,
      duration: 0.64
    }, '-=0.48')

  sectionRevealTriggers.forEach(trigger => trigger.kill())
  sectionRevealTriggers = []

  const revealSections = Array
    .from(document.querySelectorAll<HTMLElement>('.section-reveal'))
    .filter(section => section.id !== 'hero')

  revealSections.forEach(section => {
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

  $scrollTrigger.refresh()
}

onMounted(() => {
  void initLandingAnimations()
})

onBeforeUnmount(() => {
  heroIntroTimeline?.kill()
  sectionRevealTriggers.forEach(trigger => trigger.kill())
  sectionRevealTriggers = []
})

useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})

useSeoMeta({
  title: 'Готовые лендинги под ваш масштаб бизнеса - запуск за 1-3 дня',
  description: 'Готовые landing page для старта, роста и масштабирования бизнеса. Выберите тариф, посмотрите демо и запуститесь быстро.',
  ogTitle: 'Готовые лендинги под ваш масштаб бизнеса',
  ogDescription: '3 варианта лендингов: Старт, Бизнес и Премиум. Запуск за 1-3 дня.',
  ogType: 'website'
})
</script>

<template>
  <main class="landing">
    <header class="topbar">
      <div class="shell topbar-inner">
        <a class="brand" href="#hero">
          <UIcon name="ri:stack-line" />
          not_shop landing
        </a>
        <nav class="topbar-nav" aria-label="Навигация по секциям">
          <UButton href="#plans" variant="ghost" color="neutral" class="topbar-btn">
            <UIcon name="ri:price-tag-3-line" />
            Тарифы
          </UButton>
          <UButton href="#demos" variant="ghost" color="neutral" class="topbar-btn">
            <UIcon name="ri:slideshow-3-line" />
            Демо
          </UButton>
          <UButton href="#faq" variant="ghost" color="neutral" class="topbar-btn">
            <UIcon name="ri:question-line" />
            FAQ
          </UButton>
        </nav>
      </div>
    </header>

    <section id="hero" class="section-block hero section-reveal">
      <UCarousel class="hero-carousel" :items="heroSlides" arrows dots loop>
        <template #default="{ item: slide }">
          <article class="hero-panel">
            <div class="hero-copy">
              <UBadge color="primary" variant="soft" class="hero-eyebrow">{{ slide.eyebrow }}</UBadge>
              <h1>{{ slide.title }}</h1>
              <p>{{ slide.subtitle }}</p>

              <div class="hero-actions">
                <UButton href="#plans" size="lg">Выбрать вариант</UButton>
                <UButton href="#demos" size="lg" variant="outline" color="neutral">Посмотреть демо</UButton>
              </div>

              <div class="hero-metrics">
                <UCard v-for="metric in slide.metrics" :key="metric.label" class="metric-card">
                  <UIcon :name="metric.icon" class="metric-icon" />
                  <p class="metric-value">{{ metric.value }}</p>
                  <p class="metric-label">{{ metric.label }}</p>
                </UCard>
              </div>
            </div>

            <UCard class="hero-preview">
              <template #header>
                <div class="hero-preview-head">
                  <span class="hero-plan-pill">
                    <UIcon :name="slide.icon" />
                    {{ tariffLabel[slide.id] }}
                  </span>
                  <span class="hero-plan-tag">Запуск 1-3 дня</span>
                </div>
              </template>

              <div class="image-placeholder image-placeholder-xl">
                <UIcon name="ri:image-2-line" />
                <span>{{ slide.previewLabel }}</span>
              </div>

              <ul class="hero-bullet-list">
                <li v-for="bullet in slide.bullets" :key="`${slide.id}-${bullet}`">
                  <UIcon name="ri:check-line" />
                  <span>{{ bullet }}</span>
                </li>
              </ul>
            </UCard>
          </article>
        </template>
      </UCarousel>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Для кого это</UBadge>
          <h2>Решение под разные типы бизнеса</h2>
        </div>
        <div class="audience-grid">
          <UCard v-for="item in audienceCards" :key="item.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.pain }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block section-dark section-reveal">
      <div class="shell">
        <div class="section-head section-head-light">
          <UBadge color="neutral" variant="soft" class="section-kicker">Проблема и решение</UBadge>
          <h2>Снимаем барьеры до запуска рекламы</h2>
        </div>

        <div class="problem-layout">
          <div class="problem-stack">
            <UCard class="card-dark">
              <template #header>
                <h3><UIcon name="ri:close-circle-line" /> Что тормозит запуск</h3>
              </template>
              <ul class="issue-list issue-danger">
                <li v-for="problem in problems" :key="problem">
                  <UIcon name="ri:close-line" />
                  <span>{{ problem }}</span>
                </li>
              </ul>
            </UCard>

            <UCard class="card-dark card-dark-success">
              <template #header>
                <h3><UIcon name="ri:checkbox-circle-line" /> Что это решает</h3>
              </template>
              <ul class="issue-list issue-success">
                <li v-for="solution in solutions" :key="solution.title">
                  <UIcon name="ri:check-line" />
                  <span>{{ solution.title }}</span>
                </li>
              </ul>
            </UCard>
          </div>

          <UCard class="problem-visual" aria-label="Изображение раздела">
            <div class="image-placeholder image-placeholder-visual">
              <UIcon name="ri:image-2-line" />
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Решение</UBadge>
          <h2>Что получаете вы</h2>
        </div>
        <div class="audience-grid">
          <UCard v-for="solution in solutions" :key="solution.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="solution.icon" /></div>
            <h3>{{ solution.title }}</h3>
            <p>{{ solution.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section id="plans" class="section-block pricing-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Тарифы</UBadge>
          <h2>Выберите подходящий вариант</h2>
        </div>

        <div class="pricing-grid">
          <UCard
            v-for="plan in plans"
            :key="plan.id"
            :class="['plan-card', { 'plan-card-featured': plan.featured }]"
          >
            <UBadge v-if="plan.featured" class="recommended-badge" color="warning">Рекомендуем</UBadge>

            <div class="plan-top">
              <UIcon :name="plan.icon" />
              <p class="plan-label">{{ plan.label }}</p>
            </div>

            <h3>{{ plan.title }}</h3>
            <p class="plan-summary">{{ plan.summary }}</p>

            <ul class="issue-list issue-success">
              <li v-for="feature in plan.features" :key="`${plan.id}-${feature}`">
                <UIcon name="ri:check-line" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <p class="plan-price">{{ plan.price }}</p>

            <div class="plan-actions">
              <UButton href="#demos" variant="outline" color="neutral">Посмотреть демо</UButton>
              <UButton href="#final-cta">Выбрать</UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block flow-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Как это работает</UBadge>
          <h2>Путь от выбора до запуска</h2>
        </div>

        <ol class="flow-list">
          <li v-for="(step, index) in flowSteps" :key="step.title" class="flow-item">
            <span class="flow-number">{{ index + 1 }}</span>
            <UCard class="flow-card">
              <div class="flow-card-body">
                <div class="flow-copy">
                  <h3 class="flow-step-title">{{ step.title }}</h3>
                  <p class="flow-step-description">{{ step.description }}</p>
                </div>
                <UIcon :name="step.icon" />
              </div>
            </UCard>
          </li>
        </ol>

        <p class="flow-help">При необходимости помогаем с настройкой и публикацией.</p>
      </div>
    </section>

    <section id="demos" class="section-block demo-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Примеры лендингов</UBadge>
          <h2>Демо по тарифам</h2>
        </div>

        <UTabs
          v-model="activeDemoFilter"
          :items="demoTabs"
          :content="false"
          value-key="value"
          label-key="label"
          variant="pill"
          color="primary"
          class="demo-tabs"
        />

        <div class="demo-grid">
          <UCard v-for="demo in filteredDemos" :key="demo.id" class="demo-card">
            <div class="demo-media">
              <UIcon :name="demo.icon" />
              <div class="image-placeholder image-placeholder-lg">
                <UIcon name="ri:image-2-line" />
                <span>Заглушка: {{ demo.format }}</span>
              </div>
            </div>
            <h3>{{ demo.title }}</h3>
            <p class="demo-tariff">
              <UIcon name="ri:price-tag-3-line" />
              Тариф: {{ tariffLabel[demo.tariff] }}
            </p>
            <UButton variant="outline" color="neutral">Открыть демо</UButton>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Что входит</UBadge>
          <h2>База для быстрого запуска</h2>
        </div>
        <div class="audience-grid include-grid">
          <UCard v-for="item in includedFeatures" :key="item.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block comparison-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Сравнение тарифов</UBadge>
          <h2>Понятная таблица различий</h2>
        </div>

        <div class="comparison-wrap">
          <UTable :data="comparisonRows" :columns="comparisonColumns" />
        </div>
      </div>
    </section>

    <section class="section-block section-dark testimonial-section section-reveal">
      <div class="shell">
        <div class="section-head section-head-light">
          <UBadge color="neutral" variant="soft" class="section-kicker">Отзывы и кейсы</UBadge>
          <h2>Реальные результаты после запуска</h2>
        </div>

        <div class="testimonial-grid">
          <UCard v-for="item in testimonials" :key="item.company" class="testimonial-card">
            <UIcon name="ri:double-quotes-l" />
            <div class="image-placeholder image-placeholder-sm">Заглушка: скрин результата</div>
            <h3>{{ item.company }}</h3>
            <p class="testimonial-result">{{ item.result }}</p>
            <p>{{ item.quote }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section id="faq" class="section-block faq-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">FAQ</UBadge>
          <h2>Частые вопросы перед покупкой</h2>
        </div>

        <UAccordion type="single" collapsible :items="faqAccordionItems" />
      </div>
    </section>

    <section id="final-cta" class="section-block final-cta section-reveal">
      <div class="shell">
        <UCard class="cta-card">
          <h2>Запустите лендинг уже сегодня</h2>
          <p>Выберите тариф и начните получать заявки без долгой разработки.</p>
          <div class="cta-actions">
            <UButton href="#plans" size="lg">Выбрать тариф</UButton>
            <UButton href="#footer" size="lg" color="neutral" variant="outline">Получить консультацию</UButton>
          </div>
        </UCard>
      </div>
    </section>

    <footer id="footer" class="footer">
      <div class="shell footer-inner">
        <p class="footer-brand">
          <UIcon name="ri:stack-line" />
          not_shop landing
        </p>
        <a href="mailto:hello@notshop.ru">
          <UIcon name="ri:mail-line" />
          hello@notshop.ru
        </a>
        <a href="#">
          <UIcon name="ri:shield-check-line" />
          Политика
        </a>
        <a href="#">
          <UIcon name="ri:instagram-line" />
          Соцсети
        </a>
      </div>
    </footer>

    <UButton href="#plans" class="floating-cta" color="primary">
      <UIcon name="ri:price-tag-3-line" />
      Выбрать тариф
    </UButton>
  </main>
</template>
