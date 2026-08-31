const { test, expect } = require('@playwright/test');
const { BookingPage } = require('../pages/BookingPage');
const { validGuest } = require('../utils/testData');

// Run serially — the demo site cannot handle parallel booking requests
test.describe.configure({ mode: 'serial' });

test.describe('Booking Flow', () => {

  test('should display the booking calendar for a room', async ({ page }) => {
    await page.goto('/');
    // Click into the Double room (index 2 = third "Book now" link)
    await page.getByRole('link', { name: 'Book now' }).nth(2).click();
    // Calendar should now be visible
    await expect(page.locator('.rbc-calendar')).toBeVisible({ timeout: 10000 });
  });

  test('should complete a booking - happy path', async ({ page, browserName }) => {
    test.skip(
      browserName === 'firefox',
      'Shared demo site returns a browser load-error page after Firefox booking submission.'
    );

    await page.goto('/');
    const booking = new BookingPage(page);

    // Navigate into the Double room
    await page.getByRole('link', { name: 'Book now' }).nth(2).click();

    // Wait for calendar to load
    await expect(booking.calendar).toBeVisible({ timeout: 10000 });

    // Select dates
    await booking.selectCalendarDates();

    // Open the booking form
    await booking.openBookingForm();

    // Fill in guest details
    await booking.fillGuestDetails(validGuest);

    // Submit
    await booking.submitBooking();

    // Assert confirmation
    await booking.waitForConfirmation();
    await expect(booking.confirmationHeading).toBeVisible({ timeout: 10000 });
  });

  test('should show error for missing required fields', async ({ page }) => {
    await page.goto('/');
    const booking = new BookingPage(page);

    // Navigate into the Double room
    await page.getByRole('link', { name: 'Book now' }).nth(2).click();

    // Wait for calendar to load
    await expect(booking.calendar).toBeVisible({ timeout: 10000 });

    // Select dates then open form
    await booking.selectCalendarDates();
    await booking.openBookingForm();

    // Submit without filling in any fields
    await booking.submitBooking();

    // Validation error container should appear
    await expect(page.locator('.alert.alert-danger')).toBeVisible({ timeout: 5000 });

    // Confirmation should NOT appear
    await expect(booking.confirmationHeading).not.toBeVisible();
  });

});
