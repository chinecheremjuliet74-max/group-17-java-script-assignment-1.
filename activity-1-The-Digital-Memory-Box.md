# Activity 1 - Digital Memory Box

# Part 1

Question 1:
Imagine you're building a program that needs to remember a user's name soit can greet them later. How would a variable help the program do this?

Since variable is a container for storing data, it can store the username within the program, and allow the program use or reference the stored name to greet the user later.

Question 2:
a).What's the difference between console.log(), alert(), prompt(), and confirm()?

- Console.log() is a command that tells the program to display your code in the browser console. It also help to inspect variable and object, to find and debug errors.

- Alert() is a pop-up box that shows information or warning to the user.

- Prompt() is used to retrieve information from the user. It displays a dialogue box that ask the user for input.

- Confirm() ask the user to accept or to reject an action

b). When might a programmer choose one over another?

A programmer will choose;
- console.log when he want to display code on the browser console, inspect variable or debug errors.

- alert, when he want to notify the user.

- prompt when he wants to collect information.

- confirm, when he wants to ask user for confirmation.

*Question 3*

a). If you declared a variable with let instead of const, what would that let you do that you couldn't do otherwise? 

- let can allow you to reassign a value to a variable, const could allow that.
- let can also allow you to declare a variable without assignment.

eg. 
let username = "Joy"
username = "Oge"
(this will give an output)

but
const username = "Joy"
username = "Oge"
(this will output an error)

b). Why might a programmer choose const on purpose, even though let seems more flexible?
A programmer might choose const:
- when he knows that the value assigned will not be chamged or updated.
- when he does not want the variable's value to accidently change.

*Question 4*
JavaScript has several basic data types (numbers, strings, booleans, etc.) Why do you think a programming language needs different types instead of just one type for everything?

A programming Language use different data types instead of one because using different data types help JavaScript to know the type of data it is working with, so as to know how to store and process it correctly.

*Question 5*
If two people on your team pick different variable names for the same piece of information (e.g., userName vs name1), what problems could that cause later?

- It can cause error in the program.
- It can also cause confusion for the team.


# Part 2: Predict the Output

*Snippet A*
let age = 25;
console.log (age);

age = "twenty-five";
console.log(age);

what will this code output?

- It will output: 
25
twenty-five

*snippet B*

const isRaining = true;
console.log("Is it raining?" + isRaining);

what will this output?

The code will output: 
true

*Snippet C*

let favouriteNumber;
console.log(favouriteNumber);

What will this code output?

it will output: Undefine


# Part 3: Debugging challenge

let userName = "Amara"
console.log(username);

Const favouriteColor = "blue";
console.log(favoriteColor);

Discuss as a group: What's wrong with this code? Once you've identified the issues, fix them and explain how the corrected version works.

Const is supposed to be const, keywords in JavaScript are lowercase and not uppercase.

corrected code

let username = "Amara";
console.log(username);

const favouriteColor = "blue";
console.log (favouriteColor);

//it will output;
Amara 
blue

*Explanation:*
let username = "Amara" let creates a variable called username and store "Amara"
console.log(username); will display Amara in the console

const favouriteColor = "blue"; this creates a constant called favourite colour and store "blue".
console. log(favourite); will print the display blue.


# Part 4: Collaborative Technical Challenge

*Scenario:* Your group needs to build a simple "Welcome Program" that greets a new user by name and tells them what year they were born, based on their age.

Step 1 — Understand the Problem: In your own words, explain what this program
needs to do.
Step 2 — Identify Inputs: What information does the program need from the user?
Step 3 — Identify Processing: What will the program need to calculate or figure out?
Step 4 — Identify Outputs: What should the program display to the user?
Step 5 — Plan the Solution: Before writing any code, write out the steps in plain
English.
Step 6 — Write the Code: Use prompt() to collect the user's name and age, store
them in variables, and use console.log() or alert() to greet them.
Step 7 — Test the Program: Try these test cases:
● Name: "Sam", Age: 20
● Name: "Bola", Age: 45
Step 8 — Improve the Solution: As a group, discuss: is your variable naming clear?
Could someone else read your code and immediately understand what it does?


*Step 1: understand the problem*

The program should welcome a new user by name and calculate the year they were born based on their age.

*Step 2: Identify Input*

The program will require;
- The user's name to be able to welcome by name
- The user's age to be able to calculate their year of birth

*Step 3: Identify Processing*

The program should calculate the user’s birth year by subtracting their age from the current year.

Example: 2026 − age = year of birth.

*Step 4: Identify Outputs*
The program should show a welcome message containing;
- The user's name
- Their age
- Their year of birth

*Step 5: Plan the solution*

- Prompt the user to enter his name
- store the name in a variable
- Prompt the user for his age
- store the age in a variable
- Find the birth year by substracting the age from 2026
- when we print to the console, it will display a welcome message with the user's name and birth year

*Step 6: Write the code*

let username = prompt("What is your name?");
let age = prompt("How old are you?");

let yearofbirth = 2026 - Number(age);

console.log("Welcome," + username + "!");
console.log(you were born in " + yearofbirth);

*Explanation*
Prompt retrieves user's name and age. Number(age) conerts the age from text to a number so Javascript can perform the subtraction. Finally,console.log() then displays the welcome message and estimated year of birth. 

*Step 7: we test the program using two given cases

● *Name: "Sam", Age: 20*

let username = prompt("What is your name?");
let age = prompt("How old are you?");

let yearOfBirth = 2026 - Number(age);

console.log("Welcome," + username + "!");
console.log("you were born in " + yearOfBirth);

//When the program runs, enter:
Name: Sam
Age: 20


**//it will output**

Welcome, Sam
you were born in 2006


● *Name: "Bola", Age: 45*

let username = prompt ("What is your name?");
let age = prompt ("How old are you?");

let yearOfBirth = 2026 - Number(age);

console.log ("Welcome," + username + "!");
console.log (you were born in " + yearOfBirth);

//When the program runs, enter:
Name: Bola
Age: 45

**//Output**

Welcome, Bola!
you were born in 1981


*Step 8 — Improve the Solution:* 

yes the variable name are clear and understandable.

# Part 5: Extension Challenge

a). Modify your program so that it also stores the user's favorite hobby in a variable and includes it in the final greeting message. 

let username = prompt("What is your name?");
let age = prompt("How old are you?");
let hobby = prompt("What is your favourite hobby?");

let yearOfBirth = 2026 - Number(age);

console.log("Welcome, " + username + "!");
console.log("You were born in " + yearOfBirth + ".");
console.log("Your favourite hobby is " + hobby + ".");

b). Discuss what data type the hobby should be stored as, and why.

The hobby should be stored as string because hobby is usually represented by text such as "Reading" etc

