const container = document.querySelector(".container");
const etchSketch = document.querySelector(".etchSketch");
const newDiv = document.querySelector(".newDiv");
    const grid = document.createDocumentFragment(); // document fragment used to store created divs


function createDiv() // this function create div elements
{
    const div = document.createElement('div');
    div.setAttribute("class", "newDiv");
    return div;
}

for (let i = 0; i < 256; i++) {       //this loop appends particular amount of square divs to grid documentFragment 
    grid.appendChild(createDiv());
}




etchSketch.appendChild(grid);


