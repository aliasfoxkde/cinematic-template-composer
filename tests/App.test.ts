import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { mount } from 'jsdom-fixture';

// Mock crypto before importing App
if (!globalThis.crypto?.randomUUID) {
  Object.defineProperty(globalThis, 'crypto', {
    value: { randomUUID: () => 'test-uuid' },
    writable: true, configurable: true,
  });
}

describe('App integration', () => {
  let dom: JSDOM;

  beforeEach(async () => {
    dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>', {
      url: 'http://localhost:5173',
    });
    globalThis.document = dom.window.document;
    globalThis.window = dom.window as unknown as Window & typeof globalThis;
    vi.clearAllMocks();
  });

  it('renders app shell', async () => {
    const { mountApp } = await import('../../src/App.js');
    const app = document.getElementById('app')!;
    mountApp(app);
    expect(document.body.querySelector('#app')).toBeTruthy();
  });
});
