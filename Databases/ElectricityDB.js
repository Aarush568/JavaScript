const electricityDB = [
    {
        name: "A",
        units: 160
    },
    {
        name: "B",
        units: 784
    },
    {
        name: "C",
        units: 5
    },
    {
        name: "D",
        units: 319
    },
    {
        name: "E",
        units: 497
    }    
];

function printNameAndUnits(user) {
    console.log("Name:", user.name, "| Units Consumed:", user.units, "kWh");
}

function calculateSlabCharge(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
   
    } else if (units <= 300) {
        bill = units * 7;
    
    } else if (units <= 500) {
        bill = units * 10;
    
    } else {
        bill = units * 12;
    }
    return bill
}

function applySurcharge(amount) {
    if (amount >= 3000) {
        return amount = amount * 0.1 + amount;
    }
    return amount;
}

function addFixedCharge(amount) {
    return amount = amount + 100;
}

function addGST(amount) {
    return amount = amount * 0.18 + amount
}

function printFinalBill(name, total) {
    console.log("Final Bill for", name + ": ₹" + total.toFixed(2))
    console.log("------------------------------------")
}

function findHighestBill(results) {
    let topUser = results[0];
    
    for (let i = 0; i < results.length; i++) {
        if (results[i].bill > topUser.bill) {
            topUser = results[i];
        }
    }
    console.log("🏆 Highest Bill:", topUser.name, "(₹" + topUser.bill.toFixed(2) + ")");
}

function processElectricityBills(data) {
    let finalResults = [];

    for (let i = 0; i < data.length; i++) {
        let user = data[i];

        printNameAndUnits(user);

        let amount = calculateSlabCharge(user.units);
        amount = applySurcharge(amount);
        amount = addFixedCharge(amount);
        let finalBill = addGST(amount);

        printFinalBill(user.name, finalBill);

        finalResults.push({name: user.name, bill: finalBill});
    }
    findHighestBill(finalResults);
}
processElectricityBills(electricityDB);