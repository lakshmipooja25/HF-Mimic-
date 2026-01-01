import { Given, When, Then, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { loginPage } from "../models/login/login.page";
import { loginData } from "../models/login/login.data";
import { CustomWorld } from "../support/world";
import loginJson from "../fixtures/login.data.json";
import { BasePage } from "../models/base.page";


let LoginPage: loginPage;
const loginTestData: loginData = loginJson as loginData;

BeforeStep(async function (this: CustomWorld) {
  if (this.page) {
    LoginPage = new loginPage(this.page, loginTestData);
  }
});


Given("I open an application", { timeout: 20000 }, async function (this: CustomWorld) {
  await this.page.goto("https://demo.guru99.com/V1/index.php");
});

When("I login using credentials", async function () {
  await LoginPage.enterCredentials();
});

Then("I validate the Page Title", async function () {
  await LoginPage.validatePageTitle();
});

