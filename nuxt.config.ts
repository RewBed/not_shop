import { SITE_DEFAULTS } from './config/site-defaults'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      site: {
        domain: process.env.NUXT_PUBLIC_SITE_DOMAIN ?? SITE_DEFAULTS.domain,
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? SITE_DEFAULTS.siteUrl,
        contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL ?? SITE_DEFAULTS.contactEmail,
        legalEmail: process.env.NUXT_PUBLIC_LEGAL_EMAIL ?? SITE_DEFAULTS.legalEmail
      }
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Готовые лендинги для запуска рекламы и продаж',
      titleTemplate: `%s | ${SITE_DEFAULTS.domain}`,
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  }
})
