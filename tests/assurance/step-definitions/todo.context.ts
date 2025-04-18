import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const url = 'http://localhost:4200';

Given('a user is on the homepage', async () => {
  await page.goto(url);
});

Given('the page contains the following tasks:', async (table: DataTable) => {
  const data = table.hashes();
  const input = page.getByPlaceholder('Add a new task');
  const button = page.getByRole('button', { name: 'Add Task' });

  for (const row of data) {
    await input.fill(row['TASK']);
    await button.click();
  }
});

When('the user adds {string} to the todo list using the input field', async (task: string) => {
  await page.getByPlaceholder('Add a new task').fill(task);
  await page.getByRole('button', { name: 'Add Task' }).click();
});

When('the user clicks the checkbox for the task labeled {string}', async (taskName: string) => {
  return 'pending';
});

Then('card {string} should be displayed in the todo list', async (task: string) => {
  const text = page.getByText(task, { exact: true });
  await expect(text).toBeVisible();
});

Then('the task labeled {string} should be marked as completed', async (taskName: string) => {
  const checkbox = page.getByRole('checkbox', {
    name: `Mark ${taskName} as complete`, // When unchecked, aria-label says "Mark as complete"
  });

  await expect(checkbox).toBeChecked();
});

Then('the task labeled {string} should not be marked as completed', async (taskName: string) => {
  const checkbox = page.getByRole('checkbox', {
    name: `Mark ${taskName} as complete`, // When unchecked, aria-label says "Mark as complete"
  });

  await expect(checkbox).not.toBeChecked();
});
