// Generated from: tests\features\login.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Login', () => {

  test('Valid Login', async ({ Given, loginPage, And, When, Then }) => { 
    await Given('i navigate to BpBOnline website "https://practice.bpbonline.com/"', null, { loginPage }); 
    await And('i click on my account', null, { loginPage }); 
    await And('i enter my valid email "qwerty@yahoo.com"', null, { loginPage }); 
    await And('i enter my valid password "qwerty"', null, { loginPage }); 
    await When('i click on sign in', null, { loginPage }); 
    await Then('I should be registered with a message of "My Account Information" showing', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given i navigate to BpBOnline website \"https://practice.bpbonline.com/\"","stepMatchArguments":[{"group":{"start":32,"value":"\"https://practice.bpbonline.com/\"","children":[{"start":33,"value":"https://practice.bpbonline.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And i click on my account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And i enter my valid email \"qwerty@yahoo.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"qwerty@yahoo.com\"","children":[{"start":24,"value":"qwerty@yahoo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And i enter my valid password \"qwerty\"","stepMatchArguments":[{"group":{"start":26,"value":"\"qwerty\"","children":[{"start":27,"value":"qwerty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When i click on sign in","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should be registered with a message of \"My Account Information\" showing","stepMatchArguments":[{"group":{"start":41,"value":"\"My Account Information\"","children":[{"start":42,"value":"My Account Information","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end