import { openModal } from './big-picture.js';

const similarPhotosElement = document.querySelector('.pictures');
const similarPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderPhotos = (photos) => {

  const similarListFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, comments, likes }) => {
    const newPhotoElement = similarPhotosTemplate.cloneNode(true);
    const imageElement = newPhotoElement.querySelector('.picture__img');
    imageElement.src = url;
    imageElement.alt = description;
    newPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    newPhotoElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(newPhotoElement);

    newPhotoElement.addEventListener('click', () => {
      openModal({ url, description, comments, likes });
    });
  });
  similarPhotosElement.appendChild(similarListFragment);
};
