# Cypress Cucumber Login Tests

## 📌 Project Description

This project automates login functionality testing using Cypress and Cucumber (BDD) for the website [http://the-internet.herokuapp.com/login](http://the-internet.herokuapp.com/login). It covers scenarios for successful login, invalid credentials, and missing username using Gherkin syntax.

## 🛠 Technologies Used

- [Cypress](https://www.cypress.io/)
- [Cypress Cucumber Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- [Multiple Cucumber HTML Reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter)
- Node.js and JavaScript

## 📁 Project Structure

```
/DGII
├── cypress
│ ├── cucumber-json # JSON reports generated after test runs
│ │ └── login.cucumber.json
│ ├── downloads
│ ├── e2e
│ │ ├── features
│ │ │ └── login.feature # Gherkin test scenarios
│ │ └── spec.cy.js # Optional direct Cypress spec (not Cucumber)
│ ├── fixtures
│ │ └── example.json
│ ├── support
│ │ ├── step_definitions
│ │ │ └── loginSteps.js # Step implementations
│ │ ├── commands.js
│ │ └── e2e.js
├── node_modules
├── reports
│ └── cucumber-htmlreport.html # Visual test report (generated)
├── .gitignore
├── cucumber-html-report.js # Script to generate HTML report
├── cypress.config.js
├── package.json
├── package-lock.json
```

## 🚀 Installation & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/karina0724/dgii-automation-tests.git
   cd DGII
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run tests (choose one):

    - Open Cypress runner:
    ```
    npx cypress open
    ```

    - Headless run:
    ```
    npx cypress run
    ```

## 📊 Report Generation & Visualization
After running the tests:
Ensure the JSON output is generated under cypress/cucumber-json/ (configured via package.json).

1. Run the following command to generate the HTML report:
```
node cucumber-html-report.js
```

The report will be available at:
```
./reports/cucumber-htmlreport.html
```

2. Open the file in your browser to see:

- Summary of test runs
- Passed/failed steps with details
- Attached screenshots 

