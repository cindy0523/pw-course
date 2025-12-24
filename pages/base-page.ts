import { Locator, Page } from "@playwright/test";

// Base Page
export class MaterialBasePage {
    protected page: Page;
    private xpathRegisterPage: Locator;
    private xpathProductPage: Locator;
    private xpathTodoPage: Locator;
    private xpathpersonalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']");
        this.xpathProductPage = page.locator("//a[text()='Bài học 2: Product page']");
        this.xpathTodoPage = page.locator("//a[text()='Bài học 3: Todo page']");
        this.xpathpersonalNote = page.locator("//a[text()='Bài học 4: Personal notes']");
    };

    async openMaterialPage() {
        await this.page.goto("https://material.playwrightvn.com/");
    };

    async gotoPage(pageName: string) {
        switch (pageName) {
            case 'register':
                await this.xpathRegisterPage.click();
                break;
            case 'product':
                await this.xpathProductPage.click();
                break;
            case 'todo':
                await this.xpathTodoPage.click();
                break;
            case 'personalNote':
                await this.xpathpersonalNote.click();
                break;
            default:
                throw new Error(`${pageName} page is not supported.`);
        };
    };
};


