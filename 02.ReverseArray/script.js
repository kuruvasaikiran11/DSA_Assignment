function reverseArrayInPlace(arr) {
  const l = arr.length;

  for (let i = 0; i < arr.length/2; i++) {
    // Swap the elements at positions i and length - 1 - i
    const temp = arr[i];
    arr[i] = arr[l - 1 - i];
    arr[l - 1 - i] = temp;
  }
}

const originalArray = [1, 2, 3, 4, 5, 6];
console.log("Original Array:", originalArray);

reverseArrayInPlace(originalArray);
console.log("Reversed Array in Place:", originalArray);
