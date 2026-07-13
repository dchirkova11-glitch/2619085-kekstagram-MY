const similarPhotosElement = document.querySelector('.pictures');
const similarPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderPhotos = (photos) => {

  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photosElement = similarPhotosTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = photo.url;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photosElement.querySelector('.picture__likes').textContent = photo.likes;
    similarListFragment.appendChild(photosElement);
  });
  similarPhotosElement.appendChild(similarListFragment);
};
