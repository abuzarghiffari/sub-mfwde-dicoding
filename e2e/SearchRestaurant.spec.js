Feature('Search Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('search restaurant existent', async ({ I }) => {
  const searchText = 'Melting Pot';
  I.seeElement('#searchElement');
  I.fillField('Search Restaurants', searchText);
  I.click('#searchButtonElement');
  I.see(searchText, '.card-name');
});

Scenario('search restaurant non-existent', async ({ I }) => {
  const searchText = 'Lorem Ipsum';
  I.seeElement('#searchElement');
  I.fillField('Search Restaurants', searchText);
  I.click('#searchButtonElement');
  I.see(`${searchText} is not found`, 'h3');
});
