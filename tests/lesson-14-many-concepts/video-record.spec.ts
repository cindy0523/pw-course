import { test, expect } from '@playwright/test';

const start = "//div[@id='piece-1']";
const end = "//div[@data-piece='1']";

test('drag and drop 2', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.click("//a[text()='Bài học 5: Puzzle drag and drop game']");
    await page.dragAndDrop(start, end);
});

test('drag and drop 1', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/")
    await page.click("//a[text()='Bài học 5: Puzzle drag and drop game']");

    await page.locator(start).hover();
    await page.mouse.down();
    await page.locator(end).hover();
    await page.mouse.up();
});