export const SITE_DEFAULTS = {
  domain: 'landings-stock.ru',
  siteUrl: 'https://landings-stock.ru',
  contactEmail: 'hello@landings-stock.ru',
  legalEmail: 'Artemius.solt@yandex.ru'
} as const

export type SiteDefaults = typeof SITE_DEFAULTS
