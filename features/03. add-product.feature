@addproduct
Feature: Swag Labs - Add Product After Login
  Background: User on the home page after login
    Given I am on the login page
    When I am login with "standard_user" credential
    Then I should see home page
    

  Scenario: As a user, I want to add product to the cart
    Given I am on the home page
    When I add "<product>" to the cart and I click icon cart
    Then I should see cart page
    And I should see the list products

    Examples:
      | product                                       | 
      | add-to-cart-sauce-labs-backpack               | 
      | add-to-cart-sauce-labs-bike-light             | 
      | add-to-cart-sauce-labs-bolt-t-shirt           | 
      | add-to-cart-sauce-labs-fleece-jacket          | 
      | add-to-cart-sauce-labs-onesie                 | 
    
    



