import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
require('dotenv').config();

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  importTestFrom: 'steps/fixtures.ts',
  quotes: 'single',
});

const config = defineConfig({
  testDir,
  reporter: [ ['html'],['allure-playwright'],],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'on',
    video: 'on',
    actionTimeout: 0,
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 3,
  timeout: 2 * 60 * 1000,
});

export default config;
