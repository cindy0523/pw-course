import { test, expect } from "@playwright/test";

let username = "//input[@id='user_login']";
let password = "//input[@id='user_pass']";
let loginBtn = "//input[@id='wp-submit']";
let dashboard = "//h1[contains(text(),'Dashboard')]";

test("Login from different env", async ({page}) => {
    await page.goto("/wp-admin");
    await page.fill(username, process.env.WP_USERNAME!);
    await page.fill(password, process.env.PASSWORD!);
    await page.click(loginBtn);
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator(dashboard)).toBeVisible();
});