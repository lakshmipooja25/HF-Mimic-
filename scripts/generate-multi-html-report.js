const reporter = require('multiple-cucumber-html-reporter');
const { platform } = require('node:os');

reporter.generate({
    jsonDir:'reports',
    reportPath:'reports/multi-html',
    displayDuration:true,
    openReportInBrowser: true,
    metadata:{
        browser:{name:'chrome', version:'xx'},
        device:'Local test machine',
        platform: {name:'windows',version:'10'}
    }
})