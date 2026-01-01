Installation packages/dependencies
1. Main Dependencies
    BDD Test Runner: Installs cuucmber BDD Test runner for JS/TS
        npm install @cucumber/cucumber
    Browser automation: Install playwright for browser automation testing
        npm install @playwright/test

2. Typescript & Node types
    Typescript Compiler: Installs typescript compiler
        npm install typescript --save-dev
    Run Typescript files: Allows running TS files directly into Node.js
        npm install ts-node --save-dev
    Node.js: provides Node.js definitions to TS
        npm install @types/node --save-dev

3. Cucumber HTML reporter
    npm install cucumber-html-reporter --save-dev

4. ansiStrip - Utility Package (optional): Removes ANSI color codes from error stack traces for cleaner reports
    npm install strip-ansi --save-dev

5. Playwright Browsers (optional): Installs actual browsers like Chromium firefox, Webkit for playwright
    npx playwright install


Execution
1. Run the execution in cucumber: npx cucumber-js
2. Generate the cucumber report: npm run cucumber:report
3. To execute and generate report: npm run cucumber:test
    
    