/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 1: Register Page"
nhập đầy đủ ttin, click button Register
*/

import { test } from '@playwright/test';

test('test1', async ({page}) => {
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

    await test.step('nhập giới tính', async () => {
        await page.locator('input#female').check();
    });

    await test.step('điền sở thích', async () => {
        await page.locator('input#traveling').check();
    });

    await test.step('điền interest', async () => {
        await page.locator("//option[@value='music']").click();
    });

    await test.step('open dropdown list Country', async () => {
        await page.locator("select#country").selectOption('australia');
    });

    await test.step('input DOB', async () => {
        await page.locator("input#dob").fill("2002-05-23");
    });
})

