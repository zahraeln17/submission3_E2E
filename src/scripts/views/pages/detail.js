import UrlParser from '../../routes/url-parser';
import restaurantSource from '../../data/restaurantdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await restaurantSource.detail(url.id);
    const RestoContainer = document.querySelector('#resto');
    RestoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
  },
};

export default Detail;
