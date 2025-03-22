const container = document.querySelector(".container");
const divNo = 16

for (let i = 0; i < divNo; i++){
    const div = document.createElement("div");
    div.setAttribute('class', 'grid-div')
    container.appendChild(div);

}
