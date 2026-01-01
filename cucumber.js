module.exports = {
  default: [
    "--require-module ts-node/register ",
    "--require e2e/support/world.ts",
    "--require e2e/stepDefinitions/**/*.ts",
    "--require e2e/stepDefinitions/hooks.ts",
    "--format html:reports/cucumber_report.html",
    "--format json:reports/report.json",
    "e2e/features/**/*.feature"
  ].join(" ")
};