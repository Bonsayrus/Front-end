// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

let table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
    let row = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);