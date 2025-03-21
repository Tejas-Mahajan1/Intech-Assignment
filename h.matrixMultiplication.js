function multiplyMatrices(A, B) {
  const n = A.length;
  const result = Array(n).fill().map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  
  return result;
}

// Eg :
const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

const C = multiplyMatrices(A, B);
console.log("Result of A * B:");
C.forEach(row => console.log(row));