const hotelBookingDB = [
    {
        bookingId: 100,
        guestName: "Aarush",
        roomType: "Suite",
        status: "checkedOut",
        services: [
            {serviceName: "Chai", price: 4, quantity: 4},
            {serviceName: "Matress", price: 8, quantity: 2}
        ]
    },
    {
        bookingId: 101,
        guestName: "Sourav",
        roomType: "Standard",
        status: "checkedIn",
        services: [
            {serviceName: "Towels", price: 3, quantity: 9},
            {serviceName: "Newspapers", price: 2, quantity: 5}
        ]
    },
    {
        bookingId: 102,
        guestName: "Aarush",
        roomType: "ApartmentStyle",
        status: "booked",
        services: [
            {serviceName: "Wine", price: 12, quantity: 1},
            {serviceName: "Flowers", price: 9, quantity: 3}
        ]
    }
];

function printBookings() {
    console.log("📦 All Bookings: ");
    for (let i = 0; i < hotelBookingDB.length; i++) {
        console.log("Booking ID: ", hotelBookingDB[i].bookingId, "| Guest: ", hotelBookingDB[i].guestName, "| Room Type: ", hotelBookingDB[i].roomType);
    }
}

function calculateBookingTotals() {
    console.log("\n 💰 Booking Totals: ");
    for (let i = 0; i < hotelBookingDB.length; i++) {
        let total = 0;
        for (let j = 0; j < hotelBookingDB[i].services.length; j++) {
            let service = hotelBookingDB[i].services[j];
            total += service.price * service.quantity;
        }
        console.log("Order ID: ", hotelBookingDB[i].bookingId, "| Total Amount: ", total);
    }
}

function findHighestBooking() {
    let highestTotal = 0;
    let highestBookingId = null;
    
    for (let i = 0; i < hotelBookingDB.length; i++) {
        let total = 0; 
        
        for (let j = 0; j < hotelBookingDB[i].services.length; j++) {
            total += hotelBookingDB[i].services[j].price * hotelBookingDB[i].services[j].quantity;        
        } 

        if (total > highestTotal) {
            highestTotal = total;
            highestBookingId = hotelBookingDB[i].bookingId;
        }
    } 
    
    console.log("\n 🏆 Highest Booking: ");
    console.log("Booking ID: ", highestBookingId, "| Amount: ", highestTotal);
}

function updateBookingStatus(bookingId, newStatus) {
    for (let i = 0; i < hotelBookingDB.length; i++) {
        if (hotelBookingDB[i].bookingId === bookingId) {
            hotelBookingDB[i].status = newStatus; 
            console.log("\n✅ Status updated for Booking ID: ", bookingId);
            return;
        }
    }
    console.log("Booking not found!");
}

function countBookingStatus() {
    let booked = 0;
    let checkedIn = 0;
    let checkedOut = 0;
    
    for (let i = 0; i < hotelBookingDB.length; i++) {
        if (hotelBookingDB[i].status === "booked") {
            booked++;
        } else if (hotelBookingDB[i].status === "checkedIn") {
           checkedIn++;
        } else if (hotelBookingDB[i].status === "checkedOut") {
            checkedOut++;
        }
    }
    
    console.log("\n📊 Booking Status Count:");
    console.log("Booked: ", booked);
    console.log("Checked In: ", checkedIn); 
    console.log("Checked Out: ", checkedOut);
}

function searchByGuest(guestName) {
    console.log("\n🔍 Bookings for Customer: ", guestName); 
    let found = false;
   
    for (let i = 0; i < hotelBookingDB.length; i++) {
        if (hotelBookingDB[i].guestName.toLowerCase() === guestName.toLowerCase()) {
            console.log(hotelBookingDB[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("❌ No bookings found!");
    }
}

printBookings();
calculateBookingTotals();
findHighestBooking();
updateBookingStatus(102, "checkedIn");
countBookingStatus();
searchByGuest("Sourav");