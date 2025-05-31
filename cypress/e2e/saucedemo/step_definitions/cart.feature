Feature: Shopping Cart

  Scenario: Add 1 product to cart
    Given I am logged in to Saucedemo
    When I add the product "Sauce Labs Bike Light" to the cart
    Then The shopping cart icon should show 1 item