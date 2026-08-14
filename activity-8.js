
// =======================PART 1 =======================================
console.log("=================================================================="); 
/* Imagine a vending machine: you put in money and a selection, and it gives you a snack. How is that similar to how a function works?

A vending machine stores different snacks until one makes a request. Also, a function stores a set of instructions and waits until it is called. When called, it carries out the instructions and produces an output.

What's the difference between a "parameter" and an "argument"? Many beginners mix these up — discuss until your group agrees on clear definitions.

A parameter is a variable listed in a function's definition. It acts as a placeholder for the value that will be provided later.
An argument is the actual value that is passed to the function when it is called.

For eg.
The parameter is like the blank space on an order form where you write your choice.
The argument is the actual item you write in that space.

3. Why would a programmer create a function instead of just writing the same block of code every time it's needed?

A programmer creates a function to avoid repeating the same code multiple times. In order words, it saves time and stress.

4. If a function is declared but never called, what happens when the program runs? Discuss your prediction.

If a function is declared but never called, the program will run without executing the code inside that function. The function will exist in the computer memory, but it won't run until it is called.


Can a function have more than one parameter? What do you think happens if you call the function without providing all the arguments it expects?

Yes, a function can have more than a parameter. When no argument is provided for a parameter, it will be undefined. This can further lead to errorts when running the program.

*/
// =======================PART 2 ======================================= 
// Snippet A 
function greet(name){
    console.log("Hello " + name + "!");  
}

greet("Ifeoma")    //Output = Hello Ifeoma!
greet("David")     //Output = Hello David!


// Snippet B
function addNumbers(a,b){
    console.log(a + b);  
}
addNumbers(4,7)   //Ouput 11
addNumbers(10)    //NAN


// Snippet C
function sayHi(){
    console.log("Hi there"); 
}

console.log("Before calling the function"); //Before calling the function
sayHi();                                    //Hi There
console.log("After calling the function"); //after calling the function


console.log("==================================================================");       
// ======================= PART 3 ======================================= 
function calculateArea(length, width){
    console.log(length * width);
    
}

function displayMessage(msg){
    console.log(msg); 
}
displayMessage("calculate area ready")
calculateArea(5,10)

// Error: The first function does not have a closing tag, and is syntax


console.log("=================================================================="); 

// ======================= PART 4 ======================================= 

// Step 1: Understand the Problem:
// To build a Tip Calculator Toolkit with two functions

// Step 2: Identify Inputs
// The program needs:
// - Bill amount (e.g., 5000)
// - Tip percentage (e.g. 5%)

// Step 3: Identify Processing
// Formula:
// Tip = Bill × (Tip Percentage ÷ 100)
// Total = Bill + Tip

// Step 4:
// The first function should receive the bill and percentage
// and return the tip amount.

// Step 5:
// The program will use two functions for better readability.


//Step 6: Write the Code
// Calculate tip
const getTipAmount = (billAmount, percentage = 5) => {
    return billAmount * (percentage / 100);
};

let billAmount = 5000;
let tipAmount = getTipAmount(billAmount, 10);


// Formatting and displaying of results
const createReceipt = (billAmount, tipAmount) => {
    let totalAmount = billAmount + tipAmount;

return `Bill: ₦${billAmount}
Tip: ₦${tipAmount}
Total: ₦${totalAmount}`;
};

// Display final message
console.log(createReceipt(billAmount, tipAmount));



// Step 7 — Test the Program
// Tip Amount: ₦500
// Bill: ₦5000
// Tip: ₦500
// Total: ₦5500


console.log("=================================================================="); 
// ======================= PART 5 ======================================= 
// Calculate tip (tip = 5%)
// const getTipAmount = (billAmount, percentage = 5) =>
//     billAmount * (percentage / 100);

// // Create receipt
// const createReceipt = (billAmount, tipAmount) =>
//     `Bill: ₦${billAmount}
// Tip: ₦${tipAmount}
// Total: ₦${billAmount + tipAmount}`;

// // Arrow function to split the total bill
// const splitBill = (billAmount, tipAmount, numberOfPeople) =>
//     (billAmount + tipAmount) / numberOfPeople;

// // Calculate values
// let billAmount = 5000;
// let tipAmount = getTipAmount(billAmount); // Uses default 5%
// let people = 5;
// let amountPerPerson = splitBill(billAmount, tipAmount, people);

// // Display results
// console.log("Tip Amount: ₦" + tipAmount);
// console.log(createReceipt(billAmount, tipAmount));
// console.log(`Amount per Person (${people} people): ₦${amountPerPerson}`);