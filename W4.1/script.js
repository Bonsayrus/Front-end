let number = prompt("Enter a three-digit number:");

if (number !== null && number.length === 3 && number >= 100 && number <= 999) {
    const hundreds = number[0];
    const tens = number[1];
    const ones = number[2];

    if (hundreds === tens && hundreds === ones) {
        alert("All digits are the same.");
    } 
    else if (hundreds === tens || hundreds === ones || tens === ones) {
        alert("Some digits are the same.");
    } 
    else {
        alert("All digits are different.");
    }
} else {
    alert("Invalid input! Please enter exactly three digits.");
}