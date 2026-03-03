import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

// by default, 'dev' env is selected
const ENV = process.env.PW_ENV || 'dev';

dotenv.config({
  path: path.resolve(__dirname, `.env.${ENV}`)
});

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 3,

  // chặn test.only trên CI, test.only nghĩa là chỉ chạy test này, bỏ qua test còn lại
  forbidOnly: !!process.env.CI,

  /* Retry on CI only: 2 times */
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI. (best practice)
  // workers: process.env.CI ? 3 : 4,

  // xuất html report
  reporter: 'html',

  // Setting cho tất cả các test. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    headless: false,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    // See more: https://playwright.dev/docs/trace-viewer
    trace: "on-first-retry",
    // viewport: { width: 1920, height: 1080 },
    // video: {
    //   mode: 'on-first-retry',
    //   size: { width: 1920, height: 1080 },
    // },
    // colorScheme: 'dark',
    // offline: false,

  },

  /* Config projects để chạy cho nhiều browsers */
  projects: [
    {
      name: 'api-tests',
      testDir: './api',
      use: {
        baseURL: 'https://api.valentinos-magic-beans.click',
        extraHTTPHeaders: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
      // dependencies: ['setup db'],
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPad (gen 5)'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

    /* Test against environment. */
    // {
    //   name: 'staging-chrome',
    //   use: {
    //     browserName: 'chromium',
    //     baseURL: 'https://staging.app.com'
    //   }
    // }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
