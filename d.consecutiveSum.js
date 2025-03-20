function countWays(n) {
  let count = 0;
  
  // Try all possible starting points
  for (let start = 1; start <= n / 2; start++) {
    let sum = 0;
    let current = start;
    
    // Keep adding consecutive numbers until sum >= n
    while (sum < n) {
      sum += current;
      current++;
      
      if (sum === n) {
        count++;
        break;
      }
    }
  }
  
  return count;
}

// Test case Output :-
console.log(`Ways to express 15: ${countWays(15)}`); 


function countWaysMathematical(n) {
  let count = 0;
  
  // A number can be expressed as sum of consecutive numbers if
  // n = (x+1) + (x+2) + ... + (x+k) = k*x + k*(k+1)/2
  // i.e, n - k*(k+1)/2 = k*x
  // also , n - k*(k+1)/2 must be divisible by k
  
  for (let k = 1; k < Math.sqrt(2 * n); k++) {
    const numerator = n - (k * (k + 1)) / 2;
    if (numerator % k === 0 && numerator / k >= 0) {
      count++;
    }
  }
  
  return count;
}

console.log(`Ways to express 15 (mathematical): ${countWaysMathematical(15)}`);