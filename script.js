
let fullName = "Akpata Ndubuisi Joseph";

let firstName = "Akpata";

let favoriteNumber = "6";

firstName = firstName.trim();

let lowerName = firstName.toLowerCase();

let number = Number(favoriteNumber);

let username = lowerName + number;

console.log("==================================");
console.log("ACTIVITY 3");
console.log("==================================");

console.log("Full Name: " + fullName);
console.log("Favourite Number: " + number);
console.log("Username: " + username);


let shortName = lowerName;

if (shortName.length > 8) {
    shortName = shortName.slice(0, 8);
}

let shortUsername = shortName + number;

console.log("Username with 8 character limit: " + shortUsername);


let studentName = "Akpata Ndubuisi Joseph";

let exactScore = "89.5";

studentName = studentName.trim();

let score = Number(exactScore);
let upperName = studentName.toUpperCase();
let roundedScore = Math.round(score);

console.log("");
console.log("==================================");
console.log("ACTIVITY 4");
console.log("==================================");

console.log("Student Name: " +upperName);
console.log("Exact Score: " +score);
console.log("Rounded Score: " + roundedScore);

console.log(
    `${upperName} scored ${roundedScore} marks.`
);


let bonus = Math.floor(Math.random() * 6);

let scoreWithBonus = score+ bonus;

let finalScore = Math.round(scoreWithBonus);

console.log("");
console.log("Bonus Points: " + bonus);
console.log("Final Score: " + finalScore);

console.log(
    `${upperName} received ${bonus} bonus point(s).`
);

console.log(
    `${upperName}'s final score is ${finalScore}.`
);