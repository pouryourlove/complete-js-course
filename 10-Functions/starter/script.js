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