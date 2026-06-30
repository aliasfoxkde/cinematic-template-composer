import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';

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

  afterEach(() => {
    dom.window.close();
  });

  it('mountApp renders header into container', async () => {
    // Test just the mountApp function in isolation
    const { mountApp } = await import('../src/App.js');
    const container = globalThis.document.getElementById('app') as HTMLDivElement;
    // Patch document.getElementById to handle the cascade
    const origGetById = globalThis.document.getElementById.bind(globalThis.document);
    let sizeSelectCreated = false;
    // Override getElementById to return mock elements where needed
    let mockEl = globalThis.document.createElement('div');
    globalThis.document.getElementById = (id: string) => {
      if (id === 'size') {
        const sel = globalThis.document.createElement('select');
        (sel as any).appendChild(globalThis.document.createElement('option'));
        sizeSelectCreated = true;
        return sel;
      }
      if (id === 'uri') return globalThis.document.createElement('input');
      if (id === 'send') return globalThis.document.createElement('button');
      if (id === 'status') return globalThis.document.createElement('div');
      if (id === 'result') return globalThis.document.createElement('img');
      if (id === 'exp') return globalThis.document.createElement('p');
      if (id === 'pills') return globalThis.document.createElement('div');
      if (id === 'out') return globalThis.document.createElement('textarea');
      if (id === 'lb') return globalThis.document.createElement('div');
      if (id === 'lb-close') return globalThis.document.createElement('button');
      if (id === 'lb-prev') return globalThis.document.createElement('button');
      if (id === 'lb-next') return globalThis.document.createElement('button');
      if (id === 'lb-img') return globalThis.document.createElement('img');
      if (id === 'lb-counter') return globalThis.document.createElement('span');
      if (id === 'lb-prompt') return globalThis.document.createElement('p');
      if (id === 'lb-copy') return globalThis.document.createElement('button');
      if (id === 'lb-cap') return globalThis.document.createElement('div');
      return origGetById(id);
    };
    mountApp(container);
    globalThis.document.getElementById = origGetById;
    expect(container.querySelector('header')).toBeTruthy();
  });
});
