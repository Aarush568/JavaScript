// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to print all prime numbers from 1 to 100
function printPrimes() {
  for (let num = 1; num <= 100; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

printPrimes();