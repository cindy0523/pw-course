import { test, expect } from '@playwright/test';

test.describe("Media", () => {

    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathLoginButton = "//input[@id='wp-submit']";
    let xpathMedia = "//div[text()='Media']";
    let xpathLibrary = "//a[text()='Library']";
    let xpathAddMediaButton = "//div[@id='wp-media-grid']//a[@class='page-title-action aria-button-if-js']";
    let xpathInputFile = "//input[@type='file']";
    let xpathFile = "//div[@class='attachments-wrapper']//li[@aria-label='thu']";
    let xpathBulkSelectButton = "//button[text()='Bulk select']";
    let xpathPermanentDeleteBtn = "//div[@class='media-toolbar-secondary']//button[text()='Delete permanently']";
    const userName = "k13-nhu";
    const password = "jOzeymSdcu(POP)hritcC7eh";

    test.beforeEach(async ({ page }) => {
        await test.step('Đã login vào admin, đứng tại menu Media > Library', async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);
            await page.click(xpathLoginButton);
            await page.waitForLoadState("load");
            await page.click(xpathMedia);
            await page.click(xpathLibrary);
        });

        page.on('dialog', async dialog => {
            await dialog.accept();
        });
    });

    test.afterEach(async ({ page }) => {

        await page.click(xpathBulkSelectButton);
        await page.waitForLoadState("load");
        await page.click(xpathFile);
        await page.click(xpathPermanentDeleteBtn);

        //verify file has been deleted
        await page.reload();
        await expect(page.locator(xpathFile)).not.toBeVisible();
    });

    test('@MEDIA_FILES_001 - Media - upload file success', async ({ page }) => {
        await test.step('Thực hiện upload file', async () => {
            await page.click(xpathAddMediaButton);
            await page.setInputFiles(xpathInputFile, "pwcourse/tests/lesson-8-pw-describe-hooks/thu.txt");
        });

        await test.step("F5 trang", async () => {
            await page.reload();
            await page.waitForLoadState("load", { timeout: 5000 });

            //verify file is uploaded
            await expect(page.locator(xpathFile)).toBeVisible();
        });
    });
});