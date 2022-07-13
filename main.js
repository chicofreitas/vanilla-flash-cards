import './style.css'
import {cards} from './src/assets/cards'
import {
  loadQuestion,
  answerQuestion,
  nextQuestion,
  getRandom
} from './src/components/Question/index'

let i = 0;
let current;
let counter = 1;
let min = 0;
let max = cards.length;

let counterElement = document.getElementById('counter');

//
document.getElementById('start').addEventListener('click', function(){
  
  this.classList.add('hidden');

  counterElement.innerHTML = counter;

  current = cards[ getRandom(min, max) ];

  loadQuestion(current, counter);

}, false);

//
document.getElementById('answer').addEventListener('click', () => {
  
  let choice = document.querySelector('input[name="choice"]:checked').value;
  
  answerQuestion(current, choice);

  counter = counter + 1;

  /* if(counter == max){
    let next = document.getElementById('next');
    next.classList.add('hidden');
  } */

}, false);

//
document.getElementById('next').addEventListener('click', ()=>{

  current = cards[ getRandom(min, max) ];

  nextQuestion(current);

  counterElement.innerHTML = counter;
}, false);