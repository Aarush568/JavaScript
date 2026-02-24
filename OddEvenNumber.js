// Declare a constant number
const number = 5; // You can change this number to test

// Declare a variable for the result
var result;

if (number == 0) {
  result = "Neutral number (zero)";
} else if (number % 2 == 0) {
  result = "Even number";
} else {
  result = "Odd number";
}

console.log("The number is:", result);