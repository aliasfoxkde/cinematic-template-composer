# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.test.ts >> App E2E >> app renders
- Location: tests/e2e/app.test.ts:27:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('App E2E', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // Clear all caches before each test
  6  |     await page.context().clearCookies();
  7  |     await page.context().clearPermissions();
  8  |     
  9  |     const logs: string[] = [];
  10 |     page.on('console', msg => logs.push(msg.type() + ': ' + msg.text()));
  11 |     page.on('pageerror', err => logs.push('PAGEERROR: ' + err.message));
  12 |     
  13 |     await page.goto('http://localhost:4173', { waitUntil: 'domcontentloaded' });
  14 |     await page.waitForTimeout(3000);
  15 |     
  16 |     const info = await page.evaluate(() => ({
  17 |       appExists: document.getElementById('app') !== null,
  18 |       lbExists: document.getElementById('lb') !== null,
  19 |       headerExists: document.querySelector('header') !== null,
  20 |       bodyHTML: document.body.innerHTML.substring(0, 800)
  21 |     }));
  22 |     
  23 |     console.log('LOGS:', logs.join('\n'));
  24 |     console.log('INFO:', JSON.stringify(info, null, 2));
  25 |   });
  26 | 
  27 |   test('app renders', async ({ page }) => {
  28 |     const info = await page.evaluate(() => ({
  29 |       app: document.getElementById('app') !== null,
  30 |       header: document.querySelector('header') !== null,
  31 |     }));
> 32 |     expect(info.app).toBe(true);
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |     expect(info.header).toBe(true);
  34 |   });
  35 | });
  36 | 
```