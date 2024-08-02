Feature: Shopping Experience - Adding Items to Cart and Completing Checkout

  Background:
    Given I am Signed in as a 'standard' user
    Given I am on the E-commerce page

  Scenario: Purchase an item and confirm checkout completion
    When I add a product to the cart
    When I Navigate to the shopping cart
    Then I should see the item in the cart
    When I Initiate the checkout process
    When I complete the checkout process
    Then I should Verify the presence of the checkout success message
