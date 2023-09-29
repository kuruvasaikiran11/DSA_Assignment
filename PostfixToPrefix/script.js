function postfixToPrefix(postfix) {
  const stack = [];
  const operators = "+-*/";

  for (let token of postfix) {
    if (!operators.includes(token)) {
      stack.push(token);
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpression = token + operand1 + operand2;
      stack.push(prefixExpression);
    }
  }

  return stack.pop();
}

// const postfixExpression = "23+5*";
const postfixExpression = "ABC/-AK/L-*"
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Prefix Expression:", prefixExpression);
