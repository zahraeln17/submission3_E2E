import restaurantSource from '../../data/restaurantdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
        <div class="content" tabindex="0">
            <h2 class="content__heading">Home</h2>
            <div id="restos" class="list">

            </div>
        </div>
    `;
  },

  async afterRender() {
    const restos = await restaurantSource.home();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default home;
