import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let loginData;

before(() => {
  cy.fixture('loginData').then((data) => {
    loginData = data;
  });
});

Given('I open the login page', () => {
  cy.visit("/login");
});

When('I enter valid username and password', () => {
  cy.get('#username').type(loginData.valid.username);
  cy.get('#password').type(loginData.valid.password);
});

When('I enter invalid username and password', () => {
  cy.get('#username').type(loginData.invalid.username);
  cy.get('#password').type(loginData.invalid.password);
});

When('I only enter the password', () => {
  cy.get('#password').type(loginData.valid.password);
});

When('I click the login button', () => {
  cy.get('button[type="submit"]').click();
});

Then('I should see a success message', () => {
  cy.get('#flash').should('contain.text', 'You logged into a secure area!');
});

Then('I log out', () => {
  cy.get('a[href="/logout"]').click();
});

Then('I should see an invalid username message', () => {
  cy.get('#flash').should('contain.text', 'Your username is invalid!');
});

Then('I should see a generic error message', () => {
  cy.get('#flash').should('contain.text', 'Your username is invalid!');
});
