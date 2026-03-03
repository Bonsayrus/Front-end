// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function product(number1){
    return function(number2){
        return number1 * number2;
    }
}
const result = product(5)(2);
console.log(result); 