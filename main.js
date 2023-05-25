// Arithmetic logic

const calculator = {
  previousNum: null,
  currentNum: null,
  operator: null,
};

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
    throw new Error("Error: Division by zero");
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

function formatNumber(val) {
  return Number(val).toLocaleString();
}

function updateDisplay(num = 0) {
  display.innerText = formatNumber(num);
}

function pressClear() {
  if (display.style.fontSize !== '50px') {
    display.style.fontSize = '50px';
  }

  calculator.previousNum = null;
  calculator.currentNum = null;
  calculator.operator = null;

  updateDisplay();
}

function pressBackspace() {
  console.log("Backspace Btn Working")
}

function pressOperator(keyID) {
  if (calculator.previousNum !== null && calculator.currentNum !== null) {
    pressEquals();
  }

  calculator.operator = keyID;
  calculator.previousNum = calculator.currentNum;
  calculator.currentNum = null;

  updateDisplay(calculator.previousNum);
  
  console.log(calculator.previousNum, calculator.operator, calculator.currentNum);
}

function pressNum(keyID) {
  if (display.textContent === '0') {
    calculator.currentNum = keyID;
    updateDisplay(calculator.currentNum);
  } else {
    display.innerText = calculator.currentNum;
    display.innerText += keyID;
    calculator.currentNum = Number(display.innerText);
  }
  console.log(calculator.previousNum, calculator.operator, calculator.currentNum);
}

function pressDecimal() {
  if (calculator.currentNum === null) {
    calculator.currentNum = '0.';
  } else if (typeof calculator.currentNum === 'number') {
    calculator.currentNum = calculator.currentNum.toString() + '.';
  } else if (!calculator.currentNum.includes('.')) {
    calculator.currentNum += '.';
  }

  updateDisplay(calculator.currentNum);
}

function pressEquals() {
  // Check if user is pressing equals immediately after the operator function
  // w/out entering a second number
  if (calculator.previousNum !== null && calculator.currentNum === null && calculator.operator !== null) {
    calculator.currentNum = calculator.previousNum;
  }

  if (calculator.previousNum !== null && calculator.currentNum !== null && calculator.operator !== null) {
    try {
      const result = Math.round(operate(Number(calculator.previousNum), Number(calculator.currentNum), 
      calculator.operator) * 100000000) / 100000000;

      calculator.previousNum = null;
      calculator.currentNum = result;

      updateDisplay(result);
    } catch (error) {
      updateDisplay(error.message);
    }
  }
  console.log(calculator.previousNum, calculator.operator, calculator.currentNum);
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