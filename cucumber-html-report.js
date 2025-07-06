const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: './reports/cucumber-html-report.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '114',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress Cucumber Login Tests' },
      { label: 'Execution Date', value: new Date().toLocaleString() },
    ],
  },
  displayDuration: true,
  openReportInBrowser: true,
  saveCollectedJSON: true,
  displayReportTime: true,
  disableLog: false,
  storeScreenshots: true, 
  screenshotsDirectory: 'cypress/screenshots',
  noInlineScreenshots: false,
});
