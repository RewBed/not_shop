# Landing Project (Nuxt 4 + Vue 3)

Лендинг с адаптивной вёрсткой, анимациями, юридическими страницами из markdown-контента и production-режимом через Docker.

## Стек

- Nuxt 4
- Vue 3 + TypeScript (`script setup`)
- Nuxt UI + Tailwind CSS
- GSAP (анимации)
- Markdown content layer для юридических документов

## Локальная разработка

```bash
npm install
npm run dev
```

Приложение доступно на `http://localhost:3000`.

## Проверки качества

```bash
npm run typecheck
npm run lint
npm run format:check
npm run test:unit
npm run test:e2e
```

## Production (локально без Docker)

```bash
npm run build
npm run start
```

## Production через Docker Compose

```bash
docker compose up --build -d
```

Остановка:

```bash
docker compose down
```

Логи:

```bash
docker compose logs -f
```

## CI

В репозитории добавлен workflow `.github/workflows/ci.yml`.
Пайплайн запускает: `typecheck`, `lint`, `format:check`, `test:unit`, `test:e2e`, `build`.
