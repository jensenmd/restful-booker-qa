// Page Object: Home / Room Listing Page
// https://automationintesting.online

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/');
  }

  // Selectors and actions will be built out in subsequent sessions
}

module.exports = { HomePage };
