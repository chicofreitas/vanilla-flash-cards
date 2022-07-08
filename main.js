import './style.css'
import {cards} from './src/assets/cards'

let i = 0;

function nextQuestion(){

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
      radio.value = value;

      let radioContainer = document.createElement('div');
      radioContainer.classList.add("box");

      radioContainer.append(radio);
      radioContainer.append(choices[key]);

      choicesContainer.append(radioContainer);
    });

    if(i < (cards.length - 1) ){
      i = i + 1;
    }else{
      console.log('Você concluiu a bateria de questões');
    }
}

document.getElementById('answer').addEventListener('click', function(event){
  let choice = document.querySelector('input[name="choice"]:checked').value;
}, false);

document.getElementById('next').addEventListener('click', nextQuestion, false);