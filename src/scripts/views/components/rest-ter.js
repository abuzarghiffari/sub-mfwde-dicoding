class RestTer extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="text">
            <a class="logo" href="#/home">Foody</a> <br>
            <small class="card-text">Get the latest info from our social media</small>
            <ul class="sosmed">
              <li><a href="#"><img src="./images/ig.svg" alt="instagram"></a></li>
              <li><a href="#"><img src="./images/twt.svg" alt="twitter"></a></li>
              <li><a href="#"><img src="./images/fb.svg" alt="facebook"></a></li>
            </ul>
          </div>
          <ul class="menu-list">
            <li class="menu-title">Menu</li>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/abuzarghiffari/" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
        </div>
        <div class="copyright">
          <small class="card-text">Copyright &copy; 2021 Foody</small>
        </div>
      </footer>
    `;
  }
}

customElements.define('rest-ter', RestTer);
