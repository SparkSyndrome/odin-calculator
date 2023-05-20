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

function pressClear() {
  console.log("Clear Btn Working");
}

function pressBackspace() {
  console.log("Backspace Btn Working")
}

function pressOperator() {
  console.log("Operator Btn Working")
}

function pressNum() {
  console.log("Num Btn Working")
}

function pressDecimal() {
  console.log("Decimal Btn Working")
}

function pressEquals() {
  console.log("Equals Btn Working")
}

function handleButtonPress(keyClassList) {
  if (keyClassList.contains('clear')) {
    pressClear();
  } else if (keyClassList.contains('backspace')) {
    pressBackspace();
  } else if (keyClassList.contains('operator')) {
    pressOperator();
  } else if (keyClassList.contains('number')) {
    pressNum();
  } else if (keyClassList.contains('decimal')) {
    pressDecimal();
  } else if (keyClassList.contains('equals')) {
    pressEquals();
  }
}

keys.forEach(key => key.addEventListener('click', () => handleButtonPress(key.classList)));