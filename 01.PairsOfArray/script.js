function findPairs(array, targetSum) {
    const pairs = new Set();
    for (let i = 0; i < array.length - 1; i++) {
      // For each element, check if there is another element in the
      // array whose sum is equal to the given target sum.
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === targetSum) {
          // Convert the pair to a string and add it to the set
          pairs.add(`${array[i]}, ${array[j]}`);
        }
      }
    }
  
    return [...pairs].map(pair => pair.split(', ').map(Number));
}
  
const array = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
const targetSum = 7;
  
const pairs = findPairs(array, targetSum);
  
console.log(pairs);
