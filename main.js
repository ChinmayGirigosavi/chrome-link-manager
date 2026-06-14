const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("addLink-btn");
const ulEl = document.getElementById("ul-el");

let myLinks = [];

addBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value);
    renderLinks();

    inputEl.value = ""; 
    myLinks = [];
})


function renderLinks() {
    for (let i = 0; i < myLinks.length; i++) {
        ulEl.innerHTML += `
            <li>
                <a href='${myLinks[i]}' target='_blank'> ${myLinks[i]} </a>
            </li>`;
    }
}


//https://youtu.be/jS4aFq5-91M?si=ot07AHN4N8oaZSTT&t=19056