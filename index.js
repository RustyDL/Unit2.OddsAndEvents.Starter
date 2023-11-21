//Odds and Evens homework

const form = document.querySelector("form");
const numberInput = form.querySelector('input[name="number"]');
const addNumberButton = form.querySelector("button");
const numberBankOutput = document.querySelector("#numberBank output");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

form.addEventListener("submit", addNumber);
sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);

function addNumber(event) {
  event.preventDefault();
  const inputNumber = parseFloat(numberInput.value);
  if (!isNaN(inputNumber)) {
    state.numberBank.push(inputNumber);
    render();
  }
  numberInput.value = "";
}

function sortOne() {
  const firstNumber = state.numberBank.shift();
  if (firstNumber % 2 === 0) {
    state.evenNumbers.push(firstNumber);
  } else {
    state.oddNumbers.push(firstNumber);
  }
  render();
}

function sortAll() {
  state.numberBank.forEach((number) => {
    if (number % 2 === 0) {
      state.evenNumbers.push(number);
    } else {
      state.oddNumbers.push(number);
    }
  });
  state.numberBank = [];
  render();
}

function render() {
  numberBankOutput.textContent = state.numberBank.join(", ");
  oddsOutput.textContent = state.oddNumbers.join(", ");
  evensOutput.textContent = state.evenNumbers.join(", ");
}
