const container = document.querySelector(".container");
const etchSketch = document.querySelector(".etchSketch");


    const grid = document.createDocumentFragment(); // document fragment used to store created divs


function createDiv() // this function create div elements
{
    const div = document.createElement('div');  
    div.setAttribute("class", "newDiv");   
    div.addEventListener("mouseover", () => { div.setAttribute("class", "newDivHover") });  // this makes square divs change color when hovered
    return div;
}

//function changeSize(amount)   // this function changes height and width of created squares depending on chosen amount
//{    
 //   const newDivWidth = ((1/amount)*100);    
 //   div.setAttribute(`width`, ` ${newDivWidth}%`);    
 //   div.setAttribute(`height`, ` ${newDivWidth}%`);
//}


//for (let i = 0; i < 256; i++) {       //this loop appends particular amount of square divs to grid documentFragment 
//    grid.appendChild(createDiv());
//}



function Sketch() 
{
    const amount = parseInt(prompt("How many","100"),);
    const mnoznik = ( (1/amount) * 100);
        function createDiv() // this function create div elements
    {
            const div = document.createElement('div');  
                div.setAttribute("class", "newDiv"); 
                div.setAttribute("style", `width:${(mnoznik + '%')}`);
                div.setAttribute("style", `padding-top:${(mnoznik + '%')}`);
                div.setAttribute("style", `flex-basis:${(mnoznik + '%')}`);
                div.addEventListener("mouseover", () => { div.setAttribute("class", "newDivHover") });  // this makes square divs change color when hovered

            return div;
    }

    for (let i = 0; i < (amount*amount); i++)
        {
            grid.appendChild(createDiv());

        }
        
        
    etchSketch.appendChild(grid);
}
Sketch()

//document.getElementsByClassName('newDiv').style.width = `${( ( 1 / amount ) * 100)}` + "%";
//document.getElementsByClassName('newDiv').style.paddingTop = `${( ( 1 / amount ) * 100)}` + "%";
//document.getElementsByClassName('newDiv').style.flexBasis = `${( ( 1 / amount ) * 100)}` + "%";

//document.getElementsByClassName('newDivHover').style.width = `${( ( 1 / amount ) * 100)}` + "%";
//document.getElementsByClassName('newDivHover').style.paddingTop = `${( ( 1 / amount ) * 100)}` + "%";
//document.getElementsByClassName('newDiv').style.flexBasis = `${( ( 1 / amount ) * 100)}` + "%";




//div.setAttribute(`width`, ` ${ ( ( 1 / amount ) * 100) }%`);
//                div.setAttribute(`padding-top`, ` ${ ( ( 1 / amount ) * 100) }%`);
//                div.setAttribute(`flex-basis`, ` ${ ( ( 1 / amount ) * 100) }%`);  