# Live Demo

This guide demonstrates implementing a new test scenario using our BDD setup with Cucumber.js and Playwright.

## Implementing a New Scenario

### 1. Define the Scenario

Add your scenario to `./tests/assurance/features/todo-manager.feature`:

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

### 2. Run with --dry-run Flag

Test your scenario without implementation:

```bash
npm run test:bdd:run ./tests/assurance/features/todo-manager.feature -- --dry-run --name "Delete an existing task item from the task list"
```

The output will show undefined steps and provide step definition snippets.

### 3. Implement Page Object Methods

Add new methods to `./tests/page-objects/todo-manager.page.ts`:

```typescript
export class TodoManagerPage {
  // ...existing code...

  /**
   * Gets the delete button for a specific task.
   * @param taskName - The name of the task to delete
   * @returns A Locator for the delete button
   */
  async getTaskDeleteButton(taskName: string) {
    return this.page.getByRole('button', {
      name: `Delete task: ${taskName}`,
    });
  }
}
```

### 4. Implement Step Definitions

Add new step definitions to `./tests/assurance/step-definitions/todo-manager.steps.ts`:

```typescript
When(
  'the user clicks the delete button for the task labeled {string}',
  async (taskName: string) => {
    const deleteButton = await todoManagerPage.getTaskDeleteButton(taskName);
    await deleteButton.click();
  },
);

Then('card {string} should be removed from the todo list', async (task: string) => {
  const taskLocator = await todoManagerPage.getTaskLocator(task);
  await expect(taskLocator).not.toBeVisible();
});
```

### 5. Run the Tests

Execute the scenario:

```bash
npm run test:bdd ./tests/assurance/features/todo-manager.feature -- --name "Delete an existing task item from the task list"
```

### 6. Review Test Reports

After execution, check the generated reports:

- Basic HTML report: `reports/bdd-report-basic.html`
- Enhanced report with screenshots: `reports/bdd-report-multiple/index.html`
- JSON data for CI/CD: `reports/bdd-report.json`
- JUnit XML for test runners: `reports/bdd-report.xml`

## Best Practices

1. **Page Objects**:

   - Keep selectors in page objects
   - Use semantic selectors (role, label, etc.)
   - Document methods with JSDoc comments

2. **Step Definitions**:

   - Keep steps atomic and reusable
   - Use clear, business-readable language
   - Avoid technical implementation details in feature files

3. **Scenarios**:

   - One behavior per scenario
   - Clear Given-When-Then structure
   - Use tables for data-driven tests

4. **Test Organization**:
   - Group related scenarios in feature files
   - Use tags for test categorization
   - Follow the test pyramid (more unit tests, fewer E2E tests)
