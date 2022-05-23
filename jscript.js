const divContainer = document.querySelector('.container-div');



// Loop for creating empty div grid
for (let grids = 1; grids < 257; grids++) {
    let gridDivs = document.createElement('div');
    gridDivs.className = `empty-grid`;
    // gridDivs.textContent = `div`
    gridDivs.style.border = '1px solid #3e3f40';
    divContainer.appendChild(gridDivs);
}

const gridButton = document.querySelector('.change-grid');
gridButton.addEventListener('click', () => {
    let userAnswer = prompt('How many squares per side?');
    
    if (userAnswer != ''){ 
        
        while(divContainer.firstChild){
            divContainer.removeChild(divContainer.firstChild);
        }

        for (let grids = 1; userAnswer > grids; grids++) {
            let gridDivs = document.createElement('div');
            gridDivs.className = 'empty-grid';
            gridDivs.style.border = '1px solid #3e3f40';
            divContainer.appendChild(gridDivs);
        }
    
    }

});

const emptyDivs = document.querySelectorAll('.empty-grid');

//Change background color when hovered
emptyDivs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        event.target.style.backgroundColor = '#a9aaab';
    });
});


