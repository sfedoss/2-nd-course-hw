// Задание 1
const arrNumbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumbers.length; i++) {
  console.log(arrNumbers[i]);
  if (arrNumbers[i] === 10) break;
}

// Задание 2
const arrNumbersTwo = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumbers.length; i++) {

  if (arrNumbersTwo[i] === 4) {
    console.log(i);
  }
}

let result = arrNumbersTwo.indexOf(4);
console.log(result);

// Задание 3
const arrNumbersThree = [1, 3, 5, 10, 20];

let joinOne = arrNumbersThree.join(' ');

console.log(joinOne);

// Задание 4
const arrNumbersFour = [];

for (let i = 0; i < 3; i++) {
  arrNumbersFour[i] = [];
  for (let j = 0; j < 3; j++) {
    arrNumbersFour[i][j] = 1;
  }
}

console.log(arrNumbersFour);

// Задание 5
const arrNumbersFive = [1, 1, 1];

for (let i = 0; i < 3; i++) {
  arrNumbersFive.push(2);
}

console.log(arrNumbersFive);

// Задание 6
const arrNumbersSix = [9, 8, 7, 'a', 6, 5];

arrNumbersSix.sort();
arrNumbersSix.pop();
arrNumbersSix.reverse();

console.log(arrNumbersSix);

// Задание 7
const arrNumbersSeven = [9, 8, 7, 6, 5];

let riddle = Number(prompt('Угадай число'));

if (arrNumbersSeven.includes(riddle)) {
  console.log('Угадал');
} else {
  console.log('Не угадал');
}

// Задание 8
let word = 'abcdef';

let arrString = word.split('');

arrString.reverse();
word = arrString.join('');

console.log(word);

// Задание 9
const arrNumbersEight = [
  [1, 2, 3, ],
  [4, 5, 6]
];

let arr = [].concat(arrNumbersEight[0], arrNumbersEight[1]);

console.log(arr);

// Задание 10
const arrNumbersNine = [8, 5, 3, 4, 3, 7, 9, 2, 0, 1];

for (let i = 1; i < arrNumbersNine.length; i++) {
  let sum = arrNumbersNine[i - 1] + arrNumbersNine[i];
  console.log(sum);
}

// Задание 11
const arrNumbersTen = [4, 7, 2, 6, 9, 3];

function getSquarNumbers(array) {
  const arrNumbersTenNew = array.map((number) => number * number);
  return arrNumbersTenNew;
}

console.log(getSquarNumbers(arrNumbersTen));

// Задание 12
const arrWord = ['слово', '', 'слог', 'длинное предложение', 'буква'];

let getLengthWords = function(array) {
    const arrWordLength = array.map((word) => word.length);
    return arrWordLength;
}

console.log(getLengthWords(arrWord));

// Задание 13
const arrNumbersEleven = [3, 5, -5, 2, -3, -9, 2, -1];

let filterPositive = function(array) {
	const positiveNumber = array.filter((x) => x < 0);
    return positiveNumber;
}

console.log(filterPositive(arrNumbersEleven));