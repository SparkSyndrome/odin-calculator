let operator = '';
let lastNum = '';
let currentNum = '';
let result = '';

document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display');

  const clear = document.querySelector('.clear');
  const backspace = document.querySelector('.backspace');

  const numbers = document.querySelectorAll('.number');
  const operators = document.querySelectorAll('.operator');
  const equals = document.querySelector('.equals');
  
  const decimal = document.querySelector('.decimal');
  
  numbers.forEach((number) => number.addEventListener('click', function(e) {
    display.textContent = lastNum;
    handleNumber(e.target.textContent);
    display.textContent = currentNum;
  }));

  operators.forEach((operator) => operator.addEventListener('click', function(e) {
    handleOperator(e.target.textContent);
  }));

  clear.addEventListener('click', function() {
    operator = '';
    lastNum = '';
    currentNum = '';
    display.textContent = currentNum;
  })

  equals.addEventListener('click', function() {
    operate();
    display.textContent = result;
    lastNum = currentNum;
    currentNum = '';
  })
})

function handleNumber(num) {
  if (currentNum.length < 10) {
    currentNum += num;
  }
}

function handleOperator(op) {
  operator = op;
  lastNum = currentNum;
  currentNum = '';
}

function operate() {
  lastNum = Number(lastNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    add(lastNum, currentNum);
  } else if (operator === "-") {
    subtract(lastNum, currentNum);
  } else if (operator === "×") {
    multiply(lastNum, currentNum);
  } else if (operator === "÷") {
    divide(lastNum, currentNum);
  } else {
    return;
  }
}

function add(num1, num2) {
  const sum = num1 + num2;
  result = round(sum);
}

function subtract(num1, num2) {
  const difference = num1 - num2;
  result = round(difference);
}

function multiply(num1, num2) {
  const product = num1 * num2;
  result = round(product);
}

function divide(num1, num2) {
  const quotient = num1 / num2;
  result = round(quotient);
}

function round(num) {
  return Math.round(num * 1000000000) / 1000000000;
}