// const letterBoard = document.getElementsByClassName("letter--container");

const MAX_TRIES = 6,
  MAX_LETTERS = 5;
const secretword = "ARBOL".toUpperCase().split("");
const responses = [];

// variables de control
let currentResponse = [],
  totalTries = 0,
  totalLetters = 0,
  win = false;

const checkAnswer = () => {
  const letterBoard = document.getElementsByClassName(
    `letter-row-${totalTries}`
  );
  let totalCorrect = 0;

  for (let index = 0; index < MAX_LETTERS; index++) {
    const letter = secretword[index];
    const letterSelected = currentResponse[index]
    const keyButton = document.getElementById(letterSelected);
      if(letter === letterSelected) {
        keyButton.classList.remove("wrong-position");
        letterBoard[index].classList.add("correct");
        totalCorrect++;
      } else if(secretword.includes(letterSelected)) {
        letterBoard[index].classList.add("wrong-position");
        keyButton.classList.add("wrong-position");
      } else {
        letterBoard[index].classList.add("incorrect");
        keyButton.classList.add("incorrect");
      }
  }

  return totalCorrect === MAX_LETTERS;
};

const send = () => {
  if (MAX_TRIES === totalTries || win) {
    alert(`Game is over :( you ${win ? "WIN 🥳 " : "Loose  🥺"}`);
    return;
  }

  if (MAX_LETTERS > totalLetters) {
    alert(`Hey! you need to type ${MAX_LETTERS - totalLetters} more letters`);
    return;
  }

  if (checkAnswer()) {
    win = true;
    setTimeout(() => {
      alert(`Congratulations, you WIN!!! 🥳`);
    }, 100)    ;
  }

  totalTries++;
  totalLetters = 0;
  responses.push(currentResponse);

  currentResponse = [];
};

const backspace = () => {
  if (totalLetters === 0 || MAX_TRIES === totalTries || win) return;
  const letterBoard = document.getElementsByClassName(
    `letter-row-${totalTries}`
  );

  const position = currentResponse.length - 1;
  letterBoard[position].innerText = "";
  totalLetters--;
  currentResponse.pop();
};

const pressLetter = () => {
  if (MAX_LETTERS === totalLetters || MAX_TRIES === totalTries || win) return;
  const letterBoard = document.getElementsByClassName(
    `letter-row-${totalTries}`
  );

  const key = event.target;
  const letter = key.id;

  letterBoard[totalLetters].innerText = letter;

  currentResponse.push(letter);
  totalLetters++;
};
