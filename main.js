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

  if (type === 'number') {
    if (displayValue === '0' || previousKeyType === 'operator') {
      display.textContent = keyValue;
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
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
    display.textContent = operate(firstNumber, secondNumber, operator);
    restoreButtonStyle();
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

  if (operator === 'plus') return firstNumber + secondNumber;
  if (operator === 'minus') return firstNumber - secondNumber;
  if (operator === 'multiply') return firstNumber * secondNumber;
  if (operator === 'divide') return firstNumber / secondNumber;
}
