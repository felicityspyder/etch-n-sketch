
const body = document.querySelector('body');


// add button to change grid size
const btn = document.createElement('button');
btn.setAttribute('class', 'reSize');
btn.textContent = 'change grid size';
body.appendChild(btn);

// make container <div>
const div = document.createElement('div');
div.classList.add('container');
div.setAttribute('class', 'container');
body.appendChild(div);

let gridSize = 16; // initial grid size



// make multiple divs (16 * 16) using 2 loops for row and column respectively
const container = document.querySelector('.container');

function createGrid(rows, columns) {
    // remove previous grid
    container.innerHTML = '';

    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('gridRow');
        container.appendChild(row);

        for(let j = 0; j < columns; j++) {
            const item = document.createElement('div');
            item.classList.add('gridItem');
            item.id = (i * columns) + (j + 1); // gives seperate #id for each item
            row.appendChild(item);
       

            // "hover" effect so gridItem changes color
            item.addEventListener('mousemove', (event) => {
                event.target.style.backgroundColor = 'black';
            });
        };     
    }
}

// create initial grid
createGrid(gridSize, gridSize);

// Button click event
btn.addEventListener('click', () => {
    let newGridSize = prompt('Please enter a new grid size between 16 - 100');
    
    // validate the new grid size
    if (newGridSize >= 16 && newGridSize <= 100) {
        gridSize = newGridSize;
        createGrid(gridSize, gridSize);
    } else {
        alert('Invalid grid size! Please enter a value between 16 and 100.');
    }
     
});

