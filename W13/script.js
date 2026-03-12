// Доробити валідацію для надсилання повідомлення з використанням регулярних виразів:
// Поля:
// Name - обов'язкове текстове поле
// Message - текстове поле не менше 5 символів
// Phone number - обов'язкове поле типу phone. З початком на +380
// Email - email обов'язково повинен мати @ та крапку
// Після відправки, в консоль відображаємо дані, які ввів користувач.
// Під час помилки показувати її під полем.

const form = document.getElementById('contact-form');
const { name, message, phone, email } = form.elements;

function isValidName(name){
    return name.trim() !== '';
}

function isValidMessage(message){
    return /.{5,}/.test(message.trim());
}

function isValidPhone(phone){
    return /^\+380\d{9}$/.test(phone.trim());
}

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function showError(inputElement, errorMessage) {
    const span = document.createElement('span');
    span.textContent = errorMessage;
    span.className = 'error-msg';
    span.style.color = 'red';
    span.style.display = 'block';
    inputElement.insertAdjacentElement('afterend', span);
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-msg');
    errorElements.forEach(el => el.remove());
}

document.getElementById('contact-form').addEventListener("submit", function(e){
    e.preventDefault();
    clearErrors();

    let allOK = true;
    if(!isValidName(name.value)){
        showError(name, "Error name!")
        allOK = false;
    }

    if(!isValidMessage(message.value)){
        showError(message, "Error message!")
        allOK = false;
    }

    if(!isValidPhone(phone.value)){
        showError(phone, "Error phone!")
        allOK = false;
    }

    if(!isValidEmail(email.value)){
        showError(email, "Error email!")
        allOK = false;
    }

    if(!allOK){
        return;
    }

    console.log("Name: " + name.value);
    console.log("Message: " + message.value);
    console.log("Phone: " + phone.value);
    console.log("Email: " + email.value);
    this.reset();
})