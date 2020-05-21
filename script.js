// FUTURE FEATURE CHECKLIST
// * GIVE RGB INPUT BOXES FOR PICKING COLOR


// SET EVENT LISTENERING FOR BUTTONS AND INITIALIZE GRID -----------------------------------------------

document.querySelector('#newGrid').addEventListener('click', makeGrid);
document.querySelectorAll('.option').forEach(button => button.addEventListener('click', toggleButton));

let colorChoice = 'default';
makeGrid();

// MAIN FUNCTION AND LOGIC -------------------------------------------------------------------------------
    // DYNAMIC SETTING OF NUMBER OF COLUMNS TO MAINTAIN EQUAL HEIGHT AND WIDTH
    // CREATES CELLS
    // SETS MOUSEOVER LISTENERS

function makeGrid() {
    clearGrid();
    const sideLength = getLength();
    const container = document.querySelector('#container');
    container.setAttribute('style', 'grid-template-columns: repeat('+ sideLength +', 1fr)');
    for (let i = 0; i < sideLength ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseover', changeColor));
}

// MOUSEOVER FUNCTION ----------------------------------------------------------------------------------------

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

// CLICKED BUTTON FUNCTIONS -------------------------------------------------------------------------------------------

function toggleButton(e) {
    console.log(e);
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(button => {
        button.style.backgroundColor = 'buttonface';
    })
    colorChoice = e.target.id;
    e.target.style.backgroundColor = 'lightskyblue';
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