// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const contactBook = {
    contacts: [
      { name: "Dan", phoneNumber: "+380888343734", emailAddress: "dan@example.com" },
      { name: "John", phoneNumber: "+380754345872", emailAddress: "john@example.com" },
      { name: "Dima", phoneNumber: "+3804567324322", emailAddress: "dima@example.com" }
    ],

    findContact(searchName) {
        for (const contact of this.contacts) {
            if (contact.name === searchName) {
                return contact;
            }
        }
        return "Контакт не найден"; 
    },

    addContact(newName, newPhone, newEmail) {
        const newContact = { name: newName, phoneNumber: newPhone, emailAddress: newEmail };
        this.contacts.push(newContact);
    },
};

console.log(contactBook.findContact("John")); 
console.log(contactBook.findContact("Alex")); 


contactBook.addContact("Alice", "+380999999999", "alice@example.com");
console.log(contactBook.findContact("Alice")); 
