const calculator = document.querySelector('main');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click', e => {
  // Don't allow clicks that aren't buttons
  if (!e.target.closest('button')) return;

  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;
  let firstNumber = '';
  let operator = undefined;
  let secondNumber = '';

  if (type === 'number') {
    if (displayValue === '0' || previousKeyType === 'operator' || previousKeyType === 'equals') {
      display.textContent = keyValue;
    } else if (displayValue.length > 8) {
      return;
    } else {
      display.textContent = displayValue + keyValue;
    }
  }

  if (type === 'operator') {
    restoreButtonStyle();
    key.classList.remove('btn-outline-primary');
    key.classList.add('btn-primary');

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  if (type === 'equals') {
    firstNumber = calculator.dataset.firstNumber;
    operator = calculator.dataset.operator;
    secondNumber = displayValue;
    if (firstNumber == null || operator == null || secondNumber == null) {
      return
    } else {
      display.textContent = operate(firstNumber, secondNumber, operator);
      restoreButtonStyle();
    }
  }

  if (type === 'clear') {
    clear();
  }

  if (type === 'backspace') {
    if (displayValue.length < 2) {
      display.textContent = '0';
    } else if (displayValue === '0' && previousKeyType !== 'operator') {
      clear();
    } else {
      display.textContent = displayValue.substring(0,displayValue.length-1);
    }
  }

  calculator.dataset.previousKeyType = type;
})

function restoreButtonStyle() {
  const operatorKeys = keys.querySelectorAll('[data-type="operator"]');
  operatorKeys.forEach((operatorKey) => {
    operatorKey.classList.remove('btn-primary');
    operatorKey.classList.add('btn-outline-primary');
  });
}

function operate(firstNumber, secondNumber, operator) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator === 'plus') return Math.round((firstNumber + secondNumber) * 100000000) / 100000000;
  if (operator === 'minus') return Math.round((firstNumber - secondNumber) * 100000000) / 100000000;
  if (operator === 'multiply') return Math.round((firstNumber * secondNumber) * 100000000) / 100000000;
  if (operator === 'divide') return Math.round((firstNumber / secondNumber) * 100000000) / 100000000;
}

function clear() {
  display.textContent = '0';
  restoreButtonStyle();
  firstNumber = '';
  operator = undefined;
  secondNumber = '';
}