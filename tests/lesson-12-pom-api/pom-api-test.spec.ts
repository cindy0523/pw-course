import { test, expect } from "@playwright/test";
import { ConduitApi } from "../../api/conduit-api-page";

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
        let conduitApi = new ConduitApi(request, baseUrl);
        await test.step("Login", async () => {
            const { response, resBody } = await conduitApi.login(email, password);

            //Verify status code
            expect(response.status()).toBe(200);
            //retrieve token
            token = await resBody.user.token;
        });

        await test.step("Create an article", async () => {
            const title = "API in Playwright testing 890";
            const desc = "How to use Playwright to create article 890";
            const body = "Article description sample 890";
            const tagList = ["Playwright Viet , pw, pw-k10 890"];

            const { response, resBody } = await conduitApi.createArticle(token, title, desc, body, tagList);

            // Verify status code
            expect(response.status()).toBe(201);
            //Retrieve slug
            slug = resBody.article.slug;
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

