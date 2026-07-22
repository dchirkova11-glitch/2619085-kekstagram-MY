const modalElement = document.querySelector('.big-picture');
const imageElement = modalElement.querySelector('.big-picture__img img');
const likeCountElement = modalElement.querySelector('.likes-count');
const commentCountElement = modalElement.querySelector('.social__comment-shown-count');
const commentTotalElement = modalElement.querySelector('.social__comment-total-count');
const commentListElement = modalElement.querySelector('.social__comments');
const descriptionElement = modalElement.querySelector('.social__caption');
const commentCountBlockElement = modalElement.querySelector('.social__comment-count');
const commentsLoaderElement = modalElement.querySelector('.comments-loader');

const commentTemplate = modalElement.querySelector('.social__comment');
commentTemplate.remove();
const bodyElement = document.body;
const closeButtonElement = modalElement.querySelector('.big-picture__cancel');

let localComments;

const closeModal = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  commentCountBlockElement.classList.remove('hidden');
  commentsLoaderElement.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showModal = () => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentCountBlockElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.forEach(({ avatar, message, name }) => {
    const newCommentElement = commentTemplate.cloneNode(true);
    const avatarElement = newCommentElement.querySelector('.social__picture');
    avatarElement.src = avatar;
    avatarElement.alt = name;
    newCommentElement.querySelector('.social__text').textContent = message;
    fragment.appendChild(newCommentElement);
  });
  commentListElement.appendChild(fragment);
};

const renderModal = ({ url, description, comments, likes }) => {
  imageElement.src = url;
  imageElement.alt = description;
  descriptionElement.textContent = description;
  likeCountElement.textContent = likes;
  commentCountElement.textContent = comments.length;
  commentTotalElement.textContent = comments.length;
  localComments = [...comments];
  commentListElement.innerHTML = '';
  renderComments();
};

closeButtonElement.addEventListener('click', () => {
  closeModal();
});

export const openModal = (photo) => {
  showModal();
  renderModal(photo);
};
