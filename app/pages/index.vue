<script setup lang="ts">
import type { DemoFilter } from '~/content/constants/landing'
import {
  audienceCards,
  benefits,
  caseItems,
  chooseMicroCta,
  chooseOptions,
  comparisonColumns,
  comparisonCtaText,
  comparisonCtaTitle,
  comparisonRows,
  demoItems,
  demoTabs,
  faqItems,
  finalCtaMicro,
  finalCtaSubtitle,
  finalCtaTitle,
  fitList,
  flowHelpText,
  flowSteps,
  includedFeatures,
  microTexts,
  nonFitList,
  plans,
  problemSolutions,
  problems,
  tariffLabel,
  heroTitle,
  heroSubtitle,
  heroMicroText,
  heroQuickBenefits,
  heroSlides,
  trustItems
} from '~/content/constants/landing'
import { filterByTariff } from '~/utils/filterByTariff'

const pageTitle = heroTitle
const pageDescription =
  'Выберите формат Start, Business или Premium и запустите лендинг под рекламу и продажи за 1-3 дня.'

const activeDemoFilter = ref<DemoFilter>('all')
const landingRoot = ref<HTMLElement | null>(null)

const faqAccordionItems = computed(() =>
  faqItems.map((item) => ({
    label: item.question,
    content: item.answer,
    icon: 'ri:question-line'
  }))
)

const filteredDemos = computed(() => {
  return filterByTariff(demoItems, activeDemoFilter.value)
})

useLandingAnimations(landingRoot)

const route = useRoute()
const siteConfig = useSiteConfig()

const canonicalUrl = computed(() => new URL(route.path, `${siteConfig.siteUrl}/`).toString())
const ogImageUrl = computed(() =>
  new URL('/images/hero-slider/start.jpg', `${siteConfig.siteUrl}/`).toString()
)

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ]
}))

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: () => canonicalUrl.value,
  ogImage: () => ogImageUrl.value,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: () => ogImageUrl.value
})
</script>

<template>
  <main ref="landingRoot" class="landing">
    <header class="topbar">
      <div class="shell topbar-inner">
        <a class="brand" href="#hero">
          <UIcon name="ri:stack-line" />
          {{ siteConfig.domain }}
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

    <LandingHeroSection
      :hero-title="heroTitle"
      :hero-subtitle="heroSubtitle"
      :hero-micro-text="heroMicroText"
      :hero-quick-benefits="heroQuickBenefits"
      :hero-slides="heroSlides"
      :tariff-label="tariffLabel"
    />

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

    <LandingPlansSection :plans="plans" />

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
            <UButton href="#footer" size="lg" color="neutral" variant="outline"
              >Получить консультацию</UButton
            >
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

    <LandingFaqSection :items="faqAccordionItems" />

    <section id="final-cta" class="section-block final-cta section-reveal">
      <div class="shell">
        <UCard class="cta-card">
          <h2>{{ finalCtaTitle }}</h2>
          <p>{{ finalCtaSubtitle }}</p>
          <p class="cta-micro">{{ finalCtaMicro }}</p>
          <div class="cta-actions">
            <UButton href="#plans" size="lg">Выбрать тариф</UButton>
            <UButton href="#footer" size="lg" color="neutral" variant="outline"
              >Получить консультацию</UButton
            >
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

    <LandingFooterSection :domain="siteConfig.domain" :contact-email="siteConfig.contactEmail" />

    <UButton href="#plans" class="floating-cta" color="primary">
      <UIcon name="ri:price-tag-3-line" />
      Выбрать тариф
    </UButton>
  </main>
</template>

<style src="~/assets/css/landing.css"></style>
