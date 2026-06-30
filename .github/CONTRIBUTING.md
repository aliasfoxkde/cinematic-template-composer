# Contributing

## Development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production → dist/
npm run lint         # ESLint check
npm run test         # vitest unit tests
npx playwright test   # E2E browser tests
```

## Code Standards

- **TypeScript** — strict mode enabled; avoid `any`; use explicit return types on exported functions
- **ESLint** — runs with typescript-eslint type-checking rules; all errors must be resolved before committing
- **Tests** — new features should include unit tests; E2E tests should cover user-facing interactions
- **Commits** — use clear, descriptive commit messages; reference issues where relevant

## Branching

```
main (production)
  └── stable (integration)
       └── feature/description
       └── fix/description
```

Create a branch for each piece of work. Never commit directly to `main`.

## Pull Requests

1. Branch from `stable`
2. Make changes with passing tests and lint
3. Open a PR with the PR template filled in
4. Request review from a maintainer

## Documentation

User-facing docs live in `docs/`:
- `ARCHITECTURE.md` — project structure and design
- `API_REFERENCE.md` — types and exports
- `DEPLOYMENT.md` — Cloudflare Pages and local dev
- `TESTING.md` — test setup and running tests
- `COMFYUI.md` — ComfyUI setup and dispatch
- `CHANGELOG.md` — release history (update when changing behavior)

## Reporting Issues

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) or [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) when opening an issue.
