// Function to print an equilateral triangle star pattern
function printEquilateralTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

// Example: print triangle with 5 rows
printEquilateralTriangle(5);
