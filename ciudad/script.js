async function fetchWeather() {
    const apiKey = 'bbb750d91d6189e9ede1cb9d0d8fae94'; 
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === 200) {
        const temperature = data.main.temp;
        document.getElementById('weatherInfo').innerText = `La temperatura en ${city} es ${temperature}°C`;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error al obtener el clima:', error);
      document.getElementById('weatherInfo').innerText = 'No se pudo obtener la información del clima para esa ciudad';
    }
  }