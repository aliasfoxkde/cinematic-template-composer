# API Reference

## Key Data Types

```typescript
interface Template {
  title: string;
  template: string;   // prompt string with {placeholder} slots
  imgs: string[];    // relative paths from public/
}
```

## Data Layer (`src/data/`)

### `templates.ts` — `TEMPLATES: Template[]`
24 cinematic prompt templates. Each has a title, template string with `{placeholder}` slots, and gallery image paths.

### `values.ts` — `VALUES: Record<string, string[]>`
Options for each placeholder slot. Falls back to `VALUES['__generic__']` for unknown slots.

### `prompts.ts` — `PROMPTS: Record<string, string>`
Image path (e.g. `/cinematic-stills/16-9/1920s_flapper.webp`) → cinematic caption string.

### `workflows.ts`
```typescript
export const NODE_PROMPT = '51';   // CLIPTextEncode
export const NODE_SEED   = '53';   // KSampler
export const NODE_LATENT = '71';   // EmptyLatentImage
export const WORKFLOW: Record<string, WFNode>
```

### `sizes.ts` — `SIZES: [label, width, height][]`
Aspect ratio presets for ComfyUI latent generation.

| label | dimensions |
|-------|-----------|
| 512x512 | 512×512 |
| 768x768 | 768×768 |
| 1024x1024 | 1024×1024 |
| 512x1024 | 512×1024 |
| 1024x512 | 1024×512 |

### `i18n.ts` — `I18N: Record<I18nKey, I18nStrings>`
```typescript
type I18nKey = 'en' | 'es' | 'ko' | 'zh';
interface I18nStrings {
  label: string;       // pill label e.g. 'EN'
  exp: string;          // explanation text
  sending: string;      // status while POSTing
  waiting: string;      // status while polling
  done: string;         // status on success
  timeout: string;      // status on poll timeout
  err: string;         // status on error
}
```

## Component Exports

### `FieldGrid.ts`
```typescript
export function buildPlaceholders(template: string): string[]
export function mountFieldGrid(
  container: HTMLElement,
  placeholders: string[],
  initialPicks: Record<string, string>,
  onChange: (picks: Record<string, string>) => void,
): void
```

### `PromptPreview.ts`
```typescript
export function renderPrompt(template: string, picks: Record<string, string>): string
export function mountPromptPreview(container: HTMLElement): void
export async function copyToClipboard(text: string, msgEl: HTMLElement): Promise<void>
```

### `Gallery.ts`
```typescript
export function mountGallery(
  container: HTMLElement,
  imgs: string[],
  onReady?: () => void,
): void
```

### `Lightbox.ts`
```typescript
export function mountLightbox(container: HTMLElement): void
export function lbOpen(srcs: string[], idx: number): void
```

### `ComfyUIPanel.ts`
```typescript
export function mountComfyUIPanel(
  container: HTMLElement,
  getPrompt: () => string,
): void
```

## Adding a New Template

1. Add an entry to `src/data/templates.ts`
2. No other files need changing — template select, field grid, and gallery all derive from `TEMPLATES`

## Adding a New Language

1. Add entries to `src/data/i18n.ts` under the new locale key
2. Pill buttons are rendered dynamically from `Object.keys(I18N)`
