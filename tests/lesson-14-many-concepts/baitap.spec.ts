import { test, expect } from "@playwright/test";

test("Bài tập 1: chụp màn hình và mask block với màu", async ({ page }) => {
    await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin/");
    await page.fill("//input[@id='user_login']", "k13-nhu");
    await page.fill("//input[@id='user_pass']", "jOzeymSdcu(POP)hritcC7eh");
    await page.click("//input[@id='wp-submit']");

    const atAGlanceBlock = page.locator("//div[@id='dashboard_right_now']");
    const activityBlock = page.locator("//div[@id='dashboard_activity']");

    await expect(page).toHaveScreenshot({
        mask: [atAGlanceBlock, activityBlock],
        maskColor: "#7134eb",
    });
});