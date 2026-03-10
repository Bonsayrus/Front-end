// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань.
// Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, 
// який дозволить видаляти завдання при кліку на них.
// Покроковий план:
// Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
// Додайте обробник подій до списку завдань ul, використовуючи делегування.
// При кліку на будь-якій кнопці видалення, видаліть цей пункт.
// Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

const ULlist = document.getElementById('list');
const input = document.getElementById('input');
const addButton = document.getElementById('add-list');

function deleteItem(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }   
}
ULlist.addEventListener('click', deleteItem);

addButton.addEventListener('click', () => {
    const value = input.value.trim();
    if (value !== '') {
        const li = document.createElement("li");
        li.textContent = value + " "; 
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        li.appendChild(deleteBtn);
        ULlist.appendChild(li);
        input.value = '';
    }
});