import { BasePage } from "../base.page";
import { expect, Page } from "@playwright/test";
import { loginData } from "./login.data";
import { loginModel } from "./login.model";

export class loginPage extends BasePage<loginData, loginModel> {
    constructor(page: Page, data: loginData) {
        const iFramemodel = new loginModel(page);
        super(page, data, iFramemodel);
    }

    async enterCredentials() {
        await this.model.username.fill(this.data.username);
        await this.model.password.fill(this.data.password);
        await this.model.submit.click({ timeout: 10000 });
    }

    async validatePageTitle() {
        try {
            const pageTitle = await this.page.title();
            expect(pageTitle).toContain("GTPL Bank Home Page");
            console.log(pageTitle);
        } catch (error: any) {
            console.error(`Mismatch in Page Title : ${error}`);
            throw new Error(error.message || String(error));
        }
    }
}