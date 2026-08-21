import { renderPhotos } from './render-photos.js';
import { debounce } from './util.js';

const RANDOM_LIMIT = 10;
const DEBOUNCE_DELAY = 500;
const RANDOM_FACTOR = 0.5;

const FilterType = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

const filtersContainerElement = document.querySelector('.img-filters');
const filtersFormElement = filtersContainerElement.querySelector('.img-filters__form');

let allPhotos;
let currentFilter = FilterType.DEFAULT;

const FiltersActions = {
  [FilterType.DEFAULT]: () => allPhotos,
  [FilterType.DISCUSSED]: () => [...allPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [FilterType.RANDOM]: () => [...allPhotos].sort(() => Math.random() - RANDOM_FACTOR).slice(0, RANDOM_LIMIT)
};

export const showFilters = () => {
  filtersContainerElement.classList.remove('img-filters--inactive');
};

const toggleActiveButton = (clickedButton) => {
  const activeButton = filtersFormElement.querySelector('.img-filters__button--active');
  if (activeButton) {
    activeButton.classList.remove('img-filters__button--active');
  }
  clickedButton.classList.add('img-filters__button--active');
};

export const initFilters = (photos) => {
  allPhotos = [...photos];
  showFilters();
  renderPhotos(allPhotos);
};

const debouncedRenderPhotos = debounce(renderPhotos, DEBOUNCE_DELAY);

filtersFormElement.addEventListener('click', (evt) => {
  const button = evt.target.closest('.img-filters__button');
  if (button) {
    if (currentFilter === button.id) {
      return;
    }
    currentFilter = button.id;
    toggleActiveButton(button);
    debouncedRenderPhotos(FiltersActions[currentFilter]());
  }
});
