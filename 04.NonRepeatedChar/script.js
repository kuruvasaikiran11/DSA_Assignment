function findFirstNonRepeatedCharacter(str) {
  const charCount = {};

  // Build a character frequency count while ignoring spaces
  for (let char of str) {
    if (char !== ' ') {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  // Find the first non-repeated character while ignoring spaces
  for (let char of str) {
    if (char !== ' ' && charCount[char] === 1) {
      return char;
    }
  }

  return null; // If there are no non-repeated characters (excluding spaces)
}

const inputString = "EdYoda JavaScript Programming";
const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);

if (firstNonRepeatedChar !== null) {
  console.log("The first non-repeated character (excluding spaces) is:", firstNonRepeatedChar);
} else {
  console.log("There are no non-repeated characters (excluding spaces) in the string.");
}
