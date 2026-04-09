// Function to print an inverted right triangle star pattern
function printInvertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let stars = '*'.repeat(i);
    console.log(stars);
  }
}

// Example: print triangle with 6 rows
printInvertedTriangle(6);