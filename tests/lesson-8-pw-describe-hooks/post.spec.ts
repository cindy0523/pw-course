import { test, expect } from "@playwright/test";

let xpathUserName = "//input[@id='user_login']";
let xpathPassword = "//input[@id='user_pass']";
let xpathLoginButton = "//input[@id='wp-submit']";
let xpathPostTab = "//div[text()='Posts']";
let xpathTagsSubTab = "//a[text()='Tags']";
let xpathAddTagButton = "//input[@id='submit']";
let xpathEmptyErrorMessage = "//p[text()='A name is required for this term.']";
let xpathNameInputField = "//input[@id='tag-name']";
let xpathNameErrorMsg = "//p[text()='A term with the name provided already exists in this taxonomy.']";
let xpathNameSuccessMsg = "//p[text()='Tag added.']"
let xpathSlugInputField = "//input[@id='tag-slug']";
let xpathCategorySubTab = "//a[text()='Categories']";

const userName = "k13-nhu";
const password = "jOzeymSdcu(POP)hritcC7eh";

test.describe("POST > TAG - Failed", () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Login > Go to Post - Tags page", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);
            await page.click(xpathLoginButton);
            await page.waitForLoadState("load");
            await page.click(xpathPostTab);
            await page.click(xpathTagsSubTab);
        });

        page.on('dialog', async (dialog) => {
            dialog.accept();
        });
    });

    test("@POST_TAG_001 - Tag - add failed tag", async ({ page }) => {

        await test.step("Click on 'Add Tag' button", async () => {
            await page.waitForLoadState("load");
            await page.click(xpathAddTagButton);

            //Verify empty error message
            await expect(page.locator(xpathEmptyErrorMessage)).toBeVisible();
        });

        await test.step("Điền thông tin tag: name = 'lesson tag', click button 'Add Tag'", async () => {
            await page.fill(xpathNameInputField, "lesson tag");
            await page.click(xpathAddTagButton);

            //Verify 'lesson tag' has been exist
            await expect(page.locator(xpathNameErrorMsg)).toBeVisible();
        });
    });
});

test.describe("POST > TAG - Success", () => {

    function getXpathTagNameInTable(name: string) {
        return `//tbody//a[contains(text(), '${name}')]`
    };

    function getXpathSlugNameInTable(slug: string) {
        return `//tbody//td[contains(text(), '${slug}')]`
    };

    function getXpathDeleteBtnInTable(name: string) {
        return `//a[@aria-label='Delete “${name}”']`
    };

    const name = "tag name Thu";
    const name2 = "tag name 2 Thu";
    const slug2 = "tag-name-2-thu";

    test.beforeEach(async ({ page }) => {
        await test.step("Login > Go to Post - Tags page", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);
            await page.click(xpathLoginButton);
            await page.waitForLoadState("load");
            await page.click(xpathPostTab);
            await page.click(xpathTagsSubTab);
        });

        page.on('dialog', async (dialog) => {
            dialog.accept();
        });
    });

    test.afterEach(async ({ page }) => {
        await test.step('Teardown data', async () => {
            await page.hover(getXpathTagNameInTable(name));
            await page.click(getXpathDeleteBtnInTable(name));

            await page.hover(getXpathTagNameInTable(name2));
            await page.click(getXpathDeleteBtnInTable(name2));

            //Verify: Name, Name2 and Slug2 is deleted
            await expect(page.locator(getXpathTagNameInTable(name))).not.toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name2))).not.toBeVisible();
            await expect(page.locator(getXpathSlugNameInTable(slug2))).not.toBeVisible();
        })
    })

    test("@POST_TAG_002 - Tag - add success tag", async ({ page }) => {

        await test.step('"Điền thông tin tag name = tên bạn, Click button "Add Tag"', async () => {
            await page.fill(xpathNameInputField, name);
            await page.click(xpathAddTagButton);

            //verify Add success message is displayed, new tag created in Table list
            await expect(page.locator(xpathNameSuccessMsg)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name))).toContainText(name);
        });

        await test.step('Điền thông tin tag: Name = "tag {name} 02", Slug = "tag-${name}-02"', async () => {
            await page.fill(xpathNameInputField, name2);
            await page.fill(xpathSlugInputField, slug2);
            await page.click(xpathAddTagButton);

            //Verify: Display add success message, name2 and slug2 added to Table
            await expect(page.locator(xpathNameSuccessMsg)).toBeVisible();
            await expect(page.locator(getXpathTagNameInTable(name2))).toContainText(name2);
            await expect(page.locator(getXpathSlugNameInTable(slug2))).toContainText(slug2);
        });
    });
});

test.describe("POST > CATEGORY", () => {
    test.beforeEach(async ({ page }) => {
        await test.step("Login > Go to Post - Tags page", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);
            await page.click(xpathLoginButton);
            await page.click(xpathPostTab);
            await page.waitForLoadState("load");
            await page.click(xpathCategorySubTab);
        });

        page.on('dialog', async (dialog) => {
            dialog.accept();
        })
    });

    test("Category - create category success", async ({ page }) => {
        await test.step('Điền Name = "category {name} 03", slug = "Đây là category đặc biệt @100 $200"', async () => {
            await page.fill(xpathNameInputField, "category Thu 03");
            await page.fill(xpathSlugInputField, "Đây là category đặc biệt @100 $200");

            //verify Add success message is displayed, category name added in List, slug-name display in List
            await expect(page.locator(xpathNameSuccessMsg)).toBeVisible();

        })
    })

})