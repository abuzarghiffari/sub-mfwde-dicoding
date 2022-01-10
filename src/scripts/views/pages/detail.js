import '../components/rest-detail';
import UrlParser from '../../routes/url-parser';
import RestaurantsDbSource from '../../data/restaurantsdb-source';

const Detail = {
  async render() {
    return `
      <section tabindex="0" class="detail" id="skip-area">
        <div class="container">
          <rest-detail></rest-detail>
        </div> 
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsDbSource.restaurantsDetailById(url.id);
    const restaurantsDetail = document.querySelector('rest-detail');
    restaurantsDetail.value = restaurant;
  },
};

export default Detail;
