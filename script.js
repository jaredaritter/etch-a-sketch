const newGrid = document.querySelector('#newGrid');
const silver = document.querySelector('#silver');
const lighten = document.querySelector('#lighten');
let colorChoice = 'default';
let opacity = 1;

function changeColor() {
    if (colorChoice === 'default') {
        this.classList.remove('lighten');
        this.classList.remove('silver');
        this.classList.add('painted');
    } else if (colorChoice === 'silver') {
        this.classList.remove('lighten');
        this.classList.remove('painted');
        this.classList.add('silver');
    } else {
        // this.classList.remove('painted');
        // this.classList.remove('silver');
        this.classList.add('lighten');
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

function toggleSilver(e) {
    if (colorChoice === 'default') {
        colorChoice = 'silver';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

function toggleLighten(e) {
    if (colorChoice === 'default') {
        colorChoice = 'lighten';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

newGrid.addEventListener('click', makeGrid);
silver.addEventListener('click', toggleSilver);
lighten.addEventListener('click', toggleLighten);


// functionality to input color choice?