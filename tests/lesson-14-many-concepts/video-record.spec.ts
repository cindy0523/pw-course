import { test, expect } from '@playwright/test';

test('video', async ({ page }) => {
    await test.step('Truy cập trang: https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('click "Bài học 1: Register Page"', async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('điền username', async () => {
        await page.locator("input#username").fill('Thư cute');
    });

    await test.step('nhập email', async () => {
        await page.locator('input#email').fill('thucute@mailsac.com');
    });
});