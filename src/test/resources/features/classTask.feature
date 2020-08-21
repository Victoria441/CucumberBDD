@classtask
Feature: Class Task Step
  @test2
  Scenario: Testing youtube
    Given I open "youtube"
    Then I verify title is "YouTube"
    When I click "Trending" button
  @test2
  Scenario: Testing amazon
    Given I open "amazon"
    Then I verify title is "Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
    When I click "Gift Cards" button
  @test2
  Scenario: Testing chase bank
    Given I open "ChaseBank"
    Then I verify title is "Credit Card, Mortgage, Banking, Auto | Chase Online | Chase.com"
    When I click "ATM & branch" button