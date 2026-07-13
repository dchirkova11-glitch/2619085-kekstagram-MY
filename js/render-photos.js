const similarPhotosElement = document.querySelector('.pictures');
const similarPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderPhotos = (photos) => {

  const similarListFragment = document.createDocumentFragment();

  photos.forEach((picture) => {
    const photosElement = similarPhotosTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = picture.url;
    photosElement.querySelector('.picture__comments').textContent = picture.comments.length;
    photosElement.querySelector('.picture__likes').textContent = picture.likes;
    similarListFragment.appendChild(photosElement);
  });
  similarPhotosElement.appendChild(similarListFragment);
};
