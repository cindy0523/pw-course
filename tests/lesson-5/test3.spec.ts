/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 3: Todo Page" hyperlink
thêm mới 100 Todo item có nội dung "Todo <i>"
xóa các Todo có số lẻ
*/

import { expect, test } from '@playwright/test';

test('TC3: add todo list item', async ({ page }) => {
    await test.step('access to main page', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step('select Bai hoc 3', async () => {
        await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    });

    await test.step('nhap 100 Todo item', async () => {
        for (let i = 0; i <= 100; i++) {
            await page.locator("xpath=//input[@id='new-task']").fill(`Todo ${i + 1}`);
            await page.locator("xpath=//button[@id='add-task']").click();
        };

    });

    await test.step('Xoa cac Todo co so le', async () => {
        for (let j = 1; j <= 100; j += 2) {
            page.once('dialog', async dialog => {
                await dialog.accept();
            });
            await page.locator(`//button[@id='todo-${j}-delete']`).click();
        };
    });
});
