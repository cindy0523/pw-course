 /* 1. Viết fixture: myTag, login sẵn vào dashboard
vào Posts > tags > tạo sẵn t1, t2. Sau khi test chạy xong, xóa tag đi. */

import { test as base } from "@playwright/test";
import { TagPage } from "../page/tag.page";

const username = 'k11-my';
const password = 'xWo56Nry^hsfk9!MQoTbRUyC';
const tagNameList: string[] = [];

type TagFixture = {
    loginAddTag: TagPage;
};

export const test = base.extend<TagFixture>({
    loginAddTag: async ({ page }, use) => {
        const tagPage = new TagPage(page);

        //setup steps
        await tagPage.login(username, password);
        await tagPage.gotoTagPage();
        await tagPage.addTag("t1");
        await tagPage.addTag("t2");

        await use(tagPage);

        //teardown
        tagNameList.push("t1", "t2");
        for (const tagItem of tagNameList) {
            await tagPage.deleteTag(tagItem);
        }
    }
});

export { expect } from "@playwright/test";