# Activity 2: Building Sentences with Code

# Part 1: Group Discussion

*Question 1*

a). What's the difference between the + operator used for math and the + operator used for joining strings? 

The + operator for maths performs addition on numbers.
Example:

Let score = 7+3;
console.log(score);

// Output
10

While the + operator used for joining string, concatenate or joins the two values.
Example:

let name = "Sam";
console.log("Hello, " + name);

//Output

Hello, Sam

b). How does JavaScript decide which one to do?

 JavaScript will look at the data types of the values, if it is;

 - Number + Number, it will perform mathematical operation 
 e.g. 7 + 5
 output: 12

 - String + Number, it will join the as strings
 e.g. "7" + 5
 output: "75"

 - String + String, it will join them as strings
 e.g. "7" + "5"
 output: "75"


*Question 2*

a). Compare this line written two ways: "Hello, " + name + "! You are " + age + "
years old." vs `Hello, ${name}! You are ${age} years old.` Which do you find
easier to read, and why?

"Hello, " + name + "! You are " + age + " years old." - Here + operator is used to join strings and variables together

While in `Hello, ${name}! You are ${age} years old.` Template literial is used - here, variables are inserted directly into the text using ``, ${}


b) Why?

`Hello, ${name}! You are ${age} years old.`This is easier to read because the code is cleaner and more organized (not crowded) because you don't need multiple `+` signs to join the different parts together.


*Question 3*
a). What would happen if you tried to add a number and a string together, like 5 +
"5"? 
5 + "5" 
will output: "55" and not 10

b). Discuss your predictions before checking.
we arrived at the above because the first 5 is a number while the second "5" is a string. when + operator come acroess a string in JavaScript it handles it as string concatenation, it will join them together.

5 + "5"
console.log(5 + "5");

//output: 
55


*Question 4*
Why do you think template literals use backticks (``) instead of regular quotes?

Template literals use `` instead of the regular quotes because backtick tells the JavaScript that the text is a template literal that allows the programmer to easily insert variables  and expression using ${}.
With backtick also you do not need to join the different part of the code with + operator.

# Part 2: Predict the Output

*Snippet A*

let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);

what will the code output?

The code will output: 
"105"
5

*In the first one, the + operator sees a number and a string, so JavaScript converts 10 to a string and joins them together*

*In the second one, JavaScript converts "5" from a string to a number since - operator is only used for subraction in JavaScript.*

*Snippet B*

let price = 20;
let quantity = 3;
console.log(`Total cost: $${price * quantity}`);

What will this code output?
$60

*Snippet C*

let x = 4;
let y = 2;
console.log("Result: " + x + y);
console.log("Result: " + (x + y));

what will this code output?
"42"
6

*In console.log("Result: " + x + y); JavaScript will start the calculation from the left to the right. "Result: " is a string and when a string is added to number, it converts the value to a string so that 4 and 2 are converted to strings*
"Result: " + 4 = 
"4" + 2 = 
"42"

