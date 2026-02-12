# 🧪 Senior QA Automation Assignment – Playwright

## 📌 Overview

This repository contains automated end-to-end tests built with Playwright + TypeScript.

The purpose of this project is to demonstrate:

- Test architecture design
- Automation strategy reasoning
- Maintainable test structure
- Environment-based configuration
- Docker execution capability
- Senior-level QA thinking

The automated flow covers a critical user journey:

Login → Browse Products → Add to Cart → Validate Cart

---

## 🏗 Tech Stack

- Playwright
- TypeScript
- Node.js
- Dotenv
- Docker

---

## 📂 Project Structure

tests/
 ├── login.spec.ts
 ├── cart.spec.ts
 └── fixtures.ts

playwright.config.ts
package.json
Dockerfile
docker-compose.yml
README.md
.env (ignored)

---

## 🚀 How to Run Locally

### 1. Install dependencies

npm install

### 2. Install browsers

npx playwright install

### 3. Configure environment

Create a .env file in the project root:

BASE_URL=https://www.saucedemo.com
USER_EMAIL=standard_user
USER_PASSWORD=secret_sauce

### 4. Run tests

Run headless:

npx playwright test

Run with browser UI:

npx playwright test --headed

Open HTML report:

npx playwright show-report

---

## 🐳 Run with Docker

Build and run:

docker compose up --build

Or manually:

docker build -t playwright-tests .
docker run --env-file .env playwright-tests

---

## 🧠 Automation Strategy

### Why UI Automation?

I prioritized UI end-to-end automation for the core business flow because:

- It validates real user behavior
- Covers authentication + product + cart integration
- Represents revenue-critical journey
- Provides strong regression confidence

UI tests are slower than API tests but offer higher business-level validation.

### When API Tests Would Be Preferred

API-level automation would be ideal for:

- Authentication edge cases
- Cart service validation logic
- Search filtering logic
- High-volume negative testing

In a production system, both UI and API layers should coexist.

---

## 🎯 Critical Scenarios Automated First

1. Successful login with valid credentials
2. Invalid login attempt
3. Product inventory visible after login
4. Open product detail
5. Add product to cart
6. Validate product name in cart
7. Validate product price in cart

---

## 🏛 Test Architecture Design

### Reusable Authentication Fixture

Authentication logic is abstracted in:

tests/fixtures.ts

Benefits:

- No duplicated login steps
- Cleaner test files
- Easier maintenance
- Scalable structure

### Test Isolation

Each test runs in a new browser context:

- No shared session
- Fully isolated
- Deterministic results

### Locator Strategy

Selectors prioritize:

- Stable IDs (#login-button)
- Accessible roles (getByRole)
- Avoid fragile CSS chains

---

## ❌ What I Intentionally Did NOT Automate

1. Pixel-perfect UI layout checks
2. Third-party integrations
3. Full cross-browser matrix at scale

---

## 🛡 Stability & Reliability

- Playwright auto-waiting
- URL assertions after login
- Retry configuration support
- Trace collection on failure
- Isolated browser contexts

---

## 📈 Scalability Plan

If expanding this suite:

- Introduce Page Object Model layer
- Add API test layer
- Add test tagging strategy
- Integrate into CI pipeline
- Enable parallel browser execution

---

## 🤖 AI Usage Disclosure

AI tools were used to:

- Refine test structure
- Improve fixture design
- Enhance documentation clarity
- Assist with Docker configuration

All automation logic and architectural decisions were reviewed and validated manually.

---

## 👨‍💻 Author

Senior QA Automation Candidate
Playwright + TypeScript
