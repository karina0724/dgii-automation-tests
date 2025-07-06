const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json', 
  reportPath: './reports/cucumber-htmlreport.html', 
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
      { label: 'Project', value: 'Login Test' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Time', value: new Date().toLocaleString() }
    ],
  }
});
