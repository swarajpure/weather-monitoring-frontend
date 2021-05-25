const displayPressure = document.getElementById('display-pressure');
const displayTemperature = document.getElementById('display-temperature');

const API_URL = 'https://api-mini-weather-station.herokuapp.com';

const getWeatherData = async () => {
  const weatherData = await fetch(API_URL);
  const weatherDataJson = await weatherData.json();
  return weatherDataJson;
}

const displayWeatherData = (weatherData) => {
  const pressure = weatherData.pressure;
  const temperature = weatherData.temperature;
  if (pressure) {
    displayPressure.innerHTML = `${pressure} mBar`;
  } 
  if (temperature) {
    displayTemperature.innerHTML = `${temperature}° Celcius`;
  }
}

window.setInterval(() => {
  getWeatherData().then(res => {
    displayWeatherData(res)
  })
}, 4000); 
