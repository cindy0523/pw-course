import { test, expect } from "@playwright/test";

const loginUrl = "https://conduit-api.bondaracademy.com/api/users/login";
const createArticleUrl = "https://conduit-api.bondaracademy.com/api/articles";
let token: string;
let slug = '';

test("Create a new article successfully", async ({ request }) => {
    await test.step("Login", async () => {
        const response = await request.post(loginUrl, {
            data: {
                "user": {
                    "email": "thucute@mailsac.com",
                    "password": "Test123@"
                }
            }
        });
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        token = await responseBody.user.token;
    });

    await test.step("Create a new article", async () => {
        const response2 = await request.post(createArticleUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                "article": {
                    "title": "API in Playwright testing 890",
                    "description": "How to use Playwright to create article 890",
                    "body": "Article description sample 890",
                    "tagList": [
                        "Playwright Viet , pw, pw-k10 890"
                    ]
                }
            }
        });

        expect(response2.status()).toBe(201);
        const Body2 = await response2.json();
        slug = Body2.article.slug;
    });

    await test.step("Delete an article", async () => {
        const response3 = await request.delete(`${createArticleUrl}/${slug}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },            
        });

        expect(response3.status()).toBe(204);
    })
});