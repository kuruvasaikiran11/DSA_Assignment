function areBracketsBalanced(code) {
    const stack = [];
    const bracketPairs = {
      "{": "}",
      "(": ")",
      "[": "]"
    };
  
    for (let char of code) {
      if (bracketPairs[char]) {
        // If the character is an opening bracket, push it onto the stack.
        stack.push(char);
      } else if (Object.values(bracketPairs).includes(char)) {
        // If the character is a closing bracket, check if it matches the top of the stack.
        const lastBracket = stack.pop();
        if (bracketPairs[lastBracket] !== char) {
          // If it doesn't match, return false.
          return false;
        }
      }
    }
  
    // If the stack is empty at the end, all brackets are closed properly.
    return stack.length === 0;
}

  const str = "{[()]}"
// const str = "{[(])}" 

if(areBracketsBalanced(str)){
    console.log("All Brackets are Closed");
}else{
    console.log("All Brackets are not Closed");
}