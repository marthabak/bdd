Feature: Login to Saucedemo

  Scenario: Successful login with valid credentials
    Given I open the Saucedemo login page
    When I enter the username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be redirected to the inventory page

  Scenario: Unsuccessful login with invalid credentials
    Given I open the Saucedemo login page
    When I enter the username "invaliduser" and password "secret_sauce"
    And I click the login button
    Then Display Error Message