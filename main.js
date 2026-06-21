let myLinks = [];
const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("addLink-btn");
const deleteBtn = document.getElementById("delete-btn"); 
const ulEl = document.getElementById("ul-el");

// get value from localStorage to render on screen
const linksFromLocalStorage = JSON.parse(localStorage.getItem("myLinks"));
console.log(typeof linksFromLocalStorage);

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage;
    render();
}

function render() {
    for (let i = 0; i < myLinks.length; i ++) {
        ulEl.innerHTML += `
            <li>
                <a href='${myLinks[i]}' target='_blank'> ${myLinks[i]} </a>
            </li>`;
    }
}


//Add link function
addBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value);
    inputEl.value = ""; 
    
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    render();

    //to verify that the localStorage works
    console.log(localStorage.getItem("myLinks"));
})


//delete all link function
deleteBtn.addEventListener("click", function() {
    myLinks = [];
    localStorage.clear();
    render();
})


//https://youtu.be/jS4aFq5-91M?si=ot07AHN4N8oaZSTT&t=19056