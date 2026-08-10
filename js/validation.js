const MAX_DESCRIPTION = 140;
const HASHTAG_FORMULA = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAGS_MAX = 5;

const formElement = document.querySelector('.img-upload__form');
const descriptionElement = formElement.querySelector('.text__description');
const hashtagsElement = formElement.querySelector('.text__hashtags');

const validation = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(/\s+/);

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value.trim());
  return hashtags.every((word) => HASHTAG_FORMULA.test(word));
};

const checkHashtagsNumber = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value.trim());
  return hashtags.length <= HASHTAGS_MAX;
};

const checkUniqueHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value.trim());
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

validation.addValidator(
  descriptionElement,
  checkDescription,
  `Длина комментария не может составлять больше ${MAX_DESCRIPTION} символов`
);

validation.addValidator(
  hashtagsElement,
  checkHashtags,
  'Хэштег должен начинаеться с символа #, не быть пустым, содержать только буквы и цифры и не может содержать больше 20 символов включая #',
  1,
  true
);

validation.addValidator(
  hashtagsElement,
  checkHashtagsNumber,
  `Количество хештегов не должно превышать ${HASHTAGS_MAX} штук`,
  3,
  true
);

validation.addValidator(
  hashtagsElement,
  checkUniqueHashtags,
  'Хештеги должны быть уникальными',
  2,
  true
);

export const isValid = () => validation.validate();
export const resetValidation = () => {
  validation.reset();
};
