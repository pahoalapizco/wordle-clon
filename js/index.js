const keyboard = document.getElementById("keyboard");

const keyboardLetters = [
  ["Q", "W", "E", "R","T", "Y", "U", "I","O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER","Z","X","C","V","B","N","M","DELETE"],
];

keyboardLetters.forEach(row => {
  const rowKey = document.createElement("div");
  rowKey.classList.add("keyboard-row");
  row.forEach(letter => {
    const button = document.createElement("button");
    button.classList.add("keyboard-letter");
    button.setAttribute("id", letter);
    button.innerText = letter;
    switch (letter) {
      case "ENTER":
        button.setAttribute("onclick", "send");
        break;
      case "DELETE":
        button.setAttribute("onclick", "delete");
        button.innerText = "";
        button.innerHTML = `<span> <i class="fa-solid fa-delete-left"></i> </span>`
        break;
    
      default:
        button.setAttribute("onclick", "pressLetter()");
        break;
    }
    rowKey.append(button);
  });
  keyboard.append(rowKey);
});