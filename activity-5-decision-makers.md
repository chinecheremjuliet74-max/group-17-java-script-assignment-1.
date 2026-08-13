# Activity 5: Decision Makers

## Part 1: Group Discussion

Question 1. What does it mean for a program to make a "decision"?

A program makes a decision when it evaluates a condition and chooses which block of code to execute based on whether the condition is true or false.

A real-life example is deciding whether to carry an umbrella:

Example
if (isRaining) {
    console.log("Take an umbrella.");
}

Absolutely. Copy and paste **everything below** directly underneath your current Question 1 answer in `activity-5-decision-makers.md`.

````markdown
Question 2. What's the difference between =, ==, and ===?

The three operators have different purposes in JavaScript.

`=` is the assignment operator. It assigns a value to a variable.

Example
let age = 20;


Here, the value `20` is assigned to the variable `age`.

`==` is the loose equality operator. It compares two values and allows JavaScript to perform type conversion when necessary.

Example
5 == "5"


This evaluates to:


true


JavaScript converts the string `"5"` to a number before comparing the values.

`===` is the strict equality operator. It compares both the value and the data type without performing automatic type conversion.

Example
5 === "5"


This evaluates to:


false


The reason is that `5` is a number, while `"5"` is a string.

Using the wrong operator can cause bugs. For example, using `=` when you intended to compare values can change the value of a variable instead of checking a condition. Using `==` can also produce unexpected results because JavaScript may automatically convert data types.

For most comparisons, `===` is preferred because it checks both the value and the data type and avoids unexpected type conversion.


Question 3. If you have an if, an else if, and an else, can more than one block run?

No. In an `if`, `else if`, and `else` structure, only one block runs during a single execution of the statement.

JavaScript checks the conditions from top to bottom. Once it finds the first condition that evaluates to `true`, it executes that block and skips the remaining `else if` and `else` blocks.

For example:


let score = 75;

if (score >= 80) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
````

The output is:


Grade B


The first condition is false because `75` is not greater than or equal to `80`. The `else if` condition is true because `75` is greater than or equal to `60`, so JavaScript executes that block and stops checking the remaining `else` block.

Therefore, only one block in an `if...else if...else` chain can execute during one evaluation.




Question 4. How do && (AND) and || (OR) change the way a condition behaves?

The `&&` operator means AND. It requires both conditions to be true for the entire expression to be true.

For example:

