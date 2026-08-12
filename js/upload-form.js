import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { sendFormData } from './api.js';
import { Messages, showMessage } from './popups.js';

const formElement = document.querySelector('.img-upload__form');
const modalElement = formElement.querySelector('.img-upload__overlay');
const uploadInputElement = formElement.querySelector('.img-upload__input');
const closeFormElement = formElement.querySelector('.img-upload__cancel');
const bodyElement = document.body;
const hashtagsElement = formElement.querySelector('.text__hashtags');
const descriptionElement = formElement.querySelector('.text__description');
const submitButtonElement = formElement.querySelector('.img-upload__submit');

const isTextFieldFocused = () =>
  document.activeElement === hashtagsElement || document.activeElement === descriptionElement;

const canCloseModal = () => !document.querySelector('.error');

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
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFieldFocused() && canCloseModal()) {
    evt.preventDefault();
    closePreview();
  }
}

export const initUploadForm = () => {
  uploadInputElement.addEventListener('change', () => {
    openPreview();
  });

  closeFormElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    closePreview();
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!isValid()) {
      return;
    }

    submitButtonElement.disabled = true;
    const formData = new FormData(formElement);

    sendFormData(formData)
      .then(() => {
        closePreview();
        showMessage(Messages.SUCCESS);
      })
      .catch(() => {
        showMessage(Messages.ERROR);
      })
      .finally(() => {
        submitButtonElement.disabled = false;
      });
  });
};
