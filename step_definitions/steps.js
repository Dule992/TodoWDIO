const { I } = inject();
// Add in your custom step files

Given('I open the Todo application', () => {
  I.amOnPage("https://todomvc.com/examples/angular2/");
  I.see("todos");
  I.dontSeeElement('.todo-count');
});

When ('I enter a {string} of new Task', (enterText) => {
  I.fillField('What needs to be done?', enterText);
  I.pressKey('Enter');
});

Then ('I should see {string} in Tasks list', (seeText) => {
  I.see(seeText, '.todo-list');
  I.see('1 item left', '.todo-count'); 
});

Then ('I update a {string} Task with {string}', (seeText1, seeText2) => {
  I.doubleClick('//label[contains(text(),\'' + seeText1 +'\')]');
  I.click('//input[@class=\'edit\']');
  I.pressKey(['Ctrl', 'A']);
  I.pressKey('Backspace');
  I.fillField('//input[@class=\'edit\']', seeText2);
  I.pressKey('Enter');
})

Then ('I delete a {string} Task', (seeText) => {
  I.click('//label[contains(text(),\'' + seeText +'\')]');
  I.click('//ul[1]/li[1]/div[1]/button[1]');
})

Then ('I should not see {string} in Task list', (seeText) => {
  I.dontSee(seeText);
})

Then ('I select a {string} to Done', (seeText) => {
  I.click('//label[contains(text(),\'' + seeText +'\')]');
  I.click('//ul[1]/li[1]/div[1]/input[1]');
})

Then ('I should see {string} with crossed out line', (seeText) => {
  I.see(seeText, '//li[@class=\'completed\']');
})

Then ('I grab the all tasks', async() => {
  let tasks =  await I.grabTextFrom('//ul[@class=\'todo-list\]');
  console.log(tasks);
})

Then ('I should see all task in Tasks list', (table) => {
  for(const record in table.rows){
    if(record<1){
      continue;
    }
    const cellValue = table.rows[record].cells;
    const task = cellValue[0].value;
    I.see(task);
    I.say(task);
  }
}) 