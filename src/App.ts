// src/App.ts — root component, owns all application state.

import { TEMPLATES } from './data/index.js';
import { buildPlaceholders, mountFieldGrid } from './components/FieldGrid.js';
import { mountGallery } from './components/Gallery.js';
import { mountHeader } from './components/Header.js';
import { mountLightbox } from './components/Lightbox.js';
import { mountComfyUIPanel } from './components/ComfyUIPanel.js';
import { mountPromptPreview, renderPrompt, copyToClipboard } from './components/PromptPreview.js';
import './styles/main.css';

export function mountApp(el: HTMLElement) {
  el.innerHTML = `<div class="wrap"></div>`;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const wrap = el.querySelector('.wrap')!;

  // Sections — created in DOM order
  const headerEl    = document.createElement('div');
  const countEl     = document.createElement('div');
  countEl.className = 'count';
  const cardEl      = document.createElement('div');
  cardEl.className  = 'card';

  const tplSel   = document.createElement('select');
  const galleryEl = document.createElement('div');
  const fieldsEl  = document.createElement('div');
  const btnRow    = document.createElement('div');
  btnRow.className = 'row';

  const randBtn  = document.createElement('button');
  randBtn.className  = 'primary';
  randBtn.textContent = '🎲 Randomize all';
  const resetBtn = document.createElement('button');
  resetBtn.id        = 'reset';
  resetBtn.textContent = '↺ Reset';
  const copyBtn  = document.createElement('button');
  copyBtn.id     = 'copy';
  copyBtn.textContent = '📋 Copy prompt';
  const msgEl    = document.createElement('span');
  msgEl.className = 'hint';
  msgEl.id        = 'msg';

  btnRow.append(randBtn, resetBtn, copyBtn, msgEl);

  cardEl.append(
    Object.assign(document.createElement('label'), { htmlFor: 'tpl', textContent: 'Template' }),
    tplSel,
    galleryEl,
    fieldsEl,
    btnRow,
  );

  const previewEl = document.createElement('div');
  const outEl     = document.createElement('textarea');
  outEl.id        = 'out';
  outEl.spellcheck = false;

  const comfyEl = document.createElement('div');

  wrap.append(headerEl, countEl, cardEl, previewEl, comfyEl);

  // Mount sub-components
  mountHeader(headerEl);

  // Populate template select
  TEMPLATES.forEach((t, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = t.title;
    tplSel.appendChild(o);
  });

  // Lightbox (mounted on body)
  const lbContainer = document.createElement("div"); document.body.appendChild(lbContainer); mountLightbox(lbContainer);

  // Prompt preview card
  const previewCard = document.createElement('div');
  mountPromptPreview(previewCard);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  previewCard.querySelector('textarea')!.id = 'out';
  previewEl.append(previewCard);

  // ComfyUI panel
  mountComfyUIPanel(comfyEl, () => (document.getElementById('out') as HTMLTextAreaElement)?.value ?? '');

  // ---- State ----
  let current = 0;
  let picks: Record<string, string> = {};

  function render() {
    const t = TEMPLATES[current];
    outEl.value = renderPrompt(t.template, picks);
  }

  function buildFields() {
    const t = TEMPLATES[current];
    const phs = buildPlaceholders(t.template);
    picks = {};
    mountFieldGrid(fieldsEl, phs, picks, (newPicks) => {
      picks = newPicks;
      render();
    });
    render();
  }

  function buildGallery() {
    const t = TEMPLATES[current];
    mountGallery(galleryEl, t.imgs);
  }

  // Template change
  tplSel.addEventListener('change', () => {
    current = tplSel.selectedIndex;
    countEl.textContent = `${TEMPLATES.length} templates in this pack`;
    buildFields();
    buildGallery();
  });

  // Randomize all
  randBtn.addEventListener('click', () => {
    fieldsEl.querySelectorAll<HTMLInputElement>('input[data-ph]').forEach((inp) => {
      const ph = inp.dataset.ph;
      if (!ph) return;
      const opts = document.querySelectorAll<HTMLOptionElement>(`#dl-${ph} option`);
      if (!opts.length) return;
      const vals = [...opts].map((o) => o.value);
      const v = vals[Math.floor(Math.random() * vals.length)];
      inp.value = v;
      picks[ph] = v;
    });
    render();
  });

  // Reset
  resetBtn.addEventListener('click', () => buildFields());

  // Copy prompt
  copyBtn.addEventListener('click', async () => {
    await copyToClipboard(outEl.value, msgEl);
  });

  // Init
  countEl.textContent = `${TEMPLATES.length} templates in this pack`;
  buildFields();
  buildGallery();
}
