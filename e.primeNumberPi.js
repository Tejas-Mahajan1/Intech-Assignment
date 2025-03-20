function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
}

function findLargest5DigitPrimeInPi() {
  // First 100 digits of Pi :-
  const pi = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';
  
  let largestPrime = 0;
  
  // Check all 5-digit numbers in Pi
  for (let i = 0; i <= pi.length - 5; i++) {
    const num = parseInt(pi.substring(i, i + 5), 10);
    if (num > largestPrime && isPrime(num)) {
      largestPrime = num;
    }
  }
  
  return largestPrime;
}

// Output :-
console.log(`Largest 5-digit prime in Pi: ${findLargest5DigitPrimeInPi()}`);