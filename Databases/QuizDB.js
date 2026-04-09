const studentName = "Aarush Agarwal";

const quizDatabase = [
    {
        question: "What is the capital of Germany?",
        actualAnswer: "Berlin",
        studentAnswer: "Paris",
        marks: 10
    },
    
    {
        question: "What is 5 + 7?",
        actualAnswer: "12",
        studentAnswer: "12",
        marks: 5
    },

    {
        question: "Which planet is known as the <<Red Planet>>?",
        actualAnswer: "Mars",
        studentAnswer: "Mars",
        marks: 25
    },

    {
        question: "Which country is also called the <<Land of the Midnight Sun>>?",
        actualAnswer: "Norway",
        studentAnswer: "Norway",
        marks: 50
    },

    {
        question: "Who is the current president of the United States?",
        actualAnswer: "Donald Trump",
        studentAnswer: "Joe Biden",
        marks: 15
    }
];

let totalCorrect = 0;
let totalWrong = 0;
let earnedMarks = 0;
let possibleMarks = 0;

console.log("--- QUIZ DETAILED REPORT:", studentName, "---")
console.log("")

for (let i = 0; i < quizDatabase.length; i++) {
    let item = quizDatabase[i];
    let result = "";
    possibleMarks = possibleMarks + item.marks

    if (item.studentAnswer === item.actualAnswer) {
        result = "Correct";
        totalCorrect++;
        earnedMarks = earnedMarks + item.marks;
    } else {
        result = "Wrong"
        totalWrong++;
    }

    console.log("Question:", item.question);
    console.log("Correct Answer:", item.actualAnswer);
    console.log("Student Answer:", item.studentAnswer);
    console.log("Result:", result);
    console.log("-------------------------")
}


let percentage = (earnedMarks / possibleMarks) * 100;
let grade = "";
let status = "Pass";

if (percentage >= 90) {
    grade = "A";

} else if (percentage >= 75) {
    grade = "B";

} else if (percentage >= 60) {
    grade = "C";
    
} else if (percentage >= 40) {
    grade = "D";
    
} else {
    grade = "F"
    status = "Fail";
}

console.log("STUDENT:", studentName);
console.log("TOTAL MARKS:", earnedMarks, "/", possibleMarks);
console.log("PERCENTAGE:", percentage.toFixed(2) + "%");
console.log("GRADE:", grade);
console.log("STATUS:", status);