import { APIRequestContext } from '@playwright/test';

export class ConduitApi {
    protected request: APIRequestContext;
    protected baseUrl: string;
    protected token!: string;

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    };

    async signUp() {
        const random = Date.now();
        const response = await this.request.post(`${this.baseUrl}/users`, {
            data: {
                "user": {
                    "email": `thucute${random}@mailsac.com`,
                    "password": "Test123@",
                    "username": `thucute${random}`
                }
            }
        });
        return response;
    };

    async logIn(email: string, password: string) {
        const response = await this.request.post(`${this.baseUrl}/users/login`, {
            data: {
                "user": {
                    "email": email,
                    "password": password
                }
            }
        });
        return response;
    };

    async getToken(email: string, password: string) {
        const response = await this.logIn(email, password);
        const resBody = await response.json();
        this.token = resBody.user.token;
    };

    async createArticle(
        title: string,
        desc: string,
        body: string,
        tagList: string[]
    ) {
        const response = this.request.post(`${this.baseUrl}/articles/`, {
            headers: {
                Authorization: `Bearer ${this.token}`
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

    async deleteArticle(slug: string) {
        const response = this.request.delete(`${this.baseUrl}/articles/${slug}`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return response;
    };

    async createComment(slug: string, bodyCmt: string) {
        const response = await this.request.post(`${this.baseUrl}/articles/${slug}/comments`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            },
            data: {
                "comment": {
                    "body": `${bodyCmt}`
                }
            }
        });
        return response;
    };

    async deleteComment(slug: string, id: any[]) {
        const response = await this.request.delete(`${this.baseUrl}/articles/${slug}/comments/${id}`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        return response;
    };

};