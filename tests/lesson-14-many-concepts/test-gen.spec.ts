import { test, expect } from "@playwright/test";

test("Visual test", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await expect(page).toHaveScreenshot();
});

test("Visual test 1p", async ({ page }) => {
    const titlePage = "//h2[text()='Tài liệu thực hành playwright']"
    await page.goto("https://material.playwrightvn.com");
    await expect(page.locator(titlePage)).toHaveScreenshot('title.png');
});

test("Mask + visual compare", async ({ page }) => {
    const maskPart = page.locator("//div[@id='ads-here']");
    await page.goto("https://material.playwrightvn.com");
    await expect(page).toHaveScreenshot({
        mask: [maskPart]
    });
});

test("Mask color + visual compare", async ({ page }) => {
    const maskPart = page.locator("//div[@id='ads-here']");
    await page.goto("https://material.playwrightvn.com");
    await expect(page).toHaveScreenshot({
        mask: [maskPart],
        maskColor: "#62d4eb"
    });
});