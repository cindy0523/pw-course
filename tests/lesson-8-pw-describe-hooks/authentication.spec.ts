import { test, expect } from '@playwright/test';

test.describe("Authentication", () => {
    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathLoginButton = "//input[@id='wp-submit']";
    let xpathLoginError = "//div[@id='login_error']";
    let xpathDashboard = "//h1[text()='Dashboard']";
    let xpathAtAGlance ="//h2[text()='At a Glance']";
    let xpathActivity ="//h2[text()='Activity']"
    const userName = "k13-nhu";
    const password = "jOzeymSdcu(POP)hritcC7eh";
    const wrongPassword = "jOzeymSdcu(POP)hritcC7ehF";

    test.beforeEach(async ({ page }) => {
        await test.step("Đi tới trang login", async() => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
        })   
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test("@AUTH_001 - Login fail", async ({ page }) => {

        await test.step("Nhập vào thông tin username, password bị sai", async () => {
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, wrongPassword);
            
            // Verify data is inputed
            await expect(page.locator(xpathUserName)).toHaveValue(userName);
            await expect(page.locator(xpathPassword)).toHaveValue(wrongPassword);
        });

        await test.step("Click button login", async () => {
            await page.click(xpathLoginButton);

            //Verify login fail
            await expect(page.locator(xpathLoginError)).toBeVisible();
        });
    });

    test("@AUTH_002 - Login success", async ({ page }) => {

        await test.step("Nhập vào thông tin username, password đúng", async() => {
            await page.fill(xpathUserName, userName);
            await page.fill(xpathPassword, password);

            await expect(page.locator(xpathUserName)).toHaveValue(userName);
            await expect(page.locator(xpathPassword)).toHaveValue(password);
        });

        await test.step("Click button login", async() => {
            await page.click(xpathLoginButton);
            await page.waitForLoadState("domcontentloaded");

            // Verify redirection
            await expect(page).toHaveURL(/.*wp-admin/);

            // Verify 'Dashboard' headline displays
            await expect(page.locator(xpathDashboard)).toBeVisible();

            // Verify 'At a Glance' title and 'Activity' title display
            await expect(page.locator(xpathAtAGlance)).toBeVisible();
            await expect(page.locator(xpathActivity)).toBeVisible();
        });
    });
});