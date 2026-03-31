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
  planTag: string
  icon: string
  previewImage: string
  bullets: string[]
  metrics: HeroSlideMetric[]
}

interface TrustItem {
  title: string
  description: string
  icon: string
}

interface AudienceCard {
  title: string
  description: string
  icon: string
}

interface BenefitCard {
  title: string
  description: string
  icon: string
}

interface Plan {
  id: PlanId
  label: string
  title: string
  description: string
  features: string[]
  price: string
  icon: string
  selectLabel: string
  featured?: boolean
}

interface ChooseOption {
  id: PlanId
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
  description: string
  format: string
  icon: string
}

interface IncludedFeature {
  title: string
  description: string
  icon: string
}

interface ComparisonRow {
  feature: string
  start: string
  business: string
  premium: string
}

interface CaseItem {
  title: string
  subtitle: string
  description: string
}

interface FaqItem {
  question: string
  answer: string
}

const heroTitle = 'Готовые лендинги под запуск рекламы и продажи'
const heroSubtitle = 'Выберите формат под свою задачу: быстрый старт, стабильный поток заявок или премиальная подача под высокий чек.'
const heroMicroText = 'Без долгой разработки, сложных брифов и лишних согласований.'
const heroQuickBenefits = [
  'Запуск за 1-3 дня',
  'Под рекламу и заявки',
  '3 уровня упаковки',
  'Адаптация под ваш оффер'
]

const heroSlides: HeroSlide[] = [
  {
    id: 'start',
    eyebrow: 'Старт без лишних шагов',
    planTag: 'Лендинг Start',
    icon: 'ri:seedling-line',
    previewImage: '/images/hero-slider/start.jpg',
    bullets: [
      'Быстрая сборка без лишней сложности',
      'Базовая структура лендинга',
      'Минимум текста и быстрый старт',
      'Подходит для первого запуска рекламы'
    ],
    metrics: [
      { value: 'от 19 000 ₽', label: 'Базовый формат', icon: 'ri:wallet-3-line' },
      { value: '1-3 дня', label: 'Срок запуска', icon: 'ri:timer-flash-line' },
      { value: '1 оффер', label: 'Тест ниши', icon: 'ri:layout-grid-line' }
    ]
  },
  {
    id: 'business',
    eyebrow: 'Оптимальный рабочий формат',
    planTag: 'Лендинг Business',
    icon: 'ri:briefcase-4-line',
    previewImage: '/images/hero-slider/Business.jpg',
    bullets: [
      'Расширенная структура лендинга',
      'Кейсы, отзывы, тарифы, CTA',
      'Несколько точек захвата заявок',
      'Лучше адаптирован под рекламный трафик'
    ],
    metrics: [
      { value: 'от 49 000 ₽', label: 'Рекомендуемый формат', icon: 'ri:price-tag-3-line' },
      { value: 'Доверие + кейсы', label: 'Сильная подача', icon: 'ri:shield-check-line' },
      { value: 'Стабильный поток', label: 'Под трафик и заявки', icon: 'ri:line-chart-line' }
    ]
  },
  {
    id: 'premium',
    eyebrow: 'Под высокий чек и B2B',
    planTag: 'Лендинг Premium',
    icon: 'ri:vip-crown-2-line',
    previewImage: '/images/hero-slider/Premium.jpg',
    bullets: [
      'Премиальная подача и глубокая упаковка',
      'Усиленные блоки доверия и аргументации',
      'Несколько сценариев захвата заявок',
      'Интеграции и приоритетная поддержка'
    ],
    metrics: [
      { value: 'от 99 000 ₽', label: 'Премиальный формат', icon: 'ri:vip-diamond-line' },
      { value: 'Высокий чек', label: 'Сложные продажи', icon: 'ri:auction-line' },
      { value: 'Приоритет', label: 'Поддержка и интеграции', icon: 'ri:customer-service-2-line' }
    ]
  }
]

const trustItems: TrustItem[] = [
  {
    title: 'Быстрый запуск',
    description: 'Не тратите недели на разработку с нуля и бесконечные правки.',
    icon: 'ri:flashlight-line'
  },
  {
    title: 'Понятная структура',
    description: 'Лендинг уже собран по логике, которая ведет пользователя к заявке.',
    icon: 'ri:route-line'
  },
  {
    title: 'Выбор под ваш этап',
    description: 'Можно начать с простого варианта или сразу взять сильную упаковку под высокий чек.',
    icon: 'ri:stack-line'
  }
]

