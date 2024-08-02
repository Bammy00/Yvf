# Youverify QA Task 🚀

This repository contains automated tests for the **checkout** process on the [SauceDemo](https://www.saucedemo.com) website. The tests are written using [Playwright](https://playwright.dev/) and follow a Behavior-Driven Development (BDD) approach.

## Project Structure 📁

The project structure includes the following directories:

- `.github/workflows`: GitHub Actions workflow configuration.
- `features`: Test feature files.
- `pages`: Page objects for interacting with web elements.
- `steps`: Step definitions for BDD scenarios.
- `types`: Custom TypeScript type definitions.
- `utils`: Utility functions.

## Setup ⚙️

1. Clone this repository to your local machine.
2. Install dependencies using npm:

   ```bash
   npm install
   ```

## Scripts 📜

- `npm run lint`: Lints TypeScript and JavaScript files.
- `npm run lint:fix`: Fixes linting issues.
- `npm test`: Runs BDD tests using Playwright.

## Dev Dependencies 🛠️

- `@playwright/test`: Testing framework for cross-browser testing.
- `@types/node`: TypeScript type definitions for Node.js.
- `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`: ESLint plugins for TypeScript.
- `allure-commandline`: Allure report generator.
- `allure-playwright`: Allure integration for Playwright.
- `eslint`, `eslint-config-prettier`, `eslint-plugin-playwright`: Linting tools.
- `playwright-bdd`: BDD framework for Playwright.
- `typescript`: TypeScript compiler.

## Dependencies 📦

- `dotenv`: Environment variable management.

## Running Tests ▶️

1. Set up your environment variables (if needed) in a `.env` file.
2. Execute the tests:

   ```bash
   npm test
   ```

## Reporting 📊

Test results are generated in the `allure-report` directory. You can view the report by running:

```bash
npx allure serve
```