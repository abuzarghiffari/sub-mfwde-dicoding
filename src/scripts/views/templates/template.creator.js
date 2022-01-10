const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="cards">
        <div class="image-area">
          <img class="card-image" src="./images/placeholder.png" alt="skeleton">
          <small class="card-city skeleton">Lorem</small>
        </div>
        <div class="card-info">
          <small class="skeleton">Lorem</small>
          <p class="skeleton">Lorem ipsum dolor sit</p>
          <small class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
          <a class="card-button btn skeleton">Detail</a>
        </div>
      </div>
  `;
  }
  return template;
};

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonRestaurantTemplate,
};
