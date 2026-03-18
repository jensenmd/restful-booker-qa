# Playwright UI Tests — Restful-Booker

End-to-end UI automation for [automationintesting.online](https://automationintesting.online) — the Booker front-end for Restful-Booker.

## Setup

```bash
npm install
npx playwright install --with-deps
```

## Running Tests

```bash
# All tests, headless
npx playwright test

# Specific spec file
npx playwright test tests/booking.spec.js

# With browser visible
npx playwright test --headed

# Specific browser
npx playwright test --project=chromium

# View HTML report after run
npx playwright show-report
```

## Structure

```
playwright/
├── tests/
│   ├── booking.spec.js     # Booking flow tests (happy path + validation)
│   └── contact.spec.js     # Contact form tests
├── pages/
│   ├── HomePage.js         # Page Object: landing / room listing
│   └── BookingPage.js      # Page Object: booking form
├── utils/
│   └── testData.js         # Shared test data helpers
├── playwright.config.js
└── package.json
```

## Page Object Model

All page interactions are encapsulated in Page Objects under `/pages`. Tests import these classes rather than querying selectors directly, keeping specs readable and selectors maintainable in one place.
