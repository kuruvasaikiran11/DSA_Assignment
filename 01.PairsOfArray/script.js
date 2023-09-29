function findPairsWithSum(arr, targetSum) {
  const pairs = [];
  const visitedNumbers = new Set();

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const difference = targetSum - currentNumber;

    if (visitedNumbers.has(difference)) {
      pairs.push([currentNumber, difference]);
    }

    visitedNumbers.add(currentNumber);
  }

  return pairs;
}

// const array = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
const array = [-1, 2, 3, 4, -2, 6]
const targetSum = 1;

const pairs = findPairsWithSum(array, targetSum);
console.log(pairs);
