import { Locator, Page } from "@playwright/test";

export class MaterialBasePage {
    page: Page;
    xpathRegisterPage: string;
    xpathProductPage: string;
    cssTodoPage: string;
    personalNote: Locator;

    constructor(page: Page) {
        this.page = page;
        this.xpathRegisterPage = 'registerPage';
        this.xpathProductPage = 'productPage';
        this.cssTodoPage = '#todo';
        this.personalNote = page.locator('personal-Note');
    };

    async openMaterialPage() {

    };

    async gotoPage(pageName: string) {

    };
};

