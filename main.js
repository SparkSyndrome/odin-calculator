function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

function subtract(num1, num2) {
  const difference = num1 - num2;
  console.log(difference);
}

function multiply(num1, num2) {
  const product = num1 * num2;
  console.log(product);
}

function divide(num1, num2) {
  const quotient = num1 / num2;
  console.log(quotient);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break
    default:
      console.log('Please enter a valid operator wrapped in quotes ( "+", "-", "*", or "/" )');
  }
}