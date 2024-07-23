let currentColor = 'black';
let currentMode = 'color';
let size = 16;

const gridContainer = document.getElementById('grid-container');
const sizeInput = document.getElementById('grid-size');
const generateGridButton = document.querySelector('.generate-grid');

const colorButtons = document.querySelectorAll('.colors-btns .btn');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');


// Setting default size to 16
window.onload = () => {
    generateGrid(size);
}

// Function to generate the grid
function generateGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseover', changeColor);
        gridCell.addEventListener('mousedown', changeColor);
        gridContainer.appendChild(gridCell);
    }
}

// Event listeners below
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentColor = button.id;
        currentMode = 'color';
    });
});
eraserButton.addEventListener('click', () => {
    currentMode = 'eraser';
});
clearButton.addEventListener('click', () => {
    generateGrid(size);
});
generateGridButton.addEventListener('click', () => {
    const newSize = parseInt(sizeInput.value);
    if (!isNaN(newSize) && newSize > 0) {
        size = newSize;
    } else {
        size = 16;
    }
    generateGrid(size);
});

// Function to change color of grid cells
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = 'white';
    }
}

// Mouse down and up event listeners to enable drawing on mouse drag
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
