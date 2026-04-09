let people = {
    "A": prompt("What is your age? Please enter a number greater than 0. "),
    
    "B": prompt("What is your age? Please enter a number greater than 0. "),
    
    "C": prompt("What is your age? Please enter a number greater than 0. "),
    
    "D": prompt("What is your age? Please enter a number greater than 0. "),
    
    "E": prompt("What is your age? Please enter a number greater than 0. "),
    
    "F": prompt("What is your age? Please enter a number greater than 0. ")
}

let items = Object.keys(people)
let i = 0

console.log("-------------------")
console.log("-------------------")
console.log("-------------------")

while (i < items.length) {
    
    name = items[i]
    age = people[name]
    
    function checkAge(people) {
        
        if (age < 0) {
            console.log("Invalid age! ")
            
        } else if (age > 0 && age < 3 ) {
            console.log(name + " is " + age + " years old and therefore this person is a small child. ")
       
        } else if (age > 3 && age < 6 ) {
            console.log(name + " is " + age + " years old and therefore this person is a preschooler. ")
        
        } else if (age > 6 && age < 12 ) {
            console.log(name + " is " + age + " years old and therefore this person is in his middle childhood. ")
        
        } else if (age > 12 && age < 18 ) {
            console.log(name + " is " + age + " years old and therefore this person is a teenager. ")
        
        } else if (age > 18 && age < 30 ) {
            console.log(name + " is " + age + " years old and therefore this person is a young adult. ")
        
        } else if (age > 30 && age < 50 ) {
            console.log(name + " is " + age + " years old and therefore this person is a middle-aged adult. ")
        
        } else if (age > 50 && age < 65 ) {
            console.log(name + " is " + age + " years old and therefore this person is about to retire. ")
        
        } else if (age > 65) {
            console.log(name + " is " + age + " years old and therefore this person is a pensioner. ")
            
        } else {
            console.log("This person's age is unknown. ")
        }
    }
    checkAge(people)
    console.log("-------------------")
    i++
}