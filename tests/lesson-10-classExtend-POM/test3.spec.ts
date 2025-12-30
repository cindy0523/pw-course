/*
Truy cập trang: https://material.playwrightvn.com/
click "Bài học 3: Todo Page" hyperlink
thêm mới 100 Todo item có nội dung "Todo <i>"
xóa các Todo có số lẻ
*/

import { test, expect } from '@playwright/test';
import { ToDoPage } from '../../pages/to-do.page';

test("Add 10 item and delete odd number item", async ({ page }) => {
    const toDoPage = new ToDoPage(page);

    await test.step("Truy cập trang Todo", async () => {
        await toDoPage.openMaterialPage();
        await toDoPage.gotoPage('todo');
    });

    await test.step("thêm mới 100 Todo item có nội dung Todo <i> và xóa các Todo có số lẻ", async () => {
        await toDoPage.addToDoItem(100);
        await toDoPage.deleteOddTodo(100);
    });

    await test.step("Kiểm tra todo 90 tồn tại, todo 21 ko tồn tại", async () => {
        const actualTodo = await toDoPage.getTodoData();
        //Verify
        await expect(actualTodo.todo90).toBeVisible();
        await expect(actualTodo.todo21).not.toBeVisible();
    });
});