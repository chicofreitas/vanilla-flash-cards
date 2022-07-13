import './style.css'
import {cards} from './src/assets/cards'
import {
  loadQuestion,
  answerQuestion,
  nextQuestion,
  getRandom
} from './src/components/Question/index'

let current;
let counter = 1;
let counterMax = 10;
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

  if(counter == counterMax){
    let next = document.getElementById('next');
    next.classList.add('hidden');
    let score = document.getElementById('score');
    score.innerHTML = "Ufa!! Você acabou de responder " + counterMax + ' cartões.';
    score.classList.toggle('hidden');
  }

}, false);

//
document.getElementById('next').addEventListener('click', ()=>{

  counter = counter + 1;
  
  current = cards[ getRandom(min, max) ];

  nextQuestion(current);

  counterElement.innerHTML = counter;
}, false);