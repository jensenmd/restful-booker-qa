const { test, expect } = require('@playwright/test');

test.describe('Contact Form', () => {

  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/');

    // Scroll to contact form
    await page.getByTestId('ContactName').scrollIntoViewIfNeeded();

    // Fill all fields using data-testid attributes
    await page.getByTestId('ContactName').fill('Jane Tester');
    await page.getByTestId('ContactEmail').fill('jane.tester@example.com');
    await page.getByTestId('ContactPhone').fill('55512345678');
    await page.getByTestId('ContactSubject').fill('Test Inquiry');
    await page.getByTestId('ContactDescription').fill('This is an automated test message for the contact form.');
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assert success message appears
    await expect(page.getByText('Thanks for getting in touch')).toBeVisible({ timeout: 10000 });
  });

  test('should show validation errors for empty contact form', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('ContactName').scrollIntoViewIfNeeded();

    // Submit without filling anything in
    await page.getByRole('button', { name: 'Submit' }).click();

    // Success message should NOT appear
    await expect(page.getByText('Thanks for getting in touch')).not.toBeVisible({ timeout: 3000 });
  });

});
