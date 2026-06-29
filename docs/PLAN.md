# PLAN.md — Cinematic Template Composer Conversion

## Phase 1: Project Scaffold
- [x] Create `docs/RESEARCH.md`, `docs/PLAN.md`, `docs/TASKS.md`, `docs/PROGRESS.md`
- [ ] Create `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`
- [ ] Create `wrangler.toml`, `public/_headers`, `public/_routes.json`
- [ ] Create `src/` directory structure (`data/`, `components/`, `styles/`, `lib/`)

## Phase 2: Data Layer
- [ ] Extract `DATA` (25 templates) → `src/data/templates.ts`
- [ ] Extract `VALUES` (placeholder options) → `src/data/values.ts`
- [ ] Extract `PROMPTS` (image → prompt map) → `src/data/prompts.ts`
- [ ] Extract `WF` (ComfyUI workflow) → `src/data/workflows.ts`
- [ ] Extract `I18N` (translations) → `src/data/i18n.ts`
- [ ] Extract `SIZES` (aspect ratios) → `src/data/sizes.ts`
- [ ] Create `src/data/index.ts` barrel export

## Phase 3: UI Components
- [ ] `src/styles/main.css` — CSS variables from original, scoped styles
- [ ] `src/components/Header.ts` — brand, subtitle, Prisma Packs tag
- [ ] `src/components/TemplateSelector.ts` — select + gallery thumbnails + field grid
- [ ] `src/components/FieldGrid.ts` — per-placeholder input + select + dice button
- [ ] `src/components/PromptPreview.ts` — textarea output + copy button
- [ ] `src/components/ComfyUIPanel.ts` — URI input, size select, Send button, result image, language pills
- [ ] `src/components/Lightbox.ts` — full-screen image overlay with prompt caption + nav

## Phase 4: App Wiring
- [ ] `src/App.ts` — orchestrates all components, owns state (current template, picks, lang)
- [ ] `src/main.ts` — mounts App to `#app`
- [ ] `index.html` — minimal shell with `<div id="app">`

## Phase 5: Cloudflare Deployment Config
- [ ] `public/_headers` — cache headers for static assets
- [ ] `public/_routes.json` — SPA routing fallback (serve index.html for 404s)
- [ ] `wrangler.toml` — Pages project name and build output

## Phase 6: Documentation & Cleanup
- [ ] Update `README.md` — project description, setup, deploy steps
- [ ] Update `CLAUDE.md` — build commands, architecture overview
- [ ] Create `docs/ARCHITECTURE.md` — data flow, component hierarchy
- [ ] Create `docs/CREDITS.md` — attribution to original HTML, Prisma Packs, Krea 2
- [ ] Update `LICENSE` — add attribution section
- [ ] Create `.gitignore`

## Phase 7: Verification
- [ ] `npm install` succeeds
- [ ] `npm run dev` starts dev server
- [ ] `npm run build` produces `dist/`
- [ ] `npm run deploy` (dry-run via `wrangler pages dev dist --local`)
