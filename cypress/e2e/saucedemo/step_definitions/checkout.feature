Feature: Checkout

  Scenario: Checkout
    Given I have one item in the cart
    When I proceed to checkout and fill valid information
    Then I should be redirected to the Checkout Overview page
