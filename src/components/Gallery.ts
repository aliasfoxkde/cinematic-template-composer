// src/components/Gallery.ts
// Thumbnail strip for the selected template — click opens the Lightbox.

import { lbOpen } from './Lightbox.js';

export function mountGallery(container: HTMLElement, imgs: string[], onReady?: () => void) {
  container.innerHTML = '';
  container.className = 'gallery';

  const frag = document.createDocumentFragment();

  for (let i = 0; i < imgs.length; i++) {
    const img = document.createElement('img');
    img.src = `/${imgs[i]}`;
    img.alt = imgs[i].split('/').pop()?.replace('.webp', '') ?? '';
    img.loading = 'lazy';
    img.addEventListener('click', () => lbOpen(imgs, i));
    frag.appendChild(img);
  }

  container.appendChild(frag);

  // notify once all thumbnails are loaded
  const thumbs = container.querySelectorAll('img');
  let loaded = 0;
  thumbs.forEach((t) => {
    if ((t as HTMLImageElement).complete) loaded++;
    else t.addEventListener('load', () => { if (++loaded === thumbs.length) onReady?.(); }, { once: true });
  });
  if (loaded === thumbs.length) onReady?.();
}
