// Function to generate a random number
function getRandomNumber() {
    let number = Math.floor(Math.random() * 10) + 1; // between 1 and 10
    return number;
}

// Secret number
let secret = getRandomNumber();

// Array to store guesses
let guesses = [];

// Variable for guess
let guess = 0;

console.log("🎯 Welcome to the Number Guessing Game!");
console.log("I have chosen a number between 1 and 10. Can you guess it?\n");

// Keep looping until correct guess
while (guess !== secret) {
    // Simulate user input (for now we can auto-generate guesses randomly)
    guess = Math.floor(Math.random() * 10) + 1;

    // Add guess to array
    guesses.push(guess);

    console.log("You guessed: " + guess);

    // Check guess
    if (guess === secret) {
        console.log("🎉 Correct! The secret number was " + secret);
        console.log("It took you " + guesses.length + " tries.");
    } else {
        console.log("❌ Wrong guess, try again...\n");
    }
}

// Print all guesses
console.log("Your guesses were: " + guesses);