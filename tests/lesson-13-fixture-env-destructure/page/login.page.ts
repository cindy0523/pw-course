import { Locator, Page } from "@playwright/test";

export class LoginPage {
    protected page: Page;
    private userNameInput: Locator;
    private passwordInput: Locator;
    private logInBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator("//input[@id='user_login']");
        this.passwordInput = page.locator("//input[@id='user_pass']");
        this.logInBtn = page.locator("//input[@id='wp-submit']");
    };

    async login(userName: string, password: string) {
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.logInBtn.click();
    };
};