//this script serves up the appropriate content depending on which province the user decides to browse

//finds all the tags I'd want to change with this script
let dynamicElementsp = [];
function findAllTags (){
    dynamicElementsp[0] = document.getElementById("provinceName");
    dynamicElementsp[1] = document.getElementById("expensiveRestaurants");
    dynamicElementsp[2] = document.getElementById("midrangeRestaurants");
    dynamicElementsp[3] = document.getElementById("cheapRestaurants");
}

//this function will be triggered onclick --- it takes the elements id as param to know what content to serve
function newContentOnClick(event) {
    event = event || window.event; //IE
    let target = event.target || event.srcElement; //IE
    let id = target.id;
    alert("you clicked on " + id);
}

//finds all links that will change content and adds an onclick event to them
function addOnclickForEach(item, index, arr){
    item.setAttribute("onclick","newContentOnClick(event)");
    //_*_*_*_*_*_*__*_ this next line is just to make sure that everything works
    console.log(item.id);
}
let contentLinks = [];
function findAllLinks() {
    let contentLinks = Array.from(document.getElementById("provinceNav").children);
    contentLinks.forEach(addOnclickForEach);
}


//waits till the document is loaded so I can find elements by id
window.onload = function() {
    findAllTags();
    findAllLinks();
};