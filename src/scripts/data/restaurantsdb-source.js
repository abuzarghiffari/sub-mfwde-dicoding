/* eslint-disable prefer-promise-reject-errors */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantsDetailById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async showRestaurant(search) {
    const response = await fetch(search ? API_ENDPOINT.SEARCH(search) : API_ENDPOINT.LIST);
    const responseJson = await response.json();
    if (responseJson.restaurants.length > 0) {
      return Promise.resolve(responseJson.restaurants);
    }
    return Promise.reject(`${search} is not found`);
  }
}

export default RestaurantDbSource;
