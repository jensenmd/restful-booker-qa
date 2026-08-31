// Page Object: Booking Form
// https://automationintesting.online

class BookingPage {
  constructor(page) {
    this.page = page;

    // Calendar
    this.calendar = page.locator('.rbc-calendar');
    this.todayButton = this.calendar.getByRole('button', { name: 'Today', exact: true });

    // Reserve Now button (also submits the form)
    this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });

    // Form fields (appear above calendar after clicking Reserve Now)
    this.firstNameInput = page.getByRole('textbox', { name: 'Firstname' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Lastname' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' });

    // Confirmation
    this.confirmationHeading = page.getByRole('heading', { name: 'Booking Confirmed' });
    this.returnHomeLink = page.getByRole('link', { name: 'Return home' });
  }

  async selectCalendarDates(startDate = new Date()) {
    const future = new Date(startDate);
    future.setDate(startDate.getDate() + 4);

    const startDay = String(startDate.getDate()).padStart(2, '0');
    const futureDay = String(future.getDate()).padStart(2, '0');

    // Reset the calendar view before selecting dates. The date buttons use
    // zero-padded accessible names (for example, "03", not "3").
    await this.todayButton.click();
    const currentMonthDays = this.calendar.locator('.rbc-date-cell:not(.rbc-off-range)');
    const adjacentMonthDays = this.calendar.locator('.rbc-date-cell.rbc-off-range');

    await currentMonthDays.getByRole('button', { name: startDay, exact: true }).click();

    const crossesMonth =
      future.getMonth() !== startDate.getMonth() ||
      future.getFullYear() !== startDate.getFullYear();

    const futureMonthDays = crossesMonth ? adjacentMonthDays : currentMonthDays;
    await futureMonthDays.getByRole('button', { name: futureDay, exact: true }).click();
  }

  async openBookingForm() {
    await this.reserveNowButton.click();
    await this.firstNameInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.firstNameInput.scrollIntoViewIfNeeded();
  }

  async fillGuestDetails({ firstName, lastName, email, phone }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async submitBooking() {
    await this.reserveNowButton.scrollIntoViewIfNeeded();
    await this.reserveNowButton.click();
  }

  async waitForConfirmation() {
    await this.page.waitForLoadState('networkidle');
  }

  async isConfirmationVisible() {
    return await this.confirmationHeading.isVisible();
  }

  async returnHome() {
    await this.returnHomeLink.click();
  }
}

module.exports = { BookingPage };
