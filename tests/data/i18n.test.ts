import { describe, it, expect } from 'vitest';
import { I18N } from '../../src/data/i18n.js';

describe('I18N', () => {
  it('has en, es, ko, zh', () => {
    expect(I18N['en']).toBeDefined();
    expect(I18N['es']).toBeDefined();
    expect(I18N['ko']).toBeDefined();
    expect(I18N['zh']).toBeDefined();
  });

  it('each locale has required keys', () => {
    const keys = ['label', 'exp', 'sending', 'waiting', 'done', 'timeout', 'err'];
    Object.values(I18N).forEach(strings => {
      keys.forEach(k => expect(k in strings).toBe(true));
    });
  });

  it('en label is EN', () => {
    expect(I18N['en'].label).toBe('EN');
  });

  it('ko label is 한국', () => {
    expect(I18N['ko'].label).toBe('한국');
  });

  it('zh label is 中文', () => {
    expect(I18N['zh'].label).toBe('中文');
  });

  it('all status strings are non-empty for en', () => {
    const en = I18N['en'];
    expect(en.sending.length).toBeGreaterThan(0);
    expect(en.waiting.length).toBeGreaterThan(0);
    expect(en.done.length).toBeGreaterThan(0);
  });
});
