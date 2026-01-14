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

    async fillTagName(tagName: string) {
        await this.tagNameInput.fill(tagName);
    };

    async clickAddTag() {
        await this.addTagBtn.click();
    };

    async deleteTag(tagName: string) {
        await this.page.locator(`//a[@aria-label='Delete “${tagName}”']`);
    };
};