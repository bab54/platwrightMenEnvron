import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
const { Given, When, Then } = createBdd(test);



// Given('i navigate to BpBOnline website', async ({loginPage}) => {
//   // Step: Given i navigate to BpBOnline website
//   // From: tests\features\environment.feature:6:5
//   await loginPage.navigateToWebsite(process.env.URL)
//   console.log('URL:', process.env.URL)
// });

Given('i enter my valid email', async ({loginPage}) => {
  // Step: And i enter my valid email
  // From: tests\features\environment.feature:8:5
  await loginPage.enterEmail(process.env.EMAIL)
  console.log('URL:', process.env.URL)
  console.log('EMAIL:', process.env.EMAIL)
});

Given('i enter my valid password', async ({loginPage}) => {
  // Step: And i enter my valid password
  // From: tests\features\environment.feature:9:5
  await loginPage.enterPassword(process.env.PASSWORD)
  console.log('PASSWORD:', process.env.PASSWORD)
});


// Given('I enter the email address', async ({loginPage}) => {
//   // Step: And I enter the email address
//   // From: tests\features\environment.feature:17:5
//   await loginPage.enterEmailField(process.env.EMAIL)
//   console.log( 'URL:', process.env.URL)
//   console.log( 'EMAIL:',process.env.EMAIL)
// });

// Given('I enter the password', async ({loginPage}) => {
//   // Step: And I enter the password
//   // From: tests\features\environment.feature:18:5
//   await loginPage.enterPassword(process.env.PASSWORD)
//   console.log('PASSWORD:',process.env.PASSWORD)
// });




