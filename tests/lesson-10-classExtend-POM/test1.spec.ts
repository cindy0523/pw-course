/*
1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, 
click vào “Bài học 1: Register Page”
a. Nhập đầy đủ các thông tin, click button register
b. Kiểm tra nội dung đã đăng kí ở bảng là đúng
*/

import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register-page';

test ("Register successfully", async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.openMaterialPage();
    await registerPage.gotoPage('register');
    await registerPage.fillUsername('thucute');
    await registerPage.fillEmail('thucute@mailsac.com');
    await registerPage.checkGender('female');
    await registerPage.clickRegister();

    const row = page.locator("//table//tbody//tr");

    await expect(row).toContainText('thucute');
    await expect(row).toContainText('thucute@mailsac.com');
    await expect(row).toContainText('female');
});