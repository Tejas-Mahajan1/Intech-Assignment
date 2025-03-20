// solution
function trapWater(heights) {
  if (!heights || heights.length < 3) {
    return 0;
  }
  
  const n = heights.length;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  
  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        water += leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        water += rightMax - heights[right];
      }
      right--;
    }
  }
  
  return water;
}

// Test case
console.log(`Trapped water: ${trapWater([2, 1, 3, 0, 1, 2, 3])}`);

// Analog version :-

function trapWaterAnalog(func, start, end, step) {
  // Discretize the continuous function
  const heights = [];
  for (let x = start; x <= end; x += step) {
    heights.push(func(x));
  }
  
  // Multipling by step to get the area
  return trapWater(heights) * step;
}

// Eg : function: f(x) = x^2 - 4x + 4 (parabola with roots at x=2)
function parabola(x) {
  return Math.max(0, x * x - 4 * x + 4);
}

// output :-
console.log(`Trapped water (analog): ${trapWaterAnalog(parabola, 0, 4, 0.1)}`);