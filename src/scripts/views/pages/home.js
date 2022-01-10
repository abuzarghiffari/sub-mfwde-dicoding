/* eslint-disable no-use-before-define */
import '../components/hero-bar';
import '../components/search-bar';
import '../components/rest-list';
import RestaurantsDbSource from '../../data/restaurantsdb-source';
import { createSkeletonRestaurantTemplate } from '../templates/template.creator';

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <section tabindex="0" class="rest-area" id="skip-area">
        <div class="container">
          <h2 class="title" data-aos="fade-up">Explore Your Restaurants</h2>
          <search-bar></search-bar>
          <rest-list>
            ${createSkeletonRestaurantTemplate(20)}
          </rest-list>
        </div> 
      </section>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantsDbSource.listRestaurants();
    const restaurantsTemplate = document.querySelector('rest-list');
    const searchElement = document.querySelector('search-bar');
    restaurantsTemplate.value = restaurant;

    const onButtonSearchClicked = async () => {
      try {
        const result = await RestaurantsDbSource.showRestaurant(searchElement.value);
        renderResult(result);
      } catch (message) {
        fallbackResult(message);
      }
    };
    const renderResult = (results) => {
      restaurantsTemplate.value = results;
    };
    const fallbackResult = (message) => {
      restaurantsTemplate.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
  },
};

export default Home;
