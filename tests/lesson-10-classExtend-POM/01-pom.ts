import { Locator, Page } from "@playwright/test";

// Base Page
export class MaterialBasePage {
    protected page: Page;
    protected xpathRegisterPage: Locator;
    protected xpathProductPage: Locator;
    protected cssTodoPage: Locator;
    protected personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']");
        this.xpathProductPage = page.locator("//a[text()='Bài học 2: Product page']");
        this.cssTodoPage = page.locator('a[href*="todo"]');
        this.personalNote = page.locator("//a[text()='Bài học 4: Personal notes']");
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
                await this.cssTodoPage.click();
                break;
            case 'personalNote':
                await this.personalNote.click();
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
            throw new Error (`${gender} gender is not supported.`)
        };
    };

    async clickRegister() {
        this.page.locator("//button[text()='Register']").click();
    };
};