const audienceCards: AudienceCard[] = [
  {
    title: 'Эксперты и услуги',
    description: 'Чтобы быстро упаковать одну услугу, показать выгоды и начать собирать заявки без сложной разработки.',
    icon: 'ri:user-star-line'
  },
  {
    title: 'Студии и сервисные компании',
    description: 'Чтобы получить более сильную подачу, повысить доверие и стабильно вести трафик на понятный оффер.',
    icon: 'ri:building-4-line'
  },
  {
    title: 'Маркетологи и малый бизнес',
    description: 'Чтобы быстро запускать офферы, тестировать спрос и не тратить лишнее на долгий продакшн.',
    icon: 'ri:megaphone-line'
  },
  {
    title: 'B2B, консалтинг, премиальные услуги',
    description: 'Чтобы презентовать дорогой продукт серьезно, убедительно и без ощущения шаблонного сайта.',
    icon: 'ri:briefcase-4-line'
  }
]

const problems = [
  'Сайт делают слишком долго',
  'Непонятно, какие блоки нужны',
  'Бюджет уходит в разработку, а не в рекламу',
  'Лендинг выглядит слабо и не вызывает доверия',
  'Нет понятной логики, как довести человека до заявки'
]

const problemSolutions = [
  'Готовую структуру под запуск',
  'Проверенные блоки под оффер и доверие',
  'Понятный выбор из 3 форматов',
  'Быстрый старт без лишней разработки',
  'Лендинг, который проще адаптировать под рекламу'
]

const benefits: BenefitCard[] = [
  {
    title: 'Готовый лендинг под ваш оффер',
    description: 'Не пустой шаблон, а страница, которую можно быстро адаптировать под вашу услугу или продукт.',
    icon: 'ri:layout-4-line'
  },
  {
    title: 'Структуру под заявки',
    description: 'Первый экран, выгоды, доверие, CTA и форма уже выстроены в понятную логику.',
    icon: 'ri:route-line'
  },
  {
    title: 'Адаптацию под устройства',
    description: 'Лендинг корректно выглядит на телефоне, планшете и десктопе.',
    icon: 'ri:smartphone-line'
  },
  {
    title: 'Готовность к рекламе',
    description: 'Страница подходит для быстрого запуска трафика и первого теста спроса.',
    icon: 'ri:rocket-line'
  },
  {
    title: 'Формы захвата заявок',
    description: 'Понятные точки входа, чтобы не терять внимание пользователя по пути.',
    icon: 'ri:mail-send-line'
  },
  {
    title: 'Уровень упаковки под задачу',
    description: 'Можно выбрать быстрый, усиленный или премиальный формат - без переплаты за лишнее.',
    icon: 'ri:vip-crown-2-line'
  }
]

const plans: Plan[] = [
  {
    id: 'start',
    label: 'Лендинг Start',
    title: 'Быстрый запуск',
    description: 'Подходит для теста ниши, одной услуги или первого оффера.',
    features: [
      'Быстрая сборка без лишней сложности',
      'Базовая структура лендинга',
      'Минимум текста и быстрый старт',
      'Подходит для первого запуска рекламы'
    ],
    price: 'от 19 000 ₽',
    icon: 'ri:flashlight-line',
    selectLabel: 'Выбрать Start'
  },
  {
    id: 'business',
    label: 'Лендинг Business',
    title: 'Стабильный поток заявок',
    description: 'Оптимальный вариант для бизнеса, которому уже нужна более сильная упаковка и доверие.',
    features: [
      'Расширенная структура лендинга',
      'Кейсы, отзывы, тарифы, CTA',
      'Несколько точек захвата заявок',
      'Лучше адаптирован под рекламный трафик'
    ],
    price: 'от 49 000 ₽',
    icon: 'ri:briefcase-4-line',
    selectLabel: 'Выбрать Business',
    featured: true
  },
  {
    id: 'premium',
    label: 'Лендинг Premium',
    title: 'Высокий чек. Сильная подача.',
    description: 'Для дорогих услуг, сложных продаж и серьезной презентации продукта.',
    features: [
      'Премиальная подача и глубокая упаковка',
      'Усиленные блоки доверия и аргументации',
      'Несколько сценариев захвата заявок',
      'Интеграции и приоритетная поддержка'
    ],
    price: 'от 99 000 ₽',
    icon: 'ri:vip-diamond-line',
    selectLabel: 'Выбрать Premium'
  }
]

