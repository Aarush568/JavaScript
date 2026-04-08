// Declare a constant number
const number = 5; // You can change this number to test

// Declare a variable for the result
var result;

if (number == 0) {
  result = "neutral";
} else if (number % 2 == 0) {
  result = "even";
} else {
  result = "odd";
}

console.log("The number is:", result);