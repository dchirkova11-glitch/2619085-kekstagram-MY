import { getPhoto } from './data.js';
import { renderPhotos } from './render-photos.js';

const photosData = getPhoto();
renderPhotos(photosData);
