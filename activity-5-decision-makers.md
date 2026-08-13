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




