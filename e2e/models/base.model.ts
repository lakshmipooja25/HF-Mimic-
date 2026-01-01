import { Page } from "@playwright/test";
export abstract class BaseModel {
  readonly page: Page;
  protected constructor(page:Page){
    this.page = page;
  }
}