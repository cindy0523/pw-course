/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 4: Personal Note" hyperlink
thêm mới 10 note với title và content khoảng 3 dòng tại báo vnexpress.net/khoa-hoc-cong-nghe
thực hiện search theo tiêu đề bài báo bất kì
*/

import { test } from '@playwright/test';

test('TC4: Personal Note', async ({ page }) => {

    await test.step('Access to VN Express site', async () => {
        await page.goto("");
    });

    await test.step('Access to homepage', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Select Bai hoc 4 hyperlink', async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step
})