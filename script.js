const container = document.querySelector(".container");
    const grid = document.createDocumentFragment(); // document fragment used to store created divs


function createDiv() // this function create div elements
{
    const div = document.createElement('div');
    div.setAttribute("class", "newDiv");
    return div;
}

for (let i = 0; i < 256; i++) {
    grid.appendChild(createDiv());
}

container.appendChild(grid);


