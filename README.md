# Landing Project (Nuxt 4 + Vue 3)

Лендинг с 12 секциями, адаптивной версткой, якорями, фиксированной CTA-кнопкой и готовой Docker-сборкой для production.

## Стек

- Nuxt 4
- Vue 3
- TypeScript (`script setup`)
- CSS (без UI-фреймворка)

## Локальная разработка

```bash
npm install
npm run dev
```

Проект откроется на `http://localhost:3000`.

## Проверка типов

```bash
npm run typecheck
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

По умолчанию приложение доступно на `http://localhost:3000`.
