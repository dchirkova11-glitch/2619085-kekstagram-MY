const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const formElement = document.querySelector('.img-upload__form');
const scaleSmallerElement = formElement.querySelector('.scale__control--smaller');
const scaleBiggerElement = formElement.querySelector('.scale__control--bigger');
const scaleValueElement = formElement.querySelector('.scale__control--value');
const imagePreviewElement = formElement.querySelector('.img-upload__preview img');

let currentScaleValue = DEFAULT_SCALE;

const scaleImage = (value) => {
  scaleValueElement.value = `${value}%`;
  imagePreviewElement.style.transform = `scale(${value / 100})`;
};

scaleSmallerElement.addEventListener('click', () => {
  const newValue = currentScaleValue - SCALE_STEP;
  if (newValue >= MIN_SCALE) {
    currentScaleValue = newValue;
    scaleImage(currentScaleValue);
  }
});

scaleBiggerElement.addEventListener('click', () => {
  const newValue = currentScaleValue + SCALE_STEP;
  if (newValue <= MAX_SCALE) {
    currentScaleValue = newValue;
    scaleImage(currentScaleValue);
  }
});

export const resetScale = () => {
  currentScaleValue = DEFAULT_SCALE;
  scaleImage(DEFAULT_SCALE);
};
