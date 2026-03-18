const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'Book now' }).nth(3).click();
  await page.getByRole('cell', { name: '23' }).click();
  await page.getByRole('cell', { name: '19' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(5)').click();
  await page.getByRole('cell', { name: '18' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-content > div:nth-child(2) > div').first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div').first().click();
  await page.getByRole('button', { name: '12' }).click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(7)').click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(6)').click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div:nth-child(5)').click();
  await page.locator('div:nth-child(4) > .rbc-row-bg > div').first().click();
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Jimmy');
  await page.getByRole('textbox', { name: 'Firstname' }).press('Tab');
  await page.getByRole('textbox', { name: 'Lastname' }).fill('John');
  await page.getByRole('textbox', { name: 'Lastname' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email' }).fill('freaky@fast.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Phone' }).fill('86753092112');
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('link', { name: 'Return home' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();