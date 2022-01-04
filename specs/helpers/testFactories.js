import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonInitiatorWithResto = async (Resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    Resto,
  });
};

export { createLikeButtonInitiatorWithResto };