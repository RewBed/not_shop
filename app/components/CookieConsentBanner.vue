<script setup lang="ts">
type CookieConsentValue = 'accepted' | 'essential-only'

const consentCookie = useCookie<CookieConsentValue | null>('not_shop_cookie_consent', {
  maxAge: 60 * 60 * 24 * 180,
  sameSite: 'lax',
  path: '/'
})

const isVisible = computed(() => !consentCookie.value)

function acceptAllCookies() {
  consentCookie.value = 'accepted'
}

function acceptEssentialCookies() {
  consentCookie.value = 'essential-only'
}
</script>

<template>
  <Transition name="cookie-banner-fade">
    <section
      v-if="isVisible"
      class="cookie-banner"
      role="region"
      aria-label="Уведомление об использовании cookie"
    >
      <UCard class="cookie-banner-card">
        <div class="cookie-banner-head">
          <UIcon name="ri:information-line" class="cookie-banner-icon" />
          <p class="cookie-banner-title">Мы используем cookie</p>
        </div>

        <p class="cookie-banner-text">
          Сайт использует cookie и технические данные для корректной работы, аналитики и улучшения сервиса.
          Продолжая использовать сайт, вы соглашаетесь с
          <NuxtLink to="/policy-pd">политикой обработки персональных данных</NuxtLink>.
        </p>

        <div class="cookie-banner-actions">
          <UButton color="primary" @click="acceptAllCookies">Принять все</UButton>
          <UButton color="neutral" variant="outline" @click="acceptEssentialCookies">
            Только необходимые
          </UButton>
        </div>
      </UCard>
    </section>
  </Transition>
</template>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: 95;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.cookie-banner-card {
  width: min(820px, 100%);
  border-radius: 0;
  box-shadow: 0 20px 42px rgba(13, 30, 49, 0.24);
  pointer-events: auto;
}

.cookie-banner-head {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.cookie-banner-icon {
  color: var(--brand);
  font-size: 1rem;
}

.cookie-banner-title {
  font-weight: 800;
  font-size: 0.95rem;
}

.cookie-banner-text {
  margin-top: 0.56rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.cookie-banner-text a {
  color: var(--brand);
  text-decoration: underline;
  text-underline-offset: 0.14em;
}

.cookie-banner-actions {
  margin-top: 0.82rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.52rem;
}

.cookie-banner-actions :where(button, a) {
  border-radius: 0;
}

.cookie-banner-fade-enter-active,
.cookie-banner-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.cookie-banner-fade-enter-from,
.cookie-banner-fade-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

@media (max-width: 760px) {
  .cookie-banner {
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
  }

  .cookie-banner-actions {
    flex-direction: column;
  }

  .cookie-banner-actions :where(button, a) {
    width: 100%;
  }
}
</style>
