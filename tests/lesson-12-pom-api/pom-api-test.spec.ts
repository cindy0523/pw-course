import { test, expect } from "@playwright/test";

const baseUrl = "https://conduit-api.bondaracademy.com/api";
let token: string;
let slug: string;
let email = "thucute@mailsac.com";
let password = "Test123@";
let cmtTotal: any[] = [];

test.describe("Exercise 11", async () => {

    test("Test 1: Sign up successfully", async ({ request }) => {
        const random = Date.now()
        const response = await request.post(`${baseUrl}/users`, {
            data: {
                "user": {
                    "email": `thucute${random}@mailsac.com`,
                    "password": `${password}`,
                    "username": `thucute${random}`
                }
            }
        });
        //Verify status code
        expect(response.status()).toBe(201);

    });

    test("Test 2: Login and create an article", async ({ request }) => {
        await test.step("Login", async () => {
            const response = await request.post(`${baseUrl}/users/login`, {
                data: {
                    "user": {
                        "email": `${email}`,
                        "password": `${password}`
                    }
                }
            });
            //Verify status code
            expect(response.status()).toBe(200);

            //retrieve token
            const responseBody = await response.json();
            token = await responseBody.user.token;
        });

        await test.step("Create an article", async () => {
            const response = await request.post(`${baseUrl}/articles`, {
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
            // Verify status code
            expect(response.status()).toBe(201);
            //Retrieve slug
            const Body2 = await response.json();
            slug = Body2.article.slug;
        });
    });

    test("Test 3: Add 5 comments in Article", async ({ request }) => {
        for (let i = 1; i <= 5; i++) {
            const response = await request.post(`${baseUrl}/articles/${slug}/comments`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    "comment": {
                        "body": `Comment 0${i}`
                    }
                }
            });
            //Verify status code
            expect(response.status()).toBe(200);

            //Get response
            const Body3 = await response.json();
            cmtTotal.push(Body3.comment.id);
        };
        //Verify response data: add 5 cmts
        expect(cmtTotal.length).toBe(5);
    });

    test("Test 4: Delete cmt 2 and cmt 5 successfully", async ({ request }) => {
        await test.step("Delete cmt 2 and cmt 5", async () => {
            //Retrieve comment 2 and comment 5
            const deletedCmt = [cmtTotal[1], cmtTotal[4]];

            for (const id of deletedCmt) {
                const response = await request.delete(`${baseUrl}/articles/${slug}/comments/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                //Verify status code
                expect(response.status()).toBe(200);
            };
        });
    });

    test("Test 5: Xóa article đã tạo ở test 2", async ({ request }) => {
        await test.step("Delete an article", async () => {
            const response = await request.delete(`${baseUrl}/articles/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            //Verify status code
            expect(response.status()).toBe(204);
        });
    });
});

