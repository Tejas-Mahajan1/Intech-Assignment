// Rectangle defined by top-left corner (x, y), width, and height
function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

function doRectanglesIntersect(rect1, rect2) {
  // Find the sides of each rectangle
  const left1 = rect1.x;
  const right1 = rect1.x + rect1.width;
  const top1 = rect1.y;
  const bottom1 = rect1.y + rect1.height;
  
  const left2 = rect2.x;
  const right2 = rect2.x + rect2.width;
  const top2 = rect2.y;
  const bottom2 = rect2.y + rect2.height;
  
  // Check if one rectangle is to the left of the other
  if (right1 <= left2 || right2 <= left1) {
    return false;
  }
  
  // Check if one rectangle is above the other
  if (bottom1 <= top2 || bottom2 <= top1) {
    return false;
  }
  
  // If we get here, the rectangles intersect
  return true;
}

// Test cases
const rect1 = new Rectangle(0, 0, 10, 10);
const rect2 = new Rectangle(5, 5, 10, 10);
const rect3 = new Rectangle(20, 20, 10, 10);

console.log(`Rectangles 1 and 2 intersect: ${doRectanglesIntersect(rect1, rect2)}`); // Should output true
console.log(`Rectangles 1 and 3 intersect: ${doRectanglesIntersect(rect1, rect3)}`); // Should output false