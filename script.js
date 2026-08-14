
const greet = function() {
    console.log("Hello");
};
greet();


const square = num => num * num;


//   Part 2: Predict the Output

// Snippet A

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(3, 4));

//Answer:

// 12


//  Snippet B

const double = num => num * 2;
console.log(double(6));
console.log(double(0));

//Answer:

//12
//0

//   Snippet C

const introduce = (name, age) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("CHIBUZOR", 22);

//Answer:

//My name is CHIBUZOR and I am 22 years old.




// Part 3: Debugging Challenge

// Question 1

const greetUser = (name) => {
    console.log("Welcome, " + name);
};
greetUser("JULIET");

// Output:

// Welcome, JULIET


// Question 2

const subtract = (a, b) => a - b;
console.log(subtract(10, 4));

// Output:

// 6


// STAGE 2

// Convert percentage to decimal
const percentageToDecimal = percent => percent / 100;
// Calculate rectangle area
const rectangleArea = (length, width) => length * width;
// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32;
// Test the functions
console.log("25% as decimal:", percentageToDecimal(25));
console.log("Rectangle area:", rectangleArea(4, 9));
console.log("35°C in Fahrenheit:", celsiusToFahrenheit(35));
console.log("100°C in Fahrenheit:", celsiusToFahrenheit(100));
console.log("Rectangle area:", rectangleArea(10, 5));

// Expected results

// 25% as decimal: 0.25
// Rectangle area: 36
// 35°C in Fahrenheit: 95
// 100°C in Fahrenheit: 212
// Rectangle area: 50



const fahrenheitToCelsius = fahrenheit =>
    (fahrenheit - 32) * 5 / 9;

console.log("95°F in Celsius:", fahrenheitToCelsius(95));
console.log("212°F in Celsius:", fahrenheitToCelsius(212));

//* Expected:

// 95°F in Celsius: 35
// 212°F in Celsius: 100





// ACTIVITY 10: ORDER CHECKOUT PROGRAM

//SNIPPET A
const getDiscount = (total) => total >= 100 ? total * 0.1 : 0;

let orderTotal = 120;
let discount = getDiscount(orderTotal);

console.log(`Discount: $${discount}`);
console.log(`Final total: $${orderTotal - discount}`);

//Discount: $12
//Final total: $108


//SNIPPET B
function classifyNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
    }
}

classifyNumbers(4);

//1 is odd
//2 is even
//3 is odd
//4 is even

//SNIPPET C
const formatName = (name) => name.trim().toUpperCase();

let rawInput = "  Juliet  ";

console.log(`Welcome, ${formatName(rawInput)}!`);

     
           //Step 6 — Write the Code: Build the program using functions, conditionals/ternaries, and template literals together.

let itemName = "Backpack";
let price = 30;
let quantity = 2;
// Calculate subtotal
function calculateSubtotal(price, quantity) {
    return price * quantity;
}
let subtotal = calculateSubtotal(price, quantity);

// Free shipping for orders of $50 or more
let shipping = subtotal >= 50 ? 0 : 5;

// Calculate final total
let finalTotal = subtotal + shipping;

// Display formatted receipt
console.log(`
========== ORDER RECEIPT ==========
Item: ${itemName}
Price: $${price.toFixed(2)}
Quantity: ${quantity}
Subtotal: $${subtotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Final Total: $${finalTotal.toFixed(2)}
===================================
`);

