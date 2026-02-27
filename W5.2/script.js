const currency = prompt('You want to know USD or EUR?');
let USD = '';
let EUR = '';

switch (currency) {
    case 'USD':
    case 'usd':
        for (let i = 10; i <= 100; i += 10){
            let uah = 43.27;
            USD += i + ' USD = ' + (i * uah) + ' UAH\n';
        }
        alert(USD);
        break;
    case 'EUR':
    case 'eur':
        for (let i = 10; i <= 100; i += 10){
            let uah = 50.3; 
            EUR += i + ' EUR = ' + (i * uah) + ' UAH\n';
        }
        alert(EUR);
        break;
    default:
        alert('Invalid currency selection');
}

