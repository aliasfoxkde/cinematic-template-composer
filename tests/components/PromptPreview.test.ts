import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountPromptPreview } from '../../src/components/PromptPreview.js';
import { VALUES } from '../../src/data/values.js';
import { TEMPLATES } from '../../src/data/templates.js';

describe('mountPromptPreview', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    vi.clearAllMocks();
  });

  it('mounts into container', () => {
    const picks: Record<string, string> = {};
    mountPromptPreview(container, TEMPLATES[0].template, picks);
    expect(container.querySelector('.prompt-preview')).toBeTruthy();
  });

  it('renders prompt text', () => {
    const picks: Record<string, string> = {};
    mountPromptPreview(container, TEMPLATES[0].template, picks);
    const pre = container.querySelector('pre');
    expect(pre?.textContent).toContain('{');
  });

  it('copy button exists', () => {
    const picks: Record<string, string> = {};
    mountPromptPreview(container, TEMPLATES[0].template, picks);
    expect(container.querySelector('.copy-btn')).toBeTruthy();
  });

  it('renders send to ComfyUI button', () => {
    const picks: Record<string, string> = {};
    mountPromptPreview(container, TEMPLATES[0].template, picks);
    expect(container.querySelector('.send-btn')).toBeTruthy();
  });
});
