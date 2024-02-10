// Задание 1 

function returnNumber(a, b) {
    if (a > b) {
        return (b);
    } else {
        return (a);
    }
}

returnNumber (10, 5);

// Задание 2

function parity(c) {
    if (c % 2 === 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное');
    }
}

parity (15);

//Задание 3 
// 3.1

function numberSquare(myNumber = 10) {
    console.log(myNumber ** 2);
}

numberSquare(20);

// 3.2

function numberSquare2(myNumber = 10) {
    return myNumber ** 2;
}

console.log(numberSquare2(40));


// Задание 4 

function sayHello() {
    let age = prompt('Сколько тебе лет?');

    if (age < 0 || isNaN(age)) {
        alert(`Вы ввели неправильное значение`);
    } else if (age >= 0 && age <= 12) {
        alert(`Привет, друг!`);
    } else {
        alert(`Добро пожаловать!`);
    }
}

sayHello();

// Задание 5

function multNumbers(numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return numberOne * numberTwo;
    }
}

console.log(multNumbers(15, 5));


// Задание 6

function cubeNumber() {
    let numberThree = prompt(`Введите число`);

    if (isNaN(numberThree)) {
        return `Переданный параметр не является числом`;
    } else {
        return numberThree + ' в кубе равняется ' + numberThree ** 3;
    }
}

console.log(cubeNumber());


// Задание 7

function getCircleArea() {
    return Math.round(Math.PI * this.radius ** 2);
}

function getCirclePerimeter() {
    return Math.round(2 * Math.PI * this.radius);
}

const circle1 = {
    radius: 20,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

const circle2 = {
    radius: 30,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

console.log('Площадь первого круга составляет ' + circle1.getArea() + ' кв. мм');
console.log('Периметр первого круга составляет ' + circle1.getArea() + ' мм');
console.log('Площадь второго круга составляет ' + circle2.getArea() + ' кв. мм');
console.log('Периметр второго круга составляет ' + circle2.getArea() + ' мм');