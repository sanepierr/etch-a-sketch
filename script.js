const container = document.querySelector(".container");
const divNo = 16;

for (let i = 0; i < divNo; i++){
    for (let j = 0; j < divNo; j++){
        const div = document.createElement("div");
        div.setAttribute('class', 'gridDiv')
        container.appendChild(div);
    }
}
const divs = document.getElementsByClassName('gridDiv');
