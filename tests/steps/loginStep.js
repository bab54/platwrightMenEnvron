import { createBdd } from 'playwright-bdd';
import{test} from '../fixtures/fixture'
 const { Given, When, Then } = createBdd(test);


Given('i navigate to BpBOnline website {string}', async ({loginPage}, url) => {
  // Step: Given i navigate to BpBOnline website "https://practice.bpbonline.com/"
  // From: tests\features\login.feature:7:5

  await loginPage.navigateToWebsite(url)
});

Given('i click on my account', async ({loginPage}) => {
  // Step: And i click on my account
  // From: tests\features\login.feature:8:5
  await loginPage.clickAccountButton()
});

Given('i enter my valid email {string}', async ({loginPage}, email) => {
  // Step: And i enter my valid email "qwerty@yahoo.com"
  // From: tests\features\login.feature:9:5
  await loginPage.enterEmail(email)
});

Given('i enter my valid password {string}', async ({loginPage}, password) => {
  // Step: And i enter my valid password "qwerty"
  // From: tests\features\login.feature:10:5
  await loginPage.enterPassword(password)
});

When('i click on sign in', async ({loginPage}) => {
  // Step: When i click on sign in
  // From: tests\features\login.feature:11:5
  await loginPage.clickSignInButton()
});

Then('I should be registered with a message of {string} showing', async ({loginPage}, message) => {
  // Step: Then I should be registered with a message of "My Account Information" showing
  // From: tests\features\login.feature:12:5
  await loginPage.VerifyMessage(message)
});
