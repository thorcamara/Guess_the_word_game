const inputs = document.querySelector(".word"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess span"),
  mistakes = document.querySelector(".wrong span"),
  resetBtn = document.querySelector(".reset"),
  hintBtn = document.querySelector(".showhint"),
  hintElement = document.querySelector(".hint"),
  typeInput = document.querySelector(".type-input");

let word, incorrectLetters = [], correctLetters = [], maxGuesses;

function startNewGame() {
  alert("New Game Started! Guess New Word :)");
  hintElement.style.display = "none";
  hintElement.style.opacity = "0";

  const ranWord = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranWord.word;
  maxGuesses = word.length >= 5 ? 8 : 6;
  incorrectLetters = [];
  correctLetters = [];
  hintTag.innerText = ranWord.hint;
  guessLeft.innerText = maxGuesses;
  mistakes.innerText = incorrectLetters;

  inputs.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    inputs.appendChild(input);
  }
}