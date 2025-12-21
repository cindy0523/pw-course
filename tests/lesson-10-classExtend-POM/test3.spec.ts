import {test, expect} from '@playwright/test';
import { ToDoPage } from './01-pom';

test("Add 10 item and delete odd number item", async ({ page }) => {
    const toDoPage = new ToDoPage (page);
    //step
    await toDoPage.openMaterialPage();
    await toDoPage.gotoPage('todo');
    await toDoPage.addToDoItem(100);
    await toDoPage.deleteOddTodo(100);

    //verify
    await expect(page.locator("//li[span='Todo 90']")).toBeVisible();
    await expect(page.locator("//li[span='Todo 21']")).not.toBeVisible();
});