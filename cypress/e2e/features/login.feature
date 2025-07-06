Feature: Login functionality testing

  Scenario: Successful login with valid credentials
    Given I open the login page
    When I enter valid username and password
    And I click the login button
    Then I should see a success message
    And I log out

  Scenario: Failed login with invalid credentials
    Given I open the login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an invalid username message

  Scenario: Login without username
    Given I open the login page
    When I only enter the password
    And I click the login button
    Then I should see a generic error message
