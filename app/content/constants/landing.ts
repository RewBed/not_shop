export type PlanId = 'start' | 'business' | 'premium'
export type DemoFilter = 'all' | PlanId

export interface HeroSlideMetric {
  value: string
  label: string
  icon: string
}

export interface HeroSlide {
  id: PlanId
  eyebrow: string
  planTag: string
  icon: string
  previewImage: string
  bullets: string[]
  metrics: HeroSlideMetric[]
}

export interface TrustItem {
  title: string
  description: string
  icon: string
}

export interface AudienceCard {
  title: string
  description: string
  icon: string
}

export interface BenefitCard {
  title: string
  description: string
  icon: string
}

export interface Plan {
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

export interface ChooseOption {
  id: PlanId
  title: string
  description: string
  icon: string
}

export interface FlowStep {
  title: string
  description: string
  icon: string
}

export interface DemoItem {
  id: string
  tariff: PlanId
  title: string
  description: string
  format: string
  icon: string
}

export interface IncludedFeature {
  title: string
  description: string
  icon: string
}

export interface ComparisonRow {
  feature: string
  start: string
  business: string
  premium: string
}

export interface CaseItem {
  title: string
  subtitle: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export const heroTitle = 'Готовые лендинги под запуск рекламы и продажи'
export const heroSubtitle =
  'Выберите формат под свою задачу: быстрый старт, стабильный поток заявок или премиальная подача под высокий чек.'
export const heroMicroText = 'Без долгой разработки, сложных брифов и лишних согласований.'
export const heroQuickBenefits = [
  'Запуск за 1-3 дня',
  'Под рекламу и заявки',
  '3 уровня упаковки',
  'Адаптация под ваш оффер'
]

export const heroSlides: HeroSlide[] = [
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

export const trustItems: TrustItem[] = [
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
    description:
      'Можно начать с простого варианта или сразу взять сильную упаковку под высокий чек.',
    icon: 'ri:stack-line'
  }
]

export const audienceCards: AudienceCard[] = [
  {
    title: 'Эксперты и услуги',
    description:
      'Чтобы быстро упаковать одну услугу, показать выгоды и начать собирать заявки без сложной разработки.',
    icon: 'ri:user-star-line'
  },
  {
    title: 'Студии и сервисные компании',
    description:
      'Чтобы получить более сильную подачу, повысить доверие и стабильно вести трафик на понятный оффер.',
    icon: 'ri:building-4-line'
  },
  {
    title: 'Маркетологи и малый бизнес',
    description:
      'Чтобы быстро запускать офферы, тестировать спрос и не тратить лишнее на долгий продакшн.',
    icon: 'ri:megaphone-line'
  },
  {
    title: 'B2B, консалтинг, премиальные услуги',
    description:
      'Чтобы презентовать дорогой продукт серьезно, убедительно и без ощущения шаблонного сайта.',
    icon: 'ri:briefcase-4-line'
  }
]

export const problems = [
  'Сайт делают слишком долго',
  'Непонятно, какие блоки нужны',
  'Бюджет уходит в разработку, а не в рекламу',
  'Лендинг выглядит слабо и не вызывает доверия',
  'Нет понятной логики, как довести человека до заявки'
]

export const problemSolutions = [
  'Готовую структуру под запуск',
  'Проверенные блоки под оффер и доверие',
  'Понятный выбор из 3 форматов',
  'Быстрый старт без лишней разработки',
  'Лендинг, который проще адаптировать под рекламу'
]

export const benefits: BenefitCard[] = [
  {
    title: 'Готовый лендинг под ваш оффер',
    description:
      'Не пустой шаблон, а страница, которую можно быстро адаптировать под вашу услугу или продукт.',
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
    description:
      'Можно выбрать быстрый, усиленный или премиальный формат - без переплаты за лишнее.',
    icon: 'ri:vip-crown-2-line'
  }
]

export const plans: Plan[] = [
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
    description:
      'Оптимальный вариант для бизнеса, которому уже нужна более сильная упаковка и доверие.',
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

export const tariffLabel: Record<PlanId, string> = {
  start: 'Start',
  business: 'Business',
  premium: 'Premium'
}

export const chooseOptions: ChooseOption[] = [
  {
    id: 'start',
    title: 'Start',
    description:
      'Если нужно быстро запуститься, проверить спрос или собрать простую страницу под одну услугу.',
    icon: 'ri:seedling-line'
  },
  {
    id: 'business',
    title: 'Business',
    description:
      'Если уже нужен более убедительный лендинг с доверием, кейсами и стабильной подачей под трафик.',
    icon: 'ri:briefcase-4-line'
  },
  {
    id: 'premium',
    title: 'Premium',
    description:
      'Если продаете дорогую услугу, работаете в B2B или хотите максимально сильную упаковку под высокий чек.',
    icon: 'ri:vip-crown-2-line'
  }
]

export const chooseMicroCta =
  'Не уверены, что выбрать? Оставьте заявку - подскажем, какой формат подойдет под вашу задачу.'

export const flowSteps: FlowStep[] = [
  {
    title: 'Выбираете формат',
    description:
      'Определяем, какой уровень упаковки нужен: быстрый старт, усиленная подача или премиум-версия под высокий чек.',
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
    description:
      'Вы получаете готовую страницу, которую можно использовать для рекламы, продаж и сбора заявок.',
    icon: 'ri:rocket-2-line'
  }
]

export const flowHelpText =
  'При необходимости помогаем с публикацией, настройкой и следующими доработками.'

export const demoTabs = [
  { value: 'all', label: 'Все тарифы', icon: 'ri:list-check-2' },
  { value: 'start', label: 'Start', icon: 'ri:seedling' },
  { value: 'business', label: 'Business', icon: 'ri:briefcase-4' },
  { value: 'premium', label: 'Premium', icon: 'ri:vip-crown-2' }
]

export const demoItems: DemoItem[] = [
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

export const includedFeatures: IncludedFeature[] = [
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
    description:
      'Понятные точки захвата, чтобы пользователь мог оставить заявку без лишних действий.',
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

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Скорость запуска', start: '1-3 дня', business: '1-3 дня', premium: '1-3 дня' },
  { feature: 'Упаковка оффера', start: 'Базовая', business: 'Усиленная', premium: 'Премиальная' },
  {
    feature: 'Блоки доверия',
    start: 'Базовые',
    business: 'Кейсы и отзывы',
    premium: 'Усиленная аргументация'
  },
  {
    feature: 'Сценарии заявок',
    start: 'Один сценарий',
    business: 'Несколько точек',
    premium: 'Несколько сценариев'
  },
  { feature: 'Поддержка', start: 'Базовая', business: 'Расширенная', premium: 'Приоритетная' }
]

export const comparisonColumns = [
  { accessorKey: 'feature', header: 'Параметр' },
  { accessorKey: 'start', header: 'Start' },
  { accessorKey: 'business', header: 'Business' },
  { accessorKey: 'premium', header: 'Premium' }
]

export const comparisonCtaTitle = 'Не уверены, какой вариант выбрать?'
export const comparisonCtaText =
  'Опишите коротко, что вы продаете, и мы подскажем, какой лендинг подойдет под вашу задачу и бюджет.'

export const caseItems: CaseItem[] = [
  {
    title: 'Лендинг для запуска новой услуги',
    subtitle: 'Быстро собрали страницу под тест ниши.',
    description:
      'Сделали понятную структуру, оффер и форму заявки, чтобы можно было выйти в рекламу без долгой разработки.'
  },
  {
    title: 'Лендинг для сервисной компании',
    subtitle: 'Усилили доверие и подачу оффера.',
    description:
      'Добавили блоки выгод, отзывы, несколько CTA и более сильную упаковку под стабильный поток заявок.'
  },
  {
    title: 'Лендинг для дорогой услуги',
    subtitle: 'Сделали серьезную подачу под высокий чек.',
    description:
      'Собрали премиальную структуру, усилили аргументацию и подготовили страницу под сложную продажу.'
  }
]

export const fitList = [
  'вам нужен лендинг под услугу, оффер или продукт',
  'вы хотите быстро запуститься без долгой разработки',
  'вам важна понятная упаковка под рекламу и заявки',
  'вы хотите выбрать формат под свой этап роста'
]

export const nonFitList = [
  'вам нужен сложный многостраничный сайт',
  'вам нужен полностью уникальный интерфейс с нуля',
  'у вас пока нет понимания, что именно вы продаете',
  'вы ищете не лендинг, а большой корпоративный проект'
]

export const faqItems: FaqItem[] = [
  {
    question: 'Можно ли редактировать лендинг?',
    answer:
      'Да. Структуру, тексты, изображения, оффер и CTA можно адаптировать под вашу нишу и задачу.'
  },
  {
    question: 'Под какие ниши подходят лендинги?',
    answer:
      'Под услуги, экспертов, студии, сервисные компании, B2B, консалтинг, локальный бизнес и другие форматы, где важна быстрая подача оффера и сбор заявок.'
  },
  {
    question: 'Нужен ли разработчик для запуска?',
    answer:
      'Не всегда. Базовый запуск можно сделать без сложной разработки, а при необходимости мы подскажем или поможем с публикацией и настройкой.'
  },
  {
    question: 'Сколько времени занимает запуск?',
    answer:
      'Обычно старт занимает от 1 до 3 дней в зависимости от выбранного тарифа, объема контента и задачи.'
  },
  {
    question: 'Что нужно от меня для старта?',
    answer:
      'Достаточно кратко описать, что вы продаете, кому и какой результат хотите получить. Дальше поможем с выбором формата и структуры.'
  },
  {
    question: 'Можно ли начать со Start, а потом перейти на Business или Premium?',
    answer:
      'Да. Это нормальный сценарий: сначала быстро запуститься, а затем усилить лендинг, когда появится понимание по офферу и трафику.'
  },
  {
    question: 'Что входит в стоимость?',
    answer:
      'В стоимость входит сам лендинг в выбранном формате и базовый набор работ по упаковке. Точный состав зависит от тарифа.'
  },
  {
    question: 'Подойдет ли это под рекламу?',
    answer:
      'Да. Лендинги собираются именно с расчетом на понятную структуру, точки захвата заявок и быстрый запуск трафика.'
  }
]

export const finalCtaTitle = 'Запустите лендинг без долгой разработки'
export const finalCtaSubtitle =
  'Выберите подходящий формат и получите страницу, которую можно быстро адаптировать под ваш оффер и запуск рекламы.'
export const finalCtaMicro = 'Подскажем, что выбрать: Start, Business или Premium.'

export const microTexts = [
  'Ответим, какой формат подойдет под вашу задачу',
  'Без сложного брифа и лишних согласований',
  'Можно начать с простого варианта и усилить позже',
  'Достаточно коротко описать вашу услугу',
  'Поможем выбрать между Start, Business и Premium'
]
