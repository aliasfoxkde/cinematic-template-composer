import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountGallery } from '../../src/components/Gallery.js';
import { TEMPLATES } from '../../src/data/templates.js';

describe('mountGallery', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    vi.clearAllMocks();
  });

  it('mounts into container', () => {
    mountGallery(container, 0, () => {});
    expect(container.querySelector('.gallery')).toBeTruthy();
  });

  it('renders 6 thumbnails', () => {
    mountGallery(container, 0, () => {});
    const thumbs = container.querySelectorAll('img');
    expect(thumbs).toHaveLength(6);
  });

  it('clicking thumbnail calls onSelect', () => {
    const spy = vi.fn();
    mountGallery(container, 0, spy);
    const firstThumb = container.querySelector('img');
    firstThumb?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(spy).toHaveBeenCalled();
  });

  it('selected thumbnail has .sel class', () => {
    mountGallery(container, 0, () => {});
    const sel = container.querySelector('.sel');
    expect(sel).toBeTruthy();
  });
});
