# Cinematic Template Composer

Generate tailored AI cinematic prompts from 25 themed templates and dispatch them directly to a local ComfyUI instance.

## Features

- **25 cinematic themes** — 1920s Flapper, Cyberpunk Hacker, Viking Shieldmaiden, and more
- **8 placeholder slots per template** — scene type, narrative element, character focus, setting style, cinematography style, lighting mood, production value detail, visual style
- **Randomize all** — dice-roll a value for every slot at once
- **Image gallery + lightbox** — browse 144 curated cinematic stills with per-image prompt captions
- **ComfyUI dispatch** — send the composed prompt to a local ComfyUI instance (Krea 2 model), pick an aspect ratio, and receive the generated image
- **i18n** — English, Spanish, Korean, Chinese
- **PWA / offline** — install as a native app, works fully offline (images cached via service worker)
- **Cloudflare Pages** — one-command deploy to the edge

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Opens at `http://localhost:5173` with HMR.

To test ComfyUI dispatch locally, start ComfyUI with CORS enabled:

```bash
python main.py --enable-cors-header
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Preview (local)

```bash
npm run preview
```

## Cloudflare Pages — Local Dev

```bash
npm run dev:cloudflare
```

## Deploy to Cloudflare Pages

```bash
npm run deploy
```

Requires `wrangler` to be authenticated (`npx wrangler login`).

## Cloudflare Pages — Manual Deploy

Connect your GitHub repository to Cloudflare Pages in the Cloudflare dashboard, or use:

```bash
npx wrangler pages deploy dist --project-name=cinematic-template-composer
```

The `_routes.json` and `_headers` files in `public/` configure edge caching and SPA routing automatically.

## Project Structure

| Path | Purpose |
|------|---------|
| `src/data/` | Typed data — templates, placeholder values, prompts, i18n, workflows |
| `src/components/` | Self-contained UI components |
| `src/styles/main.css` | All CSS |
| `public/` | Static assets served as-is; Cloudflare config files here too |
| `docs/` | Architecture, credits, planning docs |

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for details.
