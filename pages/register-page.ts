import { Locator, Page } from "@playwright/test";
import { MaterialBasePage } from './base-page';

//Register page
export class RegisterPage extends MaterialBasePage {
    private xpathUserName: Locator;
    private xpathEmail: Locator;
    private xpathGenderMale: Locator;
    private xpathGenderFemale: Locator;

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
        await this.page.locator("//button[text()='Register']").click();
    };

    async getInfoFromTable() {
        // Retrieve actual data in the Table
        return {
            username: this.page.locator("//tbody//tr//td[2]"),
            email: this.page.locator("//tbody//tr//td[3]"),
            infomation: this.page.locator("//tbody//tr//td[4]"),
        };
    };
};
