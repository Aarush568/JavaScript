console.log("🧾 ------ FINAL BILL ------");
console.log()

const bookings = [

    {
        name: "John",
        movie: "Dhurandhar",
        tickets: 4,
        price: 1000,
        type: "Premium"
    },

    {
        name: "Michael",
        movie: "Interstellar",
        tickets: 2,
        price: 750,
        type: "VIP"
    },

    {
        name: "James",
        movie: "DDLJ",
        tickets: 8,
        price: 1300,
        type: "Regular"
    }
];

function generateBill(booking) {
    let extraCharge = 0;
    if (booking.type === "Premium") {
        extraCharge = 100;
    } else if (booking.type === "VIP") {
        extraCharge = 200;
    }

    let total = booking.tickets * (booking.price + extraCharge);

    let discount = 0;
    if (total >= 5000) {
        discount = total * 0.20;
    } else if (total >= 3000) {
        discount = total * 0.15;
    } else if (total >= 1500) {
        discount = total * 0.10;
    }

    let afterDiscount = total - discount;

    let tax = afterDiscount * 0.18;
    let finalBill = afterDiscount + tax;

    console.log("Customer: " + booking.name);
    console.log("Movie: " + booking.movie);
    console.log("Total Ticket Price: ₹" + total);
    console.log("Discount: ₹" + discount.toFixed(2));
    console.log("Tax (18%): ₹" + tax.toFixed(2));
    console.log("Final Bill: ₹" + finalBill.toFixed(2));
    console.log("------------------");
}

for (let i = 0; i < 2; i++) {
    generateBill(bookings[i]);
}

let index = 2;
while (index < bookings.length) {
    generateBill(bookings[index]);
    index++;
}