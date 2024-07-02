'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal); // node
//querySelector: when there are multiple elements that match,
//only the first one will be picked

for (let i = 0; i < btnsOpenModal.length; i++){
    console.log(btnCloseModal[i].textContent);
}

