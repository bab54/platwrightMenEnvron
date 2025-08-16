import { test as base } from 'playwright-bdd';
import {LoginPage} from '../pages/loginPage'

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});
