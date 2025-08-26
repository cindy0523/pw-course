/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 1: Register Page"
nhập đầy đủ ttin, click button Register
*/

import { test, expect } from '@playwright/test';

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
        await page.locator("//input[@id='rating']").evaluate(el => {
            (el as HTMLInputElement).value = '8';
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await expect(page.locator("//span[@id='ratingValue']")).toHaveText('8');
    });

    await test.step('set Favorite color', async () => {
        await page.locator("//input[@id='favcolor']").evaluate(el => {
            (el as HTMLInputElement).value = '#62b8f9';
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await expect(page.locator("//span[@id='colorDisplay']")).toHaveText('#62b8f9');
    });

    await test.step('hover tooltip', async () => {
        await page.locator("//div[@class='tooltip']").hover();
        await expect(page.locator("//span[@class='tooltiptext']")).toBeVisible();
        await expect(page.locator("//span[@class='tooltiptext']")).toHaveText("Subscribe to our newsletter for updates")
    });

    await test.step('check vao checkbox Newsletter', async () => {
        await page.locator("//input[@id='newsletter']").check();
        await expect(page.locator("//input[@id='newsletter']")).toBeChecked();
    });

    await test.step('toggle ON Enable Feature', async () => {
        await page.locator("//span[@class='slider round']").check();
        await expect(page.locator("//span[@class='slider round']")).toBeChecked();
    });

    await test.step('đánh giá 5 sao', async () => {
        const box = await page.locator("//div[@id='starRating']").boundingBox();
        if (box) {
            await page.mouse.click(box.x + box.width * 0.7, box.y + box.height / 2);
        };
    });

    await test.step('click on Register button', async () => {
        await page.locator("//button[@type='submit']").click(); //last step
    });
});

