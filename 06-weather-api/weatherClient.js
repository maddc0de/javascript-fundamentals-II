const apiKey = require('./apiKey');

class WeatherClient {
  constructor() {
    this.key = apiKey;
  }

  // async fetchWeatherData(city) {
  //   const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.key}`;
  //   const response = await fetch(apiUrl);
  //   const data = await response.json();
    
  //   return data;
  // }

  fetchWeatherData(city) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.key}`;
    return fetch(apiUrl)
      .then(response => response.json());
  }
}

const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}:`)
  console.log(weatherData);
});