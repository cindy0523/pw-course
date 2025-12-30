import { APIRequestContext } from "@playwright/test";
import { BaseApi } from "./base.api";

export class ArticleApi extends BaseApi {

    async createArticle(token: string, title: string, desc: string, body: string, tagList: string[]) {
        const response = this.request.post(`${this.baseUrl}/articles/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                "article": {
                    "title": title,
                    "description": desc,
                    "body": body,
                    "tagList": tagList
                }
            }
        });
        return response;
    };

    async getSlug(token: string, title: string, desc: string, body: string, tagList: string[]) {
        const response = await this.createArticle(token, title, desc, body, tagList);
        const resBody = await response.json();
        return resBody.article.slug;
    };

    async deleteArticle(token: string, slug: string) {
        const response = this.request.delete(`${this.baseUrl}/articles/${slug}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    };
};