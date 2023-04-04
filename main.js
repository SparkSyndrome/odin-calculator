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
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const secondNumber = displayValue;
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
  delete calculator.dataset.firstNumber;
  delete calculator.dataset.operator;
}

// ===============
// TESTING
// ===============

// function testClear() {
//   clear();
//   console.assert(display.textContent === '0', 'Clear key; display should be "0"');
//   console.assert(!calculator.dataset.firstNumber, 'Clear key; no firstNumber remains');
//   console.assert(!calculator.dataset.operator, 'Clear key; no operator remains');
// }

// function testKeySequence(test) {
//   test.keys.forEach(key => {
//     document.querySelector(`[data-key="${key}"]`).click();
//   });
  
//   console.assert(display.textContent === test.value, test.message);

//   clear();
//   testClear();
// }

// const tests = [{
//   keys: ['1'],
//   value: '1',
//   message: "Click 1"
// }, {
//   keys: ['1', '5'],
//   value: '15',
//   message: "Click 15"
// }, {
//   keys: ['1', '5', '9'],
//   value: '159',
//   message: "Click 159"
// }, {
//   keys: ['9', 'divide', '3', 'equal'],
//   value: '3',
//   message: "Calculation with divide (normal)"
// }, {
//   keys: ['1', '0', 'divide', '0', 'equal'],
//   value: 'Infinity',
//   message: "Calculation with divide (by zero)"
// }, {
//   keys: ['1', '5', 'multiply', '9', 'equal'],
//   value: '135',
//   message: "Calculation with multiply"
// }, {
//   keys: ['3', 'minus', '7', '0', 'equal'],
//   value: '-67',
//   message: "Calculation with minus"
// }, {
//   keys: ['2', '4', 'plus', '7', 'equal'],
//   value: '31',
//   message: "Calculation with plus"
// }]

// tests.forEach(testKeySequence);