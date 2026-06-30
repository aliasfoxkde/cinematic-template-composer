import { describe, it, expect } from 'vitest';
import { VALUES } from '../../src/data/values.js';

describe('VALUES', () => {
  it('has __generic__ fallback', () => {
    expect(VALUES['__generic__']).toBeDefined();
    expect(Array.isArray(VALUES['__generic__'])).toBe(true);
  });

  it('has scene_type slot', () => {
    expect(VALUES['scene_type']).toBeDefined();
    expect(VALUES['scene_type'].length).toBeGreaterThan(0);
  });

  it('all slots return arrays of strings', () => {
    Object.entries(VALUES).forEach(([key, val]) => {
      expect(Array.isArray(val)).toBe(true);
      val.forEach(v => expect(typeof v).toBe('string'));
    });
  });

  it('values are non-empty strings', () => {
    Object.values(VALUES).forEach(arr => {
      arr.forEach(v => expect(v.trim().length).toBeGreaterThan(0));
    });
  });

  it('__generic__ has at least 6 items', () => {
    expect(VALUES['__generic__'].length).toBeGreaterThanOrEqual(6);
  });

  it('cinematography_style has cinematic values', () => {
    expect(VALUES['cinematography_style']).toContain('epic wide shot');
  });

  it('visual_style has photographic styles', () => {
    expect(VALUES['visual_style']).toContain('bleached desaturated indie thriller');
  });
});
