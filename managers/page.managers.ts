import { Page } from "@playwright/test";
import { MaterialBasePage } from "../pages/base.page";
import { PersonalNote } from "../pages/personal-note.page";
import { ProductPage } from "../pages/product.page";
import { RegisterPage } from "../pages/register.page";
import { ToDoPage } from "../pages/to-do.page";

export class PageManager {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    getMaterialBasePage() {
        return new MaterialBasePage(this.page);
    };

    getPersonalNote() {
        return new PersonalNote(this.page);
    };

    getProductPage() {
        return new ProductPage(this.page);
    };

    getRegisterPage() {
        return new RegisterPage(this.page);
    };

    getToDoPage() {
        return new ToDoPage(this.page);
    };
};  