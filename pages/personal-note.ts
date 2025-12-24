import { Locator, Page } from "@playwright/test";
import { MaterialBasePage } from './base-page';

// Personal Note
export class PersonalNote extends MaterialBasePage {
    private xpathTitleInput: Locator;
    private xpathContentInput: Locator;
    private xpathAddNoteBtn: Locator;
    private xpathSearchInput: Locator;

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