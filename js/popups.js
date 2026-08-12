const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

export const Messages = {
  SUCCESS: 'success',
  ERROR: 'error'
};

const templates = {
  [Messages.SUCCESS]: successTemplate,
  [Messages.ERROR]: errorTemplate
};

export const showMessage = (type) => {
  const element = templates[type].cloneNode(true);
  const buttonElement = element.querySelector(`.${type}__button`);
  document.body.append(element);

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMessage();
    }
  };

  const onOverlayClick = (evt) => {
    if (evt.target.classList.contains(type)) {
      closeMessage();
    }
  };

  function closeMessage() {
    element.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    element.removeEventListener('click', onOverlayClick);
    buttonElement.removeEventListener('click', closeMessage);
  }

  buttonElement.addEventListener('click', closeMessage);
  element.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onDocumentKeydown);
};
