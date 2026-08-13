# Activity 6: Shortcuts and Choices

## Topics Covered

Ternary Operators (with review of Conditional Statements)

## Learning Objective

Students should be able to rewrite simple `if/else` logic as a ternary expression and judge when a ternary operator makes code clearer versus when it makes code harder to read.

## Part 1: Group Discussion
A ternary operator is often described as a "shortcut" for if/else. What do you 
think that means, based on what you've seen? 

Look at this if/else block. As a group, try to say out loud (without writing code yet) 
what the equivalent ternary might look like:

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

Talking it through out loud (as the group is asked to do):

"If age is greater than or equal to 18, log Adult, otherwise log Minor" becomes → "age is greater than or equal to 18, question mark, Adult, colon, Minor."

The Ternary Equivalent:


console.log(age >= 18 ? "Adult" : "Minor");

Or if you want to store it in a variable first:

// write
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

Breaking Down the Syntax
condition        ?     valueIfTrue   :   valueIfFalse
age >= 18        ?     "Adult"       :   "Minor"
Part	Role
age >= 18	The condition being tested (same as the if)
?	Marks the start of "what to do if true"
"Adult"	Runs/returns this if the condition is true
:	Separates true case from false case
"Minor"	Runs/returns this if the condition is false

// Discussion Point for the Group

Notice the ternary removed 4 lines down to 1, but it only worked cleanly here because:

There were only two possible outcomes (Adult / Minor)
Each branch was a single simple value, not multiple statements

This sets up nicely for Question 1 they're asked to reflect on: "A ternary is often described as a shortcut for if/else — what do you think that means?"

Good group answer to arrive at:

A ternary doesn't just save typing — it changes an if/else (a statement that controls what code runs) into an expression that directly produces a value. That's why it can be dropped straight inside a console.log(), a variable assignment, or even inside a template literal — something a regular if/else can't do without extra steps.