/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 1: Register Page"
nhập đầy đủ ttin, click button Register
*/

import { test } from '@playwright/test';

test('test1', async ({ page }) => {
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

    await test.step('input "Profile Picture" ', async () => {
        await page.setInputFiles('#profile', 'C:/Users/cindy/OneDrive/Hình ảnh/445226810_2127081931004072_5032923935917487166_n.jpg')
    }); //profile picture input file

    await test.step('input Biography', async () => {
        await page.locator('textarea#bio').fill("Nice to see you");
    });

    await test.step('set Rate Us', async () => {
        await page.locator 
    });

    await test.step('click on Register button', async () => {
        await page.locator("//button[@type='submit']").click(); //last step
    })
})

