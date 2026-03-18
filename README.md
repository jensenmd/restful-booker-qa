# restful-booker-qa

A full-stack QA portfolio project targeting the [Restful-Booker](https://restful-booker.herokuapp.com/) demo application — a purposely built hotel booking API and web UI used widely in the QA community.

This repo demonstrates a layered test strategy across two complementary disciplines:

| Layer | Stack | Coverage |
|---|---|---|
| API Testing | Postman + Newman | Auth, CRUD bookings, error handling |
| UI Automation | Playwright + JavaScript | End-to-end booking workflows |

CI runs both suites on every push via GitHub Actions.

---

## Project Structure

```
restful-booker-qa/
├── .github/
│   └── workflows/
│       └── ci.yml              # Runs Newman + Playwright on push/PR
├── postman/
│   ├── restful-booker.collection.json   # Postman collection
│   ├── restful-booker.environment.json  # Environment variables
│   └── README.md               # Collection notes and Newman usage
├── playwright/
│   ├── tests/                  # Test specs
│   ├── pages/                  # Page Object Models
│   ├── utils/                  # Helpers and fixtures
│   ├── playwright.config.js
│   └── package.json
└── README.md
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Newman](https://www.npmjs.com/package/newman) (`npm install -g newman`)
- [Playwright](https://playwright.dev/) (installed via `npm install` in `/playwright`)

---

## Running the API Tests (Newman)

```bash
cd postman

newman run restful-booker.collection.json \
  --environment restful-booker.environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export reports/api-report.html
```

See [`postman/README.md`](postman/README.md) for full details and test coverage notes.

---

## Running the UI Tests (Playwright)

```bash
cd playwright
npm install
npx playwright install --with-deps

# Run all tests (headless)
npx playwright test

# Run with browser visible
npx playwright test --headed

# View HTML report
npx playwright show-report
```

---

## CI Pipeline

GitHub Actions runs on every `push` and `pull_request` to `main`.

- **Newman job**: Executes the full Postman collection and uploads the HTML report as an artifact
- **Playwright job**: Runs all UI specs across Chromium and Firefox, uploads the Playwright HTML report

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

---

## Test Coverage Summary

### API (Postman/Newman)
- [ ] `POST /auth` — token generation, invalid credentials
- [ ] `GET /booking` — list all bookings, filter by name/dates
- [ ] `POST /booking` — create booking (valid, missing fields, invalid dates)
- [ ] `GET /booking/:id` — retrieve specific booking
- [ ] `PUT /booking/:id` — full update (authenticated)
- [ ] `PATCH /booking/:id` — partial update (authenticated)
- [ ] `DELETE /booking/:id` — delete booking (authenticated)

### UI (Playwright)
- [ ] Search for available rooms
- [ ] Complete a booking (happy path)
- [ ] Booking form validation (required fields, date conflicts)
- [ ] Contact form submission

---

## About the Target Application

**Restful-Booker** ([restful-booker.herokuapp.com](https://restful-booker.herokuapp.com/)) is an open-source hotel booking demo app built by [Mark Winteringham](https://github.com/mwinteringham) specifically for QA practice. It provides a realistic REST API (`/api/booking`) alongside a simple Booker front-end UI, making it well-suited for demonstrating layered test strategies.

---

## Author

Michael — QA Engineer  
[GitHub Profile](https://github.com/)
