/*
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

//value: piece of data

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = "jonas";
let firstNamePerson;

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// value is either object or primitive value
//primitive data
//number,string,boolean
//undefined(value taken by a varaible that is not yet defined)
//null(means empty value)
//symbol(value that is unique and cannot be changed)
//Bingint(larger integers than the number type can hold)

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

//dynamic typing
javascriptIsFun = "YES"; //change the value true to "YES"
//undefined = empty value but decalred
let year;
console.log(year); //undefined

year = 1991;
console.log(typeof year);

console.log(typeof null); //object. error in js
*/

//let: that can change later

// let age = 30;
// age = 31;

// //const: not change at any point

// const birthYear = 1991;
// // birthYear = 1990; //doesn't work

// // const job; //doesn't work
// // Use const by default and let if value needs to be changed at some point

// var job = "programmer";
// job = "teacher"; //mutate is available

// lastName = "Lee"; //it works but always write variable
// console.log(lastName);
//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 **3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "juyeon";
// const lastName = "lee";
// console.log(firstName + " " + lastName);

// //Assingment operators
// let x = 10 + 5; //15
// x += 10; // x = x+ 10 = 25
// x *= 4; // x = x*4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25-10-5; // x = y = 10, x= 10
// console.log(x,y);

// const averageAge = (ageJonas + ageSarah)/2;
// console.log(ageJonas,ageSarah, averageAge);

const firstName = 'Jonas';
const job='teacher';
const birthYear = 1991;
const year=2037;

const jonas = "I'm "+ firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//templete string: assemble multiple pieces into one final string

const jonasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(jonasNew)

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines ');

console.log(`String 
multiple
lines`);