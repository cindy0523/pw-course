import { test, expect } from '@playwright/test';

const loginUrl = "https://conduit-api.bondaracademy.com/api/users/login";
let token: string;
let cmtTotal: any[] = [];
const createCmtUrl = "https://conduit-api.bondaracademy.com/api/articles/API-in-Playwright-testing-42786/comments";

test("Add 5 comments in Article", async ({ request }) => {

    await test.step("Login", async () => {
            const response = await request.post(loginUrl, {
                data: {
                    "user": {
                        "email": "thucute@mailsac.com",
                        "password": "Test123@"
                    }
                }
            });
            
            const resBody = await response.json();
            token = await resBody.user.token;
        });

    await test.step("Create 5 comments", async () => {    
        for(let  i= 1; i <= 5; i++) {
            const response2 = await request.post(createCmtUrl, {
                headers: {
                    authorization: `Bearer ${token}`
                },
                data: {
                    "comment": {
                        "body": `Comment 0${i}`
                    }
                }
            });
        const Body2 = await response2.json();
        cmtTotal.push(Body2.comment.id);
        };

        //Verify
        expect(cmtTotal.length).toBe(5);
    });
});