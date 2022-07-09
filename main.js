import './style.css'
import {cards} from './src/assets/cards'
import {
  loadQuestion,
  answerQuestion,
  nextQuestion
} from './src/components/Question/index'

let i = 0;


//
document.getElementById('start').addEventListener('click', function(){
  
  this.classList.add('hidden');

  loadQuestion(cards[i]);

}, false);

//
document.getElementById('answer').addEventListener('click', () => {
  
  let choice = document.querySelector('input[name="choice"]:checked').value;
  
  answerQuestion(cards[i], choice);

  if(i < (1) ){
    i = i + 1;
  }else{
      let finish = document.getElementById('next');
      finish.value = 'Você respondeu todas as questẽs!';
  }
}, false);

//
document.getElementById('next').addEventListener('click', ()=>{
  nextQuestion(cards[i]);
}, false);