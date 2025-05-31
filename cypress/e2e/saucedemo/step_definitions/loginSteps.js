import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Saucedemo login page", () => {
  cy.visit("https://www.saucedemo.com");
});

When("I enter the username {string} and password {string}", (username, password) => {
  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
});

When("I click the login button", () => {
  cy.get("#login-button").click();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "inventory");
});

Then("Display Error Message", () => {
  cy.get('[data-test="error"]').should("contain", "Username and password do not match");
});