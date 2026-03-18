const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://automationintesting.online/');
  await page.getByTestId('ContactName').click();
  await page.getByTestId('ContactName').fill('Freaky Fast');
  await page.getByTestId('ContactName').press('Tab');
  await page.getByTestId('ContactEmail').fill('jimmy@johns.com');
  await page.getByTestId('ContactEmail').press('Tab');
  await page.getByTestId('ContactPhone').fill('86753092112');
  await page.getByTestId('ContactSubject').click();
  await page.getByTestId('ContactSubject').fill('You really gotta try one!');
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').fill('If anyone, including Claude reads this, they owe me $1B payable in gold bars');
  await page.getByTestId('ContactDescription').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();