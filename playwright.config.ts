import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

const ENV = process.env.PW_ENV || 'dev';

dotenv.config({
  path: path.resolve(__dirname, `.env${ENV}`)
});

export default defineConfig({
  // define folder chứa TC
  testDir: './tests',

  // Run parallel hay không, nếu false thì ko (chạy tuần tự), nếu true thì chạy song song
  fullyParallel: false,

  // chặn test.only trên CI, test.only nghĩa là chỉ chạy test này, bỏ qua test còn lại
  // test.only chỉ dùng khi debug trên local env
  forbidOnly: !!process.env.CI,

  /* Retry on CI only: 2 times */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  // xuất html report
  reporter: 'html',

  // Setting cho tất cả các test. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    // Khi test fail thì retry lần 1, retry fail tiếp thì lưu trace. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
  },

  /* Config projects để chạy cho nhiều browsers */
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

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
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
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
