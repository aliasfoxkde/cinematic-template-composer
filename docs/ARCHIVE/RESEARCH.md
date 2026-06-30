# RESEARCH.md — Cinematic Template Composer Conversion

## Source Material

**Original:** `Template-Composer.html` — a 303-line self-contained static HTML file.
**Assets:** 144 `.webp` images in `cinematic-stills/16-9/` (20 MB total).
**License:** Prisma Packs License (see `LICENSE`) — images from Krea 2 model, curated pack.
**ComfyUI Integration:** Sends composed prompts to a local ComfyUI instance via REST API.

## What the App Does

- 25 cinematic prompt templates (1920s Flapper, Cyberpunk Hacker, Viking Shieldmaiden, etc.)
- Each template fills 8 placeholder slots: `scene_type`, `narrative_element`, `character_focus`, `setting_style`, `cinematography_style`, `lighting_mood`, `production_value_detail`, `visual_style`
- "Randomize all" dice rolls a random value per placeholder
- Preview/composed prompt output with copy button
- Image gallery with lightbox showing per-image cinematic prompts
- i18n: EN, ES, KO, ZH
- ComfyUI dispatch: sends composed prompt + workflow to local ComfyUI, polls for result image

## Conversion Goals

1. **Vite + TypeScript SPA** — proper module structure, typed data, fast HMR dev
2. **Cloudflare Pages/Workers deployment** — `wrangler.toml`, `_headers`, `_routes.json`, SPA routing fallback
3. **Extensible data layer** — templates, values, prompts, workflows as typed TS data files
4. **Component-based UI** — Header, TemplateSelector, FieldGrid, Gallery, Lightbox, ComfyUIPanel
5. **Image assets preserved** — keep `cinematic-stills/` as static public assets

## Architecture Notes

- Static SPA (no SSR) — all data lives in `src/data/`, images in `public/cinematic-stills/`
- `vite-plugin-cloudflare` for local dev emulation
- SPA routing fallback via `_routes.json` to serve `index.html` for all non-asset paths
- Cloudflare Pages caches assets at edge — set long cache headers for images/fonts

## Out of Scope

- ComfyUI workflow editor (workflow data is static from original)
- Backend/API (ComfyUI is a local client-side call)
- User accounts or persistence
