<script setup lang="ts">
interface Props {
  title: string
  description?: string
}

const props = defineProps<Props>()
const route = useRoute()
const siteConfig = useSiteConfig()
const canonicalUrl = computed(() => new URL(route.path, `${siteConfig.siteUrl}/`).toString())

useSeoMeta({
  title: props.title,
  description: props.description ?? `Документ: ${props.title}`,
  ogTitle: props.title,
  ogDescription: props.description ?? `Документ: ${props.title}`,
  ogType: 'article',
  ogUrl: () => canonicalUrl.value
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ]
}))
</script>

<template>
  <main class="landing legal-page">
    <header class="topbar">
      <div class="shell topbar-inner">
        <NuxtLink class="brand" to="/">
          <UIcon name="ri:stack-line" />
          {{ siteConfig.domain }}
        </NuxtLink>
        <UButton to="/" variant="ghost" color="neutral" class="topbar-btn">
          <UIcon name="ri:arrow-left-line" />
          На главную
        </UButton>
      </div>
    </header>

    <section class="section-block legal-section">
      <div class="shell legal-shell">
        <div class="section-head legal-head">
          <h1>{{ title }}</h1>
          <p v-if="description" class="legal-subtitle">{{ description }}</p>
        </div>

        <UCard class="legal-card">
          <slot />
        </UCard>
      </div>
    </section>
  </main>
</template>
