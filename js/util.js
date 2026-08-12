const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

export const showDataError = () => {
  const dateErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dateErrorElement);

  setTimeout(() => {
    dateErrorElement.remove();
  }, 5000);
};