const tariffLabel: Record<PlanId, string> = {
  start: 'Start',
  business: 'Business',
  premium: 'Premium'
}

const chooseOptions: ChooseOption[] = [
  {
    id: 'start',
    title: 'Start',
    description: 'Если нужно быстро запуститься, проверить спрос или собрать простую страницу под одну услугу.',
    icon: 'ri:seedling-line'
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Если уже нужен более убедительный лендинг с доверием, кейсами и стабильной подачей под трафик.',
    icon: 'ri:briefcase-4-line'
  },
  {
    id: 'premium',
    title: 'Premium',
    description: 'Если продаете дорогую услугу, работаете в B2B или хотите максимально сильную упаковку под высокий чек.',
    icon: 'ri:vip-crown-2-line'
  }
]

const chooseMicroCta = 'Не уверены, что выбрать? Оставьте заявку - подскажем, какой формат подойдет под вашу задачу.'

const flowSteps: FlowStep[] = [
  {
    title: 'Выбираете формат',
    description: 'Определяем, какой уровень упаковки нужен: быстрый старт, усиленная подача или премиум-версия под высокий чек.',
    icon: 'ri:price-tag-3-line'
  },
  {
    title: 'Согласовываем основу',
    description: 'Берем ваш оффер, услугу или продукт и подстраиваем структуру под задачу.',
    icon: 'ri:chat-check-line'
  },
  {
    title: 'Собираем лендинг',
    description: 'Заполняем контент, настраиваем ключевые блоки, формы и точки захвата заявок.',
    icon: 'ri:file-edit-line'
  },
  {
    title: 'Передаем в запуск',
    description: 'Вы получаете готовую страницу, которую можно использовать для рекламы, продаж и сбора заявок.',
    icon: 'ri:rocket-2-line'
  }
]

const flowHelpText = 'При необходимости помогаем с публикацией, настройкой и следующими доработками.'

const demoTabs = [
  { value: 'all', label: 'Все тарифы', icon: 'ri:list-check-2' },
  { value: 'start', label: 'Start', icon: 'ri:seedling' },
  { value: 'business', label: 'Business', icon: 'ri:briefcase-4' },
  { value: 'premium', label: 'Premium', icon: 'ri:vip-crown-2' }
]

const demoItems: DemoItem[] = [
  {
    id: 'demo-start',
    tariff: 'start',
    title: 'Start - быстрый запуск',
    description: 'Минимум лишнего, чистая структура и быстрый выход в рекламу.',
    format: 'Скриншот / видео',
    icon: 'ri:image-2-line'
  },
  {
    id: 'demo-business',
    tariff: 'business',
    title: 'Business - стабильный поток заявок',
    description: 'Больше доверия, глубже упаковка и сильнее подача оффера.',
    format: 'Скриншот / видео',
    icon: 'ri:play-circle-line'
  },
  {
    id: 'demo-premium',
    tariff: 'premium',
    title: 'Premium - под высокий чек',
    description: 'Статусная подача, усиленная аргументация и серьезное ощущение продукта.',
    format: 'Скриншот / видео',
    icon: 'ri:slideshow-4-line'
  }
]

const includedFeatures: IncludedFeature[] = [
  {
    title: 'Готовая структура блоков',
    description: 'Логика страницы уже собрана: от оффера и выгод до заявки и финального CTA.',
    icon: 'ri:layout-grid-line'
  },
  {
    title: 'Адаптивность',
    description: 'Лендинг корректно смотрится на телефоне, планшете и десктопе.',
    icon: 'ri:smartphone-line'
  },
  {
    title: 'Формы заявок',
    description: 'Понятные точки захвата, чтобы пользователь мог оставить заявку без лишних действий.',
    icon: 'ri:mail-send-line'
  },
  {
    title: 'Подготовка под запуск',
    description: 'Страница подходит для старта рекламы и быстрой адаптации под ваш оффер.',
    icon: 'ri:rocket-line'
  },
  {
    title: 'Быстрая загрузка',
    description: 'Без перегруза лишними элементами - с фокусом на скорость и понятную подачу.',
    icon: 'ri:timer-flash-line'
  }
]

