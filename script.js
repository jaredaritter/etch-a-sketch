const newGrid = document.querySelector('#newGrid');
const silver = document.querySelector('#silver');
let colorChoice = 'default';

function changeColor() {
    if (colorChoice === 'default') {
        this.classList.remove('silver');
        this.classList.add('painted');
    } else {
        this.classList.remove('painted');
        this.classList.add('silver');
    }
}

function clearGrid() {
    const container = document.querySelector('#container')
    container.textContent = '';
}

function getLength() {
    let sideLength = Number(prompt('How long should each side be?'));
    while (isNaN(sideLength)) {
        sideLength = Number(prompt('How long should each side be?'));
    }
    return sideLength;
}

function makeGrid() {
    clearGrid();
    const sideLength = getLength();
    // DYNAMIC SETTING OF NUMBER OF COLUMNS TO MAINTAIN EQUAL HEIGHT AND WIDTH
    const container = document.querySelector('#container');
    container.setAttribute('style', 'grid-template-columns: repeat('+ sideLength +', 1fr)');
    // CREATES CELLS
    for (let i = 0; i < sideLength ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function silverToggle(e) {
    if (colorChoice === 'default') {
        colorChoice = 'silver';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

newGrid.addEventListener('click', makeGrid);
silver.addEventListener('click', silverToggle);


// functionality to input color choice?