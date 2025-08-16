
Feature: Enviroment Login

    To be able to login as qa, pro or dev

    Scenario: Valid Login
    Given  i navigate to BpBOnline website "https://practice.bpbonline.com/"
    And  i click on my account
    And i enter my valid email 
    And i enter my valid password 
    When  i click on sign in
    Then  I should be registered with a message of "My Account Information" showing