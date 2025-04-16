import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const url = 'http://localhost:4200';
const homepageSelector = '.page-todo';
const todoInput = '.todo-input';
const todoButton = '.todo-button';
const todoItem = '.todo .todo-item';

Given('a user has navigated to the homepage', async () => {
  await page.goto(url);
  const locator = page.locator(homepageSelector);
  await expect(locator).toBeVisible();
});

When('the user adds {string} to the todo list using the input field', async (task: string) => {
  await page.fill(todoInput, task);
  await page.click(todoButton);
});

Then('card {string} should be displayed in the todo list', async (task: string) => {
  const text = await page.innerText(todoItem);
  expect(text).toBe(task);
});
