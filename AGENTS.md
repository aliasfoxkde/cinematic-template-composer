# AGENTS.md

Guidance for AI coding assistants (Claude Code, Copilot, Cursor, etc.) working in this repository.

## Quick reference

```bash
npm install       # install dependencies
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
tsc --noEmit     # type check
```

## Architecture

This is a **static SPA** — no server-side rendering. All data lives in `src/data/` and all UI logic in `src/components/`.

**Data layer** (`src/data/`):
- `templates.ts` — 25 themes (title, template string with `{placeholder}` slots, image paths)
- `values.ts` — options per placeholder slot (falls back to `__generic__`)
- `prompts.ts` — 144 image → cinematic caption entries (used by lightbox)
- `workflows.ts` — ComfyUI node graph (static JSON, same for all templates)
- `i18n.ts` — EN / ES / KO / ZH strings
- `sizes.ts` — 5 aspect ratio presets

**Component tree** (`src/components/`):
```
App
├── Header
├── FieldGrid   ← dynamic per-template placeholder inputs + dice buttons
├── Gallery     ← thumbnails; click → Lightbox
├── PromptPreview ← textarea + copy button
├── ComfyUIPanel ← URI, size select, send, result image, i18n pills
└── Lightbox     ← full-screen overlay, keyboard nav
```

State lives in `App.ts`: `current` (template index), `picks` (placeholder → value map), `lang`.

## Adding a template

1. Add an entry to `src/data/templates.ts`
2. No other files need changing — template select, field grid, and gallery all derive from `TEMPLATES`

## Adding placeholder options

Edit `src/data/values.ts`. Any placeholder not explicitly listed falls back to `__generic__`.

## Adding i18n strings

Edit `src/data/i18n.ts`. Each language must define: `label`, `exp`, `sending`, `waiting`, `done`, `noimg`, `err`, `timeout`.

## Cloudflare Pages deployment

Wrangler is configured in `wrangler.toml`. CI deploys via `npx wrangler pages deploy dist`. The `_routes.json` in `public/` handles SPA routing fallback.

## PWA / offline

`vite-plugin-pwa` injects the service worker. Image precache and font caching are configured in `vite.config.ts`. To invalidate the service worker cache on a new release, rebuild (`npm run build`) — the precache hash changes automatically.

## Code constraints

- **No versioned files** (`_v1`, `_v2`, `_backup`, etc.) — use git branches
- **No duplicate implementations** — extend existing modules before creating new ones
- **Strict TypeScript** — `tsc --noEmit` must pass
- **Original HTML preserved** — `Template-Composer.html` is kept as reference, not modified
