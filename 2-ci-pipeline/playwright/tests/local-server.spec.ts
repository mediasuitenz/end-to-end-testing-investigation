// @ts-check

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8000/');
});

test('navigate to page 1 and check heading', async ({ page }) => {
  await page.locator('a:has-text("Page 1")').click();
  await expect(page.locator('h1').first()).toHaveText(/This is page 1/);
});
