import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mountHeader } from '../../src/components/Header.js';

describe('mountHeader', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('mounts into container', () => {
    mountHeader(container);
    expect(container.querySelector('header')).toBeTruthy();
  });

  it('renders brand text', () => {
    mountHeader(container);
    expect(container.textContent).toContain('CINEMATIC');
  });

  it('renders Template Composer sub', () => {
    mountHeader(container);
    expect(container.textContent).toContain('Template Composer');
  });

  it('renders Prisma Packs attribution', () => {
    mountHeader(container);
    expect(container.textContent).toContain('Prisma Packs');
  });
});
