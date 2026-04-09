// Object: products with their stock quantities
let shop = {
  "Apple": 10,
  "Banana": 2,
  "Mango": 0,
  "Orange": 7
};

// Get all product names (keys)
let items = Object.keys(shop);

let i = 0; // while loop index

// While loop to go through products
while (i < items.length) {
  let product = items[i];
  let quantity = shop[product];

  console.log("Checking stock for: " + product);

  // For loop (we'll just run it once for demo, but inside while)
  for (let j = 0; j < 1; j++) {
    if (quantity === 0) {
      console.log(product + " → ❌ Out of Stock");
    } else if (quantity < 5) {
      console.log(product + " → ⚠️ Low Stock (" + quantity + ")");
    } else {
      console.log(product + " → ✅ In Stock (" + quantity + ")");
    }
  }

  console.log("-------------------"); // separator
  i++; // move to next product
}