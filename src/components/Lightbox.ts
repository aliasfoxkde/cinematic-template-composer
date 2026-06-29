// src/components/Lightbox.ts
// Full-screen image overlay with prompt caption and keyboard/button navigation.

import { PROMPTS } from '../data/index.js';

let lbEl: HTMLElement | null = null;
let lbImg: HTMLImageElement | null = null;
let lbCounter: HTMLElement | null = null;
let lbPrompt: HTMLElement | null = null;
let lbCap: HTMLElement | null = null;
let lbCopyBtn: HTMLElement | null = null;

let lbSrcs: string[] = [];
let lbIdx = 0;

function open() {
  lbEl?.classList.add('open');
  document.addEventListener('keydown', onKeydown);
}

function close() {
  lbEl?.classList.remove('open');
  document.removeEventListener('keydown', onKeydown);
}

function show() {
  if (!lbImg) return;
  lbImg.src = lbSrcs[lbIdx];
  if (lbCounter) lbCounter.textContent = `${lbIdx + 1} / ${lbSrcs.length}`;
  const prompt = PROMPTS[lbSrcs[lbIdx]] ?? '';
  if (lbPrompt) lbPrompt.textContent = prompt;
  if (lbCap) lbCap.classList.toggle('empty', !prompt);
}

function onKeydown(e: KeyboardEvent) {
  if (!lbEl?.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
}

function prev() {
  lbIdx = (lbIdx - 1 + lbSrcs.length) % lbSrcs.length;
  show();
}

function next() {
  lbIdx = (lbIdx + 1) % lbSrcs.length;
  show();
}

async function copyPrompt() {
  const t = lbPrompt?.textContent ?? '';
  if (!t) return;
  try {
    await navigator.clipboard.writeText(t);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = t;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  if (lbCopyBtn) {
    const o = lbCopyBtn.textContent;
    lbCopyBtn.textContent = '✓ Copied!';
    setTimeout(() => (lbCopyBtn!.textContent = o), 1200);
  }
}

export function mountLightbox(container: HTMLElement) {
  container.innerHTML = `
    <div id="lb">
      <button id="lb-close" class="lb-btn" aria-label="Close">✕</button>
      <button id="lb-prev"  class="lb-btn" aria-label="Previous">&#8592;</button>
      <button id="lb-next"  class="lb-btn" aria-label="Next">&#8594;</button>
      <span id="lb-counter"></span>
      <img id="lb-img" alt="Gallery image" />
      <div id="lb-cap">
        <p id="lb-prompt"></p>
        <button id="lb-copy" class="lb-btn">📋 Copy prompt</button>
      </div>
    </div>
  `;

  lbEl      = document.getElementById('lb');
  lbImg     = document.getElementById('lb-img') as HTMLImageElement | null;
  lbCounter = document.getElementById('lb-counter');
  lbPrompt  = document.getElementById('lb-prompt');
  lbCap     = document.getElementById('lb-cap');
  lbCopyBtn = document.getElementById('lb-copy');

  document.getElementById('lb-close')?.addEventListener('click', close);
  document.getElementById('lb-prev')?.addEventListener('click', prev);
  document.getElementById('lb-next')?.addEventListener('click', next);
  lbCopyBtn?.addEventListener('click', copyPrompt);
  lbEl?.addEventListener('click', (e) => { if (e.target === lbEl) close(); });
}

export function lbOpen(srcs: string[], idx: number) {
  lbSrcs = srcs;
  lbIdx = idx;
  show();
  open();
}
