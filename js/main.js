import { getPhotos } from './api.js';
import { renderPhotos } from './render-photos.js';
import { showDataError } from './util.js';
import { initUploadForm } from './upload-form.js';

getPhotos()
  .then((photos) => {
    renderPhotos(photos);
  })
  .catch(() => {
    showDataError();
  });

initUploadForm();
