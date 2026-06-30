import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mountFieldGrid } from '../../src/components/FieldGrid.js';
import { VALUES } from '../../src/data/values.js';
import { TEMPLATES } from '../../src/data/templates.js';

describe('mountFieldGrid', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    vi.clearAllMocks();
  });

  it('mounts into container', () => {
    mountFieldGrid(container, TEMPLATES[0].template, () => {});
    expect(container.querySelector('.field-grid')).toBeTruthy();
  });

  it('renders 8 field rows', () => {
    mountFieldGrid(container, TEMPLATES[0].template, () => {});
    const rows = container.querySelectorAll('.field-row');
    expect(rows).toHaveLength(8);
  });

  it('each row has a label', () => {
    mountFieldGrid(container, TEMPLATES[0].template, () => {});
    const labels = container.querySelectorAll('.field-label');
    expect(labels.length).toBeGreaterThan(0);
  });

  it('changing a select calls onChange', () => {
    const spy = vi.fn();
    mountFieldGrid(container, TEMPLATES[0].template, spy);
    const sel = container.querySelector('select');
    sel && sel.dispatchEvent(new Event('change', { bubbles: true }));
    expect(spy).toHaveBeenCalled();
  });
});
