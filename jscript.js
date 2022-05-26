let divCol = document.querySelector('.column');
let boardButton = document.querySelector('.change-board');
let resetButton = document.querySelector('.reset-board');
let randomColor = document.querySelector('.random-color');
let toggleRandom = false;


randomColor.addEventListener('click', () => {
    toggleRandom = !toggleRandom
    
    if (toggleRandom === true){
        color = 'random';
        colorBox(color);
    }
    
    else {
        colorBox('white');
    }
});

resetButton.addEventListener('click',() => {
    wipeColor();
});

boardButton.addEventListener('click', () => {
    const answer = prompt('Size of grid');
    if (answer <= 100 && answer > 0){
        clearBoard();
        fillBoard(answer);
    }

    else {
        alert('Size less than 100 and greater than 0');
        clearBoard();
        fillBoard();
    }
});

function wipeColor() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {  
        box.style.backgroundColor = 'rgb(39, 39, 39)';
    });
}


function clearBoard() {
    while (divCol.firstChild) {
        divCol.removeChild(divCol.firstChild);
    };
}


function fillBoard(userInput = 16) {
    
    for (let columns = 0; columns < userInput; columns++) {
        let columns = document.createElement('div');
        columns.className = 'divcolumns';
        divCol.appendChild(columns);
        
    }
    
    let divRows = document.querySelectorAll('.divcolumns');
    
    divRows.forEach(i => {
        for (let div = 0; div < userInput; div++){
            let box = document.createElement('div');
            box.className = 'box';
            i.appendChild(box);

        }
    });

    colorBox('white');
    
}

function colorBox (color) {
    let boxes = document.querySelectorAll('.box');
    if (color === 'random'){
        boxes.forEach(box => {
            box.addEventListener('mouseenter', () =>{
                box.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            });
        });
        
    }
    
    else {    
        boxes.forEach(box => {
            box.addEventListener('mouseenter', () =>{
                box.style.backgroundColor = color;
            });
        });
    }
}


fillBoard();