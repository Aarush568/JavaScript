function checkPassword(password) {

    let length = password.length >= 8;
    
    let hasUpper = false;
    let hasLower = false;
    let hasDigit = false;
    let hasSpecial = false;
    let eightCharacters = false;
    let specialCharacters = "@#$%&*!"

    
    for (let i = 0; i < password.length; i++) {
        let character = password[i];

        if (character >= "A" && character <= "Z") {
            hasUpper = true;
        }
        if (character >= "a" && character <= "z") {
            hasLower = true;
        }
        if (character >= "0" && character <= "9") {
            hasDigit = true;
        }

        
        for (let j = 0; j < specialCharacters.length; j++) {
            if (character === specialCharacters[j]) {
                hasSpecial = true;
            }
        }
    }
    console.log("Password:", password)
    console.log("---------------")
    
    console.log("Length >= 8: ", password.length >= 8);
    console.log("Uppercase:", hasUpper)
    console.log("Lowecase:", hasLower)
    console.log("Digit:", hasDigit)
    console.log("Special Character:", hasSpecial)

    
    let strength = (password.length >= 8) + hasUpper + hasLower + hasDigit + hasSpecial

    if (strength === 5) {
        console.log("\nStrength: Strong")
    
    } else if (strength >= 3) {
        console.log("\nStrength: Medium")
   
    } else {
        console.log("\nStrength: Weak")
    }
}
checkPassword("123456")