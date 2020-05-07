const newGrid = document.querySelector('#newGrid');
const silverButton = document.querySelector('#silver');
const randomButton = document.querySelector('#random');
const lightenButton = document.querySelector('#lighten');

let colorChoice = 'default';

function changeColor() {
    if (colorChoice === 'default') {
        resetCell(this);
        this.classList.add('painted');
    } else if (colorChoice === 'silver') {
        resetCell(this);
        this.classList.add('silver');
    } else if (colorChoice === 'lighten') {
        lighten(this);
    } else if (colorChoice === 'random') {
        resetCell(this);
        this.style.backgroundColor = randomColor();
    }
}

function clearGrid() {
    const container = document.querySelector('#container')
    container.textContent = '';
}

function resetCell(cell) {
    cell.classList = 'square';
    if (cell.style.backgroundColor) cell.style.backgroundColor = "";
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
        container.appendChild(div);
    }
    // SETS MOUSEOVER LISTENERS
    document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseover', changeColor));
}

function toggleSilverButton(e) {
    if (colorChoice === 'default') {
        colorChoice = 'silver';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

function toggleLightenButton(e) {
    if (colorChoice === 'default') {
        colorChoice = 'lighten';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

function lighten(cell) {
    if (!cell.style.opacity) {
        cell.style.opacity = 1;
    }
    if (cell.style.opacity > 0) {
        cell.style.opacity -= 0.1;
    }
}

function randomNumber(max) {
    let random = Math.floor(Math.random() * (max + 1));
    return random;
}

function randomColor() {
    const R = randomNumber(255);
    const G = randomNumber(255);
    const B = randomNumber(255);
    return `rgb(${R}, ${G}, ${B})`;
}

newGrid.addEventListener('click', makeGrid);
silverButton.addEventListener('click', toggleSilverButton);
lightenButton.addEventListener('click', toggleLightenButton);
randomButton.addEventListener('click', () => {  // TODO: MAKE THIS A TOGGLE SWITCH
    colorChoice = 'random';
});

// FUNCTIONALITY CHECKLIST
// * MAKE RANDOM BUTTON TOGGLE
// * GIVE RGB INPUT BOXES FOR PICKING COLOR
// * ADD DARKEN FEATURE

// ASSESS FUNCTIONALITY OF RANDOM NUMBER GENERATOR AT 0 AND 255
function checkHighLow(num) {
    let low = 0;
    let high = 0;
    for (let i = 0; i < num; i++) {
        let guess = randomNumber(255);
        if (guess === 0) {
            low++;
        } else if (guess === 255) {
            high++;
        }
    }
    console.log(`Low: ${low} High: ${high}`);
}