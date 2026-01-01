const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

//***************************Generate time based directory report **********************
//Get current date or time
const now = new Date();
//Format month and year directory
const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July",
    "Aug", "Sep", "Oct", "Nov", "Dec"
];
const monthDir = `${monthNames[now.getMonth()]} ${now.getFullYear()}`
//Format Date and time for filename
function pad(n) {return n<10? '0' + n:n}
const day = pad(now.getDate());
const month = pad(now.getMonth()+1);
const year = pad(now.getFullYear());
let hour = now.getHours();
const minute = pad(now.getMinutes());
const second = pad(now.getSeconds());
const ampm = hour>=12 ?'PM':'AM'
hour = hour % 12 || 12;

const fileName = `${day}-${month}-${year}_${hour}_${minute}_${second}_${ampm}.html`
// create monthly directory if it does not exist
const reportsDir = path.join('reports', monthDir);
if(!fs.existsSync(reportsDir)){
    fs.mkdirSync(reportsDir,{recursive:true});
}
//set output file path
const outputFile = path.join(reportsDir, fileName);

//Check the existence of JSON report before generating html
/*Note: If you want to generate report even on failure endure test script does not end with non-zero code 
for test failures (only for actual crashes) */

const jsonReportPath = 'reports/report.json';
if(!fs.existsSync(jsonReportPath)){
    console.error('JSON report not found. Did the test run complete successfully');
    process.exit(1);
}

// Options for the report generation
const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json',
    output: outputFile,
    reportSuiteAsScenarios: true,
    launchReport: true,
    storeScreenshots: true,

    metadata: {
        "App Version":"1.0.0",
        "Test Environment" : "QA",
        "Browser" : "Chrome",
        "Platform": "Windows"
    }
};

reporter.generate(options);
console.log(`Report Generated: ${outputFile}`);