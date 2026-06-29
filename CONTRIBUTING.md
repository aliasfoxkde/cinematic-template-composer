# Contributing to Cinematic Template Composer

Thank you for your interest in contributing!

## Development setup

```bash
git clone https://github.com/aliasfoxkde/cinematic-template-composer.git
cd cinematic-template-composer
npm install
npm run dev       # dev server at http://localhost:5173
npm run build      # production build
tsc --noEmit      # type check
```

## Branching strategy

```
main (production)
  └── feat/your-feature-name
       └── PR → main
```

- **`main`** — stable, always deployable
- **Feature branches** — `feat/description`, `fix/bug-description`
- **Documentation** — `docs/description`

## Adding a new template

Templates are defined in [`src/data/templates.ts`](src/data/templates.ts). Each entry has:

```typescript
{
  title: "My Theme",
  template: "Create a cinematic still for {scene_type} with {character_focus}...",
  imgs: ["cinematic-stills/16-9/my_theme.webp", "..."],
}
```

Placeholders must match keys in [`src/data/values.ts`](src/data/values.ts) (or fall back to `__generic__`). After adding the template, rebuild with `npm run build`.

## Adding placeholder options

Edit [`src/data/values.ts`](src/data/values.ts). The `__generic__` array is used as a fallback for any placeholder slot that doesn't have its own entry.

## Adding i18n strings

Edit [`src/data/i18n.ts`](src/data/i18n.ts). Each language key (`en`, `es`, `ko`, `zh`) must define all five strings: `label`, `exp`, `sending`, `waiting`, `done`, `noimg`, `err`, `timeout`.

## Pull request process

1. Create a branch from `main`
2. Make your changes — ensure `tsc --noEmit` and `npm run build` both pass
3. Open a PR against `main`
4. Fill out the PR template completely
5. Link any related issues with "Fixes #N"

## Commit messages

Use clear, concise commit messages. Prefix with the affected area:

```
feat(gallery): add lazy loading to thumbnails
fix(comfyui): handle timeout gracefully
docs(readme): add Cloudflare Pages setup section
```

## Code style

- TypeScript strict mode is enforced — no `any` without justification
- Components are self-contained — no cross-component imports
- CSS uses the variables defined in `src/styles/main.css`

## License

By contributing, you agree that your contributions will be licensed under the MIT License. Image assets remain under the Prisma Packs License.
