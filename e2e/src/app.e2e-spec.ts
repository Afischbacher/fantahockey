import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display settings page', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/settings');
    page.login();
  });

});
