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

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

//function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //expression produces a value
// //function is a value
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//differences : we can call function declariations before they are defined in the code

//Arrow function
// const calcAge3 = (birthyear) => 2037 - birthyear; //special from of function expression
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   //functions inside the function
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthyear, firstName) {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`);
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`);
//   }
// };

// //return immediately exit the function

// console.log(yearsUntilRetirement(1991, "jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //not zero based
console.log(friends[friends.length - 1]); 
//length is not zero based so we have to -1 to get the last one

friends[2] = 'Yuuka'
console.log(friends);
//only primitive values are immutable with const
// frineds = ['Bob','Alice'] //can't replace it with whole new array

const firstName = 'Jonas'
const jonas = [firstName, 'Lee', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1991,1967,2002,2010,2018]

const age1 =calcAge(years[0]);
const age2 =calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
//doesn't work. because we can't do number - array



