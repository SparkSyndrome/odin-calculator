const keys = document.querySelectorAll("#calculator button");
const display = document.querySelector(".display");

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

keys.forEach(key => key.addEventListener('click', () => {
  // const keyValue = key.getAttribute('data-type');

  // if (keyValue === 'number') {
  //   if (operator === null) {
  //     if (firstNum === null) {
  //       firstNum = Number(key.textContent);
  //     } else {
  //       firstNum = Number(firstNum.toString() + key.textContent);
  //     }
  //     display.textContent = firstNum;
  //   } else {
  //     if (secondNum === null) {
  //       secondNum = Number(key.textContent);
  //     } else {
  //       secondNum = Number(secondNum.toString() + key.textContent)
  //     }
  //     display.textContent = secondNum;
  //   }
  // }

  // if (keyValue === 'operator') {
  //   if (firstNum !== null && secondNum !== null && operator !== null) {
  //     const result = operate(firstNum, secondNum, operator);
  //     display.textContent = result;
  //     firstNum = result;
  //     secondNum = null;
  //   }
  //   operator = key.textContent;
  // }

  // if (keyValue === 'equal') {
  //   if (firstNum !== null && secondNum !== null && operator !== null) {
  //     const result = operate(firstNum, secondNum, operator);
  //     display.textContent = result;
  //     firstNum = result;
  //     secondNum = null;
  //     operator = null;
  //   }
  // }

  // if (keyValue === 'clear') {
  //   firstNum = null;
  //   secondNum = null;
  //   operator = null;
  //   display.textContent = '0';
  // }
}));