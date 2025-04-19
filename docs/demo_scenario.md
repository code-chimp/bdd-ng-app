```gherkin

  Scenario: Delete an existing task item from the task list
    Given a user is on the homepage
      And the page contains the following tasks:
        | TASK         |
        | do not touch |
        | complete me  |
        | filler task  |
    When the user clicks the delete button for the task labeled "filler task"
    Then card "filler task" should be removed from the todo list
      And card "do not touch" should be displayed in the todo list
      And card "complete me" should be displayed in the todo list

```

```typescript

When('the user clicks the delete button for the task labeled {string}', async (taskName: string) => {
  const deleteButton = page.getByRole('button', {
    name: `Delete task: ${taskName}`, // When unchecked, aria-label says "Mark as complete"
  });
  await deleteButton.click();
});

Then('card {string} should be removed from the todo list', async (task: string) => {
  await expect(page.getByText(task, { exact: true })).not.toBeVisible();
});

```
