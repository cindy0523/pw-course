//  2. Viết fixture: myApi 
// login sẵn, tạo sẵn 2 article: a1, a2. Sau khi chạy test xong, xóa đi. 

import { test as base } from "@playwright/test";
import { Lesson13Api } from "../page/article.api";

const baseUrl = "https://conduit-api.bondaracademy.com/api";
const email = "thucute@mailsac.com";
const password = "Test123@";
let listSlug: string[] = [];
let listArticle = [
    {
        title: 'a1',
        desc: 'How to use API to create article',
        body: 'Hello testing world',
        tagList: ['Playwright Viet Nam', 'pw', 'pw-k11, k11-practice']
    },
    {
        title: 'a2',
        desc: 'How to use API to create article',
        body: 'Hello testing world',
        tagList: ['Playwright Viet Nam', 'pw', 'pw-k11, k11-practice']
    }
];


type ApiFixture = {
    createDeleteArticle: Lesson13Api;
};

export const test = base.extend<ApiFixture>({
    createDeleteArticle: async ({ request }, use) => {
        const articleApi = new Lesson13Api(request, baseUrl);

        //setup
        await articleApi.logIn(email, password);
        await articleApi.getToken(email, password);

        for (const articleItem of listArticle) {
            const response = await articleApi.createArticle(articleItem);
            const resBody = await response.json();
            listSlug.push(resBody.article.slug);
        };

        await use(articleApi);

        //teardown
        for (const slugItem of listSlug) {
            const response =  await articleApi.deleteArticle(slugItem);
        }; 
    }
});

export { expect } from "@playwright/test";