const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { BookingPage } = require('../pages/BookingPage');
const { validGuest } = require('../utils/testData');

test.describe('Booking Flow', () => {
  test('should display available rooms on home page', async ({ page }) => {
    const home = new HomePage(page);
    await home.navigate();
    // TODO: assert room listing visible
  });

  test('should complete a booking - happy path', async ({ page }) => {
    // TODO: implement full booking flow
  });

  test('should show validation errors for missing required fields', async ({ page }) => {
    // TODO: implement validation test
  });
});
