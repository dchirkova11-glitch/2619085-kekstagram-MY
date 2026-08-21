import { openModal } from './big-picture.js';

const similarPhotosElement = document.querySelector('.pictures');
const similarPhotosTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localPhotos;

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderPhotos = (photos) => {
  clear();
  localPhotos = [...photos];
  const similarListFragment = document.createDocumentFragment();
  photos.forEach(({ id, url, description, comments, likes }) => {
    const newPhotoElement = similarPhotosTemplate.cloneNode(true);
    const imageElement = newPhotoElement.querySelector('.picture__img');
    imageElement.src = url;
    imageElement.alt = description;
    newPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    newPhotoElement.querySelector('.picture__likes').textContent = likes;

    newPhotoElement.dataset.id = id;
    similarListFragment.appendChild(newPhotoElement);

  });
  similarPhotosElement.appendChild(similarListFragment);
};

similarPhotosElement.addEventListener('click', (evt) => {
  const cardElement = evt.target.closest('.picture');
  if (cardElement) {
    const currentId = Number(cardElement.dataset.id);

    const currentPhoto = localPhotos.find((item) => item.id === currentId);
    openModal(currentPhoto);
  }
});
