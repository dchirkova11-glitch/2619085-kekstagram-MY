import { isValid, resetValidation } from './validation.js';

const formElement = document.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
const uploadInputElement = formElement.querySelector('.img-upload__input');
const closeFormElement = formElement.querySelector('.img-upload__cancel');
const bodyElement = document.body;

const hashtagsElement = formElement.querySelector('.text__hashtags');
const descriptionElement = formElement.querySelector('.text__description');

const openPreview = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePreview = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  formElement.reset();
  resetValidation();
  uploadInputElement.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape'
    && document.activeElement !== hashtagsElement
    && document.activeElement !== descriptionElement) {
    evt.preventDefault();
    closePreview();
  }
}

uploadInputElement.addEventListener('change', () => {
  openPreview();
});

closeFormElement.addEventListener('click', () => {
  closePreview();
});

formElement.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
