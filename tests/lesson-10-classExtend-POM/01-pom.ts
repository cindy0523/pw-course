import { Locator, Page } from "@playwright/test";

// Base Page
export class MaterialBasePage {
    protected page: Page;
    protected xpathRegisterPage: Locator;
    protected xpathProductPage: Locator;
    protected xpathTodoPage: Locator;
    protected xpathpersonalNote: Locator;

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

//Register page
export class RegisterPage extends MaterialBasePage {
    xpathUserName: Locator;
    xpathEmail: Locator;
    xpathGenderMale: Locator;
    xpathGenderFemale: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathUserName = page.locator("//input[@id='username']");
        this.xpathEmail = page.locator("//input[@id='email']");
        this.xpathGenderFemale = page.locator("//input[@id='female']");
        this.xpathGenderMale = page.locator("//input[@id='male']");
    };

    async fillUsername(username: string) {
        await this.xpathUserName.fill(username);
    };

    async fillEmail(email: string) {
        await this.xpathEmail.fill(email);
    };

    async checkGender(gender: string) {
        if (gender === 'male') {
            await this.xpathGenderMale.check();
        }
        else if (gender === 'female') {
            await this.xpathGenderFemale.check();
        }
        else {
            throw new Error(`${gender} gender is not supported.`)
        };
    };

    async clickRegister() {
        this.page.locator("//button[text()='Register']").click();
    };
};

//Product page
export class ProductPage extends MaterialBasePage {
    protected xpathAddProduct1: Locator;
    protected xpathAddProduct2: Locator;
    protected xpathAddProduct3: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathAddProduct1 = page.locator("//button[@data-product-id=1]");
        this.xpathAddProduct2 = page.locator("//button[@data-product-id=2]");
        this.xpathAddProduct3 = page.locator("//button[@data-product-id=3]");
    };

    async addProduct1(total1: number) {
        await this.xpathAddProduct1.click({ clickCount: total1 });
    };
    async addProduct2(total2: number) {
        await this.xpathAddProduct2.click({ clickCount: total2 });
    };
    async addProduct3(total3: number) {
        await this.xpathAddProduct3.click({ clickCount: total3 });
    };
};

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

// Personal Note
export class PersonalNote extends MaterialBasePage {
    protected xpathTitleInput: Locator;
    protected xpathContentInput: Locator;
    protected xpathAddNoteBtn: Locator;
    protected xpathSearchInput: Locator;

    constructor(page: Page) {
        super(page);
        this.xpathTitleInput = page.locator("//input[@id='note-title']");
        this.xpathContentInput = page.locator("//textarea[@id='note-content']");
        this.xpathAddNoteBtn = page.locator("//button[@id='add-note']");
        this.xpathSearchInput = page.locator("//input[@id='search']");
    };

    async addTitle(title: string) {
        await this.xpathTitleInput.fill(title);
    };

    async addContent(content: string) {
        await this.xpathContentInput.fill(content);
        await this.xpathAddNoteBtn.click();
    };

    async search(text: string) {
        await this.xpathSearchInput.fill(text);
    };
};