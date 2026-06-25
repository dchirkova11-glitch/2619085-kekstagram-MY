//Задача 1

const lengthString = (string, length) => string.length <= length;

// console.log(lengthString('Привет', 2));

//Задача 2

const isPalindrome = (string) => {
  const normalized = string
    .replaceAll(' ', '')
    .toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i];
  }
  return normalized === reversed;
};

// console.log(isPalindrome('Искать такси'));

//Задача 3
const extractDigits = (string) => {
  if (typeof string === 'number') {
    string = string.toString();
  }
  let digits = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const parsedChar = parseInt(char, 10);
    if (!Number.isNaN(parsedChar)) {
      digits += char;
    }
  }
  return parseInt(digits, 10);
};

// console.log(extractDigitsAlternative('Цена: 1500 руб.'));
