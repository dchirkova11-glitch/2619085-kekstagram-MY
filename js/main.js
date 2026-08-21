import { getPhotos } from './api.js';
import { renderPhotos } from './render-photos.js';
import { showDataError } from './util.js';
import { initUploadForm } from './upload-form.js';
import { initFilters } from './filters.js';

getPhotos()
  .then((photos) => {
    renderPhotos(photos);
    initFilters(photos);
  })
  .catch(() => {
    showDataError();
  });

initUploadForm();
