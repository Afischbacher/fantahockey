/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class AppPage {

  constructor() {
    // Forces default language
    browser.executeScript(() => localStorage.setItem('language', 'en-US'));
  }
}
