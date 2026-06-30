import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mountFieldGrid, buildPlaceholders } from '../../src/components/FieldGrid.js';
import { TEMPLATES } from '../../src/data/templates.js';

describe('mountFieldGrid', () => {
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
    const phs = buildPlaceholders(TEMPLATES[0].template);
    mountFieldGrid(container, phs, {}, () => {});
    expect(container.querySelector('.field')).toBeTruthy();
  });

  it('renders correct number of field rows', () => {
    const phs = buildPlaceholders(TEMPLATES[0].template);
    mountFieldGrid(container, phs, {}, () => {});
    const rows = container.querySelectorAll('.field');
    expect(rows).toHaveLength(phs.length);
  });

  it('each row has a label', () => {
    const phs = buildPlaceholders(TEMPLATES[0].template);
    mountFieldGrid(container, phs, {}, () => {});
    const labels = container.querySelectorAll('label');
    expect(labels.length).toBe(phs.length);
  });

  it('changing input calls onChange', () => {
    const spy = vi.fn();
    const phs = buildPlaceholders(TEMPLATES[0].template);
    mountFieldGrid(container, phs, {}, spy);
    const inp = container.querySelector('input');
    if (inp) {
      inp.value = 'test';
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    }
    expect(spy).toHaveBeenCalled();
  });
});
