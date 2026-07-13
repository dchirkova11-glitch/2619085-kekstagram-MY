//Задача 1

const lengthString = (string, length) => string.length <= length;

lengthString('Привет', 2);

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

isPalindrome('Искать такси');

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

extractDigits('Цена: 1500 руб.');

//5.16. Функции возвращаются

function isMeetingInWorkingHours(workStart, workEnd, meetingStart, duration) {

  const parseTimeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkMin = parseTimeToMinutes(workStart);
  const endWorkMin = parseTimeToMinutes(workEnd);
  const startMeetingMin = parseTimeToMinutes(meetingStart);

  const endMeetingMin = startMeetingMin + duration;

  return startMeetingMin >= startWorkMin && endMeetingMin <= endWorkMin;
}
isMeetingInWorkingHours('08:00', '17:00', '08:30', 30);
// console.log(isMeetingInWorkingHours('8:5', '16:00', '15:30', 45));
// console.log(isMeetingInWorkingHours('09:00', '18:00', '09:00', 540));
