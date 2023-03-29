import { test, expect } from '@playwright/test'

let urlResult = "http://localhost:3000/results";

test.beforeAll(async () => {
  console.log('Before tests');
});

test.afterAll(async () => {
  console.log('After tests');
});

test.describe('Main area', () => {
  test('Checking to see if headings are in the main area', async ({ page }) => {
    await page.goto(urlResult)
    await expect(page.locator('h1')).toHaveCount(4);
  })

  test('Header Tag', async({ page }) => { 
    await page.goto(urlResult)

    await expect(page.locator('.h1')).toContainText('Discover Other Genres');
  })
})