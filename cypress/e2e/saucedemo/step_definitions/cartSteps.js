import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in to Saucedemo", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.url().should("include", "inventory");
});

When("I add the product {string} to the cart", (productName) => {
  cy.contains(".inventory_item", productName)
    .find("button")
    .click();
});

Then("The shopping cart icon should show 1 item", () => {
  cy.get(".shopping_cart_badge").should("have.text", "1");
});
