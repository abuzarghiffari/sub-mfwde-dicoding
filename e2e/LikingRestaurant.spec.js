const assert = require('assert');

Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const blankPageText = 'Your Favorite Restaurant is Still Empty';

Scenario('liking one restaurant', async ({ I }) => {
  I.see(blankPageText, '#container');

  I.amOnPage('/');
  I.seeElement('.cards');
  const firstRestaurantCard = locate('.card-button').first();
  const firstRestaurantButton = await I.grabTextFrom(firstRestaurantCard);
  I.click(firstRestaurantCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards');
  const likedRestaurantTitle = await I.grabTextFrom('.card-button');

  assert.strictEqual(firstRestaurantButton, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card-button');
  I.click(locate('.card-button').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards');
  const firstLikedRestaurantCard = locate('.card-button').first();
  I.click(firstLikedRestaurantCard);

  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.see(blankPageText, '#container');
});
