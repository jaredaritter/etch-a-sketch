const container = document.querySelector('#container');

for (let i = 0; i < 64; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', changeColor);
    container.appendChild(div);
}

function changeColor() {
    this.style.backgroundColor = 'red';
}