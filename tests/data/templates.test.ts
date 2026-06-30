import { describe, it, expect } from 'vitest';
import { TEMPLATES } from '../../src/data/templates.js';

describe('TEMPLATES', () => {
  it('has 24 templates', () => {
    expect(TEMPLATES).toHaveLength(24);
  });

  it('each template has title, template, and imgs', () => {
    TEMPLATES.forEach(t => {
      expect(typeof t.title).toBe('string');
      expect(typeof t.template).toBe('string');
      expect(Array.isArray(t.imgs)).toBe(true);
    });
  });

  it('each template has 6 gallery images', () => {
    TEMPLATES.forEach(t => {
      expect(t.imgs).toHaveLength(6);
    });
  });

  it('template strings contain placeholders', () => {
    TEMPLATES.forEach(t => {
      expect(t.template).toMatch(/\{[a-z_]+\}/);
    });
  });

  it('all image paths start with cinematic-stills/', () => {
    TEMPLATES.forEach(t => {
      t.imgs.forEach(img => {
        expect(img).toMatch(/^cinematic-stills\//);
      });
    });
  });

  it('first template is 1920s Flapper', () => {
    expect(TEMPLATES[0].title).toBe('1920s Flapper');
  });

  it('extracts all 8 placeholders from template', () => {
    const matches = [...TEMPLATES[0].template.matchAll(/\{([^}]+)\}/g)];
    expect(matches).toHaveLength(8);
  });
});
