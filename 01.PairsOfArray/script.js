//Pairs of Sum
function removeDuplicates(arr) {
  const uniqueArrays = [];
  const seen = new Set();

  for (const subArray of arr) {
    const subArrayString = JSON.stringify(subArray);

    if (!seen.has(subArrayString)) {
      seen.add(subArrayString);
      uniqueArrays.push(subArray);
    }
  }

  return uniqueArrays;
}
function pairsOfSum(arr, target){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j] == target){
        res.push([arr[i], arr[j]]);
      }
    }
  }

  return removeDuplicates(res);
}

let arr = [1, 2, 4, 5, 2, 6, 8, 8, 10, 10, 10, 2];
let target = 7;
console.log(pairsOfSum(arr, target));