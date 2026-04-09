// Example dataset
const schoolData = {
    classA: [
        { name: "Alice", marks: { math: 90, english: 85, science: 92 } },
        { name: "Bob", marks: { math: 78, english: 80, science: 75 } }
    ],
    classB: [
        { name: "Charlie", marks: { math: 88, english: 82, science: 91 } },
        { name: "David", marks: { math: 95, english: 89, science: 94 } }
    ]
};


//------------------------------
// 1. Print all class names
//------------------------------
console.log("Classes:");
for (let className in schoolData) {
    console.log(className);

    //-------------------------------
    // 2. Print all student names
    //-------------------------------
    console.log(" Students:");
    let students = schoolData[className];
    for (let i = 0; i < students.length; i++) {
        console.log("  - " + students[i].name);
    }
}


//---------------------------------------------------
// 3. Calculate and print each student's average marks
//---------------------------------------------------
console.log("\nAverage marks of each student:");
for (let className in schoolData) {
    let students = schoolData[className];

    for (let i = 0; i < students.length; i++) {
        let marks = students[i].marks;
        let sum = 0;
        let subjectCount = 0;

        for (let subject in marks) {
            sum += marks[subject];
            subjectCount++;
        }

        let avg = sum / subjectCount;
        console.log(`${students[i].name} (Class ${className}): ${avg}`);
    }
}


//-------------------------------------------------------
// 4. Find the topper in each class (without storing avg)
//-------------------------------------------------------
console.log("\nTopper of each class:");
for (let className in schoolData) {
    let students = schoolData[className];

    let topper = null;
    let highestAvg = -1;

    for (let i = 0; i < students.length; i++) {
        let marks = students[i].marks;
        let sum = 0;
        let count = 0;

        for (let subject in marks) {
            sum += marks[subject];
            count++;
        }

        let avg = sum / count;

        if (avg > highestAvg) {
            highestAvg = avg;
            topper = students[i];
        }
    }

    console.log(`Class ${className} topper: ${topper.name}`);
}


//-------------------------------------------------------
// 5. Find the overall school topper (without storing avg)
//-------------------------------------------------------
let schoolTopper = null;
let highestSchoolAvg = -1;

for (let className in schoolData) {
    let students = schoolData[className];
    for (let i = 0; i < students.length; i++) {

        let marks = students[i].marks;
        let sum = 0;
        let count = 0;

        for (let subject in marks) {
            sum += marks[subject];
            count++;
        }

        let avg = sum / count;

        if (avg > highestSchoolAvg) {
            highestSchoolAvg = avg;
            schoolTopper = students[i];
        }
    }
}

console.log(`\nOverall School Topper: ${schoolTopper.name}`);