'use strict';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     console.log(firstName)//variable look up
    
//     function printAge(){
//         let output = `${firstName},You are ${age}, born in ${birthYear}` //variable look up
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true; //function scope

//             //creating new variable with same name as outer scope's variable
//             const firstName = 'Steven'

//             //reassigning outer scope's variable
//              output = 'NEW OUTPUT'
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str)

//             function add(a,b){
//                 return a + b;
//             }
           
//         }
//         // console.log(str) // not working because let and const has a block scope
//         console.log(millenial)
//         // add(2,3)//not working because function is block scoped
//         console.log(output)
//     }
//     printAge()

//     return age;
// }



// const firstName = 'Jonas';
// calcAge(1991);
// console.log(age); //cannot access
// printAge();//cannot access

//variables
// console.log(me); //undefined because it's hoisted with the value of undefined
// console.log(job);//it's in the temporal dead zone(start of the begginning of the current scope until the variable is declared)
// console.log(year);//same as let

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //function

// console.log(addDecl(2,3));//5
// console.log(addExpr(2,3));//error because of temporal dead zone
// console.log(addArrow(2,3));//error because of temporal dead zone


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function (a, b) {
//     return a + b
// }

// const addArrow = (a, b) => a + b;

// //const 대신 var써도 에러메세지 나온다.=>addArrow is not a function
// //because with var it will be undefined so it's like undefined(2,3)

// //Example
// console.log(numProducts) //undefined -> falsy value
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted'); //all products deleted because of hoisting
// }

// var x = 1; //create property on the window object
// let y = 2;
// const z = 3;

// console.log(x === window.x); //true
// console.log(y === window.y); //false
// console.log(z === window.z); //false


// console.log(this)

// const calcAge = function(birthYear){
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1991)

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1980)

// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge()

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge
// matilda.calcAge()//this keyword always points to the object that called the method.


// const f = jonas.calcAge();
// f()//regular function call.isn't attached to any object

var firstName = 'Matilda'

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
      console.log(2037 - this.year);
      
      //solution 1
    //   const self = this; //self or that
    //   const isMillenial = function () {
    //     console.log(self); //jonas object
    //     console.log(this); //undefined
    //     console.log(this.year >= 1981 && this.year <= 1996);
      //   };
      
      //solution 2
      const isMillenial = () => {
        console.log(self); //jonas object
        console.log(this); //undefined
        console.log(this.year >= 1981 && this.year <= 1996);
      };
      isMillenial()//regular function call
    },
  
    greet: () => {
      console.log(this); //window object
      console.log(`Hey ${this.firstName}`);//Hey Matilda 
      //parent scope is a global scope
    }

    //never make arrow function as a method
  
};

jonas.greet();//undefined
console.log(this.firstName) //undefined
jonas.calcAge(); 

//argument keyword is only avaiable for regular function

const addExpr = function (a, b) {
    console.log(arguments)
    return a+b
}

addExpr(2, 5);
addExpr(2,5, 8, 12)

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b
}

addArrow(2, 5, 8);