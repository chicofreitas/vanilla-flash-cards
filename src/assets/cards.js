export function CardsContainer(){ 
    const cardList = [
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

    return cardList;
}