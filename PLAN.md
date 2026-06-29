# PLAN.md — Cinematic Template Composer Conversion

## Phase 1: Project Scaffold
- [x] Create `docs/RESEARCH.md`, `docs/PLAN.md`, `docs/TASKS.md`, `docs/PROGRESS.md`
- [x] Create `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`
- [x] Create `wrangler.toml`, `public/_headers`, `public/_routes.json`
- [x] Create `src/` directory structure (`data/`, `components/`, `styles/`)

## Phase 2: Data Layer
- [x] Extract `DATA` (25 templates) → `src/data/templates.ts`
- [x] Extract `VALUES` (placeholder options) → `src/data/values.ts`
- [x] Extract `PROMPTS` (image → prompt map) → `src/data/prompts.ts`
- [x] Extract `WF` (ComfyUI workflow) → `src/data/workflows.ts`
- [x] Extract `I18N` (translations) → `src/data/i18n.ts`
- [x] Extract `SIZES` (aspect ratios) → `src/data/sizes.ts`
- [x] Create `src/data/index.ts` barrel export

## Phase 3: UI Components
- [x] `src/styles/main.css` — CSS variables from original, scoped styles
- [x] `src/components/Header.ts` — brand, subtitle, Prisma Packs tag
- [x] `src/components/Gallery.ts` — thumbnail strip, opens Lightbox on click
- [x] `src/components/FieldGrid.ts` — per-placeholder input + datalist + dice button
- [x] `src/components/PromptPreview.ts` — textarea output + copy button
- [x] `src/components/ComfyUIPanel.ts` — URI input, size select, Send button, result image, language pills
- [x] `src/components/Lightbox.ts` — full-screen image overlay with prompt caption + nav
- [x] `src/App.ts` — root orchestrator, owns state
- [x] `src/main.ts` — mounts App to `#app`
- [x] `index.html` — minimal shell

## Phase 4: Cloudflare Deployment Config
- [x] `public/_headers` — cache headers for static assets
- [x] `public/_routes.json` — SPA routing fallback (serve index.html for 404s)
- [x] `wrangler.toml` — Pages project name and build output
- [x] `public/favicon.svg` — app icon

## Phase 5: PWA / Offline
- [x] `vite-plugin-pwa` configured in `vite.config.ts`
- [x] Service worker precaches all 144 cinematic still images (~20 MB)
- [x] Runtime cache for Google Fonts (1-year CacheFirst)
- [x] Manifest: standalone display, autoUpdate registration

## Phase 6: Documentation
- [x] `README.md` — project description, setup, deploy steps
- [x] `CLAUDE.md` — build commands, architecture overview, adding templates guide
- [x] `docs/ARCHITECTURE.md` — data flow, component hierarchy, PWA, Cloudflare
- [x] `docs/CREDITS.md` — attribution to Prisma Packs, Krea 2, Google Fonts, build tools
- [x] `LICENSE` — MIT for code + Prisma Packs license for images
- [x] `.gitignore`

## Phase 7: Verification
- [ ] `npm install` succeeds
- [ ] `npm run dev` starts dev server
- [ ] `npm run build` produces `dist/`
- [ ] `npm run dev:cloudflare` works
