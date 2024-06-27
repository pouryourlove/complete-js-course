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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); // it was string before we changed it as Number
    
    // when there is no input
    if (!guess) {
        displayMessage('No number');
    }
    
    // when player wins 
    else if (guess === secretNumber) {
        displayMessage('Correct  Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore
        }
    }
    //when guess is wrong    
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'too high' : 'too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;

            displayMessage('You lost the game')
                
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })
