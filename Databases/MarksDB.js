// Object with student names as keys and marks as values
let students = {
  "Sourav": 85,
  "Riya": 45,
  "Amit": 72,
  "Neha": 30
};

// Get all keys of the object
let keys = Object.keys(students);

let i = 0;  // index for while loop

// Loop through each student
while (i < keys.length) {
  let name = keys[i];        // student name (key)
  let marks = students[name]; // student marks (value)

  // If-else condition
  if (marks >= 50) {
    console.log(name + " has " + marks + " marks → PASS ✅");
  } else {
    console.log(name + " has " + marks + " marks → FAIL ❌");
  }

  i++; // move to next student
}