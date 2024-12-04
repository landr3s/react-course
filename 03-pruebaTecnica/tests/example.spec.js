import { expect, test } from '@playwright/test'
const LOCAL_URL = 'http://localhost:5173/'
const CAT_IMAGE_PREFIX = 'https://cataas.com'

test('expect page has fact and image', async ({ page }) => {
  await page.goto(LOCAL_URL)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX)).toBeTruthy()
})
 