const newGrid = document.querySelector('#newGrid');
const container = document.querySelector('#container');

function changeColor() {
    this.classList.add('painted');
}

function makeGrid() {
    // REMOVE OLD GRID
    const container = document.querySelector('#container')
    container.textContent = '';
// BUTTON PROMPTS USER FOR SIDE LENGTH FOR NEW GRID
    let sideLength = Number(prompt('How long should each side be?'));
    while (isNaN(sideLength)) {
        sideLength = Number(prompt('How long should each side be?'));
    }
    container.setAttribute('style', 'grid-template-columns: repeat('+ sideLength +', 1fr)');
// 960PX MAX WIDTH
    for (let i = 0; i < sideLength ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
}
}

newGrid.addEventListener('click', makeGrid);