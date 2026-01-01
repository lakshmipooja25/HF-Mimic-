import { Locator, expect, Page } from "@playwright/test";
import { BaseModel } from "./base.model";
import projectConfig from "../../projectConfig";
import { CustomWorld } from "../support/world";

export class BasePage<D,M extends BaseModel>{
    readonly page: Page;
    readonly data:D;
    readonly model:M;
    constructor(page:Page, data:D, model:M){
        this.page = page;
        this.data = data;
        this.model = model;     
    }

    async clickElement(element:Locator){
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
        await element.click();
    }

    static async takeFullScreenshot(cw: CustomWorld){
        if(projectConfig.screenshot=== true && cw.page && !cw.page.isClosed()){
            const image = await cw.page?.screenshot({fullPage:true, timeout:15000});
            if(image)await cw.attach(image,"image/png");
            
        }
    }


}