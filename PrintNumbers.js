let number = 1;

console.log("Numbers from 1 to 5: ");
while(number <= 5) {
    console.log(number);
    number ++;
}

console.log("Even or odd check from numbers 6 to 10: ");
let check = 6;

do{
    if (check % 2 === 0) {
        console.log("The number " + check + " is even. ");
    } else{
        console.log("The number " + check + " is odd. ");
    }
    check++;
} while (check <= 10);