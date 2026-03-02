// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    let sum = 0;
    let count = 0;

    for(let i=0; i < array.length; i++){
        let el = array[i];

        if(typeof el === 'number'){
            sum += el;
            count++;
        }
    }

    if (count === 0) {
        return 0; 
    }
    return sum / count;
}
const result = foo(array);
console.log(result);