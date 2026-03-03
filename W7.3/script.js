// Цикл на кожній ітерації пропонує через prompt ввести число більше 
// 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше 
// ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше 
// ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль 
// останній введення користувача і завершує функцію.

(function printChoice() {
    let lastInput;

    for (let i = 0; i < 10; i++) {
        lastInput = prompt("Enter a number greater than 100");
        const num = Number(lastInput);

        if (num > 100 || Number.isNaN(num)) {
            console.log(lastInput); 
            return;
        }

        alert("Number is less than 100. Try again.");
    }

    console.log(lastInput);
})();