import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mountLightbox, lbOpen } from '../../src/components/Lightbox.js';

describe('mountLightbox', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    mountLightbox(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('mounts lb element', () => {
    expect(document.getElementById('lb')).toBeTruthy();
  });

  it('has close button', () => {
    expect(document.getElementById('lb-close')).toBeTruthy();
  });

  it('has prev/next buttons', () => {
    expect(document.getElementById('lb-prev')).toBeTruthy();
    expect(document.getElementById('lb-next')).toBeTruthy();
  });

  it('has image element', () => {
    expect(document.getElementById('lb-img')).toBeTruthy();
  });

  it('close button hides lightbox', () => {
    lbOpen(['cinematic-stills/001.jpg'], 0);
    const lb = document.getElementById('lb');
    expect(lb?.classList.contains('open')).toBe(true);
    document.getElementById('lb-close')?.dispatchEvent(new MouseEvent('click'));
    expect(lb?.classList.contains('open')).toBe(false);
  });
});
