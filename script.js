const reset = document.querySelector('#reset');
const container = document.querySelector('#container');

function changeColor() {
    this.classList.add('painted');
}

function resetGrid() {
// BUTTON CLEARS CURRENT GRID
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('painted'));
// BUTTON PROMPTS USER FOR SIDE LENGTH FOR NEW GRID
    let sideLength = Number(prompt('How long should each side be?'));
    while (sideLength === NaN) {
        sideLength = Number(prompt('How long should each side be?'));
    }
    console.log(sideLength);
// 960PX WIDTH
}

for (let i = 0; i < 64; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', changeColor);
    container.appendChild(div);
}

reset.addEventListener('click', resetGrid);