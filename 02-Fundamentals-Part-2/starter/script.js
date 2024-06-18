//strict mode: a special js mode that makes us write a secure js code.
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;
// //in the future there might be the name of this so stirct mode reserve these words for variable
// const if = 23;

//whole chuck of code that can be reusable

// function logger() {
//   console.log("My name is Juyeon");
// }

// logger(); //calling, running, invoking function
// logger();
// logger();

// //recieve data and reutnr the data

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples ${oranges} oranges`;
//   return juice; //return any  value from the function
// }

// const appleJuice = fruitProcessor(5, 0); //arguments
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

//function declartion
//parameter is like a placeholder
//argument is a real value we want to put in the placeholder

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//expression produces a value
//function is a value
const age2 = calcAge2(1991);
console.log(age1, age2);

//differences : we can call function declariations before they are defined in the code
