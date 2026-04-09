let car = { brand: "Tesla", model: "X" };

// Add new key
car.color = "Red";  

// Update value
car.model = "Y";  

// Delete key
delete car.brand;  

console.log(car); // { model: "Y", color: "Red" }