```javascript
let age = 25;
let hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("You can enter.");
}
````

In this example, the person must be at least 18 years old AND have a ticket. Both conditions must be true before the message is displayed.

The `||` operator means OR. It requires at least one of the conditions to be true for the entire expression to be true.

For example:


let isSaturday = false;
let isSunday = true;

if (isSaturday || isSunday) {
    console.log("It is the weekend.");
}


The condition is true because `isSunday` is true, even though `isSaturday` is false.

An everyday example of AND would be:

"To enter the examination hall, you need your examination card AND your school identification."

Both requirements must be satisfied.

An everyday example of OR would be:

"You can pay with cash OR a bank card."

Only one of the two payment methods is required.

Therefore, `&&` requires all specified conditions to be true, while `||` requires at least one condition to be true.

// part 2 predict the output.

// snippet A
let temperature = 15;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
} else {
    console.log("It's cool.");
}
// output
It's cool.


// Snippet B

let age = 20;
let hasID = false;
if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}

Predicted Output:

Entry denied.

// Snippet C

let password = "1234";
if (password === "0000") {
    console.log("Password changed!");
} else {
    console.log("No change.");
}

Predicted Output:

No change.

// Activity 5, Part 3 — Debugging Challenge
js
let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!")
}

// The Bugs
if (hour < 12) {
    console.log("Good morning!");
else if (hour < 18) {   // ❌ missing closing brace `}` before this else if

console.log("Good evening!")   // ❌ missing semicolon

// The Fix

let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
Predicted Output After Fixing
Good afternoon!

// Part 4: Collaborative Technical Challenge

Question: Build a "Movie Ticket Pricer"

The goal is to create a program that asks for a person's age and whether it is a weekday or weekend. The program then uses conditional logic to determine the appropriate movie ticket price.

 Step 1 — Understand the Problem

Our group will use the following pricing rules:

- Children under 13 years old pay ₦1,500.
- Teenagers from 13 to 17 years old pay ₦2,000.
- Adults from 18 to 64 years old pay ₦3,000.
- Seniors 65 years and older pay ₦2,000.
- Everyone receives a ₦500 discount on weekdays.
- Weekend tickets have no additional discount.

These rules allow us to practice `if`, `else if`, `else`, comparison operators, and logical operators.

 Step 2 — Identify Inputs

The program needs two pieces of information:

1. The person's age.
2. Whether the movie is being watched on a weekday or weekend.

For example:


let age = 30;
let day = "weekend";
Step 3 — Identify Processing

The program must determine the person's age category first.

The conditions are:

If the age is below 13, the person is a child.
Else if the age is below 18, the person is a teenager.
Else if the age is below 65, the person is an adult.
Otherwise, the person is a senior.

After determining the base ticket price, the program checks whether the day is a weekday.

If it is a weekday, ₦500 is deducted from the ticket price.

Step 4 — Identify Outputs

The program should display:

The person's age.
Whether the movie is being watched on a weekday or weekend.
The person's ticket category.
The final ticket price.

For example:

Age: 30
Day: weekend
Category: Adult
Ticket price: ₦3000
Step 5 — Plan the Solution

Before writing the code, we can describe the decision logic in plain English:

Check the person's age.
If the person is younger than 13, set the category to Child and the price to ₦1,500.
Otherwise, if the person is younger than 18, set the category to Teenager and the price to ₦2,000.
Otherwise, if the person is younger than 65, set the category to Adult and the price to ₦3,000.
Otherwise, set the category to Senior and the price to ₦2,000.
Check whether the day is a weekday.
If it is a weekday, subtract ₦500 from the ticket price.
Display the final ticket price.
Step 6 — Write the Code
let age = 30;
let day = "weekend";

let category;
let price;

if (age < 13) {
    category = "Child";
    price = 1500;
} else if (age < 18) {
    category = "Teenager";
    price = 2000;
} else if (age < 65) {
    category = "Adult";
    price = 3000;
} else {
    category = "Senior";
    price = 2000;
}

if (day === "weekday") {
    price = price - 500;
}

console.log("Age:", age);
console.log("Day:", day);
console.log("Category:", category);
console.log("Ticket price: ₦" + price);
Step 7 — Test the Program
Test 1

Input:

Age: 8
Day: weekday

The person is a child.

Base price:

₦1,500

Weekday discount:

₦500

Final price:

₦1,000

Expected output:

Age: 8
Day: weekday
Category: Child
Ticket price: ₦1000
Test 2

Input:

Age: 70
Day: weekend

The person is a senior.

Base price:

₦2,000

There is no weekend discount.

Expected output:

Age: 70
Day: weekend
Category: Senior
Ticket price: ₦2000
Test 3

Input:

Age: 30
Day: weekend

The person is an adult.

Base price:

₦3,000

There is no weekend discount.

Expected output:

Age: 30
Day: weekend
Category: Adult
Ticket price: ₦3000
Test 4

Input:

Age: 17
Day: weekday

The person is a teenager.

Base price:

₦2,000

Weekday discount:

₦500

Final price:

₦1,500

Expected output:

Age: 17
Day: weekday
Category: Teenager
Ticket price: ₦1500
Step 8 — Improve the Solution

The conditions should be ordered carefully to prevent incorrect results.

For example, the program checks age < 13 before age < 18. This is important because every child under 13 is also technically younger than 18.

The else if structure ensures that once a matching condition is found, JavaScript does not continue executing the other branches.

The conditions therefore progress from the youngest age group to the oldest:

Under 13       → Child
13–17          → Teenager
18–64          → Adult
65 and above   → Senior

This ordering makes the decision logic clear and prevents overlapping conditions from producing incorrect categories.




