console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i<=100; i++) 
{
    if (i % 2 === 0) {
        continue;
    }
    
    console.log("Number is: " + i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let result;
for (let i = 1; i<=100; i++) {
    result = "";
    if (i % 3 === 0) result += "FIZZ";
    if (i % 5 === 0) result += "BUZZ";
    if (result !== "") console.log(`${i}. ${result}`);
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let i = 1;
while (i <=100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

i = 1;
do {
    result = "NEW";
    if (i % 3 === 0) result += "FIZZ";
    if (i % 5 === 0) result += "BUZZ";
    if (result !== "NEW") console.log(`${i}. ${result}`)
    i++;
} while (i<=100)

//exercise 4
console.log("EXERCISE 4:\n==========\n");
value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let found = false;

console.log("Upper bound is n which is " + n);

for (let i=1; i<=n; i++) {
    if (i === value) {
        console.log("Found the value " + i);
        found = true;
        break;
    }
}

if (!found) {
    console.log("Value " + value + " was not found.");
}

//Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100); 
result = "";


console.log("Lower bound = " + start + ". Upper is " + end);
console.log("fizzDivisor is " + fizzDivisor);
console.log("buzzDivisor is " + buzzDivisor);

for (let i = start; i<=end; i++) {
    result = "";
    if (i % fizzDivisor === 0) result += "FIZZ";
    if (i % buzzDivisor === 0) result += "BUZZ";
    if (result !== "") console.log(`${i}. ${result}`)
}