*In console.log(Result: " + (x + y)); The value inside the bracket is calculated first before it is added to the string* 
4 + 2 = 6
"Result: " + 6 
"6"

# Part 3: Debugging Challenge

*1*
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " lastName;
console.log(welcome, " + fullname + "!");

Discuss what's wrong before fixing it

There are two errors:

- There is no + between the " " for a space and lastName
- the variable created is fullName but in console.log it is written as fullname. JavaScript is case sensitive, so fullName and fullname are treated as two different variable names. 

*Corrected Version*

let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;

console.log("welcome, " + fullName + "!");

//output:
welcome, Tunde Okafor!

*2*
let itemPrice = "15"; 
let total = itemPrice + 5; 
console.log(`your total is $${total}`); 
 
Discuss what's wrong before fixing it

we noticed an error

let itemPrice = "15";
The quotation mark make "15" a string, not a number.
so when we do
let total = itemPrice + 5;

+ operator will see a string and a number and so join them together.
"15" + 5, it will output "155"

To fix it remove the quotation mark on 15 to make it a number.

*corrected version*

let itemPrice = 15;
let total = itemPrice + 5;
console.log(`your total is $${total}`);

//Output:
 $20



 # Part 4: Collaborative Technical Challenge

*Scenario:* Build a "Receipt Generator" that asks the user for an item name, its price,
and how many they're buying, then displays a formatted receipt line.
Step 1 — Understand the Problem: Explain the goal in your own words.
Step 2 — Identify Inputs: What three pieces of information do you need?
Step 3 — Identify Processing: What calculation turns those inputs into a total?
Step 4 — Identify Outputs: What should the final receipt look like?
Step 5 — Plan the Solution: Write the steps in plain English first.
Step 6 — Write the Code: Use variables, a calculation, and a template literal to build
the final message.
Step 7 — Test the Program:
● Item: "Notebook", Price: 2.50, Quantity: 4
● Item: "Pen", Price: 0.75, Quantity: 10
● Quantity entered as 0
● Price entered as "free" (non-numeric)
● Quantity entered as 1
Step 8 — Improve the Solution: Could you make the output easier to read by
rounding the total or adding a currency symbol? Discuss as a group


*Step 1 — Understand the Problem*

We are to create a program that asks the user for the item name, price, and quantity, calculates the total cost, and then displays the receipt.

*Step 2 — Identify Inputs*

The three pieces of information needed are:

Item name — e.g., Indomie
Price — e.g., ₦6,000
Quantity — e.g., 2

*Step 3 — Identify Processing*

These program should calculate the total cost by multiplying the price by the quantity.

Total = Price × Quantity

*Step 4 — Identify Outputs*

The receipt could look like:
Item: Yam
Price: ₦4,000
Quantity: 2
Total: ₦8000

*Step 5 — Plan the Solution*
- Prompt the user for the item name.
- Prompt the user for the item's price.
- Prompt the user how many items they are buying.
- Store each answer in a variable.
- Convert the price and quantity to numbers.
- Multiply the price by the quantity to get the total.
- Use a template literal to display the receipt.

*Step 6 — Write the Code*

let itemName = prompt("What is the item name?");
let price = Number(prompt("What is the price?"));
let quantity = Number(prompt("How many are you buying?"));

let total = price * quantity;

console.log(`
Receipt
Item: ${itemName}
Price: ₦${price}
Quantity: ${quantity}
Total: ₦${total}
`);


*Step 7 — Test the Program*

We can test the program with each of the given cases.

 *1*
When: 

Item: Notebook
Price: 2.50
Quantity: 4

Calculation:

2.50 × 4 = 10.00

//output:

Receipt
Item: Notebook
Price: ₦2.5
Quantity: 4
Total: ₦10

*2*
When: 

Item: Pen
Price: 0.75
Quantity: 10

Calculation: price x Quantity

0.75 × 10 = 7.50

//output:

Receipt
Item: Pen
Price: ₦0.75
Quantity: 10
Total: ₦7.5

*3* 
When:
Quantity is 0
If the quantity is 0:

Price × 0 = 0

So the total will be:

Total: ₦0


*4*
When Price is "free": If the user enters:
free
then:

Number("free")

Output:
NaN

NaN means "Not a Number." (because the price is not a number)

Therefore, the calculation will produce:

Total: ₦NaN

*5*
When the Quantity is 1: If the quantity is 1, the total will simply equal the price.

For example, if the price is 2.50:

2.50 × 1 = 2.50

//output:

Total: ₦2.5

*Step 8 — Improve the Solution:*
 Could you make the output easier to read by rounding the total or adding a currency symbol? Discuss as a group.

 Yes. We can improve the receipt by adding the ₦ currency symbol and rounding up the amounts to two decimal places.


let itemName = prompt("What is the item name?");
let price = Number(prompt("What is the price?"));
let quantity = Number(prompt("How many are you buying?"));

let total = price * quantity;

console.log(`
Receipt
Item: ${itemName}
Price: ₦${price.toFixed(2)}
Quantity: ${quantity}
Total: ₦${total.toFixed(2)}
`);


We improve the receipt by adding the ₦ currency symbol and using .toFixed(2) to display prices and totals with two decimal places.


*Part 5: Extension Challenge*
Add a "discount code" variable to your program. If a discount amount (as a number)
is applied, subtract it from the total before displaying the final receipt line

let itemName = prompt("Item name:");
let price = Number(prompt("Price:"));
let quantity = Number(prompt("Quantity:"));
let discountCode = prompt("Discount code:");
let discount = Number(prompt("Discount amount:"));

let total = price * quantity - discount;

console.log(`Item: ${itemName}, Price: ₦${price.toFixed(2)}, Quantity: ${quantity}, Discount: ${discountCode}, Final Total: ₦${total.toFixed(2)}`);