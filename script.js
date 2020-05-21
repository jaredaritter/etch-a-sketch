// FUTURE FEATURE CHECKLIST
// * GIVE RGB INPUT BOXES FOR PICKING COLOR
// * CONSOLIDATE BUTTON TOGGLE FUNCTION
// * TOGGLE LIGHTEN/DARKEN BUTTON LOGIC RETURNS TO DEFAULT. CHANGE TO LAST COLORCHOICE
// * REORGANIZE FUNCTIONS FOR CLEARER GROUPING

const newGrid = document.querySelector('#newGrid');
const silverButton = document.querySelector('#silver');
const randomButton = document.querySelector('#random');
const lightenButton = document.querySelector('#lighten');
const darkenButton = document.querySelector('#darken');

let colorChoice = 'default';

newGrid.addEventListener('click', makeGrid);
silverButton.addEventListener('click', toggleSilverButton);
randomButton.addEventListener('click', toggleRandomButton);
lightenButton.addEventListener('click', toggleLightenButton);
darkenButton.addEventListener('click', toggleDarkenButton);

makeGrid();

// MAIN FUNCTIONS AND LOGIC -------------------------------------------------------------------------------

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

function changeColor() {
    if (colorChoice === 'default') {
        resetCell(this);
        this.classList.add('default');
    } else if (colorChoice === 'silver') {
        resetCell(this);
        this.classList.add('silver');
    } else if (colorChoice === 'random') {
        resetCell(this);
        this.style.backgroundColor = randomColor();
    } else if (colorChoice === 'lighten') {
        lighten(this);
    } else if (colorChoice === 'darken') {
        darken(this);
    }
}

// HELPER FUNCTIONS --------------------------------------------------------------------------------------------

function clearGrid() {
    const container = document.querySelector('#container')
    container.textContent = '';
}

function resetCell(cell) {
    cell.classList = 'square';
    if (cell.style.backgroundColor) cell.style.backgroundColor = "";
}

function getLength() {
    let sideLength = Number(prompt('How long should each side be (0 - 128)?'));
    while (isNaN(sideLength) || sideLength < 0 || sideLength > 128) {
        sideLength = Number(prompt('How long should each side be (0 - 128)?'));
    }
    return Math.floor(sideLength);
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

// TOGGLE BUTTONS -------------------------------------------------------------------------------------------

function toggleSilverButton(e) {
    if (colorChoice === 'default') {
        colorChoice = 'silver';
        e.target.style.backgroundColor = 'lightskyblue';
    } else {
        colorChoice = 'default';
        e.target.style.backgroundColor = 'buttonface';
    }
}

function toggleRandomButton(e) {
    if (colorChoice === 'default') {
        colorChoice = 'random';
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

function toggleDarkenButton(e) {
    if (colorChoice === 'default') {
        colorChoice = 'darken';
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
        cell.style.opacity = Number(cell.style.opacity) - 0.1;
    }
}

function darken(cell) {
    if (!cell.style.opacity) {
        cell.style.opacity = 1;
    }
    if (cell.style.opacity < 1) {
        cell.style.opacity = Number(cell.style.opacity) + 0.1;
    }
}

// ASSESS FUNCTIONALITY OF RANDOM NUMBER GENERATOR AT 0 AND 255 ----------------------------------------------------

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