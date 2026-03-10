// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні 
// на другу – переадресовується на інший сайт (за раніше введеним посиланням).

let link = '';

const promptButton = document.createElement('button'); 
const linkButton = document.createElement('button');

promptButton.textContent = "Start";
linkButton.textContent = "Follow the link";

promptButton.addEventListener('click', () => {
    link = prompt("Enter the link:");
});

linkButton.addEventListener('click', () => {
    if (link !== null && link !== "") {
        window.location.href = link;
    }
});

promptButton.classList.add('button');
linkButton.classList.add('button');

document.body.appendChild(promptButton);
document.body.appendChild(linkButton)