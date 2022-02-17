const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

let isCircle;

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
    //mudar marca
    swapTurns();
} 

for(const cell of cellElements) {
    cell.addEventListener("click", handleClick, {once: true})
}

