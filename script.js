const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

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
    for(const cell of cellElements) {
        cell.addEventListener("click", handleClick, {once: true})
    }

    isCircle = false;

    board.classList.add('x')
}

const checkForWin = (currentPlayer) => {
     return winningcombinations.some((combination) => {
         return combination.every((index) => {
             return cellElements[index].classList.contains(currentPlayer);
         })
     })
}

const placeMark =  (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}
const swapTurns = () => {
    isCircle = !isCircle;
    board.classList.remove('circle');
    board.classList.remove('x');

    if (isCircle) {
        board.classList.add('circle');
    }else{
        board.classList.add('x');
    }
}

const handleClick = (e) =>{
    //colocar marca  (x ou circle)
    const cell = e.target;
    const classToAdd = isCircle ? 'circle':'x';
    

    placeMark(cell, classToAdd)
    //verificar por vitoria
    const isWin = checkForWin(classToAdd);
    if (isWin) {
        console.log('winner')
    }
    //mudar marca
    swapTurns();
} 

startGame()

