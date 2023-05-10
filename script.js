// create grid of quare 16x16 div

// make container <div>
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add('container');
    div.setAttribute('class', 'container');
    body.appendChild(div);




// make multiple divs (16 * 16) using 2 loops for row and column respectively
const container = document.querySelector('.container');

function createGrid(rows, columns) {
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




createGrid(16, 16);