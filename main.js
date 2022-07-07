import './style.css'
import {CardsContainer} from './src/assets/cards'

const cards = [
  {
  'title': 'A lei no 8112/90 diz que é tudo mentira',
  'description' : 'Alguma descrição doida',
  'choices' : {
      op1 :'Certo',
      op2 :'Errado'
  },
  'answer':'Certo',
  'comments': 'Some dummy comment...'
  },

  {
  'title': 'Segundo card da lei no 8112/90 que diz algo',
  'description' : 'Alguma descrição doida da segunda pergunta.',
  'choices' : {
      '1':'A Lei mente',
      '2':'A Lei é verdadeira',
      '3':'Nenuma das alternativas'
  },
  'answer':'A Lei é verdadeira',
  'comments': 'One more dummy comment for the 2nd card...'
  }
];

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
}

document.getElementById('answer').addEventListener('click', function(event){
  let choice = document.querySelector('input[name="choice"]:checked').value;
  console.log(cards[i].answer, choice);
  i += 1;
}, false);

document.getElementById('next').addEventListener('click', nextQuestion, false);