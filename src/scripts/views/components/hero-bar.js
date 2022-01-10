class HeroBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="hero" aria-label="hero-image">
        <div class="container">
            <div class="hero-content">
              <h1>A Trendy Restaurants</h1>
              <a tabindex="0" href="#skip-area" class="btn explore">Explore</a>
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-bar', HeroBar);
