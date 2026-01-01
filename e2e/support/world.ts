import { setWorldConstructor, IWorldOptions, World, IWorld } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { loginData } from "../models/login/login.data";

type Model = any; // TODO: Replace 'any' with the actual type or import the correct Model type
let sharedBrowser: Browser;


export class CustomWorld extends World {
    browser!: Browser;
    page!: Page;
    model!: Model;
    data!: loginData
    attach: IWorld['attach'];

    constructor(options: IWorldOptions) {
        super(options);
        this.attach = options.attach;
    }

    async newPage() {
        this.page = await sharedBrowser.newPage();
    }
}
setWorldConstructor(CustomWorld);

export async function launchSharedBrowser() {
    sharedBrowser = await chromium.launch({ headless: false, slowMo: 100, timeout: 20000 });
}

export async function closeSharedBrowser() {
    await sharedBrowser.close();
}

