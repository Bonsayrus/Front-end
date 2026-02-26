const year = prompt("Your year of birth?");
const city = prompt("What city do you live in?");
const sport = prompt("Your favorite sport?");

const age = `Your age is ${2026 - year}`;
let cityInfo = '';
if (city === "kyiv") {
    cityInfo = "You live in the capital of Ukraine!";
}
else if (city === "washington") {
    cityInfo = "You live in the capital of USA!";
}
else if (city === "london") {
    cityInfo = "You live in the capital of Great Britain!";
}
else {
    cityInfo = `You live in ${city}`;
}

let sportInfo = '';
if (sport === "football") {
    sportInfo = "Cool! Do you want to become like Andriy Shevchenko?";
}
else if (sport === "basketball") {
    sportInfo = "Cool! Do you want to become like Michael Jordan?";
}
else if (sport === "tennis") {
    sportInfo = "Cool! Do you want to become like Roger Federer?";
}
else {
    sportInfo = `Cool! Your favorite sport is ${sport}`;
}

alert(`
    ${age}
    ${cityInfo}
    ${sportInfo}
    `);

if (year === null) {
    alert("You didn't enter your year of birth.");
}
if (city === null) {
    alert("You didn't enter your city.");
}
if (sport === null) {
    alert("You didn't enter your favorite sport.");
}