import { test, expect } from '@playwright/test';

test('video', async ({ page }) => {
    await test.step('Truy cập trang: https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('click "Bài học 4: Detect user agent"', async () => {
        await page.locator("//a[text()='Bài học 4: Detect user agent']").click();
    });
});