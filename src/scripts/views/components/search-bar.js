class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set searchEvent(event) {
    this._searchEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <div class="input" data-aos="fade-up">
          <input id="searchElement" type="search" placeholder="Search Restaurants">
          <button id="searchButtonElement" class="btn" type="submit" tabindex="0">Search</button>
        </div> 
      `;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
