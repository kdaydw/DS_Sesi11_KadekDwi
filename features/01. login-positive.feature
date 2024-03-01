@login
Feature: Swag Labs - Login - Positive

  @positive
  Scenario: As a user, I want to login successfully
    Given I am on the login page
    When I am login with "<username>" credential
    Then I should see home page

    Examples:
      | username                |       
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |
      | error_user              |
      | visual_user             | 


    
    


