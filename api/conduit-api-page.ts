import { APIRequestContext } from '@playwright/test';
export class ConduitApi {
    protected request: APIRequestContext;
    protected baseUrl: string;

    constructor(request: APIRequestContext, baseUrl: string) {
        this.request = request;
        this.baseUrl = baseUrl;
    };

    async login(email: string, password: string) {
        const response = await this.request.post(`${this.baseUrl}/users/login`, {
            data: {
                "user": {
                    "email": email,
                    "password": password
                }
            }
        });
        const resBody = await response.json();
        return { response, resBody };
    };

    async createArticle(token: string, title: string, desc: string, body: string, tagList: string[]) {
        const response = await this.request.post(`${this.baseUrl}/articles`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                "article": {
                    "title": `${title}`,
                    "description": `${desc}`,
                    "body": `${body}`,
                    "tagList": `${tagList}`
                }
            }
        });
        const resBody = await response.json();
        return { response, resBody };
    };
};