/* eslint-disable no-plusplus */
import CONFIG from '../../globals/config';

const createReviewCardItem = (review) => `
  <div class="review-card" tabindex="0">
    <h6 tabindex="0">${review.name}</h6>
    <small tabindex="0">${review.date}</small>
    <p tabindex="0"><q>${review.review}</q></p>
  </div>
`;

const createCustomerReviewCardsTemplate = (reviews) => {
  let customerReviewCards = '';
  reviews.forEach((review) => {
    customerReviewCards += createReviewCardItem(review);
  });

  return customerReviewCards;
};

const listMenuMaker = (menus) => {
  let listMenu = '';

  menus.forEach((menu) => {
    listMenu += `<li>${menu.name}</li>`;
  });

  return listMenu;
};

const createRestoDetailTemplate = (resto) => `
<img tabindex="0" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}" class="resto-detail__image">
<h2 tabindex="0" class="resto-detail__name">${resto.name}</h2>
<h3 tabindex="0" class="resto-detail__city" style="text-align: center">🌐: ${resto.city}</h3>
<p tabindex="0" class="resto-detail__address" style="text-align: center">🏠: ${resto.address}</p>
<p tabindex="0" class="resto-detail__description">${resto.description}</p>
<div class="resto-detail__menus">
  <div class="foods-menu" tabindex="0">
    <h4 tabindex="0">Menu Makanan:</h4>
    <ul tabindex="0">${listMenuMaker(resto.menus.foods)}</ul>
  </div>
  <div class="drinks-menu" tabindex="0">
    <h4 tabindex="0">Menu Minuman:</h4>
    <ul tabindex="0">${listMenuMaker(resto.menus.drinks)}</ul>
  </div>
</div>
<div class="resto-detail__reviews">
  <h5 tabindex="0">what customers say?</h5>
  <div tabindex="0" class="resto-detail__reviews-container">
    ${createCustomerReviewCardsTemplate(resto.customerReviews)}
  </div>
</div>
<div tabindex="0" class="resto-detail__add-review">
  <h5 tabindex="0">Write a review</h5>
  <review-bar></review-bar>
</div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="list_item">
      <img class="list_item_thumb" tabindex="0" src="${CONFIG.BASE_IMAGE_URL}/${resto.pictureId}" alt="${resto.name}">
      <div class="city" tabindex="0">${resto.city}</div>
      <div class="list_item_content">
        <p tabindex="0" class="list_item_rating">
            Rating : 
            <p href="#" class="list_item_rating_value" tabindex="0">${resto.rating}</p>
        </p>
        <h1 tabindex="0" class="list_item_title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
        <div tabindex="0" class="list_item_desc">${resto.description.slice(0, 150)}...</div>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like" tabindex="0">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like" tabindex="0">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
