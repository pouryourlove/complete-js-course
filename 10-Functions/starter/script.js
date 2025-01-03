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

// functions returning functions

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Lingling');
greeterHey('Orm');

greet('Hello')('Lingling');

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr('Hi')('Lingling')

//set this keyword manually

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
    }
}

lufthansa.book(239, 'Lingling');
lufthansa.book(635, 'Mint');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

//does not work
// book(23, 'Yuuka');

//tell javascript manually what this this keyword should look like
//call method
// first one points to the object
book.call(eurowings, 23, 'Yuuka');
console.log(eurowings)

book.call(lufthansa, 239, 'Lingling');
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss)

//apply method
//apply method is similar to call method
//but it takes an array as an argument
// it's not used much in modern js
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData);
console.log(swiss)
