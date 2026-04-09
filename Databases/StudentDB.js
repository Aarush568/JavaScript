const studentDB = [
  { id: 1, name: "Sourav", course: "JavaScript", marks: 88 },
  { id: 2, name: "Riya", course: "Python", marks: 92 },
  { id: 3, name: "Amit", course: "Java", marks: 76 }
];

// 1. Print all students
function printStudents() {
  console.log("📚 All Students:");
  for (let i = 0; i < studentDB.length; i++) {
    console.log(studentDB[i]);
  }
}

// 2. Insert new student
function addStudent(id, name, course, marks) {
  studentDB.push({ id, name, course, marks });
  console.log("✔ Student Added:", name);
}

// 3. Update marks of a student by ID
function updateMarks(id, newMarks) {
  for (let i = 0; i < studentDB.length; i++) {
    if (studentDB[i].id === id) {
      studentDB[i].marks = newMarks;
      console.log("✔ Marks Updated for ID:", id);
      return;
    }
  }
  console.log("❌ Student not found");
}

// 4. Delete student by ID
function deleteStudent(id) {
  for (let i = 0; i < studentDB.length; i++) {
    if (studentDB[i].id === id) {
      console.log("🗑 Student Deleted:", studentDB[i].name);
      studentDB.splice(i, 1);
      return;
    }
  }
  console.log("❌ Student not found");
}

// 5. Search student by name
function findStudent(name) {
  for (let i = 0; i < studentDB.length; i++) {
    if (studentDB[i].name.toLowerCase() === name.toLowerCase()) {
      console.log("🔍 Student Found:", studentDB[i]);
      return;
    }
  }
  console.log("❌ No student found with name:", name);
}


// ----------- TESTING THE DATABASE -------------
printStudents();
addStudent(4, "Neha", "C++", 81);
updateMarks(2, 95);
deleteStudent(3);
findStudent("Sourav");

console.log("📌 Final Database:", studentDB);