'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price =199) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const lingling = {
    name: 'lingling Lee',
    passport: 24739479284
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.NAME = 'Mrs.' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Checked in')
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, lingling);//primitive type reference type
console.log(flight);
console.log(lingling);

//passing primitive type is like creating a copy outside the function
//when we pass object as function, it's like we just use the same object

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(lingling)
checkIn(flight,lingling)

// first- class function 
// javascript treats functions as first-class citzens
//this means that funtcions are simply values
//functions are just another type of object
//store functions in variables or properties
//pass functions as arguemtns to other functions
// return functions from functions
// call methods on functions

//higher-order function
//a function that receives another function as an argument, or returns a new function or both
//this is only possible because of first-class functions

//function that receives another function
//function that returns new function

// first class function is the feature programming language has
// there is a practice for high-order functions because the langauge offers first-class functions

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);

}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// js uses callback all the time
const high5 = function () {
    console.log('👋');
}

document.body.addEventListener('click', high5);
//addeventlistener is a higher-order function
//it receives another function as an argument
//it returns a new function
//it calls the function

['lingling', 'jason', 'jenny'].forEach(high5);

//abstraction is the process of hiding the details and showing only the essentials

