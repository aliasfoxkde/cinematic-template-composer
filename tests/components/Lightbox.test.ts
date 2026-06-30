import { describe, it, expect, vi, beforeEach } from 'vitest';
import { openLightbox } from '../../src/components/Lightbox.js';

describe('openLightbox', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('opens lightbox with image src', () => {
    openLightbox('cinematic-stills/001.jpg', 'caption');
    const overlay = document.querySelector('.lightbox-overlay');
    expect(overlay).toBeTruthy();
  });

  it('lightbox contains img', () => {
    openLightbox('cinematic-stills/001.jpg', 'caption');
    const img = document.querySelector('.lightbox-overlay img');
    expect(img).toBeTruthy();
  });

  it('close button dismisses lightbox', () => {
    openLightbox('cinematic-stills/001.jpg', 'caption');
    const closeBtn = document.querySelector('.lightbox-close');
    closeBtn?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    const overlay = document.querySelector('.lightbox-overlay');
    expect(overlay).toBeFalsy();
  });

  it('clicking overlay dismisses lightbox', () => {
    openLightbox('cinematic-stills/001.jpg', 'caption');
    const overlay = document.querySelector('.lightbox-overlay');
    overlay?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(document.querySelector('.lightbox-overlay')).toBeFalsy();
  });
});
