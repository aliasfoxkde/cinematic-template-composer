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

  it('has 1:1 preset', () => {
    const found = SIZES.find(s => s[1] === 1024 && s[2] === 1024);
    expect(found).toBeTruthy();
  });
});
