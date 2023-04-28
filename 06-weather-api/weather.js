const WeatherClient = require('./weatherClient');

class Weather {
  constructor(client) {
    this.client = client;
    this.weatherData = null;
  }

  async load(city) {
    const data = await this.client.fetchWeatherData(city);
    this.weatherData = data;
  }

  getWeatherData() {
    return this.weatherData;
  }

}

// const client = new WeatherClient();
// const weather = new Weather(client);
// weather.load('Bristol');
// console.log(weather.getWeatherData());


// const fetchData = async () => {
//   await weather.load('Bristol');
//   console.log(weather.getWeatherData());
// }

// fetchData();


module.exports = Weather;