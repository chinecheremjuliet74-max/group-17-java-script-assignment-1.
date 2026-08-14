/*1. Why would a programmer use a loop instead of just writing the same line of code multiple times?

A programmer uses a loop because it allows the computer to repeat a task automatically without having to write the same code over and over again.
Loops make programs shorter, cleaner, and easier to understand.
They also make updates easier since any change only needs to be made once instead of in many different places.
Using loops reduces the chances of making errors that can happen when repeating code manually.

2. What's the difference between a for loop and a while loop? When might you prefer one over the other?

A for loop is usually used when the number of repetitions is known in advance.
A while loop is better when the number of repetitions is unknown and depends on a condition being met.

Example:
Use a for loop to print numbers from 1 to 10 because you already know how many times the loop should run.
Use a while loop when asking a user to enter a correct password because you do not know how many attempts they will need before entering it correctly.

3. What is an "infinite loop," and what usually causes one by accident? Discuss what you'd look for when debugging one.

a. An infinite loop is a loop that never stops running because the condition that should end it is never satisfied.

b. Common causes of an infinite loop include:
Using a condition that always evaluates to true.
Forgetting to update the variable that controls the loop.
Writing the wrong condition by mistake.

c. When debugging an infinite loop, I would:

Check the loop condition to see if it can eventually become false.
Make sure the loop variable is changing as expected.
Review the logic inside the loop to ensure nothing is preventing the loop from reaching its stopping point.
Use print statements or debugging tools to track the values of variables during each iteration.

4. If a loop is supposed to run 5 times but only runs 4, what part of the loop would you check first?

The first thing I would check is the loop condition because it determines how many times the loop executes.
I would make sure the comparison operator and limits are correct. For example, using < 5 instead of <= 5 can sometimes cause the loop to run fewer times than expected.
I would also verify that the loop counter starts with the correct initial value and is being updated properly after each iteration.

e.	Think of something you do repeatedly in real life (like brushing your teeth in circular motions). How would you describe that action using loop logic (a starting point, a condition, and a step)?

*/
let spoonfull = 0;
let hunger = "hungry";

while (hunger === "hungry") {
    spoonfull++;
console.log("Taking spoonfull " + spoonfull);

    if (spoonfull >= 20) {
        hunger = "full";
    }
}

console.log("I am full and finished eating.");

//SNIPPET A
for (let i = 0; i <= 5; i++) {
console.log(i);


//Output:
//1
//2
//3
//4
//5


    
}

//SNIPPET B
let count = 3;
while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
    
}
console.log("Liftoff!");


//Output: 
//Countdown: 3
//Countdown: 2
//Countdown: 1
//Liftoff!




//SNIPPET C
for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
    
}


//output:
0
2
4
6
8
//The loop starts at 0, prints it, then adds 2 each time until i is no longer less than 10. This means it prints all the even numbers less than 10.





//1
let total = 0;

for (let i = 0; i <= 5; i++) {
    total = total + i
    
}
console.log("Total:" + total);



//2
let count = 5;
while (count > 0) {
    console.log(count);
    
}

/*For Code Snippet 1
The logic of the code is correct, but the output will not show each step of the loop because the console.log() statement is placed outside the for loop.
As a result, the loop runs as expected, but only the final result is displayed after the loop has finished executing.
To see what happens during each iteration, the console.log() statement should be placed inside the loop block.

For Code Snippet 2:
This code will create an infinite loop because the value of count never changes.
Since the loop condition continues to remain true, the loop keeps running without stopping.
To fix the issue, you need to decrease the value of count during each iteration by adding count--; inside the loop, preferably after console.log(count);.
This allows count to eventually reach the stopping condition and end the loop properly.*/

