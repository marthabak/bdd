import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I have one item in the cart", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.contains(".inventory_item", "Sauce Labs Bike Light")
    .find("button")
    .click();
  cy.get(".shopping_cart_link").click();
});

When("I proceed to checkout and fill valid information", () => {
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type("Bukayo");
  cy.get('[data-test="lastName"]').type("Saka");
  cy.get('[data-test="postalCode"]').type("60215");
  cy.get('[data-test="continue"]').click();
});

Then("I should be redirected to the Checkout Overview page", () => {
  cy.url().should("include", "checkout-step-two");
  cy.contains("Checkout: Overview").should("exist");
});
