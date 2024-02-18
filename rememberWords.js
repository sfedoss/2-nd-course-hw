function rememberWords() {
    let wordArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordArray = wordArray.sort(() => Math.random() - 0.5);
  
    alert(wordArray);
  
    let answerOne = prompt('Что было первым в списке?');
  
    let answerTwo = prompt('Что было последним в списке?');
    
    if (typeof answerOne === 'object') {
        return 'Не угадал';
    }
  
    if (wordArray[0].toLowerCase() === answerOne.toLowerCase() && wordArray[wordArray.length - 1].toLowerCase() === answerTwo.toLowerCase()) {
      return 'Молодец, хорошая память!';
    } else if (wordArray[0].toLowerCase() === answerOne.toLowerCase() || wordArray[wordArray.length - 1].toLowerCase() === answerTwo.toLowerCase()) {
      return 'Ты был близок!';
    } else {
      return 'Не угадал';
    }
  }
  
  console.log(rememberWords());