import { Page, test } from "@playwright/test";

const fixture1 = test.extend<{ postPage: Page }>({
    postPage: async ({ page }, use) => {
        console.log("before each"); //beforeEach
        await use(page);
        console.log("after each"); //afterEach
    }
});

export { fixture1 };