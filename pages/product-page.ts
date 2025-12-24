import { Locator, Page } from "@playwright/test";
import { MaterialBasePage } from './base-page';

//Product page
export class ProductPage extends MaterialBasePage {
    private xpathAddProduct1: Locator;
    private xpathAddProduct2: Locator;
    private xpathAddProduct3: Locator;

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
