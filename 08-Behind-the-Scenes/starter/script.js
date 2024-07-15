'use strict';

function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName)//variable look up 
    
    function printAge(){
        let output = `${firstName},You are ${age}, born in ${birthYear}` //variable look up
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true; //function scope

            //creating new variable with same name as outer scope's variable
            const firstName = 'Steven'

            //reassigning outer scope's variable
             output = 'NEW OUTPUT'
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str)

            function add(a,b){
                return a + b;
            }
           
        }
        // console.log(str) // not working because let and const has a block scope
        console.log(millenial)
        // add(2,3)//not working because function is block scoped
        console.log(output)
    }
    printAge()

    return age;
}



const firstName = 'Jonas';
calcAge(1991);
// console.log(age); //cannot access
// printAge();//cannot access