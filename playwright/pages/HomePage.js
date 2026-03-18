// Page Object: Home / Room Listing Page
// https://automationintesting.online

class HomePage {
  constructor(page) {
    this.page = page;
    this.roomCards = page.locator('.room-card, .hotel-room-info');
    this.bookButtons = page.getByRole('button', { name: 'Book this room' });
  }

  async navigate() {
    await this.page.goto('/');
  }

  async waitForRoomsToLoad() {
    await this.page.waitForSelector('.rbc-calendar', { timeout: 10000 });
  }

  async bookRoomByType(type) {
    // Click the Book button for the room whose heading matches type (e.g. 'Double')
    await this.page
      .locator('.hotel-room-info')
      .filter({ hasText: type })
      .getByRole('button', { name: 'Book this room' })
      .click();
  }
}

module.exports = { HomePage };
