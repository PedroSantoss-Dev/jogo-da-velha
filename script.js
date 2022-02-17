const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const winningtElement = document.querySelector('[ data-winning-message]');
const winningTextElement = document.querySelector('[ data-winning-message-text]');
const btn = document.querySelector('[ data-btn]');


let isCircle;

const winningcombinations = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

const startGame = () => {
    isCircle = false;
    for(const cell of cellElements) {
        cell.classList.remove('circle');
        cell.classList.remove('x');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener("click", handleClick, {once: true})
    }

    setBoardHover()
    board.classList.add('x')
    winningtElement.classList.remove('show-winning-message')
}

const endGame = (isDrow) => {
    if(isDrow){
        winningTextElement.innerHTML = 'Empate'
    }else{
       winningTextElement.innerHTML = isCircle ? 'O venceu':'X venceu';
    }

    winningtElement.classList.add('show-winning-message')
}
 

const checkForWin = (currentPlayer) => {
     return winningcombinations.some((combination) => {
         return combination.every((index) => {
             return cellElements[index].classList.contains(currentPlayer);
         });
     });
};

checkForDrow = () => {
    return [...cellElements].every((cell) => {
      return  cell.classList.contains("x") || cell.classList.contains("circle")
    });
};

const placeMark =  (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}
const setBoardHover = () => {
    board.classList.remove('circle');
    board.classList.remove('x');

    if (isCircle) {
        board.classList.add('circle');
    }else{
        board.classList.add('x');
    }
}

const swapTurns = () => {
    isCircle = !isCircle;
    setBoardHover()
    
}

const handleClick = (e) =>{
    //colocar marca  (x ou circle)
    const cell = e.target;
    const classToAdd = isCircle ? 'circle':'x';
    
    placeMark(cell, classToAdd)
    
    //verificar por vitoria 
    const isWin = checkForWin(classToAdd);

    //verificar por empate
    const isDrow = checkForDrow();

    if (isWin) {
        endGame(false)
    }else if(isDrow) {
        endGame(true)
    } else {
        //mudar marca
        swapTurns();
    }

} 

startGame()
btn.addEventListener('click', startGame);