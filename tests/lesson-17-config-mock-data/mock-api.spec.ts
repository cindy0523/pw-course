import { test, expect } from "@playwright/test";

test("print api calls to product", async ({ page }) => {
    // print request
    page.on("request", request => console.log(request.method(), request.url()));

    await page.goto("https://valentinos-magic-beans.click/products");
    await page.waitForLoadState("networkidle");
});

test("mock data product", async ({ page }) => {
    //create mocked response data
    const mockProduct = {
        "success": true,
        "source": "dynamodb",
        "data": [
            {
                "description": "A pinky coffee mocked by Cindy",
                "price": 23.05,
                "id": "235",
                "name": "Pink coffee"
            },
            {
                "description": "A white coffee mocked by Cindy",
                "price": 20.02,
                "id": "2002",
                "name": "White coffee"
            }
        ]
    };

    //mock api step
    await page.route("https://api.valentinos-magic-beans.click/products", (route) => {
        route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(mockProduct),
        });
    });

    //test step
    await page.goto("https://valentinos-magic-beans.click/products");
    await page.waitForLoadState("networkidle");

    await page.locator('//button[@data-test-id="product-card-add-to-cart-button-235"]').click();
    await page.locator("//a[@data-test-id='header-cart-button']").click();

    //expect
    const productHeading = page.getByRole("heading", { name: mockProduct.data[0].name })
    await expect(productHeading).toBeVisible();
});