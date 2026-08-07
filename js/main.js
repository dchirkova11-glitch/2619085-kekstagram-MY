import { getPhoto } from './data.js';
import { renderPhotos } from './render-photos.js';
import './upload-form.js';

const photosData = getPhoto();
renderPhotos(photosData);
