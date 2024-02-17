// Задание 1
let str = 'js';
console.log(str.toUpperCase());

// Задание 2
const wordArr = ['Кошка', 'Кит', 'Комар', 'Носорог', 'Коршун', 'кабан'];
let strTwo = 'ко';

function searchStart(array, str) {
    return array.filter(el => el.toLowerCase().startsWith(str));
}

console.log(searchStart(wordArr, strTwo));

// Задание 3
const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Задание 4
const numArr = [52, 53, 49, 77, 21, 32];

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function getRandomNumber() {
    console.log(Math.round(Math.random() * 11));
}

getRandomNumber();

// Задание 6
function getRandomArrNumbers(num) {
    const numArr = Array.from({ length: Math.floor(num / 2) }, () => Math.round(Math.random() * num));
    return numArr;
}

console.log(getRandomArrNumbers(21));

// Задание 7
function getRandomNumber(minNumber, maxNumber) {
    let anyNumber = Math.round(Math.random() * (maxNumber - minNumber)) + minNumber;
    return anyNumber;
}

console.log(getRandomNumber(4, 10));

// Задание 8
let myData = new Date();

console.log(myData);

// Задание 9
let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();

if (month < 10) {
    month = '0' + month;
}

console.log(`Через 73 дня будет: ${day}.${month}.${year}`);

// Задание 10
let date = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

function formatedDate(currentDate) {
    let fullDate = currentDate.getDate() + ' ' + months[currentDate.getMonth()].toLowerCase() + ' ' + currentDate.getFullYear() + ' -  это ' + days[currentDate.getDay()].toLowerCase();
    let fullTime = currentDate.getHours()+ ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    let dateResult = `${fullDate}\n${fullTime}`;
    return dateResult;
}

console.log(formatedDate(date));