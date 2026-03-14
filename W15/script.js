// Доробити TODO лист, в якому буде можливість:
// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.

const ULlist = document.querySelector('.js--todos-wrapper');
const input = document.querySelector('.js--form__input');
const form = document.querySelector('.js--form');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
    ULlist.innerHTML = '';
    todos.forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("todo-item"); 
        li.dataset.id = task.id;

        if (task.completed) {
            li.classList.add("todo-item--checked");
        }
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        
        const span = document.createElement("span");
        span.classList.add("todo-item__description");
        span.textContent = task.text; 
        
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("todo-item__delete");
        deleteBtn.textContent = "Видалити";
        
        li.append(checkbox, span, deleteBtn);
        ULlist.appendChild(li);
    });
}
renderTodos();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (value !== '') {
        const newObject = {
            id: Date.now(),
            text: value,
            completed: false
        };
        todos.push(newObject);
        saveTodos();
        renderTodos();
        input.value = '';
    }
});

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));

}

ULlist.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const li = e.target.closest('.todo-item');
        const id = Number(li.dataset.id);
    
        todos = todos.filter(task => task.id !== id);
        saveTodos();
        renderTodos();
    }   

    if (e.target.type === "checkbox") {
        const li = e.target.closest('.todo-item');
        const id = Number(li.dataset.id);

        const task = todos.find(task => task.id === id);
        task.completed = !task.completed;
        saveTodos();
        renderTodos();
    }
});

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue) || [];
        renderTodos();
    }
});