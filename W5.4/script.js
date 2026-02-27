const n = prompt('Enter a number N:');
const num = Number(n);

if (n !== null && Number.isInteger(num)) {
    
    if (num <= 1) {
        alert(`${num} is not a prime number.`);
    } else {
        let isPrime = true; 

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break; 
            }
        }

        if (isPrime) {
            alert(`${num} is a prime number.`);
        } else {
            alert(`${num} is not a prime number.`);
        }
    }

} else {
    alert('Please enter a valid integer.');
}