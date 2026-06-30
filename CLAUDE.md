# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

## Build Commands

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview dist/ locally
npm run dev:cloudflare   # Cloudflare Pages local emulation
npm run deploy       # build + wrangler pages deploy
npm run lint         # ESLint (0 errors required)
npm run test         # vitest unit tests
npx playwright test   # E2E browser tests
```

## Quality Gates

| Check | Required | Current |
|-------|----------|---------|
| ESLint | 0 errors | ✓ |
| Unit tests | all pass | 123/123 ✓ |
| E2E tests | all pass | 22/22 ✓ |
| Line coverage | ≥94% | 94.15% ✓ |
| Build | clean | ✓ |

## Architecture

**Static SPA** — no SSR, all logic client-side.

- `src/data/` — typed data: 24 templates, placeholder values, per-image prompts, i18n, ComfyUI workflow node graph
- `src/components/` — one file per UI component; each self-contained and manages its own DOM
- `src/App.ts` — root orchestrator; owns `current` (template index) and `picks` (placeholder→value map)
- `public/cinematic-stills/` — 144 `.webp` images; served as static assets, cached by the PWA service worker
- `public/_routes.json` — SPA routing fallback for Cloudflare Pages (non-asset 404 → index.html)
- `public/_headers` — cache headers: immutable for hashed assets, no-cache for HTML shell

## Key Data Types

```typescript
interface Template {
  title: string;
  template: string;   // prompt with {placeholder} slots
  imgs: string[];      // relative paths from public/
}
```

Placeholders are extracted via regex `/\{([^}]+)\}/`. Values for each slot come from `VALUES` (with `__generic__` fallback). Gallery captions come from `PROMPTS` (image path → caption string).

## PWA / Offline

`vite-plugin-pwa` injects a service worker (Workbox `generateSW`):
- Precaches all `cinematic-stills/**/*.webp` at install time (~20 MB)
- Runtime-caches Google Fonts with `CacheFirst`, 1-year expiry
- `registerType: 'autoUpdate'` — users always get the latest version on reload

## Cloudflare Pages

Configured via `wrangler.toml` with `pages_build_output_dir = "dist"`. Deployment: `wrangler pages deploy dist`.

## Adding a New Template

1. Add an entry to `src/data/templates.ts`
2. No other files need changing — template select, field grid, and gallery all derive from `TEMPLATES`

## Documentation Map

| Document | Purpose |
|----------|---------|
| `README.md` | Entry point — overview, quick start, doc index |
| `docs/ARCHITECTURE.md` | Project structure, data flow, PWA, Cloudflare |
| `docs/API_REFERENCE.md` | Key types, exports, adding templates/languages |
| `docs/DEPLOYMENT.md` | Cloudflare Pages, local dev, wrangler config |
| `docs/TESTING.md` | Vitest + Playwright, coverage, adding tests |
| `docs/COMFYUI.md` | ComfyUI setup, API dispatch, workflow nodes |
| `docs/CHANGELOG.md` | Release history |
| `docs/CREDITS.md` | Prisma Packs license, Krea 2, Google Fonts |
