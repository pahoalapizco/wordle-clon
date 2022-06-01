// const letterBoard = document.getElementsByClassName("letter--container");

const MAX_TRIES = 6,
      MAX_LETTERS = 5;
const secretword = "PAOLA".toUpperCase().split('');
const responses = [];

// variables de control
let currentResponse = [],
    totalTries = 0,
    totalLetters = 0,
    win = false;

const chekLetter = () => {

}

const send = () => {
  if(MAX_TRIES === totalTries) {
    alert(`Game is over :( you ${win ? "WIN 🥳 " : "Loose  🥺"}`);
    return; 
  }

  if(MAX_LETTERS > totalLetters) {
    alert(`Hey! you need to type ${MAX_LETTERS - totalLetters} more letters`);
    return;
  }

  
  const letterBoard = document.getElementsByClassName(`letter-row-${totalTries}`);

  secretword.forEach((letter, index) => {
    switch (true) {
      case letter === currentResponse[index]:
        letterBoard[index].classList.add("correct");
        break;
      case currentResponse.includes(letter):
        letterBoard[index].classList.add("wrong-position");
        break;
      default:
        letterBoard[index].classList.add("incorrect");
        break;
    }
  });

  if(secretword.join() === currentResponse.join()) {
    win = true;
    alert(`Congratulations, you WIN!!! 🥳`);
  }

  totalTries++;
  totalLetters = 0;
  responses.push(currentResponse);

  currentResponse = [];
}

const backspace = () => {
  if(totalLetters === 0 || MAX_TRIES === totalTries || win) return;
  const letterBoard = document.getElementsByClassName(`letter-row-${totalTries}`);

  const position = currentResponse.length - 1;
  letterBoard[position].innerText = "";
  totalLetters--;
  currentResponse.pop();
}

const pressLetter = () => {
  if(MAX_LETTERS === totalLetters || MAX_TRIES === totalTries || win) return;
  const letterBoard = document.getElementsByClassName(`letter-row-${totalTries}`);

  const key = event.target;
  const letter = key.id;

  letterBoard[totalLetters].innerText = letter;

  currentResponse.push(letter);  
  totalLetters++;
}
