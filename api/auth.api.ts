import { APIRequestContext } from "@playwright/test";
import { BaseApi } from "../api/base.api";

export class AuthApi extends BaseApi {

    async signUp(email: string, password: string, username: string) {
        const random = Date.now();
        const response = await this.request.post(`${this.baseUrl}/users`, {
            data: {
                "user": {
                    "email": `thucute${random}@mailsac.com`,
                    "password": `${password}`,
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
        //parse json
        const resBody = await response.json();
        return resBody.user.token;
    }
};