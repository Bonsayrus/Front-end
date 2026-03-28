// Переробити ToDo-list з використанням Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list, яке по кліку на завдання буде показувати вікно з його текстом.

const ULlist = $('.js--todos-wrapper');
const input = $('.js--form__input');
const form = $('.js--form');
const modalInput = $('.js--modal__input');
const modalSaveBtn = $('.btn-primary');
const modalCloseBtn = $('.btn-secondary');
let currentEditId = null;

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
    ULlist.empty();
    todos.forEach((task) => {
        const li = $("<li>");
        li.addClass("todo-item");
        li.data('id', task.id);

        if (task.completed) {
            li.addClass("todo-item--checked");
        }
        const checkbox = $("<input>");
        checkbox.attr("type", "checkbox");
        checkbox.prop("checked", task.completed);

        const span = $("<span>");
        span.addClass("todo-item__description");
        span.text(task.text);
        
        const deleteBtn = $("<button>");
        deleteBtn.addClass("todo-item__delete");
        deleteBtn.text("Видалити");
        
        li.append(checkbox, span, deleteBtn);
        ULlist.append(li);
    });
}
renderTodos();

form.on('submit', (e) => {
    e.preventDefault();
    const value = input.val().trim();

    if (value !== '') {
        const newObject = {
            id: Date.now(),
            text: value,
            completed: false
        };
        todos.push(newObject);
        saveTodos();
        renderTodos();
        input.val('');
    }
});

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));

}

ULlist.on('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const li = $(e.target).closest('.todo-item');
        const id = Number(li.data('id'));

        todos = todos.filter(task => task.id !== id);
        saveTodos();
        renderTodos();
    }   

    if (e.target.type === "checkbox") {
        const li = $(e.target).closest('.todo-item');
        const id = Number(li.data('id'));

        const task = todos.find(task => task.id === id);
        task.completed = !task.completed;
        saveTodos();
        renderTodos();
    }

    if (e.target.tagName === "SPAN") {
        const li = $(e.target).closest('.todo-item');
        const id = Number(li.data('id'));
        currentEditId = id;
        const task = todos.find(task => task.id === id);
        modalInput.val(task.text);
        $('.modal').modal('show');
    }
});

modalSaveBtn.on('click', () => {
    const task = todos.find(task => task.id === currentEditId);
    task.text = modalInput.val();
    saveTodos();
     renderTodos();
    $('.modal').modal('hide');
 });
 


$(window).on('storage', (e) => {
    if (e.originalEvent.key === 'todos') {
        todos = JSON.parse(e.originalEvent.newValue) || [];
        renderTodos();
    }
});
