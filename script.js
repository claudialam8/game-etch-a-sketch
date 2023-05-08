const container = document.querySelector('#container');

function createGrids(num){
    for ( let i = 1; i <= num*num; i++){
        let grids = document.createElement('div');
        grids.classList.add('grids');
        container.appendChild(grids);
        grids.style.cssText = `width: calc(900px / ${num})`;
    }
}

//black
function mouseOverGrids(){
    const gridsSelects = document.querySelectorAll('.grids');
    gridsSelects.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        })
    });
}

const blackButton = document.querySelector('#blackButton');
//button
function changeBlackButton(){
    blackButton.addEventListener("click", () =>{
        mouseOverGrids();
    });
}

//find rgb randomly
function randomRGB(){
    let r = Math.floor(Math.random()*(255 + 1));
    let b = Math.floor(Math.random()*(255 + 1));
    let g = Math.floor(Math.random()*(255 + 1));
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

//rgb button
function mouseOverRGB(){
    const gridsSelects = document.querySelectorAll('.grids');
    gridsSelects.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            let rgbColor = randomRGB();
            grid.style.backgroundColor = `${rgbColor}`;
        })
    });
}

const rgbButton = document.querySelector('#rgbButton');
//button
function changeRGBButton(){
    rgbButton.addEventListener("click", () =>{
        mouseOverRGB();
    });
}

const change = document.querySelector('#change');

function changeGrids(){
    change.addEventListener("click",() =>{
        let userInput = prompt("Input a new number from 1 to 100:");
        
        if (userInput > 0 && userInput <= 100) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createGrids(userInput);   
            mouseOverGrids();
        }else {
            alert("Please input a valid number from 1 to 100.");
        };      
    });
}

function gameStart(){
    createGrids(16);
    mouseOverGrids();
    changeGrids();
    changeRGBButton();
    changeBlackButton();
}

gameStart();

