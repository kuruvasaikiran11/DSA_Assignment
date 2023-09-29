function areRotations(str1, str2) {
  // Check if both strings are of the same length and not empty
  if (str1.length !== str2.length || str1.length === 0) {
    return false;
  }

  // Concatenate str1 with itself
  const concatenated = str1 + str1;

  // Check if str2 is a substring of the concatenated string
  if (concatenated.includes(str2)) {
    return true;
  }

  return false;
}

// Example usage:
const str1 = "waterbottle";
const str2 = "erbottlewat";

if (areRotations(str1, str2)) {
  console.log("The strings are rotations of each other.");
} else {
  console.log("The strings are not rotations of each other.");
}
