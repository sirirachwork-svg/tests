import { test as base, expect, Page } from '@playwright/test';

type Fixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<Fixtures>({
  authenticatedPage: async ({ page }: { page: Page }, use: (page: Page) => Promise<void>) => {
    await page.goto('/');

    await page.locator('#user-name').fill(process.env.USER_EMAIL as string);
    await page.locator('#password').fill(process.env.USER_PASSWORD as string);

    await page.locator('#login-button').click();

    await page.waitForURL(/inventory/);

    await use(page);
  },
});

export { expect };
