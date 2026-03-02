import { test, expect } from "@playwright/test";

test("Login trên mobile viewport", async ({ browser }) => {
    // Create Mobile browser context
    const mobileContext = await browser.newContext({
        viewport: { width: 400, height: 800 },
        locale: 'en-GB',
    });

    const page = await mobileContext.newPage();
    await page.goto("https://www.google.com");
})