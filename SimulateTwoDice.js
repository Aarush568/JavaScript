// Function to roll two dice
function rollDice() {
    // Step 1: Roll the first die
    let die1 = Math.floor(Math.random() * 6) + 1;

    // Step 2: Roll the second die
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Step 3: Put both dice results inside an array
    let diceResult = [die1, die2];

    // Step 4: Return the array
    return diceResult;
}

// Variable to count how many times we rolled
let rollCount = 0;

// Variable to store the result of dice
let dice = [];

// We will keep rolling until we get a pair
while (true) {
    // Call the function to roll dice
    dice = rollDice();

    // Increase the counter
    rollCount = rollCount + 1;

    // Print the current roll
    console.log("Roll number: " + rollCount);
    console.log("You rolled: [" + dice[0] + ", " + dice[1] + "]");

    // Check if both dice numbers are the same
    if (dice[0] === dice[1]) {
        console.log("🎉 Congratulations! You got a pair!");
        console.log("It took you " + rollCount + " rolls to get the pair.");
        break; // End the loop
    } else {
        console.log("Not a pair, rolling again...\n");
    }
}