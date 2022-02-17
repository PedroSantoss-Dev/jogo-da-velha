const cellElements = document.querySelectorAll('[data-cell]');

let isCircle;

const handleClick = (e) =>{
    //colocar marca  (x ou circle)
    const cell = e.target;
    const classToAdd = isCircle ? 'cicle':'x';
    cell.classList.add(classToAdd)
} 

for(const cell of cellElements) {
    cell.addEventListener("click", handleClick, {once: true})
}

