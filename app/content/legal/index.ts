import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { SiteConfig } from '~/composables/useSiteConfig'

import ofertaSource from './oferta.md?raw'
import policyPdSource from './policy-pd.md?raw'
import soglasiePdSource from './soglasie-pd.md?raw'

export type LegalDocumentSlug = 'policy-pd' | 'soglasie-pd' | 'oferta'

interface LegalDocumentTemplate {
  title: string
  description: string
  content: string
}

interface LegalDocument {
  title: string
  description: string
  html: string
}

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
})

function parseTemplate(source: string): LegalDocumentTemplate {
  const parsed = matter(source)
  return {
    title: String(parsed.data.title ?? ''),
    description: String(parsed.data.description ?? ''),
    content: parsed.content.trim()
  }
}

function applyPlaceholders(input: string, siteConfig: SiteConfig): string {
  return input
    .replaceAll('{{SITE_DOMAIN}}', siteConfig.domain)
    .replaceAll('{{SITE_URL}}', siteConfig.siteUrl)
    .replaceAll('{{CONTACT_EMAIL}}', siteConfig.contactEmail)
    .replaceAll('{{LEGAL_EMAIL}}', siteConfig.legalEmail)
}

const legalTemplates: Record<LegalDocumentSlug, LegalDocumentTemplate> = {
  'policy-pd': parseTemplate(policyPdSource),
  'soglasie-pd': parseTemplate(soglasiePdSource),
  oferta: parseTemplate(ofertaSource)
}

export function getLegalDocument(slug: LegalDocumentSlug, siteConfig: SiteConfig): LegalDocument {
  const source = legalTemplates[slug]

  return {
    title: applyPlaceholders(source.title, siteConfig),
    description: applyPlaceholders(source.description, siteConfig),
    html: markdown.render(applyPlaceholders(source.content, siteConfig))
  }
}
