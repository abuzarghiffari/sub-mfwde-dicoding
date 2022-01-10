import './rest-item';

class RestList extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = '';
    this._data.forEach((item) => {
      const restItem = document.createElement('rest-item');
      restItem.value = item;
      this.appendChild(restItem);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
      <div class="blank" data-aos="fade-up">
        <img class="blank-image" src="./images/blank-search.svg" alt="blank-seach">
        <h3 class="title blank-title">${message}</h3>
      </div>
    `;
  }
}

customElements.define('rest-list', RestList);
