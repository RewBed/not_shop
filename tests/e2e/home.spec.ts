import { expect, test } from '@playwright/test'

test('homepage renders core sections', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1').first()).toBeVisible()
  await expect(page.locator('#plans')).toBeVisible()
  await expect(page.locator('#faq')).toBeVisible()
})
