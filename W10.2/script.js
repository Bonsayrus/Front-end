// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, 
// в якому лише парні числа з оригінального масиву.

// const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArry = arry.reduce((acc, el) => {
//     if (el % 2 === 0) {
//         acc.push(el);
//     }
//     return acc;
// }, []);

// console.log(arry);
// console.log(newArry);

const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArry = arry.filter(el => el % 2 === 0);

console.log(arry);
console.log(newArry);
