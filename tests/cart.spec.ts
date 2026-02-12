import { test, expect } from './fixtures';

test('User can add product to cart and verify cart contents', async ({ authenticatedPage: page }) => {

  // Add first product
  const firstProductName = await page.locator('.inventory_item_name').first().textContent();
  const firstProductPrice = await page.locator('.inventory_item_price').first().textContent();

  await page.locator('button:has-text("Add to cart")').first().click();

  // Go to cart
  await page.locator('.shopping_cart_link').click();

  // Assertions
  await expect(page.locator('.inventory_item_name')).toHaveText(firstProductName!);
  await expect(page.locator('.inventory_item_price')).toHaveText(firstProductPrice!);
});
