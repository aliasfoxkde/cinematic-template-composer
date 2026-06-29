# ARCHITECTURE.md

## Overview

Cinematic Template Composer is a static SPA (Single Page Application) built with Vite and TypeScript. It runs entirely in the browser with no server-side logic — all template data, prompt generation, and ComfyUI dispatch are client-side.

## Directory Structure

```
src/
  data/           # Typed data files — templates, values, prompts, i18n, workflows
    templates.ts  # 25 cinematic themes (title, template string, image paths)
    values.ts     # Options for each placeholder slot
    prompts.ts    # Image → cinematic caption map (used by lightbox)
    workflows.ts  # ComfyUI workflow node graph (static JSON)
    i18n.ts       # EN / ES / KO / ZH translation strings
    sizes.ts      # Aspect ratio presets for ComfyUI latent generation
    index.ts      # Public barrel export
  components/     # One file per UI component, each self-contained
    App.ts        # Root — owns state, orchestrates all other components
    Header.ts     # Brand header
    Gallery.ts    # Thumbnail strip, delegates to Lightbox on click
    FieldGrid.ts  # Dynamic form fields for template placeholders
    PromptPreview.ts  # Textarea + copy-to-clipboard
    ComfyUIPanel.ts  # ComfyUI URI/size/send/result + i18n pills
    Lightbox.ts   # Full-screen image overlay, keyboard nav
  styles/
    main.css      # All CSS — variables, layout, components, lightbox
  main.ts         # Entry point — mounts App to #app
public/
  cinematic-stills/   # 144 .webp images — served as static assets
  _headers        # Cloudflare cache headers
  _routes.json    # SPA routing fallback
  favicon.svg     # App icon
docs/
  ARCHITECTURE.md  # This file
  CREDITS.md       # Attribution for Prisma Packs, Krea 2, original HTML
```

## Data Flow

1. `App.ts` initialises state: `current` (template index), `picks` (placeholder→value map)
2. User selects a template → `buildFields()` renders a form row per placeholder
3. User types or dice-rolls values → `picks` updated → `render()` fills template string → textarea updated
4. **Copy** → clipboard API
5. **Send to ComfyUI** → POST `/prompt` → poll `/history/{id}` → GET `/view?filename=…`
6. **Lightbox** → opened from gallery thumbnails, shows curated caption from `prompts.ts`

## PWA / Offline

`vite-plugin-pwa` injects a service worker that:
- Precaches all `cinematic-stills/**/*.webp` at install time (20 MB bundle)
- Runtime-caches Google Fonts (both stylesheet and static font files) with `CacheFirst`, 1-year expiry
- Emits `index.html` with `autoUpdate` registration — users always get the latest version on reload

## Cloudflare Pages

- `wrangler.toml` declares `pages_build_output_dir = "dist"`
- `public/_routes.json` — `fallthrough: true` means non-asset paths (404s) serve `index.html` for SPA routing
- `public/_headers` — immutable cache for `_assets/` (hashed filenames), no-cache for `index.html`
