/* eslint-disable no-var */
import type { Browser, BrowserContext, Page } from '@playwright/test';

declare global {
  var browser: Browser;
  var context: BrowserContext;
  var page: Page;
}

export {};
