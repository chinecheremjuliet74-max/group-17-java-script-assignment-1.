# Activity 5: Decision Makers

## Part 1: Group Discussion

### 1. What does it mean for a program to make a "decision"?

A program makes a decision when it evaluates a condition and chooses which block of code to execute based on whether the condition is true or false.

A real-life example is deciding whether to carry an umbrella:

```javascript
if (isRaining) {
    console.log("Take an umbrella.");
}

Absolutely. Copy and paste **everything below** directly underneath your current Question 1 answer in `activity-5-decision-makers.md`.

````markdown
### 2. What's the difference between =, ==, and ===?

The three operators have different purposes in JavaScript.

`=` is the assignment operator. It assigns a value to a variable.

Example
let age = 20;
````

Here, the value `20` is assigned to the variable `age`.

`==` is the loose equality operator. It compares two values and allows JavaScript to perform type conversion when necessary.

Example
5 == "5"
```

This evaluates to:


true
```

JavaScript converts the string `"5"` to a number before comparing the values.

`===` is the strict equality operator. It compares both the value and the data type without performing automatic type conversion.

Example
5 === "5"
```

This evaluates to:


false
```

The reason is that `5` is a number, while `"5"` is a string.

Using the wrong operator can cause bugs. For example, using `=` when you intended to compare values can change the value of a variable instead of checking a condition. Using `==` can also produce unexpected results because JavaScript may automatically convert data types.

For most comparisons, `===` is preferred because it checks both the value and the data type and avoids unexpected type conversion.


