// @ts-check

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.mediasuite.co.nz/');
});

test('homepage has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Web Application Developers Christchurch | Media Suite/);
});

test('navigate to culture page and check heading', async ({ page }) => {
  await page.locator('#home-menu-trigger').click();
  await page.getByRole('link', { name: 'Careers' }).click();
  await expect(page.locator('.banner-quote').first()).toHaveText(/“we value mindset over skillset”/);
});
