import { BaseModel } from "../base.model";
import { Locator, Page } from "@playwright/test";

export class loginModel extends BaseModel{

    readonly username: Locator;
    readonly password: Locator;
    readonly submit: Locator;

    constructor(page:Page){
        super(page);
        this.username = this.page.locator('[name="uid"]');
        this.password = this.page.locator('[name="password"]');
        this.submit = this.page.locator('[type="submit"][name="btnLogin"]');
        //input[@type="submit" and @name="btnLogin"]
        
    }

}