const comparisonRows: ComparisonRow[] = [
  { feature: 'Скорость запуска', start: '1-3 дня', business: '1-3 дня', premium: '1-3 дня' },
  { feature: 'Упаковка оффера', start: 'Базовая', business: 'Усиленная', premium: 'Премиальная' },
  { feature: 'Блоки доверия', start: 'Базовые', business: 'Кейсы и отзывы', premium: 'Усиленная аргументация' },
  { feature: 'Сценарии заявок', start: 'Один сценарий', business: 'Несколько точек', premium: 'Несколько сценариев' },
  { feature: 'Поддержка', start: 'Базовая', business: 'Расширенная', premium: 'Приоритетная' }
]

const comparisonColumns = [
  { accessorKey: 'feature', header: 'Параметр' },
  { accessorKey: 'start', header: 'Start' },
  { accessorKey: 'business', header: 'Business' },
  { accessorKey: 'premium', header: 'Premium' }
]

const comparisonCtaTitle = 'Не уверены, какой вариант выбрать?'
const comparisonCtaText = 'Опишите коротко, что вы продаете, и мы подскажем, какой лендинг подойдет под вашу задачу и бюджет.'

const caseItems: CaseItem[] = [
  {
    title: 'Лендинг для запуска новой услуги',
    subtitle: 'Быстро собрали страницу под тест ниши.',
    description: 'Сделали понятную структуру, оффер и форму заявки, чтобы можно было выйти в рекламу без долгой разработки.'
  },
  {
    title: 'Лендинг для сервисной компании',
    subtitle: 'Усилили доверие и подачу оффера.',
    description: 'Добавили блоки выгод, отзывы, несколько CTA и более сильную упаковку под стабильный поток заявок.'
  },
  {
    title: 'Лендинг для дорогой услуги',
    subtitle: 'Сделали серьезную подачу под высокий чек.',
    description: 'Собрали премиальную структуру, усилили аргументацию и подготовили страницу под сложную продажу.'
  }
]

const fitList = [
  'вам нужен лендинг под услугу, оффер или продукт',
  'вы хотите быстро запуститься без долгой разработки',
  'вам важна понятная упаковка под рекламу и заявки',
  'вы хотите выбрать формат под свой этап роста'
]

const nonFitList = [
  'вам нужен сложный многостраничный сайт',
  'вам нужен полностью уникальный интерфейс с нуля',
  'у вас пока нет понимания, что именно вы продаете',
  'вы ищете не лендинг, а большой корпоративный проект'
]

const faqItems: FaqItem[] = [
  {
    question: 'Можно ли редактировать лендинг?',
    answer: 'Да. Структуру, тексты, изображения, оффер и CTA можно адаптировать под вашу нишу и задачу.'
  },
  {
    question: 'Под какие ниши подходят лендинги?',
    answer: 'Под услуги, экспертов, студии, сервисные компании, B2B, консалтинг, локальный бизнес и другие форматы, где важна быстрая подача оффера и сбор заявок.'
  },
  {
    question: 'Нужен ли разработчик для запуска?',
    answer: 'Не всегда. Базовый запуск можно сделать без сложной разработки, а при необходимости мы подскажем или поможем с публикацией и настройкой.'
  },
  {
    question: 'Сколько времени занимает запуск?',
    answer: 'Обычно старт занимает от 1 до 3 дней в зависимости от выбранного тарифа, объема контента и задачи.'
  },
  {
    question: 'Что нужно от меня для старта?',
    answer: 'Достаточно кратко описать, что вы продаете, кому и какой результат хотите получить. Дальше поможем с выбором формата и структуры.'
  },
  {
    question: 'Можно ли начать со Start, а потом перейти на Business или Premium?',
    answer: 'Да. Это нормальный сценарий: сначала быстро запуститься, а затем усилить лендинг, когда появится понимание по офферу и трафику.'
  },
  {
    question: 'Что входит в стоимость?',
    answer: 'В стоимость входит сам лендинг в выбранном формате и базовый набор работ по упаковке. Точный состав зависит от тарифа.'
  },
  {
    question: 'Подойдет ли это под рекламу?',
    answer: 'Да. Лендинги собираются именно с расчетом на понятную структуру, точки захвата заявок и быстрый запуск трафика.'
  }
]

const finalCtaTitle = 'Запустите лендинг без долгой разработки'
const finalCtaSubtitle = 'Выберите подходящий формат и получите страницу, которую можно быстро адаптировать под ваш оффер и запуск рекламы.'
const finalCtaMicro = 'Подскажем, что выбрать: Start, Business или Premium.'

