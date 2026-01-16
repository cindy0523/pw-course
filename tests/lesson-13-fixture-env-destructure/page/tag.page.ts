import { LoginPage } from "./login.page";
import { Page, Locator } from "@playwright/test";

export class TagPage extends LoginPage {

    private postBtn: Locator;
    private tagBtn: Locator;
    private tagNameInput: Locator;
    private addTagBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.postBtn = page.locator("//div[text()='Posts']");
        this.tagBtn = page.locator("//a[text()='Tags']");
        this.tagNameInput = page.locator("//input[@id='tag-name']");
        this.addTagBtn = page.locator("//input[@id='submit']");
        // this.deleteTagBtn = page.locator(`//a[@aria-label='Delete “${name}”']`);
    };

    async gotoTagPage() {
        await this.postBtn.click();
        await this.tagBtn.click();
        await this.page.waitForLoadState("domcontentloaded");
    };

    async addTag(tagName: string) {
        await this.tagNameInput.fill(""); //clear data
        await this.tagNameInput.fill(tagName);
        await this.addTagBtn.click();
        await this.page.waitForLoadState("networkidle");
    };

    async deleteTag(tagName: string) {
        const row = this.page.locator(`//tbody//tr//td//a[text()="${tagName}"]`);
        const deleteLink = this.page.locator(`//a[@aria-label='Delete “${tagName}”']`);

        this.page.once("dialog", dialog => {
            dialog.accept();
        });

        await row.hover();
        await deleteLink.click();
    };
};