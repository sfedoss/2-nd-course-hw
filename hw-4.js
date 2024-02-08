// Задание 1

for (i = 0; i < 2; i++) {
    console.log ('Привет');
}

// Задание 2 

let c = 0;

while (c < 5) {
    c++;
    console.log(c);
}

// Задание 3 

let a = 7

while (a <= 22) {
    concole.log (a);
    a++
}

// Задание 4 

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let element in obj) {
    console.log(`${element} - зарплата ${obj[element]} долларов`);
}


// Задание 5 

let num = 0;
let i = 1000;

while (i >= 50) {
    i /= 2;
    num++
    console.log('Получилось число: ' + i + '.');
}

console.log('Всего итераций: ' + num);


// Задание 6 

for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}