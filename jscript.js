const divContainer = document.querySelector('.container-div');
const gridButton = document.querySelector('.change-grid');
gridButton.addEventListener('click', changeGrid);

function defautGrid(){
    divContainer.style.gridTemplateRows = `repeat(16, 1fr)`;
    divContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
    // Loop for creating default empty div grid
    for (let grids = 1; grids < 257; grids++) {
        let gridDivs = document.createElement('div');
        gridDivs.className = `empty-grid`;
        gridDivs.style.border = '1px solid #3e3f40';
        divContainer.insertAdjacentElement('afterbegin', gridDivs);
    }

}

function changeGrid() {
    let userAnswer = prompt('How many squares per side?');
    
    if (userAnswer <= 100 && userAnswer >= 1 &&!isNaN(userAnswer)){
        divContainer.style.gridTemplateRows = `repeat(${userAnswer}, 1fr)`;
        divContainer.style.gridTemplateColumns = `repeat(${userAnswer}, 1fr)`;
        
        while(divContainer.firstChild){
            divContainer.removeChild(divContainer.firstChild);
        }
        
        userAnswer = userAnswer ** 2;
        for (let grids = 0; userAnswer > grids; grids++) {
            let gridDivs = document.createElement('div');
            gridDivs.className = 'empty-grid';
            gridDivs.style.border = '1px solid #3e3f40';
            divContainer.insertAdjacentElement('afterbegin', gridDivs);
        }
    }
    
    else {
        alert('Enter numbers only between 1-100');
    }
    
    
    // colorDivs();
    
}

// function colorDivs(){
    const emptyDivs = document.querySelectorAll('.empty-grid');
    //Change background color when hovered
    emptyDivs.forEach(div => {
        div.addEventListener('mouseenter', () => {
            event.target.style.backgroundColor = '#a9aaab';
        });
    });
    
// }
defautGrid();
// colorDivs();


