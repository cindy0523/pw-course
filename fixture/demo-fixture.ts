import { Page, test } from "@playwright/test";

const testFixture = test.extend<{ dashboard: Page }>({
    dashboard: async ({ page }, use) => {
        //beforeEach
        console.log("login");

        //use
        await use(page);

        //afterEach
        console.log("clean data");
    }
});

export { testFixture };