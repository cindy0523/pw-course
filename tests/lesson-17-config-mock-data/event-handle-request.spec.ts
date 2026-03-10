import { test, expect, Request } from "@playwright/test";

test.use({
    baseURL: ''
});

test("Monitor request from inside a page - playwright.dev", async ({ page }) => {
    const apiRequest: Request[] = [];
    
    function addRequest(request: Request) {
        apiRequest.push(request);
    };

    page.on('request', addRequest);

    await page.goto("https://playwright.dev");

    apiRequest.forEach((request) => {
        console.log(`${request.resourceType()}: ${request.url()}`);
    });
});