// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const message = prompt('Enter yor strinng');
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    let unification = '';
    for(let i = 0; i < string.length; i++){
        let letter = string[i];
        if(!arr.includes(letter)){
          unification += letter;  
    }
 }
 return unification;
}

const result = foo(message, chars);
alert(result);