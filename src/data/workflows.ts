// src/data/workflows.ts
// ComfyUI workflow definition — static, parsed from the original Template-Composer.html.
// Node "51" = CLIPTextEncode (prompt), "53" = KSampler, "71" = EmptyLatentImage.

export const NODE_PROMPT = '51';
export const NODE_SEED = '53';
export const NODE_LATENT = '71';

interface WFNode {
  inputs: Record<string, unknown>;
  class_type: string;
  _meta?: { title: string };
}

export const WORKFLOW: Record<string, WFNode> = {
  '29': {
    inputs: { filename_prefix: 'Krea2_turbo', images: ['54', 0] },
    class_type: 'SaveImage',
    _meta: { title: 'Save Image' },
  },
  '51': {
    inputs: { text: '', clip: ['56', 0] },
    class_type: 'CLIPTextEncode',
    _meta: { title: 'CLIP Text Encode (Prompt)' },
  },
  '53': {
    inputs: {
      seed: 46206709442915,
      steps: 12,
      cfg: 1,
      sampler_name: 'euler',
      scheduler: 'simple',
      denoise: 1,
      model: ['55', 0],
      positive: ['51', 0],
      negative: ['76', 0],
      latent_image: ['71', 0],
    },
    class_type: 'KSampler',
    _meta: { title: 'KSampler' },
  },
  '54': {
    inputs: { samples: ['53', 0], vae: ['57', 0] },
    class_type: 'VAEDecode',
    _meta: { title: 'VAE Decode' },
  },
  '55': {
    inputs: {
      unet_name: 'krea2\\krea2_turbo_fp8_scaled.safetensors',
      weight_dtype: 'default',
    },
    class_type: 'UNETLoader',
    _meta: { title: 'Load Diffusion Model' },
  },
  '56': {
    inputs: {
      clip_name: 'qwen3vl_4b_fp8_scaled.safetensors',
      type: 'krea2',
      device: 'default',
    },
    class_type: 'CLIPLoader',
    _meta: { title: 'Load CLIP' },
  },
  '57': {
    inputs: { vae_name: 'wan_2.1_vae.safetensors' },
    class_type: 'VAELoader',
    _meta: { title: 'Load VAE' },
  },
  '71': {
    inputs: { width: 1280, height: 720, batch_size: 1 },
    class_type: 'EmptyLatentImage',
    _meta: { title: 'Empty Latent Image' },
  },
  '76': {
    inputs: {
      text: '(lowres:1.2), (worst quality:1.4), (low quality:1.4), (bad anatomy:1.4), bad hands, multiple views, (comics:1.4), jpeg artifacts, patreon logo, patreon username, web address, signature, watermark, text, logo,',
      clip: ['56', 0],
    },
    class_type: 'CLIPTextEncode',
    _meta: { title: 'CLIP Text Encode (Prompt)' },
  },
};
