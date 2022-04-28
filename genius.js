let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criando ordem aleatória de cores
function shuffleOrder(){
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
function lightColor(element, number){
    number  = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    },number - 50)
}

//checa se os botões clicados são os mesmos da ordem do jogo
function checkOrder(){
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`)
        nextLevel(); 
    }
}

//função para o clique do usuário
function click(color){
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}

//função que retorna a cor
function createColorElement(color){
    if(color === 0){
        return green;
    }else if(color === 1){
        return red;
    }else if(color === 2){
        return yellow;
    }else if(color === 3){
        return blue;
    }
}

//função para o próximo nível do jogo
function nextLevel(){
    score++;
    shuffleOrder();
}

//função para GAME OVER
function gameOver(){
    alert(`Pontuação ${score}1\n Você perdeu o jogo! :(\nClique em ok para reiniciar.`)
    order = [];
    clickedOrder = [];

    playgame();
}

//função para iniciar o jogo
function playgame(){
    alert("Bem-vindo ao Genius by Renan! Iniciado novo jogo!");
    score = 0;

    nextLevel();
}

//Adicionando evento de 'click'
green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playgame()
