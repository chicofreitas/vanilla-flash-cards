import './style.css'
import {cards} from './src/assets/cards'

let i = 0;

function nextQuestion(){

  document.getElementById('answer').classList.remove('hidden');
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('view-comments').classList.add('hidden');
  document.getElementById('comments').classList.add('hidden');

  document.getElementById('message').innerHTML = '';

  let card = cards[i];

  document.getElementById('title').innerHTML = card.title;
  document.getElementById('description').innerHTML = card.description;

  let choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';

  let choices = card.choices;

  Object.keys(choices).map(function(key, value){

      let radio = document.createElement('input');

      radio.type = 'radio';
      radio.name = 'choice';
      radio.value = choices[key];

      let radioContainer = document.createElement('div');
      radioContainer.classList.add("box");

      radioContainer.append(radio);
      radioContainer.append(choices[key]);

      choicesContainer.append(radioContainer);
    });
}

document.getElementById('answer').addEventListener('click', function(event){
  let choice = document.querySelector('input[name="choice"]:checked').value;
//  console.log(choice == cards[i].answer);

  document.getElementById('answer').classList.add('hidden');
  document.getElementById('next').classList.remove('hidden');
  document.getElementById('view-comments').classList.remove('hidden');
  document.getElementById('comments').innerHTML = cards[i].comments;

  if(choice == cards[i].answer){

    let messageBox = document.getElementById('feedback');

    messageBox.classList.remove('hidden');
    messageBox.classList.remove('wrong');
    messageBox.classList.add('right');

    document.getElementById('message').innerHTML = 'Você acertou!';

  }else{
    let messageBox = document.getElementById('feedback');

    messageBox.classList.remove('hidden');
    messageBox.classList.remove('right');
    messageBox.classList.add('wrong');

    document.getElementById('message').innerHTML = 'Resposta errada =/.';
  }

  if(i < (cards.length - 1) ){
    i = i + 1;
  }else{
    let finish = document.getElementById('next');
    finish.value = 'Você respondeu todas as questẽs!';
  }
}, false);

document.getElementById('start').addEventListener('click', function(){
  this.classList.add('hidden');
  document.getElementById('answer').classList.remove('hidden');
  nextQuestion();
}, false);

document.getElementById('view-comments').addEventListener('click', function(){
  document.getElementById('comments').classList.remove('hidden');
}, false);

document.getElementById('next').addEventListener('click', nextQuestion, false);