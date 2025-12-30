// Refactor các test ở buổi 10, sử dụng Pom Manager
import { Page } from "@playwright/test";

export class PomManager {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    getBasePage() {
        
    }
};