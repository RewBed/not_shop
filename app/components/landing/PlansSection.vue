<script setup lang="ts">
import type { Plan } from '~/content/constants/landing'

interface Props {
  plans: Plan[]
}

defineProps<Props>()
</script>

<template>
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
          <UBadge v-if="plan.featured" class="recommended-badge" color="warning"
            >Рекомендуем</UBadge
          >

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
</template>
