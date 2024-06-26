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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); // it was string before we changed it as Number
    
    if (!guess) {
        document.querySelector('.message').textContent = 'No number'
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct  Number!';
    } else if (guess > secretNumber) {
        if (score >1) {
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;

            document.querySelector('.message').textContent = 'You lost the game';
            
      }
    
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent =
              'You lost the game';

        }
    }
    
})