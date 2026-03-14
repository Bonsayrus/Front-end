// Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const images = ["img/cat-1.png", "img/cat-2.png", "img/cat-3.png", "img/cat-4.png", "img/cat-5.png", "img/cat-6.png"];
const currentImg = document.getElementById('current-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const navigation = document.getElementById('navigation');
let index = 0;

function updateSlider(newIndex) {
    index = newIndex;
    currentImg.src = images[index];
    checkButtons(); 
}

function checkButtons(){
    prev.style.display = index === 0 ? 'none' : 'block';
    next.style.display = index === images.length - 1 ? 'none' : 'block';
}

prev.addEventListener('click', () =>{
    if(index > 0){
        updateSlider(index - 1);
    }
});

next.addEventListener('click', () =>{
    if(index !== images.length - 1){
        updateSlider(index + 1);
    }
});

for(let i = 0; i < images.length; i++){
    const dotBtn = document.createElement('button');
    dotBtn.classList.add('round-btn');
    navigation.appendChild(dotBtn);

    dotBtn.addEventListener('click', () =>{
        updateSlider(i);
    }); 
}
updateSlider(index);