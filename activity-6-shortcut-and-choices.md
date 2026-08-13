# Activity 6: Shortcuts and Choices

## Topics Covered

Ternary Operators (with review of Conditional Statements)

## Learning Objective

Students should be able to rewrite simple `if/else` logic as a ternary expression and judge when a ternary operator makes code clearer versus when it makes code harder to read.

Question 1: Group Discussion

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

Question 2.

 Can a ternary operator replace an if/else if/else with three branches?

A ternary operator is designed primarily for choosing between two alternatives: one when a condition is true and another when it is false.

It is possible to nest ternary operators to handle more than two possibilities, but this can make the code difficult to read.

For example:

let score = 75;

let grade = score >= 80
    ? "A"
    : score >= 60
    ? "B"
    : "C";

Although this code works, a regular if/else if/else structure is usually clearer:

let score = 75;

let grade;

if (score >= 80) {
    grade = "A";
} else if (score >= 60) {
    grade = "B";
} else {
    grade = "C";
}

Therefore, while ternary operators can technically be nested to handle multiple branches, they should be used carefully. When there are several conditions, if/else if/else is often easier to understand.

3. When might a ternary operator make code harder to read?

A ternary operator can make code harder to read when the condition is complicated or when several ternary operators are nested together.

For example:

let result = age >= 18 && hasID
    ? "Allowed"
    : age >= 13
    ? "Ask for permission"
    : "Not allowed";

This may be difficult to understand at a glance.

A regular if/else if/else structure would be clearer:

let result;

if (age >= 18 && hasID) {
    result = "Allowed";
} else if (age >= 13) {
    result = "Ask for permission";
} else {
    result = "Not allowed";
}

A good rule is to use a ternary operator when the decision is simple and easy to understand.

For more complicated decisions, regular if/else statements are usually more readable.


Activity 6, Part 2 — Predict the Output

Snippet A
js
let score = 72;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

Predicted Output:

Pass

Reasoning:

Condition: score >= 50 → 72 >= 50 → true
Ternary returns the "true" value → "Pass"
That gets stored in result, then logged.
Snippet B
js
let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message);

Predicted Output:

Your cart is empty

Reasoning:

Condition: cartTotal > 0 → 0 > 0 → false
Ternary returns the "false" value → "Your cart is empty"

Discussion point: Good moment to highlight that 0 is falsy-adjacent here — not because of type coercion, but because the condition explicitly checks > 0. Worth asking the group: "Would this still work correctly if cartTotal was -5?" → yes, still "Your cart is empty", since -5 > 0 is also false.

Snippet C
js
let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`);

Predicted Output:

Stock status: Available

Reasoning:

Condition: stock > 0 → 5 > 0 → true
Ternary returns "Available"
This value gets interpolated directly inside the template literal using ${ }.

Discussion point: This is the most advanced of the three — it shows a ternary nested inside a template literal. Good question for the group: "Why does this work here, but a regular if/else wouldn't fit inside the backticks (`) the same way?"
→ Because template literals expect an expression (something that produces a value) inside ${ }, and a ternary is an expression — while an if/else is a statement and can't be embedded inline like this.

Summary Table
Snippet	Output	Key Concept Tested
A	Pass	Basic ternary with >=
B	Your cart is empty	Ternary with explicit > 0 check (not just truthy/falsy)
C	Stock status: Available	Ternary nested inside a template literal


Activity 6, Part 3 — Debugging Challenge
js
let temperature = 28;
let feeling = temperature > 25 ? "hot" "cold";
console.log(feeling)

let isMember = true
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%);
Discussion — What's Wrong? (Talk through before fixing)

Good questions to pose to the group for each line:

"A ternary has three parts separated by two symbols. Count the symbols in line 2 — are both there?"
"Look at the closing backtick on the last line. Count the backticks — is it a matching pair?"
"Are missing semicolons actually errors in JavaScript, or just a style issue?"
Bug 1 — Missing : in the Ternary (Line 2)
js
let feeling = temperature > 25 ? "hot" "cold";  // ❌

A ternary must have the form condition ? valueIfTrue : valueIfFalse. Here, the colon (:) separating "hot" and "cold" is missing entirely — JavaScript sees two string values sitting next to each other with no operator connecting them, which is a SyntaxError.

Fix:

js
let feeling = temperature > 25 ? "hot" : "cold";
Bug 2 — Unterminated Template Literal (Last Line)
js
console.log(`Discount: ${discount}%);  // ❌

Count the backticks: there's only one, at the very start. A template literal needs an opening and closing backtick. Since the closing backtick is missing, JavaScript keeps reading past the end of the line looking for it — this throws "Unterminated template literal" or similar.

Fix:

js
console.log(`Discount: ${discount}%`);
Minor / Style Issues (worth discussing, not breaking)
js
console.log(feeling)   // missing semicolon
let isMember = true    // missing semicolon

These won't cause errors on their own thanks to automatic semicolon insertion, but it's worth asking the group: "Why might a team still enforce semicolons even when JavaScript doesn't strictly require them?" — consistency, and it avoids edge-case ASI bugs in trickier code.

The Fully Corrected Code
js
let temperature = 28;
let feeling = temperature > 25 ? "hot" : "cold";
console.log(feeling);

let isMember = true;
let discount = isMember ? 10 : 0;
console.log(`Discount: ${discount}%`);
Predicted Output After Fixing
hot
Discount: 10%

Reasoning:

temperature > 25 → 28 > 25 → true → "hot"
isMember → true → ternary returns 10
Template literal correctly interpolates discount as 10

Teaching Point for the Group

Both bugs here are "missing punctuation" bugs — a missing : and a missing backtick. This is a good moment to reinforce a debugging habit: when you get a SyntaxError, don't just stare at the logic — count your matching symbols first: braces {}, parentheses (), backticks `, and the ?/: pair in ternaries. Most syntax errors come down to one of these being unbalanced.