import '../components/rest-list';
import '../components/blank-page';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createSkeletonRestaurantTemplate } from '../templates/template.creator';

const Fovorite = {
  async render() {
    return `
      <section tabindex="0" class="favorite" id="skip-area">
        <div class="container" id="container">
          <h1 class="title" data-aos="fade-up">Favorite Restaurants</h1>
          <rest-list>
            ${createSkeletonRestaurantTemplate(20)}
          </rest-list>
        </div> 
      </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsTemplate = document.querySelector('rest-list');
    if (restaurant.length > 0) {
      restaurantsTemplate.value = restaurant;
    } else {
      document.querySelector('#container').innerHTML = '<blank-page></blank-page>';
    }
  },
};

export default Fovorite;
