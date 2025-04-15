const { Before, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setDefaultTimeout(60000);

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
});

AfterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
  await global.context.close();
});
