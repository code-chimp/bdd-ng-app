Feature: todo
  As a user
  I want to add an item to my todo list
  So that I can keep track of my tasks

  Scenario: Add an item to the todo list
    Given a user has navigated to the homepage
    When the user adds "test" to the todo list using the input field
    Then card "test" should be displayed in the todo list
