let size = 16;

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }
});
