const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserElement = document.querySelector('.img-upload__input');
const previewElement = document.querySelector('.img-upload__preview img');
const effectsPreviewElements = document.querySelectorAll('.effects__preview');

export const initLocalImageLoader = (onImageLoaded) => {
  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    if (!file) {
      return;
    }

    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const fileUrl = URL.createObjectURL(file);

      previewElement.src = fileUrl;

      effectsPreviewElements.forEach((element) => {
        element.style.backgroundImage = `url(${fileUrl})`;
      });

      onImageLoaded();
    }
  });
};
