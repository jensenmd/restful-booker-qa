# Postman Collection — Restful-Booker API

This folder contains the Postman collection and environment file for testing the Restful-Booker REST API.

## Base URL

```
https://restful-booker.herokuapp.com
```

## Authentication

The API uses a token-based auth scheme. The `POST /auth` request generates a token stored as the `{{authToken}}` environment variable, which is automatically applied to PUT, PATCH, and DELETE requests via a collection-level pre-request script.

## Running with Newman

### Basic run
```bash
newman run restful-booker.collection.json \
  --environment restful-booker.environment.json
```

### With HTML report (requires newman-reporter-htmlextra)
```bash
npm install -g newman-reporter-htmlextra

newman run restful-booker.collection.json \
  --environment restful-booker.environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export reports/api-report.html
```

## Collection Structure

```
Restful-Booker API
├── Auth
│   ├── Generate Token (valid credentials)
│   └── Generate Token (invalid credentials)
├── Bookings
│   ├── Get All Bookings
│   ├── Get Bookings — Filter by Name
│   ├── Get Bookings — Filter by Dates
│   ├── Create Booking (valid)
│   ├── Create Booking (missing required fields)
│   └── Get Booking by ID
└── Authenticated Operations
    ├── Update Booking (PUT)
    ├── Partial Update Booking (PATCH)
    └── Delete Booking
```

## Environment Variables

| Variable | Description |
|---|---|
| `baseUrl` | API base URL |
| `authToken` | Set dynamically by the Auth request |
| `bookingId` | Set dynamically after Create Booking |
| `adminUser` | Admin username (default: `admin`) |
| `adminPass` | Admin password (default: `password123`) |
