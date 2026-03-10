// На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні 
// на другу – переадресовується на інший сайт (за раніше введеним посиланням).

let link = '';

const promtButton = document.createElement('button');
const linkButton = document.createElement('button');

promtButton.textContent = "Start";
linkButton.textContent = "Follow the link";

promtButton.addEventListener('click', () => {
    link = prompt("Enter the link:");
});

linkButton.addEventListener('click', () => {
    if (link) {
        window.location.href = link;
    }
});

promtButton.classList.add('button');

linkButton.classList.add('button');

document.body.appendChild(promtButton);
document.body.appendChild(linkButton);