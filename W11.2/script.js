// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

let randomNumber = Math.floor(Math.random() * 3) + 1;
let img = document.getElementById("myImage");

img.src = `png/${randomNumber}.png`;