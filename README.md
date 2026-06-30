# Cinematic Template Composer

Generate tailored AI cinematic prompts from 24 themed templates and dispatch them directly to a local [ComfyUI](https://github.com/comfyanonymous/ComfyUI) instance. Browse a curated gallery of 144 cinematic stills, each with a per-image prompt caption.

**Live:** [https://main.cinematic-template-composer.pages.dev](https://main.cinematic-template-composer.pages.dev)

---

## Attribution

The original **Template-Composer.html** was a self-contained 303-line static HTML file written by the author. This project is a Vite-based rewrite with PWA support, ComfyUI dispatch, and full test coverage.

If you found this project useful, consider supporting the author:

[![Ko-fi](https://i.redd.it/4xry1cdrqgah1.png)](https://ko-fi.com/s/8b36aa8ba0)

---

## Quick Start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production → dist/
npm run preview      # preview dist/ locally
npm run deploy       # deploy to Cloudflare Pages
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/ARCHITECTURE.md) | Project structure, data flow, PWA/Offline, Cloudflare Pages |
| [API Reference](docs/API_REFERENCE.md) | Key types, exports, and component interfaces |
| [Deployment](docs/DEPLOYMENT.md) | Cloudflare Pages, local dev, wrangler config |
| [Testing](docs/TESTING.md) | Unit tests (Vitest), E2E (Playwright), coverage |
| [ComfyUI Guide](docs/COMFYUI.md) | Setup, API dispatch, workflow node graph |
| [Changelog](docs/CHANGELOG.md) | Release history and changes |
| [Credits](docs/CREDITS.md) | Prisma Packs license, Krea 2, Google Fonts |

---

## Features

- **24 cinematic themes** — 1920s Flapper, Cyberpunk Hacker, Viking Shieldmaiden, and more
- **8 placeholder slots per template** — scene type, narrative element, character focus, setting style, cinematography style, lighting mood, production value detail, visual style
- **Randomize all** — dice-roll a value for every slot at once
- **Image gallery + lightbox** — browse 144 curated stills with per-image prompt captions
- **ComfyUI dispatch** — send composed prompts to a local ComfyUI instance, pick an aspect ratio, receive the generated image
- **i18n** — English, Spanish, Korean, Chinese
- **PWA / offline** — install as a native app, works fully offline
- **Cloudflare Pages** — edge-deployed, one-command deploy

---

## Disclaimer

The 144 cinematic still images in `public/cinematic-stills/` are licensed from **Prisma Packs** and subject to the [Prisma Packs License Agreement](docs/CREDITS.md). You MAY use the images for personal and commercial projects. You MAY NOT resell or redistribute the images as-is.

Images were produced with the **Krea 2** text-to-image model. No copyright is claimed over AI-generated content.

See [docs/CREDITS.md](docs/CREDITS.md) for full attribution and license details.

---

## License

Source code: MIT License. Image assets: [Prisma Packs License](docs/CREDITS.md). See [LICENSE](LICENSE).
