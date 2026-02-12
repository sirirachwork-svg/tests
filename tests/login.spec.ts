import { test, expect } from '@playwright/test';

test('User can login successfully', async ({ page }) => {
  await page.goto('/');

  await page.locator('#user-name').fill(process.env.USER_EMAIL!);
  await page.locator('#password').fill(process.env.USER_PASSWORD!);

  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});
