import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class BaseFunctions {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}