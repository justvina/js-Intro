// coding challenge #1.

/*
Mark and John are trying to compare their BMI (body mass index),
while is calculated using the formula; BMI = mass / height ** 2
= mass / (mass / height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement
both versions.)
3. Create a boolean variable 'markhigherBMI' containing information
about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weight 78kg and is 1.69m tall.
John weight is 92kg and is 1.95m tall.
TEST DATA 2: Marks weight 95kg and 1.88m tall.
John weight is 85kg and is 1.76m tall.
*/

// #SOLUTION to test 1.
// 1.
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// 2.
// markBMI = massMark / heightMark ** 2;
// console.log(markBMI);
// johnBMI = massJohn / heightJohn ** 2;
// console.log(johnBMI);

// 3.
// markhigherBMI = markBMI > johnBMI
// console.log(markBMI > johnBMI);

// #SOLUTION to test 2.
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// 2.
// markBMI = massMark / (heightMark * heightMark);
// console.log(markBMI);
// johnBMI = massJohn / (heightJohn * heightJohn);
// console.log(johnBMI);

// 3.
// const markhigherBMI= markBMI > johnBMI;
// console.log(markBMI > johnBMI);

// coding challenge #2.

// Use the BMI example from the chanllenge #1,
// and the code you already wrote, and improve it.

// 1. Print a nice output to the console, saying who has the higher BMI.
// The message can be either "Mark's BMI is higher than John's!"
// or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example:
// "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement ✌.

// #SOLUTION
1.

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);
johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

if (johnBMI > markBMI) { 
    console.log("Mark's BMI is higher than John's!")
}else {
    console.log("John's BMI is higher than Mark's!")
}

2.
markBMI = 28.3;
johnBMI = 23.9;
const BMI = `Mark's BMI ${(markBMI)} is higher than John's ${(johnBMI)}!`
console.log(BMI);
