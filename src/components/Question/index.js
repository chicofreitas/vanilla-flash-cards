let answerButton = document.getElementById('answer');
let feedbackButton = document.getElementById('feedback');
let viewCommentButton = document.getElementById('view-comments'); 
let nextButton = document.getElementById('next');

let commentsField = document.getElementById('comments');
let messageField = document.getElementById('message');
let titleField = document.getElementById('title');
let descriptionField = document.getElementById('description');

let messages = {
    true : 'Você acertou!', 
    false : 'Resposta errada =/.',
};

/*  */
function prepareQuestion(){

    answerButton.classList.toggle('hidden');
    
    feedbackButton.classList.toggle('hidden');

    messageField.innerHTML = '';
  }

/*  */
function loadQuestion(card){
  
    prepareQuestion();
  
    titleField.innerHTML = card.title;
    descriptionField.innerHTML = card.description;
  
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
        radioContainer.classList.add('p-4');

        radioContainer.append(radio);
        radioContainer.append(choices[key]);
  
        choicesContainer.append(radioContainer);
    });
}

function nextQuestion(card){
    nextButton.classList.toggle('hidden');
    commentsField.classList.toggle('hidden');
    
    loadQuestion(card);
}

/*  */
function answerQuestion(card, choice){

    answerButton.classList.toggle('hidden');
    nextButton.classList.toggle('hidden');
    commentsField.classList.toggle('hidden');

    commentsField.innerHTML = card.comments;

    feedbackButton.classList.remove(choice != card.answer);
    feedbackButton.classList.add(choice == card.answer);
    feedbackButton.classList.remove('hidden');
    messageField.innerHTML = messages[choice == card.answer];
}

export {prepareQuestion, loadQuestion, answerQuestion, nextQuestion}