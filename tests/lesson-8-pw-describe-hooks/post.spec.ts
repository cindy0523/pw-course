import { test, expect } from "@playwright/test";

test.describe("Post", () => {

    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathLoginButton = "//input[@id='wp-submit']";
    let xpathPostTab = "//div[text()='Posts']";
    let xpathTagsSubTab = "//a[text()='Tags']";
    let xpathAddTagButton = "//input[@id='submit']";
    let xpathEmptyErrorMessage = "//p[text()='A name is required for this term.']";
    let xpathNameInputField = "//input[@id='tag-name']";
    let xpathNameErrorMsg = "//p[text()='A term with the name provided already exists in this taxonomy.']";
    let xpathNameSuccessMsg ="//p[text()='Tag added.']"
    const userName = "k13-nhu";
    const password = "jOzeymSdcu(POP)hritcC7eh";
    const tagNameUser = "tag Thu";
;
    test.beforeEach(async ({ page }) => {
        await test.step("Go to Post > Tags", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);
            await page.click(xpathLoginButton);
            await page.waitForLoadState("load");
            await page.click(xpathPostTab);
            await page.click(xpathTagsSubTab);
        });
    });

    test.afterEach(async ({ page }) => {
        page.close();
    });

    test("@POST_TAG_001 - Tag - add failed tag", async ({ page }) => {
        test.step("Click on 'Add Tag' button", async () => {
            await page.click(xpathAddTagButton);

            await expect(page.locator(xpathEmptyErrorMessage)).toBeVisible();
        });

        test.step("Điền thông tin tag: name = 'lesson tag', click button 'Add New Tag'", async () => {
            await page.fill(xpathNameInputField, "lesson tag");
            await page.click(xpathAddTagButton);

            await expect(page.locator(xpathNameErrorMsg)).toBeVisible();
        });
    });

    test("@POST_TAG_002 - Tag - add success tag", async ({ page }) => {
        test.step('"Điền thông tin tag: name = "tag {name}", Click button "Add New Tag"', async () => {
            await page.click(xpathNameInputField);
            await page.fill(xpathNameInputField, tagNameUser);
            await page.click(xpathAddTagButton);

            await expect(page.locator(xpathNameSuccessMsg)).toBeVisible();
        });
    });
});