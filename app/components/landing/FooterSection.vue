<script setup lang="ts">
interface Props {
  domain: string
  contactEmail: string
}

defineProps<Props>()
</script>

<template>
  <footer id="footer" class="footer">
    <div class="shell footer-inner">
      <p class="footer-brand">
        <UIcon name="ri:stack-line" />
        {{ domain }}
      </p>

      <a :href="`mailto:${contactEmail}`">
        <UIcon name="ri:mail-line" />
        {{ contactEmail }}
      </a>

      <NuxtLink to="/policy-pd">
        <UIcon name="ri:shield-check-line" />
        Политика ПД
      </NuxtLink>

      <NuxtLink to="/soglasie-pd">
        <UIcon name="ri:file-list-3-line" />
        Согласие ПД
      </NuxtLink>

      <NuxtLink to="/oferta">
        <UIcon name="ri:article-line" />
        Оферта
      </NuxtLink>
    </div>
  </footer>
</template>
