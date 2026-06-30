# Architecture

## Overview

Cinematic Template Composer is a static SPA built with Vite and TypeScript. All logic — template data, prompt generation, ComfyUI dispatch — runs client-side.

## Directory Structure

```
src/
  data/             # Typed data: templates, values, prompts, i18n, workflows
    templates.ts     # 24 cinematic themes (title, template string, image paths)
    values.ts       # Options for each placeholder slot + __generic__ fallback
    prompts.ts      # Image path → cinematic caption (lightbox)
    workflows.ts    # ComfyUI workflow node graph (static JSON)
    i18n.ts         # EN / ES / KO / ZH translations
    sizes.ts        # Aspect ratio presets for ComfyUI latent
    index.ts        # Public barrel export
  components/       # One self-contained file per UI component
    App.ts          # Root orchestrator — owns state
    Header.ts       # Brand header
    Gallery.ts      # Thumbnail strip → Lightbox on click
    FieldGrid.ts    # Per-placeholder input + datalist + dice button
    PromptPreview.ts # Textarea output + copy-to-clipboard
    ComfyUIPanel.ts # ComfyUI URI/size/send/result + i18n pills
    Lightbox.ts     # Full-screen overlay, keyboard nav, prompt caption
  styles/main.css   # All CSS — variables, layout, components, lightbox
  main.ts           # Entry point — mounts App to #app
public/
  cinematic-stills/ # 144 .webp images (static assets, PWA-precached)
  _headers          # Cloudflare edge cache headers
  _routes.json       # SPA routing fallback (404 → index.html)
  favicon.svg
docs/
  ARCHITECTURE.md   # This file
  API_REFERENCE.md  # Key types and exports
  DEPLOYMENT.md     # Cloudflare Pages, wrangler
  TESTING.md        # Vitest + Playwright
  COMFYUI.md        # ComfyUI setup and dispatch
  CHANGELOG.md      # Release history
  CREDITS.md        # Attribution and licenses
  ARCHIVE/          # Historical planning docs
.github/
  CONTRIBUTING.md
  ISSUE_TEMPLATE/
  PULL_REQUEST_TEMPLATE.md
```

## Data Flow

1. `App.ts` initialises: `current` (template index), `picks` (placeholder→value map)
2. User selects a template → `buildFields()` renders one form row per placeholder
3. User types or dice-rolls values → `picks` updated → `render()` fills template string → textarea updated
4. **Copy** — `navigator.clipboard.writeText` with `execCommand` fallback
5. **Send to ComfyUI** — POST `/prompt` → poll `/history/{id}` → GET `/view?filename=…`
6. **Lightbox** — opened from gallery thumbnails, shows curated caption from `prompts.ts`

## Key Types

```typescript
interface Template {
  title: string;
  template: string;   // prompt with {placeholder} slots
  imgs: string[];    // relative paths from public/
}
```

Placeholders extracted via `\{([^}]+)\}`. Values from `VALUES[slot]` with `__generic__` fallback. Gallery captions from `PROMPTS[imagePath]`.

## PWA / Offline

`vite-plugin-pwa` injects a service worker that:
- Precaches all `cinematic-stills/**/*.webp` at install time (~20 MB)
- Runtime-caches Google Fonts with `CacheFirst`, 1-year expiry
- `registerType: 'autoUpdate'` — users always get the latest version on reload

## Cloudflare Pages

- `wrangler.toml` declares `pages_build_output_dir = "dist"`
- `public/_routes.json` — `fallthrough: true` makes 404s serve `index.html` for SPA routing
- `public/_headers` — immutable cache for hashed assets, no-cache for HTML shell

## Build Commands

```bash
npm run dev           # dev server http://localhost:5173
npm run build         # → dist/
npm run preview       # preview dist/
npm run dev:cloudflare # Cloudflare Pages local emulation
npm run deploy         # build + wrangler pages deploy
```
