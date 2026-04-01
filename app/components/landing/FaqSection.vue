<script setup lang="ts">
interface FaqAccordionItem {
  label: string
  content: string
  icon: string
}

interface Props {
  items: FaqAccordionItem[]
}

defineProps<Props>()
</script>

<template>
  <section id="faq" class="section-block faq-section section-reveal">
    <div class="shell">
      <div class="section-head">
        <UBadge color="primary" variant="soft" class="section-kicker">FAQ</UBadge>
        <h2>Частые вопросы перед запуском</h2>
      </div>

      <UAccordion type="single" collapsible :items="items" />
    </div>
  </section>
</template>
