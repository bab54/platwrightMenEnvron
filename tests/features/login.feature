Feature: Login

    As a user of BpBOnline 
    i want to log into my account
    So i can buy some things
    Scenario: Valid Login
    Given  i navigate to BpBOnline website "https://practice.bpbonline.com/"
    And  i click on my account
    And i enter my valid email "qwerty@yahoo.com"
    And i enter my valid password "qwerty"
    When  i click on sign in
    Then  I should be registered with a message of "My Account Information" showing