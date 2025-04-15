Feature: todo
  As a user
  I want to add an item to the todo list
  So that I can organize my tasks

  Scenario: Add item to the todo list
    Given a user has navigated to the homepage
    When the user add "test" to the todo list using the webUI
    Then card "test" should be visible in the todo list
