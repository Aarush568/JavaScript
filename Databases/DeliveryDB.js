const foodDeliveryDB = [
    {
        name: "Aarush",
        location: "Mumbai",
        orders: [
            {
                restaurant: "Amrit",
                items: [
                    {name: "Dal", price: 4, quantity: 4},
                    {name: "Roti", price: 2, quantity: 10}
                ]
            },
            {
                restaurant: "IndiaVillage",
                items: [                   
                    {name: "Rice", price: 5, quantity: 3},
                    {name: "Paneer", price: 8, quantity: 2}
                ]
            }
        ]
    },

    {
        name: "Ronaldo",
        location: "Delhi",
        orders: [
            {
                restaurant: "Maharadscha",
                items: [
                    {name: "Butter Chicken", price: 10, quantity: 20},
                    {name: "Kheer", price: 2, quantity: 8}
                ]
            },
            {
                restaurant: "IndiaTown",
                items: [                   
                    {name: "Rice", price: 5, quantity: 3},
                    {name: "Paneer", price: 8, quantity: 2}
                ]
            }
        ]
    },

    {
        name: "Aman",
        location: "Delhi",
        orders: [
            {
                restaurant: "Namaste",
                items: [
                    {name: "Dosa", price: 10, quantity: 3},
                    {name: "Sambhar", price: 7, quantity: 4}
                ]
            },
            {
                restaurant: "Aaina",
                items: [                   
                    {name: "Idli", price: 5, quantity: 8},
                    {name: "Vada", price: 4, quantity: 3}
                ]
            }
        ]
    },

    {
        name: "Arjun",
        location: "Kolkata",
        orders: [
            {
                restaurant: "Lotus",
                items: [
                    {name: "Aaloo", price: 6, quantity: 6},
                    {name: "Kofta", price: 9, quantity: 2}
                ]
            },
            {
                restaurant: "Dasaprakash",
                items: [                   
                    {name: "Chutney", price: 2, quantity: 3},
                    {name: "Poha", price: 11, quantity: 4}
                ]
            }
        ]
    },

    {
        name: "Rohit",
        location: "Chennai",
        orders: [
            {
                restaurant: "Dosa King",
                items: [
                    {name: "Dosa", price: 15, quantity: 6},
                    {name: "Biryani", price: 10, quantity: 3}
                ]
            },
            {
                restaurant: "Gujurati Sweets",
                items: [                   
                    {name: "Ladoo", price: 5, quantity: 2},
                    {name: "Rasgulla", price: 4, quantity: 1}
                ]
            }
        ]
    },

    {
        name: "Sourav",
        location: "Hyderabad",
        orders: [
            {
                restaurant: "Maharaja",
                items: [
                    {name: "Samosa", price: 5, quantity: 2},
                    {name: "Bhelpuri", price: 7, quantity: 3}
                ]
            },
            {
                restaurant: "Sarvanna Bhavan",
                items: [                   
                    {name: "Lassi", price: 5, quantity: 4},
                    {name: "Gulab Jamun", price: 3, quantity: 7}
                ]
            }
        ]
    },
];

// Function for Task 2: Sum of all items in an order
function calculateSubtotal(order) {
    let sum = 0;
    for (let item of order.items) {
        sum += item.price * item.quantity;
    }
    return sum;
}

// Function for Task 3: Delivery Charges using if conditions
function getDeliveryCharge(bill) {
    if (bill < 50) {
        return 10;
    } else {
        return 0;
    }
}

// Function for Task 4: Discounts using if conditions
function getDiscount(bill) {
    if (bill >= 150) {
        return bill * 0.20; // 20%
    } else if (bill >= 100) {
        return bill * 0.10; // 10%
    } else {
        return 0;
    }
}

// Function for Task 5: GST
function calculateGST(amount) {
    return amount * 0.05;
}

// Main execution function
function runFoodApp(database) {
    let totalAppRevenue = 0;
    let topSpender = { name: "", totalSpent: 0 };

    for (let customer of database) {
        let customerGrandTotal = 0;
        console.log(`Customer: ${customer.name}`);

        for (let order of customer.orders) {
            // Task 2
            let subtotal = calculateSubtotal(order);
            
            // Task 3 & 4
            let delivery = getDeliveryCharge(subtotal);
            let discount = getDiscount(subtotal);
            
            // Task 5 & 6 (Final Bill calculation)
            let discountedAmount = subtotal - discount;
            let gst = calculateGST(discountedAmount);
            let finalOrderBill = discountedAmount + gst + delivery;

            customerGrandTotal += finalOrderBill;
            console.log(`  - ${order.restaurant}: ₹${finalOrderBill.toFixed(2)}`);
        }

        // Task 6: Print final total for customer
        console.log(`Final total for ${customer.name}: ₹${customerGrandTotal.toFixed(2)}\n`);

        // Task 7: Tracking revenue and top spender
        totalAppRevenue += customerGrandTotal;
        if (customerGrandTotal > topSpender.totalSpent) {
            topSpender = { name: customer.name, totalSpent: customerGrandTotal };
        }
    }

    console.log(`Total App Revenue: ₹${totalAppRevenue.toFixed(2)}`);
    console.log(`Top Spender: ${topSpender.name} (₹${topSpender.totalSpent.toFixed(2)})`);
}

// Execute the system
runFoodApp(foodDeliveryDB);


