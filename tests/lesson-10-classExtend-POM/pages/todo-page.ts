import { Locator, Page } from "@playwright/test";
import { MaterialBasePage } from './base-page';

//To do page
export class ToDoPage extends MaterialBasePage {
    protected xpathInputTask: Locator;
    protected xpathAddTaskBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathInputTask = page.locator("//input[@id='new-task']");
        this.xpathAddTaskBtn = page.locator("//button[@id='add-task']");
    };

    async addToDoItem(item: number) {
        for (let i = 0; i <= item; i++) {
            await this.xpathInputTask.fill(`Todo ${i + 1}`);
            await this.xpathAddTaskBtn.click();
        };
    };

    async deleteOddTodo(num: number) {
        for (let n = 1; n <= num; n += 2) {
            this.page.once('dialog', async dialog => {
                await dialog.accept();
            });
            await this.page.locator(`//button[@id='todo-${n}-delete']`).click();
        };
    };
};
