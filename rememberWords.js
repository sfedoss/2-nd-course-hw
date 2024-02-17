function rememberWords() {
    let wordArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordArray = wordArray.sort(() => Math.random() - 0.5);

    alert(wordArray);

    let answerOne = prompt('Что было первым в списке?').toLowerCase();

    let answerTwo = prompt('Что было последним в списке?').toLowerCase();

    if (wordArray[0].toLowerCase() === answerOne && wordArray[wordArray.length - 1].toLowerCase() === answerTwo) {
        return 'Молодец, хорошая память!';
    } else if (wordArray[0].toLowerCase() === answerOne || wordArray[wordArray.length - 1].toLowerCase() === answerTwo) {
        return 'Ты был близок!';
    } else {
        return 'Не угадал';
    }
}