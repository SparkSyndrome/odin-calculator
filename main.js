// Arithmetic logic

let previousNum = null;
let currentNum = null;
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
    display.style.fontSize = '31px';
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

function updateDisplay(value) {
  display.innerText = value;
}

function pressClear() {
  if (display.style.fontSize !== '50px') {
    display.style.fontSize = '50px';
  }

  previousNum = null;
  currentNum = null;
  operator = null;
  updateDisplay(0);
}

function pressBackspace() {
  console.log("Backspace Btn Working")
}

function pressOperator(keyID) {
  if (previousNum !== null && currentNum !== null) {
    pressEquals();
  }

  operator = keyID;
  previousNum = currentNum;
  currentNum = null;
  updateDisplay(previousNum);
  
  console.log(previousNum, operator, currentNum);
}

function pressNum(keyID) {
  if (display.textContent === '0') {
    currentNum = keyID;
    updateDisplay(currentNum);
  } else {
    display.innerText = currentNum;
    display.innerText += keyID;
    currentNum = Number(display.innerText);
  }
  console.log(previousNum, operator, currentNum);
}

function pressDecimal() {
  console.log("Decimal Btn Working");
}

function pressEquals() {
  if (previousNum !== null && currentNum !== null && operator !== null) {
    const result = operate(Number(previousNum), Number(currentNum), operator);
    previousNum = null;
    currentNum = result;
    updateDisplay(result);
  }
  console.log(previousNum, operator, currentNum);
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