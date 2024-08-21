import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { Signup_Page } from '../../page_objects/signup_page';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let SignupPage: Signup_Page;

setDefaultTimeout(30 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  SignupPage = new Signup_Page(page);
});

AfterAll(async () => {
  if (page) await page.close();
  if (context) await context.close();
  if (browser) await browser.close();
});