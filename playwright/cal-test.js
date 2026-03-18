const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'Book now' }).nth(2).click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(2)').click();
  await page.getByRole('button', { name: '23' }).click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div').first().click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(2)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(3)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(4)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(5)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(6)').click();
  await page.locator('.rbc-row-content > div:nth-child(2)').click();
  await page.getByText('Selected').click();
  await page.locator('.rbc-day-bg.rbc-today').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div:nth-child(4)').click();
  await page.locator('div:nth-child(5) > .rbc-row-bg > div').first().click();
  await page.locator('.rbc-row-content > div:nth-child(2)').click();
  await page.locator('div:nth-child(3) > .rbc-row-bg > div:nth-child(4)').click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();