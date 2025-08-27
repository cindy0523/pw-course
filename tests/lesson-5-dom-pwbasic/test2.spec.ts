/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 2: Product Page" hyperlink
thêm sản phẩm vào giỏ hàng với các sp như sau:
Product 1: sl 2
Product 2: sl 3
Product 3: sl 1
*/

import { test } from '@playwright/test';

test('TC2: Them san pham vao gio hang', async ({ page }) => {
    await test.step('Access to main page', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('Click vao bai hoc 2', async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    });

    await test.step('them Product 1, sl: 2 vao gio hang', async () => {
        await page.locator("//button[@data-product-id='1'").click();
        await page.locator("//button[@data-product-id='1'").click();
    });

    test.step('them Product 2, sl: 3 vao gio hang', async () => {
        await page.locator("//button[@data-product-id='2' ").click();
        await page.locator("//button[@data-product-id='2' ").click();
        await page.locator("//button[@data-product-id='2' ").click();
    });

    test.step('them Product 3, sl: 1 vao gio hang', async () => {
        await page.locator("//button[@data-product-id='3' ").click();
    });
})