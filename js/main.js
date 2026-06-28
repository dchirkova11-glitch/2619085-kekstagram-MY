const COUNT_ARRAY = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};
const COMMENTS = 30;
const CommetsId = {
  MIN: 100,
  MAX: 1000
};
const Avatar = {
  MIN: 1,
  MAX: 6
};

const NAMES = [
  'Зефирка',
  'Пухлик',
  'Булочка',
  'Кексик',
  'Тыгыдык',
  'Кусь',
  'Люцифер',
  'Тефтелька'
];

const DESCRIPTIONS = [
  'Полный игнор',
  'Удачный ракурс',
  'Почти шедевр',
  'Там смешно',
  'Показалось',
  'Кожаный чудит',
  'Опять ты?',
  'Тяжелый понедельник',
  'Кто это?',
  'Купи винишко'
];

const MESSAGES = [
  'Всё отлично!В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент ?!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getComments = () => ({
  id: getRandomInteger(CommetsId.MIN, CommetsId.MAX),
  avatar: `./img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const createPhotos = (index) => ({
  id: index,
  url: `./pictures/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInteger(0, COMMENTS) }, getComments)
});

const similarArray = Array.from({ length: COUNT_ARRAY }, (_, index) => createPhotos(index + 1));

console.log(similarArray);
