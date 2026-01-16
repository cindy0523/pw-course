import { APIRequestContext } from "@playwright/test";

export class Lesson13Api {
    protected request: APIRequestContext;
    protected baseUrl: string;
    protected token!: string;

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    };

    async logIn(email: string, password: string) {
        const response = await this.request.post(`${this.baseUrl}/users/login`, {
            data: {
                "user": {
                    "email": email,
                    "password": password
                }
            },
        });
        return response;
    };

    async getToken(email: string, password: string) {
        const response = await this.logIn(email, password);
        const resBody = await response.json();
        this.token = resBody.user.token;
    };

    async createArticle(article: {
        title: string,
        desc: string,
        body: string,
        tagList: string[]
    }) {
        const response = this.request.post(`${this.baseUrl}/articles/`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            data: {
                "article": {
                    "title": article.title,
                    "description": article.desc,
                    "body": article.body,
                    "tagList": article.tagList
                }
            }
        });
        return response;
    };

    async deleteArticle(slug: string) {
        const response = this.request.delete(`${this.baseUrl}/articles/${slug}`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return response;
    };
};