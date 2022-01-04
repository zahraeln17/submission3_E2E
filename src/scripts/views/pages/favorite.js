import FavoriteRestoIdb from '../../data/favoritedb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Favorite</h2>
        <div id="restos" class="list">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    if (restos.length > 0) {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      this._renderEmpty();
    }
  },

  _renderEmpty() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML += `
      <p tabindex="0" style="text-align: center;">Data Kosong</p>
    `;
  },
};

export default favorite;
