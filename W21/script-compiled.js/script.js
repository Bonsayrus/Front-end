"use strict";

// Переробити ToDo-list з використанням Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list, яке по кліку на завдання буде показувати вікно з його текстом.

var ULlist = $('.js--todos-wrapper');
var input = $('.js--form__input');
var form = $('.js--form');
var modalInput = $('.js--modal__input');
var modalSaveBtn = $('.btn-primary');
var modalCloseBtn = $('.btn-secondary');
var currentEditId = null;
var todos = JSON.parse(localStorage.getItem('todos')) || [];
function renderTodos() {
  ULlist.empty();
  todos.forEach(function (task) {
    var li = $("<li>");
    li.addClass("todo-item");
    li.data('id', task.id);
    if (task.completed) {
      li.addClass("todo-item--checked");
    }
    var checkbox = $("<input>");
    checkbox.attr("type", "checkbox");
    checkbox.prop("checked", task.completed);
    var span = $("<span>");
    span.addClass("todo-item__description");
    span.text(task.text);
    var deleteBtn = $("<button>");
    deleteBtn.addClass("todo-item__delete");
    deleteBtn.text("Видалити");
    li.append(checkbox, span, deleteBtn);
    ULlist.append(li);
  });
}
renderTodos();
form.on('submit', function (e) {
  e.preventDefault();
  var value = input.val().trim();
  if (value !== '') {
    var newObject = {
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
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
ULlist.on('click', function (e) {
  if (e.target.tagName === "BUTTON") {
    var li = $(e.target).closest('.todo-item');
    var id = Number(li.data('id'));
    todos = todos.filter(function (task) {
      return task.id !== id;
    });
    saveTodos();
    renderTodos();
  }
  if (e.target.type === "checkbox") {
    var _li = $(e.target).closest('.todo-item');
    var _id = Number(_li.data('id'));
    var task = todos.find(function (task) {
      return task.id === _id;
    });
    task.completed = !task.completed;
    saveTodos();
    renderTodos();
  }
  if (e.target.tagName === "SPAN") {
    var _li2 = $(e.target).closest('.todo-item');
    var _id2 = Number(_li2.data('id'));
    currentEditId = _id2;
    var _task = todos.find(function (task) {
      return task.id === _id2;
    });
    modalInput.val(_task.text);
    $('.modal').modal('show');
  }
});
modalSaveBtn.on('click', function () {
  var task = todos.find(function (task) {
    return task.id === currentEditId;
  });
  task.text = modalInput.val();
  saveTodos();
  renderTodos();
  $('.modal').modal('hide');
});
$(window).on('storage', function (e) {
  if (e.originalEvent.key === 'todos') {
    todos = JSON.parse(e.originalEvent.newValue) || [];
    renderTodos();
  }
});