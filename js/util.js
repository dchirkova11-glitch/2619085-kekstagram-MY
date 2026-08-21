const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

export const showDataError = () => {
  const dateErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dateErrorElement);

  setTimeout(() => {
    dateErrorElement.remove();
  }, 5000);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), timeoutDelay);
  };
};
