// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

const textElement = document.getElementById('text');
const colorButton = document.getElementById('colorButton');

document.body.style.backgroundColor = "#B2EC5D";
textElement.style.color = "#257f9a";
colorButton.style.backgroundColor = "#257f9a";
colorButton.style.color = "#B2EC5D";

let isColorChanged = false;

colorButton.onclick = () => {
    if (isColorChanged === false) {
        textElement.style.color = "#B2EC5D";
        colorButton.style.backgroundColor = "#B2EC5D";
        colorButton.style.color = "#257f9a";
        document.body.style.backgroundColor = "#257f9a";
        isColorChanged = true;
    } else {
        textElement.style.color = "#257f9a";
        colorButton.style.backgroundColor = "#257f9a";
        colorButton.style.color = "#B2EC5D";
        document.body.style.backgroundColor = "#B2EC5D";
        isColorChanged = false;
    }
}