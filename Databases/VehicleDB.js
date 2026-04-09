const vehicleDB = [
    {
        number: 1,
        type: "Bus",
        entryTime: 13,
        exitTime: 15
    },

    {
        number: 2,
        type: "Car",
        entryTime: 10,
        exitTime: 18
    },

    {
        number: 3,
        type: "Bike",
        entryTime: 7,
        exitTime: 8
    }
];


let duration = 0;
let rate = 0;
let baseFee = 0;
let discount = 0;
let finalPrice = 0;
let gst = 0;
let maxFee = 0;
let maxVehicleNum = "";


function getHourlyRate (type) { 
    if (type === "Bike") {
        rate = 20;
   
    } else if (type === "Car") {
        rate = 50;
        
    } else if (type === "Bus") {
        rate = 100;
    }    
}


function applyDiscount() {
    discount = 0;

    if (duration > 10) {
        discount = baseFee * 0.20;
    
    } else if (duration > 5) {
        discount = baseFee * 0.10
    }      
}


for (let i = 0; i < vehicleDB.length; i++) {
    let vehicle = vehicleDB[i];
    duration = vehicle.exitTime - vehicle.entryTime

    if (duration > 1) {
        duration = 1;
    }
    
    getHourlyRate(vehicle.type);
    baseFee = duration * rate;
    
    applyDiscount();
    let discountedPrice = baseFee - discount;

    gst = discountedPrice * 0.18;
    let finalPrice = discountedPrice + gst;

    console.log("\n 🚗 Vehicle Number:", vehicle.number);
    console.log("Duration:", duration + "h");
    console.log("Base Fee (in ₹):", baseFee);
    console.log("Discounted Value (in ₹):", discount.toFixed(2));
    console.log("Tax Value (in ₹):", gst.toFixed(2));
    console.log("Total (in ₹):", finalPrice.toFixed(2));
    console.log("-----------------------------")

    if (finalPrice > maxFee) {
        maxFee = finalPrice;
        maxVehicleNum = vehicle.number
    }
}
console.log("🏆 HIGHEST FEE: " + maxVehicleNum + " (₹" + maxFee.toFixed(2) + ")");