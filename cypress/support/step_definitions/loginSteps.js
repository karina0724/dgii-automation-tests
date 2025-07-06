import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const URL = 'http://the-internet.herokuapp.com/login';

Given('I open the login page', () => {
  cy.visit(URL);
});

When('I enter valid username and password', () => {
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('SuperSecretPassword!');
});

When('I enter invalid username and password', () => {
  cy.get('#username').type('wronguser');
  cy.get('#password').type('wrongpass');
});

When('I only enter the password', () => {
  cy.get('#password').type('SuperSecretPassword!');
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
