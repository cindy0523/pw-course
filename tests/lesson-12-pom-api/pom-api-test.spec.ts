import { test, expect } from "@playwright/test";
import { ConduitApi } from "../../api/conduit.api";
import { request } from "http";

const baseUrl = "https://conduit-api.bondaracademy.com/api";
let email = "thucute@mailsac.com";
let password = "Test123@";
let cmtTotal: any[] = [];
let slug: string;
let title = 'Exercise Lesson 12';
let desc = 'How to use API to create article';
let body = 'Hello testing world';
let tagList = ['Playwright Viet Nam, pw, pw-k11, k11-practice'];
let token: string;

test.describe("Exercise 11", () => {
    let conduitApi: ConduitApi;
    
    test.beforeEach(async ({ request }) => {
        conduitApi = new ConduitApi(request, baseUrl);
        token = await conduitApi.getToken(email, password);
    });

    test("Test 1: Sign up successfully", async () => {
        const response = await conduitApi.signUp();
        //Verify status code
        expect(response.status()).toBe(201);
    });

    test("Test 2: Login and create an article", async () => {
        await test.step("Login", async () => {
            const response = await conduitApi.logIn(email, password);
            //Verify status code
            expect(response.status()).toBe(200);
        });

        await test.step("Create an article", async () => {
            const response = await conduitApi.createArticle(token, title, desc, body, tagList);
            const resBody = await response.json();
            // Verify status code
            expect(response.status()).toBe(201);
            //get slug
            slug = resBody.article.slug;
        });
    });

    test("Test 3: Add 5 comments in Article", async () => {
        const response = await conduitApi.createComment(token, slug, 5);
        //Verify status code
        expect(response.status()).toBe(200);

        //Get response
        const Body3 = await response.json();
        cmtTotal.push(Body3.comment.id);

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

    test("Test 6: Xóa article đã tạo ở test 2", async () => {
        const response = await conduitApi.deleteArticle(token, slug);
        //Verify status code
        expect(response.status()).toBe(204);
    });
});


