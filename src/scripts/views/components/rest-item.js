import CONFIG from '../../globals/config';

class RestItem extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="cards" data-aos="fade-up">
        <div class="image-area">
          <img class="lazyload card-image" data-src="${CONFIG.BASE_IMAGE_URL}${this._data.pictureId}" alt="${this._data.name}">
          <small class="card-city" tabindex="0">${this._data.city}</small>
        </div>
        <div class="card-info">
          <small class="card-rating"><img class="star" src="./images/start.svg" alt="star-rating">${this._data.rating}</small>
          <p class="card-name">${this._data.name}</p>
          <small class="card-text">${this._data.description}</small>
          <a class="card-button btn" tabindex="0" href="#/detail/${this._data.id}">Detail</a>
        </div>
      </div>
    `;
  }
}

customElements.define('rest-item', RestItem);
