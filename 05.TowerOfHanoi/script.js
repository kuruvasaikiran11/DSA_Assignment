//recursive function to solve tower of hanoi puzzle
function towerOfHanoi(n, source, target, helper){
		if (n == 0){
			return 0;
		}
    if(n == 1){
      console.log(`Move disk 1 from rod ${source} to rod ${target}`);
      return 1;
    }
    
    let count1 = towerOfHanoi(n - 1, source, helper, target);
		console.log("Move disk " + n + " from rod " + source +" to rod " + target);
    count1++;
		let count2 = towerOfHanoi(n - 1, helper, target, source);
    return count1 + count2;
}

//No of Disks 
var N = 4;
	
// A, B and C are names of rods
const moves = towerOfHanoi(N, 'A', 'C', 'B');
console.log("Total no of moves required = ", moves);