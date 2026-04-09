function atmWithdrawal(balance, amount) {

    if (amount % 100 !== 0) {
        console.log("Error. It has to be a multiple of 100. ")
        return
    }
    
    if (amount > balance) {
        console.log("Error. Insufficient balance. ")
    }
    
    if (balance - amount < 500) {
        console.log("Error. Less than 500 rupees.")
    }

    let remainingBalance = balance - amount
    
    let tempAmount = amount;
    const notes500 = Math.floor(tempAmount / 500)
    tempAmount %= 500

    const notes200 = Math.floor(tempAmount / 200)
    tempAmount %= 200

    const notes100 = Math.floor(tempAmount / 100)

    console.log("Withdrawal successful")
    console.log("Remaining balance:", remainingBalance)
    console.log("\nNotes dispensed: ")

    if (notes500 > 0) {
        console.log("₹500 x", notes500);
    }

    if (notes200 > 0) {
        console.log("₹200 x", notes200);
    }

    if (notes100 > 0) {
        console.log("₹100 x", notes100);
    }
}

atmWithdrawal(6700, 4300)