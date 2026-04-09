const foodOrderDB = [
  {
    orderId: 101,
    customerName: "Sourav",
    restaurant: "Amrit",
    items: [
      { itemName: "Rice", price: 5, quantity: 5 },
      { itemName: "Dal", price: 6, quantity: 3 }
    ],
    status: "delivered"
  },
  {
    orderId: 102,
    customerName: "Riya",
    restaurant: "Swagat",
    items: [
      { itemName: "Roti", price: 4, quantity: 7 },
      { itemName: "Puri", price: 5, quantity: 6 }
    ],
    status: "placed"
  },
  {
    orderId: 103,
    customerName: "Aman",
    restaurant: "Dosa King",
    items: [
      { itemName: "Dosa", price: 13, quantity: 2 },
      { itemName: "Sambhar", price: 10, quantity: 2 }
    ],
    status: "preparing"
  }
];

function printOrders() {
    console.log("📦 All Orders:");
    
    for (let i = 0; i < foodOrderDB.length; i++) {
        console.log("Order ID: ", foodOrderDB[i].orderId, "l Customer: ", foodOrderDB[i].customerName, "l Restaurant: ", foodOrderDB[i].restaurant)
    }
}



function calculateOrderTotals() {
    console.log("\n💰 Order Totals:")
    
    for (let i = 0; i < foodOrderDB.length; i++) {
        let total = 0; 

        for (let j = 0; j < foodOrderDB[i].items.length; j++) {
            let item = foodOrderDB[i].items[j];
            total += item.price * item.quantity;
        }

        console.log("Order ID: ", foodOrderDB[i].orderId, "l Total Amount: ", total);
    }
}



function findHighestOrder() {
    let highestTotal = 0;
    let highestOrderId = null;
    
    for (let i = 0; i < foodOrderDB.length; i++) {
        let total = 0;

        for (let j = 0; j < foodOrderDB[i].items.length; j++) {
            total += foodOrderDB[i].items[j].price * foodOrderDB[i].items[j].quantity;
        }

        if (total > highestTotal) {
            highestTotal = total;
            highestOrderId = foodOrderDB[i].orderId
        }
    }
    console.log("\n🏆 Highest Order:");
    console.log("Order ID:", highestOrderId, "| Amount:", highestTotal);
}



function updateOrderStatus(orderId, newStatus) {
    for (let i = 0; i < foodOrderDB.length; i++) {
        if (foodOrderDB[i].orderId === orderId) {
            foodOrderDB[i].status = newStatus;
            console.log("Status updated for Order ID: ", orderId);
            return;
        }
    }
    console.log("Order not found!")
}

function countOrderStatus() {
    let placed = 0;
    let preparing = 0;
    let delivered = 0;
    
    for (let i = 0; i < foodOrderDB.length; i++) {
        if (foodOrderDB[i].status === "placed") {
            placed++;
       
        } else if (foodOrderDB[i].status === "preparing") {
            preparing++;
       
        }else if (foodOrderDB[i].status === "delivered") {
            delivered++;
        }
    }
    console.log("\n📊 Order Status Count:");
    console.log("Placed: ", placed);
    console.log("Preparing: ", preparing);
    console.log("Delivered: ", delivered);
}

function searchByCustomer(name) {
    console.log("\n🔍 Orders for Customer:", name)
    let found = false;
    
    for (let i = 0; i < foodOrderDB.length; i++) {
        if (foodOrderDB[i].customerName.toLowerCase() === name.toLowerCase()) {
            console.log(foodOrderDB[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("❌ No orders found!")
    }
}

printOrders();
calculateOrderTotals();
findHighestOrder();
updateOrderStatus(102, "shipped");
countOrderStatus();
searchByCustomer("Sourav");