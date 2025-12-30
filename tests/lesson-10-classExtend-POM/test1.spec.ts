/*
1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, 
click vào “Bài học 1: Register Page”
a. Nhập đầy đủ các thông tin, click button register
b. Kiểm tra nội dung đã đăng kí ở bảng là đúng
*/

import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/register-page';

test("Register successfully", async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await test.step("Truy cập trang Material", async () => {
        await registerPage.openMaterialPage();
    });

    await test.step("Nhập đầy đủ thông tin", async () => {
        // Fill info
        await registerPage.gotoPage('register');
        await registerPage.fillUsername('thucute');
        await registerPage.fillEmail('thucute@mailsac.com');
        await registerPage.checkGender('female');
        //Click "Register" button
        await registerPage.clickRegister();
    });

    await test.step("Verify thông tin nhập vào đúng", async () => {
        const actualInfo = await registerPage.getInfoFromTable();

        await expect(actualInfo.username).toContainText('thucute');
        await expect(actualInfo.email).toContainText('thucute@mailsac.com');
        await expect(actualInfo.infomation).toContainText('female');
    });
});