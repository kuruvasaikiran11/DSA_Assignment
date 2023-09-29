function isOperator(char) {
  return "+-*/".includes(char);
}

function prefixToInfix(prefix) {
  const stack = [];
  const operators = "+-*/";

  for (let i = prefix.length - 1; i >= 0; i--) {
    const currentChar = prefix[i];

    if (!isOperator(currentChar)) {
      stack.push(currentChar);
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpression = `(${operand1}${currentChar}${operand2})`;
      stack.push(infixExpression);
    }
  }

  return stack.pop();
}

// const prefixExpression = "*+AB-CD";
const prefixExpression = "ABC/-AK/L-"
const infixExpression = prefixToInfix(prefixExpression);
console.log("Prefix Expression:", prefixExpression);
console.log("Infix Expression:", infixExpression);
