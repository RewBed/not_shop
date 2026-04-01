<script setup lang="ts">
import type { HeroSlide, PlanId } from '~/content/constants/landing'

interface Props {
  heroTitle: string
  heroSubtitle: string
  heroMicroText: string
  heroQuickBenefits: string[]
  heroSlides: HeroSlide[]
  tariffLabel: Record<PlanId, string>
}

defineProps<Props>()
</script>

<template>
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
              <UButton href="#demos" size="lg" variant="outline" color="neutral"
                >Смотреть примеры</UButton
              >
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
              />
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
</template>
