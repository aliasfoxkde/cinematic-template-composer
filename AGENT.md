# Agent Guidance — Cinematic Template Composer

This file provides project-specific guidance for AI agents working in this repository.

## Project Overview

A Vite SPA that generates tailored AI cinematic prompts from 24 themed templates and dispatches them to a local ComfyUI instance. It includes a gallery of 144 cinematic stills with per-image prompt captions.

**Live:** https://main.cinematic-template-composer.pages.dev

## Build Commands

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview dist/ locally
npm run deploy       # build + wrangler pages deploy
npm run lint         # ESLint (0 errors required)
npm run test         # vitest unit tests
npx playwright test  # E2E browser tests
```

## Architecture

- **Static SPA** — no SSR, all logic client-side
- `src/data/` — typed data: 24 templates, placeholder values, per-image prompts, i18n, ComfyUI workflow
- `src/components/` — one file per UI component; each manages its own DOM
- `src/App.ts` — root orchestrator; owns template index and placeholder→value map
- `public/cinematic-stills/` — 144 `.webp` images; cached by PWA service worker
- `public/_routes.json` — SPA routing fallback for Cloudflare Pages

## Key Data Types

```typescript
interface Template {
  title: string;
  template: string;   // prompt with {placeholder} slots
  imgs: string[];     // relative paths from public/
}
```

Placeholders are extracted via `\{([^}]+)\}`. Values come from `VALUES` (with `__generic__` fallback). Gallery captions come from `PROMPTS`.

## PWA / Offline

`vite-plugin-pwa` injects a Workbox service worker:
- Precaches all `cinematic-stills/**/*.webp` at install time
- Runtime-caches Google Fonts with `CacheFirst`
- `registerType: 'autoUpdate'`

## Cloudflare Pages

Configured via `wrangler.toml` with `pages_build_output_dir = "dist"`. Deployment: `wrangler pages deploy dist`.

## Important Rules

1. **No versioned files** (`_v1`, `_v2`, `_new`, `_backup`) — use git history instead
2. **Test files must use `container.querySelector()` not `getElementById`** for elements inside test containers
3. **Components use `container.querySelector()` not `document.getElementById()`** for their own elements
4. **DOM tests must append container to `document.body`** before mounting
5. **E2E tests use `vite preview`** not `serve` for static file serving

## Documentation

All project documentation lives in `docs/`:
- `ARCHITECTURE.md` — project structure, data flow, PWA, Cloudflare
- `API_REFERENCE.md` — types, exports, adding templates/languages
- `DEPLOYMENT.md` — Cloudflare Pages, local dev, wrangler config
- `TESTING.md` — Vitest + Playwright setup, coverage
- `COMFYUI.md` — ComfyUI setup, API dispatch, workflow nodes
- `CHANGELOG.md` — release history

## Adding a New Template

1. Add an entry to `src/data/templates.ts`
2. No other files need changing — template select, field grid, and gallery all derive from `TEMPLATES`
