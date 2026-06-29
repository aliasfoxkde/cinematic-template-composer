# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview dist/ locally
npm run dev:cloudflare   # Cloudflare Pages local emulation
npm run deploy       # build + wrangler pages deploy
```

## Architecture

**Static SPA** — no SSR, all logic client-side.

- `src/data/` — typed data: 25 templates, placeholder values, per-image prompts, i18n, ComfyUI workflow node graph
- `src/components/` — one file per UI component; each is self-contained and manages its own DOM
- `src/App.ts` — root orchestrator; owns `current` (template index) and `picks` (placeholder→value map)
- `public/cinematic-stills/` — 144 `.webp` images; served as static assets, cached by the PWA service worker
- `public/_routes.json` — SPA routing fallback for Cloudflare Pages (non-asset 404 → index.html)
- `public/_headers` — cache headers: immutable for hashed assets, no-cache for HTML shell

## PWA / Offline

`vite-plugin-pwa` injects a service worker that:
- Precaches all `cinematic-stills/**/*.webp` at install time (~20 MB)
- Runtime-caches Google Fonts with `CacheFirst`, 1-year expiry
- `registerType: 'autoUpdate'` — users always get the latest version on reload

## Cloudflare Pages

Configured via `wrangler.toml` with `pages_build_output_dir = "dist"`. Deployment: `wrangler pages deploy dist`.

## Key Data Types

```typescript
interface Template {
  title: string;
  template: string;   // prompt with {placeholder} slots
  imgs: string[];      // relative paths from public/
}
```

Placeholders are extracted via regex `/\{([^}]+)\}/`. Values for each slot come from `VALUES` (with `__generic__` fallback). Gallery captions come from `PROMPTS` (image path → caption string).

## Adding a New Template

1. Add an entry to `src/data/templates.ts`
2. No other files need changing — template select, field grid, and gallery all derive from `TEMPLATES`
