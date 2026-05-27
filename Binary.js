// Ask the user for a positive integer
let num = parseInt(prompt("Enter a positive integer: "));

if (isNaN(num) || num < 0) {
  console.log("Please enter a valid positive integer!");
} else {
  let binary = "";
  let n = num;

  // Manual conversion using division and remainder
  while (n > 0) {
    let remainder = n % 2;
    binary = remainder + binary; // prepend remainder
    n = Math.floor(n / 2); // integer division
  }

  if (binary === "") binary = "0"; // handle case for 0
  console.log(`Binary of ${num} is ${binary}`);
}