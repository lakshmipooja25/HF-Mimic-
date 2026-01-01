import { After, AfterStep, BeforeAll, AfterAll, Before, ITestCaseHookParameter } from "@cucumber/cucumber";
import {CustomWorld, launchSharedBrowser, closeSharedBrowser} from "../support/world";
import stripAnsi from "strip-ansi";
import {BasePage} from "../models/base.page";

BeforeAll(async function(){
    await launchSharedBrowser();
})

Before (async function(){
    await this.newPage();
})

AfterStep(async function (this:CustomWorld, {result}) {
    if(this.page &&!this.page.isClosed()){
        const screenshot = await this.page.screenshot({fullPage:true});
        await this.attach(screenshot,"image/png");        
    }

    if(result?.status==="FAILED" && result.exception){
        const error = result.exception as any;
        const stackOrMessage = error.stack || error.message || JSON.stringify(error);
        // this stripAnsi removes terminal color codes and formating making the trace readable in HTML and test reports
        const cleanStack = stripAnsi(stackOrMessage);
        await this.attach(cleanStack, "text/plain");
    }
})

AfterAll(async function(){
    await closeSharedBrowser();
})