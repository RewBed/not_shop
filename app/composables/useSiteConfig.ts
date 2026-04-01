import { SITE_DEFAULTS } from '~~/config/site-defaults'

export interface SiteConfig {
  domain: string
  siteUrl: string
  contactEmail: string
  legalEmail: string
}

export function useSiteConfig(): SiteConfig {
  const config = useRuntimeConfig()
  const site = config.public.site as Partial<SiteConfig> | undefined

  return {
    domain: site?.domain ?? SITE_DEFAULTS.domain,
    siteUrl: site?.siteUrl ?? SITE_DEFAULTS.siteUrl,
    contactEmail: site?.contactEmail ?? SITE_DEFAULTS.contactEmail,
    legalEmail: site?.legalEmail ?? SITE_DEFAULTS.legalEmail
  }
}
