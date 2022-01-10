import CONFIG from '../../globals/config';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

class RestDetail extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
    this._likeButtonInitiator();
  }

  async _likeButtonInitiator() {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: this._data,
    });
  }

  _render() {
    this.innerHTML = `
      <div class="detail-area" data-aos="fade-up">
        <h1 class="title">${this._data.name}</h1>
        <div class="image-area">
          <img class="lazyload card-image" data-src="${CONFIG.BASE_IMAGE_URL}${this._data.pictureId}" alt="${this._data.name}">
          <div id="likeButtonContainer"></div>
        </div>
        <div class="description">
          <p class="sub-title">Description</p> 
          <p class="paragraph">${this._data.description}</p>
        </div>
        <div class="info">
          <div class="information">
            <p class="sub-title">Informations</p>
              <p class="menu-title">City</p>
              <p class="paragraph">${this._data.city}</p>
              <p class="menu-title">Address</p>
              <p class="paragraph">${this._data.address}, ${this._data.city}</p>
              <p class="menu-title">Rating</p>
              <p class="paragraph">${this._data.rating}</p>
              <p class="menu-title">Categories</p>
              <div class="category">
                ${this._data.categories.map((category) => `<p class="paragraph">${category.name}</p>`).join(' ')}
              </div>
          </div>
          <div class="menu">
            <p class="sub-title">Menus</p>
            <div class="menu-area">
              <div class="detail-menu">
                <p class="menu-title">Foods</p>
                <ul class="menu-list">
                  ${this._data.menus.foods.map((food) => `<li class="paragraph">${food.name}</li>`).join(' ')}
                </ul>
              </div>
              <div class="detail-menu">
                <p class="menu-title">Drinks</p>
                <ul class="menu-list">
                  ${this._data.menus.drinks.map((drink) => `<li class="paragraph">${drink.name}</li>`).join(' ')}
                </ul>
              </div>
            </div>
          </div>    
        </div>
        <div class="review">
          <p class="sub-title">Reviewers</p>
            ${this._data.customerReviews.map((review) => `
              <div class="review-container">
                <div class="review-image">
                  <img src="./images/profile.svg" alt="Profile">
                </div>
                <div class="review-body">
                  <p class="menu-title">${review.name}</p>
                  <small class="review-date-post">${review.date}</small>
                  <p class="paragraph">${review.review}</p>
                </div>
              </div>
            `).join('')}
        </div>
      </div>
    `;
  }
}

customElements.define('rest-detail', RestDetail);
