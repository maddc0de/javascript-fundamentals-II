const apiKey = require('./apiKey');
const city = 'Singapore';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// let weatherData = null;

// build http request with fetch
fetch(apiUrl)
  // anonymous callback function passed to .then will be executed once the response is received
  // will then use .json() to transform response received into a JS object
  .then((response) => response.json())
  // display the data containing the JS object by using console.log
  .then((weatherData) => {
    console.log(weatherData.main.temp);
    console.log(weatherData.weather[0].main);
  });


console.log('Requesting weather data');