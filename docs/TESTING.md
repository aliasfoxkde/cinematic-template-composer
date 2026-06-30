# Testing

## Test Suite

| Runner | Count | Purpose |
|--------|-------|---------|
| Vitest (unit) | 123 tests | Data layer, pure functions, component DOM mounting |
| Playwright (E2E) | 22 tests | Full browser rendering, user interactions |

Run all:
```bash
npx vitest run             # unit tests
npx playwright test         # E2E tests
```

Run with coverage (unit only):
```bash
npx vitest run --coverage
```

## Coverage

Vitest uses `v8` for coverage instrumentation. Thresholds are set in `vitest.config.ts`:

| Metric | Threshold | Current |
|--------|-----------|---------|
| Lines | 94% | 94.15% |
| Functions | 88% | 88.23% |
| Statements | 91% | 91.22% |
| Branches | 58% | 58.88% |

Coverage is measured for `src/**/*.ts` only. E2E tests validate the full browser rendering pipeline that unit tests cannot cover.

## Unit Tests (Vitest)

Unit tests use `jsdom` to simulate the browser DOM. Each component has a dedicated test file under `tests/components/`.

### Test Structure

```
tests/
  setup.ts              # Global mocks (crypto.randomUUID, globalThis.fetch)
  data/                 # Data layer tests
    templates.test.ts
    values.test.ts
    i18n.test.ts
    sizes.test.ts
    workflows.test.ts
  components/           # Component/DOM tests
    App.test.ts
    Header.test.ts
    FieldGrid.test.ts
    Gallery.test.ts
    Lightbox.test.ts
    PromptPreview.test.ts
    ComfyUIPanel.test.ts
  e2e/
    app.test.ts         # Playwright E2E tests
```

### Mock Globals

`tests/setup.ts` provides:
- `crypto.randomUUID` → `'test-uuid-1234'` (jsdom doesn't implement this)
- `globalThis.fetch` → `vi.fn()` (replaced per-test)

Individual tests mock component dependencies via `vi.mock()`:
```typescript
vi.mock('../../src/data/index.js', () => ({
  I18N: { en: { label: 'EN', ... }, ... },
  SIZES: [['512x512', 512, 512], ...],
  WORKFLOW: { '71': { inputs: {...}, class_type: 'EmptyLatentImage' } },
  NODE_PROMPT: '51',
  NODE_LATENT: '71',
}));
```

## E2E Tests (Playwright)

Playwright tests run against a served `dist/` build (not Vite dev server). The web server is started automatically by the Playwright config.

```typescript
// playwright.config.ts
webServer: {
  command: 'npx serve dist -l 4173',
  url: 'http://localhost:4173',
}
```

To run E2E tests locally:
```bash
# Terminal 1: serve the built app
npx serve dist -l 4173

# Terminal 2: run tests
npx playwright test
```

To see the browser while testing:
```bash
npx playwright test --headed
```

## Adding Tests

### New Template / Data
Add to `tests/data/templates.test.ts` or the relevant file.

### New Component Functionality
Add a new `describe` block to the component's test file in `tests/components/`.

Pattern:
```typescript
describe('newFeature', () => {
  let dom: JSDOM;
  beforeEach(() => {
    dom = new JSDOM('<!DOCTYPE html><html><body>...</body></html>');
    globalThis.document = dom.window.document;
  });
  it('does the thing', () => { ... });
});
```
