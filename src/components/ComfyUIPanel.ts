// src/components/ComfyUIPanel.ts
// ComfyUI dispatch: address input, size select, send button, result image, i18n pills.

import { I18N, SIZES, WORKFLOW, NODE_PROMPT, NODE_LATENT, type I18nKey } from '../data/index.js';

interface ComfyUIState {
  clientId: string;
  lang: I18nKey;
}

let state: ComfyUIState = { clientId: crypto.randomUUID(), lang: 'en' };
let resultImgEl: HTMLImageElement | null = null;
let statusEl: HTMLElement | null = null;
let expEl: HTMLElement | null = null;
let pillsEl: HTMLElement | null = null;
let sendBtn: HTMLButtonElement | null = null;

function setLang(l: I18nKey) {
  state.lang = l;
  if (expEl) expEl.innerHTML = I18N[l].exp;
  [...(pillsEl?.children ?? [])].forEach((b) =>
    b.classList.toggle('active', (b as HTMLElement).dataset.l === l),
  );
}

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

function setStatus(text: string, cls = '') {
  if (statusEl) {
    statusEl.textContent = text;
    statusEl.className = 'hint' + (cls ? ' ' + cls : '');
  }
}

async function generate(base: string, prompt: string, sizeIdx: number) {
  if (!sendBtn) return;
  sendBtn.disabled = true;
  setStatus(I18N[state.lang].sending);

  const wf = JSON.parse(JSON.stringify(WORKFLOW)) as typeof WORKFLOW;
  const sz = SIZES[sizeIdx];
  if (wf[NODE_LATENT]) {
    wf[NODE_LATENT].inputs.width = sz[1];
    wf[NODE_LATENT].inputs.height = sz[2];
  }
  wf[NODE_PROMPT].inputs.text = prompt;

  const cid = state.clientId;

  try {
    const r = await fetch(`${base}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: wf, client_id: cid }),
    });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const { prompt_id } = await r.json() as { prompt_id: string };
    setStatus(I18N[state.lang].waiting);

    let pid = prompt_id;
    for (let i = 0; i < 300; i++) {
      await sleep(1000);
      try {
        const h = await (await fetch(`${base}/history/${pid}`)).json() as Record<string, unknown>;
        if (h[pid] && (h[pid] as Record<string, unknown>).outputs) {
          const outputs = (h[pid] as Record<string, Record<string, { images?: { filename: string; subfolder?: string; type?: string }[] }>>).outputs ?? {};
          let img: { filename: string; subfolder?: string; type?: string } | undefined;
          for (const k of Object.keys(outputs)) {
            const o = outputs[k] as { images?: { filename: string; subfolder?: string; type?: string }[] };
            if (o.images?.length) { img = o.images[0]; break; }
          }
          if (img) {
            const q = new URLSearchParams({
              filename: img.filename,
              subfolder: img.subfolder ?? '',
              type: img.type ?? 'output',
            });
            if (resultImgEl) {
              resultImgEl.src = `${base}/view?${q}`;
              resultImgEl.style.display = 'block';
            }
            setStatus(I18N[state.lang].done, 'ok');
            sendBtn!.disabled = false;
            return;
          }
        }
      } catch { /* keep polling */ }
    }
    setStatus(I18N[state.lang].timeout, 'err');
  } catch {
    setStatus(I18N[state.lang].err, 'err');
  } finally {
    sendBtn!.disabled = false;
  }
}

export function mountComfyUIPanel(
  container: HTMLElement,
  getPrompt: () => string,
) {
  container.className = 'card';
  container.innerHTML = `
    <label>ComfyUI</label>
    <div class="uri">
      <div><input id="uri" value="http://127.0.0.1:8188" spellcheck="false"></div>
      <div class="or"><select id="size"></select></div>
      <button class="primary" id="send">Send</button>
    </div>
    <div class="hint" id="status"></div>
    <img id="result" alt="result" />
    <div class="pills" id="pills"></div>
    <p class="exp" id="exp"></p>
  `;

  const uriEl = document.getElementById('uri') as HTMLInputElement;
  const sizeSel = document.getElementById('size') as HTMLSelectElement;
  sendBtn    = document.getElementById('send') as HTMLButtonElement;
  statusEl   = document.getElementById('status');
  resultImgEl = document.getElementById('result') as HTMLImageElement;
  expEl      = document.getElementById('exp');
  pillsEl    = document.getElementById('pills');

  SIZES.forEach(([label]) => {
    const o = document.createElement('option');
    o.textContent = label;
    sizeSel.appendChild(o);
  });

  // i18n pills
  (Object.keys(I18N) as I18nKey[]).forEach((l) => {
    const b = document.createElement('button');
    b.className = 'pill';
    b.dataset.l = l;
    b.textContent = I18N[l].label;
    b.addEventListener('click', () => setLang(l));
    pillsEl?.appendChild(b);
  });

  sendBtn.addEventListener('click', () => {
    const base = (uriEl.value || 'http://127.0.0.1:8188').trim().replace(/\/+$/, '');
    generate(base, getPrompt(), sizeSel.selectedIndex);
  });

  setLang(state.lang);
}