const microTexts = [
  'Ответим, какой формат подойдет под вашу задачу',
  'Без сложного брифа и лишних согласований',
  'Можно начать с простого варианта и усилить позже',
  'Достаточно коротко описать вашу услугу',
  'Поможем выбрать между Start, Business и Premium'
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
  title: 'Готовые лендинги под запуск рекламы и продажи',
  description: 'Выберите формат Start, Business или Premium и запустите лендинг под рекламу и продажи за 1-3 дня.',
  ogTitle: 'Готовые лендинги под запуск рекламы и продажи',
  ogDescription: 'Start, Business и Premium для быстрого старта, стабильных заявок и высокой упаковки под высокий чек.',
  ogType: 'website'
})
</script>

<template>
  <main class="landing">
    <header class="topbar">
      <div class="shell topbar-inner">
        <a class="brand" href="#hero">
          <UIcon name="ri:stack-line" />
          landings-stock.ru
        </a>
        <nav class="topbar-nav" aria-label="Навигация по секциям">
          <UButton href="#plans" variant="ghost" color="neutral" class="topbar-btn">
            <UIcon name="ri:price-tag-3-line" />
            Тарифы
          </UButton>
          <UButton href="#demos" variant="ghost" color="neutral" class="topbar-btn">
            <UIcon name="ri:slideshow-3-line" />
            Примеры
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
              <h1>{{ heroTitle }}</h1>
              <p>{{ heroSubtitle }}</p>

              <div class="hero-actions">
                <UButton href="#plans" size="lg">Выбрать тариф</UButton>
                <UButton href="#demos" size="lg" variant="outline" color="neutral">Смотреть примеры</UButton>
              </div>

              <p class="hero-micro">{{ heroMicroText }}</p>

              <ul class="issue-list issue-success hero-quick-list">
                <li v-for="item in heroQuickBenefits" :key="item">
                  <UIcon name="ri:check-line" />
                  <span>{{ item }}</span>
                </li>
              </ul>

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
                  <span class="hero-plan-tag">{{ slide.planTag }}</span>
                </div>
              </template>

              <div class="hero-preview-image-wrap">
                <img
                  :src="slide.previewImage"
                  :alt="`Превью ${slide.planTag}`"
                  class="hero-preview-image"
                  loading="lazy"
                >
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
          <UBadge color="primary" variant="soft" class="section-kicker">Trust-блок</UBadge>
          <h2>Не сайт ради сайта, а лендинг под понятную задачу</h2>
        </div>
        <div class="audience-grid trust-grid">
          <UCard v-for="item in trustItems" :key="item.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Для кого это</UBadge>
          <h2>Решение под разные задачи и этапы роста</h2>
        </div>
        <div class="audience-grid">
          <UCard v-for="item in audienceCards" :key="item.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block section-dark section-reveal">
      <div class="shell">
        <div class="section-head section-head-light">
          <UBadge color="neutral" variant="soft" class="section-kicker">Проблема и решение</UBadge>
          <h2>Что обычно тормозит запуск - и как это решается</h2>
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
                <h3><UIcon name="ri:checkbox-circle-line" /> Что вы получаете вместо этого</h3>
              </template>
              <ul class="issue-list issue-success">
                <li v-for="solution in problemSolutions" :key="solution">
                  <UIcon name="ri:check-line" />
                  <span>{{ solution }}</span>
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
          <UBadge color="primary" variant="soft" class="section-kicker">Что вы получаете</UBadge>
          <h2>Что вы получаете после запуска</h2>
        </div>
        <div class="audience-grid">
          <UCard v-for="item in benefits" :key="item.title" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="item.icon" /></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section id="plans" class="section-block pricing-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Тарифы</UBadge>
          <h2>Выберите формат под свою задачу</h2>
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
            <p class="plan-summary">{{ plan.description }}</p>

            <ul class="issue-list issue-success">
              <li v-for="feature in plan.features" :key="`${plan.id}-${feature}`">
                <UIcon name="ri:check-line" />
                <span>{{ feature }}</span>
              </li>
            </ul>

            <p class="plan-price">{{ plan.price }}</p>

            <div class="plan-actions">
              <UButton href="#demos" variant="outline" color="neutral">Посмотреть демо</UButton>
              <UButton href="#final-cta">{{ plan.selectLabel }}</UButton>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Как выбрать</UBadge>
          <h2>Как понять, какой вариант вам подходит</h2>
        </div>

        <div class="audience-grid choose-grid">
          <UCard v-for="option in chooseOptions" :key="option.id" class="feature-card">
            <div class="feature-card-icon"><UIcon :name="option.icon" /></div>
            <h3>{{ option.title }}</h3>
            <p>{{ option.description }}</p>
          </UCard>
        </div>

        <p class="choose-help">{{ chooseMicroCta }}</p>
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

        <p class="flow-help">{{ flowHelpText }}</p>
      </div>
    </section>

    <section id="demos" class="section-block demo-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Демо по тарифам</UBadge>
          <h2>Посмотрите, как выглядит каждый формат</h2>
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
            <p class="demo-description">{{ demo.description }}</p>
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
          <UBadge color="primary" variant="soft" class="section-kicker">Что входит в основу</UBadge>
          <h2>База, на которой можно быстро запускаться</h2>
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

    <section class="section-block section-reveal">
      <div class="shell">
        <UCard class="compare-cta-card">
          <h2>{{ comparisonCtaTitle }}</h2>
          <p>{{ comparisonCtaText }}</p>
          <div class="cta-actions">
            <UButton href="#plans" size="lg">Подобрать тариф</UButton>
            <UButton href="#footer" size="lg" color="neutral" variant="outline">Получить консультацию</UButton>
          </div>
        </UCard>
      </div>
    </section>

    <section class="section-block section-dark testimonial-section section-reveal">
      <div class="shell">
        <div class="section-head section-head-light">
          <UBadge color="neutral" variant="soft" class="section-kicker">Кейсы</UBadge>
          <h2>Примеры задач, под которые подходят лендинги</h2>
        </div>

        <div class="testimonial-grid">
          <UCard v-for="item in caseItems" :key="item.title" class="testimonial-card">
            <UIcon name="ri:double-quotes-l" />
            <div class="image-placeholder image-placeholder-sm">Заглушка: пример лендинга</div>
            <h3>{{ item.title }}</h3>
            <p class="testimonial-result">{{ item.subtitle }}</p>
            <p>{{ item.description }}</p>
          </UCard>
        </div>
      </div>
    </section>

    <section class="section-block audience-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">Кому подойдет</UBadge>
          <h2>Когда это решение подойдет, а когда нет</h2>
        </div>

        <div class="fit-grid">
          <UCard class="fit-card">
            <h3>Подойдет, если</h3>
            <ul class="issue-list issue-success">
              <li v-for="item in fitList" :key="item">
                <UIcon name="ri:check-line" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </UCard>

          <UCard class="fit-card">
            <h3>Не подойдет, если</h3>
            <ul class="issue-list issue-danger">
              <li v-for="item in nonFitList" :key="item">
                <UIcon name="ri:close-line" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </section>

    <section id="faq" class="section-block faq-section section-reveal">
      <div class="shell">
        <div class="section-head">
          <UBadge color="primary" variant="soft" class="section-kicker">FAQ</UBadge>
          <h2>Частые вопросы перед запуском</h2>
        </div>

        <UAccordion type="single" collapsible :items="faqAccordionItems" />
      </div>
    </section>

    <section id="final-cta" class="section-block final-cta section-reveal">
      <div class="shell">
        <UCard class="cta-card">
          <h2>{{ finalCtaTitle }}</h2>
          <p>{{ finalCtaSubtitle }}</p>
          <p class="cta-micro">{{ finalCtaMicro }}</p>
          <div class="cta-actions">
            <UButton href="#plans" size="lg">Выбрать тариф</UButton>
            <UButton href="#footer" size="lg" color="neutral" variant="outline">Получить консультацию</UButton>
          </div>

          <ul class="micro-copy-list">
            <li v-for="item in microTexts" :key="item">
              <UIcon name="ri:check-line" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </section>

    <footer id="footer" class="footer">
      <div class="shell footer-inner">
        <p class="footer-brand">
          <UIcon name="ri:stack-line" />
          landings-stock.ru
        </p>
        <a href="mailto:hello@landings-stock.ru">
          <UIcon name="ri:mail-line" />
          hello@landings-stock.ru
        </a>
        <a href="/policy-pd">
          <UIcon name="ri:shield-check-line" />
          Политика ПД
        </a>
        <a href="/soglasie-pd">
          <UIcon name="ri:file-list-3-line" />
          Согласие ПД
        </a>
        <a href="/oferta">
          <UIcon name="ri:article-line" />
          Оферта
        </a>
      </div>
    </footer>

    <UButton href="#plans" class="floating-cta" color="primary">
      <UIcon name="ri:price-tag-3-line" />
      Выбрать тариф
    </UButton>
  </main>
</template>
