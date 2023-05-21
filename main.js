// Arithmetic logic

let firstNum = null;
let secondNum = null;
let operator = null;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case '*':
      return multiply(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
  }
}

// Calculator functionality logic
const keys = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.display');

function pressClear() {
  firstNum = null;
  secondNum = null;
  operator = null;
  display.innerText = 0;
}

function pressBackspace() {
  console.log("Backspace Btn Working")
}

function pressOperator(keyID) {
  console.log("Operator Btn Working")
  console.log(keyID);
}

function pressNum(keyID) {
  if (firstNum === null && display.textContent === '0') {
    display.innerText = '';
    display.innerText = keyID;
  } else if (display.innerText.length < 9) {
    display.innerText += keyID;
  }
}

function pressDecimal() {
  console.log("Decimal Btn Working")
}

function pressEquals() {
  console.log("Equals Btn Working")
}

function handleButtonPress(keyClassList, keyID) {
  if (keyClassList.contains('clear')) {
    pressClear();
  } else if (keyClassList.contains('backspace')) {
    pressBackspace();
  } else if (keyClassList.contains('operator')) {
    pressOperator(keyID);
  } else if (keyClassList.contains('number')) {
    pressNum(keyID);
  } else if (keyClassList.contains('decimal')) {
    pressDecimal();
  } else if (keyClassList.contains('equals')) {
    pressEquals();
  }
}

keys.forEach(key => key.addEventListener('click', () => handleButtonPress(key.classList, key.id)));