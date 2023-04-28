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
      .then(response => response.json())
      .then(data => {
        const weatherData = {
          name: data.name,
          description: data.weather[0].description,
          temperature: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max
        }
      return weatherData;
      })
  }
}



// const client = new WeatherClient();

// client.fetchWeatherData('Singapore').then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(weatherData);
// });

// output of above code
// Weather data for Singapore:
// {
//   coord: { lon: 103.8501, lat: 1.2897 },
//   weather: [
//     {
//       id: 803,
//       main: 'Clouds',
//       description: 'broken clouds',
//       icon: '04n'
//     }
//   ],
//   base: 'stations',
//   main: {
//     temp: 27.54,
//     feels_like: 31.23,
//     temp_min: 26.72,
//     temp_max: 28.41,
//     pressure: 1007,
//     humidity: 82
//   },
//   visibility: 10000,
//   wind: { speed: 1.54, deg: 20 },
//   clouds: { all: 75 },
//   dt: 1682684451,
//   sys: {
//     type: 1,
//     id: 9470,
//     country: 'SG',
//     sunrise: 1682636241,
//     sunset: 1682680006
//   },
//   timezone: 28800,
//   id: 1880252,
//   name: 'Singapore',
//   cod: 200
// }

module.exports = WeatherClient;