import { EFFECTS } from './effects-config.js';

const formElement = document.querySelector('.img-upload__form');

const effectLevelContainerElement = formElement.querySelector('.img-upload__effect-level');
const sliderElement = formElement.querySelector('.effect-level__slider');
const effectLevelValueElement = formElement.querySelector('.effect-level__value');

const effectsListElement = formElement.querySelector('.effects__list');
const imagePreviewElement = formElement.querySelector('.img-upload__preview img');

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECTS.none.min,
    max: EFFECTS.none.max,
  },
  start: EFFECTS.none.max,
  step: EFFECTS.none.step,
  connect: 'lower',
});

effectLevelContainerElement.classList.add('hidden');

const updateSliderOptions = (effect) => {
  const currentEffect = EFFECTS[effect];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  if (effect === 'none') {
    effectLevelContainerElement.classList.add('hidden');
  } else {
    effectLevelContainerElement.classList.remove('hidden');
  }
};

const applyEffect = (effect, value) => {
  effectLevelValueElement.value = value;
  const currentEffect = EFFECTS[effect];
  if (effect === 'none') {
    imagePreviewElement.style.filter = '';
  } else {
    imagePreviewElement.style.filter = `${currentEffect.filter}(${value}${currentEffect.unit})`;
  }
};

let currentEffectName = 'none';

sliderElement.noUiSlider.on('update', () => {
  const sliderValue = parseFloat(sliderElement.noUiSlider.get());
  applyEffect(currentEffectName, sliderValue);
});

effectsListElement.addEventListener('change', (evt) => {
  currentEffectName = evt.target.value;
  updateSliderOptions(currentEffectName);
});

export const resetEffects = () => {
  currentEffectName = 'none';
  updateSliderOptions(currentEffectName);
  applyEffect(currentEffectName, EFFECTS.none.max);
};
