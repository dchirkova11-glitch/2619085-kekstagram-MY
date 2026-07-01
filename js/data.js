import { getRandomInteger, getRandomElement } from './util';

const COUNT_PHOTO = 25;
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

const getComments = () => ({
  id: getRandomInteger(CommetsId.MIN, CommetsId.MAX),
  avatar: `./img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const createPhoto = (_, i) => ({
  id: i + 1,
  url: `./pictures/${i + 1}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInteger(0, COMMENTS) }, getComments)
});

const getPhoto = () => Array.from({ length: COUNT_PHOTO }, createPhoto);

export { getPhoto };
