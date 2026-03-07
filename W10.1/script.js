// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
    name: 'Vova',
    age: 18,
    country: 'Ukraine',
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
    }
}

console.log(user.getInfo());