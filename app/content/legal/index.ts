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

const FRONTMATTER_OPEN = '---\n'
const FRONTMATTER_CLOSE = '\n---\n'

function unwrapQuotedValue(value: string): string {
  const trimmed = value.trim()

  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

function parseFrontmatter(rawFrontmatter: string): Record<string, string> {
  const metadata: Record<string, string> = {}

  for (const line of rawFrontmatter.split('\n')) {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      continue
    }

    const separatorIndex = trimmedLine.indexOf(':')

    if (separatorIndex <= 0) {
      continue
    }

    const key = trimmedLine.slice(0, separatorIndex).trim()
    const value = trimmedLine.slice(separatorIndex + 1)

    metadata[key] = unwrapQuotedValue(value)
  }

  return metadata
}

function parseTemplate(source: string): LegalDocumentTemplate {
  const normalizedSource = source.replace(/\r\n/g, '\n')

  if (!normalizedSource.startsWith(FRONTMATTER_OPEN)) {
    return {
      title: '',
      description: '',
      content: normalizedSource.trim()
    }
  }

  const frontmatterCloseIndex = normalizedSource.indexOf(FRONTMATTER_CLOSE, FRONTMATTER_OPEN.length)

  if (frontmatterCloseIndex === -1) {
    return {
      title: '',
      description: '',
      content: normalizedSource.trim()
    }
  }

  const frontmatter = normalizedSource.slice(FRONTMATTER_OPEN.length, frontmatterCloseIndex)
  const content = normalizedSource.slice(frontmatterCloseIndex + FRONTMATTER_CLOSE.length).trim()
  const metadata = parseFrontmatter(frontmatter)

  return {
    title: metadata.title ?? '',
    description: metadata.description ?? '',
    content
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
  const template = legalTemplates[slug]

  return {
    title: applyPlaceholders(template.title, siteConfig),
    description: applyPlaceholders(template.description, siteConfig),
    html: applyPlaceholders(template.content, siteConfig)
  }
}
