
//selecionando elementos html
//botao de jogar os dados
// const sendDices = document.getElementById('sendDices');




//span a ser trocado ao apertar os botoes
const result = document.getElementById('result');

const result2 = document.getElementById('result2');



// sendDices.addEventListener('click',dice);
// sendDices.addEventListener('click',diceTwo);


//funcao de rodar dado
function dice() {
   
   let diceOne = Math.floor(Math.random() *(7 - 1) + 1 );
    return diceOne;
}

function diceTwo() {
   
    let diceSecond =  Math.floor(Math.random() *(7 - 1) + 1 );
    return diceSecond;
}

//botao de somar os dados
const sumDices = document.getElementById('sumDices');

sumDices.addEventListener('click', sum)


//span para mostrar as somas
const resultSomas = document.getElementById('somas')

//funcao somar dados

const textoH2 = document.getElementById('textoH2')
textoH2.style.display = 'none'

function sum (){

    let diceOne = dice();
    let diceSecond = diceTwo();
    let sum = diceOne + diceSecond;

    textoH2.style.display = 'block';

    result.innerText = `O primeiro dado é ${diceOne},`;
    result2.innerText = `o segundo dado é ${diceSecond}, tendo a soma de `;
    resultSomas.innerText = `${sum}.`;
    return sum;
}

sumDices.addEventListener('click', diceRoll)

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0];

const paragrafo = document.createElement('p');





//funcao rodar 1000 dados
function diceRoll() {
    for(let i = 1; i <= 1000; i++){
       
        let countDice = sum();
        
       count[countDice - 2] = count[countDice - 2] + 1;

       
    }


    
}    
 





function resetAll(){

    for (let i = 0; i < count.length; i++){
       
        count[i] = 0

    }
}

const textDiv = document.getElementById('textDiv')

function criandoTexto(){

    for(let i = 0; i < count.length ; i++){

        let novoTexto = document.createElement('p');
        textDiv.appendChild(novoTexto);

        novoTexto.classList.add('talvez')
    }    
}

criandoTexto();

sumDices.addEventListener('click', attTexto);

function attTexto(){

    countNumber = 2;

    for( let j = 0; j < count.length ; j++){
       let attText = document.querySelectorAll('.talvez')


       attText[j].innerText =  `Somas de ${countNumber++} : ${count[j]}`;
       attText[j].style.border = '2px solid green';
       attText[j].style.color = '#fff';
       attText[j].style.backgroundColor = '#8338ec';
       attText[j].style.margin = '15px';
       attText[j].style.padding = '5px 10px 5px 10px';
       attText[j].style.width = '100px';
       
       
    }
    
}

const barraDiv = document.getElementById('barraDiv')

function createDiv(){
    for(let i = 0; i < count.length ;i++){
        
       let newDiv = document.createElement('div')
        barraDiv.appendChild(newDiv)
        newDiv.classList.add('teste')
        
    }
   
}

createDiv();


sumDices.addEventListener('click', attDiv)

function attDiv(){

    for( let j = 0; j < count.length ; j++){

        const newDiv = document.querySelectorAll('.teste')
       
        newDiv[j].style.width = `${count[j]}px`; 
        newDiv[j].style.backgroundColor = 'orange'; 
        newDiv[j].style.margin = '10px'; 
        newDiv[j].style.border = '2px solid blue'; 
        newDiv[j].style.height = '30px' ;   
    }   

    resetAll();
    
}









