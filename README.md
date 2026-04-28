# restful-booker-qa

A layered QA portfolio project targeting the Restful-Booker demo application — a hotel booking API and web UI built specifically for QA practice. This project demonstrates a full-stack test strategy across API and UI layers, with both suites running automatically in CI on every push.

![CI Status](https://github.com/jensenmd/restful-booker-qa/actions/workflows/ci.yml/badge.svg)

![restful-booker-qa](restful-booker-qa-preview%20(1).png)

Built by **Michael D. Jensen** — Senior QA Engineer with 15+ years of enterprise testing experience, currently re-entering the field with a focus on API testing, automation, and CI/CD-integrated quality practices.

🔗 [LinkedIn](https://www.linkedin.com/in/michaeljensen-qa/) | 📧 jensen.md@gmail.com

---

## What This Project Demonstrates

| Layer | Stack | Coverage |
|---|---|---|
| API Testing | Postman + Newman | Auth flows, full CRUD, error handling, edge cases |
| UI Automation | Playwright + JavaScript | End-to-end booking workflows, form validation, cross-browser |
| CI/CD Pipeline | GitHub Actions | Both suites run automatically on every push and PR |

This is not a single-tool project. The combination of Postman API testing and Playwright UI automation — each with its own CI job and HTML report — reflects how layered test strategies work in production environments: different tools for different layers, unified in a single pipeline.

---

## Why Restful-Booker?

[Restful-Booker](https://restful-booker.herokuapp.com) is an open-source hotel booking demo application built by Mark Winteringham specifically for QA practice. It provides:

- A realistic REST API (`/api/booking`) with authentication, CRUD operations, and error scenarios
- A simple web UI for end-to-end workflow testing
- Enough complexity to write meaningful tests without requiring proprietary access

It's the QA community's standard practice target for good reason — it behaves like a real application, including imperfect behavior worth testing against.

---

## Project Structure

```
restful-booker-qa/
├── .github/
│   └── workflows/
│       └── ci.yml              # Runs Newman + Playwright on push/PR
├── postman/
│   ├── restful-booker.collection.json   # Postman collection (importable)
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

## Test Coverage

### API Layer — Postman / Newman

| Endpoint | Scenarios Covered |
|---|---|
| `POST /auth` | Token generation (valid credentials), rejection (invalid credentials) |
| `GET /booking` | List all bookings, filter by name, filter by date range |
| `POST /booking` | Create booking (valid payload, missing required fields, invalid dates) |
| `GET /booking/:id` | Retrieve specific booking by ID |
| `PUT /booking/:id` | Full update (authenticated) |
| `PATCH /booking/:id` | Partial update (authenticated) |
| `DELETE /booking/:id` | Delete booking (authenticated), verify removal |

JavaScript test scripts validate status codes, response schema, and business rules inline within each request.

### UI Layer — Playwright

| Workflow | Coverage |
|---|---|
| Room search | Search for available rooms by date |
| Booking happy path | Complete a full reservation end-to-end |
| Form validation | Required field enforcement, date conflict handling |
| Contact form | Submission and confirmation |

UI tests run cross-browser across **Chromium** and **Firefox** via Playwright's multi-browser configuration.

### Page Object Model

UI tests use the Page Object Model (POM) pattern — UI interactions are abstracted into reusable page classes rather than scattered across test specs. This keeps tests readable, maintainable, and resilient to UI changes.

---

## CI/CD Pipeline

GitHub Actions runs on every push and pull request to `main`:

- **Newman job** — executes the full Postman collection, uploads HTML report as a downloadable artifact
- **Playwright job** — runs all UI specs across Chromium and Firefox, uploads Playwright HTML report

Both jobs run independently and in parallel. A failure in one does not block the other.

> **Note on CI stability:** The Restful-Booker demo server (hosted on Heroku) intermittently returns 500 errors — a known, widely-documented characteristic of this public test target, not an issue with the test code itself. This is a useful real-world reminder that CI failures in external-dependency pipelines require triage before assuming test code is at fault. Tests that fail due to upstream instability are categorically different from tests that fail due to application defects — distinguishing between the two is a core QA discipline.

---

## Running Locally

### Prerequisites
- Node.js v18+
- Newman: `npm install -g newman`
- Playwright: installed via `npm install` in `/playwright`

### API Tests (Newman)
```bash
cd postman

newman run restful-booker.collection.json \
  --environment restful-booker.environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export reports/api-report.html
```

### UI Tests (Playwright)
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

## Relationship to Other Portfolio Projects

This project is part of a three-project QA portfolio demonstrating complementary skills:

| Project | Focus | Stack |
|---|---|---|
| [pharmacy-spend-etl-qa](https://github.com/jensenmd/pharmacy-spend-etl-qa) | ETL pipeline validation, SQL-driven data integrity testing | Python / pytest / SQLite / pandas |
| [qa-automation-showcase](https://github.com/jensenmd/qa-automation-showcase) | REST API testing, data validation, CI/CD integration | Python / pytest / Postman / GitHub Actions |
| **restful-booker-qa** (this repo) | Full-stack layered testing — API + UI automation | Postman / Newman / Playwright / GitHub Actions |
| [ai-qa-framework](https://github.com/jensenmd/ai-qa-framework) | AI-assisted test generation, human-in-the-loop validation | Python / Claude API / pytest / GitHub Actions |

Together they demonstrate backend data validation, API testing, and UI automation — the core layers of a modern QA engineering practice.

---

## Author

**Michael D. Jensen** — Senior QA Engineer
15+ years of enterprise software testing experience across healthcare IT, financial systems, telecommunications, and cybersecurity. Deep background in REST API validation, ETL pipeline testing, SQL-based data integrity verification, and full-stack manual testing in Agile environments.

Currently re-entering the field with active focus on Python/pytest automation, Playwright UI testing, and CI/CD-integrated quality practices.

🔗 [LinkedIn](https://www.linkedin.com/in/michaeljensen-qa/) | 🐙 [GitHub Profile](https://github.com/jensenmd) | 📧 jensen.md@gmail.com
