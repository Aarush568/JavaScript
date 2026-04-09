// Function to print a number pattern
function printNumberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j+i-1;
    }
    console.log(line);
  }
}

// Example: print pattern with 4 rows
printNumberPattern(prompt("Enter rows here: "));