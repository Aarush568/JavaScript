const orderDB = [
  {
    orderId: 101,
    customerName: "Sourav",
    status: "placed",
    items: [
      { productName: "Laptop", price: 50000, quantity: 1 },
      { productName: "Mouse", price: 800, quantity: 2 }
    ]
  },
  {
    orderId: 102,
    customerName: "Riya",
    status: "shipped",
    items: [
      { productName: "Phone", price: 20000, quantity: 1 },
      { productName: "Earphones", price: 1500, quantity: 1 }
    ]
  },
  {
    orderId: 103,
    customerName: "Aman",
    status: "delivered",
    items: [
      { productName: "Tablet", price: 18000, quantity: 1 },
      { productName: "Cover", price: 700, quantity: 1 }
    ]
  }
];


// 1️⃣ Print all orders with customer names
function printOrders() {
  console.log("📦 All Orders:");
  for (let i = 0; i < orderDB.length; i++) {
    console.log(
      "Order ID:", orderDB[i].orderId,
      "| Customer:", orderDB[i].customerName,
      "| Status:", orderDB[i].status
    );
  }
}


// 2️⃣ Calculate total amount for each order
function calculateOrderTotals() {
  console.log("\n💰 Order Totals:");
  for (let i = 0; i < orderDB.length; i++) {
    let total = 0;

    for (let j = 0; j < orderDB[i].items.length; j++) {
      let item = orderDB[i].items[j];
      total += item.price * item.quantity;
    }

    console.log(
      "Order ID:", orderDB[i].orderId,
      "| Total Amount:", total
    );
  }
}


// 3️⃣ Find order with highest total amount
function findHighestOrder() {
  let highestTotal = 0;
  let highestOrderId = null;

  for (let i = 0; i < orderDB.length; i++) {
    let total = 0;

    for (let j = 0; j < orderDB[i].items.length; j++) {
      total += orderDB[i].items[j].price * orderDB[i].items[j].quantity;
    }

    if (total > highestTotal) {
      highestTotal = total;
      highestOrderId = orderDB[i].orderId;
    }
  }

  console.log("\n🏆 Highest Order:");
  console.log("Order ID:", highestOrderId, "| Amount:", highestTotal);
}


// 4️⃣ Update order status by orderId
function updateOrderStatus(orderId, newStatus) {
  for (let i = 0; i < orderDB.length; i++) {
    if (orderDB[i].orderId === orderId) {
      orderDB[i].status = newStatus;
      console.log("✔ Status updated for Order ID:", orderId);
      return;
    }
  }
  console.log("❌ Order not found");
}


// 5️⃣ Count orders by status
function countOrderStatus() {
  let placed = 0;
  let shipped = 0;
  let delivered = 0;

  for (let i = 0; i < orderDB.length; i++) {
    if (orderDB[i].status === "placed") placed++;
    else if (orderDB[i].status === "shipped") shipped++;
    else if (orderDB[i].status === "delivered") delivered++;
  }

  console.log("\n📊 Order Status Count:");
  console.log("Placed:", placed);
  console.log("Shipped:", shipped);
  console.log("Delivered:", delivered);
}


// 6️⃣ Search orders by customer name
function searchByCustomer(name) {
  console.log("\n🔍 Orders for Customer:", name);
  let found = false;

  for (let i = 0; i < orderDB.length; i++) {
    if (orderDB[i].customerName.toLowerCase() === name.toLowerCase()) {
      console.log(orderDB[i]);
      found = true;
    }
  }

  if (!found) {
    console.log("❌ No orders found");
  }
}


// ---------- TESTING ----------
printOrders();
calculateOrderTotals();
findHighestOrder();
updateOrderStatus(101, "shipped");
countOrderStatus();
searchByCustomer("Sourav");

console.log("\n📌 Final Database:", orderDB);