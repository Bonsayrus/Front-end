const n = prompt('Enter a number N:');
const num = Number(n);

if (n !== null && Number.isInteger(num)) {
    let result = '';
    for (let i = 1; i <= 100 && (i * i) <= num; i++) {
        result += i + ' ';
    }
    
    alert(`Square of numbers (1, 2, ... 100) not exceeding ${num}: ${result}`);
} else {
    alert('Please enter a valid integer.');
}