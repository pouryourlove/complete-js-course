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
const scorePlace = document.querySelector('.score');
const numberPlace = document.querySelector('.number');
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again')
const highscorePlace = document.querySelector('.highscore');
const randomNumber = Math.trunc(Math.random()*20) + 1

let score = 20;
let highScore = 0;


checkBtn.addEventListener('click', function(){
    const inputValue = Number(document.querySelector('.guess').value);
   
    if(inputValue === ''){
        message.textContent = "There is no number"
    } else if(inputValue === randomNumber){
        message.textContent = "You got it right!"
        if(score > highScore){
            highScore = score;
            highscorePlace.textContent = highScore;
        }
    } else if(inputValue > 0) {
    inputValue > randomNumber ? message.textContent = "Too high" : message.textContent = "Too low";
    score --;  
    scorePlace.textContent = score;
}
})


againBtn.addEventListener('click', function(){
    score = 20;
    scorePlace.textContent = score;
    message.textContent = "Start guessing!";
    document.querySelector('.guess').value = '';
    numberPlace.textContent = '?'
})