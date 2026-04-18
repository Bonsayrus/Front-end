// За допомогою Node.js та Express створити API для TODO списку, яке буде включати в себе:

// Create, Read, Update, Delete - методи
// Налаштування CORS
// Використання mongoDB
// Окрему папку з Front-end частиною, для роботи з API

const ULlist = $('.js--todos-wrapper');
const input = $('.js--form__input');
const form = $('.js--form');
const modalInput = $('.js--modal__input');
const modalSaveBtn = $('.btn-primary');
let currentEditId = null;

const API_URL = 'http://localhost:3000/api/todos';

async function loadTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();
        renderTodos(todos);
    } catch (error) {
        console.error("Ошибка загрузки задач:", error);
    }
}

function renderTodos(todos) {
    ULlist.empty();
    todos.forEach((task) => {
        const li = $("<li>").addClass("todo-item")
        li.data('id', task._id); 

        if (task.completed) {
            li.addClass("todo-item--checked");
        }

        const checkbox = $("<input>").attr("type", "checkbox").prop("checked", task.completed);
        const span = $("<span>").addClass("todo-item__description").text(task.title); 
        const deleteBtn = $("<button>").addClass("todo-item__delete").text("Видалити");
        
        li.append(checkbox, span, deleteBtn);
        ULlist.append(li);
    });
}

form.on('submit', async (e) => {
    e.preventDefault();
    const value = input.val().trim();

    if (value !== '') {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: value }) 
            });
            
            input.val('');
            loadTodos();
        } catch (error) {
            console.error("Ошибка создания:", error);
        }
    }
});

ULlist.on('click', async (e) => {
    const li = $(e.target).closest('.todo-item');
    const id = li.data('id'); 

    // УДАЛЕНИЕ (DELETE)
    if (e.target.tagName === "BUTTON") {
        try {
            await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            loadTodos();
        } catch (error) {
            console.error("Ошибка удаления:", error);
        }
    }   

    if (e.target.type === "checkbox") {
        const isCompleted = $(e.target).prop("checked");
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: isCompleted })
            });
            loadTodos();
        } catch (error) {
            console.error("Ошибка обновления статуса:", error);
        }
    }

    if (e.target.tagName === "SPAN") {
        currentEditId = id;
        const text = $(e.target).text();
        modalInput.val(text);
        $('.modal').modal('show');
    }
});

modalSaveBtn.on('click', async () => {
    const newValue = modalInput.val().trim();
    if (!newValue) return;

    try {
        await fetch(`${API_URL}/${currentEditId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newValue })
        });
        $('.modal').modal('hide');
        loadTodos();
    } catch (error) {
         console.error("Ошибка обновления текста:", error);
    }
});

loadTodos();
