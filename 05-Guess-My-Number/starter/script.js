'use strict';

// console.log(document.querySelector('.message').textContent);

//dom - document object model
//allows javascript to acces html elements and style to manipulate them.
//connection point between html document and javascript
//it's stored in the tree stucture
//document is a special object we can access with javascript
//it's the entry point to the DOM
//dom is not part of javascript langauge
//dom and dom methods are part of web apis that can interact with js

// document.querySelector('.message').textContent = 'Correct  Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// //for input value we use value property
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreBox = document.querySelector('.score');
const numberPlace = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
numberPlace.textContent = '?';
const highscoreDisplay = document.querySelector('.highscore');
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
    const inputValue = Number(document.querySelector('.guess').value);
    if (inputValue === '') {
        message.textContent = 'No number';
    } else if (inputValue === secretNumber) {
        message.textContent = 'Correct Number';
         if (score > highscore) {
           highscore = score;
           highscoreDisplay.textContent = highscore;
         }
    }  else if (inputValue !== secretNumber) {
        inputValue > secretNumber ? message.textContent = 'Too high' : message.textContent = 'Too low';
        score--;
        if (score > 0) {
            scoreBox.textContent = score;
            
        } else {
            message.textContent = 'You lost';
            scoreBox.textContent = '0';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    scoreBox.textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing ...'
    document.querySelector('.guess').value = '';
    numberPlace.textContent = '?';
    
})
