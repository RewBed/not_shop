<script setup lang="ts">
import type { LegalDocumentSlug } from '~/content/legal'
import { getLegalDocument } from '~/content/legal'

interface Props {
  slug: LegalDocumentSlug
}

const props = defineProps<Props>()
const siteConfig = useSiteConfig()

const legalDocument = computed(() => getLegalDocument(props.slug, siteConfig))
</script>

<template>
  <LegalDocumentPage :title="legalDocument.title" :description="legalDocument.description">
    <div class="legal-rich" v-html="legalDocument.html" />
  </LegalDocumentPage>
</template>
