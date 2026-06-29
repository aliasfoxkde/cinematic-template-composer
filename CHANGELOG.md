# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-06-29

### Added

- Initial release — Vite + TypeScript SPA converted from `Template-Composer.html`
- 25 cinematic prompt templates with 8 placeholder slots each
- 144 curated cinematic still images (Prisma Packs)
- Randomize all — dice-roll every placeholder at once
- Image gallery with full-screen lightbox and per-image prompt captions
- ComfyUI dispatch — send composed prompts to local ComfyUI instance (Krea 2 model)
- i18n: English, Spanish, Korean, Chinese
- PWA / offline support — service worker precaches all images (~20 MB) and Google Fonts
- Cloudflare Pages deployment configuration (`wrangler.toml`, `_routes.json`, `_headers`)
- Dual licensing: MIT for code, Prisma Packs License for images
