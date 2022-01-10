class RestBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <nav>
        <div class="container">
          <a class="logo" href="#/home">Foody</a>
          <button aria-label="hamburger-menu" class="menu-toggle" id="hamburgerButton">
            <i class="fas fa-equals"></i>
          </button>
          <ul id="navigationDrawer" class="menu-list">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/abuzarghiffari/" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('rest-bar', RestBar);
