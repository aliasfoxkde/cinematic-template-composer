# ComfyUI Guide

## Overview

The ComfyUI panel lets you send the composed prompt directly to a local ComfyUI instance for image generation. ComfyUI must be running locally with CORS enabled.

## Setup

1. Install [ComfyUI](https://github.com/comfyanonymous/ComfyUI) if not already installed.

2. Enable CORS by starting ComfyUI with the flag:
   ```bash
   python main.py --enable-cors-header
   ```

3. Note the ComfyUI URL (default: `http://127.0.0.1:8188`). Enter it in the app's ComfyUI URI field.

## How It Works

The panel sends a ComfyUI workflow as JSON to your local ComfyUI instance:

1. **POST `/prompt`** — sends the workflow with the composed prompt text
2. **Poll `/history/{prompt_id}`** — waits for completion (up to 300 × 1s = 5 minutes)
3. **GET `/view`** — fetches the output image by filename

### Workflow Nodes

| Node ID | Type | Role |
|---------|------|------|
| `51` | CLIPTextEncode | Sets the prompt text |
| `53` | KSampler | Sampling parameters |
| `71` | EmptyLatentImage | Latent dimensions (from size select) |
| `29` | SaveImage | Saves output |

### Size Presets

| Label | Dimensions |
|-------|-----------|
| 512x512 | 512×512 |
| 768x768 | 768×768 |
| 1024x1024 | 1024×1024 |
| 512x1024 | 512×1024 |
| 1024x512 | 1024×512 |

## ComfyUI Workflow

The workflow is defined statically in `src/data/workflows.ts`. It is deep-cloned at send time so each request gets fresh parameters.

```typescript
// src/data/workflows.ts
export const NODE_PROMPT = '51';
export const NODE_LATENT = '71';
export const WORKFLOW: Record<string, WFNode> = { ... };
```

## i18n

Status messages are localised via the i18n pill buttons (EN / ES / KO / 中文). The language persists in memory for the session.

## Troubleshooting

**"Error" status after Send**
- Verify ComfyUI is running at the URI you entered
- Confirm CORS is enabled (`--enable-cors-header`)
- Check the ComfyUI console for errors

**Timeout (5 minutes)**
- Try a simpler workflow or smaller image size
- Check ComfyUI queue for stuck jobs

**No image returned**
- Ensure the KSampler has a valid model loaded
- Check ComfyUI output folder for saved images
