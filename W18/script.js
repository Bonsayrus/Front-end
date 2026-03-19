// Реалізувати таймер відліку:
// Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його

let time = prompt("Enter the countdown time (00:00)");

const parts = time.split(":");

let minutes = parseInt(parts[0]); 
let seconds = parseInt(parts[1]);

let totalSeconds = (minutes * 60) + seconds;

const t = document.createElement('h1');
t.textContent = time;
document.body.appendChild(t);
if(totalSeconds > 0){const interval = setInterval(() => {
   totalSeconds--;

   let displayMinutes = Math.floor(totalSeconds / 60);
   let displaySeconds = totalSeconds % 60;
   t.textContent = `${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
   if(totalSeconds === 0) clearInterval(interval);
}, 1000);} else{
   t.textContent = "00:00";
}
