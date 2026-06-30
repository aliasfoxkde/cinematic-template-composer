import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mountPromptPreview } from '../../src/components/PromptPreview.js';

describe('mountPromptPreview', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('mounts into container', () => {
    mountPromptPreview(container);
    expect(container.classList.contains('preview')).toBe(true);
  });

  it('renders textarea', () => {
    mountPromptPreview(container);
    expect(container.querySelector('textarea')).toBeTruthy();
  });

  it('has Composed prompt label', () => {
    mountPromptPreview(container);
    const label = container.querySelector('label');
    expect(label?.textContent).toContain('Composed');
  });
});
