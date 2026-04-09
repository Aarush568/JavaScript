const bankDB = [
    
    {
        name: "Adam",
        accountNumber: 100,
        balance: 6000,
        transactions: [
            {type: "deposit", amount: 2000},
            {type: "withdraw", amount: 5000},
            {type: "withdraw", amount: 1400}
        ]
    },

    {
        name: "Bob",
        accountNumber: 101,
        balance: 150000,
        transactions: [
            {type: "withdraw", amount: 30000},
            {type: "deposit", amount: 50000},
            {type: "withdraw", amount: 27000}
        ]
    },

    {
        name: "Steve",
        accountNumber: 102,
        balance: 50,
        transactions: [
            {type: "withdraw", amount: 30},
            {type: "deposit", amount: 5},
            {type: "deposit", amount: 60}
        ]
    }
];

let totalDeposits = 0;
let totalWithdrawals = 0;
//----------------------------------------------------------
function printUserDetails() {
    for (let i = 0; i < bankDB.length; i++) {
        console.log("User:", bankDB[i].name, "| Balance:", bankDB[i].balance);
    }
}
//----------------------------------------------------------
function processTransactions() {
    for (let i = 0; i < bankDB.length; i++) {
        let user = bankDB[i];
        
        for (let j = 0; j < bankDB[i].transactions.length; j++) {
            let transaction = user.transactions[j];

            if (transaction.type === "deposit") {
                updateDeposit(user, transaction.amount);
            } else if (transaction.type === "withdraw") {
                updateWithdrawal(user, transaction.amount);
            }
        }
    }
}
//----------------------------------------------------------
function updateWithdrawal(user, amount) {
    if (user.balance >= amount) {
        user.balance -= amount;
        trackWithdrawal(amount);
    } else {
        console.log("\nError:", user.name, "cannot process this withdrawal!");
    }
}
//----------------------------------------------------------
function updateDeposit(user, amount) {
    user.balance += amount;
    totalDeposits += amount;
}
function trackWithdrawal(amount) {
    totalWithdrawals += amount;
}
//----------------------------------------------------------
function applyRules() {
    
    for (let i = 0; i < bankDB.length; i++) {
        
        if (bankDB[i].balance < 1000) {
            bankDB[i].balance -= 100
        } else if (bankDB[i].balance > 10000) {
            bankDB[i].balance += (bankDB[i].balance * 0.05);
        }
    }
}
//----------------------------------------------------------
function finalSummary() {
    let bankTotal = 0;
    let topUser = bankDB[0];
    console.log("\n--- FINAL BALANCES ---");

    for (let i = 0; i < bankDB.length; i++) {
        console.log(bankDB[i].name + ": ₹" + bankDB[i].balance);
        bankTotal += bankDB[i].balance;

        if (bankDB[i].balance > topUser.balance) {
            topUser = bankDB[i];
        }
    }
    console.log("\nTotal Money in Bank: ₹" + bankTotal);
    console.log("Richest User:", topUser.name);
}
//----------------------------------------------------------
printUserDetails();
processTransactions();
applyRules();
finalSummary()