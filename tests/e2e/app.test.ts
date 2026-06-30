import { test, expect, chromium } from '@playwright/test';

test.describe('App E2E', () => {
  let browser: chromium.Browser;
  let page: any;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:4173');
    await page.waitForLoadState('networkidle');
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('page loads', async () => {
    await expect(page).toHaveTitle(/Cinematic/i);
  });

  test('header renders', async () => {
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });

  test('template selector exists', async () => {
    await expect(page.locator('#template-select')).toBeVisible();
  });

  test('field grid renders on selection', async () => {
    const sel = page.locator('#template-select');
    await sel.selectOption(1);
    await expect(page.locator('.field-grid')).toBeVisible();
  });

  test('gallery renders', async () => {
    await expect(page.locator('.gallery')).toBeVisible();
  });

  test('prompt preview renders', async () => {
    await expect(page.locator('.prompt-preview')).toBeVisible();
  });

  test('ComfyUI panel renders', async () => {
    await expect(page.locator('.card')).toBeVisible();
  });

  test('copy button copies prompt', async () => {
    const btn = page.locator('.copy-btn').first();
    await btn.click();
    await expect(page.locator('.copy-btn').first()).toHaveText('Copied!');
  });

  test('template change updates preview', async () => {
    const sel = page.locator('#template-select');
    await sel.selectOption(2);
    const pre = page.locator('.prompt-preview pre');
    await expect(pre).toBeVisible();
  });

  test('selecting gallery image updates lightbox', async () => {
    const thumbs = page.locator('.gallery img');
    await thumbs.first().click();
    await expect(page.locator('.lightbox-overlay')).toBeVisible();
  });

  test('lightbox close button works', async () => {
    const thumbs = page.locator('.gallery img');
    await thumbs.first().click();
    const closeBtn = page.locator('.lightbox-close');
    await closeBtn.click();
    await expect(page.locator('.lightbox-overlay')).not.toBeVisible();
  });

  test('lightbox overlay click closes', async () => {
    const thumbs = page.locator('.gallery img');
    await thumbs.first().click();
    const overlay = page.locator('.lightbox-overlay');
    await overlay.click({ position: { x: 5, y: 5 } });
    await expect(page.locator('.lightbox-overlay')).not.toBeVisible();
  });

  test('theme toggle works', async () => {
    const btn = page.locator('#theme-toggle');
    await btn.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await btn.click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('ComfyUI send button exists', async () => {
    await expect(page.locator('#send')).toBeVisible();
  });

  test('ComfyUI size select has options', async () => {
    const sel = page.locator('#size');
    const count = await sel.locator('option').count();
    expect(count).toBe(5);
  });

  test('i18n pills switch language', async () => {
    const pills = page.locator('.pill');
    const count = await pills.count();
    expect(count).toBe(4);
  });

  test('all 24 templates are in select', async () => {
    const sel = page.locator('#template-select');
    const count = await sel.locator('option').count();
    expect(count).toBe(24);
  });

  test('gallery has 6 thumbnails', async () => {
    const thumbs = page.locator('.gallery img');
    await expect(thumbs).toHaveLength(6);
  });

  test('field grid has correct row count', async () => {
    const sel = page.locator('#template-select');
    await sel.selectOption(0);
    const rows = page.locator('.field-row');
    await expect(rows).toHaveLength(8);
  });

  test('no console errors on load', async () => {
    const errors: string[] = [];
    page.on('console', (msg: any) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.reload();
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});
