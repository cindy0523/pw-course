import { test, expect } from "@playwright/test";

test("Sign up successfully", async ({ request }) => {
    const url = "https://conduit-api.bondaracademy.com/api/users/";

    const random = Date.now()
    const response = await request.post(url, {
        data: {
            "user": {
                "email": `thucute${random}@mailsac.com`,
                "password": "Test123@",
                "username": `thucute${random}`
            }
        }
    });

    console.log(`Status code: ${response.status()}`);
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(responseBody);
})

