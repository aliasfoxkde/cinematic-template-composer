import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountComfyUIPanel } from '../../src/components/ComfyUIPanel.js';

describe('mountComfyUIPanel', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    vi.clearAllMocks();
  });

  it('mounts into container', () => {
    mountComfyUIPanel(container, () => 'test prompt');
    expect(container.querySelector('.card')).toBeTruthy();
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
