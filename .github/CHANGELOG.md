# Changelog

## [Unreleased]

### Fixed
- **Rendering blank page** — `mountLightbox(document.body)` used `innerHTML` which replaced `#app` and all other body children, leaving only the lightbox div
- **Prompt textarea always empty** — `outEl` (the textarea rendered to) was never appended to the DOM; `render()` wrote to this detached ghost node instead of the real `#out`
- **ComfyUI panel not interactive** — duplicate `mountComfyUIPanel()` call destroyed the panel's DOM after the first mount

### Quality
- Added Vitest unit tests (123 tests across 12 files)
- Added Playwright E2E tests (22 browser tests)
- Added ESLint v10 flat config with typescript-eslint type-checked rules
- Line coverage: **94.15%** | Functions: **88.23%** | Statements: **91.22%** | Branches: **58.88%**
- ESLint: 0 errors, 0 warnings

### Docs
- Restructured docs into `docs/` with dedicated API, Deployment, Testing, ComfyUI, Changelog, and Credits pages
- Moved historical planning docs to `docs/ARCHIVE/`
- Added GitHub issue and PR templates in `.github/`
- Combined and expanded README with navigation table

---

## v1.0.0 — Initial Vite Conversion

### Added
- Vite + TypeScript SPA scaffold
- Cloudflare Pages deployment (`wrangler.toml`, `_routes.json`, `_headers`)
- PWA with `vite-plugin-pwa` — service worker precaches 144 stills + fonts
- 24 cinematic prompt templates (`src/data/templates.ts`)
- ComfyUI dispatch with i18n (EN / ES / KO / ZH)
- Image gallery + lightbox with curated per-image prompt captions
- Local development (`npm run dev`) and Cloudflare emulation (`npm run dev:cloudflare`)
