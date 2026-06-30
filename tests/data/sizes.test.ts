import { describe, it, expect } from 'vitest';
import { SIZES } from '../../src/data/sizes.js';

describe('SIZES', () => {
  it('has 5 size presets', () => {
    expect(SIZES).toHaveLength(5);
  });

  it('each entry is [label, width, height]', () => {
    SIZES.forEach(s => {
      expect(s).toHaveLength(3);
      expect(typeof s[0]).toBe('string');
      expect(typeof s[1]).toBe('number');
      expect(typeof s[2]).toBe('number');
    });
  });

  it('width and height are positive', () => {
    SIZES.forEach(s => {
      expect(s[1]).toBeGreaterThan(0);
      expect(s[2]).toBeGreaterThan(0);
    });
  });

  it('512x512 preset exists', () => {
    expect(SIZES[0]).toEqual(['512x512', 512, 512]);
  });
});
