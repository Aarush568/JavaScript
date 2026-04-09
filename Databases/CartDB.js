let cart = [
  { name: "Shoes", price: 2000, qty: 1 },
  { name: "Shirt", price: 1200, qty: 2 },
  { name: "Watch", price: 2500, qty: 1 }
];

let total = 0;

// Calculate total
for (let i = 0; i < cart.length; i++) {
  total += cart[i].price * cart[i].qty;
}

console.log("Total Amount:", total);

// Calculate discount
let discount = 0;

if (total >= 5000) {
  discount = total * 0.20;
}
else if (total >= 3000) {
  discount = total * 0.15;
}
else if (total >= 1000) {
  discount = total * 0.10;
}

console.log("Discount:", discount);

// Amount after discount
let afterDiscount = total - discount;

// Calculate tax
let tax = afterDiscount * 0.18;

console.log("Tax:", tax.toFixed(2));

// Final bill
let finalBill = afterDiscount + tax;

console.log("Final Bill:", finalBill.toFixed(2));