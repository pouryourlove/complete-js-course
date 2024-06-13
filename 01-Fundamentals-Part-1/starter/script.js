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

let age = 30;
age = 31;

//const: not change at any point

const birthYear = 1991;
// birthYear = 1990; //doesn't work

// const job; //doesn't work
// Use const by default and let if value needs to be changed at some point

var job = "programmer";
job = "teacher"; //mutate is available

lastName = "Lee"; //it works but always write variable
console.log(lastName);
