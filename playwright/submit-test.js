const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationintesting.online/');
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').fill('verbs');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: /^Phone$/ }).click();
  await page.getByTestId('ContactPhone').click();
  await page.getByTestId('ContactPhone').fill('1234567891011');
  await page.getByTestId('ContactSubject').click();
  await page.getByTestId('ContactSubject').fill('wassup');
  await page.getByTestId('ContactEmail').click();
  await page.getByTestId('ContactEmail').fill('abd@fhl.com');
  await page.getByTestId('ContactName').click();
  await page.getByTestId('ContactName').fill('The Duke');
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').fill('verbs that don\'t mean much except to somebody else');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();