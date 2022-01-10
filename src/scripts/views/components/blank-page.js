class BlankPage extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="blank" data-aos="fade-up">
        <img class="blank-image" src="./images/blank-page.svg" alt="blank-page">
        <h2 class="title blank-title">Your Favorite Restaurant is Still Empty</h2>
      </div>
    `;
  }
}

customElements.define('blank-page', BlankPage);
