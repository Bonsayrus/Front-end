// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
// Також потрібно додати кнопку оновлення данних.

const btn = document.getElementById('getWeather');
const input = document.getElementById('city'); 

async function fetchWeather() {
      const apiKey = 'e159c1ec851ce84f49608d151000433e';
      const cityName = input.value.trim();
   if (cityName === "") {
       alert("Please enter the name of the city!");
       return; 
   }
   try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
          alert("City not found. Please check the spelling.");
          return;
      }

      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temp').textContent = `${data.main.temp} °C`;
      document.getElementById('humidity').textContent = `${data.main.humidity} %`;

      input.value = "";
   } catch (error) {
        console.log("Error loading weather:", error);
    }
}

btn.addEventListener('click', fetchWeather);