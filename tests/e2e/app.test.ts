import { test, expect } from '@playwright/test';

test.describe('App E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Clear all caches before each test
    await page.context().clearCookies();
    await page.context().clearPermissions();
    
    const logs: string[] = [];
    page.on('console', msg => logs.push(msg.type() + ': ' + msg.text()));
    page.on('pageerror', err => logs.push('PAGEERROR: ' + err.message));
    
    await page.goto('http://localhost:4173', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(3000);
    
    const info = await page.evaluate(() => ({
      appExists: document.getElementById('app') !== null,
      lbExists: document.getElementById('lb') !== null,
      headerExists: document.querySelector('header') !== null,
      bodyHTML: document.body.innerHTML.substring(0, 800)
    }));
    
    console.log('LOGS:', logs.join('\n'));
    console.log('INFO:', JSON.stringify(info, null, 2));
  });

  test('app renders', async ({ page }) => {
    const info = await page.evaluate(() => ({
      app: document.getElementById('app') !== null,
      header: document.querySelector('header') !== null,
    }));
    expect(info.app).toBe(true);
    expect(info.header).toBe(true);
  });
});
