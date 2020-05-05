const newGrid = document.querySelector('#newGrid');
const silver = document.querySelector('#silver');
const random = document.querySelector('#random');
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
    } else if (colorChoice === 'lighten') {
        // this.classList.remove('painted');
        // this.classList.remove('silver');
        this.classList.add('lighten');
    } else if (colorChoice === 'random') {
        this.classList.remove('lighten');
        this.classList.remove('painted');
        this.style.backgroundColor = randomColor();
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
        container.appendChild(div);
    }
    // SETS MOUSEOVER LISTENERS
    document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseover', changeColor));
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
silver.addEventListener('click', toggleSilver);
lighten.addEventListener('click', toggleLighten);
random.addEventListener('click', () => {  // TODO: MAKE THIS A TOGGLE SWITCH
    colorChoice = 'random';
});


// functionality to input color choice?

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