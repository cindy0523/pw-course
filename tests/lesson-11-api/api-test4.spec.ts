import { test, expect } from "@playwright/test";

const loginUrl = "https://conduit-api.bondaracademy.com/api/users/login";
const cmtUrl = "https://conduit-api.bondaracademy.com/api/articles/API-in-Playwright-testing-42786/comments";

let token: string;
const cmtCreatedId: number[] = [];

test("Delete cmt 2 and cmt 5 successfully", async ({ request }) => {

    await test.step("Login", async () => {
        const res = await request.post(loginUrl, {
            data: {
                user: {
                    email: "thucute@mailsac.com",
                    password: "Test123@"
                }
            }
        });

        expect(res.status()).toBe(200);
        const body = await res.json();
        token = body.user.token;
    });

    await test.step("Create 5 comments", async () => {
        for (let i = 1; i <= 5; i++) {
            const res = await request.post(cmtUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    comment: {
                        body: `Comment 0${i}`
                    }
                }
            });

            expect(res.status()).toBe(200);

            const body = await res.json();
            cmtCreatedId.push(body.comment.id);
        }

        expect(cmtCreatedId.length).toBe(5);
    });

    await test.step("Delete cmt 2 and cmt 5", async () => {
        const deleteIds = [cmtCreatedId[1], cmtCreatedId[4]];

        for (const id of deleteIds) {
            const res = await request.delete(`${cmtUrl}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            expect(res.status()).toBe(200);
        }
    });

    await test.step("Verify deleted comments", async () => {
        const res = await request.get(cmtUrl);
        expect(res.status()).toBe(200);
    });
});
