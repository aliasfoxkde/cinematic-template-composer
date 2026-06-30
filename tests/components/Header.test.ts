import { describe, it, expect } from 'vitest';
import { mountHeader } from '../../src/components/Header.js';

describe('mountHeader', () => {
  it('mounts into container', () => {
    const c = document.createElement('div');
    mountHeader(c);
    expect(c.querySelector('header')).toBeTruthy();
  });

  it('renders h1 with title', () => {
    const c = document.createElement('div');
    mountHeader(c);
    expect(c.querySelector('h1')?.textContent).toContain('Cinematic');
  });

  it('renders template nav', () => {
    const c = document.createElement('div');
    mountHeader(c);
    expect(c.querySelector('nav')).toBeTruthy();
  });

  it('renders github link', () => {
    const c = document.createElement('div');
    mountHeader(c);
    const a = c.querySelector('a[href*="github"]');
    expect(a).toBeTruthy();
  });

  it('renders theme toggle', () => {
    const c = document.createElement('div');
    mountHeader(c);
    expect(c.querySelector('#theme-toggle')).toBeTruthy();
  });
});
