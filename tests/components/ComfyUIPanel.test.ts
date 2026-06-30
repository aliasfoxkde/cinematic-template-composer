import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mountComfyUIPanel } from '../../src/components/ComfyUIPanel.js';

describe('mountComfyUIPanel', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.clearAllMocks();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('mounts into container', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    expect(container.classList.contains('card')).toBe(true);
  });

  it('has URI input', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    expect(container.querySelector('#uri')).toBeTruthy();
  });

  it('has size select', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    expect(container.querySelector('#size')).toBeTruthy();
  });

  it('has send button', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    expect(container.querySelector('#send')).toBeTruthy();
  });

  it('has i18n pills', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    const pills = container.querySelectorAll('.pill');
    expect(pills).toHaveLength(4);
  });
});
