const container = document.querySelector(".container");

function builder(divNo){
    container.innerHTML = '';

    let squareSize = 800 / divNo;
    for (let i = 0; i < divNo; i++) {
        for (let j = 0; j < divNo; j++) {
            const div = document.createElement("div");
            div.setAttribute('class', 'gridDiv');
            div.style.height = `${squareSize}px`;
            div.style.width = `${squareSize}px`;
            container.appendChild(div);
        }
    }

    const divs = document.getElementsByClassName('gridDiv');
    for (const div of divs) {
        div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'black';
        });
    }
}

let divNo;

do {
    divNo = Number(prompt('Enter grid size:'));
} while (divNo <= 0 || divNo > 100); 

builder(divNo);

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    builder(divNo);
});

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value > 0 && value <= 100) {
        divNo = Number(value);
        builder(divNo);
    }